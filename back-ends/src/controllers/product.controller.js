const {
  getProductByVideoID,
  productList,
} = require("../services/product.service");

async function getProduct(req, res) {
  const { videoID } = req.params;

  if (!videoID) {
    return res.status(400).json({
      status: 400,
      message: "videoID tidak boleh kosong",
    });
  }

  try {
    const products = await getProductByVideoID(videoID);
    const productLists = productList(products);
    if (productLists.length === 0) {
      return res.json({
        productLists: [],
      });
    }
    res.send(productLists);
  } catch (error) {
    if (error.name === "ValidationError") {
      res.status(400).json({
        status: 400,
        message: "Data produk tidak valid",
        error: error.message,
      });
    } else if (error.name === "CastError") {
      res.status(400).json({
        status: 400,
        message: "ID produk tidak valid",
        error: error.message,
      });
    } else {
      res.status(500).json({
        status: 500,
        message: "Terjadi kesalahan di sisi server",
        error: error.message,
      });
    }
  }
}

module.exports = {
  getProduct,
};
