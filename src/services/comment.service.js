// Model
const Comment = require('../model/Comment');


const getCommentByIdVideo = (videoID) => {
    return Comment.find({ videoID });
}

// addCommentByVideoID
const addCommentByIdVideo = (videoID, commentData) => {
    return new Comment({
        videoID,
        ...commentData
    })
}

// Karena ini function, pakai verb yaa
// saveComment
const savedComment = (comment) => {
    return comment.save()
}

module.exports = {
    getCommentByIdVideo,
    addCommentByIdVideo,
    savedComment
}