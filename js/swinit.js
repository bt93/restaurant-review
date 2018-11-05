// Service Worker Registration
if('serviceWorker' in navigator) {
	navigator.serviceWorker.register('./sw.js', { scope: '/restaurant-review/' })
	.then((reg) => {
		console.log('Service Worker Registration Successful', reg);
	})
	.catch((err) => {
		console.log('Service Worker Registration Unsuccessful', err);
	})
} else {
	console.log('This browser does not support Service Workers.');
}