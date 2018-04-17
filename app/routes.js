var express = require('express')
var router = express.Router()

module.exports = router
router.post('/did-you-award', function (req, res) {
  var radiogroup = req.body.radiogroup
  console.log('award_status: ' + radiogroup)
  if (radiogroup == 'yes') {
    res.redirect('/award-info')
  } else if (radiogroup == 'no') {
    res.redirect('/why-not')
  } else {
    res.redirect('/search-summary?status=ongoing')
  }
})


// Route index page
router.get('/', function (req, res) {
  res.render('index')
})
// add your routes here
router.get('/saved-searches', function (req, res) {
  res.render('saved-searches')
})
router.get('/search-summary', function (req, res) {
  res.render('search-summary')
})
router.get('/did-you-award', function (req, res) {
  res.render('did-you-award')
})
router.get('/award-details', function (req, res) {
  res.render('award-details')
})
router.get('/award-info', function (req, res) {
  res.render('award-info')
})
