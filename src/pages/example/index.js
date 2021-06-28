import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../parts/navbar.js";

export default class Home extends Component {
  render() {
    return (
      <div class="b-body b-body-with-navbar">
        <div class="b-container">
          <Navbar />
          <h1>BUTTON</h1>
          <div>
            <h2>Example Button</h2>
            <div class="b-mb-2">
              <button type="button" class="b-btn b-btn-red-1">
                RED BUTTON
              </button>
            </div>
            <div class="b-mb-2">
              <button type="button" class="b-btn b-btn-yellow-1">
                YELLOW BUTTON
              </button>
            </div>
            <div class="b-mb-2">
              <button type="button" class="b-btn b-btn-green-1">
                GREEN BUTTON
              </button>
            </div>
            <div class="b-mb-2">
              <button type="button" class="b-btn b-btn-blue-1">
                BLUE BUTTON
              </button>
            </div>
            <div class="b-mb-2">
              <button type="button" class="b-btn b-btn-default">
                GRAY BUTTON
              </button>
            </div>
          </div>
          <div>
            <h2>Example Button Shadow</h2>
            <div class="b-mb-2">
              <button type="button" class="b-btn b-btn-red-1">
                RED BUTTON
              </button>
            </div>
            <div class="b-mb-2">
              <button type="button" class="b-btn b-btn-yellow-1">
                YELLOW BUTTON
              </button>
            </div>
            <div class="b-mb-2">
              <button type="button" class="b-btn b-btn-green-1">
                GREEN BUTTON
              </button>
            </div>
            <div class="b-mb-2">
              <button type="button" class="b-btn b-btn-blue-1">
                BLUE BUTTON
              </button>
            </div>
            <div class="b-mb-2">
              <button type="button" class="b-btn b-btn-default">
                GRAY BUTTON
              </button>
            </div>
          </div>
          <div>
            <h2>Example Button Block</h2>
            <div class="b-mb-2">
              <button type="button" class="b-btn b-btn-red-1 b-btn-block">
                RED BUTTON
              </button>
            </div>
            <div class="b-mb-2">
              <button type="button" class="b-btn b-btn-yellow-1 b-btn-block">
                YELLOW BUTTON
              </button>
            </div>
            <div class="b-mb-2">
              <button type="button" class="b-btn b-btn-green-1 b-btn-block">
                GREEN BUTTON
              </button>
            </div>
            <div class="b-mb-2">
              <button type="button" class="b-btn b-btn-blue-1 b-btn-block">
                BLUE BUTTON
              </button>
            </div>
            <div class="b-mb-2">
              <button type="button" class="b-btn b-btn-default b-btn-block">
                GRAY BUTTON
              </button>
            </div>
          </div>
          <div>
            <h2>Example Button Rounded</h2>
            <div class="b-mb-2">
              <button type="button" class="b-btn b-btn-red-1 b-btn-rounded">
                RED BUTTON
              </button>
            </div>
            <div class="b-mb-2">
              <button type="button" class="b-btn b-btn-yellow-1 b-btn-rounded">
                YELLOW BUTTON
              </button>
            </div>
            <div class="b-mb-2">
              <button type="button" class="b-btn b-btn-green-1 b-btn-rounded">
                GREEN BUTTON
              </button>
            </div>
            <div class="b-mb-2">
              <button type="button" class="b-btn b-btn-blue-1 b-btn-rounded">
                BLUE BUTTON
              </button>
            </div>
            <div class="b-mb-2">
              <button type="button" class="b-btn b-btn-default b-btn-rounded">
                GRAY BUTTON
              </button>
            </div>
          </div>
          <h1>INPUT</h1>
          <div>
            <h2>Example Button</h2>
            <div class="b-mb-2">
              <button type="button" class="b-btn b-btn-red-1">
                RED BUTTON
              </button>
            </div>
            <div class="b-mb-2">
              <button type="button" class="b-btn b-btn-yellow-1">
                YELLOW BUTTON
              </button>
            </div>
            <div class="b-mb-2">
              <button type="button" class="b-btn b-btn-green-1">
                GREEN BUTTON
              </button>
            </div>
            <div class="b-mb-2">
              <button type="button" class="b-btn b-btn-blue-1">
                BLUE BUTTON
              </button>
            </div>
            <div class="b-mb-2">
              <button type="button" class="b-btn b-btn-default">
                GRAY BUTTON
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
