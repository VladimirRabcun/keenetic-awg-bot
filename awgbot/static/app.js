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

'use strict';
// Layout and appearance controls adapted from AWG Toolza (MIT).
// API calls stay within the authenticated AWG Manager bot API.
const tg = window.Telegram?.WebApp;
const root = document.getElementById('app');
const S = {view:'home', tunnels:[], busy:false, query:'', filter:'all', result:null, resultTitle:'', resultLoader:null, returnView:'home', updated:''};
const SECTIONS = [
  ['network','Туннели','tunnels','профили, управление VPN'],
  ['server','Серверы','servers','WireGuard, клиенты, трафик'],
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
    h('button',{'aria-label':'Меню',title:'Разделы',onclick:menuSheet},icon('menu')),
  );
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
function menuSheet() {
  openSheet('Разделы',box=>box.append(
    h('div',{class:'card list'},
      menuItem('house','Главная','сводка и разделы',()=>go('home')),
      SECTIONS.map(([ic,title,path,sub])=>menuItem(ic,title,sub,()=>go(path))),
    ),
    h('button',{onclick:()=>{closeSheet();operate(load);}},icon('refresh-cw'),'Обновить данные'),
    h('button',{onclick:lookSheet},icon('a-large-small'),'Вид панели'),
    h('button',{class:'close-sheet',onclick:()=>{closeSheet();tg?.close?.();}},icon('message-square-text'),'Вернуться в Telegram'),
  ));
}
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
  finally{S.busy=false;root.setAttribute('aria-busy','false');document.querySelectorAll('#app button,#bar button').forEach(node=>node.disabled=false);connection(error);}
}
function drawBar() {
  const sub=S.view!=='home';document.body.classList.toggle('has-bar',sub);
  document.getElementById('bar').replaceChildren(...(sub?[h('div',{class:'bar'},btn('arrow-left','Назад',()=>navigate(S.view==='result'?S.returnView:'home')),btn('refresh-cw','Обновить',load))]:[]));
  if(sub)tg?.BackButton?.show?.();else tg?.BackButton?.hide?.();
}
async function navigate(view) {S.view=view;root.replaceChildren(h('div',{class:'spin'},'Загрузка…'));drawBar();await load();window.scrollTo(0,0);}
function go(view) {if(S.busy)return;closeSheet();operate(()=>navigate(view));}
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
  else if(S.view==='settings')renderSettings();
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
api('bot-info').then(data=>{S.botVersion=data.version;S.admin=data.admin;if(S.view==='settings')renderSettings();}).catch(()=>{});
setInterval(()=>{if(!document.hidden&&!S.busy&&!sheetState&&['home','tunnels','wan','servers'].includes(S.view))operate(load);},15000);

async function renderServers() {
  const rows=await api('servers');
  root.replaceChildren(h('h1',{},'Серверы',pill(rows.length)));
  root.append(btn('plus','Создать сервер',createServer,'btn-primary'));
  if(!rows.length){root.append(h('div',{class:'card empty'},'Серверов пока нет'));return;}
  for(const server of rows) {
    const peers=server.peers||[], online=peers.filter(p=>p.online===true).length;
    const card=h('article',{class:'ecard '+(server.status==='up'?'ok':'off')},
      h('div',{class:'head'},h('span',{class:'dot '+(server.status==='up'?'ok':'off')}),h('span',{class:'name'},server.description||server.id),pill(server.status==='up'?'работает':server.status==='down'?'остановлен':'нет данных',server.status==='up'?'ok':'')),
      h('div',{class:'meta'},tag(server.kind==='managed'?'AWGM':'Keenetic','accent'),tag(server.id),server.listenPort?tag('UDP '+server.listenPort):null),
      h('div',{class:'line'},server.address||'—'),
      h('div',{class:'line'},'Клиенты онлайн: '+(!peers.length?0:peers.some(p=>typeof p.online==='boolean')?online:'—')+'/'+peers.length),
      h('div',{class:'acts'},btn('play','Старт',()=>serverAction(server,'start')),btn('square','Стоп',()=>serverAction(server,'stop'),'bad'),btn('refresh-cw','Рестарт',()=>serverAction(server,'restart'))),
    );
    card.append(h('div',{class:'pair'},btn('settings','Настроить',()=>serverSettings(server)),btn('user-plus','Добавить клиента',()=>peerForm(server))));
    const details=h('details',{class:'card'},h('summary',{},'Клиенты · '+peers.length));
    if(!peers.length)details.append(h('p',{class:'hint'},'Клиентов пока нет'));
    for(const peer of peers)details.append(h('div',{class:'card'},h('h3',{},peer.description||'Клиент'),
      kv('Состояние',peer.online===true?'Онлайн':peer.online===false?'Офлайн':'Нет данных'),
      kv('Адрес',peer.tunnelIP||(peer.allowedIPs||[]).join(', ')||'—'),
      kv('Получено',bytes(peer.rxBytes)),kv('Отправлено',bytes(peer.txBytes)),kv('Handshake',peer.lastHandshake||'—'),
      h('div',{class:'pair'},btn('pencil','Изменить',()=>peerForm(server,peer)),
        typeof peer.enabled==='boolean'?btn(peer.enabled?'pause':'play',peer.enabled?'Отключить':'Включить',()=>peerChange(server,peer,'peer-toggle',{values:{enabled:!peer.enabled}})):null),
      h('div',{class:'pair'},peer.confAvailable!==false?btn('file-down','Конфиг',()=>peerConf(server,peer)):null,btn('trash-2','Удалить',()=>peerChange(server,peer,'peer-delete',{confirmed:true}),'bad'))));
    card.append(details);root.append(card);
  }
}

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
