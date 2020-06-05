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
        return new Promise((resolve, reject) => {

            connection.query('INSERT INTO pelicula (pelicula.titulo, pelicula.productora) VALUES (?,?) ', [film.titulo,film.productora], function (err, rows, fields) {

                if (err)
                    throw err;

                // console.log(rows);

                resolve(rows);

            });
        })
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

                // console.log(rows);

                resolve(rows);

            });
        })
       
        
    }
    listActor(pId) {
        // Traer los actores por pelicula ejercicio viernes


        // return filmActors.filter(film => film.idPelicula === pId)
        return new Promise((resolve, reject) => {

            connection.query('select concat(a.nombre, " ", a.apellidos) as "Nombre", p.pelicula_id, peli.titulo from pelicula_actor p inner join actor a on(p.actor_id = a.id) inner join pelicula peli on(p.pelicula_id = peli.id) where peli.id = ?', pId, function (err, rows, fields) {

                if (err)
                    throw err;

                // console.log(rows);

                resolve(rows);

            });
        })

    }


    updateOne(pId, film) {
        
        console.log(pId)
        // console.log('Me llega en el update',pId,film)
        return new Promise((resolve, reject) => {

            connection.query('UPDATE pelicula SET titulo = ? WHERE id = ?', [film.titulo, pId], function (err, rows, fields) {

                if (err)
                    throw err;

                // console.log(rows);

                resolve(rows);

            });
        })

    }
    deleteOne(pId) {
        
        return new Promise((resolve, reject) => {

            connection.query('DELETE FROM pelicula WHERE id = ?',  pId, function (err, rows, fields) {

                if (err)
                    throw err;

                // console.log(rows);

                resolve(rows);

            });
        })
    }
}

export default new FilmDAO();