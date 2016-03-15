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

app.post('/data', function (req, res ){
  var name = req.body.query

  if (isJSON(name)) {
    emitter.emit(name)
    console.log(name)
  }
  else {
    console.log('Data must be valid JSON')
    res.send(500, 'Data must be valid JSON')
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
