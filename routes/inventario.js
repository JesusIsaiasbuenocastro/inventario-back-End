const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const inventarioController = require('../controllers/inventarioController');

//endpoint 
//api/inventario

//api/inventario
router.get('/',
    inventarioController.obtenerInventario
);

router.get('/:id',

inventarioController.obtenerAutomovilporId
);

//insertar
router.post('/',
    inventarioController.agregarAutomovil
);

//Actualizar proyecto via ID
router.put('/:id',inventarioController.actualizarInventario)

//Eliminar proyecto via ID
router.delete('/:id',inventarioController.eliminarAutomovil)


module.exports = router;