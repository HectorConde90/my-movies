import mysql from 'mysql';



// Configuracion de conexción MySQL
// let connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'mysqlroot',
//     database: 'mymovies'
// }
// );

let connection = mysql.createConnection({
    host: 'sql7.freemysqlhosting.net',
    user: 'sql7346312',
    password: 'g21THZ2Zcn',
    database: 'sql7346312'
}
);



// Ejecutar conexion
connection.connect();


export default connection;