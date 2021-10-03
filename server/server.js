require('dotenv').config()
let express = require("express")
let path = require("path")
// let express = require("express");

// app 
const app = express();

// middleware configuration

// pour parsser les application/json
app.use(express.json());

// pour parsser application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })) ;

app.use('/post' , require('../routes/postRoute') )


// activité du serveur sur le port
const PORT = process.env.PORT || 3000
app.listen(PORT , ()=> {
    console.log("le serveur est en écoute... Port :"+ PORT)
})