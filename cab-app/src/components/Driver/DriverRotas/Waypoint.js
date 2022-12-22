import React from "react";

function Waypoint ({waypoint}) {
  <p>
    <p>This is a Waypoint Component</p>
    <span>Arrival: {waypoint.arrival} Departure: {waypoint.departure} Station: {waypoint.tiploc_code} </span>
  </p>
}

export default Waypoint;