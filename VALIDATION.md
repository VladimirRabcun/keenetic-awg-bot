# Проверки сборки

2026-10-03: 8 unittest-тестов успешно пройдены на Python 3.11; синтаксис frontend проверен Node.js. Mock HTTP-сервер проверяет реальные документированные URL/методы и формы ответов, а не работу физического устройства.

2026-10-04: добавлены bootstrap GitHub, интерактивная настройка и GitHub Actions. 11 тестов: дополнительно проверены распаковка snapshot, отклонение путей выхода из каталога, валидация конфига до замены, сохранение предыдущего файла и права секретов на Unix.

Покрытие: HMAC initData (включая signature), срок и будущее время, whitelist, дубли параметров, отсутствие приватных ключей в карточках, query encoding ID, start/stop/restart/connectivity, отклонение произвольной команды и неизвестного ID, запрет redirect, обработка API error, web-авторизация, запрет Telegram-групп, мониторинг изменений/отказа/восстановления, повтор доставки и сохранение выключенных уведомлений.

Не проверено: физический Keenetic/Entware, реальные токены Telegram/AWGM, публичный TLS endpoint, визуальная работа Mini App в Telegram. Эти проверки требуют настроенного роутера и домена. Архивы проверены на чтение; секреты в сборку не включены.

2026-10-04: 23 unittest tests: 22 passed, 1 POSIX terminal test skipped on Windows. Added CRUD validation, URL-encoded public keys, explicit secret export, admin-only update gate, manifest/path allowlist, checksum failure before stopping service, successful update and rollback including new files/config preservation. Mobile UI tested at 390×844: create server, add client, policy picker, update discovery, confirmation, progress and completion; no console errors. Physical router execution remains user-side.

0.5.0: 25 unittest tests, 24 passed, 1 POSIX-only skipped on Windows. Added backup schema/confirmation/admin checks and sing-box read-modify-write preservation. Node syntax check passed. Mobile 390×844 checked: managed server layout, client search, sorting controls and access settings. Screenshot uses synthetic data. Router operation remains user-side.
