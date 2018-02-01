const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true },
  productName: { type: String, required: true },
  photoUrl: { type: String, required: true },
  description: { type: String, required: true },
  size: { type: String, required: true },
  totalQty: { type: Number, required: true },
  price: { type: Number, required: true },
  date: { type: Date, default: Date.now }
}, { _id: false });

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
