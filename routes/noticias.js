var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('noticia/index', { title: 'Express' });
});

router.get('/01', function(req, res, next) {
  res.render('noticia/index2', { title: 'Express' });
});

module.exports = router;