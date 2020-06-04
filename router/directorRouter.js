import Router from 'express';
import list from '../controller/director/list.js';
// import listOne   from '../controllers/director/listOne.js';
// import create    from '../controllers/director/create.js';
// import updateOne from '../controllers/director/updateOne.js';
// import removeOne from '../controllers/director/removeOne.js';



const router = Router();

router.route('/')
      .get(list)
//       .post(create);

// router.route('/:id')
//       .get(listOne)
//       .update(updateOne)
//       .remove(removeOne);
 
export default router;