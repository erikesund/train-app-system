import React, {useState, useEffect} from "react";
import NewDriverForm from "../components/drivers/NewDriverForm";
import {getDrivers} from "../services/DriversService"
import DriversList from "../components/drivers/DriversList";

function DriversContainer () {
  const [drivers, setDrivers] = useState([])

  useEffect(() => {
    getDrivers().then((allDrivers) => {
      setDrivers(allDrivers)
    })
  }, [])

  const addDriver = (driver) => {
    const temp = drivers.map(d => d);
    temp.push(driver);
    setDrivers(temp);
  };

  const removeDriver = (id) => {
    const temp = drivers.map(d => d);
    const indexToDel = temp.map(d => d._id).indexOf(id);
    console.log(indexToDel)
    temp.splice(indexToDel, 1);
    setDrivers(temp);
  }

  return (
    <div>
      <h2>Drivers Main Menu</h2>
      <button>Add New</button>
      <NewDriverForm addDriver={addDriver}/>
      <DriversList drivers={drivers} removeDriver={removeDriver}/>
    </div>
  )
};

export default DriversContainer;