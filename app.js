import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/films',filmRouter);
app.use('/directors', directorRouter);
app.use('/actor', actorRouter);


const PORT = process.env.PORT || 9000;
express.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))