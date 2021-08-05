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
    "revision": "375b9d21ac9f84cc7b8eb94f316d14d4"
  },
  {
    "url": "assets/css/0.styles.e60b25d8.css",
    "revision": "fc735e4777c3dbeb4825b4ea924d326a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a2d4c1a1.js",
    "revision": "0b0ea2d5d49172855c4656f6278d748f"
  },
  {
    "url": "assets/js/11.4e199d04.js",
    "revision": "cf152de1c4682e73ca54abcd95bed3a2"
  },
  {
    "url": "assets/js/12.af9e9753.js",
    "revision": "44520415a0894bc8aca4eea7d8ee689d"
  },
  {
    "url": "assets/js/13.2bb8ea25.js",
    "revision": "5f87a0d3af0b3fa32138203d9e67b43d"
  },
  {
    "url": "assets/js/14.258dd0a6.js",
    "revision": "9bda069c60599edfa3e902e06ed5c0e9"
  },
  {
    "url": "assets/js/15.ea3d27a5.js",
    "revision": "7ef59dc5de965199cd31446b08786829"
  },
  {
    "url": "assets/js/16.e009ba4d.js",
    "revision": "f0aebca32a13fd8d6801f49c7790b68b"
  },
  {
    "url": "assets/js/17.a07415ea.js",
    "revision": "66502f7f9bd529bfd5abc95dfc870fe6"
  },
  {
    "url": "assets/js/18.8dd78bf7.js",
    "revision": "367bb67d2d5c3fd10272d2844d8f3db7"
  },
  {
    "url": "assets/js/19.95dd6708.js",
    "revision": "1a688a68051b1011e72d5b477aa0d6a6"
  },
  {
    "url": "assets/js/2.132bf881.js",
    "revision": "5e392ea44bf5ea0cf42eec449494fda2"
  },
  {
    "url": "assets/js/20.150bb104.js",
    "revision": "e527db6880b9e777a472df92223d6685"
  },
  {
    "url": "assets/js/21.5d7dbb17.js",
    "revision": "31280ab424b3854595cc1c19948c080a"
  },
  {
    "url": "assets/js/22.efb69c4c.js",
    "revision": "65e5b23484956d919d74203fd6746b09"
  },
  {
    "url": "assets/js/23.39f491ae.js",
    "revision": "c4fe82390b87cb62d344abe3bf76de69"
  },
  {
    "url": "assets/js/24.dcfe9fe3.js",
    "revision": "f25883ff5d6d61b5516a5e3c1ab05224"
  },
  {
    "url": "assets/js/25.981000dd.js",
    "revision": "fafb539642d51efefaee88b92624ff55"
  },
  {
    "url": "assets/js/26.617cd5bc.js",
    "revision": "0142c3de1d9a76729e95be3c1f461cd0"
  },
  {
    "url": "assets/js/27.56920f0b.js",
    "revision": "89efce72c666a1dcbdd492d6b20c020f"
  },
  {
    "url": "assets/js/28.befb5044.js",
    "revision": "8193f7bbb68459ecd59f23ee67f0964f"
  },
  {
    "url": "assets/js/29.4969b6f4.js",
    "revision": "8a0a141ce56b1b697e02a0b2e2d56577"
  },
  {
    "url": "assets/js/3.b51f37ca.js",
    "revision": "6bd66d92e7cd79c8264610e48892dd69"
  },
  {
    "url": "assets/js/30.2cbbf15a.js",
    "revision": "a39812347d9c0292245b9bf43c13e31a"
  },
  {
    "url": "assets/js/31.a83cd578.js",
    "revision": "852f5db955151a40fd72f2659bd2a200"
  },
  {
    "url": "assets/js/32.8b71a959.js",
    "revision": "3109d1b873713d98473fff6c6175cf9b"
  },
  {
    "url": "assets/js/33.92ad7b6b.js",
    "revision": "98738cb8406bab810ae1b33c9e9c27cc"
  },
  {
    "url": "assets/js/34.d9e00f84.js",
    "revision": "4c8c7b242037de2243562f42c8bf9479"
  },
  {
    "url": "assets/js/35.62954c75.js",
    "revision": "679e9b44fc0bc5fce6b39877ddf8b386"
  },
  {
    "url": "assets/js/36.2b9e1a54.js",
    "revision": "2904a0d2cc67e460b61ba640ce7a3c03"
  },
  {
    "url": "assets/js/37.48d14464.js",
    "revision": "c91ff88d2b8cefd3f917a07375143269"
  },
  {
    "url": "assets/js/38.76a6d476.js",
    "revision": "ff33518005e49859e9d97fc6971d7c37"
  },
  {
    "url": "assets/js/39.dd707582.js",
    "revision": "4dc8ae79e9e14df4fc9c7fd4aaabb51e"
  },
  {
    "url": "assets/js/4.9f518c74.js",
    "revision": "fb9d35ccdf7a5f6b848009193de82e4f"
  },
  {
    "url": "assets/js/40.48cf2ad6.js",
    "revision": "d1fb77d4e73e15576c8e737415890cde"
  },
  {
    "url": "assets/js/41.1ceb0510.js",
    "revision": "884cebea227f709dc3daea81bf15d6b8"
  },
  {
    "url": "assets/js/42.bda6d241.js",
    "revision": "94650cae0d0f32e3825092395294527e"
  },
  {
    "url": "assets/js/43.77429c8d.js",
    "revision": "9395ca71a304427361dc73354e562594"
  },
  {
    "url": "assets/js/44.de798060.js",
    "revision": "3e2a17a2f6d516bde1115d22ab342609"
  },
  {
    "url": "assets/js/45.fee49181.js",
    "revision": "9463e818daca338c0387aaa0490f3132"
  },
  {
    "url": "assets/js/46.9ccb3e35.js",
    "revision": "cf83e23b4db151814fb8fd0a4acadc66"
  },
  {
    "url": "assets/js/47.814af934.js",
    "revision": "f9eea17e67d764c4c20bce8f9036ceed"
  },
  {
    "url": "assets/js/48.3f5acca7.js",
    "revision": "874fa47257d5e3b43e14ccd9c6914977"
  },
  {
    "url": "assets/js/49.b2238c55.js",
    "revision": "6f6c4b6804f8b6b020fab57cfe259707"
  },
  {
    "url": "assets/js/5.8369cf44.js",
    "revision": "74b12689396a2a28d6d9b60090513904"
  },
  {
    "url": "assets/js/50.7e14e22c.js",
    "revision": "5620a1cfe8f3722c4c9d8a9a3a682d56"
  },
  {
    "url": "assets/js/51.b951e531.js",
    "revision": "b081375d0ff861c1cbd4b4d81c4fbab3"
  },
  {
    "url": "assets/js/52.82750939.js",
    "revision": "f935aab668ca6164319011c31f5614d5"
  },
  {
    "url": "assets/js/53.78a7ad63.js",
    "revision": "f1e15d7396b2e540e234cfb8d12596dc"
  },
  {
    "url": "assets/js/54.dfa28673.js",
    "revision": "b3a1320ee471478362621420b82a840a"
  },
  {
    "url": "assets/js/55.10e3b8ba.js",
    "revision": "94d06b9ade963c0de1dd12849c9eb3df"
  },
  {
    "url": "assets/js/56.f9532bd1.js",
    "revision": "77ba095d3c319f6dcd17e01ae0f94b8a"
  },
  {
    "url": "assets/js/57.d6769e64.js",
    "revision": "1e598c4ec4f0661a1e78dc9dec07d3a6"
  },
  {
    "url": "assets/js/58.3ef27942.js",
    "revision": "fbaa70abfa21a9e09cf77c3a0b63c1cd"
  },
  {
    "url": "assets/js/59.4dbc8001.js",
    "revision": "467568adfff1bc4059e94e7e60722860"
  },
  {
    "url": "assets/js/6.67fb8021.js",
    "revision": "77a5f062e04c15cb0a745ea1d679b0a9"
  },
  {
    "url": "assets/js/60.65bd3624.js",
    "revision": "30dc040ff935b39218c1ee290abbfff1"
  },
  {
    "url": "assets/js/61.e77ed095.js",
    "revision": "fafac625b4edf68b9b336ed965be2bb1"
  },
  {
    "url": "assets/js/62.ba4dc878.js",
    "revision": "918dffa9579c65196c0ddbc63d773181"
  },
  {
    "url": "assets/js/63.683212a2.js",
    "revision": "989c7c755e4ad05a0dcfd240873990fa"
  },
  {
    "url": "assets/js/64.71e44fb5.js",
    "revision": "e777131df8a9e647e48032c99f79461a"
  },
  {
    "url": "assets/js/65.9ffbfa85.js",
    "revision": "9eef768226d603cbddce8fdc8a073e3e"
  },
  {
    "url": "assets/js/66.5afc912f.js",
    "revision": "342c4fac304d57704b9a642775ee3658"
  },
  {
    "url": "assets/js/67.3d83e17c.js",
    "revision": "26f4937b6a40900f80fe9cd37a0ea270"
  },
  {
    "url": "assets/js/68.ff91c12c.js",
    "revision": "18748a1b655ecbd414a26579777500c2"
  },
  {
    "url": "assets/js/69.42cdb20b.js",
    "revision": "f3b407e884be33a963ca9633baddd365"
  },
  {
    "url": "assets/js/7.90f4ae40.js",
    "revision": "ab15a6f1edb31cdaac3879d2002f7c36"
  },
  {
    "url": "assets/js/70.593f7c1b.js",
    "revision": "7d879911e3417f2cd24237dba7907195"
  },
  {
    "url": "assets/js/8.c559eeab.js",
    "revision": "97f181755c94ba776f0eaca7c715da3d"
  },
  {
    "url": "assets/js/9.3f8c1dcf.js",
    "revision": "d6308ec20cd39c138e9b603f18594b87"
  },
  {
    "url": "assets/js/app.bd9e66c9.js",
    "revision": "57377148233366f266453a206d093dda"
  },
  {
    "url": "images/logo.png",
    "revision": "a7ce492a1928707e2a1ad8ccb4e4d15d"
  },
  {
    "url": "index.html",
    "revision": "57959b1864a8f6b7dc6f8994a62d4e9b"
  },
  {
    "url": "pages/algorithm/index.html",
    "revision": "3eaa4d7a9e2303a99e95407cb6aecd5a"
  },
  {
    "url": "pages/algorithm/排序算法.html",
    "revision": "00532df843a4f877f5dc761fd0d05192"
  },
  {
    "url": "pages/knowledgeBase/browser/index.html",
    "revision": "6f24edc0d96835c54d5b6ec4b57aa414"
  },
  {
    "url": "pages/knowledgeBase/code/1.html",
    "revision": "485d87e9f63be30619ab48ffd4c88723"
  },
  {
    "url": "pages/knowledgeBase/code/2.html",
    "revision": "4f7a0537ab0293dfe056e50edfefa3e3"
  },
  {
    "url": "pages/knowledgeBase/code/3.html",
    "revision": "108301c4035063327ae3805b1e5f73b0"
  },
  {
    "url": "pages/knowledgeBase/css/index.html",
    "revision": "e22c4aff204d4e10ae54cf474c61e64d"
  },
  {
    "url": "pages/knowledgeBase/dataVisualization/1.html",
    "revision": "4dc98ec56b55c9c3324075aecfb300c2"
  },
  {
    "url": "pages/knowledgeBase/designMode/1.html",
    "revision": "c57b10dc0f3f231bead2e030c0b02807"
  },
  {
    "url": "pages/knowledgeBase/docker/1.html",
    "revision": "d7bb322b44a8d1be4974b14108b15982"
  },
  {
    "url": "pages/knowledgeBase/engineering/1.html",
    "revision": "4063a0cdd261dc5af91fa00552c55ad7"
  },
  {
    "url": "pages/knowledgeBase/flutter/1.html",
    "revision": "fe3f15ea45d77a92f8bd80fde3a815a8"
  },
  {
    "url": "pages/knowledgeBase/html/index.html",
    "revision": "857e56e098b74de2dc2240e91b5bc659"
  },
  {
    "url": "pages/knowledgeBase/index.html",
    "revision": "6bfe010cdf80e58234371b81d544bb72"
  },
  {
    "url": "pages/knowledgeBase/js/1.html",
    "revision": "74b7d8c5349a4863f072ad6ca7eb7374"
  },
  {
    "url": "pages/knowledgeBase/js/2.html",
    "revision": "d62558a437082521368ca769fabc0f99"
  },
  {
    "url": "pages/knowledgeBase/js/3.html",
    "revision": "fad32f1fb24193a0ff14a39b16f42514"
  },
  {
    "url": "pages/knowledgeBase/js/4.html",
    "revision": "ae6696366008dabaed230cd3089bd5ae"
  },
  {
    "url": "pages/knowledgeBase/js/5.html",
    "revision": "1f589240435382e1db614892f45088b7"
  },
  {
    "url": "pages/knowledgeBase/miniProgram/1.html",
    "revision": "2f556bf991d9ec8aa035ee7a07c97f4c"
  },
  {
    "url": "pages/knowledgeBase/network/index.html",
    "revision": "4cde8f35dfc27488048bf80347e5c58f"
  },
  {
    "url": "pages/knowledgeBase/nginx/1.html",
    "revision": "8419d7f28f8edbef6e2c094f9904eb5b"
  },
  {
    "url": "pages/knowledgeBase/node/1.html",
    "revision": "73c888a174a8315f1043deccea341102"
  },
  {
    "url": "pages/knowledgeBase/optimization/1.html",
    "revision": "2446d944e8fec68ad0803e259420b0f0"
  },
  {
    "url": "pages/knowledgeBase/optimization/2.html",
    "revision": "d7f849c704f6a44caed6fe6bf3fcabc8"
  },
  {
    "url": "pages/knowledgeBase/optimization/3.html",
    "revision": "0ceb415ee9c7a264547dbd6f09a5c9a2"
  },
  {
    "url": "pages/knowledgeBase/react/1.html",
    "revision": "348dec55f0c97965e3b632827fb5769b"
  },
  {
    "url": "pages/knowledgeBase/react/2.html",
    "revision": "c50468150158a02aed6ac790800b3961"
  },
  {
    "url": "pages/knowledgeBase/react/3.html",
    "revision": "eaa9cf39518377796c60166c3d3a3c0f"
  },
  {
    "url": "pages/knowledgeBase/react/4.html",
    "revision": "676b5e4492cbb267591dae9457968e81"
  },
  {
    "url": "pages/knowledgeBase/react/5.html",
    "revision": "2c3f57db136f1dd50305decb32cc0e79"
  },
  {
    "url": "pages/knowledgeBase/react/6.html",
    "revision": "01e89f5ccceaa72318e50e3cb199ff44"
  },
  {
    "url": "pages/knowledgeBase/react/7.html",
    "revision": "33def1b6109f17646bb6ee2e5a8f49aa"
  },
  {
    "url": "pages/knowledgeBase/react/8.html",
    "revision": "53c31c37c312d16a2115db730abe9158"
  },
  {
    "url": "pages/knowledgeBase/react/9.html",
    "revision": "4672b1378ccd5997aaf7cb2c58a4f2d0"
  },
  {
    "url": "pages/knowledgeBase/regularExpression/1.html",
    "revision": "e1f49760b2b604d14c351197eb3ad7c4"
  },
  {
    "url": "pages/knowledgeBase/rollup/1.html",
    "revision": "628685ba50eac1e9993ddeab5a20a718"
  },
  {
    "url": "pages/knowledgeBase/security/1.html",
    "revision": "52fe53b9053f52a85b80c97dbe9ddd6f"
  },
  {
    "url": "pages/knowledgeBase/sentry/index.html",
    "revision": "1acc02e4f20550704d9621c20671b94e"
  },
  {
    "url": "pages/knowledgeBase/typeScript/index.html",
    "revision": "cd59d82e7cd73d7ccf8fe4c4788995ce"
  },
  {
    "url": "pages/knowledgeBase/vue/1.html",
    "revision": "4253e60e138efc4ef386f90e69d69496"
  },
  {
    "url": "pages/knowledgeBase/vue/2.html",
    "revision": "cfa93f9233af0a371193a4ab9319b0a1"
  },
  {
    "url": "pages/knowledgeBase/vue/3.html",
    "revision": "a6440f409ca66aaf486933e8878a2be3"
  },
  {
    "url": "pages/knowledgeBase/vue/4.html",
    "revision": "3edde26ce4831e77e9b4e5e90dbb13c1"
  },
  {
    "url": "pages/knowledgeBase/vue/5.html",
    "revision": "662181f54b25d90c977c1d0d61cd7f5f"
  },
  {
    "url": "pages/knowledgeBase/vue/6.html",
    "revision": "3910f396e1eebe2a6405f8382dfe244f"
  },
  {
    "url": "pages/knowledgeBase/vue/7.html",
    "revision": "6787a7658a78e456a5b82dd694aeb0bd"
  },
  {
    "url": "pages/knowledgeBase/wechat/1.html",
    "revision": "9b43ed367dc324dbb5e181706a98bc98"
  },
  {
    "url": "pages/knowledgeBase/微前端/1.html",
    "revision": "a157251cd965627408f49070f47226af"
  },
  {
    "url": "pages/knowledgeBase/微前端/2.html",
    "revision": "c34d6af7ecd84c5ef91cd427501edf02"
  },
  {
    "url": "pages/knowledgeBase/微前端/3.html",
    "revision": "f7f9eb6a9a8c7970829c4f834e34d080"
  },
  {
    "url": "pages/knowledgeBase/数据结构/1.html",
    "revision": "3369a20166c25ce1bf675826bd205802"
  },
  {
    "url": "pages/question/css/1.html",
    "revision": "21c51dd7653a31f822b37f834807efbe"
  },
  {
    "url": "pages/question/css/2.html",
    "revision": "c32da80b4e88bcf012a3858d2c099df5"
  },
  {
    "url": "pages/question/index.html",
    "revision": "fe80fe68f12749556988786d661e4b5a"
  },
  {
    "url": "pages/question/js/1.html",
    "revision": "7274146b82246dfc9488b6e8a4676c86"
  },
  {
    "url": "pages/question/js/2.html",
    "revision": "34cfd441fa5248aa2a91fc9b45bf85a0"
  },
  {
    "url": "pages/question/js/3.html",
    "revision": "43a8732b361550e61f1fabcf7b97f9ff"
  },
  {
    "url": "pages/summary/folder1/1.html",
    "revision": "4e0799f24513a2904e4f11c98d8aff42"
  },
  {
    "url": "pages/summary/folder1/2.html",
    "revision": "b3ae45400e48c2347ca07f38a5f661a9"
  },
  {
    "url": "pages/summary/folder2/3.html",
    "revision": "db6f8e5b99acb776710db2d29971e7b8"
  },
  {
    "url": "pages/summary/index.html",
    "revision": "80eae8b01724c10b0b7613c539057e2c"
  },
  {
    "url": "WX20210805-010950@2x.png",
    "revision": "bdaa3333226e91a3a8f5e8d1c6071b08"
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
