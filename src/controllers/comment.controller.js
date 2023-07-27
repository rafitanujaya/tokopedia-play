const { getCommentByIdVideo, addCommentByIdVideo, savedComment } = require('../services/comment.service')

async function getComments(req, res) {
    const { videoID } = req.params;

    if (!videoID) {
        return res.status(400).json({
            status: 400,
            message: "videoID tidak boleh kosong",
        });
    }
    try {
        const comments = await getCommentByIdVideo(videoID);
        if (comments.length === 0) {
            return res.json({
                comments: [],
            });
        }
        res.send(comments);

    } catch (error) {
        res.sendStatus(404).json({
            status: 404,
            message: "video tidak dapat ditemukan"
        })
    }
}

async function addComment(req, res) {
    const { videoID } = req.params;
    const commentData = req.body

    if (!videoID || !commentData.username || !commentData.comment) {
        return res.status(400).json({
            status: 400,
            message: "Comment gagal ditambahkan",
        });
    }
    try {
        const addComment = await addCommentByIdVideo(videoID, commentData);
        await savedComment(addComment);
        return res.status(201).json({
            message: "Comment berhasil di tambahkan"
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: "terjadi kesalahan disisi server",
            error : error.message
        });
    }
}

module.exports = {
    getComments,
    addComment
};