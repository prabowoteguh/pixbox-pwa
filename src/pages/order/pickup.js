import React, { Component } from "react";
import { Link } from "react-router-dom";
import iconPixbox from "../../assets/images/logo/logo-white-3.png";
import Navbar from "../../parts/navbar.js";

export default class List extends Component {
  render() {
    return (
      <div class="b-body b-body-with-navbar b-pb-10">
        <div class="b-container">
          <Navbar />

          <h2>PICKUP</h2>

          <div className="b-pickup-info">
            <div className="b-flex">
              <div className="b-flex-1">
                <p className="b-text-left b-bold">BRL2021062598493</p>
              </div>
              <div className="b-width-auto">
                <p className="b-text-right">30/06/2021</p>
              </div>
            </div>
            <div className="b-row">
              <div className="b-col-12 b-mb-3">
                <span className="b-bold">Teguh </span> - 08997765567678
              </div>
              <div className="b-col-12 b-mb-4">
                <small className="">Jl. Sukaluyu RT.02/12</small> <br></br>
                <small className="">Kel. Pasirbiru Kec. Cibiru</small> <br></br>
                <small className="">Bandung 40615</small>
              </div>
            </div>
            <div className="b-row">
              <div className="b-col-12">
                <div className="b-input-file b-mb-4">
                  <input type="file" accept="image/*" />
                  <span className="feather icon-plus"></span>
                </div>
              </div>
              <div className="b-col-12 b-text-right">
                <button className="b-btn b-btn-blue-1 b-btn-block">Pickup</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
