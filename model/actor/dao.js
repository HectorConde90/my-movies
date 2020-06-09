// import { actors }  from '../../data/actor.js';
// import connection from '../../db.js'
class ActorDAO {

    constructor() {
        //conexión a la bbdd
    }

    list() {
       
       
    return new Promise((resolve, reject) => {

            connection.query('SELECT * FROM actor', function (err, rows, fields) {

                if (err)
                    throw err; 1

                // console.log(rows);

                resolve(rows);

            });
        });

       
    }

    create(actor) {

    }

    listPeliculas(pId) {
        // console.log(pId)
        return new Promise((resolve, reject) => {

            connection.query('select concat(a.nombre, " " , a.apellidos) as "Nombre" , peli.titulo, peli.anyo from actor a join pelicula_actor p on(a.id = p.actor_id) join pelicula peli on(peli.id = p.pelicula_id) where a.id = ?', pId, function (err, rows, fields) {

                if (err)
                    throw err; 1

                // console.log(rows);

                resolve(rows);

            });
        });
    }
}

export default new ActorDAO();