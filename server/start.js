'use strict'

var http = require('http')
var express = require('express')
var path = require('path')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var routes = require('./routes/index')
var data = require('./routes/data')
var emitter = require('vidi-metrics-emitter')()
var isJSON = require('is-json')
var jsonic = require('jsonic')

var port = process.env.PORT || '3010'
var app = express()

app.set('port', port)
app.use(logger('dev'))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cookieParser())

app.use(express.static(path.join(__dirname, 'public')))

app.use('/', routes)
app.use('/data', data)


//check is input is valid jason and emitt it 
app.post('/data', function (req, res ){
  var name = req.body.query
  if (!name ){
    console.log('Data must be valid JSON')
    res.send(500, 'Data must be valid JSON')
  } 
  if ( isJSON(name) == false) {
    var foo = jsonic.stringify(name)
    var goodJson = jsonic(foo) 
    emitter.emit(goodJson)
    console.log(goodJson)
  }
  else {  
    emitter.emit(JSON.parse(name))
    console.log(name)
  }
  
})


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// development error handler will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500)
    res.render('error', {
      message: err.message,
      error: err
    })
  })
}

// production error handler no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500)
  res.render('error', {
    message: err.message,
    error: {}
  })
})

var server = http.createServer(app)
server.listen(port)

console.log('Listening at: ' + port)
