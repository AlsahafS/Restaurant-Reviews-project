


//resource:https://developers.google.com/web/
// install
self.addEventListener('install', function(e) {
    event.waitUntil(
        caches.open('restaurant-reviews-cache').then(function(cache) {
          return cache.addAll([
            '/',
            'index.html',
            'restaurant.html',
            'css/style.css',
            'data/restaurant.json',
            'js/dbhelper.js',
            'js/main.js',
            'js/restaurant.js',
            'img/1.jpg',
            'img/2.jpg',
            'img/3.jpg',
            'img/4.jpg',
            'img/5.jpg',
            'img/6.jpg',
            'img/7.jpg',
            'img/8.jpg',
            'img/9.jpg',
            'img/10.jpg'
     
     
          ]);
        })
      );
});

//feach
self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // Cache hit - return response
          if (response) {
            return response;
          }
          return fetch(event.request);
        }
      )
    );
  });