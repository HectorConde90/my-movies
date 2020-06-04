import express from 'express';
import cors from 'cors';
import connection from './db.js'

import filmRouter from './router/filmRouter.js';
import actorRouter from './router/actorRouter.js';
import directorRouter from './router/directorRouter.js';



// Rutas y definicion de la api con express
const app = express();

app.use(cors());
app.use(express.json());

app.use('/film',filmRouter);
app.use('/director', directorRouter);
app.use('/actor', actorRouter); 

// Cerrar conexion mySQL



// connection.end();

const PORT = process.env.PORT || 9000;
app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))