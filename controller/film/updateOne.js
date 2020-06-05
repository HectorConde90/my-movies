import filmDAO from '../../model/film/dao.js';

const updateOne = async (req, res) => {

    try {
        // Hace la llamada al módulo que se conecta a la bbdd
        const id = Number(req.params.id);
        const films = await filmDAO.updateOne(id,req.body);

        res.json(films);

    } catch (error) {


    }
}

export default updateOne;