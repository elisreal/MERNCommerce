const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true },
  title: { type: String, required: true },
  url: { type: String, required: true },
  date: { type: Date, default: Date.now }
}, { _id: false });

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
