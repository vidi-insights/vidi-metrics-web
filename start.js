'use strict'

var path = require('path');
var express = require('express');
var Emitter = require('vidi-metrics-emitter')()
var IsJSON = require ('is-json')
var Jsonic = require ('jsonic')
var Emitter = require ('vidi-metrics-emitter/emitter')()
var BodyParser = require('body-parser')

// Server part
var port = process.env.PORT || '3010'
var app = express();
app.use('/', express.static(path.join(__dirname, 'client')));


app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended: true}));


// emitt input from PastePage 
app.post('/data', function (req, res) {
    var name = req.body
     Emitter.emit(name)
     console.log('server side:' + name)
})

 

var server = app.listen(port);
console.log('Server listening on port: ' + port);



