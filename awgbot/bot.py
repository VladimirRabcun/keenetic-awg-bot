import hashlib
import json
from urllib.request import Request, urlopen

class Telegram:
    def __init__(self, config, panel, stop):
        self.c, self.panel, self.stop = config, panel, stop
        self.ids = {}

    def call(self, method, data):
        try:
            req = Request('https://api.telegram.org/bot' + self.c.token + '/' + method,
                          json.dumps(data).encode(), {'Content-Type': 'application/json'})
            with urlopen(req, timeout=40) as r:
                result = json.load(r)
            if not result.get('ok'):
                raise RuntimeError()
            return result['result']
        except Exception:
            # Never propagate exceptions containing the token URL.
            raise RuntimeError('Telegram недоступен') from None

    def send(self, chat, text, rows=None):
        data = {'chat_id': chat, 'text': str(text)[:4000]}
        if rows:
            data['reply_markup'] = {'inline_keyboard': rows}
        return self.call('sendMessage', data)

    def button(self, text, data):
        return {'text': text, 'callback_data': data}

    def menu(self, chat):
        rows = []
        for t in self.panel.dispatch('tunnels', {}):
            key = hashlib.sha256(t['id'].encode()).hexdigest()[:24]
            self.ids[key] = t['id']
            icon = '🟢' if t.get('status') == 'running' else '⚪'
            rows.append([self.button(f'{icon} {t.get("name", t["id"])}', 't:' + key)])
        for op, title in [('wan','📡 WAN'), ('system','⚙️ Система'), ('ping','📶 Ping-check'), ('logs','📋 Логи'), ('diagnostics','🔎 Диагностика'), ('monitor','🔔 Уведомления')]:
            rows.append([self.button(title, 'o:' + op)])
        if self.c.web_url:
            rows.append([{'text': '🖥 Открыть панель', 'web_app': {'url': self.c.web_url}}])
        self.send(chat, '🏠 AWG Manager · туннели', rows)

    def handle(self, update):
        cb = update.get('callback_query')
        msg = cb.get('message', {}) if cb else update.get('message', {})
        user = (cb or msg).get('from', {}).get('id')
        chat = msg.get('chat', {})
        if user not in self.c.allowed or chat.get('type') != 'private' or chat.get('id') != user:
            if cb:
                self.call('answerCallbackQuery', {'callback_query_id': cb['id'], 'text': 'Нет доступа'})
            return
        if not cb:
            self.menu(user)
            return
        self.call('answerCallbackQuery', {'callback_query_id': cb['id']})
        parts = cb.get('data', '').split(':')
        if parts[0] == 'home':
            return self.menu(user)
        rows = [[self.button('🏠 Меню', 'home')]]
        if parts[0] in ('t', 'a'):
            tid = self.ids.get(parts[-1])
            if tid is None:
                return self.menu(user)
            result = self.panel.dispatch('tunnel' if parts[0] == 't' else 'action', {'id': tid, 'action': parts[1]})
            rows.insert(0, [self.button(title, 'a:' + op + ':' + parts[-1]) for op, title in [('start','▶️'), ('stop','⏹'), ('restart','🔄'), ('connectivity','📶')]])
        elif parts[0] == 'm':
            result = self.panel.dispatch('monitor', {'enabled': parts[1] == 'on'})
        else:
            op = parts[-1]
            result = self.panel.dispatch(op, {})
            if op == 'monitor':
                rows.insert(0, [self.button('Включить','m:on'), self.button('Выключить','m:off')])
            if op == 'ping':
                rows.insert(0, [self.button('Проверить все', 'o:ping-now')])
            if op == 'diagnostics':
                rows.insert(0, [self.button('Запустить','o:diagnostics-run'), self.button('Отчёт','o:report')])
        self.send(user, json.dumps(result, ensure_ascii=False, indent=2), rows)

    def run(self):
        # Skip stale commands queued while the router/service was offline.
        offset = None
        while not self.stop.is_set():
            try:
                if offset is None:
                    last = self.call('getUpdates', {'offset': -1, 'timeout': 0, 'allowed_updates': ['message','callback_query']})
                    offset = last[-1]['update_id'] + 1 if last else 0
                updates = self.call('getUpdates', {'offset': offset, 'timeout': 25, 'allowed_updates': ['message','callback_query']})
                for u in updates:
                    offset = u['update_id'] + 1
                    try:
                        self.handle(u)
                    except Exception:
                        msg = u.get('callback_query', {}).get('message') or u.get('message', {})
                        cid = msg.get('chat', {}).get('id')
                        if cid in self.c.allowed:
                            self.send(cid, 'Операция не завершена. Обновите меню и проверьте AWG Manager.')
            except Exception:
                self.stop.wait(5)
