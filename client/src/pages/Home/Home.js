import React, { Component } from "react";
import Footer from "../../components/Footer";
import PCard from "../../components/PCard";
import API from "../../utils/API";

class Home extends Component {
  // state = {
  //   products: [],
  //   q: "",
  //   start_year: "",
  //   end_year: "",
  //   message: "Search For Products"
  // };

  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  getProducts = () => {
    API.getProducts({
      q: this.state.q,
      start_year: this.state.start_year,
      end_year: this.state.end_year
    })
      .then(res =>
        this.setState({
          products: res.data,
        })
      )
      .catch(err => console.log(err));
  };

  

  render() {
    return (
        <div class='row'>
        <div class='col-6'>
            <PCard>
            </PCard>
          </div>
        </div>
    );
  }
}

export default Home;
