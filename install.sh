#!/bin/sh
set -eu
umask 077
cd "$(dirname "$0")"
[ -x /opt/bin/python3 ] || { echo 'Install Entware python3 first'; exit 1; }
/opt/bin/python3 -c 'import sys, ssl; assert sys.version_info >= (3, 9)'
[ ! -e /opt/awg-bot/run.py ] || { echo 'Existing installation: stop service and update files manually (see README)'; exit 1; }
mkdir -p /opt/awg-bot /opt/etc/init.d /opt/var/lib/awg-bot
cp -R awgbot /opt/awg-bot/
cp run.py /opt/awg-bot/
cp configure.py /opt/awg-bot/
cp entware/S98awgbot /opt/etc/init.d/S98awgbot
chmod 700 /opt/etc/init.d/S98awgbot
if [ ! -e /opt/etc/awg-bot.conf ]; then
    cp awg-bot.conf.example /opt/etc/awg-bot.conf
fi
chmod 600 /opt/etc/awg-bot.conf
chmod 700 /opt/var/lib/awg-bot
echo 'Edit /opt/etc/awg-bot.conf, then run /opt/etc/init.d/S98awgbot start'
