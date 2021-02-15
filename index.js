const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Movie = require('./Model/movie');
const port = process.env.PORT || 8080;
const db = "mongodb+srv://admin:nanihoney@mypresonaldata.6e70y.mongodb.net/movie?retryWrites=true&w=majority";

mongoose.connect(db,{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("database is connected")
})
.catch(err=>{
    console.log(err);
    console.log("there is an error")
})

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/', (req, res)=>{
    res.send('welcome to my api');
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