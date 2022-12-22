import './App.css';
import React from 'react'
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
