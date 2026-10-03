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
