'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "c81f23d0e4ae7cc786f99a62ceaae30d",
"assets/assets/download.png": "bdfa135ba87e64b194368371f8de0358",
"assets/assets/drawer.svg": "3c27ba7a0f5ae320a56f35a3989e135e",
"assets/assets/flutter_logo.png": "b9e5f3d01bc4981b8136c16bd789987e",
"assets/assets/icons/add_plus_icon.png": "46078e76517f5c45406f53baae2ce9f3",
"assets/assets/icons/add_video.png": "cb4539ba73882561a2ceedd236dff7bb",
"assets/assets/icons/camera_icon.jpg": "2f97aa94c25003d6d5a09c23e4d485f9",
"assets/assets/icons/camera_icon.png": "687c85e8d29e8ff7547ad6364bcfa4db",
"assets/assets/icons/camera_icon1.png": "efed96ee437fa2496bcf6a47d6ee5f36",
"assets/assets/icons/camera_icon2.png": "4d3162ea4ff630a878810d7e8686a8a6",
"assets/assets/icons/celebrate_icon.png": "3769c47bad20478976311e676f291abf",
"assets/assets/icons/comment_icon.png": "8b8d3d99984d6decdb97d42300a82a9a",
"assets/assets/icons/curious.png": "602b6e70efaa45ccf016e500a4b55443",
"assets/assets/icons/document_icon.png": "f2cb85aac1fed48679741879aa308505",
"assets/assets/icons/dot_icon.png": "8c07290aee9398985b778e0ad9997e8a",
"assets/assets/icons/E-Learning.jpg": "d6fa4fa475cfc6f4883d5bec8cfde52c",
"assets/assets/icons/edit_icon.jpg": "3f0c290a7ff94e0863600cec8272f117",
"assets/assets/icons/flutter_logo.jpeg": "1c2ae7519d551f5ef76178d305eaf8e9",
"assets/assets/icons/home_icon.png": "ab6308c2a78696ab84f8b6cc2abaa8ce",
"assets/assets/icons/home_icon01.png": "ad3107deaf8a9f887e8dd87bc150e586",
"assets/assets/icons/home_icon11.png": "42e3234f6c555368620989d964c04078",
"assets/assets/icons/home_icon_1.png": "603db07d8fee4b407d5eee84cbfebc58",
"assets/assets/icons/home_icon_seleted.png": "acafdb4ac1306eea8ca5473fa021394e",
"assets/assets/icons/insightful_icon.png": "34ce6c99d86f17d948fa7a1b7515002d",
"assets/assets/icons/job_icon.png": "e7fb9ca8b056d912e1fafde61c4bfb8e",
"assets/assets/icons/job_icon11.png": "96d664f2b2209601ceda561e00053273",
"assets/assets/icons/job_icon_selected.png": "59ae8a637831bdfca3cf5d8c8884ca83",
"assets/assets/icons/like_icon.png": "7d2f7ba37cc5a257eb215a04b97222f8",
"assets/assets/icons/like_icon_white.png": "cf2169fcf63c0f56612443b7a88fdf34",
"assets/assets/icons/linkedInLoog.png": "4de7c35d032d58a6bb875d23b7d1a33e",
"assets/assets/icons/logo_1.png": "c62856d28763b20abc0df669fbb60298",
"assets/assets/icons/love_icon.png": "92e3376950a148ce1cea09f59f1ffea8",
"assets/assets/icons/message_icon.png": "9438fa4555aec0b8109ca032af4d3f21",
"assets/assets/icons/message_icon_1.png": "7d876d48f7f13dce587dd716249a74a2",
"assets/assets/icons/message_icon_selected.png": "4ab90507f6834004743c7e0b4400ef79",
"assets/assets/icons/my_network11.png": "9e91ec9023b76c55f4eeeee43f1dae56",
"assets/assets/icons/my_network_icon.png": "6df684cc62b7517f57dc73b0c5497651",
"assets/assets/icons/network_icon_selected.png": "e494fc55577f060b8b216ba89f22bde0",
"assets/assets/icons/notificationi_icon_selected.png": "73c882e4fa6c9642af55bfe667ea2acf",
"assets/assets/icons/notification_icon.png": "216c6b4c974b55db93fb7c6dc250ec23",
"assets/assets/icons/notification_icon11.png": "40bda41b22c0ad1cebb613d2cd2eaef3",
"assets/assets/icons/plus_add11.png": "08fedf13b4ae9f48b91f1e0aae4a02e4",
"assets/assets/icons/plus_circle.png": "dbb539363f5ce8fd937207351a477a6c",
"assets/assets/icons/qr_logo.png": "ce30b471778e052a38b0db6e17961355",
"assets/assets/icons/school.png": "b2b48480a1eedea9a984c9399864c35c",
"assets/assets/icons/school_hov.png": "f1e222dd794ac7a2abbd1fd869cebab7",
"assets/assets/icons/sent_icon.png": "901a8d8e6c00966a843ca4fa65a0f909",
"assets/assets/icons/share.jpg": "57532912dd607a669fa55a3e685c06bc",
"assets/assets/icons/share.png": "e57f8ba919acf5d16f4beea8be0d7624",
"assets/assets/icons/share_icon.png": "9b8ad79b6621df6c93519af1fc853907",
"assets/assets/icons/upwork.png": "6b75dfd787f66460131c373f618c1e5d",
"assets/assets/icons/wirte_article_icon.png": "f1ca5c94bcc5fcf4df8cf8dcc018abce",
"assets/assets/images/business.png": "4649e3f2bb71efa35e833547d2557ab5",
"assets/assets/images/marketing.png": "4d0f2115a0998fd83ac7b4ed692718c6",
"assets/assets/images/music.png": "07f73c3d94f9d868c5365c6cab4ca3c0",
"assets/assets/images/photography.png": "dbcb4dae76073c244813176cd72ad0eb",
"assets/assets/images/profilePic.png": "b2448432f9bacea7e284cc98e67f5353",
"assets/assets/images/user.png": "a92e7d213a1b9c3a8472d26076605cf6",
"assets/assets/images/ux_big.png": "219d9181c8aa4216eb0cc3bedffabaf9",
"assets/assets/images/ux_design.png": "e0a228fc131bdf5209e102caf4dca263",
"assets/assets/loading.gif": "209c657f44203f836798a66eb0c473ec",
"assets/assets/mb4.jpg": "419aaaf5f01d4d185aa19e7f1eecefe9",
"assets/assets/nike-Logo.png": "3cb106f487b2a9f9e0e73d3ffa80bbce",
"assets/assets/postImage4.jpeg": "f85b925e16fb862d721d19a41108698d",
"assets/assets/profile_bg.png": "d590013f6456997274eb78e5e80fc09d",
"assets/assets/soundcloud-icon.png": "f64a419d62d5d0b23abea68cb14b5d9c",
"assets/assets/uber-logo-redesign_1x.png": "cd65e076f42b9f9fcdc09a427ab3f3f6",
"assets/assets/user.svg": "73a97be0ea5b516eb6ac37702a1ca946",
"assets/assets/youtube-black-icon-youtube-icon-youtube-logo-youtube-png-and-black-youtube-logo-640_640.png": "ad4efbb0d908b87fe1b81c4bbc9f6457",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "0c74e7eeb1417a837807fd11128e6264",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00bb2b684be61e89d1bc7d75dee30b58",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b6a9b7c20913279a3ad3dd9c96e155b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dffd9504fcb1894620fa41c700172994",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "a5599a5265fec84f870c44066a7215bb",
"/": "a5599a5265fec84f870c44066a7215bb",
"main.dart.js": "4438db9ad4f0768885ea76e0ec8fbf4d",
"manifest.json": "96c5ce08453892bf1c479d75624813cd",
"version.json": "ac4602cd124d76a76660edfe862b4159"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
