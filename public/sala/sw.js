// Service worker de la Sala (solo controla /sala/): la app abre al instante y funciona con mala conexión.
const V = 'sala-v1';
self.addEventListener('install', (e) => { e.waitUntil(caches.open(V).then((c) => c.add('/sala/')).then(() => self.skipWaiting())); });
self.addEventListener('activate', (e) => { e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k.startsWith('sala-') && k !== V).map((k) => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', (e) => {
  const req = e.request; const url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== location.origin || req.headers.has('range')) return;
  if (req.mode === 'navigate') {
    // red primero, para que el catálogo siempre esté al día; copia guardada si no hay conexión
    e.respondWith(fetch(req).then((res) => { if (res.ok) { const copy = res.clone(); caches.open(V).then((c) => c.put('/sala/', copy)); } return res; }).catch(() => caches.match('/sala/')));
    return;
  }
  if (/^\/(_astro|icons|media)\//.test(url.pathname) && !url.pathname.endsWith('.mp4')) {
    e.respondWith(caches.match(req).then((hit) => hit || fetch(req).then((res) => { if (res.ok) { const copy = res.clone(); caches.open(V).then((c) => c.put(req, copy)); } return res; })));
  }
});
