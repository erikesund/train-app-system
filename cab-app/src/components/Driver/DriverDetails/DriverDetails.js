import React from "react";
import DriverContainer from "../../../containers/DriverContainer";

function DriverDetails ({driver}) {

  return (
    <div>
      <p>Name: {driver.firstName} {driver.lastName}</p>
      <p>Company: {driver.tocName}</p>
    </div>
  )
}

export default DriverDetails;