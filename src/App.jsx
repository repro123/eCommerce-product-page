import Header from "./components/header/Header.jsx";
import ProductDescription from "./components/products/ProductDescription.jsx";
import Button from "./components/ui/Button.jsx";
import CloseIcon from "./assets/images/icon-close.svg";

import MobileProductImages from "./components/products/MobileProductImages.jsx";
import DesktopProductImages from "./components/products/DesktopProductImages.jsx";
import Overlay from "./components/ui/Overlay.jsx";
import { useState } from "react";

function App() {
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <>
      <Header />
      <Main
        numberOfItems={numberOfItems}
        setNumberOfItems={setNumberOfItems}
        currentImageIndex={currentImageIndex}
        setCurrentImageIndex={setCurrentImageIndex}
      />
    </>
  );
}

function Main({
  numberOfItems,
  setNumberOfItems,
  currentImageIndex,
  setCurrentImageIndex,
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
        />
      </div>
    </main>
  );
}

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

export default App;
