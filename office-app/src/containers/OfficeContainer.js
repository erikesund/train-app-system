import React, {useState} from "react";
import OfficeMenu from "../components/OfficeMenu";

function OfficeContainer () {
  const [viewMode, setViewMode] = useState("menu");

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