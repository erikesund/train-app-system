import React from "react";

function DriverLogin ({viewModeClick}) {

  function handleLoginClick(evt) {
    viewModeClick("options");
  };

  return (
      <form id="login-form">
        <label for="driverId">Please Enter Your Driver ID:</label><br/>
        <input type="text" id="driverId" name="driverId"/><br/>
        <label for="driverId">Please Enter Your Password:</label><br/>
        <input type="text" id="driverPassword" name="driverPassword"/><br/><br/>
        <input type="submit" value="Submit" onClick={handleLoginClick}/>
      </form>
  )
};

export default DriverLogin;