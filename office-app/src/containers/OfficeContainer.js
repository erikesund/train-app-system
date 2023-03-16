import React, {useState} from "react";
import OfficeMenu from "../components/OfficeMenu";
import DriversContainer from "./DriversContainer";
import SchedulesContainer from "./SchedulesContainer";
// const {connectToDb, getDb} = require("../db/db")

function OfficeContainer () {
  const [viewMode, setViewMode] = useState("menu");

  const viewModeClick = string => {
    setViewMode(string);
  };

  return (
    <div id="main-container">
      <img id='scotrail-logo' src='https://www.scotrail.co.uk/sites/all/themes/scotrail/logo.svg' alt="ScotRail Logo" height="100px"/>
      <OfficeMenu viewModeClick={viewModeClick}/>
      <hr/>
      {viewMode === "drivers" && (
      <DriversContainer/>)}
      {viewMode === "schedules" && (
      <SchedulesContainer/>)}
    </div>
  )
};

export default OfficeContainer;