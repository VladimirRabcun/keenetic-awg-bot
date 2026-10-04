import json
import threading
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from .access import validate
from .awgm import APIError
from .updates import Updater, status
from .version import VERSION

STATIC = Path(__file__).with_name('static')

class Server(ThreadingHTTPServer):
    daemon_threads = True
    def __init__(self, address, handler):
        self.slots = threading.BoundedSemaphore(8)
        super().__init__(address, handler)

    def process_request(self, request, address):
        if not self.slots.acquire(False):
            self.shutdown_request(request)
            return
        try:
            super().process_request(request, address)
        except Exception:
            self.slots.release()
            raise

    def process_request_thread(self, request, address):
        try:
            super().process_request_thread(request, address)
        finally:
            self.slots.release()

def make_server(config, panel):
    updater = Updater(config)
    class Handler(BaseHTTPRequestHandler):
        def setup(self):
            super().setup()
            self.connection.settimeout(15)

        def log_message(self, *args):
            pass

        def reply(self, code, payload, content='application/json; charset=utf-8'):
            raw = payload if isinstance(payload, bytes) else json.dumps(payload, ensure_ascii=False).encode()
            self.send_response(code)
            self.send_header('Content-Type', content)
            self.send_header('Content-Length', str(len(raw)))
            self.send_header('Cache-Control', 'no-store')
            self.send_header('X-Content-Type-Options', 'nosniff')
            self.send_header('Referrer-Policy', 'no-referrer')
            self.send_header('Content-Security-Policy', "default-src 'self'; script-src 'self' https://telegram.org; style-src 'self'; connect-src 'self'; object-src 'none'; base-uri 'none'")
            self.end_headers()
            self.wfile.write(raw)

        def do_GET(self):
            files = {'/': ('index.html','text/html'), '/app.js': ('app.js','application/javascript'), '/style.css': ('style.css','text/css')}
            if self.path not in files:
                return self.reply(404, {'error': 'Не найдено'})
            name, mime = files[self.path]
            self.reply(200, (STATIC / name).read_bytes(), mime + '; charset=utf-8')

        def do_POST(self):
            if self.path != '/api':
                return self.reply(404, {'error': 'Не найдено'})
            try:
                auth = self.headers.get('Authorization', '')
                if not auth.startswith('tma '):
                    raise PermissionError('Требуется Telegram')
                uid = validate(auth[4:], config.token, config.allowed, config.age)
                if self.headers.get('Content-Type', '').split(';')[0] != 'application/json':
                    raise ValueError()
                n = int(self.headers.get('Content-Length', '0'))
                if not 0 < n <= 8192:
                    raise ValueError()
                data = json.loads(self.rfile.read(n))
                if not isinstance(data, dict) or not isinstance(data.get('op'), str):
                    raise ValueError()
                op = data['op']
                if op == 'bot-info':
                    result = {'version': VERSION, 'admin': uid == config.admin}
                elif op.startswith('bot-update-'):
                    if uid != config.admin:
                        raise PermissionError('Обновления устанавливает только администратор')
                    if op == 'bot-update-check':
                        result = updater.check()
                    elif op == 'bot-update-status':
                        result = status(updater.job)
                    elif op == 'bot-update-start' and data.get('confirmed') is True:
                        result = updater.start(data.get('commit'))
                    else:
                        raise ValueError()
                else:
                    result = panel.dispatch(op, data)
                self.reply(200, {'ok': True, 'data': result})
            except PermissionError as e:
                self.reply(403, {'error': str(e)})
            except (ValueError, TypeError):
                self.reply(400, {'error': 'Неверный запрос'})
            except APIError as e:
                self.reply(502, {'error': str(e)})
            except Exception:
                self.reply(500, {'error': 'Внутренняя ошибка'})
    return Server((config.host, config.port), Handler)
