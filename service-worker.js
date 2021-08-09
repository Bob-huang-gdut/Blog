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
    "revision": "7be3792fa669ccc30f8cef38615d7dd5"
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
    "url": "assets/js/11.4e199d04.js",
    "revision": "cf152de1c4682e73ca54abcd95bed3a2"
  },
  {
    "url": "assets/js/12.1d8a7226.js",
    "revision": "0966ad7f626a82752e167ff8b0b5d460"
  },
  {
    "url": "assets/js/13.095ae935.js",
    "revision": "dd6ccfb94099fc31a784f57992760323"
  },
  {
    "url": "assets/js/14.327341ad.js",
    "revision": "8ab55d711c42009181fe199d8399bbdf"
  },
  {
    "url": "assets/js/15.9af02539.js",
    "revision": "c5bbcf3fa110f867597804379cd5a307"
  },
  {
    "url": "assets/js/16.84cff81d.js",
    "revision": "4d2de15f4e487422b0dc6c87c00c9ee6"
  },
  {
    "url": "assets/js/17.eb4b1666.js",
    "revision": "4499ee6febb3994a5233fe94446ba4c2"
  },
  {
    "url": "assets/js/18.ce56af00.js",
    "revision": "59531e8f6285079567419071600bc7a7"
  },
  {
    "url": "assets/js/19.d1c81d35.js",
    "revision": "9f68816bdb581a614c2765b59f093998"
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
    "url": "assets/js/21.18cf81ef.js",
    "revision": "d66c296b619754fe9f78e57619f047a3"
  },
  {
    "url": "assets/js/22.38c81937.js",
    "revision": "0bbedf2f901bd6b43a02fddc12deacfa"
  },
  {
    "url": "assets/js/23.c00ba308.js",
    "revision": "eaa300917470f3d0423452c885995cb9"
  },
  {
    "url": "assets/js/24.182bdb53.js",
    "revision": "19b45adcbb8ae8d023bc86bd27fcb923"
  },
  {
    "url": "assets/js/25.a84bfc0c.js",
    "revision": "74bed4c405c80096a0f272adf5468b16"
  },
  {
    "url": "assets/js/26.fedef378.js",
    "revision": "3e8119af8d2e7fd87c364a261a47d780"
  },
  {
    "url": "assets/js/27.13398e43.js",
    "revision": "163350e2f503c12650e68740c96c6cca"
  },
  {
    "url": "assets/js/28.7edb13c7.js",
    "revision": "80851cbeaac1764d62a5b4ffb1f8c3e2"
  },
  {
    "url": "assets/js/29.363e54e0.js",
    "revision": "53811f436dac5b6d16975cf96b00e71b"
  },
  {
    "url": "assets/js/3.97e7bd25.js",
    "revision": "b348f0f61d04a046a66c9fb69ce39b6a"
  },
  {
    "url": "assets/js/30.9a801714.js",
    "revision": "24c92d8496c1228bbddcdab8ebd6b426"
  },
  {
    "url": "assets/js/31.0206f560.js",
    "revision": "78969c9cf220fcdf3ff06352a4507aba"
  },
  {
    "url": "assets/js/32.8466f1ce.js",
    "revision": "d617f3b9e97ad680cd1bd0ea29893f08"
  },
  {
    "url": "assets/js/33.8ff9a524.js",
    "revision": "13974dd4b116c94157453552bb935ad2"
  },
  {
    "url": "assets/js/34.19c7789c.js",
    "revision": "38b9047fb11ad7baaaf8b8f3d64188f8"
  },
  {
    "url": "assets/js/35.5c09c7ff.js",
    "revision": "db5081df9cc0bd5cf08147b084c6e8e6"
  },
  {
    "url": "assets/js/36.28a9efd7.js",
    "revision": "d3b5b11ef6870ba98c73b6270946f59d"
  },
  {
    "url": "assets/js/37.2ce2b2f0.js",
    "revision": "8c238453f97e97a07aea1cfdf559bb56"
  },
  {
    "url": "assets/js/38.bd2b75b9.js",
    "revision": "bddafc3a684a25090853a08b9c8abe16"
  },
  {
    "url": "assets/js/39.00e442c2.js",
    "revision": "28673e50363a5933aa5928d12d88aae4"
  },
  {
    "url": "assets/js/4.9f518c74.js",
    "revision": "fb9d35ccdf7a5f6b848009193de82e4f"
  },
  {
    "url": "assets/js/40.d342431d.js",
    "revision": "ccd8c7322088181dadbacfddbcf64949"
  },
  {
    "url": "assets/js/41.9b138a40.js",
    "revision": "8d0aef2b59784ed648620e224eb76984"
  },
  {
    "url": "assets/js/42.5ac0d796.js",
    "revision": "d74b5fda15913e127eff66d21651def2"
  },
  {
    "url": "assets/js/43.d5351fee.js",
    "revision": "16f2c53d03195407f4bdd86d2b92c334"
  },
  {
    "url": "assets/js/44.f0a4098f.js",
    "revision": "bffb5512ac2df905561342c7fb5f16fc"
  },
  {
    "url": "assets/js/45.84e7f0bd.js",
    "revision": "f5fecd004c0ff337b348c19913e54509"
  },
  {
    "url": "assets/js/46.069e8135.js",
    "revision": "e3e15ebabcc1705e7b93f9cd807195df"
  },
  {
    "url": "assets/js/47.5df51212.js",
    "revision": "68d302acb004b60d7de7294248254353"
  },
  {
    "url": "assets/js/48.0468b848.js",
    "revision": "8cd68a37ec3d3384bd8e9ea00b40a2a3"
  },
  {
    "url": "assets/js/49.313bc782.js",
    "revision": "3672157985709eca27ed7589a6d96cff"
  },
  {
    "url": "assets/js/5.8369cf44.js",
    "revision": "74b12689396a2a28d6d9b60090513904"
  },
  {
    "url": "assets/js/50.9b5ba7a8.js",
    "revision": "3cd6a6574712e0d140815a3c6a3ce514"
  },
  {
    "url": "assets/js/51.8806f813.js",
    "revision": "861cf468586a682e62b1e52e554e834d"
  },
  {
    "url": "assets/js/52.9974550e.js",
    "revision": "0d4fe526280e818fed41f1e847daa01e"
  },
  {
    "url": "assets/js/53.c1e09a06.js",
    "revision": "ae4300da55e204cdda5e8d88dfb2e0f9"
  },
  {
    "url": "assets/js/54.e192ecc0.js",
    "revision": "ece2bed3acdf2ed4e09a0198209d02fa"
  },
  {
    "url": "assets/js/55.7cb22e79.js",
    "revision": "68ce7d380b1fea0fcb031d59bb958d83"
  },
  {
    "url": "assets/js/56.4586e68c.js",
    "revision": "8cea6f5e9415cce715689c3bd19c1777"
  },
  {
    "url": "assets/js/57.b14507d5.js",
    "revision": "9b24db93fa49dd8ad21cd47bd396aaf5"
  },
  {
    "url": "assets/js/58.2837c7b7.js",
    "revision": "c8dc842912f96cce34a03a26cc8a4475"
  },
  {
    "url": "assets/js/59.200dae65.js",
    "revision": "a0002f4e341c7be9775303f4b1580d4b"
  },
  {
    "url": "assets/js/6.67fb8021.js",
    "revision": "77a5f062e04c15cb0a745ea1d679b0a9"
  },
  {
    "url": "assets/js/60.5e8d908d.js",
    "revision": "b0b3ad47fb78b21bc0b7aab740b1a6ce"
  },
  {
    "url": "assets/js/61.0764a832.js",
    "revision": "97881cc207af43885167b4da1406582e"
  },
  {
    "url": "assets/js/62.8d8d2068.js",
    "revision": "48359e34d01675cdd76b8c2274f67713"
  },
  {
    "url": "assets/js/63.4009ca54.js",
    "revision": "9bfbd757dbc0c2b75d7eab9dc51abfc8"
  },
  {
    "url": "assets/js/64.dd87a00e.js",
    "revision": "29d619eb703e0fb42cf97911849a09fd"
  },
  {
    "url": "assets/js/65.6d40ab13.js",
    "revision": "d9c1a540eb870cb313c04e643d35fd56"
  },
  {
    "url": "assets/js/66.f68775a2.js",
    "revision": "9460ff46e88f2613e11d1fdba2d52a0b"
  },
  {
    "url": "assets/js/67.742e39e9.js",
    "revision": "2acea5746d88f372c951b9ae8035d18e"
  },
  {
    "url": "assets/js/68.55fafa0e.js",
    "revision": "52b588f0e1dfca6bd0caa127db7b3bbc"
  },
  {
    "url": "assets/js/69.91df1ff8.js",
    "revision": "b59255104a6f9b407359d116a2f279db"
  },
  {
    "url": "assets/js/7.cd8d8194.js",
    "revision": "6321226e1bb83060454b848bcf998a1c"
  },
  {
    "url": "assets/js/70.3d1f0e22.js",
    "revision": "0a71d0364a9a2d3038b1a64006fddd3d"
  },
  {
    "url": "assets/js/71.90a3fb01.js",
    "revision": "39187ecbb3e6646d991755acc7a2d2c8"
  },
  {
    "url": "assets/js/72.0be9d882.js",
    "revision": "597ff4d11ec372b8d0e61d55e2568527"
  },
  {
    "url": "assets/js/73.f62920e7.js",
    "revision": "691a8b483a16686ef946739eecdbfb38"
  },
  {
    "url": "assets/js/74.8ff19778.js",
    "revision": "aae64f898c597494c658d256855348a7"
  },
  {
    "url": "assets/js/75.14c2fba1.js",
    "revision": "8bb98bc183ccbfd3dbe33b160e7061bf"
  },
  {
    "url": "assets/js/76.dc4e6a0f.js",
    "revision": "3a726cd2d44c4d73288667666c164434"
  },
  {
    "url": "assets/js/77.60d397ca.js",
    "revision": "6d40eb8a71ceb9e0005c2f84625225a3"
  },
  {
    "url": "assets/js/78.3771c09d.js",
    "revision": "edc64f2865ce4a85da57b4011f9d7a0e"
  },
  {
    "url": "assets/js/79.8679ff98.js",
    "revision": "1ca15839b627991c1f3201a353d0dcda"
  },
  {
    "url": "assets/js/8.0c2c994c.js",
    "revision": "db1e5a36f0903f3488135292457bce73"
  },
  {
    "url": "assets/js/80.32102483.js",
    "revision": "c2aaaa3f3e42d42a9cb8753f2631c926"
  },
  {
    "url": "assets/js/81.73b4920e.js",
    "revision": "265b0a6c13029ea04b0a8a886b1cfdb8"
  },
  {
    "url": "assets/js/82.7d4ca28e.js",
    "revision": "f9b828342d377835d3b2661b72922843"
  },
  {
    "url": "assets/js/9.096f4450.js",
    "revision": "57eacadbc2979cbfc9ddd8dce3292915"
  },
  {
    "url": "assets/js/app.f31f69df.js",
    "revision": "9974f208e672d8beda4bc57dad8d3028"
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
    "revision": "7abf5c80d45a5623617bfc9db8d7ab65"
  },
  {
    "url": "pages/algorithm/index.html",
    "revision": "a9ed38d708602c8c19f45987d3a49752"
  },
  {
    "url": "pages/algorithm/排序算法.html",
    "revision": "62ba13b35e66d5723d53614966045ff4"
  },
  {
    "url": "pages/knowledgeBase/browser/index.html",
    "revision": "b2d445f7d6d41e03661bd4cbf67636c8"
  },
  {
    "url": "pages/knowledgeBase/cli/index.html",
    "revision": "609ba2412b8873743f30672ec41433a6"
  },
  {
    "url": "pages/knowledgeBase/code/1.html",
    "revision": "81e95e6eefd32d4c005abe3b4d26a2b4"
  },
  {
    "url": "pages/knowledgeBase/code/2.html",
    "revision": "ea07c36612f0f4cfef377100f546f785"
  },
  {
    "url": "pages/knowledgeBase/code/3.html",
    "revision": "6a5fed2841ba4a53d52c49a5ee84bce8"
  },
  {
    "url": "pages/knowledgeBase/css/index.html",
    "revision": "575777b960465e8df6589fb4ed08c095"
  },
  {
    "url": "pages/knowledgeBase/dataVisualization/1.html",
    "revision": "b85e33b645b48f5fb2fb20b22dc5f143"
  },
  {
    "url": "pages/knowledgeBase/docker/1.html",
    "revision": "8a55c7edfc3584e9fe7e998ae2f4f152"
  },
  {
    "url": "pages/knowledgeBase/engineering/1.html",
    "revision": "5526018c213cc0ee429e472a1e6d1cef"
  },
  {
    "url": "pages/knowledgeBase/flutter/1.html",
    "revision": "6687034cfff0c46e9fd046ebc60ccd73"
  },
  {
    "url": "pages/knowledgeBase/gulp/index.html",
    "revision": "5ebbac1b55fd234b1e8d67a601f00bf5"
  },
  {
    "url": "pages/knowledgeBase/html/index.html",
    "revision": "bf3fccb65c8f6c843ddcf7f41114267f"
  },
  {
    "url": "pages/knowledgeBase/index.html",
    "revision": "c1831335a2b5f43da956d9effbfaea66"
  },
  {
    "url": "pages/knowledgeBase/js/1.html",
    "revision": "6a3478b009cc01af843d0f54fcfd5efa"
  },
  {
    "url": "pages/knowledgeBase/js/2.html",
    "revision": "2628d6f3785f40b3b28dbd520d2bd5ee"
  },
  {
    "url": "pages/knowledgeBase/js/3.html",
    "revision": "f3fa171c2c30f9a8078ad06bc75d5b88"
  },
  {
    "url": "pages/knowledgeBase/js/4.html",
    "revision": "602c9e3b366bbf1cec6079627c303f7b"
  },
  {
    "url": "pages/knowledgeBase/js/5.html",
    "revision": "d3ceabeb0015a15f21375ca0a1003167"
  },
  {
    "url": "pages/knowledgeBase/miniProgram/index.html",
    "revision": "ada7cd0c1fb8855d0ade5ec3d0b982c6"
  },
  {
    "url": "pages/knowledgeBase/miniProgram/mpvue/1.html",
    "revision": "b70c77ae62923b7f9eec8f51b5036a2d"
  },
  {
    "url": "pages/knowledgeBase/miniProgram/taro/1.html",
    "revision": "836423b347681c58cadb045cd7af5438"
  },
  {
    "url": "pages/knowledgeBase/miniProgram/uni-app/1.html",
    "revision": "b3c8260e1a90269fa2b76d0f15208434"
  },
  {
    "url": "pages/knowledgeBase/miniProgram/uni-app/2.html",
    "revision": "66c73fb231cbb22b904a288982bff42b"
  },
  {
    "url": "pages/knowledgeBase/miniProgram/WePY/1.html",
    "revision": "bce85fa6879cc3c38c217c18ae633ca5"
  },
  {
    "url": "pages/knowledgeBase/miniProgram/原生微信小程序/1.html",
    "revision": "062b7919160b156c0610723162dde182"
  },
  {
    "url": "pages/knowledgeBase/network/index.html",
    "revision": "7a8cfa4bb444bde79fc989e24ea4b6d5"
  },
  {
    "url": "pages/knowledgeBase/nginx/1.html",
    "revision": "30de0dcd07feedf3955ad2c931b2069d"
  },
  {
    "url": "pages/knowledgeBase/node/1.html",
    "revision": "9fd950a9cd0d6af02784b63f2970ef0d"
  },
  {
    "url": "pages/knowledgeBase/optimization/1.html",
    "revision": "17d74fcaeb0dc78301132d6388ae6a55"
  },
  {
    "url": "pages/knowledgeBase/optimization/2.html",
    "revision": "68780d0abb2c6c21f331ac1fb34473fd"
  },
  {
    "url": "pages/knowledgeBase/optimization/3.html",
    "revision": "8547aec3f1a9e4585c9cee272113fd5e"
  },
  {
    "url": "pages/knowledgeBase/react/1.html",
    "revision": "439b481882211987b4ddf7e8225ae7f2"
  },
  {
    "url": "pages/knowledgeBase/react/2.html",
    "revision": "97e8dba958cc5da7b12ea39efb9ea2dc"
  },
  {
    "url": "pages/knowledgeBase/react/3.html",
    "revision": "a38bea5853f2c487fdb08ce55e66f766"
  },
  {
    "url": "pages/knowledgeBase/react/4.html",
    "revision": "8c436854413cbc45518ed10f964be288"
  },
  {
    "url": "pages/knowledgeBase/react/5.html",
    "revision": "88a24f361e0dc4e67b965b1b90699160"
  },
  {
    "url": "pages/knowledgeBase/react/6.html",
    "revision": "2efca26999d815107ba7bcacce8a5617"
  },
  {
    "url": "pages/knowledgeBase/react/7.html",
    "revision": "61dbf67b27d6af55705580946ff00f73"
  },
  {
    "url": "pages/knowledgeBase/react/8.html",
    "revision": "00aacffd1fd9a833aa5261f284b791f5"
  },
  {
    "url": "pages/knowledgeBase/react/9.html",
    "revision": "b7ea608a8abf0f6717e2ea31f31bd469"
  },
  {
    "url": "pages/knowledgeBase/regularExpression/1.html",
    "revision": "bb8bbd170855339a9b1b2bc50317723d"
  },
  {
    "url": "pages/knowledgeBase/rollup/1.html",
    "revision": "9b46d982f5e42bfb8e228cb6cde27fab"
  },
  {
    "url": "pages/knowledgeBase/security/1.html",
    "revision": "e1a60487eda39c65f12ed9d43f944da0"
  },
  {
    "url": "pages/knowledgeBase/sentry/index.html",
    "revision": "b690e8c18f1df42283b9aa366355c535"
  },
  {
    "url": "pages/knowledgeBase/typeScript/index.html",
    "revision": "5e8fee15b9f7b931bafd0ea0deb3d43a"
  },
  {
    "url": "pages/knowledgeBase/vue/1.html",
    "revision": "cc726b7c1240d69102951069041664aa"
  },
  {
    "url": "pages/knowledgeBase/vue/2.html",
    "revision": "426d22a81c850b3b02a634c2cee675ca"
  },
  {
    "url": "pages/knowledgeBase/vue/3.html",
    "revision": "d7f6ca718036d08244c98921499113c6"
  },
  {
    "url": "pages/knowledgeBase/vue/4.html",
    "revision": "892e82ffccede0dee8bfa2ebb55a24d9"
  },
  {
    "url": "pages/knowledgeBase/vue/5.html",
    "revision": "b458cc782db656dea7db4b6982fe8208"
  },
  {
    "url": "pages/knowledgeBase/vue/6.html",
    "revision": "8cee84a9f9edfde26ca48c3fbe5b47e4"
  },
  {
    "url": "pages/knowledgeBase/vue/7.html",
    "revision": "d97d8f29b17b33ef8849189dfe36529a"
  },
  {
    "url": "pages/knowledgeBase/wechat/1.html",
    "revision": "40dccafa29d311b09d080f4fa743ff07"
  },
  {
    "url": "pages/knowledgeBase/微前端/1.html",
    "revision": "4e6ab428ed36d9548b81e19e244bcd5e"
  },
  {
    "url": "pages/knowledgeBase/微前端/2.html",
    "revision": "8b842bb379dea257447aa7b36d008af0"
  },
  {
    "url": "pages/knowledgeBase/微前端/3.html",
    "revision": "e68c7eb1b8d8815936a9eb3f50b92343"
  },
  {
    "url": "pages/knowledgeBase/微前端/4.html",
    "revision": "2743fdedd988bb384ced359097c489a4"
  },
  {
    "url": "pages/knowledgeBase/微前端/index.html",
    "revision": "a649e4844a4c11a9215979c4df95d5c8"
  },
  {
    "url": "pages/knowledgeBase/数据结构/1.html",
    "revision": "f751ba0ac8512a37b2a8f16956ce3928"
  },
  {
    "url": "pages/knowledgeBase/设计模式/index.html",
    "revision": "60227d655e1e848b504a8088595c5b27"
  },
  {
    "url": "pages/question/css/1.html",
    "revision": "f49dc48e797ba441c2f1fa93dcf6bb36"
  },
  {
    "url": "pages/question/css/2.html",
    "revision": "a4b363eefe4d75f27ce6f70891c9a0be"
  },
  {
    "url": "pages/question/index.html",
    "revision": "61c3ee61844ee26b6f9391f5c4d905de"
  },
  {
    "url": "pages/question/js/1.html",
    "revision": "5a2c984b5c76073c15fc9e36f20922c0"
  },
  {
    "url": "pages/question/js/2.html",
    "revision": "0fffcb8d7838abfb1b5f53076a643894"
  },
  {
    "url": "pages/question/js/3.html",
    "revision": "b8ec6438dbf9fa1519cee9a928a26c64"
  },
  {
    "url": "pages/summary/folder1/1.html",
    "revision": "2b7cf0c0efdb03d430c45db0bf4f8698"
  },
  {
    "url": "pages/summary/folder1/2.html",
    "revision": "0e00778e2d5acfd2f8e031399616da49"
  },
  {
    "url": "pages/summary/folder1/3.html",
    "revision": "0ec27cef44202b69521f8aca5836c41d"
  },
  {
    "url": "pages/summary/folder1/4.html",
    "revision": "02efaec65a795b3762f2152e015e3121"
  },
  {
    "url": "pages/summary/folder2/3.html",
    "revision": "b0efd4eaf6c4b3968e8f2536437c0352"
  },
  {
    "url": "pages/summary/index.html",
    "revision": "86c05ee293266d368374bcd6d4417603"
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
