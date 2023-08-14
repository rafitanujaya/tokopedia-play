import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { SearchContext } from "../../context/video/SearchContext";

export default function Header() {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate("/");
  };

  const { setSearchQuery } = useContext(SearchContext);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setSearchQuery(inputValue);
  };

  return (
    <>
      <div className="app-bar">
        <div className="back-button" onClick={handleSearchClick}>
          <i className="fas fa-arrow-left"></i>
        </div>
        <div className="search-container">
          <form onSubmit={handleSearchSubmit}>
            <i className="search fas fa-search"></i>
            <input
              className="search-input"
              type="text"
              placeholder="Cari Video Yang mau ditonton"
              value={inputValue}
              onChange={handleInputChange}
            />
          </form>
        </div>
      </div>
    </>
  );
}
