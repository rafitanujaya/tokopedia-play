import Header from "./Header";
import Main from "./Main";

import { VideoProvider } from "../../context/video/VideoContext";
import Logo from "./Logo";
import Search from "./Search";

export default function Home() {
  return (
    <VideoProvider>
      <Header>
        <Logo />
        <Search />
      </Header>
      <Main></Main>
    </VideoProvider>
  );
}
