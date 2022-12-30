import React from "react";
import Service from "./Service";

function ShiftList ({shift, onClick, viewModeClick}) {
  function handleShiftClick() {
    onClick(shift)
    viewModeClick("shift")
  }

  return (
    <div onClick={handleShiftClick}>
      Date: {shift.date} Time: {shift.startTime} From: {shift.startLocation}
    </div>
  )
}

export default ShiftList;