import React from "react";
import { Link } from "react-router-dom";
import iconPixbox from "../assets/images/logo/logo-white-3.png";

export default function Navbar() {
  return (
    <div class="b-navbar">
      <div class="b-navbar-container">
        <div class="b-navbar-wrapper">
          <div class="b-navbar-logo">
            <Link to="/">
              <img src={iconPixbox} />
            </Link>
          </div>
          <div class="b-navbar-menu">
            <Link to="login">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
