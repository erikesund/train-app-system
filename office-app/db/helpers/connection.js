const express = require("express")
const app = express()
  

app.listen(3000, () => {
  console.log("app listening on port 3000")
})

//routes
app.get("/schedule_feed", (req, res) => {
  res.json({mssg: "Welcome to the api"})
})