import filmDAO from '../../model/film/dao.js';

const create = async (req, res) => {

    try {
        // Hace la llamada al módulo que se conecta a la bbdd
        
        const films = await filmDAO.create(req.body);
        console.log('pelicula cargada')
        // res.json(films);

    } catch (error) {


    }
}

export default create;