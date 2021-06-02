import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const Login = () => {
    const [newUser, setNewUser] = useState({
        email: "",
        password: "",
        error: "",
        loading: false,
        redirectToReferrer: false,
    });
    // const [err, setErr] = useState("");
    const handleOnchange = (e) => {
        const registerUser = { ...newUser };
        registerUser[e.target.name] = e.target.value;
        setNewUser(registerUser);
    };
    const handleLogin = (user) => {
        // setNewUser({ ...newUser, error: false, loading: true });
        fetch("http://localhost:5000/signin", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data.error);
                if (data.error) {
                    setNewUser({
                        ...newUser,
                        error: data.error,
                        loading: false,
                    });
                } else {
                    setNewUser({
                        ...newUser,
                        redirectToReferrer: true,
                    });
                }
            });
    };
    console.log(newUser.error);
    // console.log(err);
    // const redirectUser = () => {
    //     if (newUser.redirectToReferrer === true) {
    //         return <Redirect to="/" />;
    //     }
    // };
    return (
        <div className="container">
            <div style={{ display: newUser.error ? "" : "none" }}>
                {newUser.error}
            </div>
            {/* {newUser.loading && (
                <div>
                    <h2>Loading....</h2>
                </div>
            )} */}

            <div className="registration">
                <form className="form">
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
                </form>
                <div className="register">
                    {/* <button onClick={() => handleRegister(newUser)} type="submit">
          Registration
        </button>
        <button>login</button> */}
                    <Button
                        onClick={() => handleLogin(newUser)}
                        variant="contained"
                        color="primary"
                    >
                        Login
                    </Button>
                </div>
            </div>
            {/* {redirectUser()} */}
        </div>
    );
};

export default Login;
