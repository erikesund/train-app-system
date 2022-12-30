import React from "react";

function Shift ({selectedShift}) {
  return (
    <div>This is a shift component, need to add a list of services.
      <div>Date: {selectedShift.date} Starts: {selectedShift.startTime} Location: {selectedShift.startLocation}</div>
    </div>
  )
}

export default Shift;