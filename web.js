const express = require('express');
const app = express();
const movieRoutes = require("./Routes/routes")
const cors = require("cors");
const port =process.env.PORT || 3000 ;

//Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}))

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

app.use('/movies',movieRoutes)

app.listen(port, ()=>{
    console.log(`Server is listining port number ${port}`)
})