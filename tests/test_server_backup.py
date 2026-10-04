import threading
import unittest
from types import SimpleNamespace
from awgbot.servers import Servers
from awgbot.awgm import APIError


class BackupTests(unittest.TestCase):
    def setUp(self):
        self.calls=[]
        self.settings={'ingressInterfaces':['managed:Wireguard8','iface:Wireguard0'], 'dns':{'keep':'unchanged'}, 'secret':'not-for-frontend'}
        self.backup={'version':1,'type':'awg-manager-managed-server-backup','managedServers':[{'interfaceName':'Wireguard1','privateKey':'PRIVATE'}]}
        def call(path, method='GET', params=None, body=None):
            self.calls.append((path,method,body))
            if path=='/singbox/router/settings': return self.settings
            if path=='/managed/export': return self.backup
            return {'outcomes':[{'name':'Wireguard1','action':'created','error':''}]}
        self.manager=Servers(SimpleNamespace(lock=threading.Lock(),call=call,servers=lambda:[{'id':'Wireguard1','kind':'managed'}]))

    def test_ingress_read_modify_write_preserves_every_other_setting(self):
        self.assertEqual(self.manager.dispatch('server-ingress',{'id':'Wireguard1'}),{'enabled':False})
        self.manager.dispatch('server-ingress',{'id':'Wireguard1','values':{'enabled':True},'confirmed':True})
        path,method,body=self.calls[-1]
        self.assertEqual((path,method),('/singbox/router/settings','PUT'))
        self.assertEqual(body['ingressInterfaces'],['managed:Wireguard8','iface:Wireguard0','managed:Wireguard1'])
        self.assertEqual(body['dns'],self.settings['dns'])
        self.assertEqual(body['secret'],self.settings['secret'])
        with self.assertRaises(APIError): self.manager.dispatch('server-ingress',{'id':'Wireguard1','values':{'enabled':True}})

    def test_explicit_backup_and_import_exact_shape(self):
        with self.assertRaises(APIError): self.manager.dispatch('server-export',{})
        result=self.manager.dispatch('server-export',{'confirmed':True})
        self.assertEqual(result['managedServers'][0]['privateKey'],'PRIVATE')
        self.manager.dispatch('server-import',{'backup':self.backup,'confirmed':True,'options':{'allowRenumber':True}})
        self.assertEqual(self.calls[-1],('/managed/import','POST',{**self.backup,'options':{'allowRenumber':True}}))
        for bad in [{}, {**self.backup,'version':True}, {**self.backup,'managedServers':[]}, {**self.backup,'type':'other'}]:
            with self.assertRaises(APIError):self.manager.dispatch('server-import',{'backup':bad,'confirmed':True})
