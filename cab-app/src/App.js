import './App.css';
import React, { useEffect, useState } from 'react'
import Stops from './components/stops';
import DriverLogin from './components/DriverLogin/DriverLogin';
import DriverContainer from './containers/DriverContainer';

function App() {

  return (
    <div className="App">
      <DriverLogin/>
      <DriverContainer/>
    </div>
  );}
  
export default App;
