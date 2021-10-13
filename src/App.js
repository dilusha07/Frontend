import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  
} from "react-router-dom";

import './App.css';
import Home from "./components/Home";
import Navbar from "./components/layout/Navbar";
import AddBreed from "./components/breeds/AddBreed";

function App(props) {
  return (
    <Router>
    <div className = "App">
    <Navbar />

    <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/breeds/add" component={AddBreed} />
        </Switch>
    </div>
    </Router>
  );
}

export default App;
