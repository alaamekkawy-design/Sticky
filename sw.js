const CACHE_NAME = 'prayer-times-v1';
const ASSETS = [
  'index.html',
  'manifest.json',
  'https://tailwindcss.com',
  'https://mixkit.co'
];

// تثبيت ملفات التطبيق الأساسية في الكاش
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// استدعاء الملفات من الكاش في حال عدم وجود إنترنت
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      return cachedResponse || fetch(e.request);
    })
  );
});
