import filmDAO from '../../model/film/dao.js';
import HTTPerror from 'http-errors'
const listOne = async (req, res,next) => {

    try {
        if (req.params.id === undefined || Number(req.params.id) > 1000) {
            next(HTTPerror(400,{message: 'error en los parametros de entrada'}))
        } else {
            // Hace la llamada al módulo que se conecta a la bbdd
        const film = await filmDAO.listOne(Number(req.params.id));
        
        res.json(film);

        }
        

    } catch (error) {
        next(HTTPerror(err.code, {message:err.message}));

    }
}

export default listOne;