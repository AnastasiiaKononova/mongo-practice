/*
 1. User
 - firstName
 - lastName
 *- email,
 - gender
 - favouriteFilms: []
 */

 const {Schema, model} = require('mongoose');

 const userSchema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    gender: {
        type: String
    },
    favouriteFilms: [String]
 });

 const User = model('User', userSchema);

 module.exports = User;