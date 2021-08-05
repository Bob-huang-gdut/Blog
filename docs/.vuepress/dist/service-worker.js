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
    "revision": "ec94138378ed09068a5cfa4dd9459451"
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
    "url": "assets/js/15.3851006c.js",
    "revision": "76f9face08af1cd0a7c0f8540d366ea8"
  },
  {
    "url": "assets/js/16.c21bded6.js",
    "revision": "87fcb4d0ada551e636bf0a705e679d81"
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
    "url": "assets/js/24.0de4f572.js",
    "revision": "4fbb0e4b8dc39c34e7dd5704bb96df15"
  },
  {
    "url": "assets/js/25.c5c391c1.js",
    "revision": "8b493d8ed377f4f2ae12f8ae237cbcb0"
  },
  {
    "url": "assets/js/26.465ab106.js",
    "revision": "18fdc0ba8b849c4c25f8f6ddb9dbc8f8"
  },
  {
    "url": "assets/js/27.d54c5150.js",
    "revision": "23324d4b8bcfe905b8ce858009677687"
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
    "url": "assets/js/34.e213ef01.js",
    "revision": "5139775a234873ff96429c79a50fa7c0"
  },
  {
    "url": "assets/js/35.5cb5ab3f.js",
    "revision": "f2be41ede962b47b277affe4d0b9fc1c"
  },
  {
    "url": "assets/js/36.80fd1525.js",
    "revision": "256ad05529abf8f369453607ba0d1aad"
  },
  {
    "url": "assets/js/37.6ca98cf5.js",
    "revision": "4844fdac7fdd3af4b12e748866380bd9"
  },
  {
    "url": "assets/js/38.dd892192.js",
    "revision": "4ee2a252f998ad3e67e885c6202b9cec"
  },
  {
    "url": "assets/js/39.a343567a.js",
    "revision": "03936a0ead1d830d018445a1ceb02e85"
  },
  {
    "url": "assets/js/4.9f518c74.js",
    "revision": "fb9d35ccdf7a5f6b848009193de82e4f"
  },
  {
    "url": "assets/js/40.e74f81f6.js",
    "revision": "a0c085c6d798243b69c97e04a9198fda"
  },
  {
    "url": "assets/js/41.9c4512b9.js",
    "revision": "51c0ea45aa31a4c45ba3b3b1f63b966c"
  },
  {
    "url": "assets/js/42.5e59d877.js",
    "revision": "21eb61f09ff843d3753687284c62b333"
  },
  {
    "url": "assets/js/43.18e3f91c.js",
    "revision": "24664904d05de888c0d8e2ddd4276036"
  },
  {
    "url": "assets/js/44.de798060.js",
    "revision": "3e2a17a2f6d516bde1115d22ab342609"
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
    "url": "assets/js/47.37e7609d.js",
    "revision": "3cfe8dfa9ee76861b7bbae1a23aa35c9"
  },
  {
    "url": "assets/js/48.2ca7b3e5.js",
    "revision": "736f54af86c953759cc53f53c5d5d818"
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
    "url": "assets/js/50.64f79124.js",
    "revision": "bfb8970eaa3139da30f67f34bda776cc"
  },
  {
    "url": "assets/js/51.df201141.js",
    "revision": "012e9ee7049d3742caacf7e4b2e52206"
  },
  {
    "url": "assets/js/52.afd2603e.js",
    "revision": "2ee681a34a7beb23d0615d2c64c77560"
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
    "url": "assets/js/57.642ad3d2.js",
    "revision": "1cd9150daa769a8d49a42bae1d1d9a2b"
  },
  {
    "url": "assets/js/58.80c3e112.js",
    "revision": "94ab0f71fb2468d3b4115e79fca8bdac"
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
    "url": "assets/js/60.f722abcc.js",
    "revision": "bcb2e6a8645a09721f5832309fadc885"
  },
  {
    "url": "assets/js/61.04dac04a.js",
    "revision": "2224004551fd2ea1af49ab6bc8ee5095"
  },
  {
    "url": "assets/js/62.ba4dc878.js",
    "revision": "918dffa9579c65196c0ddbc63d773181"
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
    "url": "assets/js/66.3fabb0a1.js",
    "revision": "34d3639fc372e8a9479ab26b49f57940"
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
    "url": "assets/js/8.b4c057f5.js",
    "revision": "296682be4c33e2fc246dff2857fd8b96"
  },
  {
    "url": "assets/js/9.3f8c1dcf.js",
    "revision": "d6308ec20cd39c138e9b603f18594b87"
  },
  {
    "url": "assets/js/app.2e57c10d.js",
    "revision": "4422c56b40058cf6753ff4175d6e6eba"
  },
  {
    "url": "images/logo.png",
    "revision": "a7ce492a1928707e2a1ad8ccb4e4d15d"
  },
  {
    "url": "index.html",
    "revision": "296758166bb4be662d774efcc178e9b2"
  },
  {
    "url": "pages/algorithm/index.html",
    "revision": "c0b41343af5260368a160d74d93c00b8"
  },
  {
    "url": "pages/algorithm/排序算法.html",
    "revision": "e9ae5ed0f44eb33d9fdcc0222d4f0183"
  },
  {
    "url": "pages/knowledgeBase/browser/index.html",
    "revision": "6985ecca4feb3af46de943c749dbdaf0"
  },
  {
    "url": "pages/knowledgeBase/code/1.html",
    "revision": "a3648ff07e88ffb2c92bbee949f12357"
  },
  {
    "url": "pages/knowledgeBase/code/2.html",
    "revision": "4557e607f729f653114aa3c7aa263c04"
  },
  {
    "url": "pages/knowledgeBase/code/3.html",
    "revision": "3cda4f567afb6a15d5e4fba0f4199ec2"
  },
  {
    "url": "pages/knowledgeBase/css/index.html",
    "revision": "9a5142b3c73007bb195c8a053e457ea5"
  },
  {
    "url": "pages/knowledgeBase/dataVisualization/1.html",
    "revision": "81dc5ca6e34352c886ba8ece1583482f"
  },
  {
    "url": "pages/knowledgeBase/designMode/1.html",
    "revision": "5719be3f2194635e041f1611c78819bf"
  },
  {
    "url": "pages/knowledgeBase/docker/1.html",
    "revision": "1c8e283fc949b3f16af2d547adc411a3"
  },
  {
    "url": "pages/knowledgeBase/engineering/1.html",
    "revision": "32b7efcb604fdc41c69094563580d490"
  },
  {
    "url": "pages/knowledgeBase/flutter/1.html",
    "revision": "c631ec9e7b718bda4f6df0cf83ed6861"
  },
  {
    "url": "pages/knowledgeBase/html/index.html",
    "revision": "8bafbe52cce5d5e38edf9799b2d08a39"
  },
  {
    "url": "pages/knowledgeBase/index.html",
    "revision": "a122c09bc8d43cfd9e03887204e80cbc"
  },
  {
    "url": "pages/knowledgeBase/js/1.html",
    "revision": "07acfbcf198297d95114062733862b27"
  },
  {
    "url": "pages/knowledgeBase/js/2.html",
    "revision": "4b576139d07e39be1d385b6761bc7e32"
  },
  {
    "url": "pages/knowledgeBase/js/3.html",
    "revision": "2a376f12894474a0313de71cc50fbd63"
  },
  {
    "url": "pages/knowledgeBase/js/4.html",
    "revision": "f427a91d6649a99a6d8aba158d0527e0"
  },
  {
    "url": "pages/knowledgeBase/js/5.html",
    "revision": "412f87ecd142ab403fb7f83a8d6a8617"
  },
  {
    "url": "pages/knowledgeBase/miniProgram/1.html",
    "revision": "3a631c5539ab0662855a0cc78f01c9b4"
  },
  {
    "url": "pages/knowledgeBase/network/index.html",
    "revision": "587108f59e7f62cbe5fa1a7fd5ea5d02"
  },
  {
    "url": "pages/knowledgeBase/nginx/1.html",
    "revision": "12438efc5d179757b0a2fd3456d141dd"
  },
  {
    "url": "pages/knowledgeBase/node/1.html",
    "revision": "8f4e5133d6990b8d72961acc91416517"
  },
  {
    "url": "pages/knowledgeBase/optimization/1.html",
    "revision": "930dcc894d4d04220f679b737bad0944"
  },
  {
    "url": "pages/knowledgeBase/optimization/2.html",
    "revision": "5ad1eca03a484a5015321fc4855f08e9"
  },
  {
    "url": "pages/knowledgeBase/optimization/3.html",
    "revision": "f23fd7d35fed544c3d9c696dccfe86b1"
  },
  {
    "url": "pages/knowledgeBase/react/1.html",
    "revision": "41b251f9017352aa15e3e01a6e977d7a"
  },
  {
    "url": "pages/knowledgeBase/react/2.html",
    "revision": "b11894aae6b6956e118bdc1e3491ba1c"
  },
  {
    "url": "pages/knowledgeBase/react/3.html",
    "revision": "2d85649c0a410bd2285c26b1b6004878"
  },
  {
    "url": "pages/knowledgeBase/react/4.html",
    "revision": "26118357db2798fe3bc954d5a4ad109f"
  },
  {
    "url": "pages/knowledgeBase/react/5.html",
    "revision": "d2527141e2d5b842f65189486c59aa7e"
  },
  {
    "url": "pages/knowledgeBase/react/6.html",
    "revision": "84b616032ddaa711cf8cdc9415bb22e6"
  },
  {
    "url": "pages/knowledgeBase/react/7.html",
    "revision": "482991fba0ccd1682bb9f5b17ffb8cc6"
  },
  {
    "url": "pages/knowledgeBase/react/8.html",
    "revision": "d37eac463a5f468f3bc0a317ea54caae"
  },
  {
    "url": "pages/knowledgeBase/react/9.html",
    "revision": "87ea34e8b9c672bf70bf3b68a1823b55"
  },
  {
    "url": "pages/knowledgeBase/regularExpression/1.html",
    "revision": "661fe758db68b62e503287028f96e7b2"
  },
  {
    "url": "pages/knowledgeBase/rollup/1.html",
    "revision": "7875fae3893b43787b717c83a46157bf"
  },
  {
    "url": "pages/knowledgeBase/security/1.html",
    "revision": "25d40989f9a2dc22ef72df7215073c36"
  },
  {
    "url": "pages/knowledgeBase/sentry/index.html",
    "revision": "d9d29ce2c1ad612ce365935ec1a6d943"
  },
  {
    "url": "pages/knowledgeBase/typeScript/index.html",
    "revision": "89eb24dd55d21388e7c317f4ec24068e"
  },
  {
    "url": "pages/knowledgeBase/vue/1.html",
    "revision": "3bded9fa0ab9c11e155477292a82ce4d"
  },
  {
    "url": "pages/knowledgeBase/vue/2.html",
    "revision": "a755eaf6c6ae6f21549f9cf52ff6801d"
  },
  {
    "url": "pages/knowledgeBase/vue/3.html",
    "revision": "08449c71eba59b9c943305d76c674214"
  },
  {
    "url": "pages/knowledgeBase/vue/4.html",
    "revision": "8563cae56fdbc07e0aefe4cec69a39ca"
  },
  {
    "url": "pages/knowledgeBase/vue/5.html",
    "revision": "b29826ecc54ee611a67abe48d200e982"
  },
  {
    "url": "pages/knowledgeBase/vue/6.html",
    "revision": "1606829a2b89972aa843ee75fb828eca"
  },
  {
    "url": "pages/knowledgeBase/vue/7.html",
    "revision": "3869319d0017cf6c4f77e24e196413de"
  },
  {
    "url": "pages/knowledgeBase/wechat/1.html",
    "revision": "b57df28e4b6b273cf11350bbd38a787c"
  },
  {
    "url": "pages/knowledgeBase/微前端/1.html",
    "revision": "94ba0f69566400db362652251e8612b6"
  },
  {
    "url": "pages/knowledgeBase/微前端/2.html",
    "revision": "faa695cc8405e7f53e2625773765d61d"
  },
  {
    "url": "pages/knowledgeBase/微前端/3.html",
    "revision": "4af423231a45f16d58a0f64d776d8375"
  },
  {
    "url": "pages/knowledgeBase/数据结构/1.html",
    "revision": "06dc0e4e44a2d8de6e28ee5bab33fa60"
  },
  {
    "url": "pages/question/css/1.html",
    "revision": "56be40acb210b173c8a532d1b6a8d6c1"
  },
  {
    "url": "pages/question/css/2.html",
    "revision": "b35d71150fe23aa6056b92469a5c362a"
  },
  {
    "url": "pages/question/index.html",
    "revision": "1a96f346dda0398b59d82e2b39455d65"
  },
  {
    "url": "pages/question/js/1.html",
    "revision": "2707abf79aa28497ae0694e4421c50c0"
  },
  {
    "url": "pages/question/js/2.html",
    "revision": "5c51cebd6718cdc957dd4eb7c5af59f4"
  },
  {
    "url": "pages/question/js/3.html",
    "revision": "fd47cffe462be68bb5dc357afa1fa1ce"
  },
  {
    "url": "pages/summary/folder1/1.html",
    "revision": "2596d611ed23fa03c1b502538048a53e"
  },
  {
    "url": "pages/summary/folder1/2.html",
    "revision": "fe7f0ef9ef78e373cb81ced6fbb0df91"
  },
  {
    "url": "pages/summary/folder2/3.html",
    "revision": "5c9f0f828ef90a952867916e0ffa88a3"
  },
  {
    "url": "pages/summary/index.html",
    "revision": "129d327c4436201400b17fab66210f1e"
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
