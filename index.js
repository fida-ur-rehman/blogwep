const var1="";
const notfound="not a valid user";

const express=require("express");
const bodyparser=require('body-parser');
const ejs=require('ejs');
const mongoose=require('mongoose');
const request=require('request');

const app=express();

app.set('view engine', 'ejs')
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.static("public"));
mongoose.connect("mongodb://localhost:27017/blogwebdb",{useNewUrlParser:true});
const clientinfo={
  email:String,
  password:String
};
const Client = mongoose.model("Client",clientinfo)
app.get("/",function(req,res){

  res.render("home")
})
app.get("/signup",function(req,res){
  res.render("signup")
})
app.get("/signin",function(req,res){
  const var1="";
const notfound="not a valid user"
  res.render("signin")
})
app.post("/signup",function(req,res){
const  newclient = new Client({
  email:req.body.eml,
  password:req.body.pass1
});
newclient.save(function(err){
  if(!err){
    console.log("successfully inserted");
  }else{
    console.log(err);
  }
})

});
app.post("/signin",function(req,res){
  const var1=""
const notfound="not a valid user"
  const username=req.body.email;
  const password=req.body.password;
  Client.findOne({email:username},function(err,findclient){
    if(!err){
      if(findclient.password==password){
        console.log("found");
        res.render("home");
      }
      else{
      res.render("signin",{var1:notfound});
      }
    }

    else{
    console.log(err)
  }
  })
});

app.listen(3000,function(){
  console.log("server started")
})
