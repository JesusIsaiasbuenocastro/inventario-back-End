const mysql = require('mysql');
const { promisify } = require('util');

require('dotenv').config({ path: 'variables.env' });

const { database } = require('./keys');

console.log(database);
const pool = mysql.createPool( database )

pool.getConnection( (err, connection) => {
    if( err ){
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            console.log('DATABASE CONNECTION WAS CLOSED');
        }
        if(err.code === 'ER_CON_COUNT_ERROR'){
            console.log('DATABASE HAS TO MANY CONNECTIONS');
        }
        if(err.code === 'ECONNREFUSED'){
            console.log('DATABASE CONNECTION WAS REFUSED');
        }
    }
    if( connection) connection.release();

    console.log('DB is connected');
    return;
});

//Promisify pool queryy
pool.query = promisify( pool.query );

module.exports = pool;


/*
const conexiondb = mysql.createConnection(database);

/*
  conexiondb.query('SELECT * FROM tblmarca', (err,rows) => {
    if(err) throw err;
  
    console.log('Data received from Db:');
    console.log(rows);
  });
  

  conexiondb.query = promisify( conexiondb.query);
  module.exports = conexiondb;
  */