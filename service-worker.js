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
    "revision": "b147060d6bb9968a5e864e83cb0260f6"
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
    "url": "assets/js/10.570970db.js",
    "revision": "f35c49dd18a2c14de6f3eefa039179c0"
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
    "url": "assets/js/13.9b028697.js",
    "revision": "f995374cbd9d4369777df3d0dd2b4b7b"
  },
  {
    "url": "assets/js/14.af29e617.js",
    "revision": "2f8b4374f4ed6d7d0e7c89e4943dec9f"
  },
  {
    "url": "assets/js/15.a0177ebd.js",
    "revision": "a5fca63ec65c0c3767868c86c05265c4"
  },
  {
    "url": "assets/js/16.c21bded6.js",
    "revision": "87fcb4d0ada551e636bf0a705e679d81"
  },
  {
    "url": "assets/js/17.9075fc47.js",
    "revision": "7a9e67ca8076c29a087fd8076f3eeab4"
  },
  {
    "url": "assets/js/18.2003867b.js",
    "revision": "07ab17091494ba64e92b2b4789c3ea6d"
  },
  {
    "url": "assets/js/19.b8dc7ea5.js",
    "revision": "d4711fd57e35dfedabf070ff77607d41"
  },
  {
    "url": "assets/js/2.132bf881.js",
    "revision": "5e392ea44bf5ea0cf42eec449494fda2"
  },
  {
    "url": "assets/js/20.a4345fd2.js",
    "revision": "ad16b2afcdea3fb83b84e983a142f01b"
  },
  {
    "url": "assets/js/21.6c7ab8cf.js",
    "revision": "c310da5f628f64d9268fba9f0fb047d3"
  },
  {
    "url": "assets/js/22.32ccfb8a.js",
    "revision": "6534461729db1c01502befd6543a308d"
  },
  {
    "url": "assets/js/23.36c2afad.js",
    "revision": "a9d1f46eef1cf00e57d76feacd931890"
  },
  {
    "url": "assets/js/24.25a9c79b.js",
    "revision": "2c33ea94bda4b1d4041bf92bb12747d6"
  },
  {
    "url": "assets/js/25.709f886d.js",
    "revision": "e98dd0034e5cae6af0650697e6fe7a99"
  },
  {
    "url": "assets/js/26.cbdef406.js",
    "revision": "82c9f680f78a9cde647b0fecf0a829cf"
  },
  {
    "url": "assets/js/27.0f99473c.js",
    "revision": "45ccccc118c8d5fa7c19c98b868c061b"
  },
  {
    "url": "assets/js/28.2c57830f.js",
    "revision": "5ff1d82be6b943870e65c78a2b84731c"
  },
  {
    "url": "assets/js/29.0353b513.js",
    "revision": "8a0a141ce56b1b697e02a0b2e2d56577"
  },
  {
    "url": "assets/js/3.dde0216e.js",
    "revision": "9ea960917581fcf409495c997b197541"
  },
  {
    "url": "assets/js/30.35624b8e.js",
    "revision": "4ca16724d94b6cf23b13e21cc714b9c2"
  },
  {
    "url": "assets/js/31.16bf1d70.js",
    "revision": "587797feddbb812f91b2a4c430af4007"
  },
  {
    "url": "assets/js/32.3daa7840.js",
    "revision": "046164178f0d417a46a83d995b542df2"
  },
  {
    "url": "assets/js/33.1a724eec.js",
    "revision": "3162882f2f1237555c9c9703d3784c2b"
  },
  {
    "url": "assets/js/34.c5d39c5f.js",
    "revision": "531fd50918fc3489ec419797024220b4"
  },
  {
    "url": "assets/js/35.f0bff11d.js",
    "revision": "2d2377107c928820dcbfcfef27133328"
  },
  {
    "url": "assets/js/36.1720d465.js",
    "revision": "fd639c071f0af217f7ad9497708adc28"
  },
  {
    "url": "assets/js/37.9520be77.js",
    "revision": "6356dbc522d3b5e53212de09c51ecf97"
  },
  {
    "url": "assets/js/38.d39542e5.js",
    "revision": "da39a416f969e82b0dac9cda145c82dc"
  },
  {
    "url": "assets/js/39.ccd66b9a.js",
    "revision": "b921b9136a5c4347811653f60e71ac8c"
  },
  {
    "url": "assets/js/4.985a7118.js",
    "revision": "7a27a6dea6443f8c540bbfb880c5bb75"
  },
  {
    "url": "assets/js/40.129d3e38.js",
    "revision": "1cef7ce1181aff21c767f7b1fbbeafdc"
  },
  {
    "url": "assets/js/41.072f88be.js",
    "revision": "ccc4baf50ecb3f29a595aa6d39cf072b"
  },
  {
    "url": "assets/js/42.dfafce33.js",
    "revision": "40749c4325b8d7bdea33e8688b3a91fc"
  },
  {
    "url": "assets/js/43.c357fdfd.js",
    "revision": "7cb334fdbeea6210bfc1e85a7659ac75"
  },
  {
    "url": "assets/js/44.52270fae.js",
    "revision": "93d53ce238402cd69fa997e834c3fd7c"
  },
  {
    "url": "assets/js/45.5cb022f8.js",
    "revision": "b9359d9bf58e5fe62efda588e9418f41"
  },
  {
    "url": "assets/js/46.ae488d41.js",
    "revision": "61148a24bc381448ae5af6b02e7a5db2"
  },
  {
    "url": "assets/js/47.15c3b3b2.js",
    "revision": "375bf2760099efb080d33ec30f597348"
  },
  {
    "url": "assets/js/48.b625f4de.js",
    "revision": "893ef868c612858c93edb6f6bcba748c"
  },
  {
    "url": "assets/js/49.85a43f46.js",
    "revision": "c1e3bdb934fba887c3cdcea9734a89d7"
  },
  {
    "url": "assets/js/5.49a2ce40.js",
    "revision": "c13f3e3be84da4a6660f6156b743ede2"
  },
  {
    "url": "assets/js/50.ac139f51.js",
    "revision": "4574a279050f9d4f69a43377d3b59ff6"
  },
  {
    "url": "assets/js/51.e71d253c.js",
    "revision": "d8524305fde5befcf9a427cf6f76e7eb"
  },
  {
    "url": "assets/js/52.3e52dc46.js",
    "revision": "99754977a5f81c53f54e2c83529cc469"
  },
  {
    "url": "assets/js/53.338df508.js",
    "revision": "5786938330cf19e05c9f57cb224b0a9c"
  },
  {
    "url": "assets/js/54.c0df51ba.js",
    "revision": "6bd0edd776b58a9d179dc36af1d40159"
  },
  {
    "url": "assets/js/55.fccf05ba.js",
    "revision": "73f5399407e3a0a1c4aeedc79c9510b3"
  },
  {
    "url": "assets/js/56.b8376d05.js",
    "revision": "a3e47ff97f431968cec3db5a4729bf31"
  },
  {
    "url": "assets/js/57.4fc4fed1.js",
    "revision": "372b776daed8a4df9408fd285e73265b"
  },
  {
    "url": "assets/js/58.2fce48f1.js",
    "revision": "7b71fc4c64df6b3db0dff008badb68d5"
  },
  {
    "url": "assets/js/59.157ab12a.js",
    "revision": "3b5ab3d658738dfe7346eba260888a5d"
  },
  {
    "url": "assets/js/6.67fb8021.js",
    "revision": "77a5f062e04c15cb0a745ea1d679b0a9"
  },
  {
    "url": "assets/js/60.028d0507.js",
    "revision": "4665e5560ed1cdb13fa4b44465db8026"
  },
  {
    "url": "assets/js/61.e97289e8.js",
    "revision": "0dd8a7a9111995547968dfe6b2f4bb55"
  },
  {
    "url": "assets/js/62.f59bca5a.js",
    "revision": "7341fade3e1aa3f0219e334f9e35859b"
  },
  {
    "url": "assets/js/63.683212a2.js",
    "revision": "989c7c755e4ad05a0dcfd240873990fa"
  },
  {
    "url": "assets/js/64.b8460677.js",
    "revision": "f1c7e71bb1f180fb6a9e4a8445f73c7a"
  },
  {
    "url": "assets/js/65.b05ce0e2.js",
    "revision": "9e28fd0a720c9d27da80af63f3d80b6c"
  },
  {
    "url": "assets/js/66.ef1fea6e.js",
    "revision": "d2147015e524d9bbb730a8b7006d9ed4"
  },
  {
    "url": "assets/js/67.7450fa6e.js",
    "revision": "0e229090a5ff2d2f26b86dce11c0a94d"
  },
  {
    "url": "assets/js/68.1c81894a.js",
    "revision": "707d50d57f01f68730d6aaf6f6ac51f3"
  },
  {
    "url": "assets/js/69.9ac29fc9.js",
    "revision": "74dfd58ea674140135b515ef0d7f3515"
  },
  {
    "url": "assets/js/7.90f4ae40.js",
    "revision": "ab15a6f1edb31cdaac3879d2002f7c36"
  },
  {
    "url": "assets/js/70.19eb0830.js",
    "revision": "9a16d585b69428710fd008051cfd46ea"
  },
  {
    "url": "assets/js/71.19b3dac0.js",
    "revision": "8bf22de3aed9338dce63ad51bfd96619"
  },
  {
    "url": "assets/js/72.a623891e.js",
    "revision": "e4b76dc3d7baf2209241761b179e731b"
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
    "url": "assets/js/app.e7f23cc9.js",
    "revision": "0c25b8813378b990f4370cdab6a1403e"
  },
  {
    "url": "images/logo.png",
    "revision": "9ad0a142eb605c99d6db6d852d66cc73"
  },
  {
    "url": "images/logo2.png",
    "revision": "a7ce492a1928707e2a1ad8ccb4e4d15d"
  },
  {
    "url": "index.html",
    "revision": "a1b80996bee86c97db5a6d72d467d698"
  },
  {
    "url": "pages/algorithm/index.html",
    "revision": "a4fe51ed4df6d82c72e25882c297104e"
  },
  {
    "url": "pages/algorithm/排序算法.html",
    "revision": "6bddd87592390921e23f0768191edfae"
  },
  {
    "url": "pages/knowledgeBase/browser/index.html",
    "revision": "386f8ce8339e14441e2fcd3f90587545"
  },
  {
    "url": "pages/knowledgeBase/code/1.html",
    "revision": "f4fb38e7e484b5b60b1b9494553064c7"
  },
  {
    "url": "pages/knowledgeBase/code/2.html",
    "revision": "cea8a2f09e7844ef28b1277109914b20"
  },
  {
    "url": "pages/knowledgeBase/code/3.html",
    "revision": "20dff551c25d0501b5d50e76c4f5e8bc"
  },
  {
    "url": "pages/knowledgeBase/css/index.html",
    "revision": "22a62b317c0b6a0881a9a9134acc7ea3"
  },
  {
    "url": "pages/knowledgeBase/dataVisualization/1.html",
    "revision": "c51a5f2d267bc0326afadc6ebc2c8d6f"
  },
  {
    "url": "pages/knowledgeBase/docker/1.html",
    "revision": "9ee0165f1239b562cdac5c77ae02039f"
  },
  {
    "url": "pages/knowledgeBase/engineering/1.html",
    "revision": "3e73b2f5dfca0fb91ea579e7e3660def"
  },
  {
    "url": "pages/knowledgeBase/flutter/1.html",
    "revision": "03c468392d7a466d3eaf8f0e271df6b1"
  },
  {
    "url": "pages/knowledgeBase/html/index.html",
    "revision": "d4a360e6f8e917b9492bb1c5aa944754"
  },
  {
    "url": "pages/knowledgeBase/index.html",
    "revision": "7643de5b3ba1be2e1cf0f456bb414cd9"
  },
  {
    "url": "pages/knowledgeBase/js/1.html",
    "revision": "832d957e20b9625970c85d5649a06ca0"
  },
  {
    "url": "pages/knowledgeBase/js/2.html",
    "revision": "2fbf598d371bdc8a304d90a5ff00e035"
  },
  {
    "url": "pages/knowledgeBase/js/3.html",
    "revision": "f0ad7945559bce39f1b1f03cb32a80f7"
  },
  {
    "url": "pages/knowledgeBase/js/4.html",
    "revision": "2b5982e2d5a64c8d81e6131029b595d5"
  },
  {
    "url": "pages/knowledgeBase/js/5.html",
    "revision": "411ba218d92f41f5dc7c25c7e09f85a4"
  },
  {
    "url": "pages/knowledgeBase/miniProgram/1.html",
    "revision": "d5ccde0bf56363f57e69334810414ee7"
  },
  {
    "url": "pages/knowledgeBase/network/index.html",
    "revision": "93829cedeb1971ced9b8a871f81c7af4"
  },
  {
    "url": "pages/knowledgeBase/nginx/1.html",
    "revision": "5131c7d925fc56844a566fadc6e598bb"
  },
  {
    "url": "pages/knowledgeBase/node/1.html",
    "revision": "b90e5ebc64ac7a9461cb38f5abac780b"
  },
  {
    "url": "pages/knowledgeBase/optimization/1.html",
    "revision": "eb2933ac4a910ba32f842fd96964a0e5"
  },
  {
    "url": "pages/knowledgeBase/optimization/2.html",
    "revision": "f62eea113c3d2e8d75aef9592060e4a7"
  },
  {
    "url": "pages/knowledgeBase/optimization/3.html",
    "revision": "c388a50a3123bbc1a150212ac2e8835d"
  },
  {
    "url": "pages/knowledgeBase/react/1.html",
    "revision": "aabce8d07712222e9acac257b37f09ff"
  },
  {
    "url": "pages/knowledgeBase/react/2.html",
    "revision": "8c9bbb6af367296f3664ad0c1edf74d9"
  },
  {
    "url": "pages/knowledgeBase/react/3.html",
    "revision": "4d7c39a0328cf9eac5c648232f12ad99"
  },
  {
    "url": "pages/knowledgeBase/react/4.html",
    "revision": "4eb5712ab5a960308e57a7f88e80905e"
  },
  {
    "url": "pages/knowledgeBase/react/5.html",
    "revision": "9ae141a50001f56151b92793ac41b3cf"
  },
  {
    "url": "pages/knowledgeBase/react/6.html",
    "revision": "4d1a45fa29349daa8b0341696f3d159b"
  },
  {
    "url": "pages/knowledgeBase/react/7.html",
    "revision": "104dee6d69f7f41f60340a72e7899368"
  },
  {
    "url": "pages/knowledgeBase/react/8.html",
    "revision": "c7a20032559a0a1eda634b402a80de3d"
  },
  {
    "url": "pages/knowledgeBase/react/9.html",
    "revision": "0b42dd2d81d1faca14e690bb631c028e"
  },
  {
    "url": "pages/knowledgeBase/regularExpression/1.html",
    "revision": "05a3ab2f8c2791548668c8e9017b9c49"
  },
  {
    "url": "pages/knowledgeBase/rollup/1.html",
    "revision": "799eb751872b24c2a5ac2c4c95016722"
  },
  {
    "url": "pages/knowledgeBase/security/1.html",
    "revision": "6ee0f8c1271e361f04a3ff23467a8e97"
  },
  {
    "url": "pages/knowledgeBase/sentry/index.html",
    "revision": "4439f9f848c93e6329b625efd4716c4c"
  },
  {
    "url": "pages/knowledgeBase/typeScript/index.html",
    "revision": "7e5b36b48eb2f85d61dd3fddd7af7f73"
  },
  {
    "url": "pages/knowledgeBase/vue/1.html",
    "revision": "e835bc95045babbc93c4b88d4d016982"
  },
  {
    "url": "pages/knowledgeBase/vue/2.html",
    "revision": "43b0437413809e51e4554b5b37a544ba"
  },
  {
    "url": "pages/knowledgeBase/vue/3.html",
    "revision": "b1249d60d4b3dde46cdec8235d554a69"
  },
  {
    "url": "pages/knowledgeBase/vue/4.html",
    "revision": "e87027376c24ec8d300e3416a4479a30"
  },
  {
    "url": "pages/knowledgeBase/vue/5.html",
    "revision": "5d09016c23010d59eb36ae88bd56b1e3"
  },
  {
    "url": "pages/knowledgeBase/vue/6.html",
    "revision": "5dc80fdbd042603f86c29179d8f84278"
  },
  {
    "url": "pages/knowledgeBase/vue/7.html",
    "revision": "dd4b2981fba2110152869f7b602c7bc7"
  },
  {
    "url": "pages/knowledgeBase/wechat/1.html",
    "revision": "af9d966168a7a717ab8c7f6265046a3b"
  },
  {
    "url": "pages/knowledgeBase/微前端/1.html",
    "revision": "e764826eb17d48a0b08c185bec1fa9d5"
  },
  {
    "url": "pages/knowledgeBase/微前端/2.html",
    "revision": "10ec03e9fcd432c2b96f18354c15e696"
  },
  {
    "url": "pages/knowledgeBase/微前端/3.html",
    "revision": "aa4ad082c812f5082e05ddbd1a062d39"
  },
  {
    "url": "pages/knowledgeBase/数据结构/1.html",
    "revision": "80dfe4dc8b068a1c48337b32e21255e5"
  },
  {
    "url": "pages/knowledgeBase/设计模式/index.html",
    "revision": "b8992db8d1bff5dfc0060e09c2de3c98"
  },
  {
    "url": "pages/question/css/1.html",
    "revision": "a3cc94d2c155277479d1ca60d6979dfa"
  },
  {
    "url": "pages/question/css/2.html",
    "revision": "9acded5edc8a93a108928ebfd8ef6d1e"
  },
  {
    "url": "pages/question/index.html",
    "revision": "27ae54c7dedfba4c9ab84bbe5cbbd780"
  },
  {
    "url": "pages/question/js/1.html",
    "revision": "79b651005ea41bbb93bce3de87602fb8"
  },
  {
    "url": "pages/question/js/2.html",
    "revision": "2f0ada0c5f67979de030be44a2402c81"
  },
  {
    "url": "pages/question/js/3.html",
    "revision": "91cf742951288473b71162fcb779eea5"
  },
  {
    "url": "pages/summary/folder1/1.html",
    "revision": "4c1fbde84a8c853e3c9c3df621528cbc"
  },
  {
    "url": "pages/summary/folder1/2.html",
    "revision": "c863d18ddb3036efd6fb62ff53c7789d"
  },
  {
    "url": "pages/summary/folder1/3.html",
    "revision": "5e43fb527b1f281470eb0506e2551050"
  },
  {
    "url": "pages/summary/folder1/4.html",
    "revision": "125fd65a246573ae5a127dc410e8cc47"
  },
  {
    "url": "pages/summary/folder2/3.html",
    "revision": "6900e1251c1ff9a3ea504ad2ad5d3aab"
  },
  {
    "url": "pages/summary/index.html",
    "revision": "2ef5de094cd5aeb5ebcbeb246091580c"
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
