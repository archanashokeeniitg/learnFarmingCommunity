import React from "react";
import Home from "./views/Home";
import About from "./views/About";
import NavBar from "./components/NavBar";
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";

export const Routes = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/about" component={About} />
      </Switch>
    </Router>
  );
};
