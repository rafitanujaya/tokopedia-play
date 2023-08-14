/* eslint-disable react/prop-types */
import { useState, useEffect, createContext } from "react";
const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [videos, setVideos] = useState([]);
  const [videoCount, setVideoCount] = useState(0);

  useEffect(() => {
    async function fetchData() {
      if (searchQuery) {
        try {
          const response = await fetch(
            `${import.meta.env.VITE_BASE_URL}videos?search=${searchQuery}`
          );
          const data = await response.json();
          setVideos(data);
        } catch (error) {
          console.error("Error fetching videos:", error);
        }
      } else {
        setVideos([]);
      }
    }

    fetchData();
  }, [searchQuery]);

  return (
    <SearchContext.Provider
      value={{ searchQuery, setSearchQuery, videos, videoCount, setVideoCount }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContext, SearchProvider };
