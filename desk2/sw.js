/* The old address, switched off.
 *
 * This replaces the working service worker that used to live at /desk2/. An
 * installed copy of the desk checks for a new version of its worker in the
 * background; when it finds this one, this is what it gets. It does nothing
 * except delete every cache it can see, unregister itself, and push any open
 * window to the new address.
 *
 * Without this, an iPad with the old desk on its home screen would keep serving
 * the old build out of its own cache indefinitely, because a service worker
 * answers navigations before the request ever reaches the server and no
 * redirect on the server can reach it. */

self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.map(k => caches.delete(k)));
    await self.registration.unregister();
    const clients = await self.clients.matchAll({ type: 'window' });
    for (const c of clients) {
      try { await c.navigate('https://propertyclinicsolutions.com/desk/'); } catch { /* closing */ }
    }
  })());
});

/* Nothing is served from here any more. Every request goes to the network, and
   the server answers it with a redirect. */
self.addEventListener('fetch', () => {});
