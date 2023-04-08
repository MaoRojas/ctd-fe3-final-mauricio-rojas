import React, { useContext } from "react";
import { Outlet, NavLink } from "react-router-dom";
import "./Navbar.css";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";
import { ThemeContext } from "../../../context/ThemeContext/ThemeContext";
import logo from "..//..//assets/img/DH.png"

const Navbar = () => {
  const { state, dispatch } = useContext(ThemeContext);

  const handleDarkModeClick = () => {
    dispatch({ type: "SWITCH_MODE" });
  };

  return (
    <div className={state.isDark ? "dark" : "light"}>
      <div className="container-navbar">
        <div className="container-dh">
          <img className="logodh" src= {logo} /> 
          <h2>Clinic</h2>
        </div>

        <div className="container-items">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "navbar-items-active" : "navbar-items"
            }
          >
            Home
            </NavLink>
          <NavLink
            to="/dentistas"
            className={({ isActive }) =>
              isActive ? "navbar-items-active" : "navbar-items"
            }
          >
            Dentists
          </NavLink>
          <NavLink
            to="/favs"
            className={({ isActive }) =>
              isActive ? "navbar-items-active" : "navbar-items"
            }
          >
            Favs
          </NavLink>
          <NavLink
            to="/contacto"
            className={({ isActive }) =>
              isActive ? "navbar-items-active" : "navbar-items"
            }
          >
            Contact
          </NavLink>
          <FormGroup>
            <FormControlLabel
              sx={{ color: "white" }}
              control={<Switch defaultChecked />}
              label=""
              onClick={handleDarkModeClick}
            />
          </FormGroup>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
