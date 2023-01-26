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
    const associationsCollection = db.collection("associations")
    const schedulesCollection = db.collection("schedules")
    const tiplocsRouter = createRouter(tiplocsCollection)
    const associationsRouter = createRouter(associationsCollection)
    const schedulesRouter = createRouter(schedulesCollection)

    app.use("/tiplocs", tiplocsRouter)
    app.use("/associations", associationsRouter)
    app.use("/schedules", schedulesRouter)
  })

  app.listen(9000, function() {
    console.log("App running on port 9000")
  })
