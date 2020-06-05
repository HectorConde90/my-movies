import Router from 'express';
import list from '../controller/film/list.js';
import listOne from '../controller/film/listOne.js';
import buscar from '../controller/film/buscar.js'
import create    from '../controller/film/create.js';
import updateOne from '../controller/film/updateOne.js';
import removeOne from '../controller/film/removeOne.js';
import listActor from '../controller/film/listActor.js';


const router = Router();

router.route('/')
      .get(list) // lista todas las pelis 
      .post(create) // crea una peli
      

router.route('/buscar')
      .post(buscar) // busca una peli por palabras que contenga el titulo

router.route('/:id')
      .get(listOne) // lista una peli por id
      .put(updateOne) // actualiza una peli usando el id de la ruta 
      .delete(removeOne); // elimina una peli por id

router.route('/:id/actors')
       .get(listActor);

// router.get('/',list);
// router.post('/', create);

/* router.get('/:id',listOne);
router.update('/:id',updateOne);
router.remove('/:id',removeOne);
 */


export default router;