if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let f={};const d=e=>n(e,o),t={module:{uri:o},exports:f,require:d};i[o]=Promise.all(r.map((e=>t[e]||d(e)))).then((e=>(s(...e),f)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-BJMru2oZ.js",revision:null},{url:"assets/index-BY2icPVA.js",revision:null},{url:"index.html",revision:"eb1ff91f85afb6630d7d059f9fbbfae9"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"apple-touch-icon-180x180.png",revision:"6df52e6a3351d2e3f5d5b631e450ae4d"},{url:"favicon.ico",revision:"b9965c5c1874303090da21867548a75e"},{url:"maskable-icon-512x512.png",revision:"4a75eb176b338512b42c8089e3f21247"},{url:"pwa-192x192.png",revision:"6d38d5e0a34e3ea31e2d362f290d8fcf"},{url:"pwa-512x512.png",revision:"7084b90f26ac4ccb593d81ada79541da"},{url:"pwa-64x64.png",revision:"1f36e400f29dca193b47dc48224171b2"},{url:"manifest.webmanifest",revision:"3962e6e3504dc1726528311ffe7d0bff"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));