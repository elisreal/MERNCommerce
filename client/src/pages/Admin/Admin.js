import React, { Component } from "react";
import Product from "../../components/Product";
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

  handleProductDelete = id => {
    API.deleteProduct(id).then(res => this.getProducts());
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
            ? "No New Products Found, Try a Different Query"
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
        <div className="container">
          <div className="row">

            <div className="col s12" id="admin">
              <form onSubmit={ this.handleFormSubmit }>
                <div className="row">
                  <div className="input-field col s6">
                    <label>Product Name
                      <input id="productName" 
                      type="text" 
                      className="form-control"
                      value={ this.state.productName }
                      onchange={this.handleChange} />
                    </label>
                  </div>
                  <div className="input-field col s6">
                    <label>Product Photo URL
                      <input id="photoUrl" 
                      type="text" 
                      className="form-control"
                      value={ this.state.photoUrl } 
                      onChange={ this.handleChange } />
                    </label>
                  </div>
                </div>

                <div className="row">
                  <div className="input-field col s12">
                    <label for="description">Product Description
                      <input id="description" 
                      type="text" 
                      className="form-control"
                      value={ this.state.description }
                      onChange={ this.handleChange } />
                    </label>
                  </div>
                </div>

                <div className="row">
                  <div className="input-field col s4">
                    <label for="price">Product Price
                      <input id="price" 
                      type="text" 
                      className="form-control"
                      value={ this.state.price }
                      onChange={ this.handleChange } />
                    </label>
                  </div>
                  <div className="input-field col s4">
                    <label for="qty">Product Quantity
                      <input id="qty" 
                      type="text" 
                      className="form-control"
                      value={ this.state.totalQty }
                      onChange={ this.handleChange } />
                    </label>
                  </div>
                  <div className="input-field col s4">
                    <label for="size">Product Size
                      <input id="size" 
                      type="text" 
                      className="form-control"
                      value={ this.state.size }
                      onChange={ this.handleChange } />
                    </label>
                  </div>
                </div>

                <div className="row">
                  <div className="col s12">
                    <button id="submitBtn" 
                    className="btn-large" 
                    type="submit" 
                    name="action"
                    handleClick={ this.handleProductSave }>Submit</button>
                  </div>
                </div>

              </form> 

              <div className="row">
                <div className="col s12">
                  <div id="loadProducts">
                  { this.state.products.length ? (
                    <List>
                    { this.state.products.map(product => (
                      <Product
                        productName={product.productName}
                        photoUrl={product.photoUrl}
                        price={product.price}
                        description={product.description}
                        size={product.size}
                        totalQty={product.totalQty}
                        handleProductDelete={this.handleProductDelete}
                      />
                    ))};
                    </List>
                    ) : (
                    <h1 className="text-center">No New Products</h1>
                  )}
                  </div>
                </div>
              </div>


            </div> 
          </div> 
        </div> 
    );
  }
}

export default Admin;


