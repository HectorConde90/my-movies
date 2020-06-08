import mongoose from 'mongoose';
import filmSchema from './schema.js';

// const Note = mongoose.model('Note', noteSchema)

const Film = mongoose.model('Film', filmSchema);

export default Film;