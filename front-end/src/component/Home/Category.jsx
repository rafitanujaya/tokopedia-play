import { useContext, useState } from "react";
import { VideoContext } from "../../context/video/VideoContext";

export default function Category() {
  const categories = ["fashion", "beauty"];

  const { setSelectedCategory } = useContext(VideoContext);
  const [isActive, setIsActive] = useState(null);

  const handleCategoryClick = (category) => {
    setIsActive(isActive === category ? null : category);
    setSelectedCategory(isActive === category ? null : category);
  };

  return (
    <>
      {categories.map((category) => (
        <div
          className={`category ${isActive === category ? "active" : ""}`}
          key={category}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </div>
      ))}
    </>
  );
}
