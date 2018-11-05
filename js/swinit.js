// Service Worker Registration
if('serviceWorker' in navigator) {
	navigator.serviceWorker.register('./sw.js', { scope: '/mws-restaurant-stage-1/' })
	.then((reg) => {
		console.log('Service Worker Registration Successful', reg);
	})
	.catch((err) => {
		console.log('Service Worker Registration Unsuccessful', err);
	})
}