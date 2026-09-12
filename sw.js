const CACHE='bugflow-v10.0.1';
const CORE=['./','./index.html','./offline.html','./style.css','./v8.css','./v9.css','./app.js','./v9.js','./modules/security.js','./modules/graph-analysis.js','./modules/export.js','./modules/projects.js','./modules/i18n.js','./modules/editor.js','./modules/graph-client.js','./workers/graph-worker.js','./manifest.webmanifest','./icon.svg','./icon-maskable-512.png','./og-image.svg'];
const OPTIONAL=['https://cdn.jsdelivr.net/npm/mermaid@11.4.1/dist/mermaid.esm.min.mjs'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(async cache=>{await cache.addAll(CORE);await Promise.allSettled(OPTIONAL.map(url=>cache.add(url)))})));
self.addEventListener('activate',event=>event.waitUntil(Promise.all([caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)))),self.clients.claim()])));
self.addEventListener('message',event=>{if(event.data?.type==='SKIP_WAITING')self.skipWaiting()});
self.addEventListener('fetch',event=>{if(event.request.method!=='GET')return;event.respondWith(caches.match(event.request).then(hit=>hit||fetch(event.request).then(response=>{if(response.ok){const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(event.request,copy))}return response}).catch(()=>event.request.mode==='navigate'?caches.match('./offline.html'):Response.error())))});
