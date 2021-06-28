import React, { Component } from "react";
import { Link } from "react-router-dom";
import iconPixbox from "../../assets/images/logo/logo-white-3.png";
import barcode from "../../assets/images/barcode.jpg";

export default class Home extends Component {
  render() {
    return (
      <div class="b-body b-body-with-navbar">
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
          <h1 class="b-kode">BSD2021062536799</h1>
          <div class="b-struck">
            <div class="b-span">
              <span>Tanggal : </span>
              <span>31-06-2021</span>
            </div>
            <div class="b-span">
              <span>Service : </span>
              <span>Boltz SameDay</span>
            </div>
            <div class="b-span">
              <span>Biaya : </span>
              <span>Rp. 7,500</span>
            </div>
            <div class="b-span">
              <span>Bayar : </span>
              <span>Boltz SameDay</span>
            </div>
            <div class="b-span">
              <span>Pick Up : </span>
              <span class="">Boltz SameDay</span>
              <div class="b-pick b-span">087829976236</div>
              <div class="b-pick b-span">Jl. Sukaluyu RT.02/12 Kel.</div>
              <div class="b-pick b-span">Pasirbiru Kec. Cibiru Bandung</div>
              <div class="b-pick b-span">40615</div>
            </div>
            <div class="b-span">
              <span>Deliver : </span>
              <span>Boltz SameDay</span>
              <div class="b-pick b-span">087829976236</div>
              <div class="b-pick b-span">Jln Karang Arum No.26 RT.01 RW.02</div>
              <div class="b-pick b-span">Kec. Sukajadi Bandung 40195</div>
            </div>
            <div>
              <span>Diantar Maksimal : </span> <span>30-01-2021</span>
            </div>
            <img src={barcode} class="b-barcode" />

            <div class="b-mb-2">
              <button type="button" class="b-btn b-btn-default b-download">
                DOWNLOAD
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
