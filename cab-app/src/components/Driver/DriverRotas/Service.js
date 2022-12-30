import React from "react";
import Waypoint from "./Waypoint";

function Service ({service}) {
  const waypointNodes = service.map((waypoint) => {
    return <Waypoint waypoint={waypoint} key={waypoint.tiploc_code}/>
  })

  return (
    <div>
      <p>This is the service component.</p>
      {/* {waypointNodes} */}
    </div>
  )
}

export default Service;