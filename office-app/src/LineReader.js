
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";
var dbName = 'schedule_feed';
var collectionName = 'all_data';

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db(dbName);
  // db.dropDataBase(); does not work, dropping manually for now
  const readline = require('readline');
  const fs = require('fs');

  const rl = readline.createInterface({
    input: fs.createReadStream('./toc-full')
  });
  
  rl.on('line', (line) => {
    let parsedLine = JSON.parse(line)
    if (parsedLine.hasOwnProperty("JsonAssociationV1")) {
      dbo.collection("associations").insertOne(parsedLine, function(err, res) {
        if (err) throw err;
        // db.close();
    });
    } else if (parsedLine.hasOwnProperty("TiplocV1")) {
      dbo.collection("tiplocs").insertOne(parsedLine, function(err, res) {
        if (err) throw err;
        // db.close();
    });
    } else if (parsedLine.hasOwnProperty("JsonScheduleV1")) {
      dbo.collection("schedules").insertOne(parsedLine, function(err, res) {
        if (err) throw err;
        // db.close();
    });
    }
    //add dbclose on eof true here.

});
});


