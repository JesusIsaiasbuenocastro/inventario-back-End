const { json } = require('express');


exports.obtenerMarcas = (req,res) => {
    //Conectar a la bd 
   const conexiondb = require('../config/db');
 try {
        conexiondb.query('SELECT * FROM tblmarca', (err,rows) => {
        if(err) throw err;
        
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


exports.obtenerMarcasporId = (req,res) => {
    //Conectar a la bd 
   const conexiondb = require('../config/db');
 try {
     console.log(req.params.id);
        const marca = [ req.params.id ];
        conexiondb.query('SELECT * FROM tblmarca where id = ?', marca, (err,rows) => {
        if(err) throw err;
        
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
exports.crearMarca = (req,res) => {
     //Conectar a la bd 
    const conexiondb = require('../config/db');
    try {

        //validaciones
        if(req.body.nombre.trim() ==='' )
        {
            res.status(401).json({'status':401, 'msg' :'El campo nombre es obligatorio' });
            return;
        }

        //guardar el inventario
        console.log(req.body.nombre);
        const marca = [ req.body.nombre ];
        conexiondb.query(`INSERT INTO tblmarca (nombre)  values  (?)`, marca, (err, respuesta) => {
            if(err)
            {
                res.sendStatus(500);
                return;
            } 
        
            res.status(200).json({'status':200, respuesta});
        });

        conexiondb.close;
        
    } catch (error) {
        console.log(error);
        //retornar una respues al cliente en caso de marcar error
        res.status(400).send('Hubo un error');
    }
    console.log(req.body);
}


exports.actualizarMarca = (req,res) => {
    //Conectar a la bd 
   const conexiondb = require('../config/db');
 try {
     //guardar el inventario
     console.log(req.body.nombre);
     console.log(req.params.id);
     const marca = [ req.body.nombre , req.params.id ];
     conexiondb.query(`UPDATE tblmarca set nombre= (?) where id = (?) `, marca, (err, respuesta) => {
        if(err)
        {
            res.sendStatus(500);
            return;
        } 
        
       res.status(200).json({'status':200, respuesta});
     });

     conexiondb.close;
   
 } catch (error) {
     console.log(error);
     //retornar una respues al cliente en caso de marcar error
     res.status(400).send('Hubo un error');
 }
 console.log(req.body);
}

exports.eliminarMarca = async (req,res) => {
    //Conectar a la bd 
   const pool = require('../config/db');
 try {
     //guardar el inventario
     console.log(req.body.nombre);
     const marca = [  req.params.id ];
     await pool.query(`DELETE FROM  tblmarca  where id = ? `, marca, (err, respuesta) => {
        if(err)
        {
            res.sendStatus(500);
            return;
        } 
        
       res.status(200).json({'status':200, respuesta});
     });

     
 } catch (error) {
     console.log(error);
     //retornar una respues al cliente en caso de marcar error
     res.status(400).send('Hubo un error');
 }
 console.log(req.body);
}