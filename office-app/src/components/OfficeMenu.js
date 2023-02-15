import React from "react";

function OfficeMenu ({viewModeClick}) {

  function handleDriversClick(evt) {
    viewModeClick("drivers")
  }

  function handleSchedulesClick(evt) {
    viewModeClick("schedules")
  }

  return (
    <div> 
      <button onClick={handleDriversClick}>Drivers</button>
      <button onClick={handleSchedulesClick}>Schedules</button>
      <button>Notice Board</button>
      <button>Annual Leave</button>
  </div>
  )
}

export default OfficeMenu;