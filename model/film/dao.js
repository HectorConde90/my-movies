import { films } from '../../data/film.js';
import { filmActors } from '../../data/filmactor.js'
import connection from '../../db.js'


class FilmDAO{

    constructor(){
        //conexión a la bbdd
    }

    list(){
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM mymovies.pelicula', (err, rows, fields) => {
                if (err)
                    throw err;
                resolve(rows);
            })
        })
    }

    create(film){
        
    }
    listOne(pId) {
        //    return films.find(film => film.id === Number(pId));
        return new Promise((resolve, reject) => {

            connection.query('SELECT * FROM mymovies.pelicula WHERE id = ?', pId, function (err, rows, fields) {

                if (err)
                    throw err;

                // console.log(rows);

                resolve(rows);

            });
        })
    }


        //return films.find(element => element.id===id);


    
    
    listByTitle(pFilm) {
    
    //    return films.filter(element => element.titulo.toLowerCase().includes(pFilm.toLowerCase()))
        return new Promise((resolve, reject) => {

            connection.query('SELECT * FROM mymovies.pelicula WHERE titulo LIKE  ?', `%${pFilm}%`, function (err, rows, fields) {

                if (err)
                    throw err;

                console.log(rows);

                resolve(rows);

            });
        })
       
        
    }
    listActor(pId) {
        // Traer los actores por pelicula ejercicio viernes
        return filmActors.find(film => film.idPelicula === pId)
    }
}

export default new FilmDAO();