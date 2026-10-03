import json
import os
import threading
from collections import deque
from .awgm import APIError

class Monitor:
    def __init__(self, config, api, send, stop):
        self.c, self.api, self.send, self.stop = config, api, send, stop
        self.enabled = True
        self.lock = threading.Lock()
        self.file = config.state / 'monitor.json'
        config.state.mkdir(parents=True, exist_ok=True)
        try:
            self.enabled = json.loads(self.file.read_text())['enabled'] is True
        except (OSError, ValueError, KeyError):
            pass

    def set_enabled(self, value):
        with self.lock:
            temp = self.file.with_suffix('.tmp')
            temp.write_text(json.dumps({'enabled': value}))
            os.chmod(temp, 0o600)
            temp.replace(self.file)
            self.enabled = value

    def run(self):
        previous, failures, offline = None, 0, False
        pending = deque(maxlen=100)
        while not self.stop.is_set():
            try:
                tunnels = self.api.tunnels()
                wan = self.api.call('/wan/status')
                snapshot = {t['id']: (t.get('name', t['id']), t.get('status'), (t.get('pingCheck') or {}).get('status')) for t in tunnels}
                snapshot['__wan__'] = ('WAN', wan.get('anyWANUp'), None)
                if offline:
                    pending.append('✅ Связь с AWG Manager восстановлена')
                failures, offline = 0, False
                if previous is not None:
                    for key in snapshot.keys() | previous.keys():
                        if snapshot.get(key) != previous.get(key):
                            v = snapshot.get(key)
                            pending.append(f'📡 {v[0] if v else previous[key][0]}: {v[1: ] if v else "удалён"}')
                previous = snapshot
            except (APIError, TypeError, AttributeError):
                failures += 1
                if failures >= 3 and not offline:
                    pending.append('⚠️ AWG Manager недоступен: 3 проверки подряд')
                    offline = True
            if not self.enabled:
                pending.clear()
            while self.enabled and pending and not self.stop.is_set():
                try:
                    self.send(self.c.admin, pending[0])
                    pending.popleft()
                except Exception:
                    break
            self.stop.wait(self.c.interval)
