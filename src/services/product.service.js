const Product = require('../model/Product');

// Typo: getProductByVideoID
const getProductByVideoID = (videoID) => {
    return Product.find({ videoID })
}

const productList = (products) => products.map(({ _id, videoID, linkProduct, title, price }) => ({
    productID: _id,
    videoID,
    linkProduct,
    title,
    price
  }));

module.exports = {
    getProductByVideoID,
    productList
}