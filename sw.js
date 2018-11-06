const cachedItems = [
				'/restaurant-review/index.html',
				'/restaurant-review/restaurant.html',
				'/restaurant-review/data/restaurants.json',
				'/restaurant-review/js/dbhelper.js',
				'/restaurant-review/js/main.js',
				'/restaurant-review/js/restaurant_info.js',
				'/restaurant-review/js/swinit.js',
				'/restaurant-review/css/styles.css',
				'/restaurant-review/img/1.jpg',
				'/restaurant-review/img/2.jpg',
				'/restaurant-review/img/3.jpg',
				'/restaurant-review/img/4.jpg',
				'/restaurant-review/img/5.jpg',
				'/restaurant-review/img/6.jpg',
				'/restaurant-review/img/7.jpg',
				'/restaurant-review/img/8.jpg',
				'/restaurant-review/img/9.jpg'
				];

const version = 'v1';

// Installs service worker and caches files
self.addEventListener('install', (event) => {
	console.log('Servive Worker Installing');
	event.waitUntil(
		caches.open(version).then( (cache) => {
			return cache.addAll(cachedItems);
		})
	);
});
// Fetches Cached files
self.addEventListener('fetch', (event) => {
	event.respondWith(
		caches.match(event.request)
		.then( (res) => {
			if (res) {
				return res
			} 
			return fetch(event.request);
		})
	)
});