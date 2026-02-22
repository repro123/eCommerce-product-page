import NextIcon from "../../assets/images/icon-next.svg";
import PreviousIcon from "../../assets/images/icon-previous.svg";
import productImages from "../data/ProductImages.jsx";
import Button from "../ui/Button.jsx";
import FullImage from "./FullImage.jsx";

function MobileProductImages({
  currentImageIndex,
  setCurrentImageIndex,
  className,
  leftBtnClass,
  rightBtnClass,
}) {
  function showPrevious() {
    currentImageIndex === 0
      ? setCurrentImageIndex(productImages.length - 1)
      : setCurrentImageIndex((cur) => cur - 1);
  }

  function showNext() {
    currentImageIndex + 1 < productImages.length
      ? setCurrentImageIndex((cur) => cur + 1)
      : setCurrentImageIndex(0);
  }

  const classNames =
    "absolute top-1/2 rounded-full bg-white size-10 grid place-items-center cursor-pointer -translate-y-1/2";

  return (
    <div className="relative">
      <Button
        onClick={showPrevious}
        aria-label="Previous Image"
        className={`${classNames} ${leftBtnClass}`}
      >
        <img src={PreviousIcon} alt="" />
      </Button>

      <FullImage currentImageIndex={currentImageIndex} className={className} />

      <Button
        onClick={showNext}
        aria-label="Next Image"
        className={`${classNames} ${rightBtnClass}`}
      >
        <img src={NextIcon} alt="" />
      </Button>
    </div>
  );
}

export default MobileProductImages;
