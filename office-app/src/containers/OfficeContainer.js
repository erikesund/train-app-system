import React, {useState} from "react";
import OfficeMenu from "../components/OfficeMenu";
const {connectToDb, getDb} = require("../db/db")

function OfficeContainer () {
  const [viewMode, setViewMode] = useState("menu");

  connectToDb((err) => {
    if(!err) {
      app.listen(3000, () => {
        console.log("app listening on port 3000")
      })
    }
  })

  return (
    <div id="main-container">
      <img id='scotrail-logo' src='https://www.scotrail.co.uk/sites/all/themes/scotrail/logo.svg' height="100px"/>
      <hr/>
      {viewMode === "menu" && (
      <OfficeMenu/>)}
    </div>
  )
}

export default OfficeContainer;