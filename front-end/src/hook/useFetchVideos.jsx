import { useState, useContext, useEffect } from "react";
import { VideoContext } from "../context/video/VideoContext";

export default function useFetchVideos() {
  const { setDataVideos } = useContext(VideoContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(import.meta.env.VITE_BASE_URL + "videos")
      .then((response) => response.json())
      .then((data) => {
        setDataVideos(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setIsLoading(false);
      });
  }, [setDataVideos]);

  return { isLoading };
}
