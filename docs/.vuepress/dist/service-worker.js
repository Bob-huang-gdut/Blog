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
    "revision": "0de81dfcb40112ee4fc933c4f9d35133"
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
    "url": "assets/js/10.570970db.js",
    "revision": "f35c49dd18a2c14de6f3eefa039179c0"
  },
  {
    "url": "assets/js/11.26247d6a.js",
    "revision": "e6b532de171602be74287e607a842eba"
  },
  {
    "url": "assets/js/12.d9888a66.js",
    "revision": "9d6ea815da9d5d76cfaca904632d50e3"
  },
  {
    "url": "assets/js/13.ca0d5609.js",
    "revision": "c15f74c692fb5ee66d8b2b6c5b029b8a"
  },
  {
    "url": "assets/js/14.d04afeff.js",
    "revision": "84fb71fe71a7182ca427aca3dd208510"
  },
  {
    "url": "assets/js/15.21153402.js",
    "revision": "a8732fd3b9d18142f06b9df855b6ffd9"
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
    "url": "assets/js/18.63bf5fca.js",
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
    "url": "assets/js/21.dec929a1.js",
    "revision": "685f91c93b62e13ded1f187c498cf73e"
  },
  {
    "url": "assets/js/22.2c2d9eb7.js",
    "revision": "cd58066ac7e89fbffe5ff3e6f4d65a73"
  },
  {
    "url": "assets/js/23.0ecd3ca5.js",
    "revision": "7da84d832f02fcb2576d347d8d240264"
  },
  {
    "url": "assets/js/24.25a9c79b.js",
    "revision": "2c33ea94bda4b1d4041bf92bb12747d6"
  },
  {
    "url": "assets/js/25.30a3602e.js",
    "revision": "d4bdafa8e651859e270c04aeb527407d"
  },
  {
    "url": "assets/js/26.cbdef406.js",
    "revision": "82c9f680f78a9cde647b0fecf0a829cf"
  },
  {
    "url": "assets/js/27.a0b6314b.js",
    "revision": "532157e7e8fe02f5274cc337dfe65fde"
  },
  {
    "url": "assets/js/28.091ee10a.js",
    "revision": "f96830a766e71eba60be6cbb71a0bcd9"
  },
  {
    "url": "assets/js/29.d370f72d.js",
    "revision": "aee45f5c44a2cfab50cbbeae024b378c"
  },
  {
    "url": "assets/js/3.dde0216e.js",
    "revision": "9ea960917581fcf409495c997b197541"
  },
  {
    "url": "assets/js/30.a22e1ddc.js",
    "revision": "bb09442f06a82f84ed27070b1f1b79b6"
  },
  {
    "url": "assets/js/31.8673d1a9.js",
    "revision": "36a1ccf1ac28338fc90f5bb40a1dc576"
  },
  {
    "url": "assets/js/32.38c5ad82.js",
    "revision": "d617f3b9e97ad680cd1bd0ea29893f08"
  },
  {
    "url": "assets/js/33.b8140fd8.js",
    "revision": "e7c9df758a54f7d3fbb2f4a0de650fa5"
  },
  {
    "url": "assets/js/34.260fc635.js",
    "revision": "e7a51106d31ba0abf4d7c14dd4c1a2fa"
  },
  {
    "url": "assets/js/35.5fcf442d.js",
    "revision": "2e82066ceb91beb9c0f37840d6eb56e0"
  },
  {
    "url": "assets/js/36.823c35dc.js",
    "revision": "0072aa706c77dfe5ed425b80f07335ff"
  },
  {
    "url": "assets/js/37.9520be77.js",
    "revision": "6356dbc522d3b5e53212de09c51ecf97"
  },
  {
    "url": "assets/js/38.d8fe22e5.js",
    "revision": "c18a38e6fc8805960c20051bef58d667"
  },
  {
    "url": "assets/js/39.e64f89a0.js",
    "revision": "9b467eae7ee0c7d6a18543d98b9e2afd"
  },
  {
    "url": "assets/js/4.9f518c74.js",
    "revision": "fb9d35ccdf7a5f6b848009193de82e4f"
  },
  {
    "url": "assets/js/40.9b0fbe90.js",
    "revision": "98e0290fecb5cb2e19d64a19e79e4854"
  },
  {
    "url": "assets/js/41.3e858669.js",
    "revision": "c4bff50df19cd9ef9ad72f0221def18e"
  },
  {
    "url": "assets/js/42.3f4a5ef8.js",
    "revision": "f7fd4ca4850fc379008b7aff7891bc63"
  },
  {
    "url": "assets/js/43.b8e42aad.js",
    "revision": "86fe8ba81b6934304f0e7b987bac6a5a"
  },
  {
    "url": "assets/js/44.815a2c60.js",
    "revision": "e99a21b2008f775d2e1e953e6a727706"
  },
  {
    "url": "assets/js/45.9ec57ec0.js",
    "revision": "cb1b1285797cdb1f23da85285a19a093"
  },
  {
    "url": "assets/js/46.690732db.js",
    "revision": "eaf800ee6a8c6a986bd9255ac12acd96"
  },
  {
    "url": "assets/js/47.db1ec2e6.js",
    "revision": "f356ff700e8ac95dc1956b2cfc6ab946"
  },
  {
    "url": "assets/js/48.28f8d8fa.js",
    "revision": "91c5816785c3599248e71a74ea08f543"
  },
  {
    "url": "assets/js/49.8e1fab46.js",
    "revision": "ded14c106526a7d3a16e6f6c0c88183f"
  },
  {
    "url": "assets/js/5.8369cf44.js",
    "revision": "74b12689396a2a28d6d9b60090513904"
  },
  {
    "url": "assets/js/50.da5f5735.js",
    "revision": "dda9143a3f32d5c3316c74140823ac78"
  },
  {
    "url": "assets/js/51.050298ef.js",
    "revision": "18ec6e4fbdc7a52e6b8442ce8ed52c90"
  },
  {
    "url": "assets/js/52.4d3c59a6.js",
    "revision": "09bfc783fcbf321d3769a232fe777ad7"
  },
  {
    "url": "assets/js/53.c1ecc267.js",
    "revision": "a686d4af1ebda9efefcafc6d04dd5c8d"
  },
  {
    "url": "assets/js/54.71c7f8af.js",
    "revision": "b695e18139d77cd4a72ac4e8444ab077"
  },
  {
    "url": "assets/js/55.c1df6d75.js",
    "revision": "fb07a768fb5a0d4377a28f72b74d2c68"
  },
  {
    "url": "assets/js/56.baec85d4.js",
    "revision": "a668f8b7122185d869104cc4fbe5364f"
  },
  {
    "url": "assets/js/57.97425bfe.js",
    "revision": "cefa13c70862ed9960783820f15d42b2"
  },
  {
    "url": "assets/js/58.2fce48f1.js",
    "revision": "7b71fc4c64df6b3db0dff008badb68d5"
  },
  {
    "url": "assets/js/59.296e043b.js",
    "revision": "11121f9f51ceb7132acac5e0ce9cfd68"
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
    "url": "assets/js/61.45591070.js",
    "revision": "78bf4f4da27614ca2ae27aba6337ff01"
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
    "url": "assets/js/64.a1653fe2.js",
    "revision": "a065b70398145b63d6b8096d2db35f82"
  },
  {
    "url": "assets/js/65.adf4ae5e.js",
    "revision": "2fddb05ad19ddaa7af47cbc1e2d90487"
  },
  {
    "url": "assets/js/66.3fabb0a1.js",
    "revision": "34d3639fc372e8a9479ab26b49f57940"
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
    "url": "assets/js/69.8efa2984.js",
    "revision": "221b43fbf77ce775d94aa463b45589fa"
  },
  {
    "url": "assets/js/7.cd8d8194.js",
    "revision": "6321226e1bb83060454b848bcf998a1c"
  },
  {
    "url": "assets/js/70.222e3190.js",
    "revision": "43dfb3e3963ae24c05192d7c9d003c7d"
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
    "url": "assets/js/8.0c2c994c.js",
    "revision": "db1e5a36f0903f3488135292457bce73"
  },
  {
    "url": "assets/js/9.096f4450.js",
    "revision": "57eacadbc2979cbfc9ddd8dce3292915"
  },
  {
    "url": "assets/js/app.4a721b3d.js",
    "revision": "da50255a48c65ebad76935ec648c97b2"
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
    "revision": "8ba307cd0441328f928ab1abfda331a3"
  },
  {
    "url": "pages/algorithm/index.html",
    "revision": "523d1b6c12d128f6a1a26641f5b162e8"
  },
  {
    "url": "pages/algorithm/排序算法.html",
    "revision": "cab4658be045b28b6b20f62d80bc757a"
  },
  {
    "url": "pages/knowledgeBase/browser/index.html",
    "revision": "4841852af5b0c1ad6820ac92e41d2f52"
  },
  {
    "url": "pages/knowledgeBase/code/1.html",
    "revision": "c214ac547cd34c4b2220b88733241db8"
  },
  {
    "url": "pages/knowledgeBase/code/2.html",
    "revision": "9196b6e5415f4d45017f1da5ccc0393e"
  },
  {
    "url": "pages/knowledgeBase/code/3.html",
    "revision": "7a1b1ff63e135137afaee7451403eaae"
  },
  {
    "url": "pages/knowledgeBase/css/index.html",
    "revision": "3079c94110db55f36a9bc33e02ea4c32"
  },
  {
    "url": "pages/knowledgeBase/dataVisualization/1.html",
    "revision": "92d7dfe3d6874990449563efbed0c9e6"
  },
  {
    "url": "pages/knowledgeBase/docker/1.html",
    "revision": "37e653c3b6aded651e60c82c592ea264"
  },
  {
    "url": "pages/knowledgeBase/engineering/1.html",
    "revision": "d55a3b8e65f204ab7dc3966cd8b06a68"
  },
  {
    "url": "pages/knowledgeBase/flutter/1.html",
    "revision": "2c7ad51943848ee690517765c115354b"
  },
  {
    "url": "pages/knowledgeBase/html/index.html",
    "revision": "e16d86accbe25649433d1d69decb762e"
  },
  {
    "url": "pages/knowledgeBase/index.html",
    "revision": "30e2bdb42f530e72855359a050828652"
  },
  {
    "url": "pages/knowledgeBase/js/1.html",
    "revision": "5432d2c9087ac11f118d26a4cf4a4335"
  },
  {
    "url": "pages/knowledgeBase/js/2.html",
    "revision": "d5992d86e26669ff12f38030319f5eb3"
  },
  {
    "url": "pages/knowledgeBase/js/3.html",
    "revision": "5e167494191a4e0c4a763754c276059f"
  },
  {
    "url": "pages/knowledgeBase/js/4.html",
    "revision": "6c54f4e06e60894780cfbe9e27c5b27f"
  },
  {
    "url": "pages/knowledgeBase/js/5.html",
    "revision": "fc144253940df9a9bc0e14a0c30f0107"
  },
  {
    "url": "pages/knowledgeBase/miniProgram/1.html",
    "revision": "69f3a2e8783fff0643b2bf1471ac9f9d"
  },
  {
    "url": "pages/knowledgeBase/network/index.html",
    "revision": "0a568873a65604331bdc7d386834e581"
  },
  {
    "url": "pages/knowledgeBase/nginx/1.html",
    "revision": "47297c3a8dbae1e6a8b51cfb3eb7d6ad"
  },
  {
    "url": "pages/knowledgeBase/node/1.html",
    "revision": "a60ce4c88494e3d57d55a5b4c74d49a2"
  },
  {
    "url": "pages/knowledgeBase/optimization/1.html",
    "revision": "a9f3866935cd431fec89c6b9d7742992"
  },
  {
    "url": "pages/knowledgeBase/optimization/2.html",
    "revision": "87fda8037e5676706190a95199e14803"
  },
  {
    "url": "pages/knowledgeBase/optimization/3.html",
    "revision": "139dfd6fab66c188309001697a2bfb61"
  },
  {
    "url": "pages/knowledgeBase/react/1.html",
    "revision": "0e2b0db0b8209d4035631d47606585be"
  },
  {
    "url": "pages/knowledgeBase/react/2.html",
    "revision": "72e5af1e34bfed719de642fdd07167a5"
  },
  {
    "url": "pages/knowledgeBase/react/3.html",
    "revision": "3a6f178f42cadb6ef68b9f27b1d1f84a"
  },
  {
    "url": "pages/knowledgeBase/react/4.html",
    "revision": "4c2ea54e23f205edf903754e615366b0"
  },
  {
    "url": "pages/knowledgeBase/react/5.html",
    "revision": "72c611a064ef8854f836cc7aef9a5707"
  },
  {
    "url": "pages/knowledgeBase/react/6.html",
    "revision": "0da92a6d6508f5267fbe094f4c094154"
  },
  {
    "url": "pages/knowledgeBase/react/7.html",
    "revision": "879be381c24fbb783b43d3fcf21dcb7e"
  },
  {
    "url": "pages/knowledgeBase/react/8.html",
    "revision": "a15947a34cdf30508f0b52a5efd78292"
  },
  {
    "url": "pages/knowledgeBase/react/9.html",
    "revision": "dc587a3d8c25ae2895affa11daf2e904"
  },
  {
    "url": "pages/knowledgeBase/regularExpression/1.html",
    "revision": "cdfa07a0d38ad36109d0d3103685aa4c"
  },
  {
    "url": "pages/knowledgeBase/rollup/1.html",
    "revision": "97b571b6ab3a8c6bad0488674d1e9424"
  },
  {
    "url": "pages/knowledgeBase/security/1.html",
    "revision": "8adb8d437922b7a326aad4dec6b422c8"
  },
  {
    "url": "pages/knowledgeBase/sentry/index.html",
    "revision": "4f1672596a6fea374e539c39bc226d91"
  },
  {
    "url": "pages/knowledgeBase/typeScript/index.html",
    "revision": "7549a2930377b3bee680f97a99e5cd9f"
  },
  {
    "url": "pages/knowledgeBase/vue/1.html",
    "revision": "61605f751ab12adac73cf8c71226da6b"
  },
  {
    "url": "pages/knowledgeBase/vue/2.html",
    "revision": "da0f3c6eb0d020471a80025319005de3"
  },
  {
    "url": "pages/knowledgeBase/vue/3.html",
    "revision": "f581c2e0a0f89576e620d0ce5fd9183e"
  },
  {
    "url": "pages/knowledgeBase/vue/4.html",
    "revision": "17c6693d8eaede5a7eb0c41c2c9500eb"
  },
  {
    "url": "pages/knowledgeBase/vue/5.html",
    "revision": "3a991ec24dd6661d1d820a8f05e85e48"
  },
  {
    "url": "pages/knowledgeBase/vue/6.html",
    "revision": "aaf85ff0f5b1c20f7a83c2de7edf1c53"
  },
  {
    "url": "pages/knowledgeBase/vue/7.html",
    "revision": "f44c26085a4d32e81fa20a053741d488"
  },
  {
    "url": "pages/knowledgeBase/wechat/1.html",
    "revision": "06517f3275a12b6f9382faad0fbf373e"
  },
  {
    "url": "pages/knowledgeBase/微前端/1.html",
    "revision": "08597ba1ea0bcd383a11ce1fe58d5d99"
  },
  {
    "url": "pages/knowledgeBase/微前端/2.html",
    "revision": "cd14bcbf6917798e24591ddccccdf7ba"
  },
  {
    "url": "pages/knowledgeBase/微前端/3.html",
    "revision": "4d5d7aba2b0f083266fc2b72fc95273b"
  },
  {
    "url": "pages/knowledgeBase/数据结构/1.html",
    "revision": "787125330eef903bef0d82c9d2db86c2"
  },
  {
    "url": "pages/knowledgeBase/设计模式/index.html",
    "revision": "762544743b244cd6edc4cae90d4cacd6"
  },
  {
    "url": "pages/question/css/1.html",
    "revision": "c343197b23ecded54519c4778a326e03"
  },
  {
    "url": "pages/question/css/2.html",
    "revision": "ddd9c8cefde4c457bb3f0d7b529d37c1"
  },
  {
    "url": "pages/question/index.html",
    "revision": "e41c50fdde38cd03123680a56dc9c17f"
  },
  {
    "url": "pages/question/js/1.html",
    "revision": "6beeeedc1f4544d14dd886619025c317"
  },
  {
    "url": "pages/question/js/2.html",
    "revision": "a066bf4810ef0d372d8fbb6d60b19c03"
  },
  {
    "url": "pages/question/js/3.html",
    "revision": "f26715ba87682132946881be87f12465"
  },
  {
    "url": "pages/summary/folder1/1.html",
    "revision": "b807114da5a44440d9b60572ae868215"
  },
  {
    "url": "pages/summary/folder1/2.html",
    "revision": "4390fa48309560ae80d860927f0224fa"
  },
  {
    "url": "pages/summary/folder1/3.html",
    "revision": "89df0f7e7c0b6c92ae8578fce2dd24d7"
  },
  {
    "url": "pages/summary/folder1/4.html",
    "revision": "576d0769baee8eb75fa4006c6354e480"
  },
  {
    "url": "pages/summary/folder2/3.html",
    "revision": "c9475e0d7b104254cc9ba906cd72ad62"
  },
  {
    "url": "pages/summary/index.html",
    "revision": "b028039f2952d3e516bf645465bc0ae6"
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
