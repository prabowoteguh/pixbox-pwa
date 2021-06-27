import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Login extends Component {
  render() {
    return (
      <div class="b-body">
        <h1>CONTOH HALAMAN LOGIN</h1>
        <Link to="/example">BACK TO EXAMPLE</Link>
      </div>
    );
  }
}