import React, { Component } from "react";
import { Link } from "react-router-dom";
import iconPixbox from "../../assets/images/logo/logo-white-3.png";
import Navbar from "../../parts/navbar.js";

export default class Home extends Component {
  render() {
    return (
      <div class="b-body b-body-with-navbar b-pb-10">
        <div class="b-container">
          <Navbar />

          <form>
            <h1>FORM ORDER</h1>

            <div className="b-form-group b-mt-4" label="Tanggal" message-red="true">
              <input type="date" class="b-form-input" />
            </div>

            <div className="b-form-group b-mt-4" label="Services" message-red="true">
              <select className="b-form-input">
                <option>Service</option>
                <option>Example 1</option>
                <option>Example 2</option>
                <option>Example 3</option>
              </select>
            </div>

            <h2>Data Pickup</h2>

            <div
              className="b-form-group b-mt-4"
              label="Nama Pickup"
              message-red="true"
            >
              <input
                type="text"
                className="b-form-input"
                placeholder="Nama Pickup"
              />
            </div>

            <div
              className="b-form-group b-mt-4"
              label="Hp Pickup"
              message-red="true"
            >
              <input type="text" className="b-form-input" placeholder="Hp Pickup" />
            </div>

            <div
              className="b-form-group b-mt-4"
              label="Alamat Pickup"
              message-red="true"
            >
              <textarea className="b-form-input" placeholder="Alamat"></textarea>
            </div>

            <h2>Data Delivery</h2>

            <div
              className="b-form-group b-mt-4"
              label="Nama Deliver"
              message-red="true"
            >
              <input
                type="text"
                className="b-form-input"
                placeholder="Nama Deliver"
              />
            </div>

            <div
              className="b-form-group b-mt-4"
              label="Hp Deliver"
              message-red="true"
            >
              <input type="text" className="b-form-input" placeholder="Hp Deliver" />
            </div>

            <div
              className="b-form-group b-mt-4"
              label="Alamat Deliver"
              message-red="true"
            >
              <textarea className="b-form-input" placeholder="Alamat"></textarea>
            </div>

            <div className="b-form-group b-mt-4">
              <label className="b-form-input-checkbox">
                <input type="checkbox" />
                <span className="b-form-input-checkbox-switch"></span>
                COD
              </label>
            </div>

            <div
              className="b-form-group b-mt-4"
              label="Jumlah uang COD"
              message-red="true"
            >
              <input
                type="number"
                className="b-form-input"
                placeholder="Jumlah uang COD"
              />
            </div>

            <div
              className="b-form-group b-mt-4"
              label="Dibayar oleh"
              message-red="true"
            >
              <select className="b-form-input">
                <option>Penerima</option>
                <option>Pengirim</option>
              </select>
            </div>

            <div className="b-form-group b-mt-4" label="Note" message-red="true">
              <textarea className="b-form-input" placeholder="Note"></textarea>
            </div>

            <button type="submit" className="b-btn b-btn-red-1 b-btn-block b-mt-6">
              BUAT ORDER
            </button>
          </form>
        </div>
      </div>
    );
  }
}
