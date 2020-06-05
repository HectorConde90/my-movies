import filmDAO from '../../model/film/dao.js';
import HTTPerror from 'http-errors';
const buscar = async (req, res) => {

    try {
        // Hace la llamada al módulo que se conecta a la bbdd
        const film = req.body.titulo
        const films = await filmDAO.listByTitle(film);
        
        
        
        res.json(films);

    } catch (error) {
        next(HTTPerror(err.code, { message: err.message }));


    }
}

export default buscar;