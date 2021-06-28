import React, { Component } from "react";
import Navbar from "../../parts/navbar.js";

export default class HomePage extends Component {
  render() {
    return (
      <div class="b-body b-body-with-navbar">
        <div class="b-container">
          <Navbar />
          <div className="b-home-content">
            <div className="b-tbold-1 b-px-1">
              Masukan nomer resi untuk melihat status order Anda ?
            </div>
            <div>
              <form action="#">
                <div className="b-form-gp">
                  <div className="b-p-relative">
                    <input
                      className="b-input-form b-w-100"
                      name="no_resi"
                      placeholder="Masukan nomer resi ..."
                    />
                    <span className="b-search-icon">S</span>
                  </div>
                  <button className="b-btn b-btn-red-1 b-btn-block b-mt-4 b-py-3">
                    Order Baru
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
