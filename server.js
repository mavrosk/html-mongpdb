const express = require('express');
const app = express();
const ejs = require("ejs");
const mongoose = require('mongoose');


app.set("view engine","ejs");


const moviesSchema = {
    title:String,
    type:String,
    year:String
}

const Movie = mongoose.model("movies", moviesSchema);



mongoose.connect("mongodb+srv://kostantinos:28031993@cluster0.gidbl.mongodb.net/moviesDB?retryWrites=true&w=majority",{useNewUrlParser:true}, {useUnifiedTopology:true})

app.get("/",(req,res)=>{
    Movie.find({},(err , movies)=>{
        res.render("index",{
            movieslist:movies
        })
    })
})




app.listen(4000,()=>{
    console.log("server is running well!!!!")
})