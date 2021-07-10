import axios from "axios";
import React, { Component } from "react";
import iconPixbox from "../../assets/images/logo/logo-white-3.png";
import Navbar from "../../parts/navbar.js";

export default class StatusPage extends Component {
  constructor() {
    super();

    this.state = {
      datas: {},
    };
  }

  componentDidMount() {
    let searchValue = this.props.location.state.search;
    let url = `https://admin.pixbox.id/api/orders/${searchValue}`;

    axios.get(url).then((response) => {
      this.setState({
        datas: response.data.data,
      });
    });
  }
  render() {
    const data = this.state.datas;
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
                      <div className="b-status-circle"></div>
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
                      <div className="b-status-circle"></div>
                    </div>
                    <div className="b-status-info">
                      <div className="b-status-title">Pickup</div>
                      <div className="b-status-description">
                        Menunggu paket dipickup oleh kurir kami
                      </div>
                      <div className="b-status-courier-name">
                        <span>Kurir: </span>
                        <span>{data.pickup_name}</span>
                        <div>({data.pickup_phone})</div>
                      </div>
                    </div>
                  </div>
                  <div className="b-status">
                    <div className="b-status-path">
                      <div className="b-status-active"></div>
                    </div>
                    <div className="b-status-info">
                      <div className="b-status-title">Deliver</div>
                      <div className="b-status-description">
                        Paket sedang dalam perjalanan menuju tujuan
                      </div>
                      <div className="b-status-courier-name">
                        <span>Kurir: </span>
                        <span>{data.deliver_name}</span>
                        <div>({data.deliver_phone})</div>
                      </div>
                    </div>
                  </div>
                  <div className="b-status">
                    <div className="b-status-path">
                      <div className="b-status-circle"></div>
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
