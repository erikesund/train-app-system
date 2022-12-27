import React from "react";

function DriverDetails ({driver}) {

  return (
    <div>
      <p>Name: {driver.firstName} {driver.lastName}</p>
      <p>Company: {driver.tocName}</p>
    </div>
  )
}

export default DriverDetails;