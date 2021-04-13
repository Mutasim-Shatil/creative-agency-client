import React, { useState } from "react";
import "./Registration.css";
import Button from "@material-ui/core/Button";

const Registration = () => {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const handleOnchange = (e) => {
    const registerUser = { ...newUser };
    registerUser[e.target.name] = e.target.value;
    setNewUser(registerUser);
  };
  const handleRegister = (user) => {
    // console.log(user);
    fetch("http://localhost:5000/users/register", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((success) => {
        // if (success) {
        //   alert("Appointment created successfully.");
        // }
        console.log(success);
      });
  };
  console.log(newUser);
  return (
    <div className="container">
      <div className="registration">
        <form className="form">
          <input
            type="text"
            onBlur={handleOnchange}
            name="name"
            placeholder="Your Name"
          />
          <input
            type="text"
            onBlur={handleOnchange}
            name="email"
            placeholder="Email"
          />
          <input
            type="password"
            onBlur={handleOnchange}
            name="password"
            placeholder="Password"
          />
          <input
            type="text"
            onBlur={handleOnchange}
            name="phone"
            placeholder="Phone number"
          />
        </form>
        <div className="register">
          {/* <button onClick={() => handleRegister(newUser)} type="submit">
          Registration
        </button>
        <button>login</button> */}
          <Button
            onClick={() => handleRegister(newUser)}
            variant="contained"
            color="primary"
          >
            Registration
          </Button>
          <Button variant="contained" color="primary">
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
