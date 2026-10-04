import unittest,threading
from types import SimpleNamespace
from awgbot.panel import manager_dispatch
from awgbot.awgm import APIError
class ManagerTests(unittest.TestCase):
 def mock(self,responses):
  calls=[]
  def call(path,method='GET',params=None,body=None):calls.append((path,method,params,body));return responses.get(path,{})
  return SimpleNamespace(lock=threading.Lock(),call=call),calls
 def test_secret_types_and_patch(self):
  api,c=self.mock({'/settings/get':{'apiKey':'SECRET'}})
  self.assertEqual(manager_dispatch(api,'manager-settings',{})['apiKey'],'[REDACTED]')
  for v in ({'apiKey':'X'},{'logging':{'enabled':1}},{'server':{'port':2222}},{'schemaVersion':40}):
   with self.assertRaises(APIError):manager_dispatch(api,'manager-save',{'values':v,'confirmed':True})
  manager_dispatch(api,'manager-save',{'values':{'logging':{'enabled':False}},'confirmed':True});self.assertEqual(c[-1][3],{'logging':{'enabled':False}})
 def test_route_preserves_subscriptions(self):
  row={'id':'dns1','name':'VPN','subscriptions':[{'url':'https://example.org/list'}],'manualDomains':['old.org'],'backend':'ndms'}
  api,c=self.mock({'/routing/dns-routes':[row]});manager_dispatch(api,'routing-write',{'section':'dns','action':'update','id':'dns1','values':{'manualDomains':['new.org']},'confirmed':True})
  self.assertEqual(c[-1][0:3],('/dns-routes/update','POST',{'id':'dns1'}));self.assertEqual(c[-1][3]['subscriptions'],row['subscriptions'])
 def test_static_id_body(self):
  api,c=self.mock({'/routing/static-routes':[{'id':'sr1','name':'IPs','subnets':['10.0.0.0/8'],'tunnelID':'t1'}]});manager_dispatch(api,'routing-write',{'section':'ip','action':'update','id':'sr1','values':{'name':'New'},'confirmed':True});self.assertEqual(c[-1][3]['id'],'sr1');self.assertIsNone(c[-1][2])
 def test_stale_singbox_index(self):
  api,c=self.mock({'/singbox/router/rules/list':[{'action':'route','outbound':'new'}]})
  with self.assertRaises(APIError):manager_dispatch(api,'routing-write',{'section':'singbox','action':'delete','index':0,'expected':{'action':'route','outbound':'old'},'confirmed':True})
  self.assertEqual(len(c),1)
 def test_merge_router(self):
  api,c=self.mock({'/singbox/router/settings':{'snifferEnabled':True,'ingressInterfaces':['iface:Wireguard0'],'routingMode':'tproxy','enabled':True,'unknown':12}});manager_dispatch(api,'routing-router-save',{'values':{'snifferEnabled':False},'confirmed':True});self.assertEqual(c[-1][3]['unknown'],12);self.assertEqual(c[-1][3]['ingressInterfaces'],['iface:Wireguard0'])
 def test_endpoint_and_confirmation(self):
  api,c=self.mock({})
  for op,d in [('routing-read',{'section':'/system/restart'}),('manager-save',{'values':{'authEnabled':False}}),('routing-write',{'section':'dns','action':'delete','id':'1'})]:
   with self.assertRaises(APIError):manager_dispatch(api,op,d)
  self.assertEqual(c,[])
