import React, { useEffect, useState } from 'react'
import DriverOptions from '../components/Driver/DriverOptions';
import DriverDetails from '../components/Driver/DriverDetails/DriverDetails';
import Rota from '../components/Driver/DriverRotas/Rota';
import DriverLogin from '../components/DriverLogin/DriverLogin';
import Service from '../components/Driver/DriverRotas/Service';
import Shift from '../components/Driver/DriverRotas/Shift';
import '../css/DriverContainer.css'

function DriverContainer () {

  const [driverData, setDriverData] = useState([]);
  const [shiftArray, setShiftArray] = useState([]);
  const [viewMode, setViewMode] = useState("login");
  const [selectedShift, setSelectedShift] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  const getData = async () => {
    const response = await fetch("./driver.json")
    const data = await response.json()
    setDriverData(data)
    setShiftArray(data.shifts)
  };

  useEffect(() => {
    getData();
  }, []);

  const viewModeClick = string => {
    setViewMode(string);
  };

  function handleOptionsClick(evt) {
    viewModeClick("options");
  };

  return (
    <div id='main-container'>
      <img id='scotrail-logo' src='https://www.scotrail.co.uk/sites/all/themes/scotrail/logo.svg' height="100px" onClick={handleOptionsClick}/>
      {/* <button onClick={handleOptionsClick}>Options</button> */}
      {viewMode === "login" && (
        <DriverLogin viewModeClick={viewModeClick}/>
      )}
      {viewMode === "options" && (
        <DriverOptions shifts={shiftArray} viewModeClick={viewModeClick} viewMode={viewMode}/>
      )}
      {viewMode === "rota" && (
        <Rota shifts={shiftArray} viewModeClick={viewModeClick} onShiftClick={setSelectedShift}/>
      )}
      {viewMode === "driver-details" && (
        <DriverDetails driver={driverData}/>
      )}
      {viewMode === "shift" && (
        <Shift selectedShift={selectedShift} viewModeClick={viewModeClick} onServiceClick={setSelectedService}/>
      )}
      {viewMode === "service" && (
        <Service service={selectedService}/>
      )}
    </div>
  )
};

export default DriverContainer;