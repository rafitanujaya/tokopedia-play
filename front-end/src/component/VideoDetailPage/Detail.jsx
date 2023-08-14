import ContainerLeft from "./ContainerLeft";
import ContainerRight from "./ContainerRight";

import useFetchVideoDetail from "../../hook/useFetchVideoDetail";
import useVideoID from "../../hook/useVideoID";

export default function Detail() {
  const videoID = useVideoID();
  useFetchVideoDetail(videoID);

  return (
    <>
      <div className="container">
        <ContainerLeft />
        <ContainerRight />
      </div>
    </>
  );
}
