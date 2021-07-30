const { json } = require('express');


exports.obtenerModelos = (req,res) => {
    //Conectar a la bd 
   const conexiondb = require('../config/db');
 try {
        conexiondb.query(`SELECT md.id,md.modelo,md.id_marca,mc.nombre as marca,md.id_tipo, t.nombretipo FROM tblmodelos md
        inner join tblmarca mc on md.id_marca = mc.id
        inner join tbltipo t on md.id_tipo = t.id `, (err,rows) => {
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

exports.crearModelo = (req,res) => {
     //Conectar a la bd 
    const conexiondb = require('../config/db');
    try {
        console.log(req.body.id_marca);
        console.log(req.body.modelo);
        console.log(req.body.id_tipo);
        //validaciones
        

        //guardar el inventario
        
        const modelo = [ req.body.id_marca, req.body.modelo, req.body.id_tipo ];
        conexiondb.query(`INSERT INTO tblmodelos (id_marca,modelo,id_tipo)  values  (?,?,?)`, modelo, (err, respuesta) => {
            if(err)
            {
                console.log(err);
                res.sendStatus(500);
                return;
            } 
        
            res.status(200).json({'status':200, respuesta});
        });

        conexiondb.close;
        
    } catch (error) {
        //console.log(error);
        //retornar una respues al cliente en caso de marcar error
        res.status(400).send('Hubo un error');
    }
    //console.log(req.body);
}

exports.obtenerModeloporId = (req,res) => {
    //Conectar a la bd 
   const conexiondb = require('../config/db');
 try {
     console.log(req.params.id);
        const marca = [ req.params.id ];
        conexiondb.query('SELECT * FROM tblmodelos where id = ?', marca, (err,rows) => {
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

exports.actualizarModelo = (req,res) => {
    //Conectar a la bd 
   const conexiondb = require('../config/db');
 try {
     //guardar el inventario
     console.log(req.body.id_marca);
     console.log(req.body.modelo);
     console.log(req.body.id_tipo);
     console.log(req.params.id);
     const marca = [ req.body.id_marca ,req.body.modelo,req.body.id_tipo, req.params.id ];
     conexiondb.query(`UPDATE tblmodelos set id_marca= (?), modelo = (?) , id_tipo= (?) where id = (?) `, marca, (err, respuesta) => {
        if(err)
        {
            res.sendStatus(500);
            console.log(err);
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

exports.eliminarModelo = (req,res) => {
    //Conectar a la bd 
   const conexiondb = require('../config/db');
 try {
     //guardar el inventario
     console.log(req.body.nombre);
     const marca = [  req.params.id ];
     conexiondb.query(`DELETE FROM  tblmodelos  where id = ? `, marca, (err, respuesta) => {
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