const express = require('express');
const router = express.Router();

const commentController = require('../controllers/comment.controller');

// Karena kita mau akses domain product, kita gak perlu include /videos
// Bisa jadi /comments/:videoID
// Jadi implikasinya kayak akses comments dari sebuah video ID
router.get('/videos/:videoID/comments', commentController.getComments)
router.post('/videos/:videoID/addcomment', commentController.addComment)

module.exports = router;