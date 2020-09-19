//Rutas de usuarios
const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

const { check } = require('express-validator');

router.post('/',
  [
    check('nombre', 'Nombre Obligatorio').not().isEmpty(),
    check('email', 'Email no valido').isEmail(),
    check('password', 'passsword min 6 c').isLength({ min: 6 }),
  ], usuarioController.crearUsuario);

module.exports = router;