//Rutas de usuarios
const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const authController = require('../controllers/authController');


router.post('/',
  [

    check('email', 'Email no valido').isEmail(),
    check('password', 'passsword min 6 c').isLength({ min: 6 }),
  ], authController.autenticarUsuario
);

module.exports = router;