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

          <h2>FORM ORDERS</h2>

          <div className="b-box b-box-shadow b-box-space-between b-px-4 b-pb-6 b-box-radius">
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
              <div className="b-col-6 b-flex b-col-y-center">
                <small className="b-text-left b-c-red-1">Boltz SameDay</small>
              </div>
              <div className="b-col-6 b-text-right">
                <button className="b-btn b-btn-blue-1">Process</button>
              </div>
            </div>
          </div>

          <div className="b-box b-box-shadow b-box-space-between b-px-4 b-pb-6 b-box-radius">
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
              <div className="b-col-6 b-flex b-col-y-center">
                <small className="b-text-left b-c-red-1">Boltz SameDay</small>
              </div>
              <div className="b-col-6 b-text-right">
                <button className="b-btn b-btn-blue-1">Process</button>
              </div>
            </div>
          </div>

          <div className="b-box b-box-shadow b-box-space-between b-px-4 b-pb-6 b-box-radius">
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
              <div className="b-col-6 b-flex b-col-y-center">
                <small className="b-text-left b-c-red-1">Boltz SameDay</small>
              </div>
              <div className="b-col-6 b-text-right">
                <button className="b-btn b-btn-blue-1">Process</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
