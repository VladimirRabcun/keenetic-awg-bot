import json
import threading
from urllib.request import Request, build_opener, HTTPRedirectHandler
from urllib.error import HTTPError, URLError
from urllib.parse import urlencode

class APIError(Exception):
    pass

class NoRedirect(HTTPRedirectHandler):
    def redirect_request(self, *args, **kwargs):
        return None

def redact(value):
    if isinstance(value, dict):
        return {k: ('[REDACTED]' if any(s in k.lower().replace('_', '') for s in ('privatekey', 'presharedkey', 'password', 'token', 'apikey', 'secret', 'content', 'config')) else redact(v)) for k, v in value.items()}
    if isinstance(value, list):
        return [redact(v) for v in value]
    return value

class AWGM:
    def __init__(self, config):
        self.c = config
        self.lock = threading.Lock()

    def call(self, path, method='GET', params=None):
        url = self.c.url + '/api' + path
        if params:
            url += '?' + urlencode(params)
        req = Request(url, data=b'{}' if method == 'POST' else None, method=method,
                      headers={'Authorization': 'Bearer ' + self.c.key, 'Content-Type': 'application/json'})
        try:
            with build_opener(NoRedirect).open(req, timeout=65) as response:
                raw = response.read(2 * 1024 * 1024 + 1)
            if len(raw) > 2 * 1024 * 1024:
                raise APIError('Ответ API слишком большой')
            result = json.loads(raw)
        except HTTPError as e:
            raise APIError(f'AWG Manager HTTP {e.code}; проверьте версию и API-ключ') from None
        except (URLError, TimeoutError, OSError, ValueError):
            raise APIError('AWG Manager недоступен или вернул неверный JSON') from None
        if isinstance(result, dict):
            if result.get('success') is False or result.get('error'):
                raise APIError('Ошибка AWG Manager: ' + str(result.get('code', 'API_ERROR')))
            if result.get('success') is True and 'data' in result:
                return result['data']
        return result

    def tunnels(self):
        value = self.call('/tunnels/list')
        if not isinstance(value, list) or any(not isinstance(t, dict) or not isinstance(t.get('id'), str) for t in value):
            raise APIError('Неожиданный формат /tunnels/list')
        return value

    def tunnel(self, tid):
        # Never fetch /tunnels/get: its configuration may contain secrets.
        t = next((t for t in self.tunnels() if t['id'] == tid), None)
        if t is None:
            raise APIError('Туннель не найден')
        return redact(t)

    def action(self, tid, action):
        with self.lock:
            self.tunnel(tid)
            if action == 'connectivity':
                return redact(self.call('/test/connectivity', params={'id': tid}))
            if action not in ('start', 'stop', 'restart'):
                raise APIError('Недопустимое действие')
            self.call('/control/' + action, 'POST', {'id': tid})
            return self.tunnel(tid)
