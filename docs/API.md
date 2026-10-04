# Проверенные контракты AWG Manager

Дата сверки: 2026-10-03. Источник: https://awgm.hoaxisr.ru/api/ . Путь ниже добавляется к `<AWGM_URL>/api`. Auth: `Authorization: Bearer <AWGM_API_KEY>`; документация приводит такой запрос в разделе system/backup/export. Ключ генерируется в Настройки → Расширенные. Сессионный login/password не используется.

| Метод | Endpoint | Использование и формат |
|---|---|---|
| GET | /health | проверка установки; `{success:true,data:{ok:true,version:…}}` |
| GET | /tunnels/list | список объектов id,name,type,status,enabled,rxBytes,txBytes,lastHandshake,startedAt,backend,ispInterfaceLabel,resolvedIspInterfaceLabel,pingCheck |
| POST | /control/start?id=… | старт; ответ — объект туннеля, отбрасывается |
| POST | /control/stop?id=… | стоп; ответ отбрасывается |
| POST | /control/restart?id=… | restart; ответ отбрасывается |
| GET | /test/connectivity?id=… | `{connected:true,latency:42,reason:""}` |
| GET | /wan/status | `{interfaces:{ppp0:{up:true,label:…}},anyWANUp:true}` |
| GET | /system/info | объект версии, ОС, памяти, backend и возможностей |
| GET | /pingcheck/status | `{enabled:true,tunnels:[{tunnelId,tunnelName,enabled,status,method,lastCheck,failCount}]}` |
| POST | /pingcheck/check-now | общая немедленная проверка; формат ответа не детализирован документацией, показывается очищенный JSON |
| GET | /logs?limit=50 | `{enabled:true,logs:[{timestamp,level,group,subgroup,message}],total:…}` |
| POST | /diagnostics/run | фоновый сбор; без неподтверждённых параметров |
| GET | /diagnostics/status | статус; поля документацией не детализированы, показывается JSON |
| GET | /diagnostics/result | JSON attachment; отображается JSON после разбора |

Документация допускает envelope `{success:true,data:…}` и прямые объекты/массивы. Клиент поддерживает оба, ошибки `{success:false,error:…,code:…}` и сокращённые `{error:true,message:…,code:…}`. Ни шаблоны ответа диагностики, ни выдуманные поля задержки в `/tunnels/list` не используются.

POST имеет пустой JSON `{}`; id передаётся query-параметром с URL-encoding. Карточки повторно получают `/tunnels/list`; они сознательно не открывают конфигурационный `/tunnels/get`. Ping-check не настраивается из бота и не заменяется собственным ping/shell.

Источники архитектуры, прочитанные при реализации:

- https://github.com/pumbaX/awg-multi-script/tree/main/awg_bot
- https://raw.githubusercontent.com/pumbaX/awg-multi-script/main/awg_bot/awgbot/api.py
- https://raw.githubusercontent.com/pumbaX/awg-multi-script/main/awg_bot/awgbot/webapp.py
- https://raw.githubusercontent.com/pumbaX/awg-multi-script/main/awg_bot/awgbot/panel.py
- https://core.telegram.org/bots/webapps#validating-data-received-via-the-mini-app

У pumbaX разделены меню, слой вызовов awg2 и панель с initData. Здесь эти роли сохранены, транспорт и реализация написаны заново без копирования frontend. initData проверяется официальным HMAC Bot Token алгоритмом, включая все поля кроме hash (поле signature также участвует, если присутствует).


## Серверы: проверено по AWGM v2.19.12

GET /servers/all: data={servers: [], managed: [], managedStats: {WireguardN: {status, peers: []}}}. Типизированные swagger-примеры в документации частично устарели; фактический handler writeAll отдаёт managed массивом.

POST /servers/enabled?name=WireguardN: {enabled: bool}; POST /servers/restart?name=WireguardN.
GET /managed-servers/suggest-address; GET /managed-servers/policies; GET /managed-servers/lan-segments.
POST /managed-servers: {address, mask, listenPort, description?, endpoint?, dns?, mtu?, generateAsc?}.
PUT /managed-servers/{id}: {address, mask, listenPort, description?, endpoint?, dns?, mtu?}; DELETE /managed-servers/{id}.
POST /managed-servers/{id}/enabled: {enabled: bool}; POST /managed-servers/{id}/restart.
POST /managed-servers/{id}/nat and /servers/{id}/nat: {mode: full|internet-only|none}.
POST /managed-servers/{id}/policy and /servers/{id}/policy: {policy: id|none}.
POST /managed-servers/{id}/lan-segments: {segments: [NDMS bridge names]}; empty=[] denies LAN access.
GET/PUT /managed-servers/{id}/asc: raw ASC JSON object.
POST /servers/{id}/endpoint: {endpoint: host}.

Both prefixes /managed-servers/{id} and /servers/{id}:
POST /peers: {description, tunnelIP?, dns?, clientAllowedIPs?, remoteSubnets?}.
PUT /peers/{encodedPublicKey}: same plus optional signature={profile,i1,i2,i3,i4,i5}.
DELETE /peers/{encodedPublicKey}; POST /peers/{encodedPublicKey}/toggle: {enabled: bool}.
GET /peers/{encodedPublicKey}/conf: data={conf: string}, contains secrets and is an explicit export only.

All server IDs must be listed WireguardN; public keys must match a listed client and valid 32-byte base64, URL-encoded with slash escaped. JSON field allowlists reject arbitrary keys/paths. Mutations use the shared API lock. Optional update fields are omitted to preserve AWGM settings; a supplied empty string deliberately clears the corresponding setting.

## Bot update API (our backend, not AWGM)

Authenticated POST /api: bot-info (version, admin), bot-update-check, bot-update-status, bot-update-start (commit from checked release, confirmed=true). Only ADMIN_ID may call bot-update-*; whitelisted additional users receive HTTP 403. Worker downloads fixed files from the trusted repository, validates hashes/compilation, backs up existing files and rolls back, including removing newly added files if startup fails. The detached worker retains a POSIX file lock through service restart.

### Серверные backup и sing-box (v2.19.12)

GET `/api/managed/export` возвращает backup типа `awg-manager-managed-server-backup`, version 1, managedServers. POST `/api/managed/import` принимает тот же type/version/managedServers и options.allowRenumber; outcomes описывает частичные результаты. Доступ из Mini App ограничен ADMIN_ID и явным подтверждением.

GET/PUT `/api/singbox/router/settings`: меняется только выбранная запись ingressInterfaces (`managed:WireguardN` или `iface:WireguardN`), остальные значения сохраняются. Это общие настройки маршрутизатора; операции сериализованы клиентом API.
