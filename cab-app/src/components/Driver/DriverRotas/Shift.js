import React from "react";
import Service from "./Service";

function Shift ({service}) {
  return (
    <div>
      <p>This is a shift component.</p>
      <Service service={service}/>
    </div>
  )
}

export default Shift;