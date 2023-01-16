
var dbName = 'schedule_feed';
// var url = 'mongodb://localhost:27017/';
var collectionName = 'all_data';
// // var fileName = './toc-full'

new function jsonReader() {
    const readline = require('readline');
    const fs = require('fs');
  
    const rl = readline.createInterface({
      input: fs.createReadStream('./toc-full')
    });
    
    rl.on('line', (line) => {
      let parsedLine = JSON.parse(line)
      console.log('Line from file:', parsedLine);
      // dbName.collectionName.insertOne(parsedLine)
    });
  }

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db(dbName);
  const readline = require('readline');
  const fs = require('fs');

  const rl = readline.createInterface({
    input: fs.createReadStream('./toc-full')
  });
  
  rl.on('line', (line) => {
    let parsedLine = JSON.parse(line)
    // console.log('Line from file:', parsedLine);
    // dbName.collectionName.insertOne(parsedLine)
    dbo.collection(collectionName).insertOne(parsedLine, function(err, res) {
      if (err) throw err;
  });
  console.log("Documents inserted");
  // db.close();
});
});

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db(dbName);
//   var myobj = { name: "Company Inc", address: "Highway 37" };
//   dbo.collection(collectionName).insertOne(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("Documents inserted");
//     db.close();
//   });
// });

