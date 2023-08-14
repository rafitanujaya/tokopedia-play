import { useContext } from "react";
import { VideoDetailContext } from "../../context/video/VideoDetailContext";
export default function DetailVideo() {
  const { detailVideo } = useContext(VideoDetailContext);
  console.log(detailVideo);
  return (
    <>
      <div className="detail-video">
        <iframe
          src={detailVideo?.thumbnail}
          frameBorder={0}
          allowFullScreen=""
        />
      </div>
    </>
  );
}
