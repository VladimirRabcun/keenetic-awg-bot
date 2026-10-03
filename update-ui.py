#!/opt/bin/python3
"""Update only Mini App assets from a pinned, verified snapshot."""
import hashlib
import os
from pathlib import Path
import shutil
import subprocess
import tempfile
import time
from urllib.request import urlopen

COMMIT = 'deba590ff23c7233a3619cd84080953cd29ecd39'
HASHES = {
    'index.html': 'f902c2e12a85863f55ebb65c64f142671c2e22f038768f7f4b32ad29ade33b3b',
    'style.css': 'f623d052b409195dd6be1ba899071a3531448ed68311a13f6775412037199d86',
    'app.js': 'd27459ae51b84f49c99a5f171fc5c9930f1fd959ac2714a03c6513c9b155e347',
}

def main():
    os.umask(0o077)
    parent = Path('/opt/awg-bot/awgbot')
    current = parent / 'static'
    service = '/opt/etc/init.d/S98awgbot'
    if not current.is_dir():
        raise RuntimeError('Install the bot first')
    staged = Path(tempfile.mkdtemp(prefix='static-update-', dir=parent))
    backup = parent / ('static.backup-' + str(time.time_ns()))
    try:
        for name, expected in HASHES.items():
            url = 'https://raw.githubusercontent.com/VladimirRabcun/keenetic-awg-bot/' + COMMIT + '/awgbot/static/' + name
            with urlopen(url, timeout=60) as response:
                content = response.read(128 * 1024 + 1)
            if hashlib.sha256(content).hexdigest() != expected:
                raise RuntimeError('Download verification failed')
            (staged / name).write_bytes(content)
        running = subprocess.run([service, 'status'], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL).returncode == 0
        if running:
            subprocess.run([service, 'stop'], check=True)
        current.rename(backup)
        try:
            staged.rename(current)
            if running:
                subprocess.run([service, 'start'], check=True)
        except Exception:
            if current.exists():
                subprocess.run([service, 'stop'], check=False)
                current.rename(parent / ('static.failed-' + str(time.time_ns())))
            backup.rename(current)
            if running:
                subprocess.run([service, 'start'], check=False)
            raise
        print('Mini App updated. Close and reopen the panel in Telegram.')
        print('Previous interface saved:', backup)
    finally:
        if staged.exists():
            shutil.rmtree(staged)

if __name__ == '__main__':
    try:
        main()
    except Exception as error:
        print('UI update failed:', type(error).__name__)
        raise SystemExit(1)
