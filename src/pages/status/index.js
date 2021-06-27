import React, { Component } from 'react'
import iconPixbox from "../../assets/images/logo/logo-white-3.png";

export default class StatusPage extends Component {
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
              <div className='b-status-content'>
                <div>
                  <div>02 Januari 2021</div>
                  <div className="b-tbold-2 b-f-16">
                    <div className="b-mt-4">BRL2021062562317</div>
                    <div>Boltz Regular</div>  
                  </div>
                  <div className="b-mt-6">
                    <div>
                      <div>
                        <div className="b-d-flex b-bg-black-2">
                          <div className="b-status-payment"></div>
                          <div className="b-ml-7">
                            <h3 className="b-m-0">Process</h3>
                            <div>Menunggu paket diproses</div>
                          </div>
                        </div>
                        <div className="b-d-flex b-pt-10 b-bg-black-2">
                          <div className="b-status-payment"></div>
                          <div className="b-ml-7">
                            <h3 className="b-m-0">Pickup</h3>
                            <div>Menunggu paket dipickup oleh kurir kami</div>
                            <div>
                              <span>Kurir: </span>
                              <span>Muhammad Zidane </span>
                              <span>(081321XXXXX)</span>
                            </div>
                          </div>
                        </div>
                        <div className="b-d-flex b-pt-10 b-bg-black-2">
                          <div className="b-status-payment"></div>
                          <div className="b-ml-7">
                            <h3 className="b-m-0">Deliver</h3>
                            <div>Paket sedang dalam perjalanan menuju tujuan</div>
                            <div>
                              <span>Kurir: </span>
                              <span>Lukma </span>
                              <span>(081321XXXXX)</span>
                            </div>
                          </div>
                        </div>
                        <div className="b-d-flex b-pt-10 b-bg-black-2">
                          <div className="b-status-payment"></div>
                          <div className="b-ml-7">
                            <h3 className="b-m-0">Complete</h3>
                            <div>Paket telah sampai di tujuan</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          </div>
        )
    }
}
