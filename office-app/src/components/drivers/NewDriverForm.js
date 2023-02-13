import React from "react";

function NewDriverForm () {
  return (
    <form>
      <label>First Name:</label> <input type="text" name="firstName"/><br/>
      <label>Surname:</label> <input type="text" name="lastName"/><br/>
      <label>TOC Name:</label> <input type="text" name="tocName"/><br/>
      <label>TOC Code:</label> <input type="text" name="tocCode"/><br/>
      <input type="submit" value="Submit"/>
    </form>
  )
};

export default NewDriverForm;