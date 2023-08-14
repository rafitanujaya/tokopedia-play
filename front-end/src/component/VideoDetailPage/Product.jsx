import { useContext } from "react";
import { VideoDetailContext } from "../../context/video/VideoDetailContext";

export default function Product() {
  const { product } = useContext(VideoDetailContext);

  if (!Array.isArray(product)) {
    return <div className="no-data-product">No product available.</div>;
  }
  console.log(product);

  const openExternalLink = (url) => {
    window.open(url, "_blank");
  };

  const handlePrice = (price) => {
    if (price === 0) {
      return "FREE";
    } else {
      let reverse = price.toString().split("").reverse().join("");
      let ribuan = reverse.match(/\d{1,3}/g);
      return "Rp " + ribuan.join(".").split("").reverse().join("");
    }
  };

  const dataProduct = product.map((p) => (
    <div
      className="product"
      key={p.productID}
      onClick={() => openExternalLink(p.linkProduct)}
    >
      <div className="title-product">{p.title}</div>
      <div className="price-product">{handlePrice(p.price)}</div>
    </div>
  ));

  return <>{dataProduct}</>;
}
