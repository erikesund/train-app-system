import React, {useState, useEffect} from "react";
import { getDrivers } from "../services/DriversService";
import { getTiplocs } from "../services/TiplocsService";

function SchedulesContainer () {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    getDrivers().then((allDrivers) => {
      setDrivers(allDrivers)
    })
  }, [])

  return (
    <div>Schedules container</div>
  )
};

export default SchedulesContainer;
