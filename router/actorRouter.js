import Router from 'express';
import list from '../controller/actor/list.js';
import peliculaActor from '../controller/actor/peliculaActor.js'
// import listOne   from '../controllers/actor/listOne.js';
// import create    from '../controllers/actor/create.js';
// import updateOne from '../controllers/actor/updateOne.js';
// import removeOne from '../controllers/actor/removeOne.js';



const router = Router();

router.route('/')
      .get(list)
//       .post(create);
router.route('/:id/peliculas')
      .get(peliculaActor)


// router.route('/:id')
//       .get(listOne)
//       .update(updateOne)
//       .remove(removeOne);
 

export default router;