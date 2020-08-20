'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon.png": "4f18d89c4c13ed509ee13def8efc3eee",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/fonts/ProductSans-Regular.ttf": "b61c0ab33a818a0162f3e868babcef4b",
"assets/LICENSE": "8e877eff43c93dd8ff3206296e2289dd",
"assets/assets/images/linkedin.png": "926e2dcf5ab4220a359867614556df68",
"assets/assets/images/medium_light.png": "bd516690c99267a778885736015befe8",
"assets/assets/images/moon.png": "a270b8a10d1a9a52441bf5a322dd1b86",
"assets/assets/images/medium.png": "fb86f4060325caef8ea1f0fad0d25f40",
"assets/assets/images/avatar.jpg": "abf31252053601d10cfebf9da0a3c7ac",
"assets/assets/images/github.png": "d22ee3727a7216019c3848df6eafa024",
"assets/FontManifest.json": "4c930cad4445d0bf2d200ec85a03a279",
"assets/AssetManifest.json": "b2bdec7e4f61743a6dc86a39a87a927d",
"manifest.json": "a83bbbd9d23ea4d752fbcd44cdc544fa",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"index.html": "6b848d47eeb04d776f3c88144699f750",
"/": "6b848d47eeb04d776f3c88144699f750",
"main.dart.js": "9646888347174e4bad60567cf4c8abfb",
"favicon.ico": "b6ba25f335473f687748f47d792e3bf6"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
