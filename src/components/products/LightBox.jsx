import Overlay from "@/components/ui/Overlay.jsx";
import DesktopProductImages from "@/components/products/DesktopProductImages.jsx";
import MobileProductImages from "@/components/products/MobileProductImages.jsx";
import Button from "@/components/ui/Button.jsx";
import CloseIcon from "@/components/../assets/images/icon-close.svg";

function LightBox({
  handleToggleLightBox,
  currentImageIndex,
  setCurrentImageIndex,
}) {
  return (
    <>
      <Overlay onClose={handleToggleLightBox} />
      <div className="absolute inset-0  grid place-items-center">
        <DesktopProductImages
          currentImageIndex={currentImageIndex}
          setCurrentImageIndex={setCurrentImageIndex}
          className="relative z-50"
        >
          <MobileProductImages
            currentImageIndex={currentImageIndex}
            setCurrentImageIndex={setCurrentImageIndex}
            className="h-80 rounded-2xl"
            rightBtnClass="right-0 translate-x-1/2"
            leftBtnClass="-translate-x-1/2"
          />
          <Button
            className="absolute -top-12 right-4 translate-x-1/2 bg-white size-10 grid place-items-center p-0 rounded-full opacity-75 hover:opacity-100 focus:opacity-100 cursor-pointer border-2 border-transparent hover:border-primary focus:border-primary"
            aria-label="Close Lightbox"
            onClick={handleToggleLightBox}
          >
            <img src={CloseIcon} alt="Close Lightbox" />
          </Button>
        </DesktopProductImages>
      </div>
    </>
  );
}

export default LightBox;
