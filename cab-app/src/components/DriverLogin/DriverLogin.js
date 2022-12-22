import React from "react";

function DriverLogin () {

  return (
    <form>
      <label for="driverId">Please Enter Your Driver ID:</label><br/>
      <input type="text" id="driverId" name="driverId"/><br/>
      <label for="driverId">Please Enter Your Password:</label><br/>
      <input type="text" id="driverPassword" name="driverPassword"/><br/><br/>
      <input type="submit" value="Submit"/>
    </form>
  )
};

export default DriverLogin;