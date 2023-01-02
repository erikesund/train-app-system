import React from "react";

function ServiceList ({service, onClick, viewModeClick}) {
  function handleServiceClick() {
    onClick(service)
    viewModeClick("service")
  }

  return (
    <div onClick={handleServiceClick}>
      Start Location: {service.JsonScheduleV1.schedule_segment.schedule_location[0].tiploc_code} Start Time: {service.JsonScheduleV1.schedule_segment.schedule_location[0].departure}
    </div>
  )
}

export default ServiceList;