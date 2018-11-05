self.addEventListener('install', (event) => {
	console.log('Servive Worker Installing');
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
		})
	);
});

self.addEventListener('fetch', (event) => {
	event.respondWith(
		caches.match(event.request)
	)
	.then( (res) => {
		if(res !== undefined) {
			return res;
		} else {
			return fetch(event.request).then( (res) => {
				let reponseClone = res.clone();

				caches.open('v1').then( (cache) => {
					cache.put(event.request, reponseClone);
				});
				return res;
			})
		}
	});
})