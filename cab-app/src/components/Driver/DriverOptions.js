import React from "react";
import Rota from "./DriverRotas/Rota"


function DriverOptions ({service}) {
  return (
    <div> 
      <p>This is the driver options component</p>
      <Rota service={service}/>
      <button>Rota</button>
      <button>Notice Board</button>
      <button>Annual Leave</button>
      <button>Driver Info</button>
    </div>
  )
}

export default DriverOptions;