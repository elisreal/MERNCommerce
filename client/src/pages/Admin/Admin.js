import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Panel from "../../components/Panel";
import Article from "../../components/Product";
import Footer from "../../components/Footer";
import API from "../../utils/API";
import { List } from "../../components/List";

class Admin extends Component {
  state = {
    products: [],
    productName: "",
    photoUrl: "",
    description: "",
    size: "",
    totalQty: "",
    price: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  getPoducts = () => {
    API.getProducts({
      productName: this.state.productName,
      photoUrl: this.state.photoUrl,
      description: this.state.description,
      size: this.state.size,
      totalQty: this.state.totalQty,
      price: this.state.price
    })
      .then(res =>
        this.setState({
          products: res.data,
          message: !res.data.length
            ? "No New Productss Found, Try a Different Query"
            : ""
        })
      )
      .catch(err => console.log(err));
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.getProducts();
  };

  handleProductSave = id => {
    const product = this.state.products.find(product => product._id === id);
    API.saveProduct(product).then(res => this.getProducts());
  };

  render() {
    return (
        <div class="container">
          <div class="row">

            <div class="col s12" id="admin">
              <form handleInputChange={this.handleInputChange} 
                onSubmit={ this.handleFormSubmit }>
                <div class="row">
                  <div class="input-field col s6">
                    <input id="productName" 
                    type="text" 
                    class="form-control"
                    style={ this.state.productName } />
                    <label for="productName">Product Name</label>
                  </div>
                  <div class="input-field col s6">
                    <input id="photoUrl" 
                    type="text" 
                    class="form-control"
                    style={ this.state.photoUrl } />
                    <label for="photoUrl">Product Photo URL</label>
                  </div>
                </div>

                <div class="row">
                  <div class="input-field col s12">
                    <input id="description" 
                    type="text" 
                    class="form-control"
                    style={ this.state.description } />
                    <label for="description">Product Description</label>
                  </div>
                </div>

                <div class="row">
                  <div class="input-field col s4">
                    <input id="price" 
                    type="text" 
                    class="form-control"
                    style={ this.state.price } />
                    <label for="price">Product Price</label>
                  </div>
                  <div class="input-field col s4">
                    <input id="qty" 
                    type="text" 
                    class="form-control"
                    style={ this.state.totalQty } />
                    <label for="qty">Product Quantity</label>
                  </div>
                  <div class="input-field col s4">
                    <input id="size" 
                    type="text" 
                    class="form-control"
                    style={ this.state.size } />
                    <label for="size">Product Size</label>
                  </div>
                </div>

                <div class="row">
                  <div class="col s12">
                    <button id="submitBtn" 
                    class="btn-large" 
                    type="submit" 
                    name="action"
                    handleClick={this.handleProductSave}>Submit</button>
                  </div>
                </div>

              </form> //end of the form

            // This is where products will load 

              <div class="row">
                <div class="col s12">
                  <div id="loadProducts"></div>
                </div>
              </div>


            </div> //this one is for the id=admin
          </div> // first row
          <Footer />
        </div> // main container
    );
  }
}

export default Admin;



//

// handleFormSubmit = event => {
//     event.preventDefault();
//     this.getProducts();
//   };

//   handleProductsSave = id => {
//     const product = this.state.products.find(product => product._id === id);
//     API.saveProduct(product).then(res => this.getProducts());
//   };
