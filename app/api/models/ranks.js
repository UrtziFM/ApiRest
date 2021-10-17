// Load mongoose library to use Schema 
import { Schema as _Schema, model } from 'mongoose';

// Define schema of the ranking 
const Ranking =  _Schema;

const rankSchema = new Ranking({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    score: {
        type: Number,
        trim: true,
        required: true,
    },
    date: {
        type: Date,
        trim: true,
        required: true,
    }
});

export default model('Rank', rankSchema);