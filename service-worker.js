/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "e3a1a13651d50576f7f82299a892fd9e"
  },
  {
    "url": "assets/css/0.styles.63322341.css",
    "revision": "951094500a20c3a703ad91c7c0bc2acb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e04a2a27.js",
    "revision": "7bb1a7ca92159e8fbc83fb06f1295eef"
  },
  {
    "url": "assets/js/11.6cedf2b5.js",
    "revision": "f1efdd8f442f66751ad3e5d27c2a588e"
  },
  {
    "url": "assets/js/12.d4623599.js",
    "revision": "443f96585918b29aec2db67c55b1c03b"
  },
  {
    "url": "assets/js/13.a8ca7f26.js",
    "revision": "dd1f5ebf1640c3538a8df10e8e81bb29"
  },
  {
    "url": "assets/js/14.18cd6b2d.js",
    "revision": "a26fc69a9524dadae8e217085e46fcb1"
  },
  {
    "url": "assets/js/15.7ddabf64.js",
    "revision": "77492ee04b5a5f7f45901920696aebe3"
  },
  {
    "url": "assets/js/16.f9960c53.js",
    "revision": "da47121452aec739658f23e9dedbca72"
  },
  {
    "url": "assets/js/17.8ac2c17c.js",
    "revision": "808ff885426ebe4c9ce548990d75cc22"
  },
  {
    "url": "assets/js/18.4f2ccf6a.js",
    "revision": "59531e8f6285079567419071600bc7a7"
  },
  {
    "url": "assets/js/19.28f71a6e.js",
    "revision": "9f68816bdb581a614c2765b59f093998"
  },
  {
    "url": "assets/js/2.132bf881.js",
    "revision": "5e392ea44bf5ea0cf42eec449494fda2"
  },
  {
    "url": "assets/js/20.b6d246ce.js",
    "revision": "307326164b4f61382c9eb6e0839e1d2f"
  },
  {
    "url": "assets/js/21.617412c1.js",
    "revision": "b0ace6d578f4b9c90e7f8f8c2774f174"
  },
  {
    "url": "assets/js/22.80774142.js",
    "revision": "26073d61d385d547fb5f5358754f46fe"
  },
  {
    "url": "assets/js/23.1081d221.js",
    "revision": "fdee6bbd5af73977c875e6e6d7ad9bb0"
  },
  {
    "url": "assets/js/24.25a9c79b.js",
    "revision": "2c33ea94bda4b1d4041bf92bb12747d6"
  },
  {
    "url": "assets/js/25.f64e893b.js",
    "revision": "7e00c7d1c5e766d6a4b71ec23b322e45"
  },
  {
    "url": "assets/js/26.b88f82b2.js",
    "revision": "7ea3924c032e60f6e19353cb208c004c"
  },
  {
    "url": "assets/js/27.9fb3adb4.js",
    "revision": "99afd5a3c5587445dc955236a7548add"
  },
  {
    "url": "assets/js/28.a07337c4.js",
    "revision": "5ff1d82be6b943870e65c78a2b84731c"
  },
  {
    "url": "assets/js/29.e29afbbd.js",
    "revision": "69709abe4c2b4629001a82efe9b53c01"
  },
  {
    "url": "assets/js/3.67a45af5.js",
    "revision": "284eb4e9e98ee0e0193a56e0802f0451"
  },
  {
    "url": "assets/js/30.986c4eaa.js",
    "revision": "4166e0c096d404f7f9821569e9b8d904"
  },
  {
    "url": "assets/js/31.c6f1d0c8.js",
    "revision": "f0e1e5620462ed676e05738bd90f9b09"
  },
  {
    "url": "assets/js/32.0d19a04c.js",
    "revision": "d759e5768acad2ea716160414ab18661"
  },
  {
    "url": "assets/js/33.25e9d3da.js",
    "revision": "e08172a882598bc526d8172a24466659"
  },
  {
    "url": "assets/js/34.f7315633.js",
    "revision": "61e60d3b7a23d42ce075f5562299a1d0"
  },
  {
    "url": "assets/js/35.33b035c7.js",
    "revision": "11eed6bb953b54a6522889f91db1c624"
  },
  {
    "url": "assets/js/36.f75e93c3.js",
    "revision": "1b020fd0afac5cc79dd8e00b556db3be"
  },
  {
    "url": "assets/js/37.08ceaee9.js",
    "revision": "8c238453f97e97a07aea1cfdf559bb56"
  },
  {
    "url": "assets/js/38.3f144543.js",
    "revision": "22325e1757a0d59d5ff655258408c3df"
  },
  {
    "url": "assets/js/39.46b205fa.js",
    "revision": "bd6978e29de983d4914f0127412bdecd"
  },
  {
    "url": "assets/js/4.985a7118.js",
    "revision": "7a27a6dea6443f8c540bbfb880c5bb75"
  },
  {
    "url": "assets/js/40.acc48c98.js",
    "revision": "7b7c41a6b77fd02220fb48fa06c782e9"
  },
  {
    "url": "assets/js/41.c8e1435b.js",
    "revision": "85c527595bca6abfcf3e24054f8a6448"
  },
  {
    "url": "assets/js/42.8b46388d.js",
    "revision": "15468464e46edbcd94c6f083fbdaa95a"
  },
  {
    "url": "assets/js/43.b137cee0.js",
    "revision": "bf439c4dc66fc9e4dedf4799253b4867"
  },
  {
    "url": "assets/js/44.ac9be860.js",
    "revision": "606ec99f2b552518d777518b8cebcf55"
  },
  {
    "url": "assets/js/45.9811a404.js",
    "revision": "66ad11adda55e960616738bd0858d02d"
  },
  {
    "url": "assets/js/46.528b24bb.js",
    "revision": "b637b2fd7fc4afe33c936b0704f28c48"
  },
  {
    "url": "assets/js/47.bedd3f17.js",
    "revision": "29dc97cbd690113a8e55f9e6077bb5d4"
  },
  {
    "url": "assets/js/48.e2a21797.js",
    "revision": "8e82a4bd58b2026365108369ae014ed2"
  },
  {
    "url": "assets/js/49.6f6d0dd6.js",
    "revision": "fc66cfe89e57a79b9312efd19a9e1428"
  },
  {
    "url": "assets/js/5.49a2ce40.js",
    "revision": "c13f3e3be84da4a6660f6156b743ede2"
  },
  {
    "url": "assets/js/50.e927e5aa.js",
    "revision": "fdeb520681cde9fb3e24743cc3188fa7"
  },
  {
    "url": "assets/js/51.e5c33afa.js",
    "revision": "c685b14061acb2ea2a8d66a8af471dfa"
  },
  {
    "url": "assets/js/52.5285f45a.js",
    "revision": "af363b78117fc71a628c78124ceebd4b"
  },
  {
    "url": "assets/js/53.97a5c116.js",
    "revision": "f9021419825d07bd8fc6d52ceb1c850a"
  },
  {
    "url": "assets/js/54.18951fcb.js",
    "revision": "ab1243e8481fd18e5ce42e3c69501da8"
  },
  {
    "url": "assets/js/55.3efa1da9.js",
    "revision": "76d295db4c4abd2ff2d499b508ca3cd0"
  },
  {
    "url": "assets/js/56.c8aeed04.js",
    "revision": "a5f501a588a38626f3fe64ec919c2342"
  },
  {
    "url": "assets/js/6.67fb8021.js",
    "revision": "77a5f062e04c15cb0a745ea1d679b0a9"
  },
  {
    "url": "assets/js/7.cd8d8194.js",
    "revision": "6321226e1bb83060454b848bcf998a1c"
  },
  {
    "url": "assets/js/8.0c2c994c.js",
    "revision": "db1e5a36f0903f3488135292457bce73"
  },
  {
    "url": "assets/js/9.cf5b4c38.js",
    "revision": "25b70b567bb3b2f9552cc7da92b1af1b"
  },
  {
    "url": "assets/js/app.57caafaf.js",
    "revision": "3eac95d5fb3918f6390b1bdc61b3e30e"
  },
  {
    "url": "index.html",
    "revision": "6a0dda1d8b0b1154b7867103feb08129"
  },
  {
    "url": "logo.png",
    "revision": "a7ce492a1928707e2a1ad8ccb4e4d15d"
  },
  {
    "url": "pages/algorithm/index.html",
    "revision": "c20f243f0620ac4f3e2c8c3df1100ec5"
  },
  {
    "url": "pages/knowledgeBase/browser/index.html",
    "revision": "2f8449936e414aabb362808d87cac1ae"
  },
  {
    "url": "pages/knowledgeBase/code/index.html",
    "revision": "d06eb317ceaf12c952a52d710693a87e"
  },
  {
    "url": "pages/knowledgeBase/css/index.html",
    "revision": "dddaaa4f3c41eacd8f772a34e5fbcccd"
  },
  {
    "url": "pages/knowledgeBase/dataStructure/1.html",
    "revision": "dcd48f37edc2eb482d609c6a1b83df9e"
  },
  {
    "url": "pages/knowledgeBase/dataVisualization/1.html",
    "revision": "fdd54f3f39ea40563f8a8ae72a144d0b"
  },
  {
    "url": "pages/knowledgeBase/designMode/1.html",
    "revision": "9891c70cc8d55947ea3b1543d3c16cae"
  },
  {
    "url": "pages/knowledgeBase/docker/1.html",
    "revision": "d169ab3f55edfff5037aac23527894eb"
  },
  {
    "url": "pages/knowledgeBase/engineering/1.html",
    "revision": "f8d7659fd59a8acb5db0a273976d23c4"
  },
  {
    "url": "pages/knowledgeBase/es6/1.html",
    "revision": "8bfe879ef7d47afa083295bc848c31ef"
  },
  {
    "url": "pages/knowledgeBase/flutter/1.html",
    "revision": "24f647b0673024192ec12023468b7085"
  },
  {
    "url": "pages/knowledgeBase/html/index.html",
    "revision": "409e47041dc5498febf66f3fe12893e6"
  },
  {
    "url": "pages/knowledgeBase/index.html",
    "revision": "ffe6402a7133eae30302299286670104"
  },
  {
    "url": "pages/knowledgeBase/js/1.html",
    "revision": "44e2e963c1252c0218f3bc6ff879db10"
  },
  {
    "url": "pages/knowledgeBase/js/2.html",
    "revision": "367f29cd4d4d866241a18b7c0c55b6b7"
  },
  {
    "url": "pages/knowledgeBase/js/3.html",
    "revision": "a67a8a3f9488d7d9eb840ec612ae56bf"
  },
  {
    "url": "pages/knowledgeBase/js/4.html",
    "revision": "f3ae11864b89d6a57b809254e33e731f"
  },
  {
    "url": "pages/knowledgeBase/miniProgram/1.html",
    "revision": "450a04dbaaa7b3eec66ce5d96689ef5d"
  },
  {
    "url": "pages/knowledgeBase/network/index.html",
    "revision": "f46a3479875be78827b3042dee01ebd9"
  },
  {
    "url": "pages/knowledgeBase/nginx/1.html",
    "revision": "e25387f97bbabd20588f74a24163d115"
  },
  {
    "url": "pages/knowledgeBase/node/1.html",
    "revision": "8cd1999ebea33e35f21fb6e519bdae8f"
  },
  {
    "url": "pages/knowledgeBase/optimization/1.html",
    "revision": "1c9d31736c0de4826ec27244979eefdd"
  },
  {
    "url": "pages/knowledgeBase/qiankun/1.html",
    "revision": "e7ae0bbff99d17a68b9d1afaad084d16"
  },
  {
    "url": "pages/knowledgeBase/qiankun/2.html",
    "revision": "8a0cbb8e48d6ce844c6361cafa2fb4b8"
  },
  {
    "url": "pages/knowledgeBase/react/1.html",
    "revision": "e7acbd84d5f1afccdc2c517bf19c0826"
  },
  {
    "url": "pages/knowledgeBase/react/2.html",
    "revision": "a056491e5cb8314bc49ef74025f7f13b"
  },
  {
    "url": "pages/knowledgeBase/regularExpression/1.html",
    "revision": "c7b4cf66960cbe03af07ff6c92095aef"
  },
  {
    "url": "pages/knowledgeBase/security/1.html",
    "revision": "a7a002dbc9f1fc7fabeb6d4f71b7c7a1"
  },
  {
    "url": "pages/knowledgeBase/sentry/index.html",
    "revision": "ddc9d2dba21d80f6edbbe53f7a0a5ed4"
  },
  {
    "url": "pages/knowledgeBase/ts/1.html",
    "revision": "fcad8e602b6c8d61d43c189b95cbaef2"
  },
  {
    "url": "pages/knowledgeBase/vue/1.html",
    "revision": "97f0b7abc388722d795da359e4096059"
  },
  {
    "url": "pages/knowledgeBase/vue/2.html",
    "revision": "954d0c4b992b44005cb5152f14865cd3"
  },
  {
    "url": "pages/knowledgeBase/vue/3.html",
    "revision": "7b88a82bca9b8d152ce2bfa9c1354c21"
  },
  {
    "url": "pages/knowledgeBase/vue/4.html",
    "revision": "7786f5bc738051b967bc8a3f40422c52"
  },
  {
    "url": "pages/knowledgeBase/vue/5.html",
    "revision": "44c9e9b0164656b36f0c852ec2da8e6d"
  },
  {
    "url": "pages/knowledgeBase/vue/6.html",
    "revision": "0296fc03d9ff47493f56a8b1ecac7b3a"
  },
  {
    "url": "pages/knowledgeBase/vue/7.html",
    "revision": "32e0d11e7c96a3ba7bf5949b1435ecdc"
  },
  {
    "url": "pages/knowledgeBase/wechat/1.html",
    "revision": "d39663939c5b6514d75d742e50242da5"
  },
  {
    "url": "pages/question/css/1.html",
    "revision": "e903d1ad9aa16bf86c4cb85beab98e00"
  },
  {
    "url": "pages/question/css/2.html",
    "revision": "167b6c9a8077cda4ca830d3b07a1fde2"
  },
  {
    "url": "pages/question/index.html",
    "revision": "fc14b075e5b4278d71db9bdb9f5124f6"
  },
  {
    "url": "pages/question/js/1.html",
    "revision": "d5677a6be4e0c943142830956d8ea260"
  },
  {
    "url": "pages/question/js/2.html",
    "revision": "9a089b6b0d54f290a362124f161b675e"
  },
  {
    "url": "pages/question/js/3.html",
    "revision": "73ccbcbf1a2c7f7220b7dda82d936577"
  },
  {
    "url": "pages/summary/folder1/1.html",
    "revision": "03f6c7c1122406eb47f7d35621fa3ed7"
  },
  {
    "url": "pages/summary/folder1/2.html",
    "revision": "5d66ffa46b522ff557ef5341851fb2d8"
  },
  {
    "url": "pages/summary/folder2/3.html",
    "revision": "f3bf57bc371fdd3520e7f4f263df5a0d"
  },
  {
    "url": "pages/summary/index.html",
    "revision": "abe01b8a302e2bd2420aa5c9b3a0fbd5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
