import React, { Component } from "react";
import iconPixbox from "../../assets/images/logo/logo-white-3.png";

export default class Home extends Component {
  render() {
    return (
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
        <h1>Haii</h1>
        <h2>Test</h2>
        <div>
          <h1>Example Button</h1>
          <div>
            <button type="button" class="b-btn b-btn-red-1">RED BUTTON</button>
          </div>
          <div>
            <button type="button" class="b-btn b-btn-yellow-1">YELLOW BUTTON</button>
          </div>
          <div>
            <button type="button" class="b-btn b-btn-green-1">GREEN BUTTON</button>
          </div>
          <div>
            <button type="button" class="b-btn b-btn-blue-1">BLUE BUTTON</button>
          </div>
          <div>
            <button type="button" class="b-btn b-btn-default">GRAY BUTTON</button>
          </div>
        </div>
      </div>
    );
  }
}