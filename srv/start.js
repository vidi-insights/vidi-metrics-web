/**
* Module dependencies.
*/

var app = require('../app');
var debug = require('debug')('nameme:server');
var http = require('http');

/**
* Get port from environment and store in Express.
*/

var port = process.env.PORT || '3010';
app.set('port', port);

/**
* Create HTTP server.
*/

var server = http.createServer(app);

/**
* Listen on provided port, on all network interfaces.
*/

server.listen(port);

