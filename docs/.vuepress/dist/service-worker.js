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
    "revision": "7925578fc11444c7f178baec70729d61"
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
    "url": "assets/js/10.fbdde808.js",
    "revision": "5834557651358289b9a96415ba9e55b6"
  },
  {
    "url": "assets/js/11.bbc12eb8.js",
    "revision": "b76e0745c10157f99226e9315d9069b8"
  },
  {
    "url": "assets/js/12.2b910283.js",
    "revision": "ee547c5f1abbf26569def9e17f3230db"
  },
  {
    "url": "assets/js/13.cd21f116.js",
    "revision": "58460e59c4319c14fa6f4c2da0c07248"
  },
  {
    "url": "assets/js/14.dd100dae.js",
    "revision": "08419252f2375d51bf65980c17fb03b2"
  },
  {
    "url": "assets/js/15.9c57ab3a.js",
    "revision": "9cde3245012a11ef8b0179e44136e064"
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
    "url": "assets/js/18.f97a16fa.js",
    "revision": "04699277ff8ea333f2e7d09c25c31e84"
  },
  {
    "url": "assets/js/19.cf7a141f.js",
    "revision": "92d73b3a6eceb89b96cd03c8beb37a2c"
  },
  {
    "url": "assets/js/2.132bf881.js",
    "revision": "5e392ea44bf5ea0cf42eec449494fda2"
  },
  {
    "url": "assets/js/20.64e82be3.js",
    "revision": "648ce97ee582335c08d28be44c8b6273"
  },
  {
    "url": "assets/js/21.3cc5e5a9.js",
    "revision": "c46c3b7cbc9160387e6e86f5162c8e97"
  },
  {
    "url": "assets/js/22.e7f11c05.js",
    "revision": "e41a3c7fe40bb4800e465a9d066af376"
  },
  {
    "url": "assets/js/23.1d7c72aa.js",
    "revision": "2aa2f42cd9947c929692aee26f8d32d7"
  },
  {
    "url": "assets/js/24.bcc0f457.js",
    "revision": "d1596794ae58219fdbe3278ab3ef1062"
  },
  {
    "url": "assets/js/25.b4f9c45d.js",
    "revision": "a839682ef4a62f6ee3d12cf242f46cd1"
  },
  {
    "url": "assets/js/26.00b0ed94.js",
    "revision": "85098fa6d65ed307b3e440efdd533cef"
  },
  {
    "url": "assets/js/27.a903fd59.js",
    "revision": "2316f8020c3974fe9a269249ab14d8bf"
  },
  {
    "url": "assets/js/28.aac4c438.js",
    "revision": "573b1af578629a5e801136aa1006f526"
  },
  {
    "url": "assets/js/29.66acf310.js",
    "revision": "aee45f5c44a2cfab50cbbeae024b378c"
  },
  {
    "url": "assets/js/3.b51f37ca.js",
    "revision": "6bd66d92e7cd79c8264610e48892dd69"
  },
  {
    "url": "assets/js/30.f03b24c1.js",
    "revision": "67917b23e9c795211d0c37b724a09b5f"
  },
  {
    "url": "assets/js/31.a83cd578.js",
    "revision": "852f5db955151a40fd72f2659bd2a200"
  },
  {
    "url": "assets/js/32.5e25ff7d.js",
    "revision": "a53b0f7d745428ef7070bbba2d9f82aa"
  },
  {
    "url": "assets/js/33.a5806a43.js",
    "revision": "1ac4e0e0f525a7d50bc70a082551737b"
  },
  {
    "url": "assets/js/34.b5465da5.js",
    "revision": "57ff20d698c03ff1e4783f865ee870e9"
  },
  {
    "url": "assets/js/35.62954c75.js",
    "revision": "679e9b44fc0bc5fce6b39877ddf8b386"
  },
  {
    "url": "assets/js/36.9cac6de2.js",
    "revision": "c2af204f0d1841c37ad75fb6625591fb"
  },
  {
    "url": "assets/js/37.6ca98cf5.js",
    "revision": "4844fdac7fdd3af4b12e748866380bd9"
  },
  {
    "url": "assets/js/38.8dbbab7f.js",
    "revision": "76e0d9f0e642c22e4bdc5e0c9b3ae3e0"
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
    "url": "assets/js/40.aa40446a.js",
    "revision": "36534e9debaa55c73b25d18882d69862"
  },
  {
    "url": "assets/js/41.d8ad37ef.js",
    "revision": "2848442b454f462007ee4a2911f6c1d8"
  },
  {
    "url": "assets/js/42.b5cd0499.js",
    "revision": "7e63be819628af30ecf979bc3dc09552"
  },
  {
    "url": "assets/js/43.e2f051ab.js",
    "revision": "12b2b1eb8a7a706e20f2ccec6a47b9cc"
  },
  {
    "url": "assets/js/44.6fba2b83.js",
    "revision": "4a4e3582dfe2e5d08e151b2aaad2a852"
  },
  {
    "url": "assets/js/45.b3a6bbf3.js",
    "revision": "66ad11adda55e960616738bd0858d02d"
  },
  {
    "url": "assets/js/46.345c4aba.js",
    "revision": "976bee0da36f53e61e5fc4dbff971da6"
  },
  {
    "url": "assets/js/47.d83ff278.js",
    "revision": "c8a648d31d20587f40d01b8fa65142d3"
  },
  {
    "url": "assets/js/48.576d29a7.js",
    "revision": "d281ab144d9b1304c6dc63bb467ca8cc"
  },
  {
    "url": "assets/js/49.96fa005f.js",
    "revision": "f08e7e69626f077e16e5bb00bef23753"
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
    "url": "assets/js/51.1d30c09d.js",
    "revision": "5120e49036c888e4a7592b939cbb2e55"
  },
  {
    "url": "assets/js/52.82750939.js",
    "revision": "f935aab668ca6164319011c31f5614d5"
  },
  {
    "url": "assets/js/53.b522fce6.js",
    "revision": "a211f7cd170fffbcd391edec53c606e1"
  },
  {
    "url": "assets/js/54.e9b7e942.js",
    "revision": "f41886878f2f98a4246db83ba8c7301b"
  },
  {
    "url": "assets/js/55.6b79cd82.js",
    "revision": "f9a94dd225a6de2794e1ef2998acf186"
  },
  {
    "url": "assets/js/56.e3ed5a9f.js",
    "revision": "173f626803675e95c45ce1f8fa40acc6"
  },
  {
    "url": "assets/js/57.7d16f15a.js",
    "revision": "7600a91b17ce38b4f9ceb04809280f83"
  },
  {
    "url": "assets/js/58.e1df5e0c.js",
    "revision": "dde9bffa351d7a4ef2d5b1ed7c63a53d"
  },
  {
    "url": "assets/js/59.7cf0d07e.js",
    "revision": "bc9be650bdcad017f035b23e1dc6b90f"
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
    "url": "assets/js/62.ba4dc878.js",
    "revision": "918dffa9579c65196c0ddbc63d773181"
  },
  {
    "url": "assets/js/63.683212a2.js",
    "revision": "989c7c755e4ad05a0dcfd240873990fa"
  },
  {
    "url": "assets/js/64.15a8b54d.js",
    "revision": "a134e3996e085111a92e5e9878804f4f"
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
    "url": "assets/js/67.23040fad.js",
    "revision": "ae9600b88a935835345085592d7e262f"
  },
  {
    "url": "assets/js/68.c6848d6c.js",
    "revision": "23298ebf31ac91aa54f0755210db0d72"
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
    "url": "assets/js/8.d25578b5.js",
    "revision": "bffd6811fbe136a186b9982cb00864c0"
  },
  {
    "url": "assets/js/9.3f8c1dcf.js",
    "revision": "d6308ec20cd39c138e9b603f18594b87"
  },
  {
    "url": "assets/js/app.77d2764b.js",
    "revision": "b317943469e7d4b4f539f6c261126200"
  },
  {
    "url": "index.html",
    "revision": "b4ab24f371403c09cc8b3507cc6b0edc"
  },
  {
    "url": "logo.png",
    "revision": "a7ce492a1928707e2a1ad8ccb4e4d15d"
  },
  {
    "url": "pages/algorithm/index.html",
    "revision": "4a1336778e74856f5dc786bf5f5f11dc"
  },
  {
    "url": "pages/algorithm/排序算法.html",
    "revision": "d1a6ee81868abea4b7b7d146cb12456b"
  },
  {
    "url": "pages/knowledgeBase/browser/index.html",
    "revision": "0b0f50f363f7c127e77a510ca5496394"
  },
  {
    "url": "pages/knowledgeBase/code/1.html",
    "revision": "7f004b23b0b922720b98e1a52d58a100"
  },
  {
    "url": "pages/knowledgeBase/code/2.html",
    "revision": "7195af8fa94c41af952eb6bdb3c82d66"
  },
  {
    "url": "pages/knowledgeBase/code/3.html",
    "revision": "700692b0cff47f992d33fec6b1886f16"
  },
  {
    "url": "pages/knowledgeBase/css/index.html",
    "revision": "e3dbd397809347c58d71e6d5fcd19988"
  },
  {
    "url": "pages/knowledgeBase/dataVisualization/1.html",
    "revision": "a6062d4565e70f60160a065351c23867"
  },
  {
    "url": "pages/knowledgeBase/designMode/1.html",
    "revision": "a77a8f0fe12184d9d29110a257ac3920"
  },
  {
    "url": "pages/knowledgeBase/docker/1.html",
    "revision": "995084e1f4954c553ca46a22a951bb95"
  },
  {
    "url": "pages/knowledgeBase/engineering/1.html",
    "revision": "e12d69301ab00b227984ceccf975da6f"
  },
  {
    "url": "pages/knowledgeBase/flutter/1.html",
    "revision": "88b7dbdb8b65d67c37e4d1c680600880"
  },
  {
    "url": "pages/knowledgeBase/html/index.html",
    "revision": "385e524b7be647a1f9fde5e84d29a00c"
  },
  {
    "url": "pages/knowledgeBase/index.html",
    "revision": "f7681b05e55de2374c0aaeef2e5d69ad"
  },
  {
    "url": "pages/knowledgeBase/js/1.html",
    "revision": "882c5a98ff93d1ab79c6bb50e46af474"
  },
  {
    "url": "pages/knowledgeBase/js/2.html",
    "revision": "d4c820e5141749ab14f886cff96ed714"
  },
  {
    "url": "pages/knowledgeBase/js/3.html",
    "revision": "cb7903304a8736d6693fd8a4ed1aa002"
  },
  {
    "url": "pages/knowledgeBase/js/4.html",
    "revision": "07d615d50731f7cd5b713d5862ae50b1"
  },
  {
    "url": "pages/knowledgeBase/js/5.html",
    "revision": "39df730554916f3a49377198a1bba4ab"
  },
  {
    "url": "pages/knowledgeBase/miniProgram/1.html",
    "revision": "18cead1730c79d137aaa6596a96a8655"
  },
  {
    "url": "pages/knowledgeBase/network/index.html",
    "revision": "e1e1a10bfa6fc2bcbc943053d0490242"
  },
  {
    "url": "pages/knowledgeBase/nginx/1.html",
    "revision": "d1b938408be208af808ee86c2c86da9d"
  },
  {
    "url": "pages/knowledgeBase/node/1.html",
    "revision": "7df6e7ee78dd5f41d90885c7e768d84f"
  },
  {
    "url": "pages/knowledgeBase/optimization/1.html",
    "revision": "5e5922f113457c879096c6cdc1a97f86"
  },
  {
    "url": "pages/knowledgeBase/optimization/2.html",
    "revision": "86fd2ed5c49b66c605f30c4cb4bedd20"
  },
  {
    "url": "pages/knowledgeBase/optimization/3.html",
    "revision": "544781c249b6cc87673c8c18b92a0dd3"
  },
  {
    "url": "pages/knowledgeBase/react/1.html",
    "revision": "9505f83c6ee5efa7acfd737500d03789"
  },
  {
    "url": "pages/knowledgeBase/react/2.html",
    "revision": "5092a2d9dc00d0e20761e010b190379d"
  },
  {
    "url": "pages/knowledgeBase/react/3.html",
    "revision": "4d4ec31db00cfa437925772c8b8ed9af"
  },
  {
    "url": "pages/knowledgeBase/react/4.html",
    "revision": "5b09b68ee95c0cff9ed9a663044df87c"
  },
  {
    "url": "pages/knowledgeBase/react/5.html",
    "revision": "fbe0b8c66f7db645ca10ac4cfbe57802"
  },
  {
    "url": "pages/knowledgeBase/react/6.html",
    "revision": "e686d3ba322df8c4bccc56edb634ef93"
  },
  {
    "url": "pages/knowledgeBase/react/7.html",
    "revision": "eefb8f61a54ef4cccab9ef3adc40a865"
  },
  {
    "url": "pages/knowledgeBase/react/8.html",
    "revision": "87ef25f5f38618ef1862878236fcf151"
  },
  {
    "url": "pages/knowledgeBase/react/9.html",
    "revision": "7fcdf58aa770c59ba84261b5a818b678"
  },
  {
    "url": "pages/knowledgeBase/regularExpression/1.html",
    "revision": "f4856439af2fe48a4f27752b0fdc9f16"
  },
  {
    "url": "pages/knowledgeBase/rollup/1.html",
    "revision": "13dd21a7e14788736f46d5a53b9c3b93"
  },
  {
    "url": "pages/knowledgeBase/security/1.html",
    "revision": "52fb0baaa096f65373777d8b59b0a81f"
  },
  {
    "url": "pages/knowledgeBase/sentry/index.html",
    "revision": "794e7f1a59cffb53ff0121947358bf0f"
  },
  {
    "url": "pages/knowledgeBase/typeScript/index.html",
    "revision": "c1dd9b4a4da63517ba279b0af1d51a22"
  },
  {
    "url": "pages/knowledgeBase/vue/1.html",
    "revision": "41e127fb7dc1d034d2e6ee81c5ccbeb9"
  },
  {
    "url": "pages/knowledgeBase/vue/2.html",
    "revision": "1a21725bfc5d72f150133b14e9e92b5a"
  },
  {
    "url": "pages/knowledgeBase/vue/3.html",
    "revision": "7db9c97702d8e99e1f7b78c8b8a987fa"
  },
  {
    "url": "pages/knowledgeBase/vue/4.html",
    "revision": "40642e2cd5d26ce95eb986c1e2919ea3"
  },
  {
    "url": "pages/knowledgeBase/vue/5.html",
    "revision": "897b3cc8d2f11f3f962483c2418c3837"
  },
  {
    "url": "pages/knowledgeBase/vue/6.html",
    "revision": "9d01c79d6c1b128ea53cdae158f213de"
  },
  {
    "url": "pages/knowledgeBase/vue/7.html",
    "revision": "73ec074c43a850bd2218f941dee75273"
  },
  {
    "url": "pages/knowledgeBase/wechat/1.html",
    "revision": "f9043704c870f43a6aad0ab8aba2d36b"
  },
  {
    "url": "pages/knowledgeBase/微前端/1.html",
    "revision": "7ce5c788f1802052c1049f2307362938"
  },
  {
    "url": "pages/knowledgeBase/微前端/2.html",
    "revision": "0e9b5f52be6826932f36f7c37aa20a59"
  },
  {
    "url": "pages/knowledgeBase/微前端/3.html",
    "revision": "bfbee42c415454eb88a8b0127d14d52a"
  },
  {
    "url": "pages/knowledgeBase/数据结构/1.html",
    "revision": "595231287f597e5b7aa61ce0dc8fbbbd"
  },
  {
    "url": "pages/question/css/1.html",
    "revision": "6033a62821bd5a0718a655c2967908fd"
  },
  {
    "url": "pages/question/css/2.html",
    "revision": "22e94ca93f9f4abfa52a6a7fa5eb6628"
  },
  {
    "url": "pages/question/index.html",
    "revision": "048bfbfc2428fd94359692eea8ce0ce4"
  },
  {
    "url": "pages/question/js/1.html",
    "revision": "6c423a22a874753050b1c3f1959f4902"
  },
  {
    "url": "pages/question/js/2.html",
    "revision": "4dc3a825a70a974b86cdd95cc1289c00"
  },
  {
    "url": "pages/question/js/3.html",
    "revision": "3f74eee1c09ef57cb4d357ce8b034bc4"
  },
  {
    "url": "pages/summary/folder1/1.html",
    "revision": "e660088f492c2003ed78f625f571c4e8"
  },
  {
    "url": "pages/summary/folder1/2.html",
    "revision": "d977e13ac6deeed5f919cb25990d99e9"
  },
  {
    "url": "pages/summary/folder2/3.html",
    "revision": "4b4813399a29074d54507b94292cdbbe"
  },
  {
    "url": "pages/summary/index.html",
    "revision": "7404dbe6fe45d9eae78a63c4e62fafed"
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
