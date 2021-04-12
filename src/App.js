import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/HomePage/Home/Home';
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
      </Switch>
    </Router>
  );
}

export default App
