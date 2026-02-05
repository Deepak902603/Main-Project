const CACHE_NAME = "day22-cache-v1";

const FILES_TO_CACHE = [
  "/",
  "/index.html",
  "/offline.html"
];

self.addEventListener("install", (event) => {
  console.log("Service Worker installing...");

  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request) || caches.match("/offline.html");
    })
  );
});
