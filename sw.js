let cacheName= "my-first-pwa";
let filesToCache = ["/", "/index.html", "/css/style.css", "/js/main.js"]


self.addEventListener("install", (e) =>{
    e.waitUntil(
        caches.open(cacheName).then(function (cache){
            return cache.addAll(filesToCache);
        })
    );
});
self.addEventListener("festch", (e) =>{
    e.respondWith(
        caches.match(e.resquest).then((response) =>{
            return response || fetch(e.resquest);
        })
    );
});