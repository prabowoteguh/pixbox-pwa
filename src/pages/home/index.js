import React, { Component, useState } from "react";
import { Link, withRouter, useHistory } from "react-router-dom";
import { Redirect } from "react-router";
import Navbar from "../../parts/navbar.js";

export default class HomePage extends Component {
  constructor() {
    super();

    this.state = {
      message: {},
    };
  }
  onSubmit = (event) => {
    event.preventDefault();

    console.log("EVENT ===>", this);

    // let searchValue = document.getElementById("search").value.toUpperCase();
    // let sampleData = "BSD2021070972995";

    // if (searchValue === sampleData) {
    //   // this.props.history.push("status", { search: searchValue });

    //   return <Redirect to={{ pathname: `/status/${searchValue}` }} />;
    // } else if (searchValue === "") {
    //   document.getElementById("error-message").innerText =
    //     "Nomer resi tidak boleh kosong";
    // } else {
    //   document.getElementById("error-message").innerText = "Nomer resi tidak valid";
    // }
  };

  render() {
    return (
      <div class="b-body b-body-with-navbar">
        <div class="b-container">
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
                  name="search"
                  type="search"
                  className="b-form-input b-form-input-rounded"
                  placeholder="No Resi"
                />
                <button type="submit" className="b-btn b-btn-search">
                  <span className="feather icon-search"></span>
                </button>
              </div>
              <div class="b-ml-4 b-mb-1 b-c-primary b-text-center"> {{}} </div>
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
