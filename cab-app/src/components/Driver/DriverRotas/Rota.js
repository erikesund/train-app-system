import React from "react";
import Shift from "./Shift";

function Rota ({service}) {
  return (
    <div>
      <p>This is a Rota component</p>
      <Shift service={service}/>
    </div>
  )
}

export default Rota;