const express =require("express");
const routes =express.Router();
const User=require('../models/user')
routes.get('/login',(req,res,next)=>{
    res.send("helllllo login")
});

routes.post('/register',(req,res,next)=>{
let newUser=new User({
  name:req.body.name,
  email:req.body.email,
  password:req.body.password,
});
newUser.save((error, user)=>{
if(error){
res.send({

  success:false,
  Description:"failed to save"
});
}
else{
res.send({
  success:true,
  Description:"success to save"+newUser
});
}
});
});
module.exports=routes;
