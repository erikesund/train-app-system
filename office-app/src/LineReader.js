// var MongoClient = require("mongodb").MongoClient

var dbName = 'schedule_feed';
var url = 'mongodb://localhost:27017/';
var collectionName = 'all_data';
// var fileName = './toc-full'


  new function jsonReader() {
    const readline = require('readline');
    const fs = require('fs');
  
    const rl = readline.createInterface({
      input: fs.createReadStream('./toc-full')
    });
    
    rl.on('line', (line) => {
      let parsedLine = JSON.parse(line)
      console.log('Line from file:', parsedLine);
      dbName.collectionName.insertOne(parsedLine)
    });
  }



// import { MongoClient } from "mongodb";
// // Replace the uri string with your MongoDB deployment's connection string.
// const uri = url;
// const client = new MongoClient(uri);
// async function run() {
//   try {
//     const database = client.db(dbName);
//     const haiku = database.collection(collectionName);
//     // create a document to insert
//     const doc = {
//       title: "Record of a Shriveled Datum",
//       content: "No bytes, no problem. Just insert a document, in MongoDB",
//     }
//     const result = await haiku.insertOne(doc);
//     console.log(`A document was inserted with the _id: ${result.insertedId}`);
//   } finally {
//     await client.close();
//   }
// }
// run().catch(console.dir);

