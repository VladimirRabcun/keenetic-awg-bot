import hashlib
import hmac
import json
import time
from urllib.parse import parse_qsl

def validate(data, token, allowed, max_age=3600, now=None):
    try:
        pairs = parse_qsl(data, keep_blank_values=True, strict_parsing=True)
        if len(pairs) != len(dict(pairs)):
            raise ValueError()
        fields = dict(pairs)
        signature = fields.pop('hash')
        check = '\n'.join(f'{k}={v}' for k, v in sorted(fields.items()))
        secret = hmac.new(b'WebAppData', token.encode(), hashlib.sha256).digest()
        expected = hmac.new(secret, check.encode(), hashlib.sha256).hexdigest()
        if not hmac.compare_digest(expected, signature):
            raise ValueError()
        age = (time.time() if now is None else now) - int(fields['auth_date'])
        if age < -30 or age > max_age:
            raise ValueError()
        user = json.loads(fields['user'])
        if type(user.get('id')) is not int or user['id'] not in allowed:
            raise ValueError()
        return user['id']
    except (ValueError, KeyError, TypeError):
        raise PermissionError('Откройте панель заново из разрешённого Telegram аккаунта') from None
