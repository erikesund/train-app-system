import React from "react";
import Service from "./Service";
import ServiceList from "./ServiceList";

function Shift ({selectedShift, onServiceClick, viewModeClick}) {


  const serviceNodes = selectedShift.services.map((service) => {

    return <ServiceList service={service} onClick={onServiceClick} viewModeClick={viewModeClick}/>

  })

  return (
    <div>
      <div id="service-header">Date: {selectedShift.date} Starts: {selectedShift.startTime} Location: {selectedShift.startLocation}</div>
      <div id="service-list-container">
        {serviceNodes}
      </div>
    </div>
  )
}

export default Shift;