if (typeof importScripts === 'function') {
  importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.2/workbox-sw.js');

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded');

    // Switch debug logging on/off here. Default is on in dev and off in prod
    workbox.setConfig({ debug: false });

    // Control the uncontrolled client side
    workbox.core.clientsClaim();

    workbox.precaching.cleanupOutdatedCaches();

    self.addEventListener('message', (event) => {
      if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
      }
    });

    // Recipes

    workbox.recipes.googleFontsCache();

    workbox.recipes.pageCache({
      plugins: [
        new workbox.cacheableResponse.CacheableResponsePlugin({
          statuses: [0, 200],
        }),
      ],
    });

    workbox.recipes.staticResourceCache({
      plugins: [
        new workbox.cacheableResponse.CacheableResponsePlugin({
          statuses: [0, 200],
        }),
      ],
    });

    // Custom

    // Plugins

    const IgnoreQueryStringPlugin = {
      cachedResponseWillBeUsed: async ({ cacheName, request, matchOptions, cachedResponse, event }) => {
        if (cachedResponse) return cachedResponse;

        // This will match same URL / different query string, where the original failed
        return caches.match(request.url, { ignoreSearch: true });
      },
    };

    // Images (Other)

    workbox.routing.registerRoute(
      new RegExp('.(?:png|gif|jpg|jpeg|webp|svg)$'),
      new workbox.strategies.CacheFirst({
        cacheName: 'images',
        plugins: [
          new workbox.cacheableResponse.CacheableResponsePlugin({
            statuses: [0, 200]
          }),
          new workbox.expiration.ExpirationPlugin({
            maxEntries: 1e4,
            maxAgeSeconds: 3 * 24 * 60 * 60,
          }),
          IgnoreQueryStringPlugin,
        ],
      })
    );

  } else {
    console.log('Workbox could not be loaded. No Offline support.');
  }
}
