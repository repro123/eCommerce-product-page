import { useState } from "react";
import MobileProductImages from "@/components/products/MobileProductImages.jsx";
import DesktopProductImages from "@/components/products/DesktopProductImages.jsx";
import LightBox from "@/components/products/LightBox.jsx";
import ProductDescription from "@/components/products/ProductDescription.jsx";

function Main({
  numberOfItems,
  setNumberOfItems,
  CartQuantity,
  setCartQuantity,
  currentImageIndex,
  setCurrentImageIndex,
  setCart,
  showToast,
}) {
  const [isLightBoxOpen, setIsLightBoxOpen] = useState(false);

  function handleToggleLightBox() {
    setIsLightBoxOpen((e) => !e);
  }

  return (
    <main className="grow lg:grid lg:place-items-center">
      <div className="md:container mx-auto md:py-8 md:px-4 grid  lg:grid-cols-2 gap-4 lg:gap-12 place-items-center">
        <div className="lg:hidden md:max-lg:rounded-2xl overflow-hidden">
          <MobileProductImages
            currentImageIndex={currentImageIndex}
            setCurrentImageIndex={setCurrentImageIndex}
            className=""
            rightBtnClass="right-4"
            leftBtnClass="left-4"
          />
        </div>
        <div className="hidden lg:block">
          <DesktopProductImages
            currentImageIndex={currentImageIndex}
            setCurrentImageIndex={setCurrentImageIndex}
            handleToggleLightBox={handleToggleLightBox}
          />
          {isLightBoxOpen && (
            <LightBox
              handleToggleLightBox={handleToggleLightBox}
              currentImageIndex={currentImageIndex}
              setCurrentImageIndex={setCurrentImageIndex}
            />
          )}
        </div>
        <ProductDescription
          numberOfItems={numberOfItems}
          setNumberOfItems={setNumberOfItems}
          CartQuantity={CartQuantity}
          setCartQuantity={setCartQuantity}
          setCart={setCart}
          showToast={showToast}
        />
      </div>
    </main>
  );
}

export default Main;
