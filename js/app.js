if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js')
    .then((reg) => console.log('Service Worker REGISTRADO', reg))
    .catch((err) => console.log('Service Worker NO REGISTRADO', err));
}