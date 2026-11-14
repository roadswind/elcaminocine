// El sitio ya no usa service worker (la app instalable es la Sala, en /sala/). Este archivo retira la versión anterior.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => { e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => !k.startsWith('sala-')).map((k) => caches.delete(k)))).then(() => self.registration.unregister())); });
