require("dotenv").config();

//
// console.log(process.env.Database);
const express=require("express");
const mongoose=require("mongoose");

const bodyParser=require("body-parser");

//initliaze app
const app=express();
const port=process.env.port;
const routes=require('./routes/user');
mongoose.connect(process.env.Database,{useMongoClient:true});

mongoose.connection.on('connected', ()=>{

    console.log('connected');

});

mongoose.connection.on('error',(error)=>{

    console.log('not connected'+error);

});

app.use(bodyParser());
app.get('/',(req,res,next)=>{

    res.send("helllllo shibo")
});
app.use('/users',routes);
app.listen(port,()=> {

    console.log("server started ");
});
app.use(bodyParser);
