const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  // _id: { type: Schema.Types.ObjectId, required: true },
  productName: { type: String, required: false },
  photoUrl: { type: String, required: false },
  description: { type: String, required: false },
  size: { type: String, required: false },
  totalQty: { type: Number, required: false },
  price: { type: Number, required: false },
  date: { type: Date, default: Date.now }
});
// }, { _id: false });

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
