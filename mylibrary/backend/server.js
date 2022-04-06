const express = require("express");
const app = express();
const port = 4000;

const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const databaseName = 'testo7';

var cors = require('cors')
app.use(cors())
app.use(express.json())


async function getData(){
  let result =await client.connect();
  let db = result.db(databaseName);
  let collection = db.collection('content');
  let response = await collection.find({}).toArray();
  //console.log(response);
}
getData();


app.post("/about",(req,res)=> {
    res.send("hello! welcome to my page <br/>");
    const name = req.body;
    console.log(req.body);
});

app.post("/register",(req,res)=> {
  res.send("this hello from register page <br/>");
    const name = req.body;
    console.log(req.body);
});


app.listen(port, ()=>{
    console.log(`listening to port no ${port}`);
});