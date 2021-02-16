const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Movie = require('../Model/movie')

const db = "mongodb+srv://admin:nanihoney@mypresonaldata.6e70y.mongodb.net/movies?retryWrites=true&w=majority";

mongoose.connect(db,{useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify : false})
.then(()=>{
    console.log("database is connected")
})
.catch(err=>{
    console.log(err);
    console.log("there is an error")
})

router.get('/',async (req, res)=>{
    try{
        const allMovies = await Movie.find();
        res.json(allMovies)
    }
    catch(err){ 
        res.json({message : err})
    }
    
})
 
router.post('/', async (req, res)=>{
    const {name, hero,image, category,budject} = (req.body);

    const newMovie = new Movie({
        name : name,
        hero : hero,
        image: image,
        category : category,
        budject : budject
    })
    try{
        const movieData = await newMovie.save();
    res.json(movieData);
    }
    catch(err){
        res.json({message : err})
    }
    
})
 
router.get('/:id', async(req, res) =>{
    try{
        const id = req.params.id;
        const findMovie = await Movie.findById(id);
        res.json(findMovie);
    }
    catch(err){
        res.json({message : err})
    }
})

// Delete paticular movie
router.delete('/:id', async(req, res)=>{
    try{
        const id = req.params.id;
        const delMovie = await Movie.findByIdAndRemove(id);
        res.json(delMovie);
    }
    catch(err){
        res.json({message : err})
    }
})
 
//Update your Movie
router.patch('/:id', async(req, res)=>{
    try{

        const updateMovie = await Movie.findByIdAndUpdate(id,
                {$set :
                    {
                        name : req.body.name, 
                        hero : req.body.hero, 
                        image : req.body.image,
                        budject : req.body.budject, 
                        category : req.body.category
                    }   
                }
             )
        res.json(updateMovie)
    }
    catch(err){
        res.json({message : err})
    }
})


module.exports = router;