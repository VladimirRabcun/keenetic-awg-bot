'use strict';
const tg = window.Telegram?.WebApp;
tg?.ready(); tg?.expand();
const main = document.getElementById('main');
const status = document.getElementById('status');
let view = 'tunnels', activeView = 'tunnels', busy = false, tunnels = [], filter = 'all', query = '', resultLoader = null;
let themeOverride = null;
try { themeOverride = localStorage.getItem('awg-theme'); } catch (_) {}
function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const color = theme === 'dark' ? '#151f2c' : '#ffffff';
  tg?.setHeaderColor?.(color);
  tg?.setBackgroundColor?.(theme === 'dark' ? '#0d141e' : '#eef2f7');
}
setTheme(themeOverride || tg?.colorScheme || 'dark');
tg?.onEvent?.('themeChanged', () => { if (!themeOverride) setTheme(tg.colorScheme); });
function el(tag, text, cls) {
  const node = document.createElement(tag);
  if (text !== undefined) node.textContent = text;
  if (cls) node.className = cls;
  return node;
}
function button(text, fn, cls) {
  const node = el('button', text, cls);
  node.type = 'button';
  node.onclick = () => operate(fn);
  return node;
}
async function api(op, data = {}) {
  if (!tg?.initData) throw Error('Откройте панель кнопкой в Telegram-боте');
  const response = await fetch('/api', {
    method: 'POST',
    headers: {'Content-Type': 'application/json', 'Authorization': 'tma ' + tg.initData},
    body: JSON.stringify({op, ...data})
  });
  const value = await response.json();
  if (!response.ok) throw Error(value.error || 'Ошибка запроса');
  return value.data;
}
async function operate(fn) {
  if (busy) return;
  busy = true;
  main.setAttribute('aria-busy', 'true');
  document.querySelectorAll('button').forEach(node => node.disabled = true);
  status.classList.remove('error');
  status.textContent = 'Обновление…';
  try {
    await fn();
    status.textContent = 'Панель подключена';
    document.getElementById('updated').textContent = 'Обновлено в ' + new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}) + ' · автообновление 15 с';
  } catch (error) {
    status.textContent = error.message;
    status.classList.add('error');
    if (!main.childElementCount) {
      const card = el('article', undefined, 'card empty');
      card.append(el('b', 'Не удалось подключиться'), el('span', error.message));
      main.append(card);
    }
  } finally {
    busy = false;
    main.setAttribute('aria-busy', 'false');
    document.querySelectorAll('button').forEach(node => node.disabled = false);
  }
}
function navState() {
  document.querySelectorAll('nav button').forEach(node => {
    node.classList.toggle('active', node.dataset.view === activeView);
    if (node.dataset.view === activeView) node.setAttribute('aria-current', 'page');
    else node.removeAttribute('aria-current');
  });
}
function heading(title, subtitle) {
  main.append(el('h1', title), el('p', subtitle, 'subtitle'));
}
function bytes(value) {
  if (value === null || value === undefined || value === '') return '—';
  const number = Number(value);
  if (!Number.isFinite(number) || number < 0) return '—';
  const units = ['Б', 'КБ', 'МБ', 'ГБ', 'ТБ'];
  const index = number === 0 ? 0 : Math.max(0, Math.min(4, Math.floor(Math.log(number) / Math.log(1024))));
  return (number / 1024 ** index).toLocaleString('ru-RU', {maximumFractionDigits: index ? 1 : 0}) + ' ' + units[index];
}
const statuses = {running: 'Работает', stopped: 'Остановлен', starting: 'Запускается', stopping: 'Останавливается', error: 'Ошибка', unknown: 'Нет данных'};
function state(value) { return statuses[value] || value || 'Нет данных'; }
function metric(label, value) {
  const node = el('div', undefined, 'metric');
  node.append(el('span', label), el('b', value ?? '—'));
  return node;
}
function tunnelCard(tunnel) {
  const running = tunnel.status === 'running';
  const card = el('article', undefined, 'tunnel-card' + (running ? ' running' : ''));
  const head = el('div', undefined, 'card-head');
  const more = button('›', () => openResult(tunnel.name || tunnel.id, () => api('tunnel', {id: tunnel.id})), 'icon-button');
  more.setAttribute('aria-label', 'Карточка: ' + (tunnel.name || tunnel.id));
  head.append(el('span', undefined, 'dot'), el('div', tunnel.name || tunnel.id, 'card-title'), more);
  const chips = el('div', undefined, 'chips');
  chips.append(el('span', state(tunnel.status), 'badge ' + (running ? 'ok' : tunnel.status === 'error' ? 'bad' : '')),
    el('span', tunnel.type || 'VPN', 'badge'), el('span', tunnel.backend || '—', 'badge'));
  const metrics = el('div', undefined, 'metrics');
  metrics.append(metric('↓ Получено', bytes(tunnel.rxBytes)), metric('↑ Отправлено', bytes(tunnel.txBytes)),
    metric('WAN', tunnel.resolvedIspInterfaceLabel || tunnel.ispInterfaceLabel || '—'),
    metric('Ping-check', tunnel.pingCheck?.status || '—'));
  const actions = el('div', undefined, 'actions');
  const toggle = running ? 'stop' : 'start';
  actions.append(button(running ? '■ Стоп' : '▶ Старт', () => action(tunnel, toggle), running ? 'danger' : 'primary'),
    button('↻ Рестарт', () => action(tunnel, 'restart')),
    button('◎ Проверить', () => action(tunnel, 'connectivity'), 'primary'));
  card.append(head, chips, metrics, actions);
  return card;
}
async function action(tunnel, operation) {
  if (['stop', 'restart'].includes(operation) && !confirm((operation === 'stop' ? 'Остановить' : 'Перезапустить') + ' туннель «' + (tunnel.name || tunnel.id) + '»?')) return;
  const result = await api('action', {id: tunnel.id, action: operation});
  if (operation === 'connectivity') {
    resultLoader = () => api('action', {id: tunnel.id, action: 'connectivity'});
    view = 'result';
    showResult('Проверка · ' + (tunnel.name || tunnel.id), result);
  } else await load();
}
function renderList() {
  const list = document.getElementById('tunnel-list');
  if (!list) return;
  list.replaceChildren();
  const selected = tunnels.filter(tunnel => (filter === 'all' || (filter === 'running' ? tunnel.status === 'running' : tunnel.status !== 'running')) && (tunnel.name || tunnel.id).toLocaleLowerCase().includes(query.toLocaleLowerCase()));
  document.getElementById('section-count').textContent = selected.length + ' из ' + tunnels.length;
  for (const tunnel of selected) list.append(tunnelCard(tunnel));
  if (!selected.length) {
    const empty = el('article', undefined, 'card empty');
    empty.append(el('b', tunnels.length ? 'Ничего не найдено' : 'Туннелей пока нет'), el('span', tunnels.length ? 'Измените поиск или фильтр' : 'Добавьте туннели в AWG Manager'));
    list.append(empty);
  }
}
function renderTunnels() {
  if (!document.getElementById('tunnel-list')) {
    main.replaceChildren();
    heading('Туннели', 'Подключения и управление VPN');
    const summary = el('div', undefined, 'summary');
    for (const [id, label, cls] of [['total', 'Всего', ''], ['running', 'Работают', 'ok'], ['off', 'Не запущены', '']]) {
      const cell = el('div', undefined, 'summary-cell');
      const value = el('b', '—', cls); value.id = 'count-' + id;
      cell.append(value, el('span', label)); summary.append(cell);
    }
    const search = el('input', undefined, 'search');
    search.type = 'search'; search.placeholder = 'Поиск туннеля…'; search.value = query;
    search.setAttribute('aria-label', 'Поиск туннеля');
    search.oninput = () => { query = search.value; renderList(); };
    const filters = el('div', undefined, 'filters');
    for (const [key, label] of [['all', 'Все'], ['running', 'Работают'], ['off', 'Не запущены']]) {
      const node = el('button', label, key === filter ? 'active' : '');
      node.type = 'button'; node.setAttribute('aria-pressed', String(key === filter));
      node.onclick = () => {
        if (busy) return;
        filter = key;
        filters.querySelectorAll('button').forEach(item => { item.classList.toggle('active', item === node); item.setAttribute('aria-pressed', String(item === node)); });
        renderList();
      };
      filters.append(node);
    }
    const section = el('div', undefined, 'section-head');
    const count = el('span', '', 'section-count'); count.id = 'section-count';
    section.append(el('h2', 'VPN-подключения'), count);
    const list = el('div', undefined, 'tunnel-list'); list.id = 'tunnel-list';
    main.append(summary, search, filters, section, list);
  }
  const running = tunnels.filter(tunnel => tunnel.status === 'running').length;
  document.getElementById('count-total').textContent = tunnels.length;
  document.getElementById('count-running').textContent = running;
  document.getElementById('count-off').textContent = tunnels.length - running;
  renderList();
}
const labels = {id: 'ID', name: 'Название', status: 'Статус', type: 'Тип', backend: 'Движок', lastHandshake: 'Handshake', startedAt: 'Запущен', rxBytes: 'Получено', txBytes: 'Отправлено', ispInterfaceLabel: 'WAN', resolvedIspInterfaceLabel: 'Текущий WAN', success: 'Успешно', connected: 'Подключено', latency: 'Задержка', latencyMs: 'Задержка, мс', message: 'Сообщение', version: 'Версия', uptime: 'Время работы', interface: 'Интерфейс', address: 'Адрес', enabled: 'Включено', timestamp: 'Время', pingCheck: 'Ping-check'};
function readable(key, value) {
  if (key === 'rxBytes' || key === 'txBytes') return bytes(value);
  if (key === 'status') return state(value);
  if (value === true) return 'Да';
  if (value === false) return 'Нет';
  return value === null || value === '' ? '—' : String(value);
}
function dataCard(title, data) {
  const card = el('article', undefined, 'card');
  if (title) card.append(el('div', title, 'detail-title'));
  if (typeof data === 'string') card.append(el('pre', data));
  else if (data && typeof data === 'object' && !Array.isArray(data)) {
    for (const [key, value] of Object.entries(data)) {
      if (value !== null && typeof value === 'object') continue;
      const row = el('div', undefined, 'kv');
      row.append(el('span', labels[key] || key), el('b', readable(key, value))); card.append(row);
    }
    const raw = el('details');
    raw.append(el('summary', 'Все данные'), el('pre', JSON.stringify(data, null, 2))); card.append(raw);
  } else card.append(el('pre', JSON.stringify(data, null, 2) ?? 'Нет данных'));
  return card;
}
let resultTitle = '';
function showResult(title, data) {
  resultTitle = title;
  main.replaceChildren();
  main.append(button('‹ Назад', async () => { view = activeView; await load(); }, 'back'), dataCard(title, data));
  navState();
}
async function openResult(title, loader) {
  const data = await loader();
  resultLoader = loader; view = 'result'; showResult(title, data);
}
async function load() {
  navState();
  if (view === 'tunnels') {
    tunnels = await api('tunnels'); renderTunnels();
  } else if (view === 'wan') {
    const data = await api('wan'); main.replaceChildren();
    heading('WAN', 'Внешние подключения роутера'); main.append(dataCard('', data));
  } else if (view === 'tools') {
    const monitor = await api('monitor'); main.replaceChildren();
    heading('Инструменты', 'Проверки, диагностика и уведомления');
    const card = el('article', undefined, 'card monitor-row');
    const text = el('div'); text.append(el('b', 'Telegram-уведомления'), el('p', 'Изменения состояния VPN и WAN'));
    const toggle = button('', async () => { await api('monitor', {enabled: !monitor.enabled}); await load(); }, 'switch' + (monitor.enabled ? ' on' : ''));
    toggle.setAttribute('role', 'switch'); toggle.setAttribute('aria-checked', String(Boolean(monitor.enabled))); toggle.setAttribute('aria-label', 'Telegram-уведомления');
    card.append(text, toggle); main.append(card, el('h2', 'Диагностика'));
    const grid = el('div', undefined, 'tools-grid');
    for (const [op, label, icon] of [['system', 'Система', '▣'], ['ping', 'Ping-check', '◎'], ['ping-now', 'Проверить туннели', '↗'], ['logs', 'Логи', '≡'], ['diagnostics', 'Статус диагностики', '◇'], ['diagnostics-run', 'Запустить диагностику', '▶'], ['report', 'Отчёт диагностики', '▤']]) {
      const node = button('', async () => {
        if (op === 'diagnostics-run' && !confirm('Запустить сбор диагностического отчёта?')) return;
        const data = await api(op);
        // Refresh a result without repeating state-changing operations.
        resultLoader = () => api(op === 'diagnostics-run' ? 'diagnostics' : op === 'ping-now' ? 'ping' : op);
        view = 'result'; showResult(label, data);
      }, 'tool');
      node.append(el('span', icon, 'tool-icon'), el('span', label)); grid.append(node);
    }
    main.append(grid);
  } else if (view === 'result' && resultLoader) showResult(resultTitle, await resultLoader());
}
document.querySelectorAll('nav button').forEach(node => node.onclick = () => operate(async () => {
  if (view !== node.dataset.view) main.replaceChildren();
  view = activeView = node.dataset.view; await load();
}));
document.getElementById('refresh').onclick = () => operate(load);
document.getElementById('theme').onclick = () => {
  themeOverride = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  try { localStorage.setItem('awg-theme', themeOverride); } catch (_) {}
  setTheme(themeOverride);
};
operate(load);
setInterval(() => { if (!document.hidden && !busy && ['tunnels', 'wan'].includes(view)) operate(load); }, 15000);
