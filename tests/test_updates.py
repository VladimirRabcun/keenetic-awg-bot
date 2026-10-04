import hashlib
from pathlib import Path
import subprocess
import tempfile
from types import SimpleNamespace
import unittest
from unittest.mock import patch
from awgbot import updates
from awgbot.awgm import APIError


class UpdateTests(unittest.TestCase):
    def release(self):
        files = {name: (b'pass\n' if name.endswith('.py') else b'asset') for name in updates.FILES}
        files['awgbot/version.py'] = b"VERSION = '0.4.1'\n"
        return files, {'version': '0.4.1', 'commit': 'a'*40, 'files': {name: hashlib.sha256(data).hexdigest() for name, data in files.items()}}

    def test_manifest_rejects_paths_and_incomplete_snapshot(self):
        _, release = self.release()
        self.assertEqual(updates.manifest(release)['version'], '0.4.1')
        for files in [{**release['files'], '../../etc/passwd': 'b'*64}, {}]:
            with self.assertRaises(APIError): updates.manifest({**release, 'files': files})

    def test_install_and_rollback_new_files_without_touching_config(self):
        files, release = self.release()
        for fail in (False, True):
            with tempfile.TemporaryDirectory(dir=Path.cwd()) as directory:
                root = Path(directory); stage = root / 'stage'; stage.mkdir()
                old = set(files) - {'awgbot/servers.py', 'awgbot/version.py'}
                for name in old:
                    target = root / name; target.parent.mkdir(parents=True, exist_ok=True); target.write_bytes(b'previous')
                secret = root / 'awg-bot.conf'; secret.write_text('secret')
                starts = []; phases = []
                def run(args, **kwargs):
                    if args[-1] == 'start':
                        starts.append(1)
                        if fail and len(starts) == 1: raise subprocess.CalledProcessError(1, args)
                    return SimpleNamespace(returncode=0)
                with patch.object(updates, 'fetch', side_effect=lambda url, limit: files[url.split('a'*40+'/')[1]]), patch.object(updates.subprocess, 'run', side_effect=run):
                    try:
                        updates.apply(release, stage, root, 'service', lambda phase, message, **kw: phases.append(phase))
                        self.assertFalse(fail)
                    except subprocess.CalledProcessError:
                        self.assertTrue(fail)
                self.assertEqual(secret.read_text(), 'secret')
                for name in files:
                    target = root / name
                    if fail and name not in old: self.assertFalse(target.exists())
                    else: self.assertEqual(target.read_bytes(), b'previous' if fail else files[name])
                self.assertEqual(phases[-1], 'failed' if fail else 'done')

    def test_checksum_failure_never_stops_service(self):
        _, release = self.release()
        with tempfile.TemporaryDirectory(dir=Path.cwd()) as directory:
            root = Path(directory); stage = root / 'stage'; stage.mkdir()
            with patch.object(updates, 'fetch', return_value=b'bad'), patch.object(updates.subprocess, 'run') as run:
                with self.assertRaises(APIError): updates.apply(release, stage, root, 'service', lambda *args, **kw: None)
                run.assert_not_called()
