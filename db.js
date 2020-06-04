import mysql from 'mysql';



// Configuracion de conexción MySQL
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysqlroot',
    database: 'mymovies'
}
);


// Ejecutar conexion
connection.connect();


export default connection;