import Videos from "./Videos";
import { SearchContext } from "../../context/video/SearchContext";
import { useContext } from "react";

export default function Main() {
  const { videoCount } = useContext(SearchContext);
  return (
    <>
      <main>
        <div className="video-count">Jumlah video ditemukan: {videoCount}</div>
        <Videos />
      </main>
    </>
  );
}
