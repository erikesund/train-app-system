
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";
var dbName = 'schedule_feed';
var collectionName = 'all_data';

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
    dbo.collection(collectionName).insertOne(parsedLine, function(err, res) {
      if (err) throw err;
  });
  // db.close();
});
});


