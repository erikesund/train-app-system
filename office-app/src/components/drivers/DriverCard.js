import React from "react";
import { deleteDriver } from "../../services/DriversService";

function DriverCard ({driver, removeDriver}) {
  const handleDelete = () => {
    deleteDriver(driver._id).then(() => {
      removeDriver(driver._id)
    })
  };

  return (
    <div>{driver.driverNumber} {driver.lastName}, {driver.firstName} - {driver.tocName} <button onClick={handleDelete}>Delete</button></div>
  )
};

export default DriverCard;