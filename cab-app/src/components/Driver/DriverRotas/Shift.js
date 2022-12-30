import React from "react";
import Service from "./Service";

function Shift ({selectedShift, onServiceClick, viewModeClick}) {
    const serviceNodes = selectedShift.services.map((service) => {
      if (selectedShift === null) {
        return null;
      } else {
        return (
          <Service service={service} onClick={onServiceClick} viewModeClick={viewModeClick}/>
        )
      }})

  return (
    <div>
      <div>Date: {selectedShift.date} Starts: {selectedShift.startTime} Location: {selectedShift.startLocation}</div>
      <div>
        {serviceNodes}
      </div>
    </div>
  )
}

export default Shift;