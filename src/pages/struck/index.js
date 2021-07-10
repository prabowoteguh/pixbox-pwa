import React, { Component } from "react";
import { Link } from "react-router-dom";
import iconPixbox from "../../assets/images/logo/logo-white-3.png";
import barcode from "../../assets/images/barcode.jpg";
import Navbar from "../../parts/navbar.js";
import axios from "axios";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      datas: [],
      product_id: null,
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

  componentDidMount() {
    axios.get("https://admin.pixbox.id/api/orders/BSD2021070972995").then((res) => {
      this.setState({ datas: res.data.data });
    });
  }

  render() {
    // TEST
    const data = this.state.datas;
    console.log(data);
    let orderDate = new Date(data.order_date);
    orderDate = `${orderDate.getDay()} - ${orderDate.getMonth()} - ${orderDate.getFullYear()}`;

    return (
      <div className="b-body b-body-with-navbar">
        <div className="b-container">
          <Navbar />
          <h1 className="b-text-center">BSD2021062536799</h1>
          <div className="b-struck">
            <div className="b-span">
              <span>Tanggal : </span>
              <span>31-06-2021</span>
            </div>
            <div className="b-span">
              <span>Service : </span>
              <span>Boltz SameDay</span>
            </div>
            <div className="b-span">
              <span>Biaya : </span>
              <span>Rp. 7,500</span>
            </div>
            <div className="b-span">
              <span>Bayar : </span>
              <span>Boltz SameDay</span>
            </div>
            <div className="b-span">
              <span>Pick Up : </span>
              <span className="">Boltz SameDay</span>
              <div className="b-pick b-span">087829976236</div>
              <div className="b-pick b-span">Jl. Sukaluyu RT.02/12 Kel.</div>
              <div className="b-pick b-span">Pasirbiru Kec. Cibiru Bandung</div>
              <div className="b-pick b-span">40615</div>
            </div>
            <div className="b-span">
              <span>Deliver : </span>
              <span>Boltz SameDay</span>
              <div className="b-pick b-span">087829976236</div>
              <div className="b-pick b-span">Jln Karang Arum No.26 RT.01 RW.02</div>
              <div className="b-pick b-span">Kec. Sukajadi Bandung 40195</div>
            </div>
            <div>
              <span>Diantar Maksimal : </span> <span>30-01-2021</span>
            </div>

            <div className="b-row b-mt-8">
              <div className="b-col-7">
                <img src={barcode} className="b-full-width" />
              </div>
              <div className="b-col-5 b-flex b-col-x-center b-col-y-center">
                <button type="button" className="b-btn b-btn-default b-download">
                  DOWNLOAD
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
