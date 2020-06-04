import express from 'express';
import cors from 'cors';

import filmRouter from './router/filmRouter.js';
// import actorRouter from './routers/actorRouter.js';
// import directorRouter from './routers/directorRouter.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/films',filmRouter);
/* app.use('/directors', directorRouter);
app.use('/actor', actorRouter); */


const PORT = process.env.PORT || 9000;
app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))