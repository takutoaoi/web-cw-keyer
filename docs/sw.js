if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,i,d)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const n={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return r;case"module":return n;default:return e(s)}}))).then((e=>{const s=d(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-7ce2238d"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index.309add05.js",revision:"90b31aa2b327c880ad85fed935ed6442"},{url:"assets/index.4eee9d78.css",revision:"377a646bb4953d38d179b081548d84ea"},{url:"assets/index.53a18006.css",revision:"7952d3f3bb3b9808bea129d1406e687e"},{url:"assets/index.e3cf8701.js",revision:"2ba1203bc14d8805aa495bd09dd72c12"},{url:"assets/vendor.19e634b2.js",revision:"a25265b3d72bbd26e7070823ac41b473"},{url:"index.html",revision:"ccfae0a63d872924dadcad557b495882"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"192x192.png",revision:"618de8bed8b0e1310d359bb4846f3fae"},{url:"180x180.png",revision:"383f1a0bcca8ec94cc7ad5924a02575e"},{url:"512x512.png",revision:"bea9579ab4371c545a80e1be92df43bb"},{url:"manifest.webmanifest",revision:"2d9d4c70ae4792493ec302d86479583e"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
