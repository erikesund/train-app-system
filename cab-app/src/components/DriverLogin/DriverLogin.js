import React from "react";

function DriverLogin () {

  return (

    <div>
      <p>This is the DriverLogin Container</p>
      <form>
        <label for="driverId">Please Enter Your Driver ID:</label><br/>
        <input type="text" id="driverId" name="driverId"/><br/>
        <label for="driverId">Please Enter Your Password:</label><br/>
        <input type="text" id="driverPassword" name="driverPassword"/><br/><br/>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  )
};

export default DriverLogin;