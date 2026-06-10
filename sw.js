const CACHE_NAME = 'prayer-times-v1';
const ASSETS = [
  './index.html',
  './manifest.json'
];

// تثبيت ملفات التطبيق المحلية فقط في الكاش
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// استدعاء الملفات محلياً في حال عدم وجود إنترنت
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      return cachedResponse || fetch(e.request);
    })
  );
});
