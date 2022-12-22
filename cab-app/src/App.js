import './App.css';
import React, { useEffect, useState } from 'react'

function App() {

  const [newData, setNewData] = useState([]);
  const [locationArray, setLocationArray] = useState([]);

  const getData = async () => {
    const response = await fetch("./test.json")
    const data = await response.json()
    setNewData(data)
  }

  try {
    getData()
      } catch (error) {
        console.error(error)
  }

  useEffect(() => {
    getData();
  }, [])

  if (newData === []){
    return null;
  } else {
    return (
      <div className="App">

      </div>
    );
  }

  
}

export default App;
