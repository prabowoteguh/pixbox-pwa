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
                <div className="b-status-list">
                  <div className="b-status">
                    <div className="b-status-path">
                      <div className="b-status-circle"></div>
                    </div>
                    <div className="b-status-info">
                      <div className="b-status-title">Process</div>
                      <div className="b-status-description">Menunggu paket diprosess</div>
                    </div>
                  </div>      
                  <div className="b-status">
                    <div className="b-status-path">
                      <div className="b-status-circle"></div>
                    </div>
                    <div className="b-status-info">
                      <div className="b-status-title">Pickup</div>
                      <div className="b-status-description">Menunggu paket dipickup oleh kurir kami</div>
                      <div className="b-status-courier-name">
                        <span>Kurir: </span>
                        <span>Joko Arianto </span>
                        <span>(081321400123)</span>
                      </div>
                    </div>
                  </div>      
                  <div className="b-status">
                    <div className="b-status-path">
                      <div className="b-status-circle"></div>
                    </div>
                    <div className="b-status-info">
                      <div className="b-status-title">Deliver</div>
                      <div className="b-status-description">Paket sedang dalam perjalanan menuju tujuan</div>
                      <div className="b-status-courier-name">
                        <span>Kurir: </span>
                        <span>Muhammad Zidane </span>
                        <span>(081321400123)</span>
                      </div>
                    </div>
                  </div>      
                  <div className="b-status">
                    <div className="b-status-path">
                      <div className="b-status-circle"></div>
                    </div>
                    <div className="b-status-info">
                      <div className="b-status-title">Complete</div>
                      <div className="b-status-description">Paket telah sampai di tujuan dengan selamat</div>
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
