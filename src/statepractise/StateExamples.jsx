import React, { useState } from "react";

const StateExamples = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const submitChangeHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={submitChangeHandler}>
      <h1>=====================================</h1>
      <label>enter your name:-</label>
      <input
        onChange={inputChangeHandler}
        name="userName"
        value={formData.userName}
        type="text"
      ></input>
      <label>email:-</label>
      <input
        onChange={inputChangeHandler}
        name="email"
        value={formData.email}
        type="text"
      ></input>
      <label>enter your passWord :- </label>
      <input
        onChange={inputChangeHandler}
        name="password"
        value={formData.password}
        type="text"
      ></input>
      <button type="submit"></button>

      <div>your name is {formData.userName}</div>
      <div>your name is {formData.password}</div>
      <div>your name is {formData.email}</div>
    </form>
  );
};

export default StateExamples;
