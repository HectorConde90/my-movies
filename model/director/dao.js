import { directors } from '../../data/director.js';
import connection from '../../db.js'

class DirectorDAO {

    constructor() {
        //conexión a la bbdd
    }

    list() {
        return new Promise((resolve, reject) => {

            connection.query('SELECT * FROM mymovies.director', function (err, rows, fields) {

                if (err)
                    throw err;

                console.log(rows);

                resolve(rows);

            });
        })
    }

    create(director) {

    }
}

export default new DirectorDAO();