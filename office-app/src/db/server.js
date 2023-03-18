const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors())
app.use(express.json());
const MongoClient = require("mongodb").MongoClient;
const createRouter = require("./create_router")

MongoClient.connect("mongodb://127.0.0.1:27017")
  .then((client) => {
    const db = client.db("schedule_feed")
    const tiplocsCollection = db.collection("tiplocs")
    const associationsCollection = db.collection("associations")
    const schedulesCollection = db.collection("schedules")
    const driversCollection = db.collection("drivers")
    const tiplocsRouter = createRouter(tiplocsCollection)
    const associationsRouter = createRouter(associationsCollection)
    const schedulesRouter = createRouter(schedulesCollection)
    const driversRouter = createRouter(driversCollection)

    const query = {"JsonScheduleV1.CIF_stp_indicator": "P"};
    schedulesCollection.find(query).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      // db.close(); this crashed nodemon
    });
    
      //maybe need to require mongodb? this needs work
      // path = schedule.JsonScheduleV1.schedule_location[0].tiploc_code

      // let origins = [] 
      // const query = {"JsonScheduleV1.CIF_stp_indicator": "P"};
      // schedulesCollection.find(query).toArray(function(err, permenantSchedulesArray) {
      //   if (err) throw err;
      //   console.log(permenantSchedulesArray);
      //   console.log(permenantSchedulesArray.JsonScheduleV1.schedule_location)
      //   origins = permenantSchedulesArray.filter(schedule => {
      //     // console.log(schedule.JsonScheduleV1.schedule_location)
      //     const isDuplicate = origins.includes(schedule.JsonScheduleV1.schedule_location)
      //     if (!isDuplicate) {
      //       origins.push(schedule.JsonScheduleV1.schedule_location)
      //     }
      //   })
      //   console.log(origins)
      //   // db.close(); this crashed nodemon
      // });
    

    app.use("/tiplocs", tiplocsRouter)
    app.use("/associations", associationsRouter)
    app.use("/schedules", schedulesRouter)
    app.use("/drivers", driversRouter)
  })

  app.listen(9000, function() {
    console.log("App running on port 9000")
  })
