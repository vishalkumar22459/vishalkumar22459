const express = require("express");
const app = express();
const port = 4000;

var cors = require('cors')
app.use(cors())
app.use(express.json())







const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/testo7",{useNewUrlParser:true})
.then(() => console.log("connection successfull ...."))
.catch((err) => console.log(err));


const registerschema = require('../backend/schema/register')
app.post("/register",(req,res)=> {
  res.send("this hello from register page <br/>");
    const name = req.body;
      var obj =[
          {
            "name": req.body.name,
            "email": req.body.email,
            "role": req.body.role,
            "contact": req.body.contact,
            "address": req.body.address,
            "pass": req.body.pass
          }];
      registerschema.insertMany(obj,function(err,res){
        if(err)throw err;
        console.log("inserted");
        console.log(obj);
      })
});

const Signup = require('../backend/schema/signup')
app.post('/signup', (req,res)=>{
    // const name = req.body;
      var obj =[
          {
            "name": req.body.name,
            "email": req.body.email,
            "contact": req.body.contact,
            "password": req.body.password,
            "role": req.body.role
            
          }];
      Signup.insertMany(obj,function(err,res){
      if(err)throw err;
      console.log("signed-up");
      })
  
})

app.post("/signin",async(req,res)=> {
    //res.send("hello! welcome to my page <br/>");
    //console.log(req.body);
    // async function getData(){
    //   let result =await client.connect();
    //   let db = result.db(databaseName);
    //   let collection = db.collection('Details');
      
      const email = req.body.email;
      const pass = req.body.password;
      const user = await registerschema.findOne({email , pass})
      // console.log(user)
      if(!user || user === ''){
        console.log("Email or Password not found in database")
        res.json({succes : false , msg : "Email or Password not found in database"})
      }else{
        const name = user.name;
        const role = user.role;
        const contact = user.contact;
        const address = user.address;
        console.log("user "+email+" successfully logged-in as "+role);
        res.json({name:name , role : role, contact:contact , address:address })
        
      }      
    // }
    // getData();
    
});

const booklist = require('./schema/book');
const { response } = require("express");
app.post("/librarian",async(req,res)=>{
      const email = req.body.email;
      const bookname = req.body.bookname;
      const author = req.body.author;
      // console.log("data added "+email+bookname+author)   
      var obj =[
        {
          "email": email,
          "bookname":bookname,
          "author":author,
          
        }];
        booklist.insertMany(obj,function(err,res){
          if(err)throw err;
          // console.log("inserted");
          // console.log(obj);
        })
})


app.get("/booklist", async(req,res )=>{
    console.log("this is book list api");
    var blist =await booklist.find({},{_id:0,__v:0,email:0})
    res.json({book:blist})
    
})


app.post("/student" , async(req,res)=>{
  const bookname = req.body.bookname;
  const author = req.body.author;
  const data = await booklist.findOneAndDelete({bookname,author},{_id:0 ,__v:0})
  if(data){
    
    const msg= "You have successfully borrowed a book"
    res.json({msg:msg , bookname:bookname , author:author})
  }else{
    const msg= "Book not found in booklist! borrow some other book"
    res.json({msg:msg , bookname:'' , author: ''})
    // console.log("false")
  }
  
})

app.post("/Admin",async(req,res)=>{
  const user = req.body.email;
  await registerschema.findOneAndDelete({email:user})
  .then(response =>{
    if(response == null){
      res.json({msg:"user not found in database"})
    }else{
      res.json({msg:"user found and removed from database successfully"})
    }
  })
  .catch(e => {
    if(e) throw e;
  })

})


app.post("/changename",(req,res)=>{
    const name = req.body.name;
    console.log(name)

})


app.listen(port, ()=>{
    console.log(`listening to port no ${port}`);
});