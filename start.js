'use strict'

var path = require('path');
var express = require('express');
var Emitter = require('vidi-metrics-emitter')()
var IsJSON = require ('is-json')
var Jsonic = require ('jsonic')
var Emitter = require ('vidi-metrics-emitter/emitter')
var BodyParser = require('body-parser')


//var Data = require('./routes/data')
// Server part
var app = express();
app.use('/', express.static(path.join(__dirname, 'client')));

var server = app.listen(3010);
console.log('Server listening on port 3010');

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended: true}));


 




