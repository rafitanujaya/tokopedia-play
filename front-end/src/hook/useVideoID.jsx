import { useLocation } from "react-router-dom";

const useVideoID = () => {
  const location = useLocation();
  const { pathname } = location;

  const parts = pathname.split("/");
  const videoID = parts[parts.length - 1];

  return videoID;
};

export default useVideoID;
