import React, {useState} from "react";
import DriversMain from "../components/drivers/DriversMain";
import OfficeMenu from "../components/OfficeMenu";
// const {connectToDb, getDb} = require("../db/db")

function OfficeContainer () {
  const [viewMode, setViewMode] = useState("menu");

  const viewModeClick = string => {
    setViewMode(string);
  }

  return (
    <div id="main-container">
      <img id='scotrail-logo' src='https://www.scotrail.co.uk/sites/all/themes/scotrail/logo.svg' height="100px"/>
      <hr/>
      {viewMode === "menu" && (
      <OfficeMenu/>)}
      <DriversMain/>
    </div>
  )
}

export default OfficeContainer;