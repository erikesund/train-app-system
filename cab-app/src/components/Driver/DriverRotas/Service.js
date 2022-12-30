import React from "react";
import Waypoint from "./Waypoint";

function Service ({service}) {
  const waypointNodes = service.JsonScheduleV1.schedule_segment.schedule_location.map((waypoint) => {
    return <Waypoint waypoint={waypoint} key={waypoint.tiploc_code}/>
  })

  return (
    <div>
      Departure: {service.JsonScheduleV1.schedule_segment.schedule_location[0].departure} From: {service.JsonScheduleV1.schedule_segment.schedule_location[0].tiploc_code}
      {waypointNodes}
    </div>
  )
}

export default Service;