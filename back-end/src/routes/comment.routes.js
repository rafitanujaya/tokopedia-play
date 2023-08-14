const express = require("express");
const router = express.Router();

const commentController = require("../controllers/comment.controller");

router.get("/:videoID/comments", commentController.getComments);
router.post("/:videoID/addcomment", commentController.addComment);

module.exports = router;
