import Router from 'express';
import list from 'list.js';
import listOne   from '../controllers/films/listOne.js';
import create    from '../controllers/films/create.js';
import updateOne from '../controllers/films/updateOne.js';
import removeOne from '../controllers/films/removeOne.js';
import listActor from '../controllers/films/listActor.js';


const router = Router();

router.route('/')
      .get(list)
      .post(create);

router.route('/:id')
      .get(listOne)
      .update(updateOne)
      .remove(removeOne);

router.route('/:id/actors')
      .get(listActor);

// router.get('/',list);
// router.post('/', create);

/* router.get('/:id',listOne);
router.update('/:id',updateOne);
router.remove('/:id',removeOne);
 */


export default router;