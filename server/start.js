'use strict'

var app = require('./app')
var http = require('http')

var port = process.env.PORT || '3010'
app.set('port', port)

var server = http.createServer(app)

console.log('Listening at: ' + port)
server.listen(port)
