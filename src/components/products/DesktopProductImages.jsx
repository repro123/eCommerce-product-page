import Thumbnail from "./Thumbnail.jsx";
import productImages from "../data/ProductImages.jsx";
import FullImage from "./FullImage.jsx";

function DesktopProductImages({
  currentImageIndex,
  setCurrentImageIndex,
  handleToggleLightBox,
  className = "",
  children,
}) {
  return (
    <div className={`grid gap-4 grid-rows-[1fr_auto] ${className}`}>
      <div>
        {children || (
          <FullImage
            className="h-80 rounded-2xl"
            currentImageIndex={currentImageIndex}
            handleToggleLightBox={handleToggleLightBox}
          />
        )}
      </div>

      <div className="grid grid-cols-4 gap-4">
        {productImages.map((img, i) => (
          <Thumbnail
            img={img.thumbnail}
            index={i}
            key={img.id}
            setCurrentImageIndex={setCurrentImageIndex}
            currentImageIndex={currentImageIndex}
          />
        ))}
      </div>
    </div>
  );
}

export default DesktopProductImages;
