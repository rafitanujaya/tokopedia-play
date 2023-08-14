import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../component/Home/Home";
import VideoDetailPage from "../component/VideoDetailPage/VideoDetailPage";
import SearchPage from "../component/SearchPage/SearchPage";
import NotFound from "../component/NotFound/NotFound";

export default function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/search" element={<SearchPage />}></Route>
        <Route path="/video/:id" element={<VideoDetailPage />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
