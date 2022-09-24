import React, { Component } from "react";
import logo from "./image/logo_white.png";
import table from "./icons/table_rows-24px.svg";

// stateless funcion component
const NavBar = (props) => {
  const [preNav, postNav] = React.useState(false);

  const togglechange = () => {
    postNav(!preNav);
  };

  const toggleNav = () => {
    let navClass = "navlinks";
    if (preNav) {
      navClass += " active";
    }
    return navClass;
  };
  return (
    <div className="navbar">
      <nav className="nav">
        <div className="logo-container">
          <a className="navbar-logo" href="./">
            <img src={logo} className="k4slogo" />

            <h4>St. Margaret's Bay Wooodland Area</h4>
          </a>
        </div>
        <ul className={toggleNav()}>{props.children}</ul>
        <div className="hamburger-toggle">
          <img onClick={togglechange} className="hamburger" src={table} />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
