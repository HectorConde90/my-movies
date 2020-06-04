import filmDAO from '../../model/film/dao.js';

const listActors = async (req, res) => {

    try {
        // Hace la llamada al módulo que se conecta a la bbdd
        const actors = await filmDAO.listActor(Number(req.params.id));

        res.json(actors);

    } catch (error) {


    }
}

export default listActors;