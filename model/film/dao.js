import {films} from '../../data/film.js';

class FilmDAO{

    constructor(){
        //conexión a la bbdd
    }

    list(){
        return films;
    }

    create(film){
        
    }
}

export default new FilmDAO();