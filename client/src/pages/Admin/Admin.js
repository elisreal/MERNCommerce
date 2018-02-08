import React, { Component } from "react";
import Product from "../../components/Product";
import API from "../../utils/API";
import styles from "../../components/Css";
import { List } from "../../components/List";



class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      productName: "",
      photoUrl: "",
      description: "",
      size: "",
      totalQty: "",
      price: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.getProducts = this.getProducts.bind(this);
    this.handleProductDelete = this.handleProductDelete.bind(this);
  }

  componentWillMount() {
    this.getProducts()
  }

  handleInputChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleProductDelete = id => {
    API.deleteProduct(id).then(res => this.getProducts());
  };

  getProducts = () => {
    API.getProducts({})
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

  handleProductSave = () => {
    const {productName,photoUrl,description,size,totalQty,price} = this.state;
    const product = {
      productName: productName,
      photoUrl: photoUrl,
      description: description,
      size: size,
      totalQty: totalQty,
      price: price
    }
    // const product = this.state.products.find(product => product._id === id);
    API.saveProduct(product).then(res => this.getProducts());
  };

  render() {
    const {productName,photoUrl,description,size,totalQty,price} = this.state;
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
                      name='productName'
                      value={productName}
                      onChange={ this.handleInputChange } />
                    </label>
                  </div>
                  <div className="input-field col s6">
                    <label>Product Photo URL
                      <input id="photoUrl"
                      type="text"
                      className="form-control"
                      name='photoUrl'
                      value={photoUrl}
                      onChange={ this.handleInputChange } />
                    </label>
                  </div>
                </div>

                <div className="row">
                  <div className="input-field col s12">
                    <label>Product Description
                      <input id="description"
                      type="text"
                      className="form-control"
                      name='description'
                      value={ description }
                      onChange={ this.handleInputChange } />
                    </label>
                  </div>
                </div>

                <div className="row">
                  <div className="input-field col s4">
                    <label>Product Price
                      <input id="price"
                      type="text"
                      className="form-control"
                      name='price'
                      value={ price }
                      onChange={ this.handleInputChange } />
                    </label>
                  </div>
                  <div className="input-field col s4">
                    <label>Product Quantity
                      <input id="qty"
                      type="text"
                      className="form-control"
                      name='totalQty'
                      value={ totalQty }
                      onChange={ this.handleInputChange } />
                    </label>
                  </div>
                  <div className="input-field col s4">
                    <label>Product Size
                      <input id="size"
                      type="text"
                      className="form-control"
                      name='size'
                      value={ size }
                      onChange={ this.handleInputChange } />
                    </label>
                  </div>
                </div>

                <div className="row">
                  <div className="col s12">
                    <button id="submitBtn"
                    className="btn-large"
                    type="submit"
                    name="action"
                    onClick={ this.handleProductSave }>Save Product</button>
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
                        key={product._id}
                        id={product._id}
                        productName={product.productName}
                        photoUrl={product.photoUrl}
                        price={product.price}
                        description={product.description}
                        size={product.size}
                        totalQty={product.totalQty}
                        handleProductDelete={this.handleProductDelete}
                      />
                    ))}
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


