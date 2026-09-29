// Service worker mínimo: habilita a instalação do PWA. Os dados sempre vêm do Google Drive.
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',()=>{});
