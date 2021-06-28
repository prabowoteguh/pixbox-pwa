import React, { Component } from "react";
import { Link } from "react-router-dom";
import iconPixbox from "../../assets/images/logo/logo-white-3.png";

export default class Home extends Component {
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
          
          <form class="b-form">
          <h1>FORM ORDER</h1>
              <div class="b-in">
                  <input class="b-input" type="text" placeholder="Tanggal" id="b-tanggal"></input>
                  <label for="tanggal">Masukan tanggal order</label>
              </div>
              <div class="b-in">
                  <select  id="" class="b-input">
                    <option value="">Service</option>
                    <option value="">Order 1</option>
                    <option value="">Order 3</option>
                    <option value="">Order 2</option>
                  </select>
                  <label for="tanggal">Pilih produk yang ingin anda gunakan</label>
              </div>
              <div class=""> 
                    <h2>Data Pickup</h2>
                    <div class="b-in">
                        <input class="b-input" type="text" placeholder="Nama Pickup" id=""></input>
                        <label for="tanggal">Masukan Nama Pickup dengan jelas</label>
                    </div>
                    <div class="b-in">
                        <input class="b-input" type="text" placeholder="Hp Pickup" id=""></input>
                        <label for="tanggal">Masukan No Hp Pickup dengan jelas</label>
                    </div>
                    <div class="b-in">
                        <textarea cols="40" class="b-input" placeholder="Alamat Pickup" rows="6" id=""></textarea>
                        <label for="tanggal">Masukan Alamat Pickup dengan jelas</label>
                    </div>
              </div>
              <div class=""> 
                    <h2>Data Delivery</h2>
                    <div class="b-in">
                        <input class="b-input" type="text" placeholder="Nama Deliver" id=""></input>
                        <label for="tanggal">Masukan Nama deliver dengan jelas</label>
                        </div>
                    <div class="b-in">
                        <input class="b-input" type="text" placeholder="Hp Deliver" id=""></input>
                        <label for="tanggal">Masukan No Hp Deliver dengan jelas</label>
                    </div>
                    <div class="b-in">
                        <textarea cols="40" class="b-input" placeholder="Alamat Deliver" rows="6" id=""></textarea>
                        <label for="tanggal">Masukan alamat deliver dengan jelas</label>
                    </div>
                    <div>
                      <input type="checkbox" class="b-in b-cod"></input>
                      <label for="COD" class="b-l-cod">COD</label>
                    </div>
                    <div class="b-in">
                        <input class="b-input" type="text" placeholder="Jumlah Uang COD" id=""></input>
                        <label for="tanggal">Isikan jumlah uang COD Anda</label>
                    </div>
                    <div class="b-in">
                    <select  id="" class="b-input">
                        <option value="">Dibayarkan DI</option>
                        <option value="">Order 1</option>
                        <option value="">Order 3</option>
                        <option value="">Order 2</option>
                    </select>
                    {/* <label for="tanggal">Pilih produk yang ingin anda gunakan</label> */}
                    </div>
                    <div class="b-in">
                        <textarea cols="40" class="b-input" placeholder="Note" rows="4" id=""></textarea>
                        <label for="tanggal">Tuliskan Note jika ada hal yang ingin di tambahkan</label>
                    </div>
              </div>
          </form>
          <Link to="example">order</Link>
        </div>
      </div>
    );
  }
}