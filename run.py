import argparse
import os
import signal
import threading
from awgbot.config import Config
from awgbot.awgm import AWGM
from awgbot.bot import Telegram
from awgbot.monitor import Monitor
from awgbot.panel import Panel
from awgbot.webapp import make_server

def main():
    os.umask(0o077)
    parser = argparse.ArgumentParser()
    parser.add_argument('--config', default='/opt/etc/awg-bot.conf')
    parser.add_argument('--check', action='store_true')
    args = parser.parse_args()
    c = Config(args.config)
    api = AWGM(c)
    if args.check:
        api.call('/health')
        api.tunnels()
        print('Configuration and AWG Manager API OK')
        return
    stop = threading.Event()
    panel = Panel(api, None)
    bot = Telegram(c, panel, stop)
    monitor = Monitor(c, api, bot.send, stop)
    panel.monitor = monitor
    server = make_server(c, panel)
    for fn in (bot.run, monitor.run, server.serve_forever):
        threading.Thread(target=fn, daemon=True).start()
    for sig in (signal.SIGINT, signal.SIGTERM):
        signal.signal(sig, lambda *_: stop.set())
    stop.wait()
    server.shutdown()
    server.server_close()

if __name__ == '__main__':
    try:
        main()
    except Exception:
        print('Startup failed: check config permissions, values, port and AWG Manager access.')
        raise SystemExit(1)
