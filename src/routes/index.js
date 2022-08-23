const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/fazer-pedido', function(req, res, next) {
  res.render('formulario', { title: 'Express' });
});

module.exports = router;
