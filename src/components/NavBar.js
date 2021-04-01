import React from "react";
import CustomBtn from "./CustomBtn";
import logo from "../logo.svg";
import logoMobile from "../logoMobile.svg";
import { Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import About from "../views/About";
import Home from "../views/Home";
//import About from "../views/About";

const styles = makeStyles({
  bar: {
    paddingTop: "1.15rem",
    backgroundColor: "#6EC72D",
    ["@media (max-width:780px)"]: {
      flexDirection: "column",
    },
  },
  logo: {
    width: "15%",
    ["@media (max-width:780px)"]: {
      display: "none",
    },
  },
  logoMobile: {
    width: "100%",
    display: "none",
    ["@media (max-width:780px)"]: {
      display: "inline-block",
    },
  },
  menuItem: {
    cursor: "pointer",
    flexGrow: 1,
    "&:hover": {
      color: "#4f25c8",
    },
    textDecoration: "none",
    padding: 20,

    color: "#fff",
    ["@media (max-width:780px)"]: {
      paddingBottom: "1rem",
    },
  },
});

function NavBar() {
  const classes = styles();
  return (
    <Toolbar
      position="sticky"
      color="rgba(0, 0, 0, 0.87)"
      className={classes.bar}
    >
      <img
        alt="logo"
        src="https://img.icons8.com/fluent/96/000000/plant-under-sun.png"
        //src="https://img.icons8.com/color/80/000000/plant-under-sun--v1.png"
      />

      <Typography variant="h6" className={classes.menuItem}>
        <NavLink
          exact
          to="/about"
          style={{ textDecoration: "none", color: "white" }}
        >
          About
        </NavLink>
      </Typography>

      <Typography variant="h6" className={classes.menuItem}>
        <NavLink
          exact
          to="/announcements"
          style={{ textDecoration: "none", color: "white" }}
        >
          Announcements
        </NavLink>
      </Typography>

      <Typography variant="h6" className={classes.menuItem}>
        <NavLink
          exact
          to="/blogs"
          style={{ textDecoration: "none", color: "white" }}
        >
          Blogs
        </NavLink>
      </Typography>

      <Typography variant="h6" className={classes.menuItem}>
        <NavLink
          exact
          to="/services"
          style={{ textDecoration: "none", color: "white" }}
        >
          Services
        </NavLink>
      </Typography>

      <Typography variant="h6" className={classes.menuItem}>
        <NavLink
          exact
          to="/contactus"
          style={{ textDecoration: "none", color: "white" }}
        >
          Contact Us
        </NavLink>
      </Typography>

      <CustomBtn txt="Trial Our Product" />
    </Toolbar>
  );
}

export default NavBar;
