from .awgm import APIError, redact
from .servers import Servers

class Panel:
    def __init__(self, api, monitor):
        self.api, self.monitor = api, monitor

    def dispatch(self, op, data):
        if op.startswith(('manager-', 'routing-')):
            return manager_dispatch(self.api, op, data)
        if op.startswith('peer-') or op in ('server-create', 'server-edit', 'server-delete', 'server-nat', 'server-policy', 'server-endpoint', 'server-lan', 'server-asc', 'server-suggest', 'server-policies', 'server-lans', 'server-export', 'server-import', 'server-ingress'):
            return Servers(self.api).dispatch(op, data)
        if op == 'health':
            return redact(self.api.call('/health'))
        if op == 'servers':
            return self.api.servers()
        if op == 'server-action':
            return self.api.server_action(str(data.get('id', '')), data.get('action'))
        if op == 'tunnels':
            return redact(self.api.tunnels())
        if op == 'tunnel':
            return self.api.tunnel(str(data.get('id', '')))
        if op == 'action':
            return self.api.action(str(data.get('id', '')), data.get('action'))
        reads = {'wan': '/wan/status', 'system': '/system/info', 'ping': '/pingcheck/status',
                 'diagnostics': '/diagnostics/status', 'report': '/diagnostics/result'}
        if op in reads:
            return redact(self.api.call(reads[op]))
        if op == 'logs':
            return redact(self.api.call('/logs', params={'limit': 50}))
        if op == 'ping-now':
            return redact(self.api.call('/pingcheck/check-now', 'POST'))
        if op == 'diagnostics-run':
            return redact(self.api.call('/diagnostics/run', 'POST'))
        if op == 'monitor':
            if 'enabled' in data:
                if type(data['enabled']) is not bool:
                    raise APIError('enabled должен быть boolean')
                self.monitor.set_enabled(data['enabled'])
            return {'enabled': self.monitor.enabled, 'interval': self.monitor.c.interval}
        raise APIError('Неизвестная команда')

SETTINGS_SCHEMA = {'schemaVersion': 'int', 'authEnabled': 'bool', 'sessionTtlHours': 'int', 'mcpEnabled': 'bool', 'obfuscatorRelayProcess': 'bool', 'obfuscatorKmodTripped': 'str', 'server': {'port': 'int', 'interface': 'str', 'interfaces': 'list'}, 'pingCheck': {'enabled': 'bool', 'defaults': {'method': 'str', 'target': 'str', 'interval': 'int', 'deadInterval': 'int', 'failThreshold': 'int'}}, 'logging': {'enabled': 'bool', 'maxAge': 'int', 'logLevel': 'str', 'singboxLogLevel': 'str', 'appMaxEntries': 'int', 'singboxMaxEntries': 'int'}, 'monitoringExcludedTunnels': 'list', 'disableMemorySaving': 'bool', 'updates': {'checkEnabled': 'bool', 'channel': 'str', 'autoInstallEnabled': 'bool', 'autoInstallIntervalDays': 'int', 'autoInstallTime': 'str', 'statsEnabled': 'bool'}, 'download': {'routeTag': 'str', 'routeKind': 'str'}, 'dnsRoute': {'autoRefreshEnabled': 'bool', 'refreshIntervalHours': 'int', 'refreshMode': 'str', 'refreshDailyTime': 'str'}, 'geoFile': {'autoRefreshEnabled': 'bool', 'refreshIntervalHours': 'int', 'refreshMode': 'str', 'refreshDailyTime': 'str'}, 'connectivityCheckUrl': 'str', 'usageLevel': 'str', 'singboxBootstrapDNS': 'str', 'singboxClashPort': 'int'}
# Fixed endpoints verified against AWGM v2.19.12; never accept an API path.
ROUTING_READS = {
 'dns':'/routing/dns-routes','ip':'/routing/static-routes','devices':'/routing/client-routes',
 'policies':'/routing/access-policies','tunnels':'/routing/tunnels',
 'singbox':'/singbox/router/rules/list','rulesets':'/singbox/router/rulesets/list',
 'router':'/singbox/router/settings','router-status':'/singbox/router/status',
 'geo':'/hydraroute/geo-files','hr':'/system/hydraroute-status',
 'policy-devices':'/routing/policy-devices','policy-interfaces':'/routing/policy-interfaces'}
ROUTE_KEYS = {
 'dns':set('name manualDomains manualText subscriptions excludes excludesText excludeSubnets subnets routes enabled backend iconUrl hrRouteMode hrPolicyName hrPolicyInterfaces'.split()),
 'ip':set('name tunnelID subnets fallback iconUrl enabled'.split()),
 'devices':set('clientIp clientHostname tunnelId fallback enabled'.split()),
 'singbox':set('domain_suffix ip_cidr source_ip_cidr source_mac_address port rule_set protocol inbound action outbound'.split()),
 'rulesets':set('tag type format url update_interval download_detour path rules'.split())}

def typed_patch(value, schema):
    if not isinstance(value, dict) or not value:
        raise APIError('Пустые или неверные настройки')
    for key, item in value.items():
        if key not in schema:
            raise APIError('Неизвестное поле настроек: '+key)
        kind=schema[key]
        if isinstance(kind, dict):
            typed_patch(item, kind)
        elif (kind == 'bool' and type(item) is not bool or
              kind == 'int' and (type(item) is not int or not -2147483648 <= item <= 2147483647) or
              kind == 'str' and (not isinstance(item,str) or len(item)>8192) or
              kind == 'list' and (not isinstance(item,list) or len(item)>256 or any(not isinstance(v,str) for v in item))):
            raise APIError('Некорректное значение '+key)
    return value

def manager_dispatch(api, op, data):
    import json
    import re
    if op == 'manager-settings':
        return redact(api.call('/settings/get'))
    if op == 'routing-read':
        section=data.get('section')
        if section not in ROUTING_READS: raise APIError('Неизвестный раздел')
        return redact(api.call(ROUTING_READS[section]))
    if op == 'manager-proxy-status':
        subsystem=data.get('subsystem')
        if subsystem not in ('wdtt','freeturn','obf-phobos','obf-clusterm'):raise APIError('Неизвестная интеграция')
        return redact(api.call('/proxyrt/install/status',params={'subsystem':subsystem}))
    if op == 'manager-hr-settings':return redact(api.call('/hydraroute/config'))
    if op == 'manager-status':
        return redact(api.call('/singbox/status'))
    if op == 'manager-update-check':
        return redact(api.call('/system/update/check',params={'force':'true'}))
    if op == 'routing-resolve':
        domain=data.get('domain','')
        if not isinstance(domain,str) or not re.fullmatch(r'[A-Za-z0-9.-]{1,253}',domain):raise APIError('Введите домен')
        return redact(api.call('/routing/resolve',params={'domain':domain}))
    if data.get('confirmed') is not True:raise APIError('Требуется подтверждение')
    with api.lock:
        if op == 'manager-proxy':
            subsystem,action=data.get('subsystem'),data.get('action')
            if subsystem not in ('wdtt','freeturn','obf-phobos','obf-clusterm') or action not in ('install','uninstall'):raise APIError('Неизвестная интеграция')
            return redact(api.call('/proxyrt/install'+('/uninstall' if action=='uninstall' else ''),'POST',body={'subsystem':subsystem}))
        if op == 'manager-hr-control':
            action=data.get('action')
            if action not in ('start','stop','restart'):raise APIError('Неизвестное действие')
            return redact(api.call('/system/hydraroute-control','POST',body={'action':action}))
        if op == 'manager-hr-save':
            current=api.call('/hydraroute/config');patch=data.get('values')
            if not isinstance(patch,dict) or not patch or set(patch)-set(current):raise APIError('Некорректные настройки HR Neo')
            for k,v in patch.items():
                if type(v) is not type(current[k]):raise APIError('Неверный тип параметра')
            current.update(patch);return redact(api.call('/hydraroute/config/update','PUT',body=current))
        if op == 'routing-geo':
            action=data.get('action')
            if action=='add':
                kind,url=data.get('type'),data.get('url')
                if kind not in ('geosite','geoip') or not isinstance(url,str) or not url.startswith('https://') or len(url)>2048:raise APIError('Неверная подписка геоданных')
                return redact(api.call('/hydraroute/geo-files/add','POST',body={'type':kind,'url':url}))
            path=data.get('path');rows=api.call('/hydraroute/geo-files')
            if not isinstance(path,str) or not any(r.get('path')==path for r in rows):raise APIError('Геофайл не найден')
            if action=='update':return redact(api.call('/hydraroute/geo-files/update','POST',body={'path':path}))
            if action=='delete':return redact(api.call('/hydraroute/geo-files/delete','DELETE',{'path':path}))
            raise APIError('Неизвестная операция')
        if op == 'routing-policy':
            action=data.get('action');values=data.get('values',{})
            if not isinstance(values,dict):raise APIError('Неверные параметры')
            if action=='create':
                description=values.get('description')
                if not isinstance(description,str) or not 1<=len(description)<=128:raise APIError('Введите название')
                return redact(api.call('/access-policies/create','POST',body={'description':description}))
            name=data.get('name');rows=api.call('/routing/access-policies');row=next((r for r in rows if r.get('name')==name),None)
            if row is None:raise APIError('Политика не найдена')
            if action=='delete':
                if row.get('isStandard'):raise APIError('Стандартную политику удалять нельзя')
                return redact(api.call('/access-policies/delete','DELETE',{'name':name}))
            if action=='description' and isinstance(values.get('description'),str) and 1<=len(values['description'])<=128:return redact(api.call('/access-policies/description','POST',body={'name':name,'description':values['description']}))
            if action=='standalone' and type(values.get('enabled')) is bool:return redact(api.call('/access-policies/standalone','POST',body={'name':name,'enabled':values['enabled']}))
            if action in ('permit','deny'):
                iface=values.get('interface');interfaces=api.call('/routing/policy-interfaces')
                if not any(i.get('name')==iface for i in interfaces):raise APIError('Интерфейс не найден')
                if action=='deny':return redact(api.call('/access-policies/permit','DELETE',{'name':name,'interface':iface}))
                order=values.get('order')
                if type(order) is not int or not 0<=order<=999:raise APIError('Неверный приоритет')
                return redact(api.call('/access-policies/permit','POST',body={'name':name,'interface':iface,'order':order}))
            raise APIError('Неизвестная операция политики')
        if op == 'manager-save':
            patch=typed_patch(data.get('values'),SETTINGS_SCHEMA)
            if set(patch)&{'schemaVersion','obfuscatorKmodTripped','obfuscatorRelayProcess','server'}:
                raise APIError('Для этого параметра требуется отдельная операция AWGM')
            return redact(api.call('/settings/update','POST',body=patch))
        if op == 'manager-relay':
            if type(data.get('process')) is not bool:raise APIError('Некорректный переключатель')
            return redact(api.call('/settings/obfuscator-relay','POST',body={'process':data['process']}))
        if op == 'manager-update-apply':
            return redact(api.call('/system/update/apply','POST'))
        if op == 'manager-singbox':
            action=data.get('action')
            if action in ('start','stop','restart'):
                return redact(api.call('/singbox/control','POST',body={'action':action}))
            if action in ('install','uninstall','update'):
                return redact(api.call('/singbox/'+action,'POST'))
            raise APIError('Неизвестное действие')
        if op == 'routing-refresh':return redact(api.call('/routing/refresh','POST'))
        if op == 'routing-mode':
            mode=data.get('mode')
            if mode not in ('off','tproxy','fakeip-tun','policy-tun'):raise APIError('Неверный режим')
            return redact(api.call('/singbox/router/mode','POST',body={'mode':mode}))
        if op == 'routing-router-save':
            current=api.call('/singbox/router/settings')
            patch=data.get('values')
            if not isinstance(current,dict) or not isinstance(patch,dict) or not patch:raise APIError('Некорректные настройки')
            if set(patch)-set(current) or set(patch)&{'enabled','routingMode'}:raise APIError('Параметр меняется отдельной операцией')
            # Preserve unknown fields and other ingress references from the fresh snapshot.
            for k,v in patch.items():
                if type(v) is not type(current[k]):raise APIError('Некорректное значение '+k)
            current.update(patch)
            return redact(api.call('/singbox/router/settings','PUT',body=current))
        if op == 'routing-write':
            section,action=data.get('section'),data.get('action')
            if section not in ROUTE_KEYS or action not in ('create','update','delete','toggle','refresh'):raise APIError('Неизвестная операция маршрутизации')
            rows=api.call(ROUTING_READS[section]);sid=data.get('id');index=data.get('index')
            if not isinstance(rows,list):raise APIError('Неожиданный список маршрутов')
            old=None
            if action!='create':
                if section=='singbox':
                    if type(index) is not int or not 0<=index<len(rows):raise APIError('Правило не найдено')
                    old=rows[index]
                    if old.get('awgm_managed'):raise APIError('Правило управляется AWGM')
                    if data.get('expected')!=old:raise APIError('Правило изменилось; обновите страницу')
                else:
                    old=next((r for r in rows if r.get('tag' if section=='rulesets' else 'id')==sid),None)
                    if old is None:raise APIError('Маршрут не найден')
            values=data.get('values',{})
            if not isinstance(values,dict) or set(values)-ROUTE_KEYS[section]:raise APIError('Неизвестные поля маршрута')
            if len(json.dumps(values))>65536:raise APIError('Маршрут слишком большой')
            if section in ('singbox','rulesets'):
                if action not in ('create','update','delete'):raise APIError('Операция не поддерживается')
                part='rules' if section=='singbox' else 'rulesets';path='/singbox/router/'+part+'/'+('add' if action=='create' else action)
                body=values if action=='create' else ({'index':index,'rule':values} if section=='singbox' and action=='update' else {'index':index} if section=='singbox' else {'tag':sid,'ruleSet':values} if action=='update' else {'tag':sid})
                return redact(api.call(path,'POST',body=body))
            prefix={'dns':'/dns-routes/','ip':'/static-routes/','devices':'/client-routes/'}[section]
            if action=='refresh':
                if section!='dns':raise APIError('Обновление подписок только для DNS')
                return redact(api.call(prefix+'refresh','POST',{'id':sid}))
            operation=action
            if action=='toggle':
                if type(data.get('enabled')) is not bool:raise APIError('Неверный переключатель')
                operation='toggle' if section=='devices' else 'set-enabled';values={'enabled':data['enabled']}
            if action=='update':
                merged={k:v for k,v in old.items() if k in ROUTE_KEYS[section]};merged.update(values);values=merged
                if section=='ip':values['id']=sid
            params=None if action=='create' or section=='ip' and action=='update' else {'id':sid}
            return redact(api.call(prefix+operation,'POST',params,body=values if action!='delete' else None))
    raise APIError('Неизвестная команда')
