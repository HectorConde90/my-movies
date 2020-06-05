import filmDAO from '../../model/film/dao.js';

const removeOne = async (req, res) => {

    try {
        // Hace la llamada al módulo que se conecta a la bbdd

        const films = await filmDAO.deleteOne(Number(req.params.id));

        res.json(films);

    } catch (error) {


    }
}

export default removeOne;