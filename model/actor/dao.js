// import { actors }  from '../../data/actor.js';
import connection from '../../db.js'
class ActorDAO {

    constructor() {
        //conexión a la bbdd
    }

    list() {
       
       
    return new Promise((resolve, reject) => {

            connection.query('SELECT * FROM mymovies.actor', function (err, rows, fields) {

                if (err)
                    throw err; 1

                // console.log(rows);

                resolve(rows);

            });
        });

       
    }

    create(actor) {

    }
}

export default new ActorDAO();