// Load mongoose library to use Schema
import { Schema as _Schema, model } from 'mongoose';
//Define schema
const Schema = _Schema;

const VideogameSchema = new Schema({
 name: {
  type: String,
  trim: true,  
  required: true,
 },
 released_on: {
  type: Date,
  trim: true,
  required: true
 }
});
//export schema
export default model('Videogame', VideogameSchema)