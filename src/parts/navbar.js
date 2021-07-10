import React from "react";
import { Link } from "react-router-dom";
import iconPixbox from "../assets/images/logo/logo-white-3.png";

export default function Navbar() {
  return (
    <div className="b-navbar">
      <div className="b-navbar-container">
        <div className="b-navbar-wrapper">
          <div className="b-navbar-logo">
            <Link to="/">
              <img src={iconPixbox} />
            </Link>
          </div>
          <div className="b-navbar-menu">
            <Link to="login">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
