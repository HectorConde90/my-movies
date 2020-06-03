import filmDAO from '../../models/film/dao.js';

const list = async (req, res) =>{

    try {
    
        const films = await filmDAO.list();

        res.json(films);

    } catch (error){


    }
}

export default list;