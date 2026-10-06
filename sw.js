// Eenvoudige service worker: zorgt dat de app installeerbaar is.
// Hij bewaart niets; de lijst komt altijd live van het script.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
