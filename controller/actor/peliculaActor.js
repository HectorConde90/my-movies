import actorDAO from '../../model/actor/dao.js'

const listPeliculas = async (req, res) => {

    try {
        const peliculas = await actorDAO.listPeliculas(req.params.id);
        // console.log(actors)
        res.json(peliculas);
    } catch (error) {
        console.log(error.message);
    }
}

export default listPeliculas;