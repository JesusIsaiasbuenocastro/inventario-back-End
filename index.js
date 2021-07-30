const express = require('express');
const cors      = require('cors');

//crear el servidor
const app = express();

app.use( cors() );

app.use( express.static( 'public') );

app.use (express.json({ extended:true }));

//CREAR PUERTO
const PORT = process.env.PORT || 4000;

//definir las rutas 
app.use('/api/marcas', require('./routes/marcas'));
app.use('/api/modelos', require('./routes/modelos'));
app.use('/api/tipoAutomovil', require('./routes/tipoAutomovil'));
app.use('/api/inventario', require('./routes/inventario'));


//Definir la pagina principal 

app.listen(PORT, () => {
    console.log(`El servidor esta funcionando en el puerto ${PORT}` );
})