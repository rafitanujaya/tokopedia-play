import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { SearchContext } from "../../context/video/SearchContext";

export default function Video() {
  const { videos, setVideoCount } = useContext(SearchContext);

  const navigate = useNavigate();

  useEffect(() => {
    setVideoCount(videos.length);
  }, [videos]);

  const handleClick = (id) => {
    navigate(`/video/${id}`);
  };

  if (!Array.isArray(videos)) {
    return <div className="no-data">No video available.</div>;
  }

  const data = videos?.map((video) => (
    <div
      className="video"
      key={video.videoID}
      onClick={() => handleClick(video.videoID)}
    >
      <img src={video.urlImage} alt="" />
      <div className="title-video">{video.title}</div>
      <div className="category-video">{video.category}</div>
    </div>
  ));
  return <>{data}</>;
}
