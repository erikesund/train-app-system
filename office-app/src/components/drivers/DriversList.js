import React from "react";
import DriverCard from "./DriverCard";

function DriversList ({drivers, removeDriver}) {
  const driverNodes = drivers.map((driver) => {
    return <DriverCard driver={driver} key={driver._id} removeDriver={removeDriver}/>
  })

  return ( 
  <div>
    {driverNodes}
  </div>
  )
};

export default DriversList;