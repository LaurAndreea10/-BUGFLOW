const CACHE='bugflow-v8';
const CORE=['./','./index.html','./style.css','./v8.css','./app.js','./manifest.webmanifest','./icon.svg','./og-image.svg'];
const OPTIONAL=['https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(async cache=>{await cache.addAll(CORE);await Promise.allSettled(OPTIONAL.map(url=>cache.add(url)))})));
self.addEventListener('activate',event=>event.waitUntil(Promise.all([caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)))),self.clients.claim()])));
self.addEventListener('message',event=>{if(event.data?.type==='SKIP_WAITING')self.skipWaiting()});
self.addEventListener('fetch',event=>{if(event.request.method!=='GET')return;event.respondWith(caches.match(event.request).then(hit=>hit||fetch(event.request).then(response=>{if(response.ok){const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(event.request,copy))}return response}).catch(()=>event.request.mode==='navigate'?caches.match('./index.html'):Response.error())))});
