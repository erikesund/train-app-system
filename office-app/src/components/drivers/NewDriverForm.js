import React, { useState } from "react";

function NewDriverForm () {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    tocName: "",
    tocCode: "",
  })

  const onChange = (e) =>{
    const newFormData = Object.assign({}, formData);
    newFormData[e.target.name] = e.target.value;
    setFormData(newFormData);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    postDriver(formData).then((data) => {
      addDriver(data)
    })
    setFormData({
      firstName: "",
      lastName: "",
      tocName: "",
      tocCode: "",
    })
  }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="firstName">First Name:</label>
      <input 
        onChange={onChange}
        type="text"
        id="firstName"
        name="firstName"
        value={formData.firstName}/> <br/>  
      <label htmlFor="lastName">Surname:</label>
      <input 
        onChange={onChange} 
        type="text" 
        id="lastName"
        name="lastName"
        value={formData.lastName}/><br/>
      <label htmlFor="tocName">TOC Name:</label>
      <input
        onChange={onChange}
        type="text"
        id="tocName"
        name="tocName"
        value={formData.tocName}/><br/>
      <label htmlFor="tocCode">TOC Code:</label>
      <input
        onChange={onChange}
        type="text"
        id="tocCode"
        name="tocCode"
        value={formData.tocCode}/><br/>
      <input type="submit" value="Save" id="save"/>
    </form>
  )
};

export default NewDriverForm;