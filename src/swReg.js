// Регистрируем sw
if ('serviceWorker' in navigator) {
    console.log("SW");
    navigator.serviceWorker.register('/static/sw.js', {scope: './'})
        .then(() => navigator.serviceWorker.ready.then((reg) => {
            reg.sync.register('data');
            if(reg.installing) {
                console.log('Service worker installing');
            } else if(reg.waiting) {
                console.log('Service worker installed');
            } else if(reg.active) {
                console.log('Service worker active');
            }
            console.log('ServiceWorker registration success ');
        }))
        .catch((err) => console.log('ServiceWorker registration failed: ', err, "  NEW NEW NEW NEW "));

}