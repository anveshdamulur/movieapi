const express = require('express');
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require('mongoose');
const Movie = require('./Model/movie')
const port = process.env.PORT || 8080;
mongoose.connect(process.env.DB_URL,{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("database is connected")
})
.catch(err=>{
    console.log(err);
    console.log("there is an error")
})

if(process.env.NODE_ENV !== "production"){
    dotenv.config();
}

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/', (req, res)=>{
    res.send('Welcome to movie app')
})

app.get('/movies',async (req, res)=>{
   const movieList = await Movie.find({})
    res.send(movieList)
})

app.get('/movies/:id', async(req,res)=>{
    const {id} = req.params;
   const singelMovie = await Movie.findById(id);
   res.send(singelMovie);
})


app.listen(port, ()=>{
    console.log(`Server is listining port number ${port}`)
})