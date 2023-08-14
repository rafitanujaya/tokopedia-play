// Model
const Comment = require("../model/Comment");

const getcommentByVideoID = (videoID) => {
  return Comment.find({ videoID });
};

const addCommentByVideoID = (videoID, commentData) => {
  return new Comment({
    videoID,
    ...commentData,
  });
};

const saveComment = (comment) => {
  return comment.save();
};

module.exports = {
  getcommentByVideoID,
  addCommentByVideoID,
  saveComment,
};
