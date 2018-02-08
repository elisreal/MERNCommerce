import React, { Component } from "react";
import Footer from "../../components/Footer";
import PCard from "../../components/PCard";
import API from "../../utils/API";
import styles from "../../components/Css";
import { List } from "../../components/List";

class Home extends Component {

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
    this.getProducts = this.getProducts.bind(this);
  }

  getProducts = () => {
    API.getProducts({})
      .then(res =>
        this.setState({
          products: res.data,
        })
      )
      .catch(err => console.log(err));
  }

  componentWillMount() {
    this.getProducts()
  }


  render() {
    const{productName, photoUrl, description, size, totalQty, price} = this.state;
    return (
        <div className='row'>
          { this.state.products.length ? (
            <List>
              { this.state.products.map(product => (
                <PCard
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
    );
  }
}

export default Home;
