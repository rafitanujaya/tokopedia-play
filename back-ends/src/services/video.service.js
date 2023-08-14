const Video = require("../model/Video");

const getVideo = () => {
  return Video.find({});
};

const getVideoByVideoID = (videoID) => {
  return Video.findById({ _id: videoID });
};

const getVideoBySearch = (search) => {
  const regex = new RegExp(search, "i");
  return Video.find({ title: regex });
};

const videoList = (videos) => {
  return videos.map((video) => {
    return {
      videoID: video._id,
      urlImage: video.urlImage,
      thumbnail: video.thumbnail,
      title: video.title,
      category: video.category,
    };
  });
};

module.exports = {
  getVideo,
  getVideoByVideoID,
  videoList,
  getVideoBySearch,
};
