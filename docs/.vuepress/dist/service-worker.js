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
    "revision": "1a99293122d84af2baeac0c58161e646"
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
    "url": "assets/js/10.fddea95f.js",
    "revision": "6e5df65d51063fdd5c9ca89545e72444"
  },
  {
    "url": "assets/js/11.04cc3c75.js",
    "revision": "1a2504e3b7a492b053baef4a07189595"
  },
  {
    "url": "assets/js/12.db660a30.js",
    "revision": "c6a8aaa910c75ddc8fbe09fa74b500ad"
  },
  {
    "url": "assets/js/13.a00140ff.js",
    "revision": "39f3d87d3b3f6b44d3ed82ec19907eb2"
  },
  {
    "url": "assets/js/14.8dd829bc.js",
    "revision": "6162c22e9d8c0c1bb25cbb4c4cfcaf8e"
  },
  {
    "url": "assets/js/15.0daedf41.js",
    "revision": "edfe1f2332553d057a8ebc6e48e6800c"
  },
  {
    "url": "assets/js/16.e009ba4d.js",
    "revision": "f0aebca32a13fd8d6801f49c7790b68b"
  },
  {
    "url": "assets/js/17.9fb53a13.js",
    "revision": "57502d1e68a4c68fe4bacd1de2cf5f7b"
  },
  {
    "url": "assets/js/18.866970e1.js",
    "revision": "b0315da67c8aff44b1c013b34e710e06"
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
    "url": "assets/js/20.67f7bc54.js",
    "revision": "df907e50b455e184d6714b221acaa54c"
  },
  {
    "url": "assets/js/21.e7382608.js",
    "revision": "82eaa60a93426ef76fb75df25915ca36"
  },
  {
    "url": "assets/js/22.80774142.js",
    "revision": "26073d61d385d547fb5f5358754f46fe"
  },
  {
    "url": "assets/js/23.01f364d2.js",
    "revision": "8e8df54d55f4018d335e058f3618a20d"
  },
  {
    "url": "assets/js/24.25a9c79b.js",
    "revision": "2c33ea94bda4b1d4041bf92bb12747d6"
  },
  {
    "url": "assets/js/25.d2570d09.js",
    "revision": "4b0d2d31afa63457ae72853b972bb594"
  },
  {
    "url": "assets/js/26.834e1803.js",
    "revision": "d4e13ed19e28c93f78ef640329f0c138"
  },
  {
    "url": "assets/js/27.740f7888.js",
    "revision": "17ec4cb5741b6881c8e7efba16ff3042"
  },
  {
    "url": "assets/js/28.88a40da1.js",
    "revision": "96e6c70479813863eda966a5195f9b5d"
  },
  {
    "url": "assets/js/29.671e3428.js",
    "revision": "4dbabcb70aced92fd17a71e1754a3afd"
  },
  {
    "url": "assets/js/3.dde0216e.js",
    "revision": "9ea960917581fcf409495c997b197541"
  },
  {
    "url": "assets/js/30.fbca2c3b.js",
    "revision": "13d6c1c481adc5f7363a20fe3bc613b5"
  },
  {
    "url": "assets/js/31.630ad43f.js",
    "revision": "61da5ceeac4bb569391f69cf4087262a"
  },
  {
    "url": "assets/js/32.7776be55.js",
    "revision": "a53b0f7d745428ef7070bbba2d9f82aa"
  },
  {
    "url": "assets/js/33.5f536f15.js",
    "revision": "1560988caa111c5dd7d8b612b0413253"
  },
  {
    "url": "assets/js/34.beffd4e6.js",
    "revision": "be1026ce6a450841bc0ffea6a3e6f0bf"
  },
  {
    "url": "assets/js/35.a1b6b5ec.js",
    "revision": "f4e525d747fd8e7675b34f7735b639f6"
  },
  {
    "url": "assets/js/36.8a278581.js",
    "revision": "7e6695c1d17b9d6e809f82f6dac40936"
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
    "url": "assets/js/39.e64f89a0.js",
    "revision": "9b467eae7ee0c7d6a18543d98b9e2afd"
  },
  {
    "url": "assets/js/4.9f518c74.js",
    "revision": "fb9d35ccdf7a5f6b848009193de82e4f"
  },
  {
    "url": "assets/js/40.129d3e38.js",
    "revision": "1cef7ce1181aff21c767f7b1fbbeafdc"
  },
  {
    "url": "assets/js/41.0e79dcb5.js",
    "revision": "b73943e252bd764ed41ab12fa776210d"
  },
  {
    "url": "assets/js/42.0e380be6.js",
    "revision": "6158eb4ec8c63a0866ae202a8f285938"
  },
  {
    "url": "assets/js/43.b8e42aad.js",
    "revision": "86fe8ba81b6934304f0e7b987bac6a5a"
  },
  {
    "url": "assets/js/44.2da360cd.js",
    "revision": "c4fea66b7b1a6507217f7b9eba7f0109"
  },
  {
    "url": "assets/js/45.480a6e90.js",
    "revision": "65009728cdf3ff480ac9368b2a505329"
  },
  {
    "url": "assets/js/46.df58da19.js",
    "revision": "f1f39daa56c2c70fff03ab6c929f703c"
  },
  {
    "url": "assets/js/47.47b86df0.js",
    "revision": "13c39fdb0f4ecd97446679f478c9c145"
  },
  {
    "url": "assets/js/48.b625f4de.js",
    "revision": "893ef868c612858c93edb6f6bcba748c"
  },
  {
    "url": "assets/js/49.b72f4b02.js",
    "revision": "32e1bd808302e3323cddf1311aff0bfa"
  },
  {
    "url": "assets/js/5.8369cf44.js",
    "revision": "74b12689396a2a28d6d9b60090513904"
  },
  {
    "url": "assets/js/50.985d9349.js",
    "revision": "c7b868a3fd24bcce2def2c3e68234966"
  },
  {
    "url": "assets/js/51.daae8500.js",
    "revision": "7fdf9182469c5771850918b59a927386"
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
    "url": "assets/js/55.2bdbdb27.js",
    "revision": "bc5cfa4dfb94392f0a6901179c11fd49"
  },
  {
    "url": "assets/js/56.c36c8610.js",
    "revision": "dadc2b31ac2217d48388b6bc147d084d"
  },
  {
    "url": "assets/js/57.594d1863.js",
    "revision": "9261fe776e9cfb1f445179d2f3967826"
  },
  {
    "url": "assets/js/58.1b709cb7.js",
    "revision": "3ae3cb56b774fbd88ff7650537135879"
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
    "url": "assets/js/63.15097ead.js",
    "revision": "4543a3c63a1f405bbcf7cdb058b7fc09"
  },
  {
    "url": "assets/js/64.b8460677.js",
    "revision": "f1c7e71bb1f180fb6a9e4a8445f73c7a"
  },
  {
    "url": "assets/js/65.adf4ae5e.js",
    "revision": "2fddb05ad19ddaa7af47cbc1e2d90487"
  },
  {
    "url": "assets/js/66.ba5e38f4.js",
    "revision": "d14396c7a05316bfdf75e720b85ec726"
  },
  {
    "url": "assets/js/67.54d18f1f.js",
    "revision": "1ac2d9d59451671a9ca920d49383b3c7"
  },
  {
    "url": "assets/js/68.c6848d6c.js",
    "revision": "23298ebf31ac91aa54f0755210db0d72"
  },
  {
    "url": "assets/js/69.8efa2984.js",
    "revision": "221b43fbf77ce775d94aa463b45589fa"
  },
  {
    "url": "assets/js/7.90f4ae40.js",
    "revision": "ab15a6f1edb31cdaac3879d2002f7c36"
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
    "url": "assets/js/8.b4c057f5.js",
    "revision": "296682be4c33e2fc246dff2857fd8b96"
  },
  {
    "url": "assets/js/9.3f8c1dcf.js",
    "revision": "d6308ec20cd39c138e9b603f18594b87"
  },
  {
    "url": "assets/js/app.a429e67a.js",
    "revision": "aed3fb1ce822d2a464105c9128dcd230"
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
    "revision": "d7e3977f922aaaef25a42378c2e9bf76"
  },
  {
    "url": "pages/algorithm/index.html",
    "revision": "cef2da7ea536496603c9d103006066b0"
  },
  {
    "url": "pages/algorithm/排序算法.html",
    "revision": "17ef7f58a4a2d2bb4c7f2181203eda43"
  },
  {
    "url": "pages/knowledgeBase/browser/index.html",
    "revision": "27d200f95d60a361d097d8d670a3b946"
  },
  {
    "url": "pages/knowledgeBase/code/1.html",
    "revision": "0583115922c6518c94f8f2c8ca1fa2bf"
  },
  {
    "url": "pages/knowledgeBase/code/2.html",
    "revision": "a1278dcda80f8197a0fed08c1db9f6f6"
  },
  {
    "url": "pages/knowledgeBase/code/3.html",
    "revision": "ae719dbd4af973c84a638474831556d0"
  },
  {
    "url": "pages/knowledgeBase/css/index.html",
    "revision": "8ae3d83da9555f2e41e03a0018fc3783"
  },
  {
    "url": "pages/knowledgeBase/dataVisualization/1.html",
    "revision": "8f7a372a7a6995384a1a8a703e26c6b2"
  },
  {
    "url": "pages/knowledgeBase/docker/1.html",
    "revision": "7d6901da318aecd754599f1e42e780c1"
  },
  {
    "url": "pages/knowledgeBase/engineering/1.html",
    "revision": "12fe16da1196341ad1fa5d27f6de0280"
  },
  {
    "url": "pages/knowledgeBase/flutter/1.html",
    "revision": "060ac0964e4106aae2a63985318c975b"
  },
  {
    "url": "pages/knowledgeBase/html/index.html",
    "revision": "5af09879e4b976fe16858cf196215018"
  },
  {
    "url": "pages/knowledgeBase/index.html",
    "revision": "addb564ba78e502d72d7dd3a391691ed"
  },
  {
    "url": "pages/knowledgeBase/js/1.html",
    "revision": "fb0e2c098a020faba5d41bfff6ed31ac"
  },
  {
    "url": "pages/knowledgeBase/js/2.html",
    "revision": "f99d6dee5ddc09f216258f04d37df284"
  },
  {
    "url": "pages/knowledgeBase/js/3.html",
    "revision": "a54a453f093db879be7be757e0f8ed5e"
  },
  {
    "url": "pages/knowledgeBase/js/4.html",
    "revision": "2dc7b47f46a3c6d3f22cf42ab8e59d86"
  },
  {
    "url": "pages/knowledgeBase/js/5.html",
    "revision": "9112faec0e659f0db5e455909e5058ee"
  },
  {
    "url": "pages/knowledgeBase/miniProgram/1.html",
    "revision": "fd5250a51cab8b6cbd461e8ba6b76dfe"
  },
  {
    "url": "pages/knowledgeBase/network/index.html",
    "revision": "f4c23bc2532a15a4de3d543b00da989e"
  },
  {
    "url": "pages/knowledgeBase/nginx/1.html",
    "revision": "ac26319c6de3e8b4972b9e6d986f8868"
  },
  {
    "url": "pages/knowledgeBase/node/1.html",
    "revision": "53ddb2ae443efe66adc02065b7a777fb"
  },
  {
    "url": "pages/knowledgeBase/optimization/1.html",
    "revision": "95d8a855de8d16e11b962059d63da8e5"
  },
  {
    "url": "pages/knowledgeBase/optimization/2.html",
    "revision": "83dbabbe91b20b3fad06bc66801bd60b"
  },
  {
    "url": "pages/knowledgeBase/optimization/3.html",
    "revision": "65b512044050f824674ea906c305985e"
  },
  {
    "url": "pages/knowledgeBase/react/1.html",
    "revision": "692af0e2fe1f13bd05f242b197e939a4"
  },
  {
    "url": "pages/knowledgeBase/react/2.html",
    "revision": "31d81684906c537e86c11df206fdfd83"
  },
  {
    "url": "pages/knowledgeBase/react/3.html",
    "revision": "0369ce5949d5ac4b220d0fee9e13d5db"
  },
  {
    "url": "pages/knowledgeBase/react/4.html",
    "revision": "d416f28b4b55a42a84376c73f96e9f52"
  },
  {
    "url": "pages/knowledgeBase/react/5.html",
    "revision": "393d3e6e042342aecef233bb047a6512"
  },
  {
    "url": "pages/knowledgeBase/react/6.html",
    "revision": "eb03877a1dbffda04582189d36745fe4"
  },
  {
    "url": "pages/knowledgeBase/react/7.html",
    "revision": "5599f0319aa4df4f5ccc244a4d31fa58"
  },
  {
    "url": "pages/knowledgeBase/react/8.html",
    "revision": "698207d011de311392448bff9bd279ec"
  },
  {
    "url": "pages/knowledgeBase/react/9.html",
    "revision": "dcef22e21889cac1f359be9cca21a914"
  },
  {
    "url": "pages/knowledgeBase/regularExpression/1.html",
    "revision": "c3ea10c690eb6a9c4be63712110bdf5c"
  },
  {
    "url": "pages/knowledgeBase/rollup/1.html",
    "revision": "3a888d306eddf3dedd715dc554598cac"
  },
  {
    "url": "pages/knowledgeBase/security/1.html",
    "revision": "909b454955fe502048217c8b07417ede"
  },
  {
    "url": "pages/knowledgeBase/sentry/index.html",
    "revision": "5a11877c68cf2bc18aa9a243870b1d1b"
  },
  {
    "url": "pages/knowledgeBase/typeScript/index.html",
    "revision": "1eb7caf0893eddc01dd7e074bea713b6"
  },
  {
    "url": "pages/knowledgeBase/vue/1.html",
    "revision": "6d26727f32060f686f86de61f8bfcb43"
  },
  {
    "url": "pages/knowledgeBase/vue/2.html",
    "revision": "b04308be104d1d3f26221758f0c8589f"
  },
  {
    "url": "pages/knowledgeBase/vue/3.html",
    "revision": "28f6eb061d422185280f772c69854145"
  },
  {
    "url": "pages/knowledgeBase/vue/4.html",
    "revision": "ee8956de051963c9860a5c7ff78a52b6"
  },
  {
    "url": "pages/knowledgeBase/vue/5.html",
    "revision": "426bddb999bdcbd1f5aa65b67756d247"
  },
  {
    "url": "pages/knowledgeBase/vue/6.html",
    "revision": "1ab777e6e15f0640cf0478dd7f3c7395"
  },
  {
    "url": "pages/knowledgeBase/vue/7.html",
    "revision": "5b11342681dbb99318ebfe58130b97c7"
  },
  {
    "url": "pages/knowledgeBase/wechat/1.html",
    "revision": "a7083b211597987b8ea33c6ae610b7e1"
  },
  {
    "url": "pages/knowledgeBase/微前端/1.html",
    "revision": "cda8e56ac407c3c3f7bba322dbc8a65a"
  },
  {
    "url": "pages/knowledgeBase/微前端/2.html",
    "revision": "55b6cb5aade92812149aa7b2612983fa"
  },
  {
    "url": "pages/knowledgeBase/微前端/3.html",
    "revision": "3f856c1bf5f1568c18d11502a3707f2d"
  },
  {
    "url": "pages/knowledgeBase/数据结构/1.html",
    "revision": "c9ee37b7c2d786af72d277c10bfc8661"
  },
  {
    "url": "pages/knowledgeBase/设计模式/index.html",
    "revision": "fd61a59908546e0bbded11bd358df4fb"
  },
  {
    "url": "pages/question/css/1.html",
    "revision": "8af76df071070738dd8227d7598c2ef5"
  },
  {
    "url": "pages/question/css/2.html",
    "revision": "598739b169aca3707901777a9ac7123a"
  },
  {
    "url": "pages/question/index.html",
    "revision": "b5803743af7ff2fe42ff1a9ec0d4a8ab"
  },
  {
    "url": "pages/question/js/1.html",
    "revision": "4bb3ade7fc0aba3520a4e02cfb3ec002"
  },
  {
    "url": "pages/question/js/2.html",
    "revision": "dc96504eaf5508705c257fdcf4f69c3c"
  },
  {
    "url": "pages/question/js/3.html",
    "revision": "0b6e13007cba605e3c2bd10567e4e5b3"
  },
  {
    "url": "pages/summary/folder1/1.html",
    "revision": "1c9d74af3772c9742b6e4a249f4842b5"
  },
  {
    "url": "pages/summary/folder1/2.html",
    "revision": "c55b3b458e5e39415ac7676420ce0294"
  },
  {
    "url": "pages/summary/folder1/3.html",
    "revision": "23c008e824c6fcecb5755ccf70831a5a"
  },
  {
    "url": "pages/summary/folder1/4.html",
    "revision": "05a9c71b25b6a5ee0aa22b2502d30fec"
  },
  {
    "url": "pages/summary/folder2/3.html",
    "revision": "1e4222bdd3a5b00d81a61630514352a5"
  },
  {
    "url": "pages/summary/index.html",
    "revision": "fedfaa7092d8f82c5c427841e1a49ee0"
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
