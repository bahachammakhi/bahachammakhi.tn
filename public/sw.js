if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return c[e]||(s=new Promise(async s=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=s}else importScripts(e),s()})),s.then(()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]})},s=(s,c)=>{Promise.all(s.map(e)).then(e=>c(1===e.length?e[0]:e))},c={require:Promise.resolve(s)};self.define=(s,a,n)=>{c[s]||(c[s]=Promise.resolve().then(()=>{let c={};const i={uri:location.origin+s.slice(1)};return Promise.all(a.map(s=>{switch(s){case"exports":return c;case"module":return i;default:return e(s)}})).then(e=>{const s=n(...e);return c.default||(c.default=s),c})}))}}define("./sw.js",["./workbox-4d0bff02"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/",revision:"UoXbyvuM-GpXMQOnQfRs6"},{url:"/_next/static/UoXbyvuM-GpXMQOnQfRs6/_buildManifest.js",revision:"c4e44edea000ed1234e11eb29f3e96ff"},{url:"/_next/static/UoXbyvuM-GpXMQOnQfRs6/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/UoXbyvuM-GpXMQOnQfRs6/pages/404.js",revision:"0dadd70e242726c3263fb65468133ad8"},{url:"/_next/static/UoXbyvuM-GpXMQOnQfRs6/pages/_app.js",revision:"5f091f10461f8180588a1663c2e05f9b"},{url:"/_next/static/UoXbyvuM-GpXMQOnQfRs6/pages/_error.js",revision:"d291de29a1bac947fdaeb314aac8b050"},{url:"/_next/static/UoXbyvuM-GpXMQOnQfRs6/pages/articles.js",revision:"90f8f8ee80826232f7f2c26feaf0bde5"},{url:"/_next/static/UoXbyvuM-GpXMQOnQfRs6/pages/articles/%5Bid%5D.js",revision:"1d86465cd558a90497026f11c911942b"},{url:"/_next/static/UoXbyvuM-GpXMQOnQfRs6/pages/contact.js",revision:"e9173fcda584b62958e66c4fbee24158"},{url:"/_next/static/UoXbyvuM-GpXMQOnQfRs6/pages/index.js",revision:"f29e8ea512cc0a52071ff2ad0fbbb6c1"},{url:"/_next/static/UoXbyvuM-GpXMQOnQfRs6/pages/projects.js",revision:"0e3f60f8e2db06a2f01699abebcc2e9c"},{url:"/_next/static/UoXbyvuM-GpXMQOnQfRs6/pages/projects/%5Bslug%5D.js",revision:"65c060581292547c96853f2308aec056"},{url:"/_next/static/chunks/04863b67bee30205f1050a47fb7f66fc3b62232b.9dc16293401c5e2a26e4.js",revision:"6d7e3ae5bdc3820f9e36ed9006909d79"},{url:"/_next/static/chunks/23.d822ac72d8e23666561b.js",revision:"854941ff5b12d17582582c7c15d444bd"},{url:"/_next/static/chunks/24.1cc790b38bd872a9d69d.js",revision:"14d6692e87d1464ee275fd024ed12ab4"},{url:"/_next/static/chunks/25.b40ddb8b521ce90a63c9.js",revision:"6a558b699a45cc9a1c2eb83d3922dc9b"},{url:"/_next/static/chunks/26.912e54a2462d7f83c360.js",revision:"39696d142403b7b75c6871ef738d7236"},{url:"/_next/static/chunks/27.cb85b166a7cce9bb5692.js",revision:"edc402b8ed494a61f92a8dd782669546"},{url:"/_next/static/chunks/2c51b5da3211f95f0f07063e7f8269c153f862e0.961f6a7fd65c7bf87016.js",revision:"0b1965120d80d35ef12e48777885e30f"},{url:"/_next/static/chunks/75fc9c18.798319b5f3ff0fb60599.js",revision:"28a07f194e0238a97b788484fd9462fc"},{url:"/_next/static/chunks/8a601dce.28bb0ad1ff00010e07e5.js",revision:"9072a51311acfb34ed7227d49b64142b"},{url:"/_next/static/chunks/8da5e8e510287fb3e728253cb55d8e26d24a7f0d.250ce319a55dafabbe0e.js",revision:"87195653dd1d345eda607c55f3a764f0"},{url:"/_next/static/chunks/b2bd6f924da028f6dcb95bcb82d0ae2f7ef74a5b.99a8b56eae600ab42adb.js",revision:"8c3c8c6dc6c29083f4bc472d1366ec6f"},{url:"/_next/static/chunks/b79029e2962bd667c0fdb97318def8bae009517e.051f1a8cd46d8bb332ef.js",revision:"dfc86e1fa93351fa4de2909108b28f13"},{url:"/_next/static/chunks/c8f7fe3b0e41be846d5687592cf2018ff6e22687.68f1db6ac88c49ea8c83.js",revision:"534daba6ffecbb918f07fbb899029476"},{url:"/_next/static/chunks/cb30e1b4.a92bf8af966800c0ed3d.js",revision:"c23e50739d8c9898a3d31cd683651f60"},{url:"/_next/static/chunks/commons.c27e4a72f6c99db18c75.js",revision:"39511a03a65e8328c53f8e2485dd4da9"},{url:"/_next/static/chunks/framework.10d288861140c55ee8f8.js",revision:"d3843a135670e42a390c58a6a862fd66"},{url:"/_next/static/css/2d615366b7b3db2b16d7.css",revision:"cd4fe6e88de4962bfc35ded90891eb1d"},{url:"/_next/static/runtime/main-05bdb5762ba738588b1c.js",revision:"5b4c7d87e58e65c76c94e33268aea74b"},{url:"/_next/static/runtime/polyfills-82aa17393f66d4f6c657.js",revision:"d62178ca6f69cf1e13aa693271373713"},{url:"/_next/static/runtime/webpack-96fdac31cf1405d03695.js",revision:"9db98941e1f490928b71ea6678d764ce"},{url:"/android-chrome-192x192.png",revision:"f840f0e6e6b916630d6ad57ef7c7c57e"},{url:"/android-chrome-384x384.png",revision:"f2c680f8cad0c229698d00e566a7a07c"},{url:"/apple-touch-icon.png",revision:"5cd9526912cf8101be586d0d8bfcdd63"},{url:"/browserconfig.xml",revision:"a493ba0aa0b8ec8068d786d7248bb92c"},{url:"/favicon-16x16.png",revision:"b7aa6b246f3fa54edc704dce7e22059f"},{url:"/favicon-32x32.png",revision:"44185dab105785d2e7710e03b535a02e"},{url:"/favicon.ico",revision:"7a31ebedc209648099a4885bf6693501"},{url:"/manifest.json",revision:"ffdec97406e29d0a8e34905c7181a738"},{url:"/mstile-150x150.png",revision:"25c52c64f019dbc716bd4f5c02c826e1"},{url:"/safari-pinned-tab.svg",revision:"140ef5efeb165d544fb8f032e4dc36b6"},{url:"/site.webmanifest",revision:"8ae059b232e48dcf3f3b7156360bf9ef"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/use\.fontawesome\.com\/releases\/.*/i,new e.CacheFirst({cacheName:"font-awesome",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.StaleWhileRevalidate({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"POST"),e.registerRoute(/.*/i,new e.StaleWhileRevalidate({cacheName:"others",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
