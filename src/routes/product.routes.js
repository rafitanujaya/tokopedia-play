const express = require('express');
const router = express.Router();

const productController = require('../controllers/product.controller')

// Karena kita mau akses domain product, kita gak perlu include /videos
// Bisa jadi /products/:videoID
// Jadi implikasinya kayak akses products dari sebuah video ID
router.get('/videos/:videoID/products', productController.getProduct)


module.exports = router;