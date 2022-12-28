import React, { useEffect, useState } from 'react'
import DriverOptions from '../components/Driver/DriverOptions';
import DriverDetails from '../components/Driver/DriverDetails/DriverDetails';
import Rota from '../components/Driver/DriverRotas/Rota';
import DriverLogin from '../components/DriverLogin/DriverLogin';

function DriverContainer () {

  const [driverData, setDriverData] = useState([]);
  const [serviceArray, setServiceArray] = useState([]);
  const [viewMode, setViewMode] = useState("login")

  const getData = async () => {
    const response = await fetch("./driver.json")
    const data = await response.json()
    setDriverData(data)
    setServiceArray(data.shifts)
  }

  useEffect(() => {
    getData();
  }, [])

  const viewModeClick = string => {
    setViewMode(string);
  };

  function handleOptionsClick(evt) {
    viewModeClick("options");
  };

  return (
    <div>
      <p>This is the DriverContainer</p>
      <button onClick={handleOptionsClick}>Options</button>
      {viewMode === "login" && (
        <DriverLogin viewModeClick={viewModeClick}/>
      )}
      {viewMode === "options" && (
        <DriverOptions service={serviceArray} viewModeClick={viewModeClick} viewMode={viewMode}/>
      )}
      {viewMode === "rota" && (
        <Rota service={serviceArray}/>
      )}
      {viewMode === "driver-details" && (
        <DriverDetails driver={driverData}/>
      )}
    </div>
  )
}

export default DriverContainer;