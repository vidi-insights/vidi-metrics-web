'use strict'

var Http = require('http')
var Express = require('express')
var Path = require('path')
var Logger = require('morgan')
var CookieParser = require('cookie-parser')
var BodyParser = require('body-parser')

var Routes = require('./routes/index')
var Data = require('./routes/data')
var Builder = require('./routes/builder')

var Emitter = require('vidi-metrics-emitter')()
var IsJSON = require('is-json')
var Jsonic = require('jsonic')

var port = process.env.PORT || '3010'
var app = Express()

app.set('port', port)
app.use(Logger('dev'))

app.set('views', Path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(BodyParser.json())
app.use(BodyParser.urlencoded({ extended: false }))

app.use(CookieParser())

app.use(Express.static(Path.join(__dirname, 'public')))

app.use('/', Routes)
app.use('/data', Data)
app.use('/builder', Builder)


// check is input from index page is valid json , parse if not and emitt it
app.post('/data', function (req, res) {
  var name = req.body.query
  if (!name) {
    console.log('Data must be valid JSON')
    res.send(500, 'Data must be valid JSON')
  }
  if (IsJSON(name) === false) {
    var foo = Jsonic.stringify(name)
    var goodJson = Jsonic(foo)
    Emitter.emit(goodJson)
    console.log(goodJson)
  }
  else {
    Emitter.emit(JSON.parse(name))
    console.log(name)
  }
})

// check inputs from builder page build to json object and emitt it
app.post('/builder', function (req, res) {
  var name = req.body.name
  var value = req.body.value
  var tag = req.body.tag

  if (!name || !value || !tag) {
    console.log('Data fields cant be empty')
    res.send(500, 'Data fields cant be empty')
  }
  if (IsJSON(name) === false) {
    var valueJasonic = Jsonic.stringify(value)
    var tagJasonic = Jsonic.stringify(tag)
    var values = Jsonic(valueJasonic)
    var tags = Jsonic(tagJasonic)
    var foo = {name, values, tags}
    Emitter.emit(foo)
    console.log(foo)
  }
  else {
    Emitter.emit(JSON.parse(value))
    console.log(value)
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
app.use(function (err, req, res, next) {
  res.status(err.status || 500)
  res.render('error', {
    message: err.message,
    error: {}
  })
})

var server = Http.createServer(app)
server.listen(port)

console.log('Listening at: ' + port)
