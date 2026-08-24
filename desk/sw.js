/* Kill switch. The desk was retired on 22/08/2026.

   A browser re-fetches this file when it checks the installed app for updates.
   Serving a worker that unregisters itself and empties every cache is the only
   way to remove a PWA that is already on someone's home screen; deleting the
   files from the server just leaves the old build running from cache forever.

   Remove this file, and /desk/ entirely, once every device that had the desk
   installed has opened it at least once. */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    for (const key of await caches.keys()) await caches.delete(key);
    await self.registration.unregister();
    for (const client of await self.clients.matchAll({ type: 'window' })) client.navigate(client.url);
  })());
});
