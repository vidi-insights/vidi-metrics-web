var Express = require('express')
var router = Express.Router()


// GET data page.
router.get('/', function (req, res, next) {
  res.render('data', {
    title: 'vidi-metrics-web'
  })
})

module.exports = router
