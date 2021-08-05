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
    "revision": "86c1204ce096108743aa80b0c9a3044e"
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
    "url": "assets/js/10.7f833261.js",
    "revision": "15f79c9b9808ba8f2689d0cd4e22bec3"
  },
  {
    "url": "assets/js/11.4e199d04.js",
    "revision": "cf152de1c4682e73ca54abcd95bed3a2"
  },
  {
    "url": "assets/js/12.c9c702ab.js",
    "revision": "b5a4ab13121a31a79761eb0267cd65d6"
  },
  {
    "url": "assets/js/13.8eb65935.js",
    "revision": "f0d8e14aedf879ebf8a8a831e7624946"
  },
  {
    "url": "assets/js/14.3ebbb2e2.js",
    "revision": "3d606737dfd50a4f42e784ca43201fb0"
  },
  {
    "url": "assets/js/15.21153402.js",
    "revision": "a8732fd3b9d18142f06b9df855b6ffd9"
  },
  {
    "url": "assets/js/16.dc3b4907.js",
    "revision": "48b3ecb388a7c97625e9b9cd35944176"
  },
  {
    "url": "assets/js/17.eab535ef.js",
    "revision": "7a9e67ca8076c29a087fd8076f3eeab4"
  },
  {
    "url": "assets/js/18.eb5a54ac.js",
    "revision": "28ebdaf252094d6dbfd246a9f85e18cc"
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
    "url": "assets/js/23.4ba17918.js",
    "revision": "bc6ecb72a0126cdc130750f7e3827537"
  },
  {
    "url": "assets/js/24.2e5d2492.js",
    "revision": "ca2b8d570519093e873c45a6ec838c5b"
  },
  {
    "url": "assets/js/25.6d3c138f.js",
    "revision": "f96d20d74027b79205b5e4275320126f"
  },
  {
    "url": "assets/js/26.465ab106.js",
    "revision": "18fdc0ba8b849c4c25f8f6ddb9dbc8f8"
  },
  {
    "url": "assets/js/27.56920f0b.js",
    "revision": "89efce72c666a1dcbdd492d6b20c020f"
  },
  {
    "url": "assets/js/28.cbf327ee.js",
    "revision": "eba67669a4e268d445be4798ac738f90"
  },
  {
    "url": "assets/js/29.9143ce4d.js",
    "revision": "4dbabcb70aced92fd17a71e1754a3afd"
  },
  {
    "url": "assets/js/3.b51f37ca.js",
    "revision": "6bd66d92e7cd79c8264610e48892dd69"
  },
  {
    "url": "assets/js/30.07e6ef9e.js",
    "revision": "31fccda9e9ff2f9780812ce1a67dcb67"
  },
  {
    "url": "assets/js/31.a83cd578.js",
    "revision": "852f5db955151a40fd72f2659bd2a200"
  },
  {
    "url": "assets/js/32.cfe263cb.js",
    "revision": "e7a6d31c0ded3029049076b894c38764"
  },
  {
    "url": "assets/js/33.14805340.js",
    "revision": "fa3ab751bf7e1558ba809d7536053047"
  },
  {
    "url": "assets/js/34.e213ef01.js",
    "revision": "5139775a234873ff96429c79a50fa7c0"
  },
  {
    "url": "assets/js/35.0138e25c.js",
    "revision": "2349f320aa0ee0751677e1fd972beca6"
  },
  {
    "url": "assets/js/36.95d59c08.js",
    "revision": "e08854954f4e2baf4860d33a839e523b"
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
    "url": "assets/js/41.ec50ae95.js",
    "revision": "352aef1028763a9aae61c1894c62eef1"
  },
  {
    "url": "assets/js/42.b5cd0499.js",
    "revision": "7e63be819628af30ecf979bc3dc09552"
  },
  {
    "url": "assets/js/43.2d592acd.js",
    "revision": "6d32c228e2613cef4afaa9e37d959416"
  },
  {
    "url": "assets/js/44.c169a774.js",
    "revision": "3f8878daa0fed6dc2a93e7ac3ca0d538"
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
    "url": "assets/js/47.2585d928.js",
    "revision": "f72dd8a6239625fce383cc479427374a"
  },
  {
    "url": "assets/js/48.3f5acca7.js",
    "revision": "874fa47257d5e3b43e14ccd9c6914977"
  },
  {
    "url": "assets/js/49.43d0633e.js",
    "revision": "6a0e680fde2f9f0ee1b5ed8d399aa21d"
  },
  {
    "url": "assets/js/5.8369cf44.js",
    "revision": "74b12689396a2a28d6d9b60090513904"
  },
  {
    "url": "assets/js/50.a872a57f.js",
    "revision": "9654b62b15333bdecdb62b1d9b0a9560"
  },
  {
    "url": "assets/js/51.8743c75c.js",
    "revision": "69201bb7d131bf4693f5e5be6db7d550"
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
    "url": "assets/js/54.fff452af.js",
    "revision": "416d9744cd7f75d70eb036b240122b81"
  },
  {
    "url": "assets/js/55.2ec60316.js",
    "revision": "7affb591030c856afc4cb2db800acb25"
  },
  {
    "url": "assets/js/56.f45b7ab8.js",
    "revision": "f576c8c4ab6d590f782e65a8ea2390e0"
  },
  {
    "url": "assets/js/57.642ad3d2.js",
    "revision": "1cd9150daa769a8d49a42bae1d1d9a2b"
  },
  {
    "url": "assets/js/58.adc163ab.js",
    "revision": "1d4d6db4430c44a28e97a11c840fc95c"
  },
  {
    "url": "assets/js/59.15e42bc8.js",
    "revision": "ebd84caa0fff031ebc9bf6585a94f3dc"
  },
  {
    "url": "assets/js/6.67fb8021.js",
    "revision": "77a5f062e04c15cb0a745ea1d679b0a9"
  },
  {
    "url": "assets/js/60.6f086165.js",
    "revision": "bdc8fb55faf5e693ea9c6bf6c8708855"
  },
  {
    "url": "assets/js/61.04dac04a.js",
    "revision": "2224004551fd2ea1af49ab6bc8ee5095"
  },
  {
    "url": "assets/js/62.adfa7b56.js",
    "revision": "021e17c91710e09332d9ec10d647f772"
  },
  {
    "url": "assets/js/63.9485b38d.js",
    "revision": "e14975a0a651833d0bd8f59cf326da05"
  },
  {
    "url": "assets/js/64.66384ee9.js",
    "revision": "96a9f4adb6d5bc539d1dc78a998b6e9a"
  },
  {
    "url": "assets/js/65.d00456c2.js",
    "revision": "7216c1ac4dad5b36469568feab4ec1e0"
  },
  {
    "url": "assets/js/66.1c663b4e.js",
    "revision": "9701bb80e0e6ce90faedbb287bba090d"
  },
  {
    "url": "assets/js/67.23040fad.js",
    "revision": "ae9600b88a935835345085592d7e262f"
  },
  {
    "url": "assets/js/68.ec80d4c8.js",
    "revision": "11fc7a319801f1da58385ad5a7c3e319"
  },
  {
    "url": "assets/js/69.42cdb20b.js",
    "revision": "f3b407e884be33a963ca9633baddd365"
  },
  {
    "url": "assets/js/7.9de6e695.js",
    "revision": "642c9d5b93b6b972977adcfb1c0f9d87"
  },
  {
    "url": "assets/js/70.593f7c1b.js",
    "revision": "7d879911e3417f2cd24237dba7907195"
  },
  {
    "url": "assets/js/8.b4c057f5.js",
    "revision": "296682be4c33e2fc246dff2857fd8b96"
  },
  {
    "url": "assets/js/9.3f8c1dcf.js",
    "revision": "d6308ec20cd39c138e9b603f18594b87"
  },
  {
    "url": "assets/js/app.eab23ea7.js",
    "revision": "3378fb2f566ac55490f5f0d4bfd1d430"
  },
  {
    "url": "images/logo.png",
    "revision": "a7ce492a1928707e2a1ad8ccb4e4d15d"
  },
  {
    "url": "index.html",
    "revision": "c36c5e515130592173d9686be2d12b64"
  },
  {
    "url": "pages/algorithm/index.html",
    "revision": "da4e7d8066051908bf6fdaaf0411567d"
  },
  {
    "url": "pages/algorithm/排序算法.html",
    "revision": "dc3ef0e334c70ff6f576cfe8238dcc6c"
  },
  {
    "url": "pages/knowledgeBase/browser/index.html",
    "revision": "874969b67967d9c5c98d30b3f9178a61"
  },
  {
    "url": "pages/knowledgeBase/code/1.html",
    "revision": "c196365494875c44d6d1f8612c5587af"
  },
  {
    "url": "pages/knowledgeBase/code/2.html",
    "revision": "6d82473b81bb97b00e0cab3e7d9ab505"
  },
  {
    "url": "pages/knowledgeBase/code/3.html",
    "revision": "dfc1ddc6bf9f3848ad24246119387b77"
  },
  {
    "url": "pages/knowledgeBase/css/index.html",
    "revision": "8d29ddea479c881857239a7cb5473265"
  },
  {
    "url": "pages/knowledgeBase/dataVisualization/1.html",
    "revision": "5e28f9873dd2727e895586c816c566be"
  },
  {
    "url": "pages/knowledgeBase/designMode/1.html",
    "revision": "ebdbd056dc7d033c0d55b474000e6a5b"
  },
  {
    "url": "pages/knowledgeBase/docker/1.html",
    "revision": "1c3a94742c5d943bc05c3918b506945b"
  },
  {
    "url": "pages/knowledgeBase/engineering/1.html",
    "revision": "7a13c1a2afadcc5bb29a475511cfc793"
  },
  {
    "url": "pages/knowledgeBase/flutter/1.html",
    "revision": "aff507f906740f38783e203c2c9e2cf3"
  },
  {
    "url": "pages/knowledgeBase/html/index.html",
    "revision": "c39cb583bd000d3568f970bcaf872d54"
  },
  {
    "url": "pages/knowledgeBase/index.html",
    "revision": "df79a08892c013e3c18f483e6e6efb16"
  },
  {
    "url": "pages/knowledgeBase/js/1.html",
    "revision": "aace4077c10f74bcc5b29d3e1983f432"
  },
  {
    "url": "pages/knowledgeBase/js/2.html",
    "revision": "09bd5a66fe5196740ed1832ca17826c7"
  },
  {
    "url": "pages/knowledgeBase/js/3.html",
    "revision": "0ffa528f4d74cf46c12288e9f356a711"
  },
  {
    "url": "pages/knowledgeBase/js/4.html",
    "revision": "868bfda6a6085d87fe6813b92d1c6460"
  },
  {
    "url": "pages/knowledgeBase/js/5.html",
    "revision": "973b5e81c31b5088235ca51f31373295"
  },
  {
    "url": "pages/knowledgeBase/miniProgram/1.html",
    "revision": "4dd04b7659de3767bdaf0e79dd2494b8"
  },
  {
    "url": "pages/knowledgeBase/network/index.html",
    "revision": "3eb2d2d175d9af28d3bbc439ab4ab0fc"
  },
  {
    "url": "pages/knowledgeBase/nginx/1.html",
    "revision": "1dc14da7fe78f8b1da07b2a667af6c55"
  },
  {
    "url": "pages/knowledgeBase/node/1.html",
    "revision": "0c13b9a48c6d87fbee0ac95884be081a"
  },
  {
    "url": "pages/knowledgeBase/optimization/1.html",
    "revision": "d9d5fc701fd4580ab9fe3ea2491e10f7"
  },
  {
    "url": "pages/knowledgeBase/optimization/2.html",
    "revision": "d8fe5d1f24278b3eef4ff5624bf608db"
  },
  {
    "url": "pages/knowledgeBase/optimization/3.html",
    "revision": "b5de06554d15c157bd2b733ce0eedc6b"
  },
  {
    "url": "pages/knowledgeBase/react/1.html",
    "revision": "31aa88b3abe8db0a4ff02fe2e5cb15e8"
  },
  {
    "url": "pages/knowledgeBase/react/2.html",
    "revision": "fa3435a7621022669b270d14428b6162"
  },
  {
    "url": "pages/knowledgeBase/react/3.html",
    "revision": "c60a4f77dacb6ac583a415ee78ed7146"
  },
  {
    "url": "pages/knowledgeBase/react/4.html",
    "revision": "d0a82327b79d31b6003fd9e1c14963c5"
  },
  {
    "url": "pages/knowledgeBase/react/5.html",
    "revision": "9ac042f460390dc2846e77b9ecb3a208"
  },
  {
    "url": "pages/knowledgeBase/react/6.html",
    "revision": "310e97717b7af4ff53150ff355eab266"
  },
  {
    "url": "pages/knowledgeBase/react/7.html",
    "revision": "224d46b965e8f82840494c578980a95f"
  },
  {
    "url": "pages/knowledgeBase/react/8.html",
    "revision": "1a454d349ef449e0b12f120841525ea3"
  },
  {
    "url": "pages/knowledgeBase/react/9.html",
    "revision": "5d922fa63709879c5626308873b52e0e"
  },
  {
    "url": "pages/knowledgeBase/regularExpression/1.html",
    "revision": "835a48ac35469734637e1866643202ea"
  },
  {
    "url": "pages/knowledgeBase/rollup/1.html",
    "revision": "44ef3ed6392635a23455129a5b9daeef"
  },
  {
    "url": "pages/knowledgeBase/security/1.html",
    "revision": "e4feb1bcd90d8c768f221709eeccaf5b"
  },
  {
    "url": "pages/knowledgeBase/sentry/index.html",
    "revision": "6a771ca72c3fdbd6a26c89ba5f247575"
  },
  {
    "url": "pages/knowledgeBase/typeScript/index.html",
    "revision": "bc8a827a3e2b1343365919d78d12e845"
  },
  {
    "url": "pages/knowledgeBase/vue/1.html",
    "revision": "676f5839258f4781b88f98d5d384241a"
  },
  {
    "url": "pages/knowledgeBase/vue/2.html",
    "revision": "38025346883487b24b715a3f5f4d1bd6"
  },
  {
    "url": "pages/knowledgeBase/vue/3.html",
    "revision": "0d4ae73b328ff3c2e29c829be0389159"
  },
  {
    "url": "pages/knowledgeBase/vue/4.html",
    "revision": "de505d738ce592b303af221d685f22b2"
  },
  {
    "url": "pages/knowledgeBase/vue/5.html",
    "revision": "8d6e41ca32f0d5147dfc98c3d671d106"
  },
  {
    "url": "pages/knowledgeBase/vue/6.html",
    "revision": "bcf5993b5c7c2bd6db74029e68cf177b"
  },
  {
    "url": "pages/knowledgeBase/vue/7.html",
    "revision": "820c8418a1a7473ac5889d3c58a27fc1"
  },
  {
    "url": "pages/knowledgeBase/wechat/1.html",
    "revision": "d4805d02f1b8f34aedf47ab5553b1ec2"
  },
  {
    "url": "pages/knowledgeBase/微前端/1.html",
    "revision": "c083f2d20196d00b1742229e5c495678"
  },
  {
    "url": "pages/knowledgeBase/微前端/2.html",
    "revision": "d0890db4ef43e27eac8d9f7ce82b26af"
  },
  {
    "url": "pages/knowledgeBase/微前端/3.html",
    "revision": "f5e80856b3d86d8eb06e393ed8bd3d28"
  },
  {
    "url": "pages/knowledgeBase/数据结构/1.html",
    "revision": "94245eee080c4ba65919cf2989bc4a9b"
  },
  {
    "url": "pages/question/css/1.html",
    "revision": "2aa8aabb0487b9ec16aaf779ce5dcd09"
  },
  {
    "url": "pages/question/css/2.html",
    "revision": "0f22c31e3847478c03b9fe467c4abc4e"
  },
  {
    "url": "pages/question/index.html",
    "revision": "6723ce50b25d369f1e7ae9bb7cfe12cc"
  },
  {
    "url": "pages/question/js/1.html",
    "revision": "2ba44e7f39d8493499a4ece9440efa15"
  },
  {
    "url": "pages/question/js/2.html",
    "revision": "b2b1b62af152411f250f40791354f5f7"
  },
  {
    "url": "pages/question/js/3.html",
    "revision": "126a023e0f3a04d43be85eaa809f6e2b"
  },
  {
    "url": "pages/summary/folder1/1.html",
    "revision": "eba78e9468b4aaeb33ae2a2f3d19d8b3"
  },
  {
    "url": "pages/summary/folder1/2.html",
    "revision": "525be1d7b8f00c7a0c0c81b79cb2deb9"
  },
  {
    "url": "pages/summary/folder2/3.html",
    "revision": "21c1bb72120ccdcf252924f6a7efb55a"
  },
  {
    "url": "pages/summary/index.html",
    "revision": "53143466561fd553c7da3c3046af32d2"
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
