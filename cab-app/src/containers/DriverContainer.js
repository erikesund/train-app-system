import React, { useEffect, useState } from 'react'
import DriverOptions from '../components/Driver/DriverOptions';

function DriverContainer () {

  const [newData, setNewData] = useState([]);
  const [locationArray, setLocationArray] = useState([]);

  const getData = async () => {
    const response = await fetch("./test.json")
    const data = await response.json()
    setNewData(data)
    setLocationArray(data.JsonScheduleV1.schedule_segment.schedule_location)
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div>
      <p>This is the DriverContainer</p>
      <DriverOptions/>
    </div>
  )
}

export default DriverContainer;