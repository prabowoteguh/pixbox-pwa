import axios from "axios";
import React, { Component } from "react";
import iconPixbox from "../../assets/images/logo/logo-white-3.png";
import { useLocation, Link, useParams } from "react-router-dom";
import Navbar from "../../parts/navbar.js";

export default class StatusPage extends Component {
  constructor() {
    super();

    this.state = {
      months: [
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
      ],
      detailOrder: {},
    };
  }

  componentDidMount() {
    const resiCode = this.props.match.params.id;
    let url = "api/orders/" + resiCode;
    axios.get(url).then((response) => {
      this.setState({
        detailOrder: response.data.data,
      });
    });
  }

  render() {
    const detailOrder = this.state.detailOrder;
    let orderList = [];
    if (typeof detailOrder.orderStatus != "undefined") {
      orderList = detailOrder.orderStatus;
    }

    const { months } = this.state;

    let dateOrderDate = new Date(detailOrder.order_date);
    let orderDate = `${dateOrderDate.getDate()} ${
      months[dateOrderDate.getMonth()]
    } `;
    orderDate += dateOrderDate.getFullYear();

    return (
      <div className="b-body b-body-with-navbar">
        <div className="b-container">
          <Navbar />
          <div className="b-status-content">
            <div>
              <div>{orderDate}</div>
              <div className="b-tbold-2 b-f-16">
                <div className="b-mt-4">{detailOrder.order_code}</div>
                <div>Boltz Regular</div>
              </div>
              <div className="b-mt-6">
                <div className="b-status-list">
                  {/* {orderList.map((item, index) => (
                    <div className="b-status">
                      <div className="b-status-path">
                        <div className="b-status-circle"></div>
                      </div>
                      <div className="b-status-info">
                        <div className="b-status-title">{item.status}</div>
                        <div className="b-status-description">
                          Menunggu paket diproses oleh {item.users.fullname}
                        </div>
                      </div>
                    </div>
                  ))} */}
                  <div className="b-status">
                    <div className="b-status-path">
                      <div className="b-status-circle b-status-none"></div>
                    </div>
                    <div className="b-status-info">
                      <div className="b-status-title">Process</div>
                      <div className="b-status-description">
                        Menunggu paket diprosess
                      </div>
                    </div>
                  </div>
                  <div className="b-status">
                    <div className="b-status-path">
                      <div className="b-status-circle b-status-none"></div>
                    </div>
                    <div className="b-status-info">
                      <div className="b-status-title">Pickup</div>
                      <div className="b-status-description">
                        Menunggu paket dipickup oleh kurir kami
                      </div>
                      <div className="b-status-courier-name">
                        <span>Kurir: </span>
                        <span>{detailOrder.pickup_name}</span>
                        <span>({detailOrder.pickup_phone})</span>
                      </div>
                    </div>
                  </div>
                  <div className="b-status">
                    <div className="b-status-path">
                      <div className="b-status-circle"></div>
                    </div>
                    <div className="b-status-info">
                      <div className="b-status-title">Deliver</div>
                      <div className="b-status-description">
                        Paket sedang dalam perjalanan menuju tujuan
                      </div>
                      <div className="b-status-courier-name">
                        <span>Kurir: </span>
                        <span>{detailOrder.deliver_name}</span>
                        <span>({detailOrder.deliver_phone})</span>
                      </div>
                    </div>
                  </div>
                  <div className="b-status">
                    <div className="b-status-path">
                      <div className="b-status-circle b-status-none"></div>
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
