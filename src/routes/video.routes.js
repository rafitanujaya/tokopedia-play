const express = require('express');
const router = express.Router();

// Controller
const videoController = require('../controllers/video.controller');

router.get('/videos', videoController.getVideos);
router.get('/video/:videoID', videoController.getVideoByID)

module.exports = router;
