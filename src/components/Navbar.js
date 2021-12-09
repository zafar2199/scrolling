import React from "react";
import LogoImg from "../images/logo.svg";

const Navbar = () => {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="navbar">
          <a href="/" className="logo">
            <img src={LogoImg} alt="logo" />
            <span>APPX</span>
          </a>
          <ul className="menu-links">
            <li>
              <a href="/">Projects</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
