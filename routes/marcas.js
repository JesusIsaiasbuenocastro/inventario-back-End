const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const marcasController = require('../controllers/marcasController');

//endpoint 
//api/inventario

//api/inventario
router.get('/',

    marcasController.obtenerMarcas
);

router.get('/:id',

    marcasController.obtenerMarcasporId
);

//insertar
router.post('/',
    marcasController.crearMarca
);

//Actualizar proyecto via ID
router.put('/:id',marcasController.actualizarMarca)

//Eliminar proyecto via ID
router.delete('/:id',marcasController.eliminarMarca)


module.exports = router;