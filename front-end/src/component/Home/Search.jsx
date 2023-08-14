import { useNavigate } from "react-router-dom";

export default function Search() {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate("/search");
  };
  return (
    <>
      <div className="search-menu" onClick={handleSearchClick}>
        <i className="fas fa-search"></i>
      </div>
    </>
  );
}
