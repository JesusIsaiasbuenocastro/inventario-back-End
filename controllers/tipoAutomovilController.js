const { json } = require('express');


exports.obtenerTipoAutomovil = (req,res) => {
    //Conectar a la bd 
    console.log('Entro al proceso get de tipoautomovil');
   const conexiondb = require('../config/db');
 try {
        conexiondb.query('SELECT * FROM tbltipo', (err,rows) => {
            if(err)
            {
                console.log(err);
                res.sendStatus(500);
                return;
            } 
        
        //si todo esta bien mandar 
        res.status(200).json({rows});
      });
     conexiondb.close;
     
 } catch (error) {
     console.log(error);
     //retornar una respues al cliente en caso de marcar error
     res.status(400).send('Hubo un error');
 }
 console.log(req.body);
}