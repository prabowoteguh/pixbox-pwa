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
    let url = "https://admin.pixbox.id/api/orders/" + resiCode;
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
                  {orderList.map((item, index) => (
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
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
