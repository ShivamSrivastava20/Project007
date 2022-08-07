const express= require("express");
const app=express();
const Router=express.Router();
const authentication=require('./routes/authentication')(Router);
const mongoose=require("mongoose");
const mongodb=require('./DatabaseConnection/db');

const port= 8080;

mongoose.connect(mongodb.uri, (err)=>
{
    if(err)
    {
        console.log("You Cannot connect to database due to : " , err);
    }
    else
    {
        console.log("Database is connected to :" ,mongodb.db);
    }
})
app.use(express.json()); // Used to parse JSON bodies
//app.use(express.urlencoded()); // Parse URL-encoded bodies using query-string library
app.use(express.urlencoded({ extended: true }));
app.use('/authentication' , authentication);
app.listen(port, ()=>
{
    console.log("Listening to Port : " , port);
})