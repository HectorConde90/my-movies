import MongoClient from 'mongodb';

const url = "mongodb://localhost:27017";
// Conexion con el servicio con mongodb
MongoClient.connect(url, (err, conecction) => {
    
    if (err)
        console.log(err);
        
    console.log('Conexion con MongoDB Ok!');
    
    const mymovies = conecction.db('mymovies');
    // Saca todos los registros de una coleccion
    mymovies.collection('film').find({}).toArray((err, items) => {
        if (err)
            console.log(err);
            
        console.log(items);
        // items.forEach((elem)=>{console.log('Actor: ', elem.nombre)});
        
        
    }); 
});