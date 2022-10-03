const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/', function(req, res,) {
  res.render('formulario', { title: 'Express' });
});


module.exports = router;
