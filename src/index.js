'use strict';

const server = require('./server'),
	createCheckout = require('./checkout/rest/createCheckout.js'),
	retrieveCheckout = require('./checkout/rest/retrieveCheckout.js'),
	retrieveHeartbeat = require('./checkout/rest/retrieveHeartbeat.js');

let serverInstance = server.create();

server.start(serverInstance, 3000).tap(() => {
	serverInstance.post('/api/checkouts', createCheckout);
	serverInstance.get('/api/checkouts/:checkoutId', retrieveCheckout);
	serverInstance.get('/api/heartbeat', retrieveHeartbeat);

	console.log('Up and running');
});