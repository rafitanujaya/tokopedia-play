import { useEffect, useContext } from "react";
import { VideoDetailContext } from "../context/video/VideoDetailContext";

function useFetchVideoDetail(videoID) {
  const { setDetailVideo, setComment, setProduct } =
    useContext(VideoDetailContext);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}video/${videoID}`)
      .then((response) => response.json())
      .then((data) => {
        setDetailVideo(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });

    fetch(`${import.meta.env.VITE_BASE_URL}${videoID}/comments`)
      .then((response) => response.json())
      .then((data) => {
        setComment(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });

    fetch(`${import.meta.env.VITE_BASE_URL}${videoID}/products`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, [videoID, setDetailVideo, setComment, setProduct]);

  return {};
}

export default useFetchVideoDetail;
