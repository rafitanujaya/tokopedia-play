/* eslint-disable react/prop-types */
import { useState, createContext } from "react";

const VideoContext = createContext();

const VideoProvider = ({ children }) => {
  const [dataVideos, setDataVideos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <VideoContext.Provider
      value={{
        dataVideos,
        setDataVideos,
        selectedCategory,
        setSelectedCategory,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};

export { VideoContext, VideoProvider };
