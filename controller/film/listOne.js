import filmDAO from '../../model/film/dao.js';

const listOne = async (req, res) => {

    try {
        // Hace la llamada al módulo que se conecta a la bbdd
        const film = await filmDAO.listOne(Number(req.params.id));
        
        res.json(film);

    } catch (error) {


    }
}

export default listOne;