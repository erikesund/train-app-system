import React, {useState} from "react";
import OfficeMenu from "../components/OfficeMenu";
import DriversContainer from "./DriversContainer";
// const {connectToDb, getDb} = require("../db/db")

function OfficeContainer () {
  const [viewMode, setViewMode] = useState("menu");

  const viewModeClick = string => {
    setViewMode(string);
  }

  return (
    <div id="main-container">
      <img id='scotrail-logo' src='https://www.scotrail.co.uk/sites/all/themes/scotrail/logo.svg' alt="ScotRail Logo" height="100px"/>
      <hr/>
      {viewMode === "menu" && (
      <OfficeMenu/>)}
      <DriversContainer/>
    </div>
  )
}

export default OfficeContainer;