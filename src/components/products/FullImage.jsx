import Button from "@/components/ui/Button.jsx";
import productImages from "@/components/data/ProductImages.jsx";

function FullImage({
  currentImageIndex,
  className = "",
  handleToggleLightBox = undefined,
}) {
  const src = productImages[currentImageIndex].fullSize;
  const alt = `product ${productImages[currentImageIndex].id}`;
  const imgClass = `max-w-full w-full object-cover border border-transparent ${className} ${
    handleToggleLightBox ? "cursor-pointer hover:border-primary" : ""
  }`;

  if (handleToggleLightBox) {
    return (
      <Button
        type="button"
        aria-label="Open image in lightbox"
        onClick={handleToggleLightBox}
        className="p-0 bg-transparent border-0 w-full"
      >
        <img src={src} alt={alt} className={imgClass} loading="lazy" />
      </Button>
    );
  }

  return <img src={src} alt={alt} className={imgClass} loading="lazy" />;
}

export default FullImage;
