import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { VideoContext } from "../../context/video/VideoContext";
import SkeletonVideo from "./SkeletonVideo";
import useFetchVideos from "../../hook/useFetchVideos";

export default function Video() {
  const { dataVideos, selectedCategory } = useContext(VideoContext);

  const { isLoading } = useFetchVideos();

  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/video/${id}`);
  };

  if (!Array.isArray(dataVideos)) {
    return <div className="no-data">No video available.</div>;
  }

  const filteredData = dataVideos.filter(
    (video) => selectedCategory === null || video.category === selectedCategory
  );

  const data = filteredData?.map((video) => (
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

  return (
    <>
      {isLoading ? (
        <>
          <SkeletonVideo /> <SkeletonVideo /> <SkeletonVideo />
          <SkeletonVideo />
        </>
      ) : (
        data
      )}
    </>
  );
}
