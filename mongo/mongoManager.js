import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
//const url = `mongodb+srv://prueba:prueba@cluster0-9q0gs.mongodb.net/notasdb?retryWrites=true&w=majority`;
const url = process.env.MONGODB_URI; // traemos la url del archivo .env


export default mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

