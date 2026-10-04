"use strict";
// Линейные иконки Lucide (lucide.dev) — содержимое <svg viewBox="0 0 24 24">,
// рамку добавляет icon() в app.js. Лицензия Lucide целиком:
/*
ISC License

Copyright (c) 2026 Lucide Icons and Contributors

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

---

The following Lucide icons are derived from the Feather project:

airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out

The MIT License (MIT) (for the icons listed above)

Copyright (c) 2013-present Cole Bemis

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
const ICONS = {
  "shield-check": '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
  "moon": '<path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/>',
  "sun": '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',
  "heart": '<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/>',
  "menu": '<path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/>',
  "plus": '<path d="M5 12h14"/><path d="M12 5v14"/>',
  "download": '<path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/>',
  "upload": '<path d="M12 3v12"/><path d="m17 8-5-5-5 5"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>',
  "square-pen": '<path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"/>',
  "pencil": '<path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/>',
  "gauge": '<path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/>',
  "trash-2": '<path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
  "qr-code": '<rect width="5" height="5" x="3" y="3" rx="1"/><rect width="5" height="5" x="16" y="3" rx="1"/><rect width="5" height="5" x="3" y="16" rx="1"/><path d="M21 16h-3a2 2 0 0 0-2 2v3"/><path d="M21 21v.01"/><path d="M12 7v3a2 2 0 0 1-2 2H7"/><path d="M3 12h.01"/><path d="M12 3h.01"/><path d="M12 16v.01"/><path d="M16 12h1"/><path d="M21 12v.01"/><path d="M12 21v-1"/>',
  "refresh-cw": '<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',
  "users": '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/>',
  "server": '<rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/>',
  "globe": '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
  "network": '<rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/>',
  "stethoscope": '<path d="M11 2v2"/><path d="M5 2v2"/><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"/><path d="M8 15a6 6 0 0 0 12 0v-3"/><circle cx="20" cy="10" r="2"/>',
  "hard-drive": '<path d="M10 16h.01"/><path d="M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/><path d="M21.946 12.013H2.054"/><path d="M6 16h.01"/>',
  "archive": '<rect width="20" height="5" x="2" y="3" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/><path d="M10 12h4"/>',
  "circle-arrow-up": '<circle cx="12" cy="12" r="10"/><path d="m16 12-4-4-4 4"/><path d="M12 16V8"/>',
  "bot": '<path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/>',
  "shield": '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',
  "chevron-down": '<path d="m6 9 6 6 6-6"/>',
  "chevron-right": '<path d="m9 18 6-6-6-6"/>',
  "search": '<path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/>',
  "check": '<path d="M20 6 9 17l-5-5"/>',
  "x": '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  "send": '<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/>',
  "copy": '<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
  "lock": '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  "clock": '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  "activity": '<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/>',
  "power": '<path d="M12 2v10"/><path d="M18.4 6.6a9 9 0 1 1-12.77.04"/>',
  "play": '<path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"/>',
  "square": '<rect width="18" height="18" x="3" y="3" rx="2"/>',
  "settings": '<path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"/><circle cx="12" cy="12" r="3"/>',
  "file-text": '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',
  "list": '<path d="M3 5h.01"/><path d="M3 12h.01"/><path d="M3 19h.01"/><path d="M8 5h13"/><path d="M8 12h13"/><path d="M8 19h13"/>',
  "layout-list": '<rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/><path d="M14 4h7"/><path d="M14 9h7"/><path d="M14 15h7"/><path d="M14 20h7"/>',
  "layout-grid": '<rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>',
  "grid-3x3": '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/><path d="M9 3v18"/><path d="M15 3v18"/>',
  "terminal": '<path d="M12 19h8"/><path d="m4 17 6-6-6-6"/>',
  "zap": '<path d="M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z"/>',
  "cloud": '<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>',
  "satellite": '<path d="m13.5 6.5-3.148-3.148a1.205 1.205 0 0 0-1.704 0L6.352 5.648a1.205 1.205 0 0 0 0 1.704L9.5 10.5"/><path d="M16.5 7.5 19 5"/><path d="m17.5 10.5 3.148 3.148a1.205 1.205 0 0 1 0 1.704l-2.296 2.296a1.205 1.205 0 0 1-1.704 0L13.5 14.5"/><path d="M9 21a6 6 0 0 0-6-6"/><path d="M9.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l4.296-4.296a1.205 1.205 0 0 0 0-1.704l-2.296-2.296a1.205 1.205 0 0 0-1.704 0z"/>',
  "door-open": '<path d="M10 21H2"/><path d="M10 3H7a2 2 0 00-2 2v16"/><path d="M14 12h.01"/><path d="M19 21V5a2 2 0 00-1.675-1.974l-6.163-1.013A1 1 0 0010 3v18a1 1 0 001.124.992z"/><path d="M22 21h-3"/>',
  "shuffle": '<path d="m18 14 4 4-4 4"/><path d="m18 2 4 4-4 4"/><path d="M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22"/><path d="M2 6h1.972a4 4 0 0 1 3.6 2.2"/><path d="M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45"/>',
  "lock-keyhole": '<circle cx="12" cy="16" r="1"/><rect x="3" y="10" width="18" height="12" rx="2"/><path d="M7 10V7a5 5 0 0 1 10 0v3"/>',
  "wrench": '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"/>',
  "cpu": '<path d="M12 20v2"/><path d="M12 2v2"/><path d="M17 20v2"/><path d="M17 2v2"/><path d="M2 12h2"/><path d="M2 17h2"/><path d="M2 7h2"/><path d="M20 12h2"/><path d="M20 17h2"/><path d="M20 7h2"/><path d="M7 20v2"/><path d="M7 2v2"/><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="8" y="8" width="8" height="8" rx="1"/>',
  "triangle-alert": '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
  "info": '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
  "link": '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
  "key": '<path d="m2 21 9.6-9.6"/><path d="m7.5 15.5 2.3 2.3a1 1 0 0 1 0 1.4l-2.1 2.1a1 1 0 0 1-1.4 0L4 19"/><circle cx="15.5" cy="7.5" r="5.5"/>',
  "sliders-horizontal": '<path d="M10 5H3"/><path d="M12 19H3"/><path d="M14 3v4"/><path d="M16 17v4"/><path d="M21 12h-9"/><path d="M21 19h-5"/><path d="M21 5h-7"/><path d="M8 10v4"/><path d="M8 12H3"/>',
  "rotate-ccw": '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',
  "arrow-down-up": '<path d="m3 16 4 4 4-4"/><path d="M7 20V4"/><path d="m21 8-4-4-4 4"/><path d="M17 4v16"/>',
  "bell": '<path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/>',
  "bell-off": '<path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742"/><path d="m2 2 20 20"/><path d="M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05"/>',
  "calendar-clock": '<path d="M16 14v2.2l1.6 1"/><path d="M16 2v3"/><path d="M21 7.338V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h2.338"/><path d="M3 9h5.859"/><path d="M8 2v3"/><circle cx="16" cy="16" r="6"/>',
  "user": '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  "eye": '<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/>',
  "history": '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/>',
  "package": '<path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"/><path d="M12 22V12"/><polyline points="3.29 7 12 12 20.71 7"/><path d="m7.5 4.27 9 5.15"/>',
  "waypoints": '<path d="m10.586 5.414-5.172 5.172"/><path d="m18.586 13.414-5.172 5.172"/><path d="M6 12h12"/><circle cx="12" cy="20" r="2"/><circle cx="12" cy="4" r="2"/><circle cx="20" cy="12" r="2"/><circle cx="4" cy="12" r="2"/>',
  "sparkles": '<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/><path d="M20 2v4"/><path d="M22 4h-4"/><circle cx="4" cy="20" r="2"/>',
  "scale": '<path d="M12 3v18"/><path d="m19 8 3 8a5 5 0 0 1-6 0zV7"/><path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1"/><path d="m5 8 3 8a5 5 0 0 1-6 0zV7"/><path d="M7 21h10"/>',
  "minus": '<path d="M5 12h14"/>',
  "eraser": '<path d="M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21"/><path d="m5.082 11.09 8.828 8.828"/>',
  "save": '<path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"/><path d="M7 3v4a1 1 0 0 0 1 1h7"/>',
  "repeat": '<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>',
  "layers": '<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"/><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"/>',
  "undo-2": '<path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"/>',
  "notebook-pen": '<path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"/><path d="M2 6h4"/><path d="M2 10h4"/><path d="M2 14h4"/><path d="M2 18h4"/><path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/>',
  "hash": '<line x1="4" x2="20" y1="9" y2="9"/><line x1="4" x2="20" y1="15" y2="15"/><line x1="10" x2="8" y1="3" y2="21"/><line x1="16" x2="14" y1="3" y2="21"/>',
  "dices": '<rect width="12" height="12" x="2" y="10" rx="2" ry="2"/><path d="m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6"/><path d="M6 18h.01"/><path d="M10 14h.01"/><path d="M15 6h.01"/><path d="M18 9h.01"/>',
  "drama": '<path d="M10 11h.01"/><path d="M14 6h.01"/><path d="M18 6h.01"/><path d="M6.5 13.1h.01"/><path d="M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3"/><path d="M17.4 9.9c-.8.8-2 .8-2.8 0"/><path d="M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7"/><path d="M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4"/>',
  "hourglass": '<path d="M5 22h14"/><path d="M5 2h14"/><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"/><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"/>',
  "siren": '<path d="M7 18v-6a5 5 0 1 1 10 0v6"/><path d="M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z"/><path d="M21 12h1"/><path d="M18.5 4.5 18 5"/><path d="M2 12h1"/><path d="M12 2v1"/><path d="m4.929 4.929.707.707"/><path d="M12 12v6"/>',
  "radio": '<path d="M16.247 7.761a6 6 0 0 1 0 8.478"/><path d="M19.075 4.933a10 10 0 0 1 0 14.134"/><path d="M4.925 19.067a10 10 0 0 1 0-14.134"/><path d="M7.753 16.239a6 6 0 0 1 0-8.478"/><circle cx="12" cy="12" r="2"/>',
  "list-checks": '<path d="M13 5h8"/><path d="M13 12h8"/><path d="M13 19h8"/><path d="m3 17 2 2 4-4"/><path d="m3 7 2 2 4-4"/>',
  "paperclip": '<path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"/>',
  "arrow-down-a-z": '<path d="m3 16 4 4 4-4"/><path d="M7 20V4"/><path d="M20 8h-5"/><path d="M15 10V6.5a2.5 2.5 0 0 1 5 0V10"/><path d="M15 14h5l-5 6h5"/>',
  "circle-check": '<circle cx="12" cy="12" r="10"/><path d="m16 9-5.5 5.5L8 12"/>',
  "circle-x": '<circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/>',
  "loader-circle": '<path d="M21 12a9 9 0 1 1-6.219-8.56"/>',
  "square-check": '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="m16 9-5.5 5.5L8 12"/>',
  "filter": '<path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"/>',
  "ellipsis": '<circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>',
  "house": '<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
  "arrow-left-right": '<path d="M8 3 4 7l4 4"/><path d="M4 7h16"/><path d="m16 21 4-4-4-4"/><path d="M20 17H4"/>',
  "router": '<rect width="20" height="8" x="2" y="14" rx="2"/><path d="M6.01 18H6"/><path d="M10.01 18H10"/><path d="M15 10v4"/><path d="M17.84 7.17a4 4 0 0 0-5.66 0"/><path d="M20.66 4.34a8 8 0 0 0-11.31 0"/>',
  "tag": '<path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/>',
  "timer": '<line x1="10" x2="14" y1="2" y2="2"/><line x1="12" x2="15" y1="14" y2="11"/><circle cx="12" cy="14" r="8"/>',
  "folder": '<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/>',
  "file-archive": '<path d="M13.659 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v11.5"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M8 12v-1"/><path d="M8 18v-2"/><path d="M8 7V6"/><circle cx="8" cy="20" r="2"/>',
  "external-link": '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
  "rotate-cw": '<path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/>',
  "circle-stop": '<circle cx="12" cy="12" r="10"/><rect x="9" y="9" width="6" height="6" rx="1"/>',
  "circle-play": '<path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"/><circle cx="12" cy="12" r="10"/>',
  "arrow-down": '<path d="M12 5v14"/><path d="m19 12-7 7-7-7"/>',
  "arrow-up": '<path d="m5 12 7-7 7 7"/><path d="M12 19V5"/>',
  "message-square-text": '<path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"/><path d="M7 11h10"/><path d="M7 15h6"/><path d="M7 7h8"/>',
  "crosshair": '<circle cx="12" cy="12" r="10"/><line x1="22" x2="18" y1="12" y2="12"/><line x1="6" x2="2" y1="12" y2="12"/><line x1="12" x2="12" y1="6" y2="2"/><line x1="12" x2="12" y1="22" y2="18"/>',
  "flask-conical": '<path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"/><path d="M6.453 15h11.094"/><path d="M8.5 2h7"/>',
  "arrow-left": '<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',
  "chevron-left": '<path d="m15 18-6-6 6-6"/>',
  "smartphone": '<rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>',
  "infinity": '<path d="M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8"/>',
  "a-large-small": '<path d="m15 16 2.536-7.328a1.02 1.02 1 0 1 1.928 0L22 16"/><path d="M15.697 14h5.606"/><path d="m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16"/><path d="M3.304 13h6.392"/>',
  "map-pin": '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
  "palette": '<path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"/><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>',
  "share-2": '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/>',
  "user-plus": '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" x2="19" y1="8" y2="14"/><line x1="22" x2="16" y1="11" y2="11"/>',
  "shield-off": '<path d="m2 2 20 20"/><path d="M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71"/><path d="M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264"/>',
};


/* AWG Toolza UI / pumbaX
MIT License

Copyright (c) 2026 KavinZZ

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


*/

/* AWG Manager logo / hoaxisr. Source SVG metadata: Ware&Soft, https://wareandsoft.com/
MIT License

Copyright (c) 2026 hoaxisr

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


*/

// Original AWG Manager logo, hoaxisr/awg-manager frontend/static/favicon.svg.
const AWGM_LOGO = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 550 550\" preserveAspectRatio=\"xMidYMid\" class=\"awgm-logo\" aria-hidden=\"true\"><defs id=\"defs9\" /><g id=\"g103\" transform=\"matrix(1.2090726,0,0,1.2090726,-57.773414,-56.207997)\">\n    <path d=\"m 314.13069,342.61231 c -1.55,0.3125 -1.55078,1.93868 -1.30078,5.13867 0.3,5.39999 0.002,5.09922 8.10156,8.19922 2,0.7 4.49844,2.89922 5.89844,5.19922 1.6,2.59999 3.20078,3.90117 4.30078,3.70117 1.4,-0.3 1.69922,-1.60002 1.69922,-8.5 h 0.10156 v -8.20117 l -8.20117,-2.79883 c -5.94998,-2.05 -9.04961,-3.05078 -10.59961,-2.73828 z\" id=\"path31\" fill=\"#7aa1f7\" fill-opacity=\"1\" stroke=\"none\" stroke-width=\"4.223\" stroke-linecap=\"square\" stroke-opacity=\"1\" paint-order=\"fill markers stroke\" />\n    <path d=\"m 247.03108,277.04981 c -5.29998,0 -9.70117,0.40078 -9.70117,0.80078 0,1.8 8.00117,13.19882 10.70117,15.29883 2.6,1.99999 4.00002,2.30077 15.5,2.30077 6.99998,0 12.69922,-0.20078 12.69922,-0.30077 v 0 c 0.10096,-0.71602 -4.49883,-4.39923 -9.79883,-9.19923 l -9.80078,-8.90039 z\" id=\"path30\" fill=\"#7aa1f7\" fill-opacity=\"1\" stroke=\"none\" stroke-width=\"4.223\" stroke-linecap=\"square\" stroke-opacity=\"1\" paint-order=\"fill markers stroke\" />\n    \n    \n    \n    <path d=\"m 275.32991,63.250975 53.40039,19.39844 c 76.89984,27.899945 111.19961,40.500395 115.59961,42.400395 l 3.80078,1.59961 v 13.10156 c 0,19.29996 -1.79961,60.69926 -3.59961,81.69922 -5.89998,69.19986 -21.20123,122.19968 -45.70117,158.59961 -16.19997,23.79995 -39.39889,47.90121 -65.79883,67.70117 -19.89996,14.79997 -54.7,37.2 -58,37 -0.7,0 -7.80119,-4.0004 -15.70117,-8.90039 v -0.0996 c -22.19996,-13.89998 -35.29846,-22.90042 -48.89844,-33.9004 -14.49996,-11.79998 -34.40119,-31.00002 -43.70117,-42.5 l -6.40039,-8.09961 1.20117,-6.20117 c 0.7,-3.4 2.00039,-9.29962 2.90039,-13.09961 l 1.5,-6.90039 9.69922,-6.29883 9.69922,-6.40039 5.30078,2.90039 c 20.69996,11.39997 93,47.69922 95,47.69922 1.8,-0.1 27.39963,-7.30079 34.59961,-9.80078 0.9,-0.3 3.40078,1.00156 5.80078,3.10156 2.3,2 4.59961,3.69961 5.09961,3.59961 0.4,0 6.80002,-8.39963 14,-18.59961 l 13.19922,-18.60156 -0.59961,-15.79883 -0.59961,-15.80078 7.80078,-8.79883 c 25.99996,-29.59994 41.29845,-63.30047 47.39844,-104.40039 1.9,-13.39998 3.90078,-43.09961 2.80078,-43.09961 -0.3,0 -2.40039,3.10001 -4.40039,7 -10.09998,18.29996 -21.29924,36.39924 -27.69922,44.69922 -7.99998,10.29998 -21.30041,23.19962 -29.90039,29.09961 -8.29998,5.59998 -24.69922,13.70117 -24.69922,12.20117 0,-0.7 0.7,-4.60001 1.5,-8.5 1.4,-6.99998 2.29844,-42.5 0.89844,-42.5 -0.3,0 -6.19924,4.30001 -13.19922,9.5 -14.59997,10.89998 -28.80078,18.69883 -32.30078,17.79883 -3.7,-0.9 -15.19844,-10.69883 -16.39844,-13.79883 -0.6,-1.5 -3.60078,-11.50002 -6.80078,-22 l -5.59961,-19.20117 5.09961,-5.40039 c 2.8,-3 5.99922,-7.19844 7.19922,-9.39844 2.8,-5.29999 5.30078,-18.10158 5.30078,-26.10156 0,-8.49999 -2.09922,-24.69883 -3.19922,-24.29883 -1,0.4 -13.20041,9.79963 -26.40039,20.59961 -5.29998,4.29999 -10.00078,7.90039 -10.30078,7.90039 -0.3,0 -1.20039,-2.90079 -1.90039,-6.30078 -1.4,-7.09999 -7.79883,-21.10041 -11.79883,-25.90039 l -2.5,-3.09961 -4.90039,2.59961 c -6.19998,3.39999 -20.3,16.50157 -23.5,22.10156 -1.4,2.5 -3.19922,4.5 -3.69922,4.5 -0.6,0 -11.20002,-4.60119 -23.5,-10.20117 l -22.7595,-5.53077 -17.94167,4.53077 c -10.09998,5.09998 -18.60039,9.20117 -18.90039,9.20117 -0.3,0 -0.5,-4.0004 -0.5,-8.90039 v -9 l 6.40039,-2.40039 c 3.5,-1.3 42.40008,-15.50004 86.5,-31.500005 z\" id=\"path26\" fill=\"#7aa1f7\" fill-opacity=\"1\" stroke=\"#7aa1f7\" stroke-width=\"4.223\" stroke-linecap=\"square\" stroke-opacity=\"1\" paint-order=\"fill markers stroke\" />\n    </g></svg>";

//---------------------------------------------------------------------
//
// QR Code Generator for JavaScript
//
// Copyright (c) 2009 Kazuhiko Arase
//
// URL: http://www.d-project.com/
//
// Licensed under the MIT license:
//  http://www.opensource.org/licenses/mit-license.php
//
// The word 'QR Code' is registered trademark of
// DENSO WAVE INCORPORATED
//  http://www.denso-wave.com/qrcode/faqpatent-e.html
//
//---------------------------------------------------------------------

var qrcode = function() {

  //---------------------------------------------------------------------
  // qrcode
  //---------------------------------------------------------------------

  /**
   * qrcode
   * @param typeNumber 1 to 40
   * @param errorCorrectionLevel 'L','M','Q','H'
   */
  var qrcode = function(typeNumber, errorCorrectionLevel) {

    var PAD0 = 0xEC;
    var PAD1 = 0x11;

    var _typeNumber = typeNumber;
    var _errorCorrectionLevel = QRErrorCorrectionLevel[errorCorrectionLevel];
    var _modules = null;
    var _moduleCount = 0;
    var _dataCache = null;
    var _dataList = [];

    var _this = {};

    var makeImpl = function(test, maskPattern) {

      _moduleCount = _typeNumber * 4 + 17;
      _modules = function(moduleCount) {
        var modules = new Array(moduleCount);
        for (var row = 0; row < moduleCount; row += 1) {
          modules[row] = new Array(moduleCount);
          for (var col = 0; col < moduleCount; col += 1) {
            modules[row][col] = null;
          }
        }
        return modules;
      }(_moduleCount);

      setupPositionProbePattern(0, 0);
      setupPositionProbePattern(_moduleCount - 7, 0);
      setupPositionProbePattern(0, _moduleCount - 7);
      setupPositionAdjustPattern();
      setupTimingPattern();
      setupTypeInfo(test, maskPattern);

      if (_typeNumber >= 7) {
        setupTypeNumber(test);
      }

      if (_dataCache == null) {
        _dataCache = createData(_typeNumber, _errorCorrectionLevel, _dataList);
      }

      mapData(_dataCache, maskPattern);
    };

    var setupPositionProbePattern = function(row, col) {

      for (var r = -1; r <= 7; r += 1) {

        if (row + r <= -1 || _moduleCount <= row + r) continue;

        for (var c = -1; c <= 7; c += 1) {

          if (col + c <= -1 || _moduleCount <= col + c) continue;

          if ( (0 <= r && r <= 6 && (c == 0 || c == 6) )
              || (0 <= c && c <= 6 && (r == 0 || r == 6) )
              || (2 <= r && r <= 4 && 2 <= c && c <= 4) ) {
            _modules[row + r][col + c] = true;
          } else {
            _modules[row + r][col + c] = false;
          }
        }
      }
    };

    var getBestMaskPattern = function() {

      var minLostPoint = 0;
      var pattern = 0;

      for (var i = 0; i < 8; i += 1) {

        makeImpl(true, i);

        var lostPoint = QRUtil.getLostPoint(_this);

        if (i == 0 || minLostPoint > lostPoint) {
          minLostPoint = lostPoint;
          pattern = i;
        }
      }

      return pattern;
    };

    var setupTimingPattern = function() {

      for (var r = 8; r < _moduleCount - 8; r += 1) {
        if (_modules[r][6] != null) {
          continue;
        }
        _modules[r][6] = (r % 2 == 0);
      }

      for (var c = 8; c < _moduleCount - 8; c += 1) {
        if (_modules[6][c] != null) {
          continue;
        }
        _modules[6][c] = (c % 2 == 0);
      }
    };

    var setupPositionAdjustPattern = function() {

      var pos = QRUtil.getPatternPosition(_typeNumber);

      for (var i = 0; i < pos.length; i += 1) {

        for (var j = 0; j < pos.length; j += 1) {

          var row = pos[i];
          var col = pos[j];

          if (_modules[row][col] != null) {
            continue;
          }

          for (var r = -2; r <= 2; r += 1) {

            for (var c = -2; c <= 2; c += 1) {

              if (r == -2 || r == 2 || c == -2 || c == 2
                  || (r == 0 && c == 0) ) {
                _modules[row + r][col + c] = true;
              } else {
                _modules[row + r][col + c] = false;
              }
            }
          }
        }
      }
    };

    var setupTypeNumber = function(test) {

      var bits = QRUtil.getBCHTypeNumber(_typeNumber);

      for (var i = 0; i < 18; i += 1) {
        var mod = (!test && ( (bits >> i) & 1) == 1);
        _modules[Math.floor(i / 3)][i % 3 + _moduleCount - 8 - 3] = mod;
      }

      for (var i = 0; i < 18; i += 1) {
        var mod = (!test && ( (bits >> i) & 1) == 1);
        _modules[i % 3 + _moduleCount - 8 - 3][Math.floor(i / 3)] = mod;
      }
    };

    var setupTypeInfo = function(test, maskPattern) {

      var data = (_errorCorrectionLevel << 3) | maskPattern;
      var bits = QRUtil.getBCHTypeInfo(data);

      // vertical
      for (var i = 0; i < 15; i += 1) {

        var mod = (!test && ( (bits >> i) & 1) == 1);

        if (i < 6) {
          _modules[i][8] = mod;
        } else if (i < 8) {
          _modules[i + 1][8] = mod;
        } else {
          _modules[_moduleCount - 15 + i][8] = mod;
        }
      }

      // horizontal
      for (var i = 0; i < 15; i += 1) {

        var mod = (!test && ( (bits >> i) & 1) == 1);

        if (i < 8) {
          _modules[8][_moduleCount - i - 1] = mod;
        } else if (i < 9) {
          _modules[8][15 - i - 1 + 1] = mod;
        } else {
          _modules[8][15 - i - 1] = mod;
        }
      }

      // fixed module
      _modules[_moduleCount - 8][8] = (!test);
    };

    var mapData = function(data, maskPattern) {

      var inc = -1;
      var row = _moduleCount - 1;
      var bitIndex = 7;
      var byteIndex = 0;
      var maskFunc = QRUtil.getMaskFunction(maskPattern);

      for (var col = _moduleCount - 1; col > 0; col -= 2) {

        if (col == 6) col -= 1;

        while (true) {

          for (var c = 0; c < 2; c += 1) {

            if (_modules[row][col - c] == null) {

              var dark = false;

              if (byteIndex < data.length) {
                dark = ( ( (data[byteIndex] >>> bitIndex) & 1) == 1);
              }

              var mask = maskFunc(row, col - c);

              if (mask) {
                dark = !dark;
              }

              _modules[row][col - c] = dark;
              bitIndex -= 1;

              if (bitIndex == -1) {
                byteIndex += 1;
                bitIndex = 7;
              }
            }
          }

          row += inc;

          if (row < 0 || _moduleCount <= row) {
            row -= inc;
            inc = -inc;
            break;
          }
        }
      }
    };

    var createBytes = function(buffer, rsBlocks) {

      var offset = 0;

      var maxDcCount = 0;
      var maxEcCount = 0;

      var dcdata = new Array(rsBlocks.length);
      var ecdata = new Array(rsBlocks.length);

      for (var r = 0; r < rsBlocks.length; r += 1) {

        var dcCount = rsBlocks[r].dataCount;
        var ecCount = rsBlocks[r].totalCount - dcCount;

        maxDcCount = Math.max(maxDcCount, dcCount);
        maxEcCount = Math.max(maxEcCount, ecCount);

        dcdata[r] = new Array(dcCount);

        for (var i = 0; i < dcdata[r].length; i += 1) {
          dcdata[r][i] = 0xff & buffer.getBuffer()[i + offset];
        }
        offset += dcCount;

        var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);
        var rawPoly = qrPolynomial(dcdata[r], rsPoly.getLength() - 1);

        var modPoly = rawPoly.mod(rsPoly);
        ecdata[r] = new Array(rsPoly.getLength() - 1);
        for (var i = 0; i < ecdata[r].length; i += 1) {
          var modIndex = i + modPoly.getLength() - ecdata[r].length;
          ecdata[r][i] = (modIndex >= 0)? modPoly.getAt(modIndex) : 0;
        }
      }

      var totalCodeCount = 0;
      for (var i = 0; i < rsBlocks.length; i += 1) {
        totalCodeCount += rsBlocks[i].totalCount;
      }

      var data = new Array(totalCodeCount);
      var index = 0;

      for (var i = 0; i < maxDcCount; i += 1) {
        for (var r = 0; r < rsBlocks.length; r += 1) {
          if (i < dcdata[r].length) {
            data[index] = dcdata[r][i];
            index += 1;
          }
        }
      }

      for (var i = 0; i < maxEcCount; i += 1) {
        for (var r = 0; r < rsBlocks.length; r += 1) {
          if (i < ecdata[r].length) {
            data[index] = ecdata[r][i];
            index += 1;
          }
        }
      }

      return data;
    };

    var createData = function(typeNumber, errorCorrectionLevel, dataList) {

      var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, errorCorrectionLevel);

      var buffer = qrBitBuffer();

      for (var i = 0; i < dataList.length; i += 1) {
        var data = dataList[i];
        buffer.put(data.getMode(), 4);
        buffer.put(data.getLength(), QRUtil.getLengthInBits(data.getMode(), typeNumber) );
        data.write(buffer);
      }

      // calc num max data.
      var totalDataCount = 0;
      for (var i = 0; i < rsBlocks.length; i += 1) {
        totalDataCount += rsBlocks[i].dataCount;
      }

      if (buffer.getLengthInBits() > totalDataCount * 8) {
        throw 'code length overflow. ('
          + buffer.getLengthInBits()
          + '>'
          + totalDataCount * 8
          + ')';
      }

      // end code
      if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {
        buffer.put(0, 4);
      }

      // padding
      while (buffer.getLengthInBits() % 8 != 0) {
        buffer.putBit(false);
      }

      // padding
      while (true) {

        if (buffer.getLengthInBits() >= totalDataCount * 8) {
          break;
        }
        buffer.put(PAD0, 8);

        if (buffer.getLengthInBits() >= totalDataCount * 8) {
          break;
        }
        buffer.put(PAD1, 8);
      }

      return createBytes(buffer, rsBlocks);
    };

    _this.addData = function(data, mode) {

      mode = mode || 'Byte';

      var newData = null;

      switch(mode) {
      case 'Numeric' :
        newData = qrNumber(data);
        break;
      case 'Alphanumeric' :
        newData = qrAlphaNum(data);
        break;
      case 'Byte' :
        newData = qr8BitByte(data);
        break;
      case 'Kanji' :
        newData = qrKanji(data);
        break;
      default :
        throw 'mode:' + mode;
      }

      _dataList.push(newData);
      _dataCache = null;
    };

    _this.isDark = function(row, col) {
      if (row < 0 || _moduleCount <= row || col < 0 || _moduleCount <= col) {
        throw row + ',' + col;
      }
      return _modules[row][col];
    };

    _this.getModuleCount = function() {
      return _moduleCount;
    };

    _this.make = function() {
      if (_typeNumber < 1) {
        var typeNumber = 1;

        for (; typeNumber < 40; typeNumber++) {
          var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, _errorCorrectionLevel);
          var buffer = qrBitBuffer();

          for (var i = 0; i < _dataList.length; i++) {
            var data = _dataList[i];
            buffer.put(data.getMode(), 4);
            buffer.put(data.getLength(), QRUtil.getLengthInBits(data.getMode(), typeNumber) );
            data.write(buffer);
          }

          var totalDataCount = 0;
          for (var i = 0; i < rsBlocks.length; i++) {
            totalDataCount += rsBlocks[i].dataCount;
          }

          if (buffer.getLengthInBits() <= totalDataCount * 8) {
            break;
          }
        }

        _typeNumber = typeNumber;
      }

      makeImpl(false, getBestMaskPattern() );
    };

    _this.createTableTag = function(cellSize, margin) {

      cellSize = cellSize || 2;
      margin = (typeof margin == 'undefined')? cellSize * 4 : margin;

      var qrHtml = '';

      qrHtml += '<table style="';
      qrHtml += ' border-width: 0px; border-style: none;';
      qrHtml += ' border-collapse: collapse;';
      qrHtml += ' padding: 0px; margin: ' + margin + 'px;';
      qrHtml += '">';
      qrHtml += '<tbody>';

      for (var r = 0; r < _this.getModuleCount(); r += 1) {

        qrHtml += '<tr>';

        for (var c = 0; c < _this.getModuleCount(); c += 1) {
          qrHtml += '<td style="';
          qrHtml += ' border-width: 0px; border-style: none;';
          qrHtml += ' border-collapse: collapse;';
          qrHtml += ' padding: 0px; margin: 0px;';
          qrHtml += ' width: ' + cellSize + 'px;';
          qrHtml += ' height: ' + cellSize + 'px;';
          qrHtml += ' background-color: ';
          qrHtml += _this.isDark(r, c)? '#000000' : '#ffffff';
          qrHtml += ';';
          qrHtml += '"/>';
        }

        qrHtml += '</tr>';
      }

      qrHtml += '</tbody>';
      qrHtml += '</table>';

      return qrHtml;
    };

    _this.createSvgTag = function(cellSize, margin, alt, title) {

      var opts = {};
      if (typeof arguments[0] == 'object') {
        // Called by options.
        opts = arguments[0];
        // overwrite cellSize and margin.
        cellSize = opts.cellSize;
        margin = opts.margin;
        alt = opts.alt;
        title = opts.title;
      }

      cellSize = cellSize || 2;
      margin = (typeof margin == 'undefined')? cellSize * 4 : margin;

      // Compose alt property surrogate
      alt = (typeof alt === 'string') ? {text: alt} : alt || {};
      alt.text = alt.text || null;
      alt.id = (alt.text) ? alt.id || 'qrcode-description' : null;

      // Compose title property surrogate
      title = (typeof title === 'string') ? {text: title} : title || {};
      title.text = title.text || null;
      title.id = (title.text) ? title.id || 'qrcode-title' : null;

      var size = _this.getModuleCount() * cellSize + margin * 2;
      var c, mc, r, mr, qrSvg='', rect;

      rect = 'l' + cellSize + ',0 0,' + cellSize +
        ' -' + cellSize + ',0 0,-' + cellSize + 'z ';

      qrSvg += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"';
      qrSvg += !opts.scalable ? ' width="' + size + 'px" height="' + size + 'px"' : '';
      qrSvg += ' viewBox="0 0 ' + size + ' ' + size + '" ';
      qrSvg += ' preserveAspectRatio="xMinYMin meet"';
      qrSvg += (title.text || alt.text) ? ' role="img" aria-labelledby="' +
          escapeXml([title.id, alt.id].join(' ').trim() ) + '"' : '';
      qrSvg += '>';
      qrSvg += (title.text) ? '<title id="' + escapeXml(title.id) + '">' +
          escapeXml(title.text) + '</title>' : '';
      qrSvg += (alt.text) ? '<description id="' + escapeXml(alt.id) + '">' +
          escapeXml(alt.text) + '</description>' : '';
      qrSvg += '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>';
      qrSvg += '<path d="';

      for (r = 0; r < _this.getModuleCount(); r += 1) {
        mr = r * cellSize + margin;
        for (c = 0; c < _this.getModuleCount(); c += 1) {
          if (_this.isDark(r, c) ) {
            mc = c*cellSize+margin;
            qrSvg += 'M' + mc + ',' + mr + rect;
          }
        }
      }

      qrSvg += '" stroke="transparent" fill="black"/>';
      qrSvg += '</svg>';

      return qrSvg;
    };

    _this.createDataURL = function(cellSize, margin) {

      cellSize = cellSize || 2;
      margin = (typeof margin == 'undefined')? cellSize * 4 : margin;

      var size = _this.getModuleCount() * cellSize + margin * 2;
      var min = margin;
      var max = size - margin;

      return createDataURL(size, size, function(x, y) {
        if (min <= x && x < max && min <= y && y < max) {
          var c = Math.floor( (x - min) / cellSize);
          var r = Math.floor( (y - min) / cellSize);
          return _this.isDark(r, c)? 0 : 1;
        } else {
          return 1;
        }
      } );
    };

    _this.createImgTag = function(cellSize, margin, alt) {

      cellSize = cellSize || 2;
      margin = (typeof margin == 'undefined')? cellSize * 4 : margin;

      var size = _this.getModuleCount() * cellSize + margin * 2;

      var img = '';
      img += '<img';
      img += '\u0020src="';
      img += _this.createDataURL(cellSize, margin);
      img += '"';
      img += '\u0020width="';
      img += size;
      img += '"';
      img += '\u0020height="';
      img += size;
      img += '"';
      if (alt) {
        img += '\u0020alt="';
        img += escapeXml(alt);
        img += '"';
      }
      img += '/>';

      return img;
    };

    var escapeXml = function(s) {
      var escaped = '';
      for (var i = 0; i < s.length; i += 1) {
        var c = s.charAt(i);
        switch(c) {
        case '<': escaped += '&lt;'; break;
        case '>': escaped += '&gt;'; break;
        case '&': escaped += '&amp;'; break;
        case '"': escaped += '&quot;'; break;
        default : escaped += c; break;
        }
      }
      return escaped;
    };

    var _createHalfASCII = function(margin) {
      var cellSize = 1;
      margin = (typeof margin == 'undefined')? cellSize * 2 : margin;

      var size = _this.getModuleCount() * cellSize + margin * 2;
      var min = margin;
      var max = size - margin;

      var y, x, r1, r2, p;

      var blocks = {
        '██': '█',
        '█ ': '▀',
        ' █': '▄',
        '  ': ' '
      };

      var blocksLastLineNoMargin = {
        '██': '▀',
        '█ ': '▀',
        ' █': ' ',
        '  ': ' '
      };

      var ascii = '';
      for (y = 0; y < size; y += 2) {
        r1 = Math.floor((y - min) / cellSize);
        r2 = Math.floor((y + 1 - min) / cellSize);
        for (x = 0; x < size; x += 1) {
          p = '█';

          if (min <= x && x < max && min <= y && y < max && _this.isDark(r1, Math.floor((x - min) / cellSize))) {
            p = ' ';
          }

          if (min <= x && x < max && min <= y+1 && y+1 < max && _this.isDark(r2, Math.floor((x - min) / cellSize))) {
            p += ' ';
          }
          else {
            p += '█';
          }

          // Output 2 characters per pixel, to create full square. 1 character per pixels gives only half width of square.
          ascii += (margin < 1 && y+1 >= max) ? blocksLastLineNoMargin[p] : blocks[p];
        }

        ascii += '\n';
      }

      if (size % 2 && margin > 0) {
        return ascii.substring(0, ascii.length - size - 1) + Array(size+1).join('▀');
      }

      return ascii.substring(0, ascii.length-1);
    };

    _this.createASCII = function(cellSize, margin) {
      cellSize = cellSize || 1;

      if (cellSize < 2) {
        return _createHalfASCII(margin);
      }

      cellSize -= 1;
      margin = (typeof margin == 'undefined')? cellSize * 2 : margin;

      var size = _this.getModuleCount() * cellSize + margin * 2;
      var min = margin;
      var max = size - margin;

      var y, x, r, p;

      var white = Array(cellSize+1).join('██');
      var black = Array(cellSize+1).join('  ');

      var ascii = '';
      var line = '';
      for (y = 0; y < size; y += 1) {
        r = Math.floor( (y - min) / cellSize);
        line = '';
        for (x = 0; x < size; x += 1) {
          p = 1;

          if (min <= x && x < max && min <= y && y < max && _this.isDark(r, Math.floor((x - min) / cellSize))) {
            p = 0;
          }

          // Output 2 characters per pixel, to create full square. 1 character per pixels gives only half width of square.
          line += p ? white : black;
        }

        for (r = 0; r < cellSize; r += 1) {
          ascii += line + '\n';
        }
      }

      return ascii.substring(0, ascii.length-1);
    };

    _this.renderTo2dContext = function(context, cellSize) {
      cellSize = cellSize || 2;
      var length = _this.getModuleCount();
      for (var row = 0; row < length; row++) {
        for (var col = 0; col < length; col++) {
          context.fillStyle = _this.isDark(row, col) ? 'black' : 'white';
          context.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
        }
      }
    }

    return _this;
  };

  //---------------------------------------------------------------------
  // qrcode.stringToBytes
  //---------------------------------------------------------------------

  qrcode.stringToBytesFuncs = {
    'default' : function(s) {
      var bytes = [];
      for (var i = 0; i < s.length; i += 1) {
        var c = s.charCodeAt(i);
        bytes.push(c & 0xff);
      }
      return bytes;
    }
  };

  qrcode.stringToBytes = qrcode.stringToBytesFuncs['default'];

  //---------------------------------------------------------------------
  // qrcode.createStringToBytes
  //---------------------------------------------------------------------

  /**
   * @param unicodeData base64 string of byte array.
   * [16bit Unicode],[16bit Bytes], ...
   * @param numChars
   */
  qrcode.createStringToBytes = function(unicodeData, numChars) {

    // create conversion map.

    var unicodeMap = function() {

      var bin = base64DecodeInputStream(unicodeData);
      var read = function() {
        var b = bin.read();
        if (b == -1) throw 'eof';
        return b;
      };

      var count = 0;
      var unicodeMap = {};
      while (true) {
        var b0 = bin.read();
        if (b0 == -1) break;
        var b1 = read();
        var b2 = read();
        var b3 = read();
        var k = String.fromCharCode( (b0 << 8) | b1);
        var v = (b2 << 8) | b3;
        unicodeMap[k] = v;
        count += 1;
      }
      if (count != numChars) {
        throw count + ' != ' + numChars;
      }

      return unicodeMap;
    }();

    var unknownChar = '?'.charCodeAt(0);

    return function(s) {
      var bytes = [];
      for (var i = 0; i < s.length; i += 1) {
        var c = s.charCodeAt(i);
        if (c < 128) {
          bytes.push(c);
        } else {
          var b = unicodeMap[s.charAt(i)];
          if (typeof b == 'number') {
            if ( (b & 0xff) == b) {
              // 1byte
              bytes.push(b);
            } else {
              // 2bytes
              bytes.push(b >>> 8);
              bytes.push(b & 0xff);
            }
          } else {
            bytes.push(unknownChar);
          }
        }
      }
      return bytes;
    };
  };

  //---------------------------------------------------------------------
  // QRMode
  //---------------------------------------------------------------------

  var QRMode = {
    MODE_NUMBER :    1 << 0,
    MODE_ALPHA_NUM : 1 << 1,
    MODE_8BIT_BYTE : 1 << 2,
    MODE_KANJI :     1 << 3
  };

  //---------------------------------------------------------------------
  // QRErrorCorrectionLevel
  //---------------------------------------------------------------------

  var QRErrorCorrectionLevel = {
    L : 1,
    M : 0,
    Q : 3,
    H : 2
  };

  //---------------------------------------------------------------------
  // QRMaskPattern
  //---------------------------------------------------------------------

  var QRMaskPattern = {
    PATTERN000 : 0,
    PATTERN001 : 1,
    PATTERN010 : 2,
    PATTERN011 : 3,
    PATTERN100 : 4,
    PATTERN101 : 5,
    PATTERN110 : 6,
    PATTERN111 : 7
  };

  //---------------------------------------------------------------------
  // QRUtil
  //---------------------------------------------------------------------

  var QRUtil = function() {

    var PATTERN_POSITION_TABLE = [
      [],
      [6, 18],
      [6, 22],
      [6, 26],
      [6, 30],
      [6, 34],
      [6, 22, 38],
      [6, 24, 42],
      [6, 26, 46],
      [6, 28, 50],
      [6, 30, 54],
      [6, 32, 58],
      [6, 34, 62],
      [6, 26, 46, 66],
      [6, 26, 48, 70],
      [6, 26, 50, 74],
      [6, 30, 54, 78],
      [6, 30, 56, 82],
      [6, 30, 58, 86],
      [6, 34, 62, 90],
      [6, 28, 50, 72, 94],
      [6, 26, 50, 74, 98],
      [6, 30, 54, 78, 102],
      [6, 28, 54, 80, 106],
      [6, 32, 58, 84, 110],
      [6, 30, 58, 86, 114],
      [6, 34, 62, 90, 118],
      [6, 26, 50, 74, 98, 122],
      [6, 30, 54, 78, 102, 126],
      [6, 26, 52, 78, 104, 130],
      [6, 30, 56, 82, 108, 134],
      [6, 34, 60, 86, 112, 138],
      [6, 30, 58, 86, 114, 142],
      [6, 34, 62, 90, 118, 146],
      [6, 30, 54, 78, 102, 126, 150],
      [6, 24, 50, 76, 102, 128, 154],
      [6, 28, 54, 80, 106, 132, 158],
      [6, 32, 58, 84, 110, 136, 162],
      [6, 26, 54, 82, 110, 138, 166],
      [6, 30, 58, 86, 114, 142, 170]
    ];
    var G15 = (1 << 10) | (1 << 8) | (1 << 5) | (1 << 4) | (1 << 2) | (1 << 1) | (1 << 0);
    var G18 = (1 << 12) | (1 << 11) | (1 << 10) | (1 << 9) | (1 << 8) | (1 << 5) | (1 << 2) | (1 << 0);
    var G15_MASK = (1 << 14) | (1 << 12) | (1 << 10) | (1 << 4) | (1 << 1);

    var _this = {};

    var getBCHDigit = function(data) {
      var digit = 0;
      while (data != 0) {
        digit += 1;
        data >>>= 1;
      }
      return digit;
    };

    _this.getBCHTypeInfo = function(data) {
      var d = data << 10;
      while (getBCHDigit(d) - getBCHDigit(G15) >= 0) {
        d ^= (G15 << (getBCHDigit(d) - getBCHDigit(G15) ) );
      }
      return ( (data << 10) | d) ^ G15_MASK;
    };

    _this.getBCHTypeNumber = function(data) {
      var d = data << 12;
      while (getBCHDigit(d) - getBCHDigit(G18) >= 0) {
        d ^= (G18 << (getBCHDigit(d) - getBCHDigit(G18) ) );
      }
      return (data << 12) | d;
    };

    _this.getPatternPosition = function(typeNumber) {
      return PATTERN_POSITION_TABLE[typeNumber - 1];
    };

    _this.getMaskFunction = function(maskPattern) {

      switch (maskPattern) {

      case QRMaskPattern.PATTERN000 :
        return function(i, j) { return (i + j) % 2 == 0; };
      case QRMaskPattern.PATTERN001 :
        return function(i, j) { return i % 2 == 0; };
      case QRMaskPattern.PATTERN010 :
        return function(i, j) { return j % 3 == 0; };
      case QRMaskPattern.PATTERN011 :
        return function(i, j) { return (i + j) % 3 == 0; };
      case QRMaskPattern.PATTERN100 :
        return function(i, j) { return (Math.floor(i / 2) + Math.floor(j / 3) ) % 2 == 0; };
      case QRMaskPattern.PATTERN101 :
        return function(i, j) { return (i * j) % 2 + (i * j) % 3 == 0; };
      case QRMaskPattern.PATTERN110 :
        return function(i, j) { return ( (i * j) % 2 + (i * j) % 3) % 2 == 0; };
      case QRMaskPattern.PATTERN111 :
        return function(i, j) { return ( (i * j) % 3 + (i + j) % 2) % 2 == 0; };

      default :
        throw 'bad maskPattern:' + maskPattern;
      }
    };

    _this.getErrorCorrectPolynomial = function(errorCorrectLength) {
      var a = qrPolynomial([1], 0);
      for (var i = 0; i < errorCorrectLength; i += 1) {
        a = a.multiply(qrPolynomial([1, QRMath.gexp(i)], 0) );
      }
      return a;
    };

    _this.getLengthInBits = function(mode, type) {

      if (1 <= type && type < 10) {

        // 1 - 9

        switch(mode) {
        case QRMode.MODE_NUMBER    : return 10;
        case QRMode.MODE_ALPHA_NUM : return 9;
        case QRMode.MODE_8BIT_BYTE : return 8;
        case QRMode.MODE_KANJI     : return 8;
        default :
          throw 'mode:' + mode;
        }

      } else if (type < 27) {

        // 10 - 26

        switch(mode) {
        case QRMode.MODE_NUMBER    : return 12;
        case QRMode.MODE_ALPHA_NUM : return 11;
        case QRMode.MODE_8BIT_BYTE : return 16;
        case QRMode.MODE_KANJI     : return 10;
        default :
          throw 'mode:' + mode;
        }

      } else if (type < 41) {

        // 27 - 40

        switch(mode) {
        case QRMode.MODE_NUMBER    : return 14;
        case QRMode.MODE_ALPHA_NUM : return 13;
        case QRMode.MODE_8BIT_BYTE : return 16;
        case QRMode.MODE_KANJI     : return 12;
        default :
          throw 'mode:' + mode;
        }

      } else {
        throw 'type:' + type;
      }
    };

    _this.getLostPoint = function(qrcode) {

      var moduleCount = qrcode.getModuleCount();

      var lostPoint = 0;

      // LEVEL1

      for (var row = 0; row < moduleCount; row += 1) {
        for (var col = 0; col < moduleCount; col += 1) {

          var sameCount = 0;
          var dark = qrcode.isDark(row, col);

          for (var r = -1; r <= 1; r += 1) {

            if (row + r < 0 || moduleCount <= row + r) {
              continue;
            }

            for (var c = -1; c <= 1; c += 1) {

              if (col + c < 0 || moduleCount <= col + c) {
                continue;
              }

              if (r == 0 && c == 0) {
                continue;
              }

              if (dark == qrcode.isDark(row + r, col + c) ) {
                sameCount += 1;
              }
            }
          }

          if (sameCount > 5) {
            lostPoint += (3 + sameCount - 5);
          }
        }
      };

      // LEVEL2

      for (var row = 0; row < moduleCount - 1; row += 1) {
        for (var col = 0; col < moduleCount - 1; col += 1) {
          var count = 0;
          if (qrcode.isDark(row, col) ) count += 1;
          if (qrcode.isDark(row + 1, col) ) count += 1;
          if (qrcode.isDark(row, col + 1) ) count += 1;
          if (qrcode.isDark(row + 1, col + 1) ) count += 1;
          if (count == 0 || count == 4) {
            lostPoint += 3;
          }
        }
      }

      // LEVEL3

      for (var row = 0; row < moduleCount; row += 1) {
        for (var col = 0; col < moduleCount - 6; col += 1) {
          if (qrcode.isDark(row, col)
              && !qrcode.isDark(row, col + 1)
              &&  qrcode.isDark(row, col + 2)
              &&  qrcode.isDark(row, col + 3)
              &&  qrcode.isDark(row, col + 4)
              && !qrcode.isDark(row, col + 5)
              &&  qrcode.isDark(row, col + 6) ) {
            lostPoint += 40;
          }
        }
      }

      for (var col = 0; col < moduleCount; col += 1) {
        for (var row = 0; row < moduleCount - 6; row += 1) {
          if (qrcode.isDark(row, col)
              && !qrcode.isDark(row + 1, col)
              &&  qrcode.isDark(row + 2, col)
              &&  qrcode.isDark(row + 3, col)
              &&  qrcode.isDark(row + 4, col)
              && !qrcode.isDark(row + 5, col)
              &&  qrcode.isDark(row + 6, col) ) {
            lostPoint += 40;
          }
        }
      }

      // LEVEL4

      var darkCount = 0;

      for (var col = 0; col < moduleCount; col += 1) {
        for (var row = 0; row < moduleCount; row += 1) {
          if (qrcode.isDark(row, col) ) {
            darkCount += 1;
          }
        }
      }

      var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
      lostPoint += ratio * 10;

      return lostPoint;
    };

    return _this;
  }();

  //---------------------------------------------------------------------
  // QRMath
  //---------------------------------------------------------------------

  var QRMath = function() {

    var EXP_TABLE = new Array(256);
    var LOG_TABLE = new Array(256);

    // initialize tables
    for (var i = 0; i < 8; i += 1) {
      EXP_TABLE[i] = 1 << i;
    }
    for (var i = 8; i < 256; i += 1) {
      EXP_TABLE[i] = EXP_TABLE[i - 4]
        ^ EXP_TABLE[i - 5]
        ^ EXP_TABLE[i - 6]
        ^ EXP_TABLE[i - 8];
    }
    for (var i = 0; i < 255; i += 1) {
      LOG_TABLE[EXP_TABLE[i] ] = i;
    }

    var _this = {};

    _this.glog = function(n) {

      if (n < 1) {
        throw 'glog(' + n + ')';
      }

      return LOG_TABLE[n];
    };

    _this.gexp = function(n) {

      while (n < 0) {
        n += 255;
      }

      while (n >= 256) {
        n -= 255;
      }

      return EXP_TABLE[n];
    };

    return _this;
  }();

  //---------------------------------------------------------------------
  // qrPolynomial
  //---------------------------------------------------------------------

  function qrPolynomial(num, shift) {

    if (typeof num.length == 'undefined') {
      throw num.length + '/' + shift;
    }

    var _num = function() {
      var offset = 0;
      while (offset < num.length && num[offset] == 0) {
        offset += 1;
      }
      var _num = new Array(num.length - offset + shift);
      for (var i = 0; i < num.length - offset; i += 1) {
        _num[i] = num[i + offset];
      }
      return _num;
    }();

    var _this = {};

    _this.getAt = function(index) {
      return _num[index];
    };

    _this.getLength = function() {
      return _num.length;
    };

    _this.multiply = function(e) {

      var num = new Array(_this.getLength() + e.getLength() - 1);

      for (var i = 0; i < _this.getLength(); i += 1) {
        for (var j = 0; j < e.getLength(); j += 1) {
          num[i + j] ^= QRMath.gexp(QRMath.glog(_this.getAt(i) ) + QRMath.glog(e.getAt(j) ) );
        }
      }

      return qrPolynomial(num, 0);
    };

    _this.mod = function(e) {

      if (_this.getLength() - e.getLength() < 0) {
        return _this;
      }

      var ratio = QRMath.glog(_this.getAt(0) ) - QRMath.glog(e.getAt(0) );

      var num = new Array(_this.getLength() );
      for (var i = 0; i < _this.getLength(); i += 1) {
        num[i] = _this.getAt(i);
      }

      for (var i = 0; i < e.getLength(); i += 1) {
        num[i] ^= QRMath.gexp(QRMath.glog(e.getAt(i) ) + ratio);
      }

      // recursive call
      return qrPolynomial(num, 0).mod(e);
    };

    return _this;
  };

  //---------------------------------------------------------------------
  // QRRSBlock
  //---------------------------------------------------------------------

  var QRRSBlock = function() {

    var RS_BLOCK_TABLE = [

      // L
      // M
      // Q
      // H

      // 1
      [1, 26, 19],
      [1, 26, 16],
      [1, 26, 13],
      [1, 26, 9],

      // 2
      [1, 44, 34],
      [1, 44, 28],
      [1, 44, 22],
      [1, 44, 16],

      // 3
      [1, 70, 55],
      [1, 70, 44],
      [2, 35, 17],
      [2, 35, 13],

      // 4
      [1, 100, 80],
      [2, 50, 32],
      [2, 50, 24],
      [4, 25, 9],

      // 5
      [1, 134, 108],
      [2, 67, 43],
      [2, 33, 15, 2, 34, 16],
      [2, 33, 11, 2, 34, 12],

      // 6
      [2, 86, 68],
      [4, 43, 27],
      [4, 43, 19],
      [4, 43, 15],

      // 7
      [2, 98, 78],
      [4, 49, 31],
      [2, 32, 14, 4, 33, 15],
      [4, 39, 13, 1, 40, 14],

      // 8
      [2, 121, 97],
      [2, 60, 38, 2, 61, 39],
      [4, 40, 18, 2, 41, 19],
      [4, 40, 14, 2, 41, 15],

      // 9
      [2, 146, 116],
      [3, 58, 36, 2, 59, 37],
      [4, 36, 16, 4, 37, 17],
      [4, 36, 12, 4, 37, 13],

      // 10
      [2, 86, 68, 2, 87, 69],
      [4, 69, 43, 1, 70, 44],
      [6, 43, 19, 2, 44, 20],
      [6, 43, 15, 2, 44, 16],

      // 11
      [4, 101, 81],
      [1, 80, 50, 4, 81, 51],
      [4, 50, 22, 4, 51, 23],
      [3, 36, 12, 8, 37, 13],

      // 12
      [2, 116, 92, 2, 117, 93],
      [6, 58, 36, 2, 59, 37],
      [4, 46, 20, 6, 47, 21],
      [7, 42, 14, 4, 43, 15],

      // 13
      [4, 133, 107],
      [8, 59, 37, 1, 60, 38],
      [8, 44, 20, 4, 45, 21],
      [12, 33, 11, 4, 34, 12],

      // 14
      [3, 145, 115, 1, 146, 116],
      [4, 64, 40, 5, 65, 41],
      [11, 36, 16, 5, 37, 17],
      [11, 36, 12, 5, 37, 13],

      // 15
      [5, 109, 87, 1, 110, 88],
      [5, 65, 41, 5, 66, 42],
      [5, 54, 24, 7, 55, 25],
      [11, 36, 12, 7, 37, 13],

      // 16
      [5, 122, 98, 1, 123, 99],
      [7, 73, 45, 3, 74, 46],
      [15, 43, 19, 2, 44, 20],
      [3, 45, 15, 13, 46, 16],

      // 17
      [1, 135, 107, 5, 136, 108],
      [10, 74, 46, 1, 75, 47],
      [1, 50, 22, 15, 51, 23],
      [2, 42, 14, 17, 43, 15],

      // 18
      [5, 150, 120, 1, 151, 121],
      [9, 69, 43, 4, 70, 44],
      [17, 50, 22, 1, 51, 23],
      [2, 42, 14, 19, 43, 15],

      // 19
      [3, 141, 113, 4, 142, 114],
      [3, 70, 44, 11, 71, 45],
      [17, 47, 21, 4, 48, 22],
      [9, 39, 13, 16, 40, 14],

      // 20
      [3, 135, 107, 5, 136, 108],
      [3, 67, 41, 13, 68, 42],
      [15, 54, 24, 5, 55, 25],
      [15, 43, 15, 10, 44, 16],

      // 21
      [4, 144, 116, 4, 145, 117],
      [17, 68, 42],
      [17, 50, 22, 6, 51, 23],
      [19, 46, 16, 6, 47, 17],

      // 22
      [2, 139, 111, 7, 140, 112],
      [17, 74, 46],
      [7, 54, 24, 16, 55, 25],
      [34, 37, 13],

      // 23
      [4, 151, 121, 5, 152, 122],
      [4, 75, 47, 14, 76, 48],
      [11, 54, 24, 14, 55, 25],
      [16, 45, 15, 14, 46, 16],

      // 24
      [6, 147, 117, 4, 148, 118],
      [6, 73, 45, 14, 74, 46],
      [11, 54, 24, 16, 55, 25],
      [30, 46, 16, 2, 47, 17],

      // 25
      [8, 132, 106, 4, 133, 107],
      [8, 75, 47, 13, 76, 48],
      [7, 54, 24, 22, 55, 25],
      [22, 45, 15, 13, 46, 16],

      // 26
      [10, 142, 114, 2, 143, 115],
      [19, 74, 46, 4, 75, 47],
      [28, 50, 22, 6, 51, 23],
      [33, 46, 16, 4, 47, 17],

      // 27
      [8, 152, 122, 4, 153, 123],
      [22, 73, 45, 3, 74, 46],
      [8, 53, 23, 26, 54, 24],
      [12, 45, 15, 28, 46, 16],

      // 28
      [3, 147, 117, 10, 148, 118],
      [3, 73, 45, 23, 74, 46],
      [4, 54, 24, 31, 55, 25],
      [11, 45, 15, 31, 46, 16],

      // 29
      [7, 146, 116, 7, 147, 117],
      [21, 73, 45, 7, 74, 46],
      [1, 53, 23, 37, 54, 24],
      [19, 45, 15, 26, 46, 16],

      // 30
      [5, 145, 115, 10, 146, 116],
      [19, 75, 47, 10, 76, 48],
      [15, 54, 24, 25, 55, 25],
      [23, 45, 15, 25, 46, 16],

      // 31
      [13, 145, 115, 3, 146, 116],
      [2, 74, 46, 29, 75, 47],
      [42, 54, 24, 1, 55, 25],
      [23, 45, 15, 28, 46, 16],

      // 32
      [17, 145, 115],
      [10, 74, 46, 23, 75, 47],
      [10, 54, 24, 35, 55, 25],
      [19, 45, 15, 35, 46, 16],

      // 33
      [17, 145, 115, 1, 146, 116],
      [14, 74, 46, 21, 75, 47],
      [29, 54, 24, 19, 55, 25],
      [11, 45, 15, 46, 46, 16],

      // 34
      [13, 145, 115, 6, 146, 116],
      [14, 74, 46, 23, 75, 47],
      [44, 54, 24, 7, 55, 25],
      [59, 46, 16, 1, 47, 17],

      // 35
      [12, 151, 121, 7, 152, 122],
      [12, 75, 47, 26, 76, 48],
      [39, 54, 24, 14, 55, 25],
      [22, 45, 15, 41, 46, 16],

      // 36
      [6, 151, 121, 14, 152, 122],
      [6, 75, 47, 34, 76, 48],
      [46, 54, 24, 10, 55, 25],
      [2, 45, 15, 64, 46, 16],

      // 37
      [17, 152, 122, 4, 153, 123],
      [29, 74, 46, 14, 75, 47],
      [49, 54, 24, 10, 55, 25],
      [24, 45, 15, 46, 46, 16],

      // 38
      [4, 152, 122, 18, 153, 123],
      [13, 74, 46, 32, 75, 47],
      [48, 54, 24, 14, 55, 25],
      [42, 45, 15, 32, 46, 16],

      // 39
      [20, 147, 117, 4, 148, 118],
      [40, 75, 47, 7, 76, 48],
      [43, 54, 24, 22, 55, 25],
      [10, 45, 15, 67, 46, 16],

      // 40
      [19, 148, 118, 6, 149, 119],
      [18, 75, 47, 31, 76, 48],
      [34, 54, 24, 34, 55, 25],
      [20, 45, 15, 61, 46, 16]
    ];

    var qrRSBlock = function(totalCount, dataCount) {
      var _this = {};
      _this.totalCount = totalCount;
      _this.dataCount = dataCount;
      return _this;
    };

    var _this = {};

    var getRsBlockTable = function(typeNumber, errorCorrectionLevel) {

      switch(errorCorrectionLevel) {
      case QRErrorCorrectionLevel.L :
        return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];
      case QRErrorCorrectionLevel.M :
        return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];
      case QRErrorCorrectionLevel.Q :
        return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];
      case QRErrorCorrectionLevel.H :
        return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];
      default :
        return undefined;
      }
    };

    _this.getRSBlocks = function(typeNumber, errorCorrectionLevel) {

      var rsBlock = getRsBlockTable(typeNumber, errorCorrectionLevel);

      if (typeof rsBlock == 'undefined') {
        throw 'bad rs block @ typeNumber:' + typeNumber +
            '/errorCorrectionLevel:' + errorCorrectionLevel;
      }

      var length = rsBlock.length / 3;

      var list = [];

      for (var i = 0; i < length; i += 1) {

        var count = rsBlock[i * 3 + 0];
        var totalCount = rsBlock[i * 3 + 1];
        var dataCount = rsBlock[i * 3 + 2];

        for (var j = 0; j < count; j += 1) {
          list.push(qrRSBlock(totalCount, dataCount) );
        }
      }

      return list;
    };

    return _this;
  }();

  //---------------------------------------------------------------------
  // qrBitBuffer
  //---------------------------------------------------------------------

  var qrBitBuffer = function() {

    var _buffer = [];
    var _length = 0;

    var _this = {};

    _this.getBuffer = function() {
      return _buffer;
    };

    _this.getAt = function(index) {
      var bufIndex = Math.floor(index / 8);
      return ( (_buffer[bufIndex] >>> (7 - index % 8) ) & 1) == 1;
    };

    _this.put = function(num, length) {
      for (var i = 0; i < length; i += 1) {
        _this.putBit( ( (num >>> (length - i - 1) ) & 1) == 1);
      }
    };

    _this.getLengthInBits = function() {
      return _length;
    };

    _this.putBit = function(bit) {

      var bufIndex = Math.floor(_length / 8);
      if (_buffer.length <= bufIndex) {
        _buffer.push(0);
      }

      if (bit) {
        _buffer[bufIndex] |= (0x80 >>> (_length % 8) );
      }

      _length += 1;
    };

    return _this;
  };

  //---------------------------------------------------------------------
  // qrNumber
  //---------------------------------------------------------------------

  var qrNumber = function(data) {

    var _mode = QRMode.MODE_NUMBER;
    var _data = data;

    var _this = {};

    _this.getMode = function() {
      return _mode;
    };

    _this.getLength = function(buffer) {
      return _data.length;
    };

    _this.write = function(buffer) {

      var data = _data;

      var i = 0;

      while (i + 2 < data.length) {
        buffer.put(strToNum(data.substring(i, i + 3) ), 10);
        i += 3;
      }

      if (i < data.length) {
        if (data.length - i == 1) {
          buffer.put(strToNum(data.substring(i, i + 1) ), 4);
        } else if (data.length - i == 2) {
          buffer.put(strToNum(data.substring(i, i + 2) ), 7);
        }
      }
    };

    var strToNum = function(s) {
      var num = 0;
      for (var i = 0; i < s.length; i += 1) {
        num = num * 10 + chatToNum(s.charAt(i) );
      }
      return num;
    };

    var chatToNum = function(c) {
      if ('0' <= c && c <= '9') {
        return c.charCodeAt(0) - '0'.charCodeAt(0);
      }
      throw 'illegal char :' + c;
    };

    return _this;
  };

  //---------------------------------------------------------------------
  // qrAlphaNum
  //---------------------------------------------------------------------

  var qrAlphaNum = function(data) {

    var _mode = QRMode.MODE_ALPHA_NUM;
    var _data = data;

    var _this = {};

    _this.getMode = function() {
      return _mode;
    };

    _this.getLength = function(buffer) {
      return _data.length;
    };

    _this.write = function(buffer) {

      var s = _data;

      var i = 0;

      while (i + 1 < s.length) {
        buffer.put(
          getCode(s.charAt(i) ) * 45 +
          getCode(s.charAt(i + 1) ), 11);
        i += 2;
      }

      if (i < s.length) {
        buffer.put(getCode(s.charAt(i) ), 6);
      }
    };

    var getCode = function(c) {

      if ('0' <= c && c <= '9') {
        return c.charCodeAt(0) - '0'.charCodeAt(0);
      } else if ('A' <= c && c <= 'Z') {
        return c.charCodeAt(0) - 'A'.charCodeAt(0) + 10;
      } else {
        switch (c) {
        case ' ' : return 36;
        case '$' : return 37;
        case '%' : return 38;
        case '*' : return 39;
        case '+' : return 40;
        case '-' : return 41;
        case '.' : return 42;
        case '/' : return 43;
        case ':' : return 44;
        default :
          throw 'illegal char :' + c;
        }
      }
    };

    return _this;
  };

  //---------------------------------------------------------------------
  // qr8BitByte
  //---------------------------------------------------------------------

  var qr8BitByte = function(data) {

    var _mode = QRMode.MODE_8BIT_BYTE;
    var _data = data;
    var _bytes = qrcode.stringToBytes(data);

    var _this = {};

    _this.getMode = function() {
      return _mode;
    };

    _this.getLength = function(buffer) {
      return _bytes.length;
    };

    _this.write = function(buffer) {
      for (var i = 0; i < _bytes.length; i += 1) {
        buffer.put(_bytes[i], 8);
      }
    };

    return _this;
  };

  //---------------------------------------------------------------------
  // qrKanji
  //---------------------------------------------------------------------

  var qrKanji = function(data) {

    var _mode = QRMode.MODE_KANJI;
    var _data = data;

    var stringToBytes = qrcode.stringToBytesFuncs['SJIS'];
    if (!stringToBytes) {
      throw 'sjis not supported.';
    }
    !function(c, code) {
      // self test for sjis support.
      var test = stringToBytes(c);
      if (test.length != 2 || ( (test[0] << 8) | test[1]) != code) {
        throw 'sjis not supported.';
      }
    }('\u53cb', 0x9746);

    var _bytes = stringToBytes(data);

    var _this = {};

    _this.getMode = function() {
      return _mode;
    };

    _this.getLength = function(buffer) {
      return ~~(_bytes.length / 2);
    };

    _this.write = function(buffer) {

      var data = _bytes;

      var i = 0;

      while (i + 1 < data.length) {

        var c = ( (0xff & data[i]) << 8) | (0xff & data[i + 1]);

        if (0x8140 <= c && c <= 0x9FFC) {
          c -= 0x8140;
        } else if (0xE040 <= c && c <= 0xEBBF) {
          c -= 0xC140;
        } else {
          throw 'illegal char at ' + (i + 1) + '/' + c;
        }

        c = ( (c >>> 8) & 0xff) * 0xC0 + (c & 0xff);

        buffer.put(c, 13);

        i += 2;
      }

      if (i < data.length) {
        throw 'illegal char at ' + (i + 1);
      }
    };

    return _this;
  };

  //=====================================================================
  // GIF Support etc.
  //

  //---------------------------------------------------------------------
  // byteArrayOutputStream
  //---------------------------------------------------------------------

  var byteArrayOutputStream = function() {

    var _bytes = [];

    var _this = {};

    _this.writeByte = function(b) {
      _bytes.push(b & 0xff);
    };

    _this.writeShort = function(i) {
      _this.writeByte(i);
      _this.writeByte(i >>> 8);
    };

    _this.writeBytes = function(b, off, len) {
      off = off || 0;
      len = len || b.length;
      for (var i = 0; i < len; i += 1) {
        _this.writeByte(b[i + off]);
      }
    };

    _this.writeString = function(s) {
      for (var i = 0; i < s.length; i += 1) {
        _this.writeByte(s.charCodeAt(i) );
      }
    };

    _this.toByteArray = function() {
      return _bytes;
    };

    _this.toString = function() {
      var s = '';
      s += '[';
      for (var i = 0; i < _bytes.length; i += 1) {
        if (i > 0) {
          s += ',';
        }
        s += _bytes[i];
      }
      s += ']';
      return s;
    };

    return _this;
  };

  //---------------------------------------------------------------------
  // base64EncodeOutputStream
  //---------------------------------------------------------------------

  var base64EncodeOutputStream = function() {

    var _buffer = 0;
    var _buflen = 0;
    var _length = 0;
    var _base64 = '';

    var _this = {};

    var writeEncoded = function(b) {
      _base64 += String.fromCharCode(encode(b & 0x3f) );
    };

    var encode = function(n) {
      if (n < 0) {
        // error.
      } else if (n < 26) {
        return 0x41 + n;
      } else if (n < 52) {
        return 0x61 + (n - 26);
      } else if (n < 62) {
        return 0x30 + (n - 52);
      } else if (n == 62) {
        return 0x2b;
      } else if (n == 63) {
        return 0x2f;
      }
      throw 'n:' + n;
    };

    _this.writeByte = function(n) {

      _buffer = (_buffer << 8) | (n & 0xff);
      _buflen += 8;
      _length += 1;

      while (_buflen >= 6) {
        writeEncoded(_buffer >>> (_buflen - 6) );
        _buflen -= 6;
      }
    };

    _this.flush = function() {

      if (_buflen > 0) {
        writeEncoded(_buffer << (6 - _buflen) );
        _buffer = 0;
        _buflen = 0;
      }

      if (_length % 3 != 0) {
        // padding
        var padlen = 3 - _length % 3;
        for (var i = 0; i < padlen; i += 1) {
          _base64 += '=';
        }
      }
    };

    _this.toString = function() {
      return _base64;
    };

    return _this;
  };

  //---------------------------------------------------------------------
  // base64DecodeInputStream
  //---------------------------------------------------------------------

  var base64DecodeInputStream = function(str) {

    var _str = str;
    var _pos = 0;
    var _buffer = 0;
    var _buflen = 0;

    var _this = {};

    _this.read = function() {

      while (_buflen < 8) {

        if (_pos >= _str.length) {
          if (_buflen == 0) {
            return -1;
          }
          throw 'unexpected end of file./' + _buflen;
        }

        var c = _str.charAt(_pos);
        _pos += 1;

        if (c == '=') {
          _buflen = 0;
          return -1;
        } else if (c.match(/^\s$/) ) {
          // ignore if whitespace.
          continue;
        }

        _buffer = (_buffer << 6) | decode(c.charCodeAt(0) );
        _buflen += 6;
      }

      var n = (_buffer >>> (_buflen - 8) ) & 0xff;
      _buflen -= 8;
      return n;
    };

    var decode = function(c) {
      if (0x41 <= c && c <= 0x5a) {
        return c - 0x41;
      } else if (0x61 <= c && c <= 0x7a) {
        return c - 0x61 + 26;
      } else if (0x30 <= c && c <= 0x39) {
        return c - 0x30 + 52;
      } else if (c == 0x2b) {
        return 62;
      } else if (c == 0x2f) {
        return 63;
      } else {
        throw 'c:' + c;
      }
    };

    return _this;
  };

  //---------------------------------------------------------------------
  // gifImage (B/W)
  //---------------------------------------------------------------------

  var gifImage = function(width, height) {

    var _width = width;
    var _height = height;
    var _data = new Array(width * height);

    var _this = {};

    _this.setPixel = function(x, y, pixel) {
      _data[y * _width + x] = pixel;
    };

    _this.write = function(out) {

      //---------------------------------
      // GIF Signature

      out.writeString('GIF87a');

      //---------------------------------
      // Screen Descriptor

      out.writeShort(_width);
      out.writeShort(_height);

      out.writeByte(0x80); // 2bit
      out.writeByte(0);
      out.writeByte(0);

      //---------------------------------
      // Global Color Map

      // black
      out.writeByte(0x00);
      out.writeByte(0x00);
      out.writeByte(0x00);

      // white
      out.writeByte(0xff);
      out.writeByte(0xff);
      out.writeByte(0xff);

      //---------------------------------
      // Image Descriptor

      out.writeString(',');
      out.writeShort(0);
      out.writeShort(0);
      out.writeShort(_width);
      out.writeShort(_height);
      out.writeByte(0);

      //---------------------------------
      // Local Color Map

      //---------------------------------
      // Raster Data

      var lzwMinCodeSize = 2;
      var raster = getLZWRaster(lzwMinCodeSize);

      out.writeByte(lzwMinCodeSize);

      var offset = 0;

      while (raster.length - offset > 255) {
        out.writeByte(255);
        out.writeBytes(raster, offset, 255);
        offset += 255;
      }

      out.writeByte(raster.length - offset);
      out.writeBytes(raster, offset, raster.length - offset);
      out.writeByte(0x00);

      //---------------------------------
      // GIF Terminator
      out.writeString(';');
    };

    var bitOutputStream = function(out) {

      var _out = out;
      var _bitLength = 0;
      var _bitBuffer = 0;

      var _this = {};

      _this.write = function(data, length) {

        if ( (data >>> length) != 0) {
          throw 'length over';
        }

        while (_bitLength + length >= 8) {
          _out.writeByte(0xff & ( (data << _bitLength) | _bitBuffer) );
          length -= (8 - _bitLength);
          data >>>= (8 - _bitLength);
          _bitBuffer = 0;
          _bitLength = 0;
        }

        _bitBuffer = (data << _bitLength) | _bitBuffer;
        _bitLength = _bitLength + length;
      };

      _this.flush = function() {
        if (_bitLength > 0) {
          _out.writeByte(_bitBuffer);
        }
      };

      return _this;
    };

    var getLZWRaster = function(lzwMinCodeSize) {

      var clearCode = 1 << lzwMinCodeSize;
      var endCode = (1 << lzwMinCodeSize) + 1;
      var bitLength = lzwMinCodeSize + 1;

      // Setup LZWTable
      var table = lzwTable();

      for (var i = 0; i < clearCode; i += 1) {
        table.add(String.fromCharCode(i) );
      }
      table.add(String.fromCharCode(clearCode) );
      table.add(String.fromCharCode(endCode) );

      var byteOut = byteArrayOutputStream();
      var bitOut = bitOutputStream(byteOut);

      // clear code
      bitOut.write(clearCode, bitLength);

      var dataIndex = 0;

      var s = String.fromCharCode(_data[dataIndex]);
      dataIndex += 1;

      while (dataIndex < _data.length) {

        var c = String.fromCharCode(_data[dataIndex]);
        dataIndex += 1;

        if (table.contains(s + c) ) {

          s = s + c;

        } else {

          bitOut.write(table.indexOf(s), bitLength);

          if (table.size() < 0xfff) {

            if (table.size() == (1 << bitLength) ) {
              bitLength += 1;
            }

            table.add(s + c);
          }

          s = c;
        }
      }

      bitOut.write(table.indexOf(s), bitLength);

      // end code
      bitOut.write(endCode, bitLength);

      bitOut.flush();

      return byteOut.toByteArray();
    };

    var lzwTable = function() {

      var _map = {};
      var _size = 0;

      var _this = {};

      _this.add = function(key) {
        if (_this.contains(key) ) {
          throw 'dup key:' + key;
        }
        _map[key] = _size;
        _size += 1;
      };

      _this.size = function() {
        return _size;
      };

      _this.indexOf = function(key) {
        return _map[key];
      };

      _this.contains = function(key) {
        return typeof _map[key] != 'undefined';
      };

      return _this;
    };

    return _this;
  };

  var createDataURL = function(width, height, getPixel) {
    var gif = gifImage(width, height);
    for (var y = 0; y < height; y += 1) {
      for (var x = 0; x < width; x += 1) {
        gif.setPixel(x, y, getPixel(x, y) );
      }
    }

    var b = byteArrayOutputStream();
    gif.write(b);

    var base64 = base64EncodeOutputStream();
    var bytes = b.toByteArray();
    for (var i = 0; i < bytes.length; i += 1) {
      base64.writeByte(bytes[i]);
    }
    base64.flush();

    return 'data:image/gif;base64,' + base64;
  };

  //---------------------------------------------------------------------
  // returns qrcode function.

  return qrcode;
}();

// multibyte support
!function() {

  qrcode.stringToBytesFuncs['UTF-8'] = function(s) {
    // http://stackoverflow.com/questions/18729405/how-to-convert-utf8-string-to-byte-array
    function toUTF8Array(str) {
      var utf8 = [];
      for (var i=0; i < str.length; i++) {
        var charcode = str.charCodeAt(i);
        if (charcode < 0x80) utf8.push(charcode);
        else if (charcode < 0x800) {
          utf8.push(0xc0 | (charcode >> 6),
              0x80 | (charcode & 0x3f));
        }
        else if (charcode < 0xd800 || charcode >= 0xe000) {
          utf8.push(0xe0 | (charcode >> 12),
              0x80 | ((charcode>>6) & 0x3f),
              0x80 | (charcode & 0x3f));
        }
        // surrogate pair
        else {
          i++;
          // UTF-16 encodes 0x10000-0x10FFFF by
          // subtracting 0x10000 and splitting the
          // 20 bits of 0x0-0xFFFFF into two halves
          charcode = 0x10000 + (((charcode & 0x3ff)<<10)
            | (str.charCodeAt(i) & 0x3ff));
          utf8.push(0xf0 | (charcode >>18),
              0x80 | ((charcode>>12) & 0x3f),
              0x80 | ((charcode>>6) & 0x3f),
              0x80 | (charcode & 0x3f));
        }
      }
      return utf8;
    }
    return toUTF8Array(s);
  };

}();

(function (factory) {
  if (typeof define === 'function' && define.amd) {
      define([], factory);
  } else if (typeof exports === 'object') {
      module.exports = factory();
  }
}(function () {
    return qrcode;
}));

//---------------------------------------------------------------------
//
// QR Code Generator for JavaScript UTF8 Support (optional)
//
// Copyright (c) 2011 Kazuhiko Arase
//
// URL: http://www.d-project.com/
//
// Licensed under the MIT license:
//  http://www.opensource.org/licenses/mit-license.php
//
// The word 'QR Code' is registered trademark of
// DENSO WAVE INCORPORATED
//  http://www.denso-wave.com/qrcode/faqpatent-e.html
//
//---------------------------------------------------------------------

!function(qrcode) {

  //---------------------------------------------------------------------
  // overwrite qrcode.stringToBytes
  //---------------------------------------------------------------------

  qrcode.stringToBytes = qrcode.stringToBytesFuncs['UTF-8'];

}(qrcode);

'use strict';
// Layout and appearance controls adapted from AWG Toolza (MIT).
// API calls stay within the authenticated AWG Manager bot API.
const tg = window.Telegram?.WebApp;
const root = document.getElementById('app');
const S = {view:'home', tunnels:[], busy:false, query:'', filter:'all', result:null, resultTitle:'', resultLoader:null, returnView:'home', updated:''};
const SECTIONS = [
  ['network','Туннели','tunnels','профили, управление VPN'],
  ['server','Серверы','servers','WireGuard, клиенты, трафик'],
  ['network','Маршрутизация','routing','NDMS, IP, устройства, sing-box'],
  ['globe','WAN','wan','внешние подключения'],
  ['server','Система','system','версия, время работы'],
  ['stethoscope','Диагностика','tools','проверки, отчёты'],
  ['file-text','Логи','logs','журнал AWG Manager'],
  ['bell','Мониторинг','monitor','Telegram-уведомления'],
  ['settings','Настройки','settings','интерфейс, обновление бота'],
];
const HOMES = [['cards','layout-grid','Карточки'],['compact','list','Компакт'],['icons','grid-3x3','Иконки']];
const pref = (key, fallback) => { try { return localStorage.getItem('awg-' + key) || fallback; } catch (_) { return fallback; } };
const setPref = (key, value) => { try { localStorage.setItem('awg-' + key, value); } catch (_) {} };
const autoTheme = () => tg?.colorScheme === 'dark' ? 'dark' : 'light';
const homePref = () => HOMES.some(([key]) => key === pref('home','')) ? pref('home','') : 'cards';
const scalePref = () => Math.min(130,Math.max(75,Number(pref('scale','100')) || 100));
function h(tag, props, ...kids) {
  const node = document.createElement(tag);
  for (const [key, value] of Object.entries(props || {})) {
    if (value === null || value === undefined || value === false) continue;
    if (key === 'class') node.className = value;
    else if (key.startsWith('on')) node.addEventListener(key.slice(2), value);
    else node.setAttribute(key, value === true ? '' : value);
  }
  for (const child of kids.flat(Infinity)) if (child !== null && child !== undefined && child !== false) node.append(child instanceof Node ? child : String(child));
  return node;
}
function icon(name) {
  const template = document.createElement('template');
  // Only bundled SVG constants enter HTML. API values always use text nodes.
  template.innerHTML = `<svg class="i" viewBox="0 0 24 24" aria-hidden="true">${ICONS[name] || ICONS.info || ''}</svg>`;
  return template.content.firstChild;
}
function logo() {
  const template = document.createElement('template'); template.innerHTML = AWGM_LOGO;
  return template.content.firstChild;
}
const pill = (text, cls='') => h('span',{class:'pill ' + cls},text);
const tag = (text, cls='') => h('span',{class:'tag ' + cls},text);
const kv = (key,value) => h('div',{class:'kv'},h('span',{},key),h('span',{},value));
function btn(ic, text, fn, cls='', attrs={}) {
  return h('button',{type:'button',class:cls,onclick:()=>operate(fn),...attrs},ic ? icon(ic) : null,text);
}
function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const css = getComputedStyle(document.documentElement);
  try { tg?.setHeaderColor?.(css.getPropertyValue('--card').trim()); tg?.setBackgroundColor?.(css.getPropertyValue('--bg').trim()); } catch (_) {}
}
function applyLook() {
  document.documentElement.style.zoom = scalePref() === 100 ? '' : String(scalePref()/100);
  document.documentElement.dataset.weight = ['light','normal','bold'].includes(pref('weight','normal')) ? pref('weight','normal') : 'normal';
}
function drawTop() {
  const dark = document.documentElement.dataset.theme === 'dark';
  document.getElementById('top').replaceChildren(
    h('button',{class:'logo','aria-label':'Главная',title:'Главная',onclick:()=>go('home')},logo()),
    h('button',{class:'ver',onclick:()=>go('home'),'aria-label':'AWG Manager · главная'},h('b',{},'AWG Manager'),h('span',{},S.version ? 'v'+S.version.replace(/^v/,'') : 'версия —')),
    h('div',{class:'sp'}),
    h('button',{'aria-label':'Вид панели',title:'Вид панели',onclick:lookSheet},icon('a-large-small')),
    h('button',{'aria-label':'День / ночь',title:dark?'Светлая тема':'Тёмная тема',onclick:()=>{const next=dark?'light':'dark';setPref('theme',next);applyTheme(next);drawTop();}},icon(dark?'sun':'moon')),
    h('button',{'aria-label':'О проекте',title:'О проекте',onclick:aboutSheet},icon('heart')),
    h('button',{id:'menu-toggle','aria-label':S.menuOpen?'Закрыть меню':'Открыть меню','aria-expanded':String(Boolean(S.menuOpen)),'aria-controls':'main-menu',title:S.menuOpen?'Закрыть меню':'Разделы',onclick:menuSheet},icon(S.menuOpen?'x':'menu')),
  );
  if(S.menuOpen)drawMenu();
}
let sheetState = null;
function closeSheet() {
  if (!sheetState) return;
  const previous = sheetState; sheetState = null;
  document.removeEventListener('keydown',previous.keyHandler);
  previous.background.remove();
  root.inert = false; document.getElementById('top').inert = false; document.getElementById('bar').inert = false;
  if (previous.trigger?.isConnected) previous.trigger.focus();
}
function openSheet(title, draw) {
  closeMenu();
  closeSheet();
  const trigger = document.activeElement;
  const box = h('section',{class:'sheet',role:'dialog','aria-modal':'true','aria-label':title});
  const background = h('div',{class:'sheet-bg',onclick:event=>{if(event.target===background)closeSheet();}},box);
  const content = h('div',{});
  box.append(h('div',{class:'sheet-head'},h('h3',{},title),h('button',{'aria-label':'Закрыть',onclick:closeSheet},icon('x'))),content);
  const keyHandler = event => {
    if (event.key === 'Escape') { event.preventDefault(); closeSheet(); }
    if (event.key !== 'Tab') return;
    const focusable = Array.from(box.querySelectorAll('button,a[href],input,select,textarea')).filter(node=>!node.disabled);
    const first = focusable[0], last = focusable[focusable.length-1];
    if (event.shiftKey && document.activeElement===first) {event.preventDefault();last?.focus();}
    else if (!event.shiftKey && document.activeElement===last) {event.preventDefault();first?.focus();}
  };
  sheetState = {background,keyHandler,trigger};
  draw(content);
  root.inert = true; document.getElementById('top').inert = true; document.getElementById('bar').inert = true;
  document.body.append(background); document.addEventListener('keydown',keyHandler);
  box.querySelector('button')?.focus();
}
function segText(items, current, select) {
  return h('div',{class:'seg'},items.map(([key,label])=>h('button',{class:key===current?'on':null,'aria-pressed':String(key===current),onclick:()=>select(key)},label)));
}
function segBar(items, current, select) {
  return h('div',{class:'seg'},items.map(([key,ic,label])=>h('button',{class:key===current?'on':null,'aria-label':label,title:label,'aria-pressed':String(key===current),onclick:()=>select(key)},icon(ic))));
}
function setHome(value) { setPref('home',value); if(S.view==='home')renderHome(); }
function lookSheet() {
  openSheet('Вид панели',box=>{
    const draw = () => {
      const scale = scalePref();
      const size = h('label',{for:'look-scale'},`Размер — ${scale}%`);
      const range = h('input',{id:'look-scale',type:'range',min:75,max:130,step:5,value:scale,
        oninput:event=>{size.textContent=`Размер — ${event.target.value}%`;},
        onchange:event=>{setPref('scale',event.target.value);applyLook();}});
      box.replaceChildren(
        h('label',{},'Тема'),
        segText([['','Авто'],['light','Светлая'],['dark','Тёмная']],pref('theme',''),value=>{setPref('theme',value);applyTheme(value||autoTheme());drawTop();draw();}),
        size,range,h('div',{class:'row small muted scale-marks'},h('span',{},'75%'),h('span',{},'100%'),h('span',{},'130%')),
        h('label',{},'Жирность шрифта'),
        segText([['light','Тоньше'],['normal','Обычная'],['bold','Жирнее']],pref('weight','normal'),value=>{setPref('weight',value);applyLook();draw();}),
        h('label',{},'Главная'),segText(HOMES.map(([key,,label])=>[key,label]),homePref(),value=>{setHome(value);draw();}),
        h('p',{class:'hint'},'«Авто» — как тема Telegram. Настройки запоминаются на этом устройстве.'),
        h('div',{class:'pair'},h('button',{onclick:()=>{['theme','scale','weight','home'].forEach(key=>setPref(key,''));applyTheme(autoTheme());applyLook();drawTop();if(S.view==='home')renderHome();draw();}},'Сбросить'),h('button',{class:'btn-primary',onclick:closeSheet},'Готово')),
      );
    }; draw();
  });
}
function menuItem(ic,label,sub,fn) {
  return h('button',{class:'item',onclick:fn},h('span',{class:'ibox'},icon(ic)),h('span',{class:'main'},h('span',{class:'title'},label),sub?h('span',{class:'sub wrap'},sub):null),h('span',{class:'side'},icon('chevron-right')));
}
function closeMenu(focus=false){
  if(!S.menuOpen)return;
  S.menuOpen=false;document.getElementById('main-menu')?.remove();document.getElementById('menu-backdrop')?.remove();
  root.inert=false;document.getElementById('bar').inert=false;drawTop();
  if(focus)document.getElementById('menu-toggle')?.focus();
}
function drawMenu(){
  const current=S.view==='bot-update'?'settings':S.view==='router-settings'?'routing':S.view;
  const nav=h('nav',{id:'main-menu','aria-label':'Разделы'});
  for(const[title,path]of [['Главная','home'],...SECTIONS.map(([,title,path])=>[title,path])])nav.append(h('button',{class:current===path?'selected':null,'aria-current':current===path?'page':null,onclick:()=>go(path)},title));
  if(tg?.close)nav.append(h('button',{class:'menu-exit',onclick:()=>{closeMenu();tg.close();}},'Выйти'));
  document.getElementById('top').append(nav);
  if(!document.getElementById('menu-backdrop'))document.body.append(h('div',{id:'menu-backdrop','aria-hidden':'true',onclick:()=>closeMenu(true)}));
}
function menuSheet(){
  if(S.menuOpen){closeMenu(true);return;}
  closeSheet();S.menuOpen=true;drawTop();root.inert=true;document.getElementById('bar').inert=true;
  document.querySelector('#main-menu button[aria-current]')?.focus();
}
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&S.menuOpen){event.preventDefault();closeMenu(true);}});
function aboutSheet() {
  openSheet('О проекте',box=>box.append(
    h('p',{class:'hint'},'Telegram-панель AWG Manager для Keenetic. Интерфейс AWG Toolza адаптирован под API роутера.'),
    h('a',{class:'btn btn-block',href:'https://github.com/VladimirRabcun/keenetic-awg-bot',target:'_blank',rel:'noopener noreferrer'},icon('code'),'Наш проект'),
    h('a',{class:'btn btn-block',href:'https://github.com/pumbaX/awg-multi-script',target:'_blank',rel:'noopener noreferrer'},icon('heart'),'AWG Toolza · pumbaX'),
    h('a',{class:'btn btn-block',href:'https://github.com/hoaxisr/awg-manager',target:'_blank',rel:'noopener noreferrer'},icon('heart'),'AWG Manager · hoaxisr'),
  ));
}
async function api(op,data={}) {
  if (!tg?.initData) throw Error('Откройте Mini App кнопкой «Панель» в Telegram-боте');
  const response = await fetch('/api',{method:'POST',headers:{'Content-Type':'application/json',Authorization:'tma '+tg.initData},body:JSON.stringify({op,...data})});
  const value = await response.json();
  if (!response.ok) throw Error(value.error||'Ошибка запроса');
  return value.data;
}
function connection(error='') {
  let node=document.getElementById('connection');
  if(!node){node=h('p',{id:'connection',role:'status','aria-live':'polite'});root.append(node);}
  node.textContent=error || (S.busy?'Обновление…':S.updated?'Обновлено '+S.updated+' · каждые 15 с':'');
  node.classList.toggle('error',Boolean(error));
}
async function operate(fn) {
  if(S.busy)return;
  S.busy=true;root.setAttribute('aria-busy','true');
  document.querySelectorAll('#app button,#bar button').forEach(node=>node.disabled=true);connection();
  let error='';
  try {await fn();S.updated=new Date().toLocaleTimeString('ru-RU',{hour:'2-digit',minute:'2-digit'});}
  catch(e){error=e.message;if(!root.querySelector('.card,.ecard,.sgrid,.grid,.search,h1'))root.replaceChildren(h('div',{class:'card empty'},h('b',{},'Не удалось подключиться'),h('span',{},error),btn('refresh-cw','Повторить',load)));}
  finally{S.busy=false;root.setAttribute('aria-busy','false');document.querySelectorAll('#app button,#bar button').forEach(node=>node.disabled=node.dataset.disabled==='true');connection(error);}
}
function drawBar() {
  const sub=S.view!=='home';document.body.classList.toggle('has-bar',sub);
  document.getElementById('bar').replaceChildren(...(sub?[h('div',{class:'bar'},btn('arrow-left','Назад',()=>navigate(S.view==='result'?S.returnView:'home')),btn('refresh-cw','Обновить',load))]:[]));
  if(sub)tg?.BackButton?.show?.();else tg?.BackButton?.hide?.();
}
async function navigate(view) {S.view=view;root.replaceChildren(h('div',{class:'spin'},'Загрузка…'));drawBar();await load();window.scrollTo(0,0);}
function go(view) {if(S.busy)return;closeMenu();closeSheet();operate(()=>navigate(view));}
function amount(tunnel) {
  const rx=Number(tunnel.rxBytes),tx=Number(tunnel.txBytes);
  if(tunnel.rxBytes==null || tunnel.txBytes==null || !Number.isFinite(rx) || !Number.isFinite(tx))return null;
  return rx+tx;
}
function bytes(value) {
  if(value===null||value===undefined||value==='')return '—';
  const n=Number(value);if(!Number.isFinite(n)||n<0)return '—';
  const units=['Б','КБ','МБ','ГБ','ТБ'];const i=n===0?0:Math.max(0,Math.min(4,Math.floor(Math.log(n)/Math.log(1024))));
  return (n/1024**i).toLocaleString('ru-RU',{maximumFractionDigits:i?1:0})+' '+units[i];
}
const states={running:'работает',stopped:'остановлен',starting:'запускается',stopping:'останавливается',error:'ошибка',unknown:'нет данных'};
function state(tunnel) {return tunnel.status==='running'?'on':tunnel.status==='error'?'bad':'';}
function tunnelCard(tunnel,acts=true) {
  const on=tunnel.status==='running';
  const name=tunnel.name||tunnel.id;
  return h('article',{class:'ecard '+state(tunnel)},
    h('div',{class:'head'},h('span',{class:'dot '+state(tunnel)}),h('button',{class:'name-button',onclick:()=>operate(()=>openResult(name,()=>api('tunnel',{id:tunnel.id})))},h('span',{class:'name'},name)),pill(states[tunnel.status]||tunnel.status||'нет данных',on?'ok':state(tunnel))),
    h('div',{class:'meta'},tag(tunnel.type||'VPN','accent'),tunnel.backend?tag(tunnel.backend):null,tunnel.pingCheck?.status?tag('Ping: '+tunnel.pingCheck.status):null),
    h('div',{class:'line'},'↓ '+bytes(tunnel.rxBytes)+' · ↑ '+bytes(tunnel.txBytes)),
    h('div',{class:'line'},'WAN: '+(tunnel.resolvedIspInterfaceLabel||tunnel.ispInterfaceLabel||'—')),
    acts?h('div',{class:'acts'},btn(on?'square':'play',on?'Стоп':'Старт',()=>tunnelAction(tunnel,on?'stop':'start'),on?'bad':''),btn('refresh-cw','Рестарт',()=>tunnelAction(tunnel,'restart')),btn('stethoscope','Проверка',()=>tunnelAction(tunnel,'connectivity'))):null,
  );
}
async function tunnelAction(tunnel,action) {
  if(['stop','restart'].includes(action)&&!confirm((action==='stop'?'Остановить':'Перезапустить')+' туннель «'+(tunnel.name||tunnel.id)+'»?'))return;
  const result=await api('action',{id:tunnel.id,action});
  if(action==='connectivity') {
    S.returnView=S.view;S.view='result';S.result=result;S.resultTitle='Проверка · '+(tunnel.name||tunnel.id);S.resultLoader=()=>api('action',{id:tunnel.id,action:'connectivity'});renderResult();drawBar();
  } else await load();
}
function homeCells() {
  const rows=S.tunnels,on=rows.filter(t=>t.status==='running');
  const measured=rows.filter(t=>amount(t)!==null);
  const rx=measured.reduce((total,t)=>total+Number(t.rxBytes),0),tx=measured.reduce((total,t)=>total+Number(t.txBytes),0);
  const traffic=measured.length?bytes(rx+tx):'—';
  const leader=measured.slice().sort((a,b)=>amount(b)-amount(a))[0];
  const wan=[...new Set(on.map(t=>t.resolvedIspInterfaceLabel||t.ispInterfaceLabel).filter(Boolean))].join(', ')||'—';
  return [
    [`${on.length}/${rows.length}`,'Туннели работают',`всего ${rows.length} · не запущены ${rows.length-on.length}`,()=>go('tunnels')],
    [traffic,'Суммарный обмен',measured.length?'↓ '+bytes(rx)+' · ↑ '+bytes(tx)+(measured.length<rows.length?' · часть данных':''):'нет данных'],
    [wan,'WAN туннелей','по запущенным профилям',()=>go('wan')],
    [leader?(leader.name||leader.id):'—','Лидер по трафику',leader?bytes(amount(leader)):'нет данных',leader?()=>operate(()=>openResult(leader.name||leader.id,()=>api('tunnel',{id:leader.id}))):null],
  ];
}
function renderHome() {
  const variant=homePref(),cells=homeCells();
  const primary=S.tunnels.find(t=>t.status==='running')||S.tunnels[0];
  root.replaceChildren();
  if(primary)root.append(tunnelCard(primary,variant!=='compact'));
  else root.append(h('div',{class:'card empty'},h('b',{},'Туннелей пока нет'),'Добавьте профиль в AWG Manager'));
  root.append(h('div',{class:variant==='cards'?'sgrid':'sstrip'},cells.map(([big,label,sub,onclick],index)=>
    h('div',{class:'cell'+(onclick?' tap':''),onclick},h('b',{class:String(big).length>9?'long':null},big),variant==='cards'?h('div',{class:'lb'},label):h('span',{},['работают','обмен','WAN','лидер'][index]),variant==='cards'?h('div',{class:'sb'},sub):null))),
    h('div',{class:'h2row'},h('h2',{},'Разделы'),segBar(HOMES,variant,value=>setHome(value))),
  );
  if(variant==='cards')root.append(h('div',{class:'grid'},SECTIONS.map(([ic,title,path,sub])=>h('button',{class:'tile',onclick:()=>go(path)},h('div',{class:'ibox'},icon(ic)),h('div',{class:'t'},title),h('div',{class:'s'},sub)))));
  else if(variant==='compact')root.append(h('div',{class:'card list'},SECTIONS.map(([ic,title,path,sub])=>menuItem(ic,title,sub,()=>go(path)))));
  else root.append(h('div',{class:'igwrap'},h('div',{class:'igrid'},SECTIONS.map(([ic,title,path])=>h('button',{class:'ic',onclick:()=>go(path)},h('span',{class:'ibox'},icon(ic)),h('span',{},title))))));
  root.append(h('div',{class:'foot'},icon('shield-check'),'AWG Manager · доступ через Telegram'));connection();
}
function renderList() {
  const list=document.getElementById('tunnel-list');if(!list)return;
  const selected=S.tunnels.filter(t=>(S.filter==='all'||(S.filter==='on'?t.status==='running':t.status!=='running'))&&(t.name||t.id).toLocaleLowerCase().includes(S.query.toLocaleLowerCase()));
  list.replaceChildren(...selected.map(t=>tunnelCard(t)));
  if(!selected.length)list.append(h('div',{class:'empty'},h('b',{},'Ничего не найдено'),'Измените поиск или фильтр'));
}
function renderTunnels() {
  if(!document.getElementById('tunnel-list')) {
    root.replaceChildren(h('h1',{},'Туннели',pill(S.tunnels.length)));
    root.append(h('div',{class:'search'},icon('search'),h('input',{type:'search',placeholder:'Поиск туннеля…','aria-label':'Поиск туннеля',value:S.query,oninput:event=>{S.query=event.target.value;renderList();}})),
      h('div',{id:'filters',class:'chips'}),h('div',{id:'tunnel-list'}));
  }
  document.getElementById('filters').replaceChildren(...[['all','Все'],['on','Работают'],['off','Не запущены']].map(([key,label])=>h('button',{class:'chip'+(key===S.filter?' on':''),'aria-pressed':String(key===S.filter),onclick:()=>{if(S.busy)return;S.filter=key;renderTunnels();}},label)));
  renderList();
}
const LABELS={id:'ID',name:'Название',status:'Статус',type:'Тип',backend:'Движок',lastHandshake:'Handshake',startedAt:'Запущен',rxBytes:'Получено',txBytes:'Отправлено',ispInterfaceLabel:'WAN',resolvedIspInterfaceLabel:'Текущий WAN',success:'Успешно',connected:'Подключено',latency:'Задержка',latencyMs:'Задержка, мс',message:'Сообщение',version:'Версия',uptime:'Время работы',interface:'Интерфейс',address:'Адрес',enabled:'Включено',interval:'Интервал, с',timestamp:'Время',pingCheck:'Ping-check',anyWANUp:'WAN доступен'};
function readable(key,value) {if(key==='rxBytes'||key==='txBytes')return bytes(value);if(key==='status')return states[value]||value||'—';if(value===true)return 'Да';if(value===false)return 'Нет';return value==null||value===''?'—':String(value);}
function dataCards(data,title='',depth=0) {
  if(data===null||typeof data!=='object')return [h('div',{class:'card'},title?h('h2',{},title):null,h('pre',{},readable('',data)))];
  if(depth>3)return [h('pre',{},JSON.stringify(data,null,2))];
  if(Array.isArray(data))return data.length?data.flatMap((item,index)=>dataCards(item,title?`${title} · ${index+1}`:`${index+1}`,depth+1)):[h('div',{class:'card empty'},'Нет записей')];
  const scalar=Object.entries(data).filter(([,value])=>value===null||typeof value!=='object');
  const nested=Object.entries(data).filter(([,value])=>value!==null&&typeof value==='object');
  const cards=[];
  if(scalar.length)cards.push(h('div',{class:'card'},title?h('h2',{},title):null,scalar.map(([key,value])=>kv(LABELS[key]||key,readable(key,value)))));
  for(const [key,value] of nested)cards.push(...dataCards(value,LABELS[key]||key,depth+1));
  if(!cards.length)cards.push(h('div',{class:'card empty'},'Нет данных'));
  return cards;
}
function resultBody(title,data) {
  root.replaceChildren(h('h1',{},title),...dataCards(data));
  if(data!==null&&typeof data==='object')root.append(h('details',{class:'card'},h('summary',{},'Все данные'),h('pre',{},JSON.stringify(data,null,2))));
}
async function openResult(title,loader) {
  const result=await loader();S.returnView=S.view;S.view='result';S.result=result;S.resultTitle=title;S.resultLoader=loader;renderResult();drawBar();
}
function renderResult() {resultBody(S.resultTitle,S.result);}
async function renderMonitor() {
  const data=await api('monitor');
  root.replaceChildren(h('h1',{},'Мониторинг'),h('div',{class:'card'},
    h('div',{class:'row'},h('div',{class:'main'},h('b',{},'Telegram-уведомления'),h('div',{class:'small muted'},'Изменения состояния туннелей и WAN')),
      btn(null,'',async()=>{await api('monitor',{enabled:!data.enabled});await renderMonitor();},'switch'+(data.enabled?' on':''),{role:'switch','aria-checked':String(Boolean(data.enabled)),'aria-label':'Telegram-уведомления'})),
    h('p',{class:'hint'},'Проверка каждые '+data.interval+' с. Уведомления получает администратор бота.')));
}
function renderTools() {
  root.replaceChildren(h('h1',{},'Диагностика'),h('div',{class:'card list'},
    [['activity','Ping-check','ping','состояние проверки туннелей'],['stethoscope','Проверить все туннели','ping-now','запустить проверку'],['file-text','Логи','logs','последние записи'],['info','Статус диагностики','diagnostics','состояние сбора отчёта'],['play','Запустить диагностику','diagnostics-run','собрать отчёт'],['file-archive','Отчёт диагностики','report','результат последнего сбора']].map(([ic,title,op,sub])=>menuItem(ic,title,sub,()=>operate(async()=>{
      if(op==='diagnostics-run'&&!confirm('Запустить сбор диагностического отчёта?'))return;
      const result=await api(op);S.returnView='tools';S.view='result';S.result=result;S.resultTitle=title;S.resultLoader=()=>api(op==='diagnostics-run'?'diagnostics':op==='ping-now'?'ping':op);renderResult();drawBar();
    }))),
  ));
}
async function load() {
  if(S.view==='home'||S.view==='tunnels'){S.tunnels=await api('tunnels');if(S.view==='home')renderHome();else renderTunnels();}
  else if(S.view==='wan'){const data=await api('wan');resultBody('WAN',data);}
  else if(S.view==='system'){const data=await api('system');resultBody('Система',data);}
  else if(S.view==='logs'){const data=await api('logs');resultBody('Логи',data);}
  else if(S.view==='monitor')await renderMonitor();
  else if(S.view==='servers')await renderServers();
  else if(S.view==='settings')await renderManagerSettings();
  else if(S.view==='routing')await renderRouting6();
  else if(S.view==='router-settings')await renderRouterSettings6();
  else if(S.view==='bot-update')await renderBotUpdate();
  else if(S.view==='tools')renderTools();
  else if(S.view==='result'&&S.resultLoader){S.result=await S.resultLoader();renderResult();}
  drawBar();
}
tg?.ready?.();tg?.expand?.();
applyTheme(pref('theme','')||autoTheme());applyLook();drawTop();drawBar();
tg?.onEvent?.('themeChanged',()=>{if(!pref('theme','')){applyTheme(autoTheme());drawTop();}});
tg?.BackButton?.onClick?.(()=>go(S.view==='result'?S.returnView:'home'));
operate(load);
api('health').then(data=>{S.version=typeof data?.version==='string'?data.version:'';drawTop();}).catch(()=>{});
api('bot-info').then(data=>{S.botVersion=data.version;S.admin=data.admin;if(S.view==='settings')operate(renderManagerSettings);}).catch(()=>{});
setInterval(()=>{if(!document.hidden&&!S.busy&&!sheetState&&!S.menuOpen&&['home','tunnels','wan','servers'].includes(S.view))operate(load);},15000);

async function renderServers() {
  const focus=document.activeElement?.id==='client-search'?{start:document.activeElement.selectionStart,end:document.activeElement.selectionEnd}:null;
  const rows=await api('servers');S.servers=rows;
  const server=rows.find(s=>s.id===S.selectedServer)||rows[0];S.selectedServer=server?.id;
  let policies=[],lans=[],ingress=null;
  if(server){const results=await Promise.allSettled([api('server-policies'),api('server-lans'),api('server-ingress',{id:server.id})]);
    if(results[0].status==='fulfilled')policies=results[0].value;
    if(results[1].status==='fulfilled')lans=results[1].value;
    if(results[2].status==='fulfilled')ingress=results[2].value;
  }
  root.replaceChildren(h('h1',{},'Серверы'));
  root.append(h('div',{class:'pair server-toolbar'},btn('download','Экспорт',exportServers),btn('upload','Импорт',importServers)),btn('plus','Создать сервер',createServer,'server-create'));
  if(!server){root.append(h('div',{class:'card empty'},'Серверов пока нет'));return;}
  const select=h('select',{class:'server-picker','aria-label':'Выбрать сервер',onchange:event=>{S.selectedServer=event.target.value;S.clientQuery='';operate(renderServers);}},rows.map(s=>h('option',{value:s.id},(s.status==='up'?'● ':'○ ')+(s.description||s.id))));select.value=server.id;root.append(select);
  const peers=server.peers||[],on=server.status==='up',known=['up','down'].includes(server.status);
  const online=peers.filter(p=>p.online===true).length,measured=peers.filter(p=>p.rxBytes!=null&&p.txBytes!=null);
  const sum=key=>measured.length?bytes(measured.reduce((n,p)=>n+Number(p[key]||0),0)):'—';
  const card=h('article',{class:'server-main '+(on?'running':'')},
    h('div',{class:'server-heading'},switchButton(on,()=>serverAction(server,on?'stop':'start'),'Включить сервер',!known),h('h2',{},server.description||server.id),tag(server.kind==='managed'?'Управляемый':'Keenetic','accent')),
    h('p',{class:'server-meta'},server.id+' '+(server.address||'—')+'/'+maskPrefix(server.mask)+' :'+(server.listenPort||'—')+'  MTU '+(server.mtu||'—')),
    h('div',{class:'server-actions'},btn('refresh-cw','Рестарт',()=>serverAction(server,'restart')),server.kind==='managed'?btn('shield','Обфускация',()=>ascForm(server)):null,
      btn('settings','Настройки',()=>server.kind==='managed'?formSheet('Параметры сервера',SERVER_FIELDS(server),values=>api('server-edit',{id:server.id,values})):serverSettings(server)),server.kind==='managed'?btn('trash-2','Удалить',()=>deleteServer(server),'bad'):null),
    h('div',{class:'server-stats'},[[sum('rxBytes'),'RX'],[sum('txBytes'),'TX'],[online+' / '+peers.length,'КЛИЕНТЫ'],['UDP :'+(server.listenPort||'—'),'LISTEN']].map(([value,label])=>h('div',{},h('b',{},value),h('span',{},label)))),
  );
  const access=h('details',{class:'server-access'});access.open=S.accessOpen!==false;access.addEventListener('toggle',()=>{S.accessOpen=access.open;});
  access.append(h('summary',{},'НАСТРОЙКИ ДОСТУПА'),h('div',{class:'server-setting'},h('h3',{},'NAT'),h('p',{},'Полный — подмена адреса в интернете и LAN. Интернет — подмена только при выходе в интернет. Без NAT — исходный адрес клиента.'),
    h('div',{class:'seg nat-seg'},[['full','Полный'],['internet-only','Интернет'],['none','Без NAT']].map(([mode,label])=>btn(null,label,async()=>{if(!confirm('Изменить NAT сервера на «'+label+'»?'))return;await api('server-nat',{id:server.id,values:{mode}});await renderServers();},server.natModeKnown!==false&&server.natMode===mode?'on':''))),
    server.natModeKnown===false?h('p',{class:'hint'},'Текущий режим NAT неизвестен'):null));
  if(server.kind==='managed')access.append(h('div',{class:'server-setting'},h('h3',{},'Доступ в LAN'),h('p',{},'Сегменты LAN, доступные клиентам этого сервера.'),
    h('div',{class:'lan-chips'},(server.lanSegments||[]).length?(server.lanSegments||[]).map(name=>tag(lans.find(l=>l.name===name)?.label||name)):tag('Не выбрано'),btn('plus','',()=>lanForm(server),'lan-add',{'aria-label':'Выбрать LAN-сегменты'})),
    server.foreignAcls?.length?h('p',{class:'hint'},'На интерфейсе есть другие ACL: '+server.foreignAcls.join(', ')):null));
  access.append(h('div',{class:'server-setting'},h('div',{class:'ingress-row'},h('div',{},h('h3',{},'Маршрутизация через sing-box'),h('p',{},'Весь трафик клиентов пойдёт через sing-box и его правила. В FakeIP DNS перехватывается, нагрузка выше и ping клиентов не работает. При остановке sing-box клиенты останутся без сети.')),ingress?switchButton(ingress.enabled,async()=>{if(!confirm((ingress.enabled?'Выключить':'Включить')+' маршрутизацию клиентов через sing-box?'))return;await api('server-ingress',{id:server.id,values:{enabled:!ingress.enabled},confirmed:true});await renderServers();},'Маршрутизация через sing-box'):null),
    ingress===null?h('p',{class:'hint'},'Настройки sing-box недоступны через API'):null));
  const policy=h('select',{'aria-label':'Политика доступа',onchange:event=>operate(async()=>{if(!confirm('Изменить политику доступа для всех клиентов сервера?')){await renderServers();return;}await api('server-policy',{id:server.id,values:{policy:event.target.value}});await renderServers();})},h('option',{value:'none'},'Политика по умолчанию'),policies.map(p=>h('option',{value:p.id},p.description||p.id)));
  if(server.policyKnown===false){policy.append(h('option',{value:'unknown'},'Текущая политика неизвестна'));policy.value='unknown';}
  else if(server.policy&&server.policy!=='none'&&!policies.some(p=>p.id===server.policy)){policy.append(h('option',{value:server.policy},server.policy+' (отсутствует)'));policy.value=server.policy;}
  else policy.value=server.policy||'none';
  access.append(h('div',{class:'server-setting'},h('h3',{},'Политика доступа'),h('p',{},'Регулирует выход в интернет для всех клиентов сервера.'),policy));card.append(access);
  card.append(h('section',{class:'server-clients'},h('h3',{},'Клиенты ('+online+'/'+peers.length+' онлайн)'),
    h('div',{class:'pair'},h('input',{id:'client-search',type:'search',placeholder:'Поиск…','aria-label':'Поиск клиента',value:S.clientQuery||'',oninput:event=>{S.clientQuery=event.target.value;drawServerPeers(server);}}),btn('plus','Добавить клиента',()=>peerForm(server))),
    h('div',{class:'client-sort'},h('select',{'aria-label':'Сортировка клиентов',onchange:event=>{S.clientSort=event.target.value;drawServerPeers(server);}},[['handshake','Handshake'],['name','Название'],['traffic','Трафик'],['ip','IP-адрес']].map(([value,label])=>h('option',{value},label))),btn('arrow-up','',()=>{S.clientDescending=!S.clientDescending;drawServerPeers(server);},'',{'aria-label':'Изменить направление сортировки'})),h('div',{id:'server-peer-list'})));
  root.append(card);root.querySelector('[aria-label="Сортировка клиентов"]').value=S.clientSort||'handshake';drawServerPeers(server);
  if(focus){const input=document.getElementById('client-search');input.focus();input.setSelectionRange(focus.start,focus.end);}
}
function switchButton(on,fn,label,disabled=false){return btn(null,'',fn,'switch'+(on?' on':''),{role:'switch','aria-checked':String(Boolean(on)),'aria-label':label,disabled:disabled||null,'data-disabled':String(disabled)});}
function maskPrefix(mask){if(!mask)return '—';if(/^\d+$/.test(String(mask)))return mask;return String(mask).split('.').map(x=>Number(x).toString(2)).join('').split('1').length-1;}
function handshakeSeconds(value){if(value==null||value==='')return null;const stamp=Date.parse(value);return Number.isFinite(stamp)?Math.max(0,(Date.now()-stamp)/1000):null;}
function handshakeLabel(value){const seconds=handshakeSeconds(value);if(seconds===null)return value||'Нет handshake';if(seconds<60)return Math.floor(seconds)+' с назад';if(seconds<3600)return Math.floor(seconds/60)+' мин назад';if(seconds<86400)return Math.floor(seconds/3600)+' ч назад';return Math.floor(seconds/86400)+' д назад';}
function drawServerPeers(server){
  const list=document.getElementById('server-peer-list');if(!list)return;
  const rows=(server.peers||[]).filter(p=>[p.description,p.tunnelIP,p.endpoint,...(p.allowedIPs||[])].filter(Boolean).join(' ').toLocaleLowerCase().includes((S.clientQuery||'').toLocaleLowerCase()));
  const mode=S.clientSort||'handshake',direction=S.clientDescending?-1:1;
  rows.sort((a,b)=>direction*(mode==='name'?(a.description||'').localeCompare(b.description||''):mode==='ip'?(a.tunnelIP||'').localeCompare(b.tunnelIP||'',undefined,{numeric:true}):mode==='traffic'?(Number(b.rxBytes||0)+Number(b.txBytes||0))-(Number(a.rxBytes||0)+Number(a.txBytes||0)):(handshakeSeconds(a.lastHandshake)??Infinity)-(handshakeSeconds(b.lastHandshake)??Infinity)));
  list.replaceChildren(...rows.map(peer=>h('article',{class:'server-peer'},h('div',{class:'peer-head'},typeof peer.enabled==='boolean'?switchButton(peer.enabled,()=>peerChange(server,peer,'peer-toggle',{values:{enabled:!peer.enabled}}),'Включить клиента '+(peer.description||'')):null,
    h('div',{class:'peer-title'},h('b',{},peer.description||'Клиент'),h('span',{class:peer.online?'online':'offline'},peer.online===true?'● ONLINE':peer.online===false?'○ OFFLINE':'○ НЕТ ДАННЫХ')),
    h('div',{class:'peer-buttons'},peer.confAvailable!==false?btn('qr-code','',()=>peerConf(server,peer),'',{'aria-label':'QR и конфиг '+(peer.description||'клиента')}):null,btn('pencil','',()=>peerForm(server,peer),'',{'aria-label':'Изменить '+(peer.description||'клиента')}),btn('trash-2','',()=>peerChange(server,peer,'peer-delete',{confirmed:true}),'bad',{'aria-label':'Удалить '+(peer.description||'клиента')}))),
    h('div',{class:'peer-metrics'},h('div',{},handshakeLabel(peer.lastHandshake)),h('div',{},'IP '+(peer.tunnelIP||(peer.allowedIPs||[]).join(', ')||'—')+'  EP '+(peer.endpoint||'—')),h('div',{},'RX: '+bytes(peer.rxBytes)+'  TX: '+bytes(peer.txBytes))))));
  if(!rows.length)list.append(h('p',{class:'hint'},'Клиенты не найдены'));
}
async function deleteServer(server){if(!confirm('Удалить сервер «'+(server.description||server.id)+'» и всех его клиентов? Отменить это действие нельзя.'))return;await api('server-delete',{id:server.id,confirmed:true});await renderServers();}
function downloadText(text,name,type='text/plain'){const url=URL.createObjectURL(new Blob([text],{type}));const link=h('a',{href:url,download:name});document.body.append(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),30000);}
async function exportServers(){if(!confirm('Экспортировать все серверы AWGM? Резервная копия содержит приватные ключи.'))return;const backup=await api('server-export',{confirmed:true});openSheet('Экспорт серверов',box=>box.append(h('p',{class:'hint'},'Резервная копия содержит '+backup.managedServers.length+' серверов AWGM. Храните файл как пароль.'),...(backup.warnings||[]).map(w=>h('p',{class:'hint'},w.message||'Неполная резервная копия')),h('button',{class:'btn-primary',onclick:()=>downloadText(JSON.stringify(backup,null,2),'awgm-servers.json','application/json')},'Скачать резервную копию')));}
function importServers(){openSheet('Импорт серверов',box=>{
  const file=h('input',{type:'file',accept:'.json,application/json','aria-label':'Резервная копия серверов'}),names=h('p',{class:'hint'}),error=h('p',{class:'hint error',role:'alert'}),renumber=h('input',{type:'checkbox','aria-label':'Разрешить перенумерацию интерфейсов'});let backup=null;
  file.addEventListener('change',async()=>{backup=null;error.textContent='';try{const selected=file.files[0];if(!selected)return;if(selected.size>900000)throw Error('Максимальный размер файла — 900 КБ');const value=JSON.parse(await selected.text());if(value.type!=='awg-manager-managed-server-backup'||value.version!==1||!Array.isArray(value.managedServers)||!value.managedServers.length)throw Error('Нужна резервная копия серверов AWGM');backup=value;names.textContent='Серверы: '+value.managedServers.map(s=>s.description||s.interfaceName).join(', ');}catch(e){error.textContent=e.message;}});
  const submit=h('button',{class:'btn-primary',onclick:async()=>{if(submit.disabled)return;error.textContent='';if(!backup){error.textContent='Выберите резервную копию';return;}if(!confirm('Импортировать '+backup.managedServers.length+' серверов? Будут восстановлены серверы, клиенты и их ключи.'))return;submit.disabled=true;try{const result=await api('server-import',{backup,options:{allowRenumber:renumber.checked},confirmed:true});closeSheet();await operate(()=>openResult('Результат импорта',async()=>result));}catch(e){error.textContent=e.message;submit.disabled=false;}}},'Импортировать');
  box.append(h('p',{class:'hint'},'Восстановление серверов AWGM из JSON. При конфликтах API вернёт результат для каждого сервера.'),file,names,h('label',{},renumber,' Разрешить перенумерацию интерфейсов при конфликте'),error,submit);
});}

// Forms preserve AWGM values; secrets are fetched only for explicit client export.
function formSheet(title,fields,submit,hint='') {
  openSheet(title,box=>{
    const form=h('form',{class:'edit-form'}),controls={};
    for(const f of fields) {
      let input;
      if(f.type==='select')input=h('select',{'aria-label':f.label},f.options.map(([value,label])=>h('option',{value},label)));
      else if(f.type==='textarea')input=h('textarea',{'aria-label':f.label,rows:5});
      else input=h('input',{'aria-label':f.label,type:f.type||'text',required:f.required||null,min:f.min,max:f.max,step:f.step,placeholder:f.placeholder,autocomplete:'off'});
      if(f.type==='checkbox')input.checked=Boolean(f.value);else input.value=f.value??'';
      controls[f.key]={input,f};form.append(h('label',{},h('span',{},f.label),input));
    }
    const error=h('p',{class:'hint error',role:'alert'}),save=h('button',{type:'submit',class:'btn-primary'},'Сохранить');
    if(hint)form.append(h('p',{class:'hint'},hint));
    form.append(error,h('div',{class:'pair'},h('button',{type:'button',onclick:closeSheet},'Отмена'),save));
    form.addEventListener('submit',async event=>{
      event.preventDefault();if(save.disabled)return;save.disabled=true;error.textContent='';
      try {
        const values={};for(const [key,{input,f}] of Object.entries(controls))values[key]=f.type==='checkbox'?input.checked:f.type==='number'?Number(input.value):input.value.trim();
        await submit(values);closeSheet();await operate(load);
      }catch(e){error.textContent=e.message;save.disabled=false;}
    });box.append(form);
  });
}
const SERVER_FIELDS=server=>[
  {key:'description',label:'Название',value:server.description||''},
  {key:'address',label:'IPv4-адрес сервера',value:server.address||'',required:true},
  {key:'mask',label:'Маска сети',value:server.mask||'255.255.255.0',required:true},
  {key:'listenPort',label:'UDP-порт',type:'number',value:server.listenPort||51821,min:1,max:65535,required:true},
  {key:'endpoint',label:'Endpoint: IP или домен',value:server.endpoint||'',placeholder:'Пусто — автоматический выбор'},
  {key:'dns',label:'DNS клиентов',value:server.dns||'',placeholder:'Пусто — DNS роутера'},
  {key:'mtu',label:'MTU (0 — автоматически)',type:'number',value:server.mtu||0,min:0,max:9000},
];
async function createServer() {
  const suggested=await api('server-suggest');
  formSheet('Создать сервер',SERVER_FIELDS(suggested).concat({key:'generateAsc',label:'Сгенерировать ASC',type:'checkbox',value:true}),values=>api('server-create',{values}));
}
function serverSettings(server) {
  const managed=server.kind==='managed';
  openSheet('Настройки · '+(server.description||server.id),box=>box.append(h('div',{class:'card list'},
    managed?menuItem('pencil','Параметры сервера','название, сеть, порт, DNS, MTU',()=>formSheet('Параметры сервера',SERVER_FIELDS(server),values=>api('server-edit',{id:server.id,values}))):
      menuItem('globe','Endpoint','адрес подключения клиентов',()=>formSheet('Endpoint',[{key:'endpoint',label:'IP или домен',value:server.endpoint||''}],values=>api('server-endpoint',{id:server.id,values}))),
    menuItem('network','NAT','доступ клиентов к сети',()=>formSheet('Режим NAT',[{key:'mode',label:'Режим',type:'select',value:server.natModeKnown===false?'':server.natMode||'',options:[['','Выберите режим'],['full','Полный NAT'],['internet-only','Только интернет'],['none','Без NAT']]}],values=>api('server-nat',{id:server.id,values}),'Изменение может повлиять на доступ подключённых клиентов.')),
    menuItem('route','Политика доступа','выход клиентов через выбранную политику',()=>operate(async()=>{const policies=await api('server-policies');formSheet('Политика доступа',[{key:'policy',label:'Политика',type:'select',value:server.policyKnown===false?'':server.policy||'none',options:[['','Выберите политику'],['none','Без привязки'],...policies.map(p=>[p.id,p.description||p.id])]}],values=>api('server-policy',{id:server.id,values}));})),
    managed?menuItem('network','LAN-сегменты','какие локальные сети доступны клиентам',()=>operate(()=>lanForm(server))):null,
    managed?menuItem('shield','ASC','параметры обфускации сервера',()=>operate(()=>ascForm(server))):null,
    managed?menuItem('trash-2','Удалить сервер','сервер и все его клиенты',()=>operate(async()=>{if(!confirm('Удалить сервер «'+(server.description||server.id)+'» и всех его клиентов? Отменить это действие нельзя.'))return;await api('server-delete',{id:server.id,confirmed:true});closeSheet();await load();})):null,
  )));
}
async function lanForm(server) {
  const lans=await api('server-lans');
  formSheet('LAN-сегменты',lans.map(l=>({key:l.name,label:(l.label||l.name)+' · '+l.subnet,type:'checkbox',value:(server.lanSegments||[]).includes(l.name)})),values=>api('server-lan',{id:server.id,values:{segments:Object.keys(values).filter(key=>values[key])}}),'Не выбрано — доступ в LAN закрыт.'+(server.foreignAcls?.length?' На интерфейсе есть другие списки доступа: '+server.foreignAcls.join(', ')+'. Они могут разрешать больше сетей.':''));
}
async function ascForm(server) {
  const params=await api('server-asc',{id:server.id});
  formSheet('Параметры ASC',[{key:'json',label:'Параметры сервера (JSON)',type:'textarea',value:JSON.stringify(params,null,2)}],values=>api('server-asc',{id:server.id,values:JSON.parse(values.json)}),'Сохранение полностью заменяет параметры ASC. Используйте совместимые параметры на клиентах.');
}
function peerForm(server,peer=null) {
  const p=peer||{};
  const fields=[
    {key:'description',label:'Название клиента',value:p.description||'',required:true},
    {key:'tunnelIP',label:'IPv4-адрес клиента',value:p.tunnelIP||(p.allowedIPs||[]).find(x=>x.endsWith('/32'))||'',required:server.kind==='system'||Boolean(peer),placeholder:server.kind==='managed'?'Пусто — свободный адрес автоматически':''},
    {key:'dns',label:'DNS',value:p.dns||''},
    {key:'clientAllowedIPs',label:'Сети через VPN (AllowedIPs)',value:p.clientAllowedIPs||'',placeholder:'Пусто — весь трафик'},
    {key:'remoteSubnets',label:'Сети за клиентом, через запятую',value:(p.remoteSubnets||[]).join(', ')},
  ];
  if(peer)fields.push({key:'editSignature',label:'Изменить сигнатуру клиента',type:'checkbox',value:false},...['profile','i1','i2','i3','i4','i5'].map(key=>({key,label:key==='profile'?'Профиль сигнатуры':key.toUpperCase(),value:key==='profile'?p.signatureProfile||'':p[key]||''})));
  formSheet(peer?'Изменить клиента':'Добавить клиента',fields,async values=>{
    values.remoteSubnets=values.remoteSubnets.split(',').map(x=>x.trim()).filter(Boolean);
    if(peer){const signature={};for(const key of ['profile','i1','i2','i3','i4','i5']){signature[key]=values[key];delete values[key];}if(values.editSignature)values.signature=signature;delete values.editSignature;}
    await api(peer?'peer-edit':'peer-add',{id:server.id,publicKey:p.publicKey,values});
  },'Изменение сетей или DNS потребует обновить конфиг на устройстве клиента.');
}
async function peerChange(server,peer,op,extra) {
  if(!confirm((op==='peer-delete'?'Удалить клиента без возможности отмены':extra.values.enabled?'Включить клиента':'Отключить клиента')+' «'+(peer.description||'Клиент')+'»?'))return;
  await api(op,{id:server.id,publicKey:peer.publicKey,...extra});await load();
}
async function peerConf(server,peer) {
  if(!confirm('Открыть конфиг клиента «'+(peer.description||'Клиент')+'»? Он содержит приватный ключ.'))return;
  const {conf}=await api('peer-conf',{id:server.id,publicKey:peer.publicKey,confirmed:true});
  openSheet('Конфиг клиента',box=>{
    const text=h('textarea',{readonly:true,rows:10,'aria-label':'Конфиг клиента'});text.value=conf;
    try{box.append(clientQR6(conf));}catch(_){box.append(h('p',{class:'hint'},'Конфиг слишком большой для QR-кода. Скачайте .conf.'));}
    box.append(h('p',{class:'hint'},'Храните конфиг как пароль. Скопируйте текст или скачайте файл.'),text,
      h('button',{class:'btn-primary',onclick:()=>{const url=URL.createObjectURL(new Blob([conf],{type:'text/plain'}));const link=h('a',{href:url,download:server.id+'-client.conf'});document.body.append(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),30000);}},icon('download'),'Скачать .conf'));
  });
}
function renderSettings() {
  root.replaceChildren(h('h1',{},'Настройки'),h('div',{class:'card list'},
    menuItem('a-large-small','Вид панели','тема, размер, вид главной',lookSheet),
    menuItem('download','Обновление бота','установлена '+(S.botVersion||'—'),()=>go('bot-update')),
  ));
}
async function renderBotUpdate(check=false) {
  root.replaceChildren(h('h1',{},'Обновление бота'));
  if(S.admin!==true){root.append(h('div',{class:'card'},'Установка обновлений доступна администратору бота.'));return;}
  const card=h('div',{class:'card'});root.append(card);
  card.append(kv('Установлена версия',S.botVersion||'—'),h('p',{class:'hint'},'Конфиг и настройки роутера сохраняются. Бот перезапустится во время установки.'),btn('refresh-cw','Проверить обновления',()=>renderBotUpdate(true)));
  const job=await api('bot-update-status');
  if(check)S.release=await api('bot-update-check');
  const release=S.release;
  if(release){card.append(kv('Последняя версия',release.latest),h('p',{},release.available?'Доступно обновление':'Установлена актуальная версия'));
    if(release.available)card.append(btn('download','Установить обновление',async()=>{
      if(!confirm('Установить версию '+release.latest+'? Бот временно перезапустится.'))return;
      await api('bot-update-start',{commit:release.commit,confirmed:true});S.updatePending=true;await pollUpdate();
    },'btn-primary'));
  }
  root.append(h('div',{class:'card',id:'update-job',role:'status'},job.message||'Обновление не выполняется'));
  if(['queued','downloading','verifying','backup','stopping','installing','starting','rollback'].includes(job.phase)){S.updatePending=true;setTimeout(()=>operate(pollUpdate),2000);}
}
async function pollUpdate() {
  if(S.view!=='bot-update'||!S.updatePending)return;
  let node=document.getElementById('update-job');if(!node){node=h('div',{class:'card',id:'update-job',role:'status'});root.append(node);}
  try{const job=await api('bot-update-status');node.textContent=job.message||job.phase;
    if(['done','failed','idle'].includes(job.phase)){S.updatePending=false;if(job.phase==='done'){const info=await api('bot-info');S.botVersion=info.version;S.release=null;}return;}
  }catch(_){node.textContent='Бот перезапускается. Ожидаю соединение…';}
  setTimeout(()=>operate(pollUpdate),2000);
}
async function serverAction(server,action) {
  const label={start:'Включить',stop:'Остановить',restart:'Перезапустить'}[action];
  if(!confirm(label+' сервер «'+(server.description||server.id)+'»?'+(action==='start'?'':' Подключённые клиенты могут потерять связь.')))return;
  const result=await api('server-action',{id:server.id,action});
  await renderServers();
  if(result?.accepted)root.prepend(h('p',{class:'hint',role:'status'},'Перезапуск принят. Статус обновится автоматически.'));
}

function structured(data){return h('div',{},dataCards(data));}
// Settings and routing forms use authenticated fixed operations only.
const LABELS6={server:'HTTP-сервер',pingCheck:'Проверка пинга',logging:'Логирование',updates:'Обновление AWGM',download:'Загрузки',dnsRoute:'DNS-маршруты',geoFile:'Геоданные',authEnabled:'Авторизация AWGM',sessionTtlHours:'Время жизни сессии, часы',mcpEnabled:'MCP-сервер',obfuscatorRelayProcess:'Релей отдельным процессом',obfuscatorKmodTripped:'Причина отключения релея ядра',apiKey:'API-ключ',schemaVersion:'Версия схемы',monitoringExcludedTunnels:'Исключённые туннели мониторинга',disableMemorySaving:'Отключить экономию памяти',connectivityCheckUrl:'URL проверки подключения',usageLevel:'Уровень сложности',singboxBootstrapDNS:'Bootstrap DNS sing-box',singboxClashPort:'Порт Clash API',enabled:'Включено',defaults:'Параметры по умолчанию',method:'Метод',target:'Цель проверки',interval:'Интервал, секунды',deadInterval:'Интервал после отказа, секунды',failThreshold:'Число отказов',maxAge:'Хранить журналы, дни',logLevel:'Уровень AWGM',singboxLogLevel:'Уровень sing-box',appMaxEntries:'Записей AWGM',singboxMaxEntries:'Записей sing-box',checkEnabled:'Проверять обновления',channel:'Канал',autoInstallEnabled:'Автоматическая установка',autoInstallIntervalDays:'Интервал установки, дни',autoInstallTime:'Время установки',statsEnabled:'Анонимная статистика установок',routeTag:'Маршрут загрузок',routeKind:'Тип маршрута',autoRefreshEnabled:'Автообновление',refreshIntervalHours:'Интервал, часы',refreshMode:'Режим обновления',refreshDailyTime:'Время обновления',port:'Порт',interface:'Интерфейс',interfaces:'Интерфейсы',name:'Название',clientIp:'IP устройства',clientHostname:'Имя устройства',tunnelId:'Туннель',tunnelID:'Туннель',subnets:'IP-адреса и подсети',manualDomains:'Домены вручную',manualText:'Домены с комментариями',excludes:'Исключения доменов',excludesText:'Исключения с комментариями',excludeSubnets:'Исключения подсетей',subscriptions:'Подписки',routes:'Выходы маршрута',backend:'Движок',fallback:'Если туннель недоступен',hrRouteMode:'Тип маршрута HydraRoute',hrPolicyName:'Политика HydraRoute',hrPolicyInterfaces:'Интерфейсы HydraRoute',domain_suffix:'Домены',ip_cidr:'IP-подсети назначения',source_ip_cidr:'IP-подсети источника',source_mac_address:'MAC устройств',rule_set:'Наборы правил',protocol:'Протокол',inbound:'Входы',action:'Действие',outbound:'Выход',tag:'Метка',type:'Тип',format:'Формат',url:'URL подписки',update_interval:'Интервал обновления',download_detour:'Маршрут загрузки',path:'Путь файла',rules:'Правила',policyName:'Политика доступа',deviceMode:'Какие устройства',snifferEnabled:'Сниффер',wanAutoDetect:'Автоматический WAN',wanInterface:'Интерфейс WAN',bypassPresets:'Пресеты обхода',bypassExtraPorts:'Дополнительные порты обхода',bypassExtraSubnets:'Подсети обхода',bypassGeoipTags:'GeoIP обхода',ingressInterfaces:'Серверы и интерфейсы на входе',fakeipStack:'Стек TUN',fakeipPool4:'Пул FakeIP IPv4',fakeipPool6:'Пул FakeIP IPv6',fakeipMtu:'MTU TUN',fakeipRealServer:'Настоящий DNS',udpTimeout:'Таймаут UDP',udpNatMax:'Лимит UDP NAT',autoStart:'Автозапуск',clearIPSet:'Очищать IPSet',cidr:'Поддержка CIDR',ipsetEnableTimeout:'Таймаут IPSet',ipsetTimeout:'Таймаут, секунды',ipsetMaxElem:'Максимум элементов IPSet',directRouteEnabled:'Прямой маршрут',globalRouting:'Глобальная маршрутизация',conntrackFlush:'Очищать conntrack',log:'Уровень журнала',logFile:'Файл журнала',geoIPFiles:'Файлы GeoIP',geoSiteFiles:'Файлы GeoSite',policyOrder:'Порядок политик',qosClasses:'Классы QoS',policyTunSourcePreserve:'Сохранять адреса источника',policyTunNatSegments:'LAN-сегменты NAT',cacheFileLocation:'Хранение кэша'};
const CHOICES6={usageLevel:['basic','advanced','expert'],method:['http','icmp'],logLevel:['debug','info','warn','error'],singboxLogLevel:['trace','debug','info','warn','error','fatal','panic'],channel:['stable','develop'],refreshMode:['interval','daily'],backend:['ndms','hydraroute'],fallback:['auto','reject',''],deviceMode:['policy','all'],cacheFileLocation:['','flash','tmp'],fakeipStack:['','system'],hrRouteMode:['interface','policy']};
function field6(key,value,readOnly=false){
 const label=LABELS6[key]||key;let input,read;
 if(['routes','subscriptions'].includes(key)&&Array.isArray(value)){
  const items=[],body=h('div',{class:'settings-nested'}),wrapper=h('fieldset',{},h('legend',{},label),body);
  const add=item=>{const box=h('div',{class:'route-target'});let controls;
   if(key==='routes'){const options=(S.routeTunnels||[]).map(t=>({id:t.id||t.tunnelId||'',label:t.name||t.description||t.id}));const select=h('select',{'aria-label':'Туннель маршрута'},h('option',{value:''},'Выберите туннель'),options.map(t=>h('option',{value:t.id},t.label)));if(item.tunnelId&&!options.some(t=>t.id===item.tunnelId))select.append(h('option',{value:item.tunnelId},item.tunnelId));select.value=item.tunnelId||'';const fallback=field6('fallback',item.fallback||'auto');box.append(select,fallback.node);controls=()=>({...item,tunnelId:select.value,fallback:fallback.read()});}
   else{const url=field6('url',item.url||''),name=field6('name',item.name||'');box.append(url.node,name.node);controls=()=>({...item,url:url.read(),name:name.read()});}
   const entry={read:controls,box};items.push(entry);if(!readOnly)box.append(h('button',{type:'button',onclick:()=>{items.splice(items.indexOf(entry),1);box.remove();}},'Убрать'));body.append(box);
  };value.forEach(add);if(!readOnly)wrapper.append(h('button',{type:'button',onclick:()=>add(key==='routes'?{interface:'',tunnelId:'',fallback:'auto'}:{url:'',name:''})},key==='routes'?'Добавить выход':'Добавить подписку'));return{node:wrapper,read:()=>items.map(i=>i.read())};
 }
 if(Array.isArray(value)){const strings=value.every(v=>typeof v==='string');input=h('textarea',{rows:3,'aria-label':label,readonly:readOnly||null});input.value=strings?value.join('\n'):JSON.stringify(value,null,2);read=()=>strings?input.value.split('\n').map(s=>s.trim()).filter(Boolean):JSON.parse(input.value);}
 else if(value!==null&&typeof value==='object'){const box=h('div',{class:'settings-nested'}),children=Object.entries(value).map(([k,v])=>[k,field6(k,v,readOnly)]);children.forEach(([,f])=>box.append(f.node));return{node:h('fieldset',{},h('legend',{},label),box),read:()=>Object.fromEntries(children.map(([k,f])=>[k,f.read()]))};}
 else if(typeof value==='boolean'){input=h('input',{type:'checkbox','aria-label':label,disabled:readOnly||null});input.checked=value;read=()=>input.checked;}
 else if(CHOICES6[key]){const choices=key==='fallback'?(S.routeFieldSection==='devices'?['drop','bypass']:S.routeFieldSection==='ip'?['','reject']:['auto','reject','']):CHOICES6[key];input=h('select',{'aria-label':label,disabled:readOnly||null},[...new Set([...choices,String(value??'')])].map(v=>h('option',{value:v},({basic:'Базовый',advanced:'Расширенный',expert:'Экспертный',stable:'Стабильный',develop:'Разработка',interval:'По интервалу',daily:'Ежедневно',auto:'Автоматически',reject:'Блокировать',drop:'Блокировать',bypass:'Без VPN',policy:'В политике',all:'Все устройства',flash:'На накопителе',tmp:'В оперативной памяти'})[v]||v||'По умолчанию')));input.value=String(value??'');read=()=>input.value;}
 else {input=h('input',{type:typeof value==='number'?'number':'text','aria-label':label,readonly:readOnly||null,step:typeof value==='number'?1:null});input.value=value??'';read=()=>typeof value==='number'?Number(input.value):input.value;}
 return{node:h('label',{class:'setting-field'},h('span',{},label),input),read};
}
function changed6(old,next){const patch={};for(const[k,v]of Object.entries(next)){if(v&&typeof v==='object'&&!Array.isArray(v)&&old[k]&&typeof old[k]==='object'){const p=changed6(old[k],v);if(Object.keys(p).length)patch[k]=p;}else if(JSON.stringify(v)!==JSON.stringify(old[k]))patch[k]=v;}return patch;}
function settingsGroup6(title,initial,save,readOnly=false){const fields=Object.entries(initial).map(([k,v])=>[k,field6(k,v,readOnly)]);const detail=h('details',{class:'card settings-group'},h('summary',{},title));const form=h('form',{},fields.map(([,f])=>f.node));if(!readOnly){const msg=h('p',{class:'hint',role:'status'});form.append(msg,h('button',{type:'submit',class:'btn-primary'},'Сохранить'));form.addEventListener('submit',event=>{event.preventDefault();operate(async()=>{const next=Object.fromEntries(fields.map(([k,f])=>[k,f.read()]));const patch=changed6(initial,next);if(!Object.keys(patch).length){msg.textContent='Изменений нет';return;}if(!confirm('Сохранить «'+title+'»? Изменения повлияют на работу роутера.'))return;await save(patch);Object.assign(initial,next);msg.textContent='Сохранено';});});}detail.append(form);return detail;}
async function renderManagerSettings(){
 if(S.admin!==true){root.replaceChildren(h('h1',{},'Настройки'),h('div',{class:'card'},'Настройки AWGM доступны администратору.'),btn('a-large-small','Вид панели',lookSheet));return;}
 const settings=await api('manager-settings');root.replaceChildren(h('h1',{},'Настройки'),h('div',{class:'card list'},menuItem('a-large-small','Вид панели','тема, размер, главная',lookSheet),menuItem('download','Обновление бота','установлена '+(S.botVersion||'—'),()=>go('bot-update'))));
 const system=await api('system').catch(()=>null);if(system)root.append(h('details',{class:'card'},h('summary',{},'Система AWGM'),structured(system)));
 const update=h('div',{class:'card'},h('h2',{},'Обновление AWGM'),btn('refresh-cw','Проверить',async()=>{const info=await api('manager-update-check');update.querySelector('.update-description').replaceChildren(structured(info));if(info.available&&!update.querySelector('.manager-install'))update.append(btn('download','Установить обновление AWGM',async()=>{if(!confirm('Установить обновление AWGM? Менеджер перезапустится, VPN может прервать соединения.'))return;await api('manager-update-apply',{confirmed:true});alert('Обновление AWGM запущено. Откройте панель позже.');},'manager-install'));}),h('div',{class:'update-description'}));root.append(update);
 const service=Object.fromEntries(Object.entries(settings).filter(([k])=>['schemaVersion','obfuscatorKmodTripped'].includes(k)));if(Object.keys(service).length)root.append(h('details',{class:'card'},h('summary',{},'Служебные параметры'),structured(service)));
 const ordinary={};for(const[k,v]of Object.entries(settings)){
  if(k==='apiKey'){root.append(h('div',{class:'card'},h('h2',{},'API-ключ'),h('p',{class:'hint'},'Скрыт. Смена ключа выполняется в AWGM и требует обновления /opt/etc/awg-bot.conf.')));continue;}
  if(k==='obfuscatorRelayProcess'){root.append(h('div',{class:'card'},h('h2',{},'Релей обфускации'),switchButton(v,async()=>{if(!confirm('Изменить режим релея?'))return;await api('manager-relay',{process:!v,confirmed:true});await renderManagerSettings();},'Релей отдельным процессом')));continue;}
  if(v&&typeof v==='object'&&!Array.isArray(v)){const ro=k==='server';root.append(settingsGroup6(LABELS6[k]||k,v,patch=>api('manager-save',{values:{[k]:patch},confirmed:true}),ro));if(ro)root.append(h('p',{class:'hint'},'HTTP-порт и интерфейсы показаны для справки. Их живая смена требует подтверждения новой точки подключения в AWGM.'));}
  else if(!['schemaVersion','obfuscatorKmodTripped'].includes(k))ordinary[k]=v;
 }
 root.append(settingsGroup6('Доступ и расширенные параметры',ordinary,values=>api('manager-save',{values,confirmed:true})));
 const sb=await api('manager-status').catch(()=>null);if(sb)root.append(h('div',{class:'card'},h('h2',{},'Интеграция sing-box'),structured(sb),h('div',{class:'actions'},(sb.installed?['start','stop','restart','update','uninstall']:['install']).map(action=>btn(null,({start:'Запустить',stop:'Остановить',restart:'Рестарт',update:'Обновить',uninstall:'Удалить',install:'Установить'})[action],async()=>{if(!confirm('Выполнить действие sing-box: '+action+'? Подключения могут прерваться.'))return;await api('manager-singbox',{action,confirmed:true});await renderManagerSettings();})))));
 for(const[subsystem,title]of [['wdtt','WDTТ'],['freeturn','FreeTurn'],['obf-phobos','Обфускатор Phobos'],['obf-clusterm','Обфускатор ClusterM']]){const status=await api('manager-proxy-status',{subsystem}).catch(()=>null);if(status)root.append(h('details',{class:'card'},h('summary',{},title),structured(status),h('div',{class:'actions'},['install','uninstall'].map(action=>btn(null,action==='install'?'Установить':'Удалить',async()=>{if(!confirm((action==='install'?'Установить':'Удалить')+' '+title+'?'))return;await api('manager-proxy',{subsystem,action,confirmed:true});await renderManagerSettings();})))));}
 const hr=await api('manager-hr-settings').catch(()=>null);if(hr)root.append(settingsGroup6('HR Neo',hr,values=>api('manager-hr-save',{values,confirmed:true})));
 root.append(h('div',{class:'card list'},menuItem('network','Настройки маршрутизатора sing-box','TProxy, FakeIP, WAN, DNS, обходы и QoS',()=>go('router-settings'))));
}
async function renderRouterSettings6(){const data=await api('routing-read',{section:'router'});root.replaceChildren(h('h1',{},'Маршрутизатор sing-box'));const mode=h('select',{'aria-label':'Режим маршрутизации'},[['off','Выключен'],['tproxy','TProxy'],['fakeip-tun','FakeIP'],['policy-tun','Policy TUN']].map(([value,text])=>h('option',{value},text)));mode.value=data.enabled?data.routingMode:'off';root.append(h('div',{class:'card'},h('h2',{},'Режим'),mode,btn('check','Применить режим',async()=>{if(!confirm('Сменить режим маршрутизации? VPN и интернет клиентов могут прерваться.'))return;await api('routing-mode',{mode:mode.value,confirmed:true});await renderRouterSettings6();})));
 const editable=Object.fromEntries(Object.entries(data).filter(([k])=>!['enabled','routingMode'].includes(k)));root.append(settingsGroup6('Параметры маршрутизатора',editable,values=>api('routing-router-save',{values,confirmed:true})));
}
const ROUTE_TABS6=[['dns','NDMS'],['ip','IP-адреса'],['devices','VPN устройств'],['policies','Политики доступа'],['singbox','Sing-box'],['hr','HR Neo'],['geo','Геоданные'],['rulesets','Наборы правил']];
async function renderRouting6(){
 const section=S.routingSection||'dns';const rows=await api('routing-read',{section});S.routingRows=rows;
 const tabs=h('div',{class:'routing-tabs'});
 for(const[key,title]of ROUTE_TABS6.filter(([key],i)=>i<2||key===section))tabs.append(btn(null,title,async()=>{S.routingSection=key;S.routingQuery='';await renderRouting6();},key===section?'active':''));
 tabs.append(btn('chevron-down','Ещё',()=>openSheet('Разделы маршрутизации',box=>{
  const list=h('div',{class:'list'});for(const[key,title]of ROUTE_TABS6.slice(2))list.append(menuItem('network',title,'',async()=>{closeSheet();S.routingSection=key;S.routingQuery='';await operate(renderRouting6);}));box.append(list);
 })));
 root.replaceChildren(h('h1',{},'Маршрутизация'),tabs);
 if(section==='hr'){root.append(h('div',{class:'card'},structured(rows),h('div',{class:'actions'},['start','stop','restart'].map(action=>btn(null,({start:'Запустить',stop:'Остановить',restart:'Рестарт'})[action],async()=>{if(!confirm('Изменить состояние HR Neo? Маршрутизация может прерваться.'))return;await api('manager-hr-control',{action,confirmed:true});await renderRouting6();})))));return;}
 if(section==='policies')root.append(btn('plus','Создать политику',()=>formSheet('Создать политику',[{key:'description',label:'Название',required:true,value:''}],values=>api('routing-policy',{action:'create',values,confirmed:true}))));
 if(section==='geo')root.append(btn('plus','Добавить геофайл',()=>formSheet('Добавить геофайл',[{key:'type',label:'Тип: geosite или geoip',value:'geosite',required:true},{key:'url',label:'HTTPS URL',value:'',required:true}],values=>api('routing-geo',{action:'add',...values,confirmed:true}))));
 if(section==='dns')root.append(h('details',{class:'card warning'},h('summary',{},'Ограничения DNS-маршрутов NDMS'),h('p',{class:'hint'},'Работают для клиентов политики по умолчанию через DNS роутера. DoH/DoT обходят правила. Первые запросы могут уйти до появления IP в таблице. Короткий TTL и сторонний перехват DNS мешают маршрутизации.')));
 const query=h('input',{type:'search',placeholder:'Поиск…','aria-label':'Поиск маршрута'});query.value=S.routingQuery||'';const list=h('div',{class:'routing-list'});query.addEventListener('input',()=>{S.routingQuery=query.value;drawRoutes6(list,rows,section);});
 root.append(h('div',{class:'pair'},query,btn('refresh-cw','Обновить',async()=>{if(!confirm('Обновить состояние маршрутизации AWGM?'))return;await api('routing-refresh',{confirmed:true});await renderRouting6();})));
 if(['dns','ip','devices','singbox','rulesets'].includes(section))root.append(btn('plus','Добавить',()=>routeForm6(section,null),'btn-primary'));
 if(section==='singbox')root.append(btn('settings','Режим и параметры sing-box',()=>go('router-settings')));
 root.append(list);drawRoutes6(list,rows,section);
}
function drawRoutes6(list,rows,section){if(!Array.isArray(rows)){list.replaceChildren(h('div',{class:'card'},structured(rows)));return;}const query=(S.routingQuery||'').toLowerCase();list.replaceChildren(...rows.map((row,index)=>({row,index})).filter(({row})=>JSON.stringify(row).toLowerCase().includes(query)).map(({row,index})=>{
 const card=h('article',{class:'card route-card'},h('div',{class:'row'},h('strong',{},row.name||row.description||row.clientHostname||row.tag||row.clientIp||row.path||'Правило '+(index+1)),typeof row.enabled==='boolean'?switchButton(row.enabled,()=>routeMutate6(section,'toggle',row,index,{enabled:!row.enabled}),'Включить маршрут '+(row.name||row.id)):null));
 const editable=['dns','ip','devices','singbox','rulesets'].includes(section)&&!row.awgm_managed;
 if(section==='dns'){card.append(h('p',{class:'hint'},(row.backend||'ndms')+' · '+(row.domains||row.manualDomains||[]).length+' доменов'),h('p',{},(row.routes||[]).map(t=>t.tunnelId||t.interface).join(' → ')));}
 else if(section==='ip')card.append(h('p',{class:'hint'},(row.subnets||[]).join(', ')+' → '+row.tunnelID));
 else if(section==='devices')card.append(h('p',{class:'hint'},row.clientIp+' → '+row.tunnelId));
 else card.append(h('details',{},h('summary',{},'Подробности'),structured(row)));
 if(section==='geo')card.append(h('div',{class:'actions'},btn('refresh-cw','Обновить файл',async()=>{if(!confirm('Обновить геофайл?'))return;await api('routing-geo',{action:'update',path:row.path,confirmed:true});await renderRouting6();}),row.external?null:btn('trash-2','Удалить',async()=>{if(!confirm('Удалить геофайл? Это повлияет на правила маршрутизации.'))return;await api('routing-geo',{action:'delete',path:row.path,confirmed:true});await renderRouting6();},'bad')));
 if(section==='policies')card.append(typeof row.standalone==='boolean'?h('div',{class:'row'},h('span',{},'Автономная политика'),switchButton(row.standalone,async()=>{if(!confirm('Изменить автономный режим политики?'))return;await api('routing-policy',{action:'standalone',name:row.name,values:{enabled:!row.standalone},confirmed:true});await renderRouting6();},'Автономная политика')):null,h('div',{class:'actions'},btn('pencil','Название',()=>formSheet('Название политики',[{key:'description',label:'Название',value:row.description||'',required:true}],values=>api('routing-policy',{action:'description',name:row.name,values,confirmed:true}))),btn('settings','Интерфейсы',()=>policyInterfaces6(row)),row.isStandard?null:btn('trash-2','Удалить',async()=>{if(!confirm('Удалить политику доступа? Устройства потеряют выбранную политику.'))return;await api('routing-policy',{action:'delete',name:row.name,confirmed:true});await renderRouting6();},'bad')));
 if(editable)card.append(h('div',{class:'actions'},btn('pencil','Изменить',()=>routeForm6(section,row,index)),section==='dns'?btn('refresh-cw','Подписки',()=>routeMutate6(section,'refresh',row,index)):null,btn('trash-2','Удалить',()=>routeMutate6(section,'delete',row,index),'bad')));return card;
}));if(!list.childNodes.length)list.append(h('p',{class:'hint'},'Правил нет'));
}
async function routeMutate6(section,action,row,index,extra={}){if(!confirm(action==='delete'?'Удалить правило без возможности отмены?':'Изменить маршрут? Это повлияет на подключения.'))return;await api('routing-write',{section,action,id:row.tag||row.id,index,expected:section==='singbox'?row:undefined,...extra,confirmed:true});await renderRouting6();}
const ROUTE_DEFAULTS6={dns:{name:'',manualDomains:[],routes:[],enabled:true,backend:'ndms',subscriptions:[],excludes:[],subnets:[]},ip:{name:'',tunnelID:'',subnets:[],fallback:'',enabled:true},devices:{clientIp:'',clientHostname:'',tunnelId:'',fallback:'drop',enabled:true},singbox:{domain_suffix:[],ip_cidr:[],action:'route',outbound:'direct'},rulesets:{tag:'',type:'remote',format:'binary',url:'',update_interval:'24h',download_detour:'direct'}};
const ROUTE_OMIT6=['id','createdAt','updatedAt','domains','iconUrl','awgm_managed','materialized_srs'];
async function routeForm6(section,row,index){const initial=row?Object.fromEntries(Object.entries(row).filter(([k])=>!ROUTE_OMIT6.includes(k))):structuredClone(ROUTE_DEFAULTS6[section]);const tunnels=await api('routing-read',{section:'tunnels'}).catch(()=>[]);S.routeTunnels=tunnels;S.routeFieldSection=section;openSheet(row?'Изменить правило':'Добавить правило',box=>{box.append(h('p',{class:'hint'},'Выходы: '+tunnels.map(t=>t.id||t.tunnelId||t.interface||t.name).filter(Boolean).join(', ')));
 const fields=Object.entries(initial).map(([k,v])=>[k,field6(k,v)]);const error=h('p',{class:'hint',role:'status'});const form=h('form',{},fields.map(([,f])=>f.node),error,h('button',{type:'submit',class:'btn-primary'},'Сохранить'));form.addEventListener('submit',async event=>{event.preventDefault();error.textContent='';try{const values=Object.fromEntries(fields.map(([k,f])=>[k,f.read()]));if(!confirm('Сохранить правило маршрутизации?'))return;await api('routing-write',{section,action:row?'update':'create',id:row?.tag||row?.id,index,expected:section==='singbox'?row:undefined,values,confirmed:true});closeSheet();await operate(renderRouting6);}catch(e){error.textContent=e.message;}});box.append(form);});}
function clientQR6(conf){const qr=qrcode(0,'M');qr.addData(conf,'Byte');qr.make();const size=qr.getModuleCount(),canvas=h('canvas',{class:'client-qr','aria-label':'QR-код конфигурации клиента',role:'img',width:(size+8)*5,height:(size+8)*5});const ctx=canvas.getContext('2d');ctx.fillStyle='#fff';ctx.fillRect(0,0,canvas.width,canvas.height);ctx.fillStyle='#000';for(let y=0;y<size;y++)for(let x=0;x<size;x++)if(qr.isDark(y,x))ctx.fillRect((x+4)*5,(y+4)*5,5,5);return canvas;}

async function policyInterfaces6(policy){const interfaces=await api('routing-read',{section:'policy-interfaces'});openSheet('Интерфейсы · '+policy.description,box=>{box.append(h('p',{class:'hint'},'Меньший номер означает более высокий приоритет.'));for(const iface of interfaces){const assigned=(policy.interfaces||[]).find(i=>(i.interface===iface.name||i.name===iface.name)&&!i.denied);const order=h('input',{type:'number',min:0,max:999,value:assigned?.order??0,'aria-label':'Приоритет '+iface.label});box.append(h('div',{class:'card'},h('strong',{},iface.label||iface.name),order,btn(null,assigned?'Убрать':'Разрешить',async()=>{if(!confirm('Изменить интерфейсы политики?'))return;await api('routing-policy',{action:assigned?'deny':'permit',name:policy.name,values:{interface:iface.name,order:Number(order.value)},confirmed:true});closeSheet();await renderRouting6();})));}});}
