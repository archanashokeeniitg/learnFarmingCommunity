import React from "react";

import { Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import { Alert } from "react-bootstrap";

const styles = makeStyles({
  bar: {
    paddingTop: "1.15rem",
    backgroundColor: "#0E6655",
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
    padding: 30,
    fontSize: 18,
    fontWeight: "bold",

    color: "#fff",
    ["@media (max-width:780px)"]: {
      paddingBottom: "1rem",
    },
  },
});

function NavBar() {
  const classes = styles();
  return (
    <div>
      <Toolbar
        position="sticky"
        color="rgba(0, 0, 0, 0.87)"
        className={classes.bar}
      >
        <img
          alt="logo"
          src="https://user-images.githubusercontent.com/66199202/113369436-31dc0b00-9316-11eb-9bf1-2ef815f0f669.png"
          style={{
            width: 100,
            height: 100,
            paddingBottom: 10,
          }}
        />

        <Typography variant="h6" className={classes.menuItem}>
          <NavLink
            exact
            to="/about"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            About
          </NavLink>
        </Typography>

        <Typography variant="h6" className={classes.menuItem}>
          <NavLink
            exact
            to="/announcements"
            style={{
              textDecoration: "none",
              color: "white",
              justifyContent: "space-around",
            }}
          >
            Announcements
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
      </Toolbar>
    </div>
  );
}

export default NavBar;
