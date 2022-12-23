import React from "react";

function Waypoint ({waypoint}) {

  return (
    <div>
      <span>Arrival: {waypoint.arrival} Departure: {waypoint.departure} Station: {waypoint.tiploc_code} </span>
    </div>
  )

}

export default Waypoint;