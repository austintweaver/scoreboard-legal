const CACHE_NAME = 'scoreboard-legal-v2';
const STATIC_CACHE = 'static-v2';
const IMAGE_CACHE = 'images-v2';

const urlsToCache = [
  '/',
  '/assets/blacklogo.png',
  '/assets/whitelogolegal.png',
  '/assets/scoreboardhome.jpg',
  '/assets/weaver-headshot.jpeg'
];

const imageCachePatterns = [
  /\.(png|jpg|jpeg|webp|gif|svg)$/i,
  /\/assets\//i
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    Promise.all([
      caches.open(STATIC_CACHE).then((cache) => cache.addAll(urlsToCache)),
      caches.open(IMAGE_CACHE)
    ])
  );
});

// Fetch event - serve from cache when possible
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Handle image requests with cache-first strategy
  if (imageCachePatterns.some(pattern => pattern.test(url.pathname))) {
    event.respondWith(
      caches.open(IMAGE_CACHE).then((cache) => {
        return cache.match(request).then((response) => {
          if (response) {
            // Return cached image
            return response;
          }
          
          // Fetch from network and cache
          return fetch(request).then((networkResponse) => {
            if (networkResponse.status === 200) {
              cache.put(request, networkResponse.clone());
            }
            return networkResponse;
          });
        });
      })
    );
    return;
  }

  // Handle other requests with network-first strategy
  event.respondWith(
    fetch(request)
      .then((response) => {
        // Cache successful responses
        if (response.status === 200) {
          const responseClone = response.clone();
          caches.open(STATIC_CACHE).then((cache) => {
            cache.put(request, responseClone);
          });
        }
        return response;
      })
      .catch(() => {
        // Fallback to cache
        return caches.match(request);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== STATIC_CACHE && cacheName !== IMAGE_CACHE) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
}); 