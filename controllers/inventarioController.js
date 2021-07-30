const { json } = require('express');


exports.obtenerInventario = (req,res) => {
    //Conectar a la bd 
   const conexiondb = require('../config/db');
 try {
        conexiondb.query(`SELECT i.id, i.id_marca, ma.nombre as marca, i.id_modelo, m.modelo, i.id_tipo, t.nombreTipo, i.color, i.cantidad, i.kilometraje 
                        FROM tblinventarioautomoviles i inner join tblmarca ma on i.id_marca = ma.id inner join tblmodelos m on i.id_modelo = m.id 
                        inner join tbltipo t on i.id_tipo = t.id`, (err,rows) => {
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


exports.obtenerAutomovilporId = (req,res) => {
    //Conectar a la bd 
   const conexiondb = require('../config/db');
 try {
        const automovil = [req.params.id];
        
        conexiondb.query('select id,id_marca, id_modelo,color,id_tipo, cantidad, kilometraje , date_format(fecha_entrada, "%Y-%m-%d") as fecha_entrada  from tblinventarioautomoviles where id = ? ',automovil, (err,rows) => {
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


exports.agregarAutomovil = (req,res) => {
     //Conectar a la bd 
    const conexiondb = require('../config/db');
    try {

        //validaciones
       

        //guardar el inventario
        console.log(req.body.nombre);
        console.log(req.body.nombre);
        const automovil = [ req.body.id_marca,req.body.id_modelo,req.body.color,req.body.id_tipo, req.body.cantidad,req.body.kilometraje,req.body.fecha_entrada];
        conexiondb.query(`INSERT INTO tblinventarioautomoviles (id_marca,id_modelo,color,id_tipo,cantidad, kilometraje,fecha_entrada)  values  (?,?,?,?,?,?,?)`, automovil, (err, respuesta) => {
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


exports.actualizarInventario = (req,res) => {
    //Conectar a la bd 
    console.log('Entro a actualizar inventario')
   const conexiondb = require('../config/db');
 try {
     //guardar el inventario
     console.log(req.body.nombre);
     console.log(req.params.id);
     console.log(new Date(req.body.fecha_entrada).toLocaleString());
     const automovil = [ req.body.id_marca,req.body.id_modelo,req.body.color,req.body.cantidad,req.body.kilometraje,req.body.id_tipo, new Date(req.body.fecha_entrada).toLocaleString(),req.params.id];
     conexiondb.query(`UPDATE tblinventarioautomoviles set id_marca = ? ,id_modelo = ? ,color =?,cantidad= ?, kilometraje= ? ,id_tipo = ? ,fecha_entrada = ? where id = (?) `, automovil, (err, respuesta) => {
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

exports.eliminarAutomovil = (req,res) => {
    //Conectar a la bd 
   const conexiondb = require('../config/db');
 try {
     //guardar el inventario
     console.log(req.body.nombre);
     const marca = [  req.params.id ];
     conexiondb.query(`DELETE FROM  tblinventarioautomoviles  where id = ? `, marca, (err, respuesta) => {
        if(err)
        {
            res.status(400).json({'msg':'Ocurrio un error al actualizar el registro',err});
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