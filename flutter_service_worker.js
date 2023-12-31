'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "fa62a0f385fd246e09c15612da75b2b8",
"index.html": "c18132b4e76e5017f66559d5dcb8b9fe",
"/": "c18132b4e76e5017f66559d5dcb8b9fe",
"main.dart.js": "44afd91ec9575391f1ce17a00393eaf1",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9b9f453ec4a7848f6674fb4e251327f4",
"assets/AssetManifest.json": "8af73720074ac54208793cf6291f89f7",
"assets/NOTICES": "8e0ff0322bf2bc800ddaec371ee0f1f7",
"assets/FontManifest.json": "6caa214f216a42dc52d984eb1a97153e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "f1395e514618811cbc15bbdcd5ebd114",
"assets/fonts/MaterialIcons-Regular.otf": "0ec33d6f4e95115222113971d3943fed",
"assets/assets/images/green_1.JPG": "dc8604a2480c8161ff1df0e8c7a419a8",
"assets/assets/images/green_0.JPG": "3419bf25c2c92502a95502157d6fbfca",
"assets/assets/images/green_2.JPG": "411cc0dca01de4175ef36e1d49a0e5bc",
"assets/assets/images/green_3.JPG": "ee2012d5db77877196c1468caa2d4f2a",
"assets/assets/images/developed_by.png": "8d038a07647c205f2f6eccaab7d061eb",
"assets/assets/images/green_4.JPG": "d95713fd5768f719ed8fa2d3e1298d87",
"assets/assets/images/0303.png": "11c7591bd60a81f7af75761c4c85a05b",
"assets/assets/images/guide.png": "fef0c6d190cdeee35de766367e4a0759",
"assets/assets/images/wizard.jpg": "bdef253c6ddb8a933a3173cfbea1805c",
"assets/assets/images/wizard.png": "8d8146acb42d2bbd60d29a0f0f179991",
"assets/assets/images/express.png": "4a1c38a44c10ec8ce0bd6d52756bbbc0",
"assets/assets/images/intro.png": "c3a3dbb7c59f543c38f4d56e487293ce",
"assets/assets/images/KakaoTalk_20231125_001141292.jpg": "81845ab31f9a85f7c014aa69934ed088",
"assets/assets/images/white_3.JPG": "f4860f73903c4312a5a2ee5f3f58c3e6",
"assets/assets/images/white_2.JPG": "428fb9ff945717b93346c54b86c61b76",
"assets/assets/images/white_0.JPG": "b4c905c6e1443e170975d09b11e80b2e",
"assets/assets/images/white_1.jpg": "807130cd23ad288cb95bff48e204b30e",
"assets/assets/images/white_5.JPG": "dccc886e2efa36fd010825810a4acb02",
"assets/assets/images/white_4.JPG": "9ad09cb5120c551ae0601c2bb44ff0aa",
"assets/assets/images/place_info.png": "b98feb15619aaa39c7afab0abdf70004",
"assets/assets/images/white_6.JPG": "ce097f88b62d2649d85c2cf0c9745b9a",
"assets/assets/images/white_7.JPG": "dc552dc132abc790a061619e45bbc30d",
"assets/assets/images/blue_2.JPG": "2765e4270d243d0999a68343299e9852",
"assets/assets/images/blue_3.jpg": "1316593aea4efe595227c07178bc23c0",
"assets/assets/images/blue_1.JPG": "41cebe29c6a2acf03ec47351df3c6278",
"assets/assets/images/blue_0.JPG": "acb7fa9d60034f4ad4aee07fc946b311",
"assets/assets/images/place_info_2.png": "064f95658ff7f82c75d9fe66de7c11da",
"assets/assets/images/blue_4.JPG": "f93549ab1c2227be2c68e2844efdcc58",
"assets/assets/images/invitation.png": "68ed18cf0f7bfa0147768fcacce657ac",
"assets/assets/images/blue_5.JPG": "db0742b24c1ff355113592e5b8ac9558",
"assets/assets/images/place_info_3.png": "ef8fdbc3424839f9bf3f285f5b8c86c2",
"assets/assets/images/blue_6.jpg": "e12f931de7563a7a1bca3f250874c33a",
"assets/assets/fonts/GowunBatang-Bold.ttf": "04977f1734ccba2e1525b50660f96458",
"assets/assets/fonts/GowunBatang-Regular.ttf": "9c229195073bb2e4de42ff8a541e6eee",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
