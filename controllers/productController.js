const db = require("../models");

// Defining methods for the productController
module.exports = {
  findAll: function(req, res) {
    db.Product
      .find(req.query)
      .sort({ date: -1 })
      .then(dbProduct => res.json(dbProduct))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Product
      .findById(req.params.id)
      .then(dbProduct => res.json(dbProduct))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    const product = {
      productName: req.body.productName,
      photoUrl: req.body.productPhoto,
      description: req.body.description,
      size: req.body.size,
      totalQty: req.body.totalQty,
      price: req.body.price
    };
    if(product._id){
      db.Product
        .update({ _id: product._id }, product)
        .then(dbProduct => res.json(dbProduct))
        .catch(err => res.status(422).json(err));
    }
    else{
      db.Product
      .create(product)
      .then(dbProduct => res.json(dbProduct))
      .catch(err => res.status(422).json(err));
    }
  },
  update: function(req, res) {
    db.Product
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbProduct => res.json(dbProduct))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Product
      .findById({ _id: req.params.id })
      .then(dbProduct => dbProduct.remove())
      .then(dbProduct => res.json(dbProduct))
      .catch(err => res.status(422).json(err));
  }
};
