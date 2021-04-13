import React, { useState } from "react";
import "./Registration.css";
import Button from "@material-ui/core/Button";

const Registration = () => {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    passwordHash: "",
    phone: "",
  });
  const handleOnchange = (e) => {
    const registerUser = { ...newUser };
    registerUser[e.target.name] = e.target.value;
    setNewUser(registerUser);
  };
  const handleRegister = (user) => {
    console.log(user);
    fetch("");
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
            name="passwordHash"
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
