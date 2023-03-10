import React from "react";
import ShiftList from "./ShiftList";
import "../../../css/DriverRotas/Rota.css"
function Rota ({shifts, onShiftClick, viewModeClick}) {

  const shiftNodes = shifts.map((shift) => {
    return <ShiftList shift={shift} onClick={onShiftClick} viewModeClick={viewModeClick}/>
  })

  return (
    <div>
      Upcoming Shifts
      {shiftNodes}
    </div>
  )
}

export default Rota;