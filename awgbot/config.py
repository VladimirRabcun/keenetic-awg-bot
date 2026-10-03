import os
from pathlib import Path
from urllib.parse import urlsplit

class Config:
    def __init__(self, path):
        p = Path(path)
        if os.name == 'posix' and (p.stat().st_mode & 0o077):
            raise ValueError('Config must have permissions 600')
        values = {}
        for line in p.read_text(encoding='utf-8').splitlines():
            line = line.strip()
            if line and not line.startswith('#'):
                k, v = line.split('=', 1)
                values[k.strip()] = v.strip()
        self.token = values['BOT_TOKEN']
        self.admin = int(values['ADMIN_ID'])
        self.allowed = {self.admin} | {int(x) for x in values.get('ALLOWED_IDS', '').split(',') if x.strip()}
        self.url = values['AWGM_URL'].rstrip('/')
        if self.url.endswith('/api'):
            self.url = self.url[:-4]
        u = urlsplit(self.url)
        if u.scheme not in ('http', 'https') or not u.hostname or u.username or u.query or u.fragment or u.path:
            raise ValueError('AWGM_URL must be an origin, optionally ending in /api')
        if u.scheme == 'http' and u.hostname not in ('localhost', '127.0.0.1', '::1') and values.get('ALLOW_REMOTE_HTTP') != 'true':
            raise ValueError('Remote AWGM requires HTTPS or explicit ALLOW_REMOTE_HTTP=true')
        self.key = values['AWGM_API_KEY']
        if not self.token or not self.key or 'REPLACE' in self.token or 'REPLACE' in self.key:
            raise ValueError('Configure BOT_TOKEN and AWGM_API_KEY')
        self.web_url = values.get('WEBAPP_URL', '')
        if self.web_url and (urlsplit(self.web_url).scheme != 'https' or not urlsplit(self.web_url).hostname):
            raise ValueError('WEBAPP_URL requires HTTPS')
        self.host = values.get('WEBAPP_HOST', '127.0.0.1')
        self.port = int(values.get('WEBAPP_PORT', '8787'))
        self.interval = max(15, int(values.get('MONITOR_INTERVAL', '60')))
        self.age = max(60, int(values.get('INIT_DATA_MAX_AGE', '3600')))
        self.state = Path(values.get('STATE_DIR', '/opt/var/lib/awg-bot'))
