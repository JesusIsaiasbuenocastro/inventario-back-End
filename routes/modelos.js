const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const modelosController = require('../controllers/modelosController');

//endpoint 
//api/inventario

//api/inventario
router.get('/',

modelosController.obtenerModelos
);

router.get('/:id',

modelosController.obtenerModeloporId
);

//insertar
router.post('/',
modelosController.crearModelo
);

//Actualizar proyecto via ID
router.put('/:id',modelosController.actualizarModelo)

//Eliminar proyecto via ID
router.delete('/:id',modelosController.eliminarModelo)


module.exports = router;