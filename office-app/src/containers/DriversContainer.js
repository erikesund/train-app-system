import React, {useState, useEffect} from "react";
import NewDriverForm from "../components/drivers/NewDriverForm";
import {getDrivers} from "../components/drivers/DriversService"

function DriversContainer () {
  const [driversList, setDriversList] = useState([])

  useEffect(() => {
    getDrivers().then((allDrivers) => {
      setDriversList(allDrivers)
    })
  }, [])

  const addDriver = (driver) => {
    const temp = driversList.map(s => s);
    temp.push(driver);
    setDriversList(temp);
  };

  return (
    <div>
      <h2>Drivers Main Menu</h2>
      <button>Add New</button>
      <NewDriverForm addDriver={addDriver}/>
    </div>
  )
};

export default DriversContainer;