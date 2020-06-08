import mongoose from 'mongoose';

const filmSchema = new mongoose.Schema({
    titulo: String,
    titulo_original: String,
    anyo: String,
    productora: String,
    musica: String,
    fotografia: String,
    premios: String,
    pais: String,
    duracion: Number,
    idsoporte: Number,
})

export default filmSchema;