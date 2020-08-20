'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/COMMIT_EDITMSG": "38d6dfa7af49f368c5e259bb64c83a7c",
".git/config": "f0897e0ce3cfa3d3f383ae0410097f1b",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/refs/remotes/origin/master": "e3e6763ab3941bf337511c8bf1f9f384",
".git/refs/heads/master": "e3e6763ab3941bf337511c8bf1f9f384",
".git/objects/17/be92b7301a76c587aec9cfc2e7a87821b6f3cf": "5e6eec9506a95c87cdbaf2b99813d8bc",
".git/objects/90/34efb853ef2e651c9b129749bd40cd35d297af": "458c1316a0e2d45ba078c7593eba971e",
".git/objects/e2/c69c3fb94651237de80e67a69d458c55b45649": "6673680e554c4a54919594421f2b934b",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/ef/41602b70c2f3ebb3431865221d3e13e53229a6": "518cb291fbc3b2b8f850a73c2275c99d",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/0f/fdce26a73686b6e6bf625f29afe782a7b7740a": "9dbe2bfdfdedf9516b0f94c843ab74cf",
".git/objects/b8/b9f41edefaa22194d22555d402dd61d93bf6a4": "cc172be1e1fe1efdf5fe9d4d97c6a2ae",
".git/objects/05/b7cc22dbba31c5ca64ee368558614f420f896f": "c3a475901b5902c1863b1e0e70beb89d",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/c4/af3a082a902e749c637a3e3fe3fb4404e952e5": "d74d01747d5e7cfc1ec04a35a2d14576",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/6a/00dcae932dadf0b7fdb691195e3d9ba86f217b": "b7084cc4cbfac98fb9054dbee1c9c5c2",
".git/objects/47/b3c5f76a8af32f6072498923bb5ba2a2f9267d": "c4c40dcd14fca7478c5bd15c4e14c568",
".git/objects/c8/a637206fe9d637e19a39f29e771255219e1e5c": "ade15870a143b22f6c9c7cd43b9ba9c4",
".git/objects/1a/a98304e59ade84a3ea585ce80918f4f2fcd1fc": "8e1a81deb89a0251cec7fc6cc3af5ce4",
".git/objects/9f/7b907864b89cb4d5724e541c59a2c419dd34cf": "9a8dc995fabbb2c41b28dfe37d358f8b",
".git/objects/67/46152235458f0c4d254e9c1bd7c0c864a215fd": "56eee4afe9a06264be8f8bd2e2651b8e",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/d0/a89ff8ba1f31798716689bcd45782f355bcf80": "2bf862c4291fb632550b5b6bb5c0af0e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/a3/0d5c661cb1f31a89b6f738e9c52ccf35b82331": "504a83dab3d66da606193483339981d7",
".git/objects/65/734597efd133012e3d61b6b5c0976b35749ebc": "197b25a5b7df75e55080408ee40b8e04",
".git/objects/dc/f6978eddc94434f1c3552681228337a4b98988": "68d3c3fc48d4fa3983d1ccf51973d479",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/4a/aa5ac54b81c0a50594b5985c988e286411eda3": "820d0841f590011d6513e94db95ef6b0",
".git/objects/f8/867caace77278253b4f4ca5d7d6d16c29f140f": "a8a43b3399b3b6e47c3b3d1904a1b4cf",
".git/objects/46/4317edb241efabe09bb28f5e85d7bedaa7cad0": "f31649cb055b4a9905f6cf246d5455d2",
".git/objects/92/b26eb39fc0a95b026151f030776187f46d444a": "0081d831eeaeb07f356612753f5d028f",
".git/objects/4d/ef307f004285da4392dcf9e4cb7fd60a6366bd": "91ad9226c99a0e6c73765a476d751597",
".git/objects/b4/6a21eda0c1e29637ae40029bbe30636b1e1a2b": "dd28496960b7ce0db1ef7465c58a83cb",
".git/index": "b27b90bd301d96b973cc368e529ac0bf",
".git/logs/refs/remotes/origin/master": "c5e5f4c3e343b234fbe0c422f4202f80",
".git/logs/refs/heads/master": "a772ffd902391f9bcb169e840fc174c3",
".git/logs/HEAD": "a772ffd902391f9bcb169e840fc174c3",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
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
"assets/AssetManifest.json": "b403332a93ff85a6dc1c8aa0b66fb010",
"manifest.json": "a83bbbd9d23ea4d752fbcd44cdc544fa",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"index.html": "6b848d47eeb04d776f3c88144699f750",
"/": "6b848d47eeb04d776f3c88144699f750",
"main.dart.js": "5a1d0ba95b18af6e6071e0436729fc30",
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
