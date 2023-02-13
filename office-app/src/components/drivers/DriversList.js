import React from "react";

function DriversList ({drivers}) {
  const driverNodes = drivers.map((driver) => {
    return (
      <div>{driver.firstName} {driver.lastName}</div>
    )
  })


  return ( 
  <div>
    {driverNodes}
  </div>
  )
};

export default DriversList;