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
    "revision": "663735e32d0430fe14d72ec6b1c1c12a"
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
    "url": "assets/js/12.db660a30.js",
    "revision": "c6a8aaa910c75ddc8fbe09fa74b500ad"
  },
  {
    "url": "assets/js/13.2bb8ea25.js",
    "revision": "5f87a0d3af0b3fa32138203d9e67b43d"
  },
  {
    "url": "assets/js/14.8dd829bc.js",
    "revision": "6162c22e9d8c0c1bb25cbb4c4cfcaf8e"
  },
  {
    "url": "assets/js/15.dd80cf6a.js",
    "revision": "20a7b1cb0cac4ac4eeeb287aa8baf8d0"
  },
  {
    "url": "assets/js/16.a286992d.js",
    "revision": "e2ca0921107a53421e647da94c01c941"
  },
  {
    "url": "assets/js/17.eab535ef.js",
    "revision": "7a9e67ca8076c29a087fd8076f3eeab4"
  },
  {
    "url": "assets/js/18.0fad8aa7.js",
    "revision": "8491353c84c7f11035c747a024e71ae1"
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
    "url": "assets/js/20.ac71a316.js",
    "revision": "82e7f08b3fc2fd70a9884866cf2807da"
  },
  {
    "url": "assets/js/21.51074eb0.js",
    "revision": "d84b1a7da7d4008f0540a088601b4d8d"
  },
  {
    "url": "assets/js/22.78742933.js",
    "revision": "74aef4118b645f76aef6fbfa23d45f17"
  },
  {
    "url": "assets/js/23.ad5a8a94.js",
    "revision": "6289e672fa62aa535042d984ee4f13bd"
  },
  {
    "url": "assets/js/24.7c90412d.js",
    "revision": "66e69054dc646e7c07e051cc512e2e23"
  },
  {
    "url": "assets/js/25.c5c391c1.js",
    "revision": "8b493d8ed377f4f2ae12f8ae237cbcb0"
  },
  {
    "url": "assets/js/26.a76b746f.js",
    "revision": "e56b424217bcc4dea439ef881e3222db"
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
    "url": "assets/js/29.66acf310.js",
    "revision": "aee45f5c44a2cfab50cbbeae024b378c"
  },
  {
    "url": "assets/js/3.b51f37ca.js",
    "revision": "6bd66d92e7cd79c8264610e48892dd69"
  },
  {
    "url": "assets/js/30.e030cd8d.js",
    "revision": "3780d71eff842814ed073c91c7c6193c"
  },
  {
    "url": "assets/js/31.ee7bad62.js",
    "revision": "81f3ccf2a695e652376d9b3e6633d6a9"
  },
  {
    "url": "assets/js/32.8b71a959.js",
    "revision": "3109d1b873713d98473fff6c6175cf9b"
  },
  {
    "url": "assets/js/33.a5806a43.js",
    "revision": "1ac4e0e0f525a7d50bc70a082551737b"
  },
  {
    "url": "assets/js/34.e213ef01.js",
    "revision": "5139775a234873ff96429c79a50fa7c0"
  },
  {
    "url": "assets/js/35.6ea2ec90.js",
    "revision": "44c2c2a18ba3617ea5e1845018026736"
  },
  {
    "url": "assets/js/36.95d59c08.js",
    "revision": "e08854954f4e2baf4860d33a839e523b"
  },
  {
    "url": "assets/js/37.38835af3.js",
    "revision": "f76913f3dbb7c4923fdfbf38651c2475"
  },
  {
    "url": "assets/js/38.2e9f917c.js",
    "revision": "5731d9d4b976c0368bc94e0fa24b6fea"
  },
  {
    "url": "assets/js/39.dd707582.js",
    "revision": "4dc8ae79e9e14df4fc9c7fd4aaabb51e"
  },
  {
    "url": "assets/js/4.985a7118.js",
    "revision": "7a27a6dea6443f8c540bbfb880c5bb75"
  },
  {
    "url": "assets/js/40.47536958.js",
    "revision": "a9118c3ef91556fa0d94fbe00b681a9e"
  },
  {
    "url": "assets/js/41.9c4512b9.js",
    "revision": "51c0ea45aa31a4c45ba3b3b1f63b966c"
  },
  {
    "url": "assets/js/42.b5cd0499.js",
    "revision": "7e63be819628af30ecf979bc3dc09552"
  },
  {
    "url": "assets/js/43.3950f898.js",
    "revision": "f98c5a1117aeeb3fadbd903df971381a"
  },
  {
    "url": "assets/js/44.58f67c4c.js",
    "revision": "50fd96121649f39c7b42c8bf22af1820"
  },
  {
    "url": "assets/js/45.1b873d76.js",
    "revision": "294803b8378d64c8dc0e715b83d23fe4"
  },
  {
    "url": "assets/js/46.345c4aba.js",
    "revision": "976bee0da36f53e61e5fc4dbff971da6"
  },
  {
    "url": "assets/js/47.1921e19a.js",
    "revision": "12c462910b07cbf785d61a68b46c2381"
  },
  {
    "url": "assets/js/48.bbf419d3.js",
    "revision": "f83c370ac196149d7d078714599a9b76"
  },
  {
    "url": "assets/js/49.43d0633e.js",
    "revision": "6a0e680fde2f9f0ee1b5ed8d399aa21d"
  },
  {
    "url": "assets/js/5.49a2ce40.js",
    "revision": "c13f3e3be84da4a6660f6156b743ede2"
  },
  {
    "url": "assets/js/50.a2acb2bc.js",
    "revision": "e8d81015aca89090d2581ca553aad2a5"
  },
  {
    "url": "assets/js/51.35d83ae2.js",
    "revision": "08ec194a895b352cbe500ccb7ec58eed"
  },
  {
    "url": "assets/js/52.18aa0238.js",
    "revision": "c0731526884cfcacf187bba1fa766b0b"
  },
  {
    "url": "assets/js/53.bea2b0f6.js",
    "revision": "b258c48b3ac429d485078d456e9fa99e"
  },
  {
    "url": "assets/js/54.e685d011.js",
    "revision": "365b32932bcc86b65555eca9d50bd99b"
  },
  {
    "url": "assets/js/55.6b79cd82.js",
    "revision": "f9a94dd225a6de2794e1ef2998acf186"
  },
  {
    "url": "assets/js/56.f9532bd1.js",
    "revision": "77ba095d3c319f6dcd17e01ae0f94b8a"
  },
  {
    "url": "assets/js/57.309f3f4e.js",
    "revision": "eb599e91124fe97ad4ebfb4bff49c3db"
  },
  {
    "url": "assets/js/58.80c3e112.js",
    "revision": "94ab0f71fb2468d3b4115e79fca8bdac"
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
    "url": "assets/js/60.0b2f1670.js",
    "revision": "4eccc7ad0c051c2aada1cec607d755b3"
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
    "url": "assets/js/63.15097ead.js",
    "revision": "4543a3c63a1f405bbcf7cdb058b7fc09"
  },
  {
    "url": "assets/js/64.c52ca045.js",
    "revision": "c633db009b4f8c5dd68c567d81c6de79"
  },
  {
    "url": "assets/js/65.b05ce0e2.js",
    "revision": "9e28fd0a720c9d27da80af63f3d80b6c"
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
    "url": "assets/js/68.98bcd3c3.js",
    "revision": "4499a5ad89ff6e152c3f077b360fcffb"
  },
  {
    "url": "assets/js/69.1a7dd647.js",
    "revision": "38e56f9d99832e279de50b519fcbcd3e"
  },
  {
    "url": "assets/js/7.5942b600.js",
    "revision": "70dc12029ef718df555b4cc25620d3cb"
  },
  {
    "url": "assets/js/70.593f7c1b.js",
    "revision": "7d879911e3417f2cd24237dba7907195"
  },
  {
    "url": "assets/js/8.0c2c994c.js",
    "revision": "db1e5a36f0903f3488135292457bce73"
  },
  {
    "url": "assets/js/9.3f8c1dcf.js",
    "revision": "d6308ec20cd39c138e9b603f18594b87"
  },
  {
    "url": "assets/js/app.3e3365fb.js",
    "revision": "831eab00b1e8bdaacef470f89333de7f"
  },
  {
    "url": "images/logo.png",
    "revision": "a7ce492a1928707e2a1ad8ccb4e4d15d"
  },
  {
    "url": "index.html",
    "revision": "bb35e12a70cff584024255ba75b6d5bb"
  },
  {
    "url": "pages/algorithm/index.html",
    "revision": "d05da1b73302c8e8b1ac139f66973de5"
  },
  {
    "url": "pages/algorithm/排序算法.html",
    "revision": "f9240474bfd1377284b354c633a5d760"
  },
  {
    "url": "pages/knowledgeBase/browser/index.html",
    "revision": "9c8f50038a0c38610d3f61c857dd4fc1"
  },
  {
    "url": "pages/knowledgeBase/code/1.html",
    "revision": "b171a8cb5a5fef8e0e0f21696fd5be99"
  },
  {
    "url": "pages/knowledgeBase/code/2.html",
    "revision": "f7951b00557753a0eb4de115ab5c1357"
  },
  {
    "url": "pages/knowledgeBase/code/3.html",
    "revision": "bdd50c6bb03376f1a240bc2c5cd5bfaf"
  },
  {
    "url": "pages/knowledgeBase/css/index.html",
    "revision": "63ec35ea42c1750279976c045f84c6b7"
  },
  {
    "url": "pages/knowledgeBase/dataVisualization/1.html",
    "revision": "de3cd2a9dbcec94a2f1409b65a11ab99"
  },
  {
    "url": "pages/knowledgeBase/designMode/1.html",
    "revision": "a69904941d4863b46b53eb922ebacaf1"
  },
  {
    "url": "pages/knowledgeBase/docker/1.html",
    "revision": "e6fce78d8c39ebbc96571bfe21f6aa66"
  },
  {
    "url": "pages/knowledgeBase/engineering/1.html",
    "revision": "727d3d003473ea49276f641deaa05b8a"
  },
  {
    "url": "pages/knowledgeBase/flutter/1.html",
    "revision": "73ad68c1a5acbc1e13687657fcca5ea7"
  },
  {
    "url": "pages/knowledgeBase/html/index.html",
    "revision": "c0570bf18c59830b94fcaae41802dc1b"
  },
  {
    "url": "pages/knowledgeBase/index.html",
    "revision": "98386a1b3a526db8c4ab3d4a63c580b0"
  },
  {
    "url": "pages/knowledgeBase/js/1.html",
    "revision": "9061ba0a311d759fe407a9f7c7e941ab"
  },
  {
    "url": "pages/knowledgeBase/js/2.html",
    "revision": "4fb5183e204d6d04dc2d37849ccf114a"
  },
  {
    "url": "pages/knowledgeBase/js/3.html",
    "revision": "4ad59d0399ac6dfa5755ccb1c5b5c646"
  },
  {
    "url": "pages/knowledgeBase/js/4.html",
    "revision": "285a97ca7f1d14178a51367ffbb3109d"
  },
  {
    "url": "pages/knowledgeBase/js/5.html",
    "revision": "bde157fbef2612934d9bfd201ba13f6c"
  },
  {
    "url": "pages/knowledgeBase/miniProgram/1.html",
    "revision": "dacea136879df38d03fbb8f60da4c480"
  },
  {
    "url": "pages/knowledgeBase/network/index.html",
    "revision": "9f66f6f9863cd41c941de19faf1d5b2b"
  },
  {
    "url": "pages/knowledgeBase/nginx/1.html",
    "revision": "ddbc8146652087a43527d2b3cd349a90"
  },
  {
    "url": "pages/knowledgeBase/node/1.html",
    "revision": "327d1bae348ee79e9c9b256b147aadad"
  },
  {
    "url": "pages/knowledgeBase/optimization/1.html",
    "revision": "16d13e2eac1bebe4852e41816294bfd2"
  },
  {
    "url": "pages/knowledgeBase/optimization/2.html",
    "revision": "9b5ec16a04cb23108f5d42e4f2239af9"
  },
  {
    "url": "pages/knowledgeBase/optimization/3.html",
    "revision": "4b3e899111f9f4e34c68cef07d57071a"
  },
  {
    "url": "pages/knowledgeBase/react/1.html",
    "revision": "f4278d22de6af6e3501c05ac2a9573c5"
  },
  {
    "url": "pages/knowledgeBase/react/2.html",
    "revision": "7b85629f75273858de9a2a630f3031fe"
  },
  {
    "url": "pages/knowledgeBase/react/3.html",
    "revision": "5823b57fdcbe0a1a4c120846fffd0f01"
  },
  {
    "url": "pages/knowledgeBase/react/4.html",
    "revision": "9adfce66c0302f74ae7fbfb9ecda42a1"
  },
  {
    "url": "pages/knowledgeBase/react/5.html",
    "revision": "992e79a818a76d02eb08c88b6fc58b62"
  },
  {
    "url": "pages/knowledgeBase/react/6.html",
    "revision": "d8e73493b20fe108a5013cef3f6ac0d2"
  },
  {
    "url": "pages/knowledgeBase/react/7.html",
    "revision": "33ffa8b7d960693580349604a60763f6"
  },
  {
    "url": "pages/knowledgeBase/react/8.html",
    "revision": "e56cbe359dc1bba6bcfb68dc98ffa037"
  },
  {
    "url": "pages/knowledgeBase/react/9.html",
    "revision": "7fe292a24e9ba61468593d59117782c1"
  },
  {
    "url": "pages/knowledgeBase/regularExpression/1.html",
    "revision": "3d19e6c3ee841f1257a865222afdd639"
  },
  {
    "url": "pages/knowledgeBase/rollup/1.html",
    "revision": "54eb492fa4f137522982fbfb23f84c36"
  },
  {
    "url": "pages/knowledgeBase/security/1.html",
    "revision": "25faed228e72c55db00d895a51395667"
  },
  {
    "url": "pages/knowledgeBase/sentry/index.html",
    "revision": "c9f5a799d330d7e86099eb1d6581267d"
  },
  {
    "url": "pages/knowledgeBase/typeScript/index.html",
    "revision": "b0bd9ece973c0158165117b958bdbb52"
  },
  {
    "url": "pages/knowledgeBase/vue/1.html",
    "revision": "9526ae9039e20603fe8012a6dd398b37"
  },
  {
    "url": "pages/knowledgeBase/vue/2.html",
    "revision": "b7a8f60bf1e034e30d62fe107c3beca9"
  },
  {
    "url": "pages/knowledgeBase/vue/3.html",
    "revision": "731e64684df04ef92f49030dcc93ea4e"
  },
  {
    "url": "pages/knowledgeBase/vue/4.html",
    "revision": "26377a45f1b25670657d4148f3c32541"
  },
  {
    "url": "pages/knowledgeBase/vue/5.html",
    "revision": "7be15bddf8082f7ab05a80e44a27ca5c"
  },
  {
    "url": "pages/knowledgeBase/vue/6.html",
    "revision": "663229abb5eaa475ccbd7d1bdbc1b7e3"
  },
  {
    "url": "pages/knowledgeBase/vue/7.html",
    "revision": "2964c29f8a4942bf1bcb8dff3bdec04b"
  },
  {
    "url": "pages/knowledgeBase/wechat/1.html",
    "revision": "b6db2453c94c69033c69e5dc92f481b9"
  },
  {
    "url": "pages/knowledgeBase/微前端/1.html",
    "revision": "5ef0c42ee2ff45e257e9a832b58d38dc"
  },
  {
    "url": "pages/knowledgeBase/微前端/2.html",
    "revision": "00fd5f264b0c962e0289326f951ec5fb"
  },
  {
    "url": "pages/knowledgeBase/微前端/3.html",
    "revision": "da2895b0499d25c4cb3d7e34ba17a50f"
  },
  {
    "url": "pages/knowledgeBase/数据结构/1.html",
    "revision": "ba9d5efe8575537b3b9fd0d7072e51fc"
  },
  {
    "url": "pages/question/css/1.html",
    "revision": "4086023c23d3afbaa29e8d45727e2a99"
  },
  {
    "url": "pages/question/css/2.html",
    "revision": "ba05b070b2d0fcf203cdee61399ad74c"
  },
  {
    "url": "pages/question/index.html",
    "revision": "23514b78d1b04cf8fea0eed8f84db832"
  },
  {
    "url": "pages/question/js/1.html",
    "revision": "e8092ab0d5d43fd4ee48c3277420e8fd"
  },
  {
    "url": "pages/question/js/2.html",
    "revision": "9cd5f2322d860257e65101914a2f3ffc"
  },
  {
    "url": "pages/question/js/3.html",
    "revision": "a3c59e2d9bb4922c8a229e073d13b347"
  },
  {
    "url": "pages/summary/folder1/1.html",
    "revision": "1a7e213f141289c73903172d7aef4456"
  },
  {
    "url": "pages/summary/folder1/2.html",
    "revision": "c44ff6de8f8cb37f782e95afc733cf0d"
  },
  {
    "url": "pages/summary/folder2/3.html",
    "revision": "bc08843e68534037ed197ccf2d75b311"
  },
  {
    "url": "pages/summary/index.html",
    "revision": "f2cf44c72ae2f9647a3f644cc2a81dd0"
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
