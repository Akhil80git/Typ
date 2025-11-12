self.addEventListener('install', event => {
  console.log('✅ Service Worker Installed');
});

self.addEventListener('fetch', event => {
  // Optional: Add cache logic here later
});
