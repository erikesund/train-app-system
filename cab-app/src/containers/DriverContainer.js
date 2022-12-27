import React, { useEffect, useState } from 'react'
import DriverOptions from '../components/Driver/DriverOptions';
import DriverDetails from '../components/Driver/DriverDetails/DriverDetails';
import Rota from '../components/Driver/DriverRotas/Rota';
import DriverLogin from '../components/DriverLogin/DriverLogin';

function DriverContainer () {

  const [newData, setNewData] = useState([]);
  const [serviceArray, setServiceArray] = useState([]);
  const [viewMode, setViewMode] = useState("login")

  const getData = async () => {
    const response = await fetch("./test.json")
    const data = await response.json()
    setNewData(data)
    setServiceArray(data.JsonScheduleV1.schedule_segment.schedule_location)
  }

  useEffect(() => {
    getData();
  }, [])

  const viewModeClick = string => {
    setViewMode(string);
  };

  return (
    <div>
      <p>This is the DriverContainer</p>
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
        <DriverDetails/>
      )}
    </div>
  )
}

export default DriverContainer;