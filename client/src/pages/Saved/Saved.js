import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Panel from "../../components/Panel";
import Article from "../../components/Product";
import Footer from "../../components/Footer";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List } from "../../components/List";

class Saved extends Component {
  state = {
    products: []
  };

  componentDidMount() {
    this.getSavedArticles();
  }

  getSavedProducts = () => {
    API.getSavedProducts()
      .then(res =>
        this.setState({
          articles: res.data
        })
      )
      .catch(err => console.log(err));
  };

  handleProductsDelete = id => {
    API.deleteProduct(id).then(res => this.getSavedProducts());
  };

  render() {
    return (
      <div class='container'>
        <div class='row'>
          <div class='col-12'>
            <Jumbotron>
              <h1 className="text-center">
                <strong>MERNCommerce</strong>
              </h1>
              <h2 className="text-center">
                Whatever Dude
              </h2>
            </Jumbotron>
          </div>
        </div>
        <div class='row'>
          <div class='col-12'>
            <Panel title="Saved Products" icon="download">
              {this.state.products.length ? (
                <List>
                  {this.state.products.map(product => (
                    <Product
                      key={prodcut._id}
                      _id={product._id}
                      title={product.title}
                      url={product.url}
                      date={product.date}
                      handleClick={this.handleProductDelete}
                      buttonText="Delete Product"
                      saved
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">No Saved Products</h2>
              )}
            </Panel>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Saved;



//

// handleFormSubmit = event => {
//     event.preventDefault();
//     this.getProducts();
//   };

//   handleProductsSave = id => {
//     const product = this.state.products.find(product => product._id === id);
//     API.saveProduct(product).then(res => this.getProducts());
//   };
