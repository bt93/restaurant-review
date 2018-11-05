self.addEventListener('install', (event) => {
	console.log('Event:', event);
	event.waitUntil(
		caches.open('v1').then( (cache) => {
			return cache.addAll([
				'index.html',
				'restaurant.html',
				'/data/restaurants.json',
				'/js/dbhelper.js',
				'/js/main.js',
				'/js/restaurant_info.js',
				'/js/swinit.js',
				'/css/styles.css',
				'/img/'
			]);
			console.log('Cache: ', cache);
		})
	);
});