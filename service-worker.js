self.addEventListener('install', (event) => {
  console.log('✅ Service Worker Installed');
  event.waitUntil(
    caches.open('typ-cache').then((cache) => {
      return cache.addAll(['/Typ/', '/Typ/index.html']);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
