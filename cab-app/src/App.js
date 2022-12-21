import './App.css';
import React, { useEffect, useState } from 'react'

function App() {

  const [newData, setNewData] = useState([]);
  const [locationArray, setLocationArray] = useState([]);

  

  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch("./test.json")
      const data = await response.json()
      setNewData(data)
    }
    try {
    fetchdata()
    } catch (error) {
      console.error(error)
    }
  }, []) 

  return (
    <div className="App">
      <p>Schedule Start Date: {newData.JsonScheduleV1.schedule_start_date}</p>
      <p>Schedule End Date: {newData.JsonScheduleV1.schedule_end_date}</p>
      <p>Departure: {newData.JsonScheduleV1.schedule_segment.schedule_location[0].departure} From: {newData.JsonScheduleV1.schedule_segment.schedule_location[0].tiploc_code}</p>
      <p>Departure: {newData.JsonScheduleV1.schedule_segment.schedule_location[1].departure} From: {newData.JsonScheduleV1.schedule_segment.schedule_location[1].tiploc_code}</p>
      <p>Departure: {newData.JsonScheduleV1.schedule_segment.schedule_location[2].departure} From: {newData.JsonScheduleV1.schedule_segment.schedule_location[2].tiploc_code}</p>
      <p>Departure: {newData.JsonScheduleV1.schedule_segment.schedule_location[3].departure} From: {newData.JsonScheduleV1.schedule_segment.schedule_location[3].tiploc_code}</p>
      <p>Departure: {newData.JsonScheduleV1.schedule_segment.schedule_location[4].departure} From: {newData.JsonScheduleV1.schedule_segment.schedule_location[4].tiploc_code}</p>
      <p>Departure: {newData.JsonScheduleV1.schedule_segment.schedule_location[5].departure} From: {newData.JsonScheduleV1.schedule_segment.schedule_location[5].tiploc_code}</p>
      <p>Departure: {newData.JsonScheduleV1.schedule_segment.schedule_location[6].departure} From: {newData.JsonScheduleV1.schedule_segment.schedule_location[6].tiploc_code}</p>
      <p>Departure: {newData.JsonScheduleV1.schedule_segment.schedule_location[7].departure} From: {newData.JsonScheduleV1.schedule_segment.schedule_location[7].tiploc_code}</p>
      <p>Departure: {newData.JsonScheduleV1.schedule_segment.schedule_location[8].departure} From: {newData.JsonScheduleV1.schedule_segment.schedule_location[8].tiploc_code}</p>
    </div>
  );
}

export default App;
