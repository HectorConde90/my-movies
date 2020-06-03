import {films} from '../../data/films.js';

class FilmDAO{

    constructor(){
        //conexión a la bbdd
    }

    list(){
        return films;
    }
}

export default new FilmDAO();