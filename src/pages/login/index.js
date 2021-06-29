import React, { Component } from "react";
import { Link } from "react-router-dom";
import pixboxIcon from "../../assets/images/logo/icon-white-3.png";

export default class Login extends Component {
  render() {
    return (
      <div className="b-auth-wrapper">
        <div className="b-auth-header">
          <img src={pixboxIcon} />
        </div>
        <div className="b-auth-body">
          <div className="b-container">
            <div className="b-mb-10">
              <div className="b-auth-title">Login</div>
              <div className="b-auth-subtitle">
                Belum punya akun ?, daftar disini
              </div>
            </div>
            <form>
              <div className="b-form-group" label="Email or Phone">
                <div className="b-form-input-icon">
                  <span className="feather icon-user"></span>
                </div>
                <input
                  type="text"
                  className="b-form-input-strip"
                  placeholder="Ex : yourname@email.com"
                />
              </div>
              <div className="b-form-group b-mt-4" label="Password">
                <div className="b-form-input-icon">
                  <span className="feather icon-lock"></span>
                </div>
                <input
                  type="password"
                  className="b-form-input-strip"
                  placeholder="Type your password"
                />
              </div>
              <div className="b-row b-row-x-center b-mt-7">
                <div className="b-col-8 b-flex b-col-x-center">
                  <Link
                    to="/pickup"
                    type="button"
                    className="b-btn b-btn-red-1 b-btn-block b-btn-rounded"
                  >
                    LOGIN
                  </Link>
                </div>
                <div className="b-col-12 b-flex b-col-x-center b-mt-3">
                  <Link to="home">Back to Home</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
