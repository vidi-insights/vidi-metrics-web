var Express = require('express')
var router = Express.Router()


// GET builder page.
router.get('/', function (req, res, next) {
  res.render('builder', {
    title: 'vidi-metrics-web'
  })
})

module.exports = router
