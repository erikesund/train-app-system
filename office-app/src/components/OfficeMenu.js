import React from "react";

function OfficeMenu ({viewModeClick}) {

  function handleDriverClick(evt) {
    viewModeClick("driver")
  }

  return (
    <div> 
      <button onClick={handleDriverClick}>Drivers</button>
      <button>Schedules</button>
      <button>Notice Board</button>
      <button>Annual Leave</button>
  </div>
  )
}

export default OfficeMenu;