const {MongoClient} = require('mongodb');
let url='mongodb://127.0.0.1:27017';
const client =new MongoClient(url);
let dbconnection =async ()=>{
  await client.connect();
  let db=client.db("mongoproject");
  return db;
}
module.exports={dbconnection};