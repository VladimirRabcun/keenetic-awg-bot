import unittest
from types import SimpleNamespace
from awgbot.awgm import AWGM, APIError
from awgbot.panel import Panel


class ServerTests(unittest.TestCase):
    def setUp(self):
        self.api = AWGM(SimpleNamespace(url='http://localhost', key='test'))
        self.calls = []
        self.snapshot = {'servers': [{'id': 'Wireguard0', 'enabledKnown': False}],
                         'managed': [{'interfaceName': 'Wireguard1', 'peers': [{'publicKey': 'public', 'privateKey': 'secret'}]}],
                         'managedStats': {'Wireguard1': {'status': 'up', 'peers': [{'publicKey': 'public', 'rxBytes': 42, 'online': True}]}}}
        def call(path, method='GET', params=None, body=None):
            self.calls.append((path, method, params, body))
            return self.snapshot if path == '/servers/all' else {'accepted': True}
        self.api.call = call

    def test_snapshot_stats_and_secrets(self):
        server = self.api.servers()[1]
        self.assertEqual(server['peers'][0]['rxBytes'], 42)
        self.assertEqual(server['peers'][0]['privateKey'], '[REDACTED]')
        self.assertFalse(server['enabledKnown'])

    def test_real_system_and_managed_routes(self):
        self.api.server_action('Wireguard0', 'stop')
        self.assertEqual(self.calls[-1], ('/servers/enabled', 'POST', {'name': 'Wireguard0'}, {'enabled': False}))
        self.api.server_action('Wireguard1', 'start')
        self.assertEqual(self.calls[-1], ('/managed-servers/Wireguard1/enabled', 'POST', None, {'enabled': True}))
        self.api.server_action('Wireguard1', 'restart')
        self.assertEqual(self.calls[-1], ('/managed-servers/Wireguard1/restart', 'POST', None, None))

    def test_reject_unknown_id_or_action(self):
        for sid, action in [('Wireguard99', 'stop'), ('../system', 'start'), ('Wireguard0', 'delete')]:
            with self.assertRaises(APIError):
                self.api.server_action(sid, action)
        self.assertFalse(any(method == 'POST' for _, method, _, _ in self.calls))

    def test_health_dispatch(self):
        Panel(self.api, None).dispatch('health', {})
        self.assertEqual(self.calls[-1][0], '/health')
