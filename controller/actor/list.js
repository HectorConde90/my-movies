import actorDAO from '../../model/actor/dao.js'

const list = async (req, res) => {

    try {
        const actors = await actorDAO.list();
        // console.log(actors)
        res.json(actors);
    } catch (error) {
        console.log(error.message);
    }
}

export default list;