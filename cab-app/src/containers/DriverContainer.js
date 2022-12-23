import React, { useEffect, useState } from 'react'
import DriverOptions from '../components/Driver/DriverOptions';

function DriverContainer () {

  const [newData, setNewData] = useState([]);
  const [serviceArray, setServiceArray] = useState([]);
  const [viewMode, setViewMode] = useState("")

  const getData = async () => {
    const response = await fetch("./test.json")
    const data = await response.json()
    setNewData(data)
    setServiceArray(data.JsonScheduleV1.schedule_segment.schedule_location)
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div>
      <p>This is the DriverContainer</p>
      <DriverOptions service={serviceArray}/>
    </div>
  )
}

export default DriverContainer;