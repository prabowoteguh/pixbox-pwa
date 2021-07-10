import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import iconPixbox from "../../assets/images/logo/logo-white-3.png";
import Navbar from "../../parts/navbar.js";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      messagePickupName: "",
      pickupName: "",
      messagePickupPhone: "",
      pickupPhone: "",
      messagePickupAddress: "",
      pickupAddress: "",
      messageDeliverName: "",
      deliverName: "",
      messageDeliverPhone: "",
      deliverPhone: "",
      messageDeliverAddress: "",
      deliverAddress: "",
      messageTotalMoney: "",
      totalMoney: "",
      messageNote: "",
      note: "",
    };
  }

  handlePickupName = (event) => {
    this.setState({ pickupName: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const state = this.state;
    const pickupName = this.state.pickupName;

    if (pickupName.length > 0) {
      console.log(true);
    } else {
      this.setState({ messagePickupName: "NAMA PICKUP TIDAK BOLEH KOSONG" });
    }

    if (state.pickupPhone.length > 0) {
      console.log(true);
    } else {
      this.setState({ messagePickupPhone: "NOMER HP PICKUP TIDAK BOLEH KOSONG" });
    }

    if (state.pickupAddress.length > 0) {
      console.log(true);
    } else {
      this.setState({ messagePickupPhone: "ALAMAT PICKUP TIDAK BOLEH KOSONG" });
    }
    
    if (state.deliverName.length > 0) {
      console.log(true);
    } else {
      this.setState({ messageDeliverName: "NAMA DELIVER TIDAK BOLEH KOSONG" });
    }

    if (state.deliverPhone.length > 0) {
      console.log(true);
    } else {
      this.setState({ messageDeliverPhone: "NOMER HP DELIVER TIDAK BOLEH KOSONG" });
    }

    if (state.deliverAddress.length > 0) {
      console.log(true);
    } else {
      this.setState({ messageDeliverAddress: "ALAMAT DELIVER TIDAK BOLEH KOSONG" });
    }

    if (state.pickupAddress.length > 0) {
      console.log(true);
    } else {
      this.setState({ messagePickupPhone: "NOMER HP PICKUP TIDAK BOLEH KOSONG" });
    }

    if (state.totalMoney.length > 0) {
      console.log(true);
    } else {
      this.setState({ messageTotalMoney: "TOTAL UANG TIDAK BOLEH KOSONG" });
    }

    if (state.note.length > 0) {
      console.log(true);
    } else {
      this.setState({ messageNote: "NOTE TIDAK BOLEH KOSONG" });
    }
  };

  errorMessage = (state) => {
    return (
      <div className="b-ml-4 b-mb-1 b-c-primary b-text-center">
        <small>{state}</small>
      </div>
    );
  };

  render() {
    const {
      messagePickupName,
      messagePickupPhone,
      messagePickupAddress,
      messageDeliverName,
      messageDeliverPhone,
      messageDeliverAddress,
      messageTotalMoney,
      messageNote,
    } = this.state;

    return (
      <div className="b-body b-body-with-navbar b-pb-10">
        <div className="b-container">
          <Navbar />
          <form method="post" onSubmit={this.handleSubmit} id="myForm">
            <h1>FORM ORDER</h1>
            <div className="b-form-group b-mt-4" label="Tanggal" message-red="true">
              <input type="date" className="b-form-input" />
            </div>

            <div className="b-form-group b-mt-4" label="Services" message-red="true">
              <select name="service" className="b-form-input">
                <option>Service</option>
                <option value="example1">Example 1</option>
                <option value="example2">Example 2</option>
                <option value="example3">Example 3</option>
              </select>
            </div>

            <h2>Data Pickup</h2>

            <div
              className="b-form-group b-mt-4"
              label="Nama Pickup"
              message-red="true"
            >
              <input
                name="pickup_name"
                type="text"
                className="b-form-input"
                placeholder="Nama Pickup"
                onChange={this.handlePickupName}
              />
            </div>
            {this.errorMessage(messagePickupName)}

            <div
              className="b-form-group b-mt-4"
              label="Hp Pickup"
              message-red="true"
            >
              <input
                type="text"
                name="pickup_phone"
                className="b-form-input"
                placeholder="Hp Pickup"
              />
            </div>
            {this.errorMessage(messagePickupPhone)}

            <div
              className="b-form-group b-mt-4"
              label="Alamat Pickup"
              message-red="true"
            >
              <textarea
                name="pickup_address"
                className="b-form-input"
                placeholder="Alamat"
              ></textarea>
            </div>
            {this.errorMessage(messagePickupAddress)}

            <h2>Data Delivery</h2>

            <div
              className="b-form-group b-mt-4"
              label="Nama Deliver"
              message-red="true"
            >
              <input
                name="deliver_name"
                type="text"
                className="b-form-input"
                placeholder="Nama Deliver"
              />
            </div>
            {this.errorMessage(messageDeliverName)}

            <div
              className="b-form-group b-mt-4"
              label="Hp Deliver"
              message-red="true"
            >
              <input
                name="deliver_phone"
                type="text"
                className="b-form-input"
                placeholder="Hp Deliver"
              />
            </div>
            {this.errorMessage(messageDeliverPhone)}
          
            <div
              className="b-form-group b-mt-4"
              label="Alamat Deliver"
              message-red="true"
            >
              <textarea
                name="deliver_address "
                className="b-form-input"
                placeholder="Alamat"
              ></textarea>
            </div>
            {this.errorMessage(messageDeliverAddress)}

            <div className="b-form-group b-mt-4">
              <label className="b-form-input-checkbox">
                <input type="checkbox" name="cod" />
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
                name="jumlahUang"
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
              <select name="paid_in" className="b-form-input">
                <option>Penerima</option>
                <option>Pengirim</option>
              </select>
            </div>

            <div className="b-form-group b-mt-4" label="Note" message-red="true">
              <textarea
                name="notes"
                className="b-form-input"
                placeholder="Note"
              ></textarea>
            </div>
            {this.errorMessage(messageNote)}

            <button type="submit" className="b-btn b-btn-red-1 b-btn-block b-mt-6">
              BUAT ORDER
            </button>
          </form>
        </div>
      </div>
    );
  }
}
