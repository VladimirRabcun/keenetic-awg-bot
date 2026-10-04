from .awgm import APIError, redact
from .servers import Servers

class Panel:
    def __init__(self, api, monitor):
        self.api, self.monitor = api, monitor

    def dispatch(self, op, data):
        if op.startswith('peer-') or op in ('server-create', 'server-edit', 'server-delete', 'server-nat', 'server-policy', 'server-endpoint', 'server-lan', 'server-asc', 'server-suggest', 'server-policies', 'server-lans'):
            return Servers(self.api).dispatch(op, data)
        if op == 'health':
            return redact(self.api.call('/health'))
        if op == 'servers':
            return self.api.servers()
        if op == 'server-action':
            return self.api.server_action(str(data.get('id', '')), data.get('action'))
        if op == 'tunnels':
            return redact(self.api.tunnels())
        if op == 'tunnel':
            return self.api.tunnel(str(data.get('id', '')))
        if op == 'action':
            return self.api.action(str(data.get('id', '')), data.get('action'))
        reads = {'wan': '/wan/status', 'system': '/system/info', 'ping': '/pingcheck/status',
                 'diagnostics': '/diagnostics/status', 'report': '/diagnostics/result'}
        if op in reads:
            return redact(self.api.call(reads[op]))
        if op == 'logs':
            return redact(self.api.call('/logs', params={'limit': 50}))
        if op == 'ping-now':
            return redact(self.api.call('/pingcheck/check-now', 'POST'))
        if op == 'diagnostics-run':
            return redact(self.api.call('/diagnostics/run', 'POST'))
        if op == 'monitor':
            if 'enabled' in data:
                if type(data['enabled']) is not bool:
                    raise APIError('enabled должен быть boolean')
                self.monitor.set_enabled(data['enabled'])
            return {'enabled': self.monitor.enabled, 'interval': self.monitor.c.interval}
        raise APIError('Неизвестная команда')
