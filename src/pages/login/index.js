import React, { Component } from "react";
import iconPixbox from "../../assets/images/logo/logo-white-3.png";

export default class Login extends Component {
  render() {
    return (
      <div class="b-body">
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
        <h1>Haii</h1>
        <h2>Test</h2>
      </div>
    );
  }
}