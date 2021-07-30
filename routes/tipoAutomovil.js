const express = require('express');
const router = express.Router();
const tipoAutomovilController = require('../controllers/tipoAutomovilController');


//api/inventario
router.get('/',
    
    tipoAutomovilController.obtenerTipoAutomovil
);

module.exports = router;