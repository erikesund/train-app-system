import './App.css';
import React, { useEffect, useState } from 'react'

function App() {

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


  if (locationArray.arrival === undefined) {
    return (
      <p>Hello</p>
    )
  } else 
{  return (
    <div className="App">
      <p>{locationArray[0].arrival}</p>
    </div>
  );}
  }

export default App;
