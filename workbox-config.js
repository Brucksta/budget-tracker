module.exports = {
	globDirectory: 'public/',
	globPatterns: [
		'**/*.{png,html,js,css}'
	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swDest: 'public/sw.js',
	runtimeCaching: [
		{
			urlPattern: 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
			handler: 'CacheFirst',
		},
		{
			urlPattern: 'https://cdn.jsdelivr.net/npm/chart.js',
			handler: 'CacheFirst',
		},
		{
			urlPattern: 'https://unpkg.com/dexie@latest/dist/dexie.js',
			handler: 'CacheFirst',
		},
		{
			urlPattern: /api/,
			handler: "StaleWhileRevalidate",
		},
	]

};


//find workbox build caching