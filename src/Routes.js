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
import Announcements from "./views/Announcements";
import Blogs from "./views/Blogs";
import Services from "./views/Services";
import ContactUs from "./views/ContactUs";

export const Routes = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/announcements" component={Announcements} />
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/about" component={About} />
        <Route exact path="/blogs" component={Blogs} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/contactus" component={ContactUs} />
      </Switch>
    </Router>
  );
};
