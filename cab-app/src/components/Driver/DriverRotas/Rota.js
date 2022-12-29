import React from "react";
import Shift from "./Shift";

function Rota ({shifts}) {

  const shiftNodes = shifts.map((shift) => {
    return <Shift shift={shift}/>
  })

  return (
    <div>
      {shiftNodes}
    </div>
  )
}

export default Rota;