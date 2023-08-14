import Logo from "./Logo";
import Search from "./Search";

export default function Header() {
  return (
    <>
      <header>
        <div className="app-bar">
          <Logo />
          <Search />
        </div>
      </header>
    </>
  );
}
