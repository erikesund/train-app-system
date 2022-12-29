import React from "react";
import Service from "./Service";

function Shift ({shift}) {
  return (
    <div>
      Date: {shift.date} Time: {shift.startTime} From: {shift.startLocation}
    </div>
  )
}

export default Shift;