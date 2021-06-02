import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/HomePage/Home/Home";
import Login from "./components/User/Registration/Login/Login";
import User from "./components/User/User";
// import Navbar from './components/Navbar/Navbar'

const App = () => {
    return (
        <Router>
            <Switch>
                {/* <Route>
          <Navbar />
        </Route> */}
                <Route exact path="/">
                    <Home />
                </Route>
                {/* <Route exact path="/user">
          <User />
        </Route> */}
                <Route exact path="/user">
                    <Login />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
