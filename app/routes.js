var express = require('express')
var router = express.Router()

module.exports = router
router.post('/did-you-award', function (req, res) {
  var radiogroup = req.body.radiogroup
  if (radiogroup == 'yes') {
    res.redirect('/award-info')
  } else if (radiogroup == 'no') {
    res.redirect('/why-not')
  } else {
    res.redirect('/search-summary?status=ongoing')
  }
})
router.post('/why-not', function (req, res) {
  res.redirect('/search-summary?status=notdone')
})
router.post('/award-details', function (req, res) {
  res.redirect('/search-summary?status=done')
})
router.get('/', function (req, res) {
  res.render('index')
})
router.get('/saved-searches', function (req, res) {
  res.render('saved-searches')
})
router.get('/search-summary', function (req, res) {
  res.render('search-summary', {status: req.query.status})
})
router.get('/did-you-award', function (req, res) {
  res.render('did-you-award')
})
router.get('/award-details', function (req, res) {
  res.render('award-details')
})
router.get('/why-not', function (req, res) {
  res.render('why-not')
})
router.get('/award-info', function (req, res) {
  res.render('award-info')
})
