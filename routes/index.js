var express = require('express');
var router = express.Router();
// var React = require('react');
// var ReactDOMServer = require('react-dom/server');
// var HomePage = React.createFactory(require('../components/_homePage.jsx'));
// var reactHtml = ReactDOMServer.renderToString(HomePage({}));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
      title: 'MemoryApp',
      view: 'content'
  });
});

router.get('/login', function(req, res, next) {
  res.render('login', {
      title: 'MemoryApp',
      view: 'login'
  });
});

module.exports = router;
