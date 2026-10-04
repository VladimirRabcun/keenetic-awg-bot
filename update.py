#!/opt/bin/python3
"""Verified application update; preserves router configuration and secrets."""
import hashlib
import os
from pathlib import Path
import shutil
import subprocess
import tempfile
import time
from urllib.request import urlopen

COMMIT = '58ecec50b322b925e5e9fe7c41cd7e8ac22bb34e'
HASHES = {'awgbot/awgm.py': '4eedf901daea1100e9c94a2647d851c6e2efab9c44f775408a1f7647c03073c7', 'awgbot/panel.py': '14c2efb1a462741be54b529585c5f4ce181636d422b89ded06817b478c3ac2fc', 'awgbot/static/app.js': '3c59d8a2ae3d3dc0f68b38eb332f70d0ea38e7f87786e3ab7b31d1bd61d06412'}


def main():
    os.umask(0o077)
    root = Path('/opt/awg-bot')
    service = '/opt/etc/init.d/S98awgbot'
    if not (root / 'run.py').is_file():
        raise RuntimeError('Install the bot first')
    stage = Path(tempfile.mkdtemp(prefix='update-', dir=root))
    backup = root / ('backup-' + str(time.time_ns()))
    running = False
    changed = []
    try:
        for name, expected in HASHES.items():
            with urlopen('https://raw.githubusercontent.com/VladimirRabcun/keenetic-awg-bot/' + COMMIT + '/' + name, timeout=60) as response:
                data = response.read(256 * 1024 + 1)
            if hashlib.sha256(data).hexdigest() != expected:
                raise RuntimeError('Download verification failed: ' + name)
            target = stage / name
            target.parent.mkdir(parents=True, exist_ok=True)
            target.write_bytes(data)
            if name.endswith('.py'):
                compile(data, name, 'exec')
        backup.mkdir()
        for name in HASHES:
            old = root / name
            saved = backup / name
            saved.parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(old, saved)
        running = subprocess.run([service, 'status'], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL).returncode == 0
        if running:
            subprocess.run([service, 'stop'], check=True)
        try:
            for name in HASHES:
                os.replace(stage / name, root / name)
                changed.append(name)
            if running:
                subprocess.run([service, 'start'], check=True)
        except Exception:
            subprocess.run([service, 'stop'], check=False)
            for name in changed:
                shutil.copy2(backup / name, root / name)
            if running:
                subprocess.run([service, 'start'], check=False)
            raise
        print('AWG Bot updated. Close and reopen the Mini App.')
        print('Backup:', backup)
    finally:
        shutil.rmtree(stage)


if __name__ == '__main__':
    try:
        main()
    except Exception as error:
        print('Update failed:', type(error).__name__)
        raise SystemExit(1)
