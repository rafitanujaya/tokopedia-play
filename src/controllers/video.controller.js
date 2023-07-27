const { getVideo, getVideoByVideoID, getVideoByCategory, videoList } = require('../services/video.service');

async function getVideos(req, res) {
    const { categories } = req.query
    try {
        if(categories) {
            const videos = await getVideoByCategory(categories);
            const videoLists = videoList(videos)
                if (videoLists.length === 0) {
                    return res.json({
                        videos: [],
                    });
                }
                res.send(videoLists);
        } else {
            const videos = await getVideo();
            const videoLists = videoList(videos)
            if (videoLists.length === 0) {
                return res.json({
                    videos: [],
                });
            }
            res.send(videoLists);
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: "terjadi kesalahan disisi server",
        });
    }
}

async function getVideoByID(req, res) {
    const { videoID } = req.params;
    try {
        const videos = await getVideoByVideoID(videoID);
        const videoDetail = {
                videoID: videos._id,
                urlImage: videos.urlImage,
                thumbnail: videos.thumbnail,
                title: videos.title,
                category: videos.category
            }
        if (videoDetail.length === 0) {
            return res.status(404).json({
                message: "Tidak ada Video",
            });
        }
        res.send(videoDetail);
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: "terjadi kesalahan disisi server",
            err: error.message
        });
    }
}

module.exports = {
    getVideos,
    getVideoByID,
};