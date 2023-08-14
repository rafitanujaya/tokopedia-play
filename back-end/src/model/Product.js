const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  videoID: {
    required: true,
    type: String,
  },
  linkProduct: {
    required: true,
    type: String,
  },
  title: {
    required: true,
    type: String,
  },
  price: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
