const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
        name : {
                type : String,
                required : true
        },
        hero : {
                type : String,
                required : true
        },
        category:{
                type : String,
                enum : ["horror", "sci", "comedy", "triller", "romantic","action"]
        },
        budject : {
                type : Number,
                required : true
        }
})

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;