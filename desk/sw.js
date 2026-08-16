/* Offline. The desk runs meetings on an iPad, and wifi in a client's front room
   is not a given. Network first so you always get the newest build, cache as
   the fallback so a dead connection opens the app rather than a browser error.
   The book itself is cached separately in localStorage by the app.

   v3 fixes a real bug. "Network first" was not first at all: a plain fetch()
   still honours the browser's own HTTP cache, so when the host sent a
   cache-control header the service worker was handed a stale copy without a
   request ever leaving the machine. A new build could sit on the server for
   hours while the desk insisted it was up to date. The page and the app shell
   are now fetched with cache: 'no-store', which forces a real request. */
const CACHE = 'pcs-desk-v4';

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(['./', './index.html']).catch(() => {})));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

/** The page itself, and anything that carries the build, must never come from
 *  a stale cache. Images and icons can. */
const isShell = (req, url) =>
  req.mode === 'navigate' ||
  url.pathname.endsWith('/') ||
  url.pathname.endsWith('.html') ||
  url.pathname.endsWith('.js') ||
  url.pathname.endsWith('.css');

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;   // never cache Supabase or fonts

  const live = isShell(req, url)
    ? fetch(new Request(req, { cache: 'no-store' }))
    : fetch(req);

  e.respondWith(
    live
      .then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {});
        return res;
      })
      .catch(() => caches.match(req).then(hit => hit || caches.match('./index.html'))),
  );
});
