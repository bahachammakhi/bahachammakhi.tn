if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,c,i)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const r={uri:location.origin+a.slice(1)};return Promise.all(c.map(a=>{switch(a){case"exports":return s;case"module":return r;default:return e(a)}})).then(e=>{const a=i(...e);return s.default||(s.default=a),s})}))}}define("./sw.js",["./workbox-4d0bff02"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/",revision:"Y_rMBfWjD7gkueq2Qw2aN"},{url:"/_next/static/Y_rMBfWjD7gkueq2Qw2aN/_buildManifest.js",revision:"e6137159a0c7cd17d29746ef01057a60"},{url:"/_next/static/Y_rMBfWjD7gkueq2Qw2aN/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/Y_rMBfWjD7gkueq2Qw2aN/pages/_app.js",revision:"eee69c384faaa0f58696e25ba7f2962a"},{url:"/_next/static/Y_rMBfWjD7gkueq2Qw2aN/pages/_error.js",revision:"c200b04061b8e4da99624f2d66220ff1"},{url:"/_next/static/Y_rMBfWjD7gkueq2Qw2aN/pages/articles.js",revision:"7d2b88abf152a89442c7e16d7cde12ee"},{url:"/_next/static/Y_rMBfWjD7gkueq2Qw2aN/pages/articles/%5Bid%5D.js",revision:"a6eaab04b63fcbefa66381095be2282d"},{url:"/_next/static/Y_rMBfWjD7gkueq2Qw2aN/pages/contact.js",revision:"4438ecc42d76585261449dfb159679c8"},{url:"/_next/static/Y_rMBfWjD7gkueq2Qw2aN/pages/index.js",revision:"c37682bca785937304125bc2744280c1"},{url:"/_next/static/Y_rMBfWjD7gkueq2Qw2aN/pages/projects.js",revision:"f066bede89655f1e80de52977be7215b"},{url:"/_next/static/Y_rMBfWjD7gkueq2Qw2aN/pages/projects/%5Bslug%5D.js",revision:"e3bea8a77b6444679ba70e42594261ca"},{url:"/_next/static/chunks/12e5a07dc2109b439fc7e1a96fe86bc5d4943c8d.4b96798816a2f8bd3b64.js",revision:"2700c84838842b4458babc601e6a7a5c"},{url:"/_next/static/chunks/23.a5db1f860a9520e84ff6.js",revision:"d5c918422929553bdda2b6864aa9f9cb"},{url:"/_next/static/chunks/24.7d2c094f6a5682b7cbf7.js",revision:"eb417b477f979d484614c2c1cd7390f4"},{url:"/_next/static/chunks/46289acac7b1f8381ea98c8ec5fe9ce4715dfa26.e707359002884773118e.js",revision:"a0f0de7fe304b7b5e54729824d49fdd4"},{url:"/_next/static/chunks/75fc9c18.07bded0f0f18f04f8d26.js",revision:"63d7267472820ef3b403856af1262fb0"},{url:"/_next/static/chunks/8a601dce.d1cfbe266d8bbb1a7267.js",revision:"fb9c443d0b62d6c2eb8579a4bffb9b2a"},{url:"/_next/static/chunks/9f05ee8a3c7f5b23c99bc005f7026ab127c443c1.feac94c24f14627576f3.js",revision:"57ee975d4ba21f93880af481177a1f7e"},{url:"/_next/static/chunks/a9658ac05df5715109bb27e94c0a7e38972c4269.1ef0828c074754d8ca4f.js",revision:"907f12029b7e9769836be5c13d00f96c"},{url:"/_next/static/chunks/cb30e1b4.399f109fdec6a50191d5.js",revision:"ed6f873601b904634e2924fa7242a47a"},{url:"/_next/static/chunks/commons.372fc5385fd9339dcffe.js",revision:"1be5058d009426c30db6327f8f144395"},{url:"/_next/static/chunks/d11595f780854a66ce643bb97692188517356797.aacfad8d46dbc44a6239.js",revision:"fd84f31bab9e2401cb3a76cd3e4a5cb5"},{url:"/_next/static/chunks/eaae11428643fe1253c03ee15813c9c14fc88af5.66d444d87fdec352b1ad.js",revision:"a44483529e51452326884361d2ad2bbe"},{url:"/_next/static/chunks/fcff4680df576106a9f2d233780c45ac308c425c.163b2e0e979bf4a26579.js",revision:"de0fbf2fbdc8d9fa405fc3efe682ab78"},{url:"/_next/static/chunks/framework.50d57867f4cd43ffa57c.js",revision:"3bdef8f51cf240835333fe675b383c77"},{url:"/_next/static/css/2d615366b7b3db2b16d7.css",revision:"cd4fe6e88de4962bfc35ded90891eb1d"},{url:"/_next/static/runtime/main-518f6eade9ae4218441e.js",revision:"2e9692ba307090fecfd5f41a19d8b7f1"},{url:"/_next/static/runtime/polyfills-f1db95d6a241de87dfd4.js",revision:"9da32b2f3df0528d428bb0bd85d23e71"},{url:"/_next/static/runtime/webpack-a59f53a08a7e36d451d9.js",revision:"1e4abaa14abaa171cfa859713f4eab94"},{url:"/android-chrome-192x192.png",revision:"f840f0e6e6b916630d6ad57ef7c7c57e"},{url:"/android-chrome-384x384.png",revision:"f2c680f8cad0c229698d00e566a7a07c"},{url:"/apple-touch-icon.png",revision:"5cd9526912cf8101be586d0d8bfcdd63"},{url:"/browserconfig.xml",revision:"a493ba0aa0b8ec8068d786d7248bb92c"},{url:"/favicon-16x16.png",revision:"b7aa6b246f3fa54edc704dce7e22059f"},{url:"/favicon-32x32.png",revision:"44185dab105785d2e7710e03b535a02e"},{url:"/favicon.ico",revision:"7a31ebedc209648099a4885bf6693501"},{url:"/manifest.json",revision:"ffdec97406e29d0a8e34905c7181a738"},{url:"/mstile-150x150.png",revision:"25c52c64f019dbc716bd4f5c02c826e1"},{url:"/safari-pinned-tab.svg",revision:"140ef5efeb165d544fb8f032e4dc36b6"},{url:"/site.webmanifest",revision:"8ae059b232e48dcf3f3b7156360bf9ef"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/use\.fontawesome\.com\/releases\/.*/i,new e.CacheFirst({cacheName:"font-awesome",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.StaleWhileRevalidate({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"POST"),e.registerRoute(/.*/i,new e.StaleWhileRevalidate({cacheName:"others",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
