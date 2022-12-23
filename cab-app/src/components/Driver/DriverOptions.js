import React from "react";
import Rota from "./DriverRotas/Rota"


function DriverOptions ({service, viewModeClick, viewMode}) {

  function handleRotaClick(evt) {
    viewModeClick("rota");
  };
  function handleNoticeClick(evt) {
    viewModeClick("notice-board");
  };
  function handleLeaveClick(evt) {
    viewModeClick("annual-leave");
  };
  function handleDriverClick(evt) {
    viewModeClick("driver-info");
  };

  return (
    <div> 
      <p>This is the driver options component</p>
      {/* <Rota service={service}/> */}
      <button onClick={handleRotaClick}>Rota</button>
      <button onClick={handleNoticeClick}>Notice Board</button>
      <button onClick={handleLeaveClick}>Annual Leave</button>
      <button onClick={handleDriverClick}>Driver Info</button>
    </div>
  )
}

export default DriverOptions;