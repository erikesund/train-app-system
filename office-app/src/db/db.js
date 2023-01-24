const { MongoClient } = require("mongodb")

let dbConnection;

module.exports = {
  connectToDb: () => {
    MongoClient.connect("mongodb://127.0.0.1:27017/schedule_feed")
      .then((client) => {
        dbConnection = client.db()
      })
      .catch(err => {
        console.log(err)
      })
  },
  getDb: () => {}
}