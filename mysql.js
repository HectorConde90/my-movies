import mysql from 'mysql';


// Configurar conexión
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysqlroot',
    database: 'ejercicio_hr'
    }
);

// Ejecutar conexión
connection.connect();

console.log("HA FUNCIONADO LA CONEXIÓN CON LA BASE DE DATOS");


//// QUERIES
/*
connection.query('SELECT * FROM employees', function (err, rows, fields) {
​
    if(err)
        throw err;
​
    console.log("QUERY LISTA");
​
    console.log("Num registros:" + rows.length );
​
​
    console.log("Registros:" );
    //console.log(rows);
    rows.forEach(element => {
        //console.log(element.FIRST_NAME + " " + element.LAST_NAME);
    });
​
    //console.log("Campos:" , fields );
​
});
*/



// QUERY CON PARAMETROS

/*
let employee_id = 100;
​
connection.query('SELECT * FROM employees WHERE employee_id = ?', employee_id , function (err, rows, fields) {
​
    if(err)
        throw err;
​
    console.log(rows);
​
});
​
*/



/*
let newName = 'Stephen';
​
connection.query("UPDATE employees SET FIRST_NAME = ? WHERE employee_id = ?  ", [newName, employee_id] , function (err) {
​
    if(err)
        throw err;
​
console.log("Query 2 ok")
​
});
​
​
​
​
​
*/
/*
connection.query("INSERT INTO employees (FIRST_NAME,LAST_NAME,EMAIL,HIRE_DATE,JOB_ID) VALUES (?,?,?,NOW(),?) ", 
                ["Michael", "Jackson","MJ","FI_ACCOUNT"] , function (err, results) {
​
    if(err)
        throw err;
​
    console.log("Inserted ID: " + results.insertId);
    console.log("Num rows affected: " + results.affectedRows);
    
​
});
*/
/*
connection.query("DELETE FROM employees WHERE employee_id = ?", 
                0 , function (err, results) {
​
    if(err)
        throw err;
​
    console.log("Num rows affected: " + results.affectedRows);
​
});
*/





// CERRAR LA CONEXIÓN
connection.end();
