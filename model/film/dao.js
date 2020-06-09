// import connection from '../../mongo/mongoManager.js';
import Film from './model.js'

class FilmDAO{

    constructor(){
        //conexión a la bbdd
    }

    list(){
        return Film.find({});
    }

    create(pFilm) {
        
        const film = new Film({
            titulo: film.titulo,
            date: new Date(),
            productora: film.productora,
        });
        // console.log(req.body);
        film.save().then(result => {
            console.log('note saved')
            res.json(result);

            mongoose.connection.close();
        })
        return pFilm;
    }
    
    listOne(pId) {
        //    return films.find(film => film.id === Number(pId));
        
    }


        //return films.find(element => element.id===id);


    
    
    listByTitle(pFilm) {
    
    //    return films.filter(element => element.titulo.toLowerCase().includes(pFilm.toLowerCase()))
       
       
        
    }
    listActor(pId) {
        

    }


    updateOne(pId, film) {
        
       
        

    }
    deleteOne(pId) {
        
        
    }
}

export default new FilmDAO();