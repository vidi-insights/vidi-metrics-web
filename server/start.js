'use strict'

// modules required to start server
var Path = require('path')
var Express = require('express')
var Emitter = require('vidi-metrics-emitter')()
var BodyParser = require('body-parser')

// Server part, starts server on port 3010
var port = process.env.PORT || '3010'
var app = Express()
app.use('/', Express.static(Path.join(__dirname, '../dist')))
app.use(BodyParser.json())
app.use(BodyParser.urlencoded({extended: true}))

// passing submitted data from PastePage and BuilderPage to emitter 
app.post('/data', function (req, res) {
  var name = req.body
  Emitter.emit(name)
  console.log('server side:' + name)
})

// Printing port number in conslole
var server = app.listen(port)
console.log('Server listening on port localhost:' + port)
