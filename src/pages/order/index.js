import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import iconPixbox from "../../assets/images/logo/logo-white-3.png";
import Navbar from "../../parts/navbar.js";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      orders: [],
      order_date: null,
      service: null,
      pickup_name: null,
      pickup_phone: null,
      pickup_address: null,
      deliver_name: null,
      deliver_phone: null,
      deliver_address: null,
      cod: null,
      jumlahUang: null,
      paid_in: null,
      notes: null,
    };
  }

  saveDataToAPI(e) {
    e.preventDefault();
    const apiUrl = "https://admin.pixbox.id/api/orders";
    const orderForm = {
      order_date: this.state.order_date,
      service: this.state.service,
      pickup_name: this.state.pickup_name,
      pickup_phone: this.state.pickup_phone,
      pickup_address: this.state.pickup_address,
      deliver_name: this.state.deliver_name,
      deliver_phone: this.state.deliver_phone,
      deliver_address: this.state.deliver_address,
      cod: this.state.cod,
      jumlahUang: this.state.jumlahUang,
      paid_in: this.state.paid_in,
      notes: this.state.notes,
    };

    axios.post(apiUrl, orderForm).then((res) => {
      let orders = this.state.orders;
      orders.push(res.data);
      this.setState({});
      document.getElementById("myForm").reset();
    });
  }

  render() {
    return (
      <div className="b-body b-body-with-navbar b-pb-10">
        <div className="b-container">
          <Navbar />
          <pre>{JSON.stringify(this.state, null, 2)}</pre>
          <form method="post" onSubmit={(e) => this.saveDataToAPI(e)} id="myForm">
            <h1>FORM ORDER</h1>
            <div className="b-form-group b-mt-4" label="Tanggal" message-red="true">
              <input type="date" className="b-form-input" />
            </div>

            <div className="b-form-group b-mt-4" label="Services" message-red="true">
              <select
                name="service"
                className="b-form-input"
                onChange={(e) => {
                  this.setState({ service: e.target.value });
                }}
              >
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
                onChange={(e) => this.setState({ pickup_name: e.target.value })}
              />
            </div>

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
                onChange={(e) => this.setState({ pickup_phone: e.target.value })}
              />
            </div>

            <div
              className="b-form-group b-mt-4"
              label="Alamat Pickup"
              message-red="true"
            >
              <textarea
                name="pickup_address"
                className="b-form-input"
                placeholder="Alamat"
                onChange={(e) => this.setState({ pickup_address: e.target.value })}
              ></textarea>
            </div>

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
                onChange={(e) => this.setState({ deliver_name: e.target.value })}
              />
            </div>

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
                onChange={(e) => this.setState({ deliver_phone: e.target.value })}
              />
            </div>

            <div
              className="b-form-group b-mt-4"
              label="Alamat Deliver"
              message-red="true"
            >
              <textarea
                name="deliver_address "
                className="b-form-input"
                placeholder="Alamat"
                onChange={(e) => this.setState({ deliver_address: e.target.value })}
              ></textarea>
            </div>

            <div className="b-form-group b-mt-4">
              <label className="b-form-input-checkbox">
                <input
                  type="checkbox"
                  name="cod"
                  onChange={(e) => this.setState({ cod: e.target.value })}
                />
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
                onChange={(e) => this.setState({ jumlahUang: e.target.value })}
              />
            </div>

            <div
              className="b-form-group b-mt-4"
              label="Dibayar oleh"
              message-red="true"
            >
              <select
                name="paid_in"
                className="b-form-input"
                onChange={(e) => this.setState({ paid_in: e.target.value })}
              >
                <option>Penerima</option>
                <option>Pengirim</option>
              </select>
            </div>

            <div className="b-form-group b-mt-4" label="Note" message-red="true">
              <textarea
                name="notes"
                className="b-form-input"
                placeholder="Note"
                onChange={(e) => this.setState({ notes: e.target.value })}
              ></textarea>
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
