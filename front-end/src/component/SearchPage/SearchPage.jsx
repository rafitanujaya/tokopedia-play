import Header from "./Header";
import Main from "./Main";
import { SearchProvider } from "../../context/video/SearchContext";

export default function SearchPage() {
  return (
    <SearchProvider>
      <Header />
      <Main />
    </SearchProvider>
  );
}
