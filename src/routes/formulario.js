const express = require('express');
const formularioController = require('../controllers/formularioController');

const router = express.Router();

router.get('/formulario', formularioController.index);

module.exports = router;