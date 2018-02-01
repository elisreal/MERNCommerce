import axios from "axios";
import filterParams from "./filterParams";

export default {
  
  // Gets all saved products
  getSavedProducts: function() {
    return axios.get("/api/products");
  },
  // Deletes the saved product with the given id
  deleteProduct: function(id) {
    return axios.delete("/api/products/" + id);
  },
  // Saves an product to the database
  saveProduct: function(productData) {
    return axios.post("/api/products", productData);
  }
};
