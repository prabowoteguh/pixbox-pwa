import React, { Component } from "react";
import iconPixbox from "../../assets/images/logo/logo-white-3.png";
import Navbar from "../../parts/navbar.js";

export default class StatusPage extends Component {
  render() {
    return (
      <div class="b-body b-body-with-navbar">
        <div class="b-container">
          <Navbar />
          <div className="b-status-content">
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
                      <div className="b-status-description">
                        Menunggu paket diproses kampret kampret kampret kampret
                        kampret kampret kampret kampret kampret kampret kampret
                        kampret kampret
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
