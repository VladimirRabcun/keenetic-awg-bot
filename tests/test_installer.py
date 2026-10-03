import io
import os
from pathlib import Path
import tempfile
import unittest
import zipfile
from bootstrap import extract_snapshot
from configure import write_config

def archive(name, text='file'):
    out = io.BytesIO()
    with zipfile.ZipFile(out, 'w') as z:
        z.writestr(name, text)
    raw = out.getvalue()
    # ZipInfo normalizes separators on Windows; construct the malicious wire name.
    if '\\' in name:
        raw = raw.replace(name.replace('\\', '/').encode(), name.encode())
    return raw

class InstallerTests(unittest.TestCase):
    def test_snapshot_extracts(self):
        with tempfile.TemporaryDirectory(dir=Path.cwd()) as tmp:
            root = extract_snapshot(archive('repo-commit/run.py'), Path(tmp))
            self.assertEqual((root / 'run.py').read_text(), 'file')

    def test_traversal_rejected(self):
        with tempfile.TemporaryDirectory(dir=Path.cwd()) as tmp:
            names = ['repo/../escape', '/absolute', 'repo/./escape']
            if os.name != 'nt':
                names.append('repo\\escape')
            for name in names:
                with self.assertRaises(ValueError):
                    extract_snapshot(archive(name), Path(tmp))

    def test_config_atomic_validation_backup_and_secret_permissions(self):
        with tempfile.TemporaryDirectory(dir=Path.cwd()) as tmp:
            path = Path(tmp) / 'awg-bot.conf'
            values = dict(BOT_TOKEN='test-token', ADMIN_ID='7', AWGM_URL='http://127.0.0.1:2222', AWGM_API_KEY='test-key')
            write_config(path, values)
            previous = path.read_bytes()
            with self.assertRaises(ValueError):
                write_config(path, {**values, 'ADMIN_ID':'invalid'})
            self.assertEqual(path.read_bytes(), previous)
            self.assertFalse(path.with_suffix('.new').exists())
            write_config(path, {**values,'ADMIN_ID':'8'})
            self.assertEqual(path.with_suffix('.conf.bak').read_bytes(), previous)
            if os.name == 'posix':
                self.assertEqual(path.stat().st_mode & 0o777,0o600)
