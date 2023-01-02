import React from "react";
import Service from "./Service";
import ServiceList from "./ServiceList";

function Shift ({selectedShift, onServiceClick, viewModeClick}) {
    // const serviceNodes = selectedShift.services.map((service) => {
    //   if (selectedShift === null) {
    //     return null;
    //   } else {
    //     return (
    //       <Service service={service} onClick={onServiceClick} viewModeClick={viewModeClick}/>
    //     )
    //   }})

  const serviceNodes = selectedShift.services.map((service) => {

    return <ServiceList service={service} onClick={onServiceClick} viewModeClick={viewModeClick}/>
    // return <ShiftList shift={shift} onClick={onShiftClick} viewModeClick={viewModeClick}/>
  })

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