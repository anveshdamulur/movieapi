const mongoose = require('mongoose');
const Movie = require('./movie')
const db = "mongodb+srv://admin:nanihoney@mypresonaldata.6e70y.mongodb.net/movie?retryWrites=true&w=majority";

mongoose.connect(db,{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("database is connected")
})
.catch(err=>{
    console.log(err);
    console.log("there is an error")
})

const m = new Movie(
{
    name : 'KGF',
    hero : "Yash",
    category : "action",
    budject : "20"

}
)

m.save()
.then(()=>{console.log("data has been inserted")})
.catch(err => {console.log(err)})