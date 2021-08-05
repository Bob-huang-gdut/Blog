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
    "revision": "dfd88d3f216adeb68e612749190d0451"
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
    "url": "assets/js/11.0963e889.js",
    "revision": "070723f1c7d0b814f24233edb9386dba"
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
    "url": "assets/js/14.258dd0a6.js",
    "revision": "9bda069c60599edfa3e902e06ed5c0e9"
  },
  {
    "url": "assets/js/15.9c57ab3a.js",
    "revision": "9cde3245012a11ef8b0179e44136e064"
  },
  {
    "url": "assets/js/16.90517692.js",
    "revision": "2b1b9d1ffe7fed892e9d6059e10b7ec6"
  },
  {
    "url": "assets/js/17.d08b4738.js",
    "revision": "808ff885426ebe4c9ce548990d75cc22"
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
    "url": "assets/js/21.3cc5e5a9.js",
    "revision": "c46c3b7cbc9160387e6e86f5162c8e97"
  },
  {
    "url": "assets/js/22.e7f11c05.js",
    "revision": "e41a3c7fe40bb4800e465a9d066af376"
  },
  {
    "url": "assets/js/23.4ba17918.js",
    "revision": "bc6ecb72a0126cdc130750f7e3827537"
  },
  {
    "url": "assets/js/24.14683dd2.js",
    "revision": "cf0c698e6f691d394ac1ebb0712d20cf"
  },
  {
    "url": "assets/js/25.c5c391c1.js",
    "revision": "8b493d8ed377f4f2ae12f8ae237cbcb0"
  },
  {
    "url": "assets/js/26.cbdef406.js",
    "revision": "82c9f680f78a9cde647b0fecf0a829cf"
  },
  {
    "url": "assets/js/27.0ad185a8.js",
    "revision": "03ed29c683b84e8d810d7f4fedf3dd02"
  },
  {
    "url": "assets/js/28.2c57830f.js",
    "revision": "5ff1d82be6b943870e65c78a2b84731c"
  },
  {
    "url": "assets/js/29.d370f72d.js",
    "revision": "aee45f5c44a2cfab50cbbeae024b378c"
  },
  {
    "url": "assets/js/3.93a09107.js",
    "revision": "2732258614469233b02fb6113927e7a5"
  },
  {
    "url": "assets/js/30.731d597c.js",
    "revision": "c7e9fd9a60d3c72a73c5fd8a7c655baa"
  },
  {
    "url": "assets/js/31.630ad43f.js",
    "revision": "61da5ceeac4bb569391f69cf4087262a"
  },
  {
    "url": "assets/js/32.38c5ad82.js",
    "revision": "d617f3b9e97ad680cd1bd0ea29893f08"
  },
  {
    "url": "assets/js/33.dd1e7540.js",
    "revision": "d9295dbbe93a435634da7e0c63112926"
  },
  {
    "url": "assets/js/34.beffd4e6.js",
    "revision": "be1026ce6a450841bc0ffea6a3e6f0bf"
  },
  {
    "url": "assets/js/35.b7c4dead.js",
    "revision": "a520d40acd257d1098757a959754e1d6"
  },
  {
    "url": "assets/js/36.8a278581.js",
    "revision": "7e6695c1d17b9d6e809f82f6dac40936"
  },
  {
    "url": "assets/js/37.969075be.js",
    "revision": "b5b9c0273ac16138531d83bd17e4eef7"
  },
  {
    "url": "assets/js/38.a9e1b099.js",
    "revision": "54cdb836f48d3f2529d9c180a62fe516"
  },
  {
    "url": "assets/js/39.d9ab39da.js",
    "revision": "2011399ae51e59d0dac126fb957d42c0"
  },
  {
    "url": "assets/js/4.9f518c74.js",
    "revision": "fb9d35ccdf7a5f6b848009193de82e4f"
  },
  {
    "url": "assets/js/40.09f998fc.js",
    "revision": "e59cc68147dc2c5cb9d9a5dc9e1c8ea9"
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
    "url": "assets/js/43.9ddbcb3a.js",
    "revision": "b4043863bb468837ac5188e13669257c"
  },
  {
    "url": "assets/js/44.ba0f0919.js",
    "revision": "3bc35ece06f4a8c9d71a79867358b7ae"
  },
  {
    "url": "assets/js/45.9ec57ec0.js",
    "revision": "cb1b1285797cdb1f23da85285a19a093"
  },
  {
    "url": "assets/js/46.9bde5b06.js",
    "revision": "0972660ea0ca3f0d9c42e68d91df870d"
  },
  {
    "url": "assets/js/47.e5738461.js",
    "revision": "9ea0f7aa8f0d22b5c84e2910aec96396"
  },
  {
    "url": "assets/js/48.28f8d8fa.js",
    "revision": "91c5816785c3599248e71a74ea08f543"
  },
  {
    "url": "assets/js/49.85a43f46.js",
    "revision": "c1e3bdb934fba887c3cdcea9734a89d7"
  },
  {
    "url": "assets/js/5.8369cf44.js",
    "revision": "74b12689396a2a28d6d9b60090513904"
  },
  {
    "url": "assets/js/50.7c4482d7.js",
    "revision": "282743bdee7124196eaf251bc14fc969"
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
    "url": "assets/js/55.2bdbdb27.js",
    "revision": "bc5cfa4dfb94392f0a6901179c11fd49"
  },
  {
    "url": "assets/js/56.b8376d05.js",
    "revision": "a3e47ff97f431968cec3db5a4729bf31"
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
    "url": "assets/js/59.cf0921ed.js",
    "revision": "7cc9898aa791774581660699f01fa3e6"
  },
  {
    "url": "assets/js/6.67fb8021.js",
    "revision": "77a5f062e04c15cb0a745ea1d679b0a9"
  },
  {
    "url": "assets/js/60.f3cfbdc0.js",
    "revision": "9817073c87858ba4a8315308f7f45bca"
  },
  {
    "url": "assets/js/61.9d4bfd44.js",
    "revision": "24dc03455a1f64f098d2dd93038f5117"
  },
  {
    "url": "assets/js/62.5d0d0c54.js",
    "revision": "d4f350e50038c0158c021d47cca05765"
  },
  {
    "url": "assets/js/63.9da279ed.js",
    "revision": "f578b20f83bb99a09b259e22cfc3c12c"
  },
  {
    "url": "assets/js/64.90b7d6e4.js",
    "revision": "bb8d8ce95d8e2a59617452ef7cc21fc2"
  },
  {
    "url": "assets/js/65.df257813.js",
    "revision": "676cb6a3da20b380a69a2d08abbedeb5"
  },
  {
    "url": "assets/js/66.b61714c7.js",
    "revision": "039424fa8e918ed0b5fbfbf9186100d4"
  },
  {
    "url": "assets/js/67.738c2921.js",
    "revision": "5ff649cdd77e8a5c486d5afb320a4ae0"
  },
  {
    "url": "assets/js/68.7c4f2776.js",
    "revision": "75ac38e24953dd4edc93b6c5b1d4800d"
  },
  {
    "url": "assets/js/69.94d0292b.js",
    "revision": "2c77636451017c0116ea01786c2d88fe"
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
    "url": "assets/js/9.c14425c1.js",
    "revision": "996374a6c9ca334dd4f596f75ea9af9e"
  },
  {
    "url": "assets/js/app.d4ffc830.js",
    "revision": "8c37afcd95af97062f0d24dd8b8967bb"
  },
  {
    "url": "index.html",
    "revision": "ef8f5e52664f8daf35a0082ddd253662"
  },
  {
    "url": "logo.png",
    "revision": "a7ce492a1928707e2a1ad8ccb4e4d15d"
  },
  {
    "url": "pages/algorithm/index.html",
    "revision": "4d275b0a69c3873117d92c524f14bcb3"
  },
  {
    "url": "pages/algorithm/排序算法.html",
    "revision": "6919f199bfb9de63fe525e35ac34c59a"
  },
  {
    "url": "pages/knowledgeBase/browser/index.html",
    "revision": "c467518d7b0e536f3f9af9b7dbe2dfd9"
  },
  {
    "url": "pages/knowledgeBase/code/1.html",
    "revision": "9ab81d008ebd7b73071dd27465bdc056"
  },
  {
    "url": "pages/knowledgeBase/code/2.html",
    "revision": "1a39f41e1abccdab7bd52d08b810deac"
  },
  {
    "url": "pages/knowledgeBase/code/3.html",
    "revision": "d6ad6a35fd1452e51c468d7c2b21d3cd"
  },
  {
    "url": "pages/knowledgeBase/css/index.html",
    "revision": "3a1622bd330b52ad24b8a97735390b01"
  },
  {
    "url": "pages/knowledgeBase/dataVisualization/1.html",
    "revision": "2c7572187aa7325300d357878c7d1d46"
  },
  {
    "url": "pages/knowledgeBase/designMode/1.html",
    "revision": "cd8b70d86ce59bd12cc102c5a63a48b5"
  },
  {
    "url": "pages/knowledgeBase/docker/1.html",
    "revision": "917b701c9cdfc752450c75a0641f63bc"
  },
  {
    "url": "pages/knowledgeBase/engineering/1.html",
    "revision": "8b4875f3df1087ff4c5b58bca6f2774c"
  },
  {
    "url": "pages/knowledgeBase/flutter/1.html",
    "revision": "8723b51efd70f2ca2c402f5b82ddb2da"
  },
  {
    "url": "pages/knowledgeBase/html/index.html",
    "revision": "1eda1b159caafd6141acd52fd9862096"
  },
  {
    "url": "pages/knowledgeBase/index.html",
    "revision": "c37a4f57f86c608d19600cb5cf3305a2"
  },
  {
    "url": "pages/knowledgeBase/js/1.html",
    "revision": "ed9f20c6b61e607360f2880c6cf21d33"
  },
  {
    "url": "pages/knowledgeBase/js/2.html",
    "revision": "0ba8fa9db152e01c3fd75616468d68ac"
  },
  {
    "url": "pages/knowledgeBase/js/3.html",
    "revision": "df4cb19101158111b86d0fbba19b45bd"
  },
  {
    "url": "pages/knowledgeBase/js/4.html",
    "revision": "4744d4cc572e987028e2222ac60aec76"
  },
  {
    "url": "pages/knowledgeBase/miniProgram/1.html",
    "revision": "262eadafd667d069391a1726e8f57fd7"
  },
  {
    "url": "pages/knowledgeBase/network/index.html",
    "revision": "882278f716ec2ce136455ed2d7827791"
  },
  {
    "url": "pages/knowledgeBase/nginx/1.html",
    "revision": "74b9a764c736b72dc9b4a613f1769627"
  },
  {
    "url": "pages/knowledgeBase/node/1.html",
    "revision": "f377cf80b8528a7aaaaa86ca476cc2a0"
  },
  {
    "url": "pages/knowledgeBase/optimization/1.html",
    "revision": "2cbeaae2f8091e485b920249c4a8f971"
  },
  {
    "url": "pages/knowledgeBase/optimization/2.html",
    "revision": "cab9ee5c5c026bb7aa9c41837322c125"
  },
  {
    "url": "pages/knowledgeBase/optimization/3.html",
    "revision": "ffac70ba1e578a2d78649e861158e58a"
  },
  {
    "url": "pages/knowledgeBase/react/1.html",
    "revision": "12021e6513ba92538ea79435d115dd54"
  },
  {
    "url": "pages/knowledgeBase/react/2.html",
    "revision": "51baeafcc54b67c7ecf17b9b767b7d9a"
  },
  {
    "url": "pages/knowledgeBase/react/3.html",
    "revision": "442a5bbb49d9445a3687b35749a29d87"
  },
  {
    "url": "pages/knowledgeBase/react/4.html",
    "revision": "1843b9045cb19ba23aecf796e28fa241"
  },
  {
    "url": "pages/knowledgeBase/react/5.html",
    "revision": "b22d3be5a9c734026cf3fd189476120c"
  },
  {
    "url": "pages/knowledgeBase/react/6.html",
    "revision": "757593b76f6feacda8d912f7cc7fa6bb"
  },
  {
    "url": "pages/knowledgeBase/react/7.html",
    "revision": "0c5139d846e69bd9133cabd51fee6e7f"
  },
  {
    "url": "pages/knowledgeBase/react/8.html",
    "revision": "a40b34467afae2e5b9a0a730f8820c18"
  },
  {
    "url": "pages/knowledgeBase/react/9.html",
    "revision": "5a42fcabaa5294c0765e09e0acb61791"
  },
  {
    "url": "pages/knowledgeBase/regularExpression/1.html",
    "revision": "03133ebac70c13e40db2e03800c415eb"
  },
  {
    "url": "pages/knowledgeBase/rollup/1.html",
    "revision": "fb5b628041339ccb8f8842e5f601e26f"
  },
  {
    "url": "pages/knowledgeBase/security/1.html",
    "revision": "e274ff68d51ac6496117197c7d9ad150"
  },
  {
    "url": "pages/knowledgeBase/sentry/index.html",
    "revision": "abf3706534b00fb4f08d97033d75f7c8"
  },
  {
    "url": "pages/knowledgeBase/typeScript/index.html",
    "revision": "fa9eb5b53c5f9e6d7a1cedd83516d334"
  },
  {
    "url": "pages/knowledgeBase/vue/1.html",
    "revision": "06a61d26cad9369793687de6524b68d0"
  },
  {
    "url": "pages/knowledgeBase/vue/2.html",
    "revision": "7dae1d655237e11ac483966187c64e6c"
  },
  {
    "url": "pages/knowledgeBase/vue/3.html",
    "revision": "cec72f57a598cdd044a7d14972af65c2"
  },
  {
    "url": "pages/knowledgeBase/vue/4.html",
    "revision": "121970ab35697f2fee56be14a73ddca8"
  },
  {
    "url": "pages/knowledgeBase/vue/5.html",
    "revision": "c791ba493e6c899598aa653e90251cda"
  },
  {
    "url": "pages/knowledgeBase/vue/6.html",
    "revision": "249ec90d0ab95103f170fa911e162b0a"
  },
  {
    "url": "pages/knowledgeBase/vue/7.html",
    "revision": "c392b427ded06c54ac21f83ef172926c"
  },
  {
    "url": "pages/knowledgeBase/wechat/1.html",
    "revision": "2047c3cf715f88d03ebd25a25441f4f1"
  },
  {
    "url": "pages/knowledgeBase/微前端/1.html",
    "revision": "563b28c27ab4e0395aa74de6f9d9c43e"
  },
  {
    "url": "pages/knowledgeBase/微前端/2.html",
    "revision": "4e9230574cfb510b1aa50e8a6bfe7799"
  },
  {
    "url": "pages/knowledgeBase/微前端/3.html",
    "revision": "b2e6bbb91cbc2264b28b74be90b8347b"
  },
  {
    "url": "pages/knowledgeBase/数据结构/1.html",
    "revision": "1eb549009e9f45015ffe5e1a324bceab"
  },
  {
    "url": "pages/question/css/1.html",
    "revision": "b73e57e59da10a9a3b9b766639be6b5a"
  },
  {
    "url": "pages/question/css/2.html",
    "revision": "fbd642d49a5e164aaca40c48fb14cb02"
  },
  {
    "url": "pages/question/index.html",
    "revision": "22a81c16e4fc51ea9745d5cca7479cbd"
  },
  {
    "url": "pages/question/js/1.html",
    "revision": "cf72fa2e755ae503902f46d8a8b098b0"
  },
  {
    "url": "pages/question/js/2.html",
    "revision": "5535e76396aea37756c6cd988668cab8"
  },
  {
    "url": "pages/question/js/3.html",
    "revision": "8890a8173406c98cbb7da99a2d25480a"
  },
  {
    "url": "pages/summary/folder1/1.html",
    "revision": "038c44a57a858d65dacb7189e70215df"
  },
  {
    "url": "pages/summary/folder1/2.html",
    "revision": "eefa113a8d9cc743cf2fe70b19daa3fe"
  },
  {
    "url": "pages/summary/folder2/3.html",
    "revision": "1d57f7b43900cba9369a28ad02fd162f"
  },
  {
    "url": "pages/summary/index.html",
    "revision": "07c0dd100fdc8f5e15b833200714072e"
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
