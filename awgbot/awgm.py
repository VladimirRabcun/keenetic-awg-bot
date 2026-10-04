import json
import threading
import re
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

    def call(self, path, method='GET', params=None, body=None):
        url = self.c.url + '/api' + path
        if params:
            url += '?' + urlencode(params)
        payload = json.dumps(body if body is not None else {}).encode('utf-8') if method in ('POST', 'PUT') else None
        req = Request(url, data=payload, method=method,
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

    def servers(self):
        value = self.call('/servers/all')
        if not isinstance(value, dict) or not isinstance(value.get('servers'), list):
            raise APIError('Неожиданный формат /servers/all')
        managed = value.get('managed') or []
        if not isinstance(managed, list):
            raise APIError('Раздел серверов требует AWG Manager v2.19.12 или новее')
        stats = value.get('managedStats') or {}
        if not isinstance(stats, dict):
            raise APIError('Неожиданный формат managedStats')
        rows = []
        for kind, items in (('system', value['servers']), ('managed', managed)):
            for item in items:
                if not isinstance(item, dict):
                    raise APIError('Неожиданный формат сервера')
                sid = item.get('interfaceName') or item.get('id')
                if not isinstance(sid, str) or not re.fullmatch(r'Wireguard\d+', sid):
                    raise APIError('Некорректный ID сервера')
                row = dict(item, id=sid, kind=kind)
                if kind == 'managed':
                    live = stats.get(sid) or {}
                    row['status'] = live.get('status', 'unknown')
                    row['enabledKnown'] = type(live.get('enabled')) is bool and live.get('enabledKnown') is True
                    row['enabled'] = live.get('enabled')
                    metrics = {p.get('publicKey'): p for p in live.get('peers', []) if isinstance(p, dict)}
                    row['peers'] = [dict(p, **{k: v for k, v in metrics.get(p.get('publicKey'), {}).items() if k in ('rxBytes', 'txBytes', 'lastHandshake', 'online', 'endpoint')}) for p in item.get('peers', [])]
                rows.append(redact(row))
        return rows

    def server_action(self, sid, action):
        if action not in ('start', 'stop', 'restart'):
            raise APIError('Недопустимое действие сервера')
        with self.lock:
            server = next((s for s in self.servers() if s['id'] == sid), None)
            if server is None:
                raise APIError('Сервер не найден')
            operation = 'restart' if action == 'restart' else 'enabled'
            body = None if action == 'restart' else {'enabled': action == 'start'}
            if server['kind'] == 'managed':
                result = self.call('/managed-servers/' + sid + '/' + operation, 'POST', body=body)
            else:
                result = self.call('/servers/' + operation, 'POST', {'name': sid}, body=body)
            return redact(result)

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
