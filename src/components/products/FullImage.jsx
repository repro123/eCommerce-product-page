import productImages from "../data/ProductImages.jsx";

function FullImage({
  currentImageIndex,
  className = "",
  handleToggleLightBox = undefined,
}) {
  return (
    <img
      src={productImages[currentImageIndex].fullSize}
      alt={`product ${productImages[currentImageIndex].id}`}
      className={`max-w-full w-full object-cover border border-transparent ${className} ${handleToggleLightBox ? "cursor-pointer hover:border-primary" : ""}`}
      loading="lazy"
      onClick={handleToggleLightBox}
    />
  );
}

export default FullImage;
