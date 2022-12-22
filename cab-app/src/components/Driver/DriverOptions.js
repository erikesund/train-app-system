import React from "react";
import Rota from "./DriverRotas/Rota"


function DriverOptions ({service}) {
  return (
    <div> 
      <p>This is the driver options component</p>
      <Rota service={service}/>
    </div>
  )
}

export default DriverOptions;