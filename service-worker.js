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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "479007fe5a846e38dca88b1ba40d0bf5"
  },
  {
    "url": "assets/css/0.styles.0d8f249b.css",
    "revision": "9d971640436e77102a9484c970f615d1"
  },
  {
    "url": "assets/img/1.5efd14f5.png",
    "revision": "5efd14f5f52f64c43e4db426c3b72118"
  },
  {
    "url": "assets/img/1.ff751ffb.jpg",
    "revision": "ff751ffb05a71593a5ff5377088e9fb0"
  },
  {
    "url": "assets/img/3.a3a21853.jpg",
    "revision": "a3a218538af882b7fc00d296d73b381b"
  },
  {
    "url": "assets/img/calc.ea17c68c.jpg",
    "revision": "ea17c68c4411c8330362704e45c75528"
  },
  {
    "url": "assets/img/less1.e2a420cf.jpg",
    "revision": "e2a420cfded9739feea0f142eeb977fa"
  },
  {
    "url": "assets/img/line.dc081f42.jpg",
    "revision": "dc081f42144ca751367ecfc27208c80a"
  },
  {
    "url": "assets/img/peizhi.7a3c498c.jpg",
    "revision": "7a3c498c5f353be765812eae562dfaee"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.05b2eb92.js",
    "revision": "70231ce549394b28423edef88c932e7b"
  },
  {
    "url": "assets/js/11.370a321c.js",
    "revision": "389bd00cd8a6af54b35f9d0b92aacce7"
  },
  {
    "url": "assets/js/12.be7f2d63.js",
    "revision": "c4ec40198a87f7b2cbcda209b7c84fb9"
  },
  {
    "url": "assets/js/13.a713875c.js",
    "revision": "c6b17a6848afcfd0c7291891336bc717"
  },
  {
    "url": "assets/js/14.e3d00acc.js",
    "revision": "138ca4edba96e87399c91bc17a682da8"
  },
  {
    "url": "assets/js/15.db66cfb8.js",
    "revision": "78dba89aee1b0721fd90eec6e21b5121"
  },
  {
    "url": "assets/js/16.81867dd5.js",
    "revision": "b96035831179ea6337d4bd6b3a5a09b8"
  },
  {
    "url": "assets/js/17.945bd0b9.js",
    "revision": "37669238338c2b584669acac272d2fd3"
  },
  {
    "url": "assets/js/18.ac27d14a.js",
    "revision": "fc5b7a7e866d0caa2e2dc4be3fa7c527"
  },
  {
    "url": "assets/js/19.af8e4c2f.js",
    "revision": "80db9f0b2264fa4ba9d079b40040e79e"
  },
  {
    "url": "assets/js/2.494dcea6.js",
    "revision": "a83f2ea70c7ed01daadc6798dc2c8f5e"
  },
  {
    "url": "assets/js/20.23cb2677.js",
    "revision": "2a83a941a1685a7cc8f04d6050a582f7"
  },
  {
    "url": "assets/js/21.50da1a67.js",
    "revision": "d30b1f09d5ff97a4e924051d1a3552af"
  },
  {
    "url": "assets/js/22.de5a9822.js",
    "revision": "8588a161f8fc722f6d6516b38703f7f8"
  },
  {
    "url": "assets/js/3.b5e6238c.js",
    "revision": "a66dd71fbd0bbe3a2083ef817759cd1d"
  },
  {
    "url": "assets/js/4.0c90a7d1.js",
    "revision": "ba3ec0859d345169107ddf6c7e795704"
  },
  {
    "url": "assets/js/5.53379e7e.js",
    "revision": "0e73db7704da404ce58192b16e1ea853"
  },
  {
    "url": "assets/js/6.7e203985.js",
    "revision": "f0a1fb3c0bf148333ff15d9685ac9d50"
  },
  {
    "url": "assets/js/7.6330c200.js",
    "revision": "b963ce9dfebd0dd0d03b0cd8b4fa37d8"
  },
  {
    "url": "assets/js/8.d88b06c7.js",
    "revision": "10cd71a2787ed9bcff6fde12c4be351a"
  },
  {
    "url": "assets/js/9.32fd8ee5.js",
    "revision": "531ec8b4cb9c0943f40ef89570a0dde8"
  },
  {
    "url": "assets/js/app.cafdb470.js",
    "revision": "7a9611910034f5076898300267133ce4"
  },
  {
    "url": "front/files/echarts.html",
    "revision": "7d83fecd40495b2ae4847053b4dc4128"
  },
  {
    "url": "front/files/flutter.html",
    "revision": "63d15cbc435ae3f347bb99ce8342e4db"
  },
  {
    "url": "front/files/html.html",
    "revision": "d7e7ae6b50bdfe6c3da69992ab9257fb"
  },
  {
    "url": "front/files/javascript.html",
    "revision": "f6d88e635d33d84f543bced7400f5666"
  },
  {
    "url": "front/files/node.html",
    "revision": "c0a83fde092bd700c57655fece5c4ed7"
  },
  {
    "url": "front/files/react.html",
    "revision": "85266df6c41797766bbc4baa04b83486"
  },
  {
    "url": "front/files/vue.html",
    "revision": "b4a64a62e9b33079a01ecc9478d9a384"
  },
  {
    "url": "front/files/vue3.html",
    "revision": "f57cf1dbf20be6cf1d31fa7f7dc68bc3"
  },
  {
    "url": "front/files/webpack.html",
    "revision": "b32a696d7e2fdc4d7956bb9d93bc01d7"
  },
  {
    "url": "guide.html",
    "revision": "ef5680ea10487c1b5b1f0af672474a4d"
  },
  {
    "url": "images/eg1.png",
    "revision": "b6e00451aa6e2fb07803babc3be44fe3"
  },
  {
    "url": "images/eg12.png",
    "revision": "716c3bede731ed6eecb026377f31aac1"
  },
  {
    "url": "images/eg13.png",
    "revision": "022c1e3380b12aa21dd816cd4f1aeaae"
  },
  {
    "url": "images/eg14.png",
    "revision": "c0b03bb9c818398235ae5ac24fe91204"
  },
  {
    "url": "images/eg2.png",
    "revision": "1c31890ab04672b5b9daad1f8216a89b"
  },
  {
    "url": "images/eg3.png",
    "revision": "c3145209954ef832a2c62740a2133a8b"
  },
  {
    "url": "images/eg4.png",
    "revision": "7b4a9dd311c20e60f1f67205845deca1"
  },
  {
    "url": "images/eg5.png",
    "revision": "d70a372965f420d2faaf40259dce9a1c"
  },
  {
    "url": "images/eg6.png",
    "revision": "64c96504fe466f4baa99423a71573892"
  },
  {
    "url": "images/eg7.png",
    "revision": "5814399d3ba9bdcedb588e2b65059e67"
  },
  {
    "url": "images/eg8.png",
    "revision": "cd30b75ad80917829755a2693a374b02"
  },
  {
    "url": "images/photo.gif",
    "revision": "d25a6cc85d301d3573a94d6d96a747f6"
  },
  {
    "url": "images/photo.jpg",
    "revision": "7c84f9895d61ce7554c804d4a0c2ae79"
  },
  {
    "url": "index.html",
    "revision": "e1705c97ddbbcc9252f129b3ddff651e"
  },
  {
    "url": "interview/index.html",
    "revision": "5a174e9f4849e889dfabc827d4f59e28"
  },
  {
    "url": "others/index.html",
    "revision": "006d1b2010cf02630a504dd38197a7ce"
  },
  {
    "url": "project/files/node.html",
    "revision": "1b21138d69eb3dcdde247c1a55a99b8c"
  },
  {
    "url": "project/files/react.html",
    "revision": "a42ed37e49de8cd7e9c3ff9571a27e68"
  },
  {
    "url": "project/files/vue3.html",
    "revision": "5e14b7b4a4b6806140b166df4492187c"
  },
  {
    "url": "server/files/java.html",
    "revision": "d0631279f0af03bb351bf8fa600f5a33"
  },
  {
    "url": "server/files/mysql.html",
    "revision": "f26902621266f7c8c3d6624780847c1d"
  },
  {
    "url": "website/index.html",
    "revision": "89a9da7405c192bbf5e558a037f27827"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
