var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var data = require('./routes/data');
var emitter = require('vidi-metrics-emitter')
var app = express();
var emit = emitter();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
// sapp.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);
app.use('/data', data);


app.post("/data", function (req, res ){
  var name = req.body.query
  var foo = JSON.stringify({ title: name[0], value: name[1] });
    // console.log(name[0], name[1]);
    // console.log(foo);
    // emit.emit(foo)
    if (isNaN(name[1]) == true) {
      console.log("wrong value, you need to enter number")
      res.send(500, 'wrong value, enter just numbers please for your data field ') 
    }
    else {
      emit.emit(foo)
      console.log(foo);
    }
    
      })


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
