import React, { Component } from "react";

class Admin extends Component {

render() {
  return (
    <div class="container">
    <div class="row">
      <div class="col s12" id="admin">
        <div class="row">
              <div class="input-field col s6">
                  <input id="pName" type="text" class="validate"></input>
                  <label for="pName">Product Name</label>
              </div>
              <div class="input-field col s6">
                  <input id="photoUrl" type="text" class="validate"></input>
                  <label for="photoUrl">Product Photo URL</label>
              </div>
            </div>

            <div class="row">
              <div class="input-field col s12">
                <input id="description" type="text" class="validate"></input>
                <label for="description">Product Description
                </label>
              </div>
            </div>

        <div class="row">
              <div class="input-field col s4">
                  <input id="price" type="text" class="validate"></input>
                  <label for="price">Product Price</label>
              </div>
              <div class="input-field col s4">
                  <input id="qty" type="text" class="validate"></input>
                  <label for="qty">Product Quantity</label>
              </div>
              <div class="input-field col s4">
                  <input id="size" type="text" class="validate"></input>
                  <label for="size">Product Size</label>
              </div>
            </div>

            <div class="row">
              <div class="col s12">
                <button id="submitBtn" class="btn-large" type="submit" name="action">Submit</button>
              </div>
            </div>

            <div class="row">
              <div class="col s12">
                <div id="loadProducts"></div>
              </div>
            </div>
      </div>
    </div>
    </div>
    );
  }
}

export default Admin;