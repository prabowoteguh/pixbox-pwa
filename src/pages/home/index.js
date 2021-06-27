import React, { Component } from "react";
import { Link } from "react-router-dom";
import iconPixbox from "../../assets/images/logo/logo-white-3.png";

export default class Home extends Component {
  render() {
    return (
      <div class="b-body b-body-with-navbar">
        <div class="b-container">
          <div class="b-navbar">
            <div class="b-navbar-container">
              <div class="b-navbar-wrapper">
                <div class="b-navbar-logo">
                  <img src={iconPixbox} />
                </div>
                <div class="b-navbar-menu">
                  <a href="#">Login</a>
                </div>
              </div>
            </div>
          </div>
          <h1>WANT TO SEE EXAMPLE ?</h1>
          <Link to="example">SEE EXAMPLE</Link>
        </div>
      </div>
    );
  }
}