import React, { useState } from "react";
import "./Registration.css";
import Button from "@material-ui/core/Button";

const Registration = () => {
    const [newUser, setNewUser] = useState({
        name: "",
        email: "",
        password: "",
        // phone: "",
        error: "",
        success: "",
    });
    // const [success, setSuccess] = useState()
    const handleOnchange = (e) => {
        const registerUser = { ...newUser };
        registerUser[e.target.name] = e.target.value;
        setNewUser(registerUser);
    };
    const handleRegister = (user) => {
        // user.preventDefaul()
        // console.log(user);
        setNewUser({ ...newUser, error: false });
        fetch("http://localhost:5000/signup", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data.errors);
                if (data.errors) {
                    setNewUser({
                        ...newUser,
                        error: data.errors,
                        success: false,
                    });
                } else {
                    setNewUser({
                        ...newUser,
                        name: "",
                        email: "",
                        password: "",
                        error: "",
                        success: true,
                    });
                }
            });
    };
    console.log(newUser.error);

    //!error function create
    // const showError = () => {
    //     <div style={{ display: error ? "" : "none" }}></div>;
    // };
    return (
        <div className="container">
            {/* <h1>{newUser.message}</h1> */}
            {/* {newUser.message && <p>Login</p>} */}
            <div style={{ display: newUser.error ? "" : "none" }}>
                {newUser.error}
            </div>
            <div style={{ display: newUser.success ? "" : "none" }}>
                New account is created. Please signin
            </div>
            <div className="registration">
                <form className="form">
                    <input
                        type="text"
                        onBlur={handleOnchange}
                        name="name"
                        placeholder="Your Name"
                        required="true"
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
                    {/* <input
                        type="text"
                        onBlur={handleOnchange}
                        name="phone"
                        placeholder="Phone number"
                    /> */}
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
