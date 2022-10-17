//Nombre de nuestro cache personalizado /
const staticCacheName = 'site-static-v1';
const dynamicCacheName = 'site-dynamic-v1';
//Direcciones de los recurssos que seran almacenados en cache
const assets = [
    '/',
    '/index.html',
    '/js/app.js',
    '/js/ui.js',
    '/js/materialize.min.js',
    '/css/styles.css',
    '/css/materialize.min.css',
    '/img/dish.png',
    '/components/vm-nav.js',//
    '/pages/fallback.html',
    'https://fonts.googleapis.com/icon?family=Material+Icons',//Iconos Google
    'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js'//LitE
];

//Funcion que limita el tamaño del cache
const limitCacheSize = (name, size) => {
    caches.open(name).then(cache => {
        cache.keys().then(keys => {
            if(keys.length > size){
                cache.delete(keys[0]).then(limitCacheSize(name, size));
            }
        })
    })
};
 
//Instalar Service Worker
self.addEventListener('install', evt => {
    //console.log('Service Worker a sido INSTALADO');
    evt.waitUntil( //Esta funcion esperara hasta que termine de procesarse todo lo que esta adentro
        caches.open(staticCacheName).then(cache => {
            console.log('Catchig Sell Assets');
            cache.addAll(assets); // Aqui estamos cargando los archivos elegidos en assets para mandarlos al cache
        })
    );
});

//Activar Event Service Worker/
self.addEventListener('activate', evt => {
    //console.log('Service Worker a sido ACTIVADO');
    evt.waitUntil(
        caches.keys().then(keys => {
            //console.log(keys);
            return Promise.all(keys
                .filter(key => key !== staticCacheName && key !== dynamicCacheName) //Aqui filtramos los caches que no son iguales a static o al dynamic
                .map(key => caches.delete(key)) //Y aqui los eliminamos
                )
        })
    )
});

//Eventos de busqueda (fetch) -
self.addEventListener('fetch', evt => {
    //console.log('Fetch Event: ', evt);
    evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
           return cacheRes || fetch(evt.request).then(fetchRes => {
             return caches.open(dynamicCacheName).then(cache =>{
                cache.put(evt.request.url, fetchRes.clone());
                limitCacheSize(dynamicCacheName, 15); //Llamamos a la funcion para delimitar el numeor de caches
                return fetchRes;
             })
           }); 
        }).catch(() => {
            if(evt.request.url.indexOf('.html')){
              return caches.match('/pages/fallback.html') //En caso de no encontrar el recurso mostrara la pagina 404
            }
      })
    );
});