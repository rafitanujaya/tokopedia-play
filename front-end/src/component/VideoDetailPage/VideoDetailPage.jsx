import { VideoDetailProvider } from "../../context/video/VideoDetailContext";
import Detail from "./Detail";

export default function VideoDetailPage() {
  return (
    <VideoDetailProvider>
      <Detail />
    </VideoDetailProvider>
  );
}
