import React, { Component } from "react";
import { Link, withRouter, useHistory } from "react-router-dom";
import { Redirect } from "react-router";
import Navbar from "../../parts/navbar.js";

export default class HomePage extends Component {
  onSubmit = (event) => {
    event.preventDefault();

    this.props.history.push("status");
    // return <Redirect to="/status" />;
  };

  render() {
    return (
      <div class="b-body b-body-with-navbar">
        <div class="b-container">
          <Navbar />
          <div className="b-home-content">
            <h2>Lacak pengiriman</h2>
            <form className="b-mt-3 b-mb-10" onSubmit={this.onSubmit}>
              <div className="b-form-group-search">
                <input
                  type="search"
                  className="b-form-input b-form-input-rounded"
                  placeholder="No Resi"
                />
                <button type="submit" className="b-btn b-btn-search">
                  <span className="feather icon-search"></span>
                </button>
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
