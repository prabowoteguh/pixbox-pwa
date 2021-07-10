import axios from "axios";
import React, { Component } from "react";
import iconPixbox from "../../assets/images/logo/logo-white-3.png";
import Navbar from "../../parts/navbar.js";

export default class StatusPage extends Component {
  constructor() {
    super();

    this.state = {
      datas: {},
      orderStatus: "",
    };
  }

  componentDidMount() {
    let searchValue = this.props.location.state.search.toUpperCase();
    let url = `/api/orders/${searchValue}`;

    axios.get(url).then((response) => {
      this.setState({
        datas: response.data.data,
        orderStatus: response.data.data.orderStatus.length,
      });
    });
  }
  render() {
    const data = this.state.datas;
    const orderStatus = this.state.orderStatus;
    const mount = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];

    let dateOrderDate = new Date(data.order_date);
    let orderDate = `${dateOrderDate.getDate()} ${mount[dateOrderDate.getMonth()]} `;
    orderDate += dateOrderDate.getFullYear();

    let process, pickup, deliver, complete, pickupCourier, deliverCourier;

    if (orderStatus == 1) {
      process = "b-status-circle";
      pickup = "b-status-circle b-status-none";
      deliver = "b-status-circle b-status-none";
      complete = "b-status-circle b-status-none";
      pickupCourier = "b-status-courier-name b-status-courier-none";
      deliverCourier = "b-status-courier-name b-status-courier-none";
    } else if (orderStatus == 2) {
      process = "b-status-circle b-status-none";
      pickup = "b-status-circle";
      deliver = "b-status-circle b-status-none";
      complete = "b-status-circle b-status-none";
      pickupCourier = "b-status-courier-name";
      deliverCourier = "b-status-courier-name b-status-courier-none";
    } else if (orderStatus == 3) {
      process = "b-status-circle b-status-none";
      pickup = "b-status-circle b-status-none";
      deliver = "b-status-circle";
      complete = "b-status-circle b-status-none";
      pickupCourier = "b-status-courier-name";
      deliverCourier = "b-status-courier-name";
    } else if (orderStatus == 4) {
      process = "b-status-circle b-status-none";
      pickup = "b-status-circle b-status-none";
      deliver = "b-status-circle b-status-none";
      complete = "b-status-circle";
      pickupCourier = "b-status-courier-name";
      deliverCourier = "b-status-courier-name";
    }

    console.log(orderStatus);

    return (
      <div className="b-body b-body-with-navbar">
        <div className="b-container">
          <Navbar />
          <div className="b-status-content">
            <div>
              <div>{orderDate}</div>
              <div className="b-tbold-2 b-f-16">
                <div className="b-mt-4">{data.order_code}</div>
                <div>Boltz Regular</div>
              </div>
              <div className="b-mt-6">
                <div className="b-status-list">
                  <div className="b-status">
                    <div className="b-status-path">
                      <div className={process}></div>
                    </div>
                    <div className="b-status-info">
                      <div className="b-status-title">Process</div>
                      <div className="b-status-description">
                        Menunggu paket diproses
                      </div>
                    </div>
                  </div>
                  <div className="b-status">
                    <div className="b-status-path">
                      <div className={pickup}></div>
                    </div>
                    <div className="b-status-info">
                      <div className="b-status-title">Pickup</div>
                      <div className="b-status-description">
                        Menunggu paket dipickup oleh kurir kami
                      </div>
                      <div className={pickupCourier}>
                        <span>Kurir: </span>
                        <span>{data.pickup_name}</span>
                        <div>({data.pickup_phone})</div>
                      </div>
                    </div>
                  </div>
                  <div className="b-status">
                    <div className="b-status-path">
                      <div className={deliver}></div>
                    </div>
                    <div className="b-status-info">
                      <div className="b-status-title">Deliver</div>
                      <div className="b-status-description">
                        Paket sedang dalam perjalanan menuju tujuan
                      </div>
                      <div className={deliverCourier}>
                        <span>Kurir: </span>
                        <span>{data.deliver_name}</span>
                        <div>({data.deliver_phone})</div>
                      </div>
                    </div>
                  </div>
                  <div className="b-status">
                    <div className="b-status-path">
                      <div className={complete}></div>
                    </div>
                    <div className="b-status-info">
                      <div className="b-status-title">Complete</div>
                      <div className="b-status-description">
                        Paket telah sampai di tujuan dengan selamat
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
