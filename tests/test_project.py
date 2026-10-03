import hashlib
import hmac
import json
import threading
import time
import unittest
import tempfile
from pathlib import Path
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from types import SimpleNamespace
from urllib.parse import urlencode
from urllib.request import Request, urlopen
from urllib.error import HTTPError
from awgbot.access import validate
from awgbot.awgm import AWGM, APIError, redact
from awgbot.panel import Panel
from awgbot.webapp import make_server
from awgbot.bot import Telegram
from awgbot.monitor import Monitor

def signed(uid=7, stamp=None, **extras):
    data = {'auth_date': str(int(time.time()) if stamp is None else stamp), 'user': json.dumps({'id':uid}), **extras}
    key = hmac.new(b'WebAppData', b'test-token', hashlib.sha256).digest()
    digest = hmac.new(key, '\n'.join(f'{k}={v}' for k,v in sorted(data.items())).encode(), hashlib.sha256).hexdigest()
    return urlencode({**data, 'hash': digest})

class AuthTests(unittest.TestCase):
    def test_valid_and_signature_field(self):
        self.assertEqual(validate(signed(), 'test-token', {7}), 7)
        self.assertEqual(validate(signed(signature='third-party'), 'test-token', {7}), 7)

    def test_tamper_expiry_future_whitelist_duplicates(self):
        for value in [signed().replace('auth_date=', 'auth_date=0'), signed(stamp=1), signed(stamp=int(time.time())+100), signed(uid=8), signed()+'&user=x']:
            with self.assertRaises(PermissionError):
                validate(value, 'test-token', {7})

class MonitorTests(unittest.TestCase):
    def test_changes_offline_recovery_retry_and_setting(self):
        with tempfile.TemporaryDirectory(dir=Path.cwd()) as directory:
            class Stop:
                tick=0
                def is_set(self): return self.tick >= 6
                def wait(self,_): self.tick += 1
            stop=Stop()
            class API:
                def tunnels(self):
                    if 2 <= stop.tick <= 4: raise APIError('offline')
                    return [{'id':'one','name':'VPN','status':'running' if stop.tick==0 else 'stopped'}]
                def call(self,_): return {'anyWANUp':True}
            delivered=[]
            def send(_, text):
                if stop.tick==1: raise RuntimeError('Telegram offline')
                delivered.append(text)
            c=SimpleNamespace(state=Path(directory),interval=15,admin=7)
            monitor=Monitor(c,API(),send,stop)
            monitor.run()
            self.assertEqual(len(delivered),3)
            self.assertIn('stopped',delivered[0])
            self.assertIn('3 проверки',delivered[1])
            self.assertIn('восстановлена',delivered[2])
            monitor.set_enabled(False)
            self.assertFalse(Monitor(c,API(),send,stop).enabled)

class IntegrationTests(unittest.TestCase):
    def setUp(self):
        self.requests = []
        recorded = self.requests
        class Mock(BaseHTTPRequestHandler):
            def log_message(self,*args): pass
            def reply(self,data,code=200):
                self.send_response(code); self.end_headers(); self.wfile.write(json.dumps(data).encode())
            def do_GET(self):
                recorded.append((self.command,self.path,self.headers.get('Authorization')))
                if self.path=='/api/tunnels/list':
                    self.reply({'success':True,'data':[{'id':'a /&', 'name':'Test', 'status':'running','privateKey':'SECRET'}]})
                elif self.path.startswith('/api/test/connectivity'):
                    self.reply({'connected':True,'latency':42,'reason':''})
                elif self.path=='/api/redirect':
                    self.send_response(302);self.send_header('Location','/api/tunnels/list');self.end_headers()
                elif self.path=='/api/error':
                    self.reply({'error':True,'code':'FAIL','message':'secret'})
                else: self.reply({'anyWANUp':True})
            def do_POST(self):
                recorded.append((self.command,self.path,self.headers.get('Authorization')))
                self.reply({'success':True,'data':{'privateKey':'SECRET'}})
        self.mock=ThreadingHTTPServer(('127.0.0.1',0),Mock)
        threading.Thread(target=self.mock.serve_forever,daemon=True).start()
        self.c=SimpleNamespace(url=f'http://127.0.0.1:{self.mock.server_port}',key='test-key',token='test-token',allowed={7},age=3600,host='127.0.0.1',port=0)
        self.api=AWGM(self.c)
        self.panel=Panel(self.api,None)

    def tearDown(self):
        self.mock.shutdown(); self.mock.server_close()

    def test_actions_urlencoding_redaction(self):
        for action in ('start','stop','restart'):
            result=self.api.action('a /&',action)
            self.assertNotIn('SECRET',json.dumps(result))
            self.assertIn(('POST','/api/control/'+action+'?id=a+%2F%26','Bearer test-key'),self.requests)
        self.assertEqual(self.api.action('a /&','connectivity')['latency'],42)
        self.assertFalse(any('/tunnels/get' in p for _,p,_ in self.requests))

    def test_no_arbitrary_action_or_unknown_id(self):
        for tid,action in [('missing','start'),('a /&','delete')]:
            with self.assertRaises(APIError): self.api.action(tid,action)
        self.assertFalse(any(m=='POST' for m,_,_ in self.requests))

    def test_redirect_and_api_error(self):
        for path in ('/redirect','/error'):
            with self.assertRaises(APIError): self.api.call(path)
        self.assertEqual(len(self.requests),2)

    def test_web_authorization_and_json(self):
        server=make_server(self.c,self.panel)
        threading.Thread(target=server.serve_forever,daemon=True).start()
        url=f'http://127.0.0.1:{server.server_port}'
        try:
            with urlopen(url+'/') as r: self.assertIn(b'AWG Manager',r.read())
            for auth in ('','tma '+signed(uid=8)):
                req=Request(url+'/api',b'{"op":"tunnels"}',{'Content-Type':'application/json','Authorization':auth})
                with self.assertRaises(HTTPError) as e: urlopen(req)
                self.assertEqual(e.exception.code,403)
            req=Request(url+'/api',b'{"op":"tunnels"}',{'Content-Type':'application/json','Authorization':'tma '+signed()})
            with urlopen(req) as r:
                self.assertNotIn('SECRET',json.dumps(json.load(r)))
        finally: server.shutdown();server.server_close()

    def test_bot_rejects_groups_and_other_users(self):
        bot=Telegram(self.c,self.panel,threading.Event())
        calls=[]
        bot.call=lambda method,data: calls.append(method)
        for user,chat in [(8,{'id':8,'type':'private'}),(7,{'id':-1,'type':'group'})]:
            bot.handle({'message':{'from':{'id':user},'chat':chat}})
        self.assertEqual(calls,[])

if __name__=='__main__': unittest.main()
