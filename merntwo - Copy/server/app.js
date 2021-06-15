const dotenv = require("dotenv");
const express = require('express');
const mongoose = require('mongoose');
const app = express();
dotenv.config({path:'./config.env'});
const DB = process.env.DATABASE ;
const PORT = process.env.PORT;
require('./db/conn');
//const User = require('./model/userSchema');
app.use(express.json());
app.use(require('./router/auth'))


// we link the router
//Middelware
const middelware = (req , res,next) => {
    console.log(`Hello my Middleware`);
    next();
}
 
app.get('/',(req,res)=>{
    res.send(`Hello world from server`);
});


app.get('/about',middelware,(req,res)=>{
    res.send(`Hello world from Contact`);
});

 
app.get('/contact',(req,res)=>{
    res.send(`Hello world from Contavt`);
});

app.get('/Signin',(req,res)=>{
    res.send(`Hello Login from Contavt`);
});

app.get('/signup',(req,res)=>{
    res.send(`Hello Register  from Contavt`);
});

app.listen(PORT,()=>{
    console.log(`server is running at port no ${PORT}`)
});