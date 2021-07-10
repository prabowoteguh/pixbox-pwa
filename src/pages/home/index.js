import React, { Component, useState } from "react";
import { Link, withRouter, useHistory, Redirect } from "react-router-dom";
import Navbar from "../../parts/navbar.js";

export default class HomePage extends Component {
  constructor() {
    super();

    this.state = {
      message: "",
      resiCode: "",
    };
  }

  handleResiChange = (event) => {
    this.setState({ resiCode: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    const resiCode = this.state.resiCode;
    if (resiCode.length > 0) {
      this.props.history.push("/status");
    } else {
      this.setState({ message: "RESI TIDAK BOLEH KOSONG" });
    }
  };

  render() {
    const { message } = this.state;
    return (
      <div className="b-body b-body-with-navbar">
        <div className="b-container">
          <Navbar />
          <div className="b-home-content">
            <h2>Lacak pengiriman</h2>
            <form
              action="/status"
              className="b-mt-4 b-mb-10"
              onSubmit={this.onSubmit}
            >
              <div className="b-form-group-search">
                <input
                  formMethod="GET"
                  name="resi"
                  type="search"
                  className="b-form-input b-form-input-rounded"
                  placeholder="No Resi"
                  onChange={this.handleResiChange}
                />
                <button type="submit" className="b-btn b-btn-search">
                  <span className="feather icon-search"></span>
                </button>
              </div>
              <div className="b-ml-4 b-mb-1 b-c-primary b-text-center">
                {message}
              </div>
            </form>
            <Link
              to="order"
              className="b-btn b-btn-red-1 b-btn-rounded b-btn-block b-mt-4 b-py-3"
            >
              ORDER BARU
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
