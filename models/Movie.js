/*
 2. Movie
 *- name
 - director
 - studio
 - genre: []
 - prodictionDate
 - duration - Number, >0
 - actors: []
 - rating - Number, 0-10
 
 */

 const {Schema, model} = require('mongoose');

 const movieSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    director: String,
    studio: String,
    genre: [String],
    productionDate: Date,
    duration: {
        type: Number,
        validate: {
            validator: (v) => v > 0
        }
    },
    actors: [String],
    rating: {
        type: Number,
        min: [0, 'Rating must be great than 0'],
        max: 10
    }
 });

 const Movie = model('Movie', movieSchema);

 module.exports = Movie;