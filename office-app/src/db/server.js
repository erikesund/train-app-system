const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors())


app.use(express.json());
const MongoClient = require("mongodb").MongoClient;
const createRouter = require("./create_router")

MongoClient.connect('mongodb://127.0.0.1:27017')
  .then((client) => {
    const db = client.db("schedule_feed")
    const tiplocsCollection = db.collection("tiplocs")
    const tiplocsRouter = createRouter(tiplocsCollection)

    app.use("/schedule_feed/tiplocs", tiplocsRouter)
  })

  app.listen(9000, function() {
    console.log("App running on port 9000")
  })

// let db;

// connectToDb((err) => {
//   if(!err) {
//     app.listen(3000, () => {
//       console.log("app listening on port 3000")
//     })
//     db = getDb()
//   }
// })

// app.get("/schedule_feed", (req, res) => {
//   let tiplocs = []
//   db.collection('tiplocs')
//     .find() //cursor toArray forEach
//     //sort by name
//     .forEach(tiploc => tiplocs.push(tiploc))
//     .then(() => {
//       res.status(200).json(tiplocs)
//     })
//     .catch(() => {
//       res.status(500).json({error: "Could not fetch objects"})
//     })
// })