import React from "react";
import "../../../css/DriverRotas/ShiftList.css"

function ShiftList ({shift, onClick, viewModeClick}) {
  function handleShiftClick() {
    onClick(shift)
    viewModeClick("shift")
  }

  return (
    <div id="shift-list-item" onClick={handleShiftClick}>
      Date: {shift.date} Time: {shift.startTime} From: {shift.startLocation}
    </div>
  )
}

export default ShiftList;