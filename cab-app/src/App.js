import './App.css';
import React, { useEffect, useState } from 'react'
import Stops from './components/stops';

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


  return (
    <div className="App">
      <Stops stops={locationArray}/>
    </div>
  );}
  

export default App;
