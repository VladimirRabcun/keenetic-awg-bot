#!/opt/bin/python3
"""Download a pinned GitHub snapshot and install it on Entware."""
import io
import os
from pathlib import Path
import re
import subprocess
import tempfile
import urllib.request
import zipfile

REPOSITORY = 'VladimirRabcun/keenetic-awg-bot'
# Known tested application snapshot; update this when promoting a new version.
INSTALL_COMMIT = '2f222bbeaad22929836ef175fc571a02d9458f91'

def download(url, limit):
    request = urllib.request.Request(url, headers={'User-Agent': 'keenetic-awg-bot-installer', 'Accept': 'application/vnd.github+json'})
    with urllib.request.urlopen(request, timeout=60) as response:
        data = response.read(limit + 1)
    if len(data) > limit:
        raise ValueError('Download is too large')
    return data

def extract_snapshot(raw, destination):
    with zipfile.ZipFile(io.BytesIO(raw)) as archive:
        members = archive.infolist()
        if not members or len(members) > 1000 or sum(m.file_size for m in members) > 10 * 1024 * 1024:
            raise ValueError('Unexpected archive size')
        prefixes = set()
        for item in members:
            parts = item.filename.split('/')
            if not parts[0] or any(p in ('..', '.') for p in parts) or '\\' in item.filename or item.filename.startswith('/'):
                raise ValueError('Unsafe archive path')
            if ((item.external_attr >> 16) & 0o170000) == 0o120000:
                raise ValueError('Symlinks are not allowed')
            prefixes.add(parts[0])
        if len(prefixes) != 1:
            raise ValueError('Unexpected archive layout')
        archive.extractall(destination)
        return destination / prefixes.pop()

def main():
    if os.name != 'posix' or not Path('/opt/bin/python3').is_file():
        raise ValueError('Run this installer on Keenetic with Entware Python installed')
    if Path('/opt/awg-bot/run.py').exists():
        raise ValueError('Already installed. Use the update procedure in README; config is preserved')
    os.umask(0o077)
    # No anonymous GitHub API request: its shared-IP quota can be exhausted.
    sha = INSTALL_COMMIT
    if not re.fullmatch(r'[0-9a-f]{40}', sha):
        raise ValueError('Cannot resolve repository commit')
    print('Installing commit ' + sha)
    raw = download(f'https://codeload.github.com/{REPOSITORY}/zip/{sha}', 5 * 1024 * 1024)
    Path('/opt/tmp').mkdir(parents=True, exist_ok=True)
    with tempfile.TemporaryDirectory(prefix='awg-bot-', dir='/opt/tmp') as temporary:
        source = extract_snapshot(raw, Path(temporary))
        subprocess.run(['/bin/sh', str(source / 'install.sh')], check=True)
    Path('/opt/awg-bot/installed-commit').write_text(sha + '\n')
    subprocess.run(['/opt/bin/python3', '/opt/awg-bot/configure.py'], check=True)

if __name__ == '__main__':
    try:
        main()
    except Exception as exc:
        print('Installation failed: ' + str(exc))
        raise SystemExit(1)
