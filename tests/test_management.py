import base64
import json
from pathlib import Path
import tempfile
import threading
import unittest
from types import SimpleNamespace
from unittest.mock import patch
from urllib.request import Request, urlopen
from urllib.error import HTTPError
from awgbot.servers import Servers
from awgbot.awgm import APIError
from awgbot.webapp import make_server
from test_project import signed


class ManagementTests(unittest.TestCase):
    def setUp(self):
        self.key = base64.b64encode(bytes([255])*32).decode()
        self.calls = []
        rows = [{'id': 'Wireguard1', 'kind': 'managed', 'peers': [{'publicKey': self.key}]},
                {'id': 'Wireguard0', 'kind': 'system', 'peers': [{'publicKey': self.key}]}]
        def call(path, method='GET', params=None, body=None):
            self.calls.append((path, method, body))
            if path.endswith('/conf'): return {'conf': '[Interface]\nPrivateKey = PRIVATE'}
            if path.endswith('/policies'): return [{'id': 'Policy0'}]
            if path.endswith('/lan-segments'): return [{'name': 'Home'}]
            return {'privateKey': 'PRIVATE'}
        self.manager = Servers(SimpleNamespace(lock=threading.Lock(), servers=lambda: rows, call=call))

    def test_create_edit_delete_and_validation(self):
        values = {'address': '10.10.0.1', 'mask': '24', 'listenPort': 51821, 'generateAsc': True}
        result = self.manager.dispatch('server-create', {'values': values})
        self.assertNotIn('PRIVATE', json.dumps(result))
        self.assertEqual(self.calls[-1], ('/managed-servers', 'POST', values))
        values.pop('generateAsc')
        self.manager.dispatch('server-edit', {'id': 'Wireguard1', 'values': values})
        self.assertEqual(self.calls[-1][1], 'PUT')
        self.manager.dispatch('server-delete', {'id': 'Wireguard1', 'confirmed': True})
        self.assertEqual(self.calls[-1], ('/managed-servers/Wireguard1', 'DELETE', None))
        for data in [{'id': 'Wireguard1'}, {'id': 'Wireguard0', 'confirmed': True}]:
            with self.assertRaises(APIError): self.manager.dispatch('server-delete', data)
        for extra in [{'listenPort': True}, {'listenPort': 0}, {'address': ';rm -rf'}, {'privateKey': 'x'}]:
            with self.assertRaises(APIError): self.manager.dispatch('server-create', {'values': {**values, **extra}})

    def test_clients_keys_encoding_and_explicit_export(self):
        for sid, prefix in [('Wireguard0', '/servers/'), ('Wireguard1', '/managed-servers/')]:
            data = {'id': sid, 'publicKey': self.key, 'values': {'description': 'Phone', 'tunnelIP': '10.10.0.2/32'}}
            self.manager.dispatch('peer-edit', data)
            self.assertIn('%2F', self.calls[-1][0])
            self.assertTrue(self.calls[-1][0].startswith(prefix))
            self.manager.dispatch('peer-toggle', {**data, 'values': {'enabled': False}})
            self.assertEqual(self.calls[-1][2], {'enabled': False})
            with self.assertRaises(APIError): self.manager.dispatch('peer-conf', data)
            exported = self.manager.dispatch('peer-conf', {**data, 'confirmed': True})
            self.assertIn('PRIVATE', exported['conf'])
            with self.assertRaises(APIError): self.manager.dispatch('peer-edit', {**data, 'publicKey': 'bad/path'})

    def test_network_and_signature(self):
        for op, values in [('server-nat', {'mode': 'internet-only'}), ('server-policy', {'policy': 'Policy0'}), ('server-lan', {'segments': ['Home']})]:
            self.manager.dispatch(op, {'id': 'Wireguard1', 'values': values})
            self.assertEqual(self.calls[-1][2], values)
        with self.assertRaises(APIError):
            self.manager.dispatch('server-lan', {'id': 'Wireguard1', 'values': {'segments': ['missing']}})
        signature = {'profile': 'custom', 'i1': 'bytes'}
        self.manager.dispatch('peer-edit', {'id': 'Wireguard1', 'publicKey': self.key, 'values': {'signature': signature}})
        self.assertEqual(self.calls[-1][2]['signature'], signature)

    def test_update_admin_gate(self):
        with tempfile.TemporaryDirectory(dir=Path.cwd()) as directory:
            config = SimpleNamespace(token='test-token', allowed={7, 8}, age=3600, admin=7, state=Path(directory), host='127.0.0.1', port=0)
            with patch('awgbot.webapp.Updater') as factory:
                factory.return_value.check.return_value = {'available': True}
                factory.return_value.start.return_value = {'accepted': True}
                server = make_server(config, None)
                threading.Thread(target=server.serve_forever, daemon=True).start()
                def request(uid, data):
                    req = Request(f'http://127.0.0.1:{server.server_port}/api', json.dumps(data).encode(), {'Content-Type': 'application/json', 'Authorization': 'tma '+signed(uid=uid)})
                    return urlopen(req)
                try:
                    for op in ('bot-update-check', 'bot-update-start', 'bot-update-status', 'server-export', 'server-import'):
                        with self.assertRaises(HTTPError) as error: request(8, {'op': op, 'confirmed': True})
                        self.assertEqual(error.exception.code, 403)
                    with self.assertRaises(HTTPError) as error: request(7, {'op': 'bot-update-start', 'commit': 'x'})
                    self.assertEqual(error.exception.code, 400)
                    with request(7, {'op': 'bot-update-start', 'confirmed': True, 'commit': 'x'}) as response:
                        self.assertTrue(json.load(response)['data']['accepted'])
                finally:
                    server.shutdown(); server.server_close()
