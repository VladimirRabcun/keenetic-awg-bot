#!/opt/bin/python3
"""Trusted-repository updates; no client-supplied URLs, commands or paths."""
import hashlib
import json
import os
from pathlib import Path
import re
import shutil
import subprocess
import sys
import tempfile
import threading
import time
from urllib.request import urlopen
class APIError(Exception):
    pass
VERSION = '0.0.0'

ROOT = Path('/opt/awg-bot')
BASE = 'https://raw.githubusercontent.com/VladimirRabcun/keenetic-awg-bot/'
SERVICE = '/opt/etc/init.d/S98awgbot'
FILES = {'run.py', 'awgbot/__init__.py', 'awgbot/access.py', 'awgbot/awgm.py',
         'awgbot/bot.py', 'awgbot/config.py', 'awgbot/monitor.py', 'awgbot/panel.py',
         'awgbot/webapp.py', 'awgbot/servers.py', 'awgbot/updates.py', 'awgbot/version.py',
         'awgbot/static/index.html', 'awgbot/static/app.js', 'awgbot/static/style.css'}
LOCK = threading.Lock()
ACTIVE = {'queued', 'downloading', 'verifying', 'backup', 'stopping', 'installing', 'starting', 'rollback'}


def fetch(url, limit):
    with urlopen(url, timeout=45) as response:
        value = response.read(limit + 1)
    if len(value) > limit:
        raise APIError('Файл обновления слишком большой')
    return value


def manifest(value):
    if not isinstance(value, dict) or not re.fullmatch(r'[0-9a-f]{40}', str(value.get('commit', ''))):
        raise APIError('Некорректный манифест обновления')
    version = value.get('version', '')
    if not isinstance(version, str) or not re.fullmatch(r'\d+\.\d+\.\d+', version):
        raise APIError('Некорректная версия обновления')
    files = value.get('files')
    if not isinstance(files, dict) or set(files) != FILES or any(not isinstance(v, str) or not re.fullmatch(r'[0-9a-f]{64}', v) for v in files.values()):
        raise APIError('Недопустимые файлы обновления')
    return {'version': version, 'commit': value['commit'], 'files': files}


def save(path, value):
    path.parent.mkdir(parents=True, exist_ok=True)
    temporary = path.with_name(path.name + '.' + str(os.getpid()) + '.tmp')
    temporary.write_text(json.dumps(value), encoding='utf-8')
    os.chmod(temporary, 0o600)
    os.replace(temporary, path)


def status(path):
    try:
        value = json.loads(path.read_text(encoding='utf-8'))
    except (OSError, ValueError):
        return {'phase': 'idle'}
    if value.get('phase') in ACTIVE and value.get('pid'):
        try:
            os.kill(int(value['pid']), 0)
        except (OSError, ValueError):
            value.update(phase='failed', message='Задача обновления прервалась; проверьте состояние бота')
    return value


class Updater:
    def __init__(self, config):
        self.c = config
        self.job = config.state / 'update-status.json'

    def check(self):
        try:
            release = manifest(json.loads(fetch(BASE + 'main/release.json', 32768)))
        except (OSError, ValueError):
            raise APIError('Не удалось проверить обновление на GitHub') from None
        newer = tuple(map(int, release['version'].split('.'))) > tuple(map(int, VERSION.split('.')))
        return {'installed': VERSION, 'latest': release['version'], 'available': newer,
                'commit': release['commit'], 'job': status(self.job)}

    def start(self, commit):
        with LOCK:
            if status(self.job).get('phase') in ACTIVE:
                raise APIError('Обновление уже выполняется')
            release = manifest(json.loads(fetch(BASE + 'main/release.json', 32768)))
            if release['commit'] != commit:
                raise APIError('Релиз изменился; проверьте обновления ещё раз')
            if tuple(map(int, release['version'].split('.'))) <= tuple(map(int, VERSION.split('.'))):
                raise APIError('Установлена актуальная версия')
            if os.name != 'posix' or not Path(SERVICE).is_file():
                raise APIError('Установка обновлений доступна на Keenetic/Entware')
            self.c.state.mkdir(parents=True, exist_ok=True)
            stage = Path(tempfile.mkdtemp(prefix='bot-release-', dir=ROOT))
            save(stage / 'release.json', release)
            save(self.job, {'phase': 'queued', 'target': release['version'], 'pid': os.getpid(), 'message': 'Обновление запланировано'})
            try:
                with open(os.devnull, 'rb') as source, open(os.devnull, 'ab') as log:
                    child = subprocess.Popen([sys.executable, '-m', 'awgbot.updates', '--worker', str(stage), str(self.job)], cwd=ROOT,
                                             stdin=source, stdout=log, stderr=log, start_new_session=True, close_fds=True)
                save(self.job, {'phase': 'queued', 'target': release['version'], 'pid': child.pid, 'message': 'Обновление запланировано'})
            except Exception:
                shutil.rmtree(stage)
                save(self.job, {'phase': 'failed', 'message': 'Не удалось запустить обновление'})
                raise APIError('Не удалось запустить обновление') from None
            return {'accepted': True, 'target': release['version']}


def apply(release, stage, root, service, progress):
    """Stage every file before stopping the service; roll back every changed file."""
    release = manifest(release)
    progress('downloading', 'Загрузка файлов')
    for name, digest in release['files'].items():
        data = fetch(BASE + release['commit'] + '/' + name, 512 * 1024)
        if hashlib.sha256(data).hexdigest() != digest:
            raise APIError('Проверка SHA-256 не пройдена: ' + name)
        if name.endswith('.py'):
            compile(data, name, 'exec')
        target = stage / name
        target.parent.mkdir(parents=True, exist_ok=True)
        target.write_bytes(data)
    staged_version = (stage / 'awgbot/version.py').read_text(encoding='utf-8')
    if staged_version.strip() != 'VERSION = ' + repr(release['version']):
        raise APIError('Версия файлов не совпадает с манифестом')
    progress('backup', 'Создание резервной копии')
    backup = root / ('backup-' + str(time.time_ns()))
    backup.mkdir(mode=0o700)
    existed = {}
    for name in release['files']:
        old, saved = root / name, backup / name
        existed[name] = old.is_file()
        if existed[name]:
            saved.parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(old, saved)
    running = subprocess.run([service, 'status'], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL).returncode == 0
    changed = []
    try:
        if running:
            progress('stopping', 'Остановка бота')
            subprocess.run([service, 'stop'], check=True, timeout=30)
        progress('installing', 'Установка файлов')
        for name in release['files']:
            target = root / name
            target.parent.mkdir(parents=True, exist_ok=True)
            os.replace(stage / name, target)
            changed.append(name)
        # Avoid stale Python bytecode, including edits sharing an old file size.
        for cached in (root / 'awgbot').glob('__pycache__/*.pyc'):
            cached.unlink()
        progress('verifying', 'Проверка установленного бота')
        subprocess.run([sys.executable, str(root / 'run.py'), '--check'], check=True, timeout=150, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        if running:
            progress('starting', 'Запуск бота')
            subprocess.run([service, 'start'], check=True, timeout=180)
        progress('done', 'Обновление установлено. Закройте и откройте панель.', backup=str(backup), version=release['version'])
    except Exception:
        progress('rollback', 'Восстановление предыдущей версии')
        subprocess.run([service, 'stop'], check=False, timeout=30)
        for name in changed:
            if existed[name]:
                shutil.copy2(backup / name, root / name)
            else:
                (root / name).unlink(missing_ok=True)
        for cached in (root / 'awgbot').glob('__pycache__/*.pyc'):
            cached.unlink()
        if running:
            restored = subprocess.run([service, 'start'], check=False, timeout=180).returncode == 0
        else:
            restored = True
        progress('failed', 'Обновление не установлено; предыдущие файлы восстановлены.' + ('' if restored else ' Бот не запустился; проверьте журнал.'), backup=str(backup))
        raise


def worker(stage, job):
    import fcntl
    os.umask(0o077)
    stage, job = Path(stage), Path(job)
    if stage.parent.resolve() != ROOT.resolve() or not stage.name.startswith('bot-release-'):
        raise ValueError('Invalid staging directory')
    with open(ROOT / '.update.lock', 'a') as lock:
        try:
            fcntl.flock(lock, fcntl.LOCK_EX | fcntl.LOCK_NB)
        except BlockingIOError:
            return
        release = manifest(json.loads((stage / 'release.json').read_text(encoding='utf-8')))
        def progress(phase, message, **extra):
            save(job, dict(phase=phase, message=message, pid=os.getpid(), target=release['version'], **extra))
        time.sleep(2)  # Let the initiating HTTP response reach the Mini App.
        try:
            apply(release, stage, ROOT, SERVICE, progress)
        except Exception:
            if status(job).get('phase') != 'failed':
                progress('failed', 'Обновление завершилось ошибкой. Проверьте состояние бота и резервную копию.')
        finally:
            shutil.rmtree(stage)


PINNED_RELEASE = {'version': '0.4.0', 'commit': '2f222bbeaad22929836ef175fc571a02d9458f91', 'files': {'awgbot/__init__.py': '3091650f1ca51d7ee1c0a4541e9b46ec748b58ff5e07daf116ea589bf761a933', 'awgbot/access.py': '5ed7f4744bed5caecb2308649e19a9317aeeff3b0e268f2e8776f9b16bd79420', 'awgbot/awgm.py': '4eedf901daea1100e9c94a2647d851c6e2efab9c44f775408a1f7647c03073c7', 'awgbot/bot.py': '0a266c6ac063c0755f867e711acbb70a15d52183597af6f59fbfef1ea2df2f9d', 'awgbot/config.py': 'de5e1b39bc7e2c3092c46e5a7741bd411f0b8a7cbd9f6778d4ff990b495ecc81', 'awgbot/monitor.py': '2e7103feaa732f828452c2cf048663a5aa9fc68b6e79505e22ca3c3f312486f0', 'awgbot/panel.py': '2de74c96c2ac8bd184c8f5a11a69d551e50338a200ef52ffa9c83440ba53b36f', 'awgbot/servers.py': 'b3cc875ee1184e55bc0da5a2d4ce6813bcccda5febc1cf819311e8720605a07b', 'awgbot/static/app.js': '752a1821799a9de96cd9705c82c8976a84abf2727cfdc984519293b24be6ddee', 'awgbot/static/index.html': '45da31ce70ff0e749629a0a678e3b7cd7f168531d1b03ee4748e0e9bdd45afff', 'awgbot/static/style.css': 'e803085c29d56cd402ec53e4f5257fb6a2416d8c86fd788890a70009b4dfe64f', 'awgbot/updates.py': 'bc78aaee082ff21f05e41924e2e6cfe97cd72553f1f92eb71815d8484002b083', 'awgbot/version.py': 'f43193fbd46832f8b71f8e964b836e074e5a8bbc1dad342429c85e35276b2f19', 'awgbot/webapp.py': '452cbd298a85d4f99c9ef34f302403ea7700cffded616317c0a9eb6e51b544ac', 'run.py': 'ae168783fb8c258943cbb20c89671fac12511da69b97b5ab0e1caa919b99e4e8'}}

def main():
    import fcntl
    os.umask(0o077)
    if not (ROOT / 'run.py').is_file():
        raise APIError('Install the bot first')
    job = Path('/opt/var/lib/awg-bot/update-status.json')
    with open(ROOT / '.update.lock', 'a') as lock:
        fcntl.flock(lock, fcntl.LOCK_EX | fcntl.LOCK_NB)
        stage = Path(tempfile.mkdtemp(prefix='bot-release-', dir=ROOT))
        def progress(phase, message, **extra):
            print(message, flush=True)
            save(job, dict(phase=phase, message=message, pid=os.getpid(), target=PINNED_RELEASE['version'], **extra))
        try:
            apply(PINNED_RELEASE, stage, ROOT, SERVICE, progress)
        finally:
            shutil.rmtree(stage)

if __name__ == '__main__':
    try:
        main()
    except Exception as error:
        print('Update failed:', type(error).__name__)
        raise SystemExit(1)
