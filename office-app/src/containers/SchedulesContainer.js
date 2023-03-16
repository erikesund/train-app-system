import React, {useState, useEffect} from "react";
import { getDrivers } from "../services/DriversService";
import { getTiplocs } from "../services/TiplocsService";

// const { MongoClient } = require("mongodb");
// // Replace the uri string with your MongoDB deployment's connection string.
// const uri =
// "mongodb://127.0.0.1:27017";
// const client = new MongoClient(uri);
// async function run() {
//   try {
//     await client.connect();
//     // database and collection code goes here
//     const db = client.db("schedule_feed");
//     const coll = db.collection("schedules");
//     // find code goes here
//     const cursor = coll.find({ "JsonScheduleV1.CIF_stp_indicator": "P"} );
//     // iterate code goes here
//     await cursor.forEach(console.log);
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

function SchedulesContainer () {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    getDrivers().then((allDrivers) => {
      setDrivers(allDrivers)
    })
  }, [])

  return (
    <div>Schedules container</div>
  )
};

export default SchedulesContainer;
