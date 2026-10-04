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

COMMIT = '9605aa1fea3f63ecf5ebe379d117ed0b15ef2906'
HASHES = {
    'index.html': '45da31ce70ff0e749629a0a678e3b7cd7f168531d1b03ee4748e0e9bdd45afff',
    'style.css': '418cedcf65bb0bd66d1e4da3172687b3aeb6ba295cb0dec0ea0b056d68aad2f7',
    'app.js': '9b407adb254947cf28e20d25ee2f9efe7c0210bbd41311fdf70a9de7587a4234',
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
