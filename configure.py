#!/opt/bin/python3
"""Interactive setup; secrets are read from the terminal without echo."""
import getpass
import os
from pathlib import Path
import subprocess
from contextlib import contextmanager
from awgbot.config import Config

@contextmanager
def open_terminal(path='/dev/tty'):
    # Buffered r+ requires seekability; terminals are non-seekable devices.
    with open(path, 'r', encoding='utf-8') as reader, open(path, 'w', encoding='utf-8') as writer:
        if not reader.isatty() or not writer.isatty():
            raise OSError('Interactive terminal required')
        yield reader, writer

def write_config(path, values):
    if any('\n' in v or '\r' in v for v in values.values()):
        raise ValueError('Values must be single-line')
    temporary = path.with_suffix('.new')
    fd = os.open(str(temporary), os.O_WRONLY | os.O_CREAT | os.O_TRUNC, 0o600)
    with os.fdopen(fd, 'w', encoding='utf-8') as file:
        file.write(''.join(k + '=' + v + '\n' for k, v in values.items()))
    os.chmod(temporary, 0o600)
    try:
        Config(temporary)
        if path.exists():
            backup = path.with_suffix('.conf.bak')
            backup.write_bytes(path.read_bytes())
            os.chmod(backup, 0o600)
        temporary.replace(path)
    finally:
        if temporary.exists():
            temporary.unlink()

def main():
    os.umask(0o077)
    print('Setup AWG Bot. BOT_TOKEN and API key will not be displayed.')
    with open_terminal() as (terminal_input, terminal):
        def ask(prompt, default=''):
            terminal.write(prompt + (f' [{default}]' if default else '') + ': ')
            terminal.flush()
            value = terminal_input.readline()
            if not value:
                raise ValueError('Terminal input closed')
            return value.strip() or default
        token = getpass.getpass('BOT_TOKEN: ', stream=terminal).strip()
        admin = ask('ADMIN_ID (numeric Telegram ID)')
        url = ask('AWGM_URL', 'http://127.0.0.1:2222')
        key = getpass.getpass('AWGM_API_KEY: ', stream=terminal).strip()
        web_url = ask('WEBAPP_URL (HTTPS, empty = bot only)')
        allowed = ask('ALLOWED_IDS (comma-separated, optional)')
        values = dict(BOT_TOKEN=token, ADMIN_ID=admin, AWGM_URL=url, AWGM_API_KEY=key,
                      WEBAPP_URL=web_url, ALLOWED_IDS=allowed, WEBAPP_HOST='127.0.0.1',
                      WEBAPP_PORT='8787', MONITOR_INTERVAL='60', INIT_DATA_MAX_AGE='3600',
                      STATE_DIR='/opt/var/lib/awg-bot', ALLOW_REMOTE_HTTP='false')
        write_config(Path('/opt/etc/awg-bot.conf'), values)
        result = subprocess.run(['/opt/bin/python3', '/opt/awg-bot/run.py', '--check'])
        if result.returncode:
            print('Config saved. Fix AWGM access, then run /opt/etc/init.d/S98awgbot start')
            return
        if ask('Start bot now? y/n', 'y').lower() == 'y':
            subprocess.run(['/opt/etc/init.d/S98awgbot', 'start'], check=True)
    print('Done. Open a private chat with your bot and send /start.')

if __name__ == '__main__':
    try:
        main()
    except Exception as exc:
        # Exception type/errno are safe to print; values or secret-bearing text are not.
        print('Setup failed: ' + type(exc).__name__ +
              (' errno=' + str(exc.errno) if isinstance(exc, OSError) and exc.errno is not None else '') +
              '. Use an interactive SSH terminal and check config values/permissions.')
        raise SystemExit(1)
