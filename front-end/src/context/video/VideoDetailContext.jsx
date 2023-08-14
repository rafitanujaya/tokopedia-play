/* eslint-disable react/prop-types */
import { useState, createContext } from "react";

const VideoDetailContext = createContext();

const VideoDetailProvider = ({ children }) => {
  const [detailVideo, setDetailVideo] = useState();
  const [comment, setComment] = useState([]);
  const [product, setProduct] = useState([]);
  const [comments, setComments] = useState([]);

  return (
    <VideoDetailContext.Provider
      value={{
        detailVideo,
        setDetailVideo,
        comment,
        setComment,
        product,
        setProduct,
        comments,
        setComments,
      }}
    >
      {children}
    </VideoDetailContext.Provider>
  );
};

export { VideoDetailContext, VideoDetailProvider };
