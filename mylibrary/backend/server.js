const express = require("express");
const app = express();
const port = 4000;



const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const databaseName = 'testo7';


async function getData(){
  let result =await client.connect();
  let db = result.db(databaseName);
  let collection = db.collection('content');
  let response = await collection.find({}).toArray();
  console.log(response);
}
getData();


app.get("/",(req,res)=> {
    res.send("hello! welcome to my page <br/>");
});

app.listen(port, ()=>{
    console.log(`listening to port no ${port}`);
});