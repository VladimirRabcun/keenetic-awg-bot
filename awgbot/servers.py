"""AWGM v2.19.12 server/peer operations, with fixed routes and payloads."""
import base64
import ipaddress
from urllib.parse import quote
from .awgm import APIError, redact


def payload(data, fields):
    if not isinstance(data, dict) or set(data) - set(fields):
        raise APIError('Неизвестные поля формы')
    for key, value in data.items():
        expected = fields[key]
        if type(value) is not expected or isinstance(value, str) and len(value) > 2048:
            raise APIError('Некорректное поле: ' + key)
    return dict(data)


class Servers:
    def __init__(self, api):
        self.api = api

    def find(self, sid):
        row = next((s for s in self.api.servers() if s['id'] == sid), None)
        if row is None:
            raise APIError('Сервер не найден')
        return row

    def base(self, row):
        return ('/managed-servers/' if row['kind'] == 'managed' else '/servers/') + row['id']

    def peer(self, row, public):
        try:
            valid = isinstance(public, str) and len(public) == 44 and len(base64.b64decode(public, validate=True)) == 32
        except ValueError:
            valid = False
        if not valid or not any(p.get('publicKey') == public for p in row.get('peers', [])):
            raise APIError('Клиент не найден')
        return self.base(row) + '/peers/' + quote(public, safe='')

    def dispatch(self, op, data):
        reads = {'server-suggest': '/managed-servers/suggest-address',
                 'server-policies': '/managed-servers/policies',
                 'server-lans': '/managed-servers/lan-segments'}
        if op in reads:
            return redact(self.api.call(reads[op]))
        with self.api.lock:
            if op == 'server-export':
                self.confirm(data)
                result = self.api.call('/managed/export')
                if not isinstance(result, dict) or result.get('type') != 'awg-manager-managed-server-backup':
                    raise APIError('Некорректная резервная копия')
                return result  # Explicit administrator export, contains private keys.
            if op == 'server-import':
                self.confirm(data)
                backup = data.get('backup')
                if not isinstance(backup, dict) or backup.get('type') != 'awg-manager-managed-server-backup' or type(backup.get('version')) is not int or backup['version'] != 1 or not isinstance(backup.get('managedServers'), list) or not 1 <= len(backup['managedServers']) <= 128 or any(not isinstance(s, dict) for s in backup['managedServers']):
                    raise APIError('Выберите резервную копию серверов AWGM версии 1')
                options = payload(data.get('options', {'allowRenumber': False}), {'allowRenumber': bool})
                result = self.api.call('/managed/import', 'POST', body={'type': backup['type'], 'version': 1, 'managedServers': backup['managedServers'], 'options': options})
                return {'outcomes': [dict(name=o.get('name'), newName=o.get('newName'), action=o.get('action'), addedPeers=o.get('addedPeers'), error=bool(o.get('error')), conflicts=o.get('conflicts', [])) for o in result.get('outcomes', [])]}
            if op == 'server-create':
                body = self.server_fields(data.get('values'), True)
                return redact(self.api.call('/managed-servers', 'POST', body=body))
            row = self.find(str(data.get('id', '')))
            base = self.base(row)
            if op == 'server-ingress':
                settings = self.api.call('/singbox/router/settings')
                refs = settings.get('ingressInterfaces', []) if isinstance(settings, dict) else None
                if not isinstance(refs, list) or any(not isinstance(r, str) for r in refs):
                    raise APIError('Неожиданный формат настроек sing-box')
                ref = ('managed:' if row['kind'] == 'managed' else 'iface:') + row['id']
                if 'values' not in data:
                    return {'enabled': ref in refs}
                body = payload(data['values'], {'enabled': bool})
                if 'enabled' not in body:
                    raise APIError('Укажите enabled')
                self.confirm(data)
                next_refs = list(dict.fromkeys(refs + [ref])) if body['enabled'] else [r for r in refs if r != ref]
                self.api.call('/singbox/router/settings', 'PUT', body={**settings, 'ingressInterfaces': next_refs})
                return {'enabled': body['enabled']}
            if op == 'server-edit':
                if row['kind'] != 'managed':
                    raise APIError('Параметры системного интерфейса меняются в Keenetic; здесь доступны endpoint, NAT, политика и клиенты')
                return redact(self.api.call(base, 'PUT', body=self.server_fields(data.get('values'), False)))
            if op == 'server-delete':
                if row['kind'] != 'managed':
                    raise APIError('Системный сервер удаляется через Keenetic')
                self.confirm(data)
                return redact(self.api.call(base, 'DELETE'))
            if op in ('server-nat', 'server-policy', 'server-endpoint', 'server-lan', 'server-asc'):
                if op == 'server-nat':
                    body = payload(data.get('values'), {'mode': str})
                    if body.get('mode') not in ('full', 'internet-only', 'none'):
                        raise APIError('Неверный режим NAT')
                    path = '/nat'
                elif op == 'server-policy':
                    body = payload(data.get('values'), {'policy': str})
                    if body.get('policy') not in {p['id'] for p in self.api.call('/managed-servers/policies')} | {'none'}:
                        raise APIError('Политика не найдена')
                    path = '/policy'
                elif op == 'server-endpoint':
                    if row['kind'] != 'system':
                        raise APIError('Endpoint AWGM меняется в форме сервера')
                    body = payload(data.get('values'), {'endpoint': str})
                    path = '/endpoint'
                elif op == 'server-lan':
                    if row['kind'] != 'managed':
                        raise APIError('Выбор сегментов доступен для сервера AWGM')
                    body = payload(data.get('values'), {'segments': list})
                    known = {s['name'] for s in self.api.call('/managed-servers/lan-segments')}
                    if any(type(s) is not str or s not in known for s in body.get('segments', [])):
                        raise APIError('Сегмент не найден')
                    path = '/lan-segments'
                else:
                    if row['kind'] != 'managed':
                        raise APIError('ASC доступен для сервера AWGM')
                    if 'values' not in data:
                        return redact(self.api.call(base + '/asc'))
                    body = data['values']
                    if not isinstance(body, dict) or len(body) > 40 or any(type(v) not in (str, int) for v in body.values()):
                        raise APIError('ASC должен быть объектом строк и чисел')
                    return redact(self.api.call(base + '/asc', 'PUT', body=body))
                return redact(self.api.call(base + path, 'POST', body=body))
            if op == 'peer-add':
                return redact(self.api.call(base + '/peers', 'POST', body=self.peer_fields(data.get('values'))))
            path = self.peer(row, data.get('publicKey'))
            if op == 'peer-edit':
                return redact(self.api.call(path, 'PUT', body=self.peer_fields(data.get('values'))))
            if op == 'peer-toggle':
                body = payload(data.get('values'), {'enabled': bool})
                if 'enabled' not in body:
                    raise APIError('Укажите enabled')
                return redact(self.api.call(path + '/toggle', 'POST', body=body))
            if op == 'peer-delete':
                self.confirm(data)
                return redact(self.api.call(path, 'DELETE'))
            if op == 'peer-conf':
                # Explicit authenticated export only. Never include secrets in snapshots.
                self.confirm(data)
                result = self.api.call(path + '/conf')
                if not isinstance(result, dict) or not isinstance(result.get('conf'), str) or len(result['conf']) > 65536:
                    raise APIError('Некорректный конфиг клиента')
                return {'conf': result['conf']}
            raise APIError('Неизвестная операция сервера')

    @staticmethod
    def confirm(data):
        if data.get('confirmed') is not True:
            raise APIError('Подтвердите действие')

    @staticmethod
    def server_fields(value, create):
        fields = {'address': str, 'mask': str, 'listenPort': int, 'description': str, 'endpoint': str, 'dns': str, 'mtu': int}
        if create:
            fields['generateAsc'] = bool
        body = payload(value, fields)
        try:
            ipaddress.IPv4Interface(body['address'] + '/' + body['mask'])
            if not 1 <= body['listenPort'] <= 65535 or not 0 <= body.get('mtu', 0) <= 9000:
                raise ValueError()
        except (ValueError, KeyError):
            raise APIError('Проверьте IPv4-адрес, маску, порт и MTU') from None
        return body

    @staticmethod
    def peer_fields(value):
        body = payload(value, {'description': str, 'tunnelIP': str, 'dns': str, 'clientAllowedIPs': str, 'remoteSubnets': list, 'signature': dict})
        try:
            if body.get('tunnelIP'):
                ipaddress.IPv4Interface(body['tunnelIP'])
            for subnet in body.get('remoteSubnets', []):
                if not isinstance(subnet, str):
                    raise ValueError()
                ipaddress.IPv4Network(subnet, strict=False)
            if 'signature' in body:
                body['signature'] = payload(body['signature'], {k: str for k in ('profile', 'i1', 'i2', 'i3', 'i4', 'i5')})
        except (ValueError, TypeError):
            raise APIError('Проверьте адрес и сети клиента') from None
        return body
