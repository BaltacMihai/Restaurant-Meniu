const cacheBuilder = {
  name: "version 1.0.0",
  assets: [
    "index.html",
    "event.html",
    "contact.html",
    "about.html",
    "./Resources",
    "config.js",
    "logo.png",
  ],
};
self.addEventListener("fetch", (e) => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open(cacheBuilder.name)
      .then((cache) => {
        cache.addAll(cacheBuilder.assets).catch((er) => console.log(er));
      })
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== cacheBuilder.name) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});
