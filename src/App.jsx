import Header from "./components/header/Header.jsx";
import ProductDescription from "./components/products/ProductDescription.jsx";
import Button from "./components/ui/Button.jsx";
import NextIcon from "./assets/images/icon-next.svg";
import PreviousIcon from "./assets/images/icon-previous.svg";
import { useState } from "react";

import FullImage1 from "./assets/images/image-product-1.jpg";
import FullImage2 from "./assets/images/image-product-2.jpg";
import FullImage3 from "./assets/images/image-product-3.jpg";
import FullImage4 from "./assets/images/image-product-4.jpg";

import ThumbnailImage1 from "./assets/images/image-product-1-thumbnail.jpg";
import ThumbnailImage2 from "./assets/images/image-product-2-thumbnail.jpg";
import ThumbnailImage3 from "./assets/images/image-product-3-thumbnail.jpg";
import ThumbnailImage4 from "./assets/images/image-product-4-thumbnail.jpg";

const productImages = [
  {
    id: 1,
    thumbnail: ThumbnailImage1,
    fullSize: FullImage1,
  },
  {
    id: 2,
    thumbnail: ThumbnailImage2,
    fullSize: FullImage2,
  },
  {
    id: 3,
    thumbnail: ThumbnailImage3,
    fullSize: FullImage3,
  },
  {
    id: 4,
    thumbnail: ThumbnailImage4,
    fullSize: FullImage4,
  },
];

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
  return (
    <main className="grow lg:grid lg:place-items-center">
      <div className="md:container mx-auto md:py-8 md:px-4 grid  lg:grid-cols-2 gap-4 lg:gap-12 place-items-center">
        <div className="lg:hidden md:max-lg:rounded-2xl overflow-hidden">
          <MobileProductImages
            currentImageIndex={currentImageIndex}
            setCurrentImageIndex={setCurrentImageIndex}
          />
        </div>
        <div className="hidden lg:block">
          <DesktopProductImages
            currentImageIndex={currentImageIndex}
            setCurrentImageIndex={setCurrentImageIndex}
          />
        </div>
        <ProductDescription
          numberOfItems={numberOfItems}
          setNumberOfItems={setNumberOfItems}
        />
      </div>
    </main>
  );
}

function FullImage({ currentImageIndex, className = "" }) {
  return (
    <img
      src={productImages[currentImageIndex].fullSize}
      className={`max-w-full w-full object-cover ${className}`}
      loading="lazy"
    />
  );
}

function DesktopProductImages({ currentImageIndex, setCurrentImageIndex }) {
  return (
    <div className="grid gap-4 grid-rows-[1fr_auto]">
      <div>
        <FullImage
          className="h-80 rounded-2xl"
          currentImageIndex={currentImageIndex}
        />
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

function Thumbnail({ img, index, currentImageIndex, setCurrentImageIndex }) {
  function handleSetCurrentImage() {
    setCurrentImageIndex(index);
  }
  return (
    <Button
      onClick={handleSetCurrentImage}
      aria-label={`Show image ${index + 1}`}
      className={`relative rounded-2xl size-20 cursor-pointer overflow-hidden border-2 border-transparent after:absolute after:inset-0 after:bg-pale-primary/50 after:opacity-0 after:transition-opacity hover:after:opacity-100 focus:after:opacity-100 ${currentImageIndex === index ? "outline-2 outline-primary after:opacity-100  after:bg-pale-primary/50" : ""}`}
    >
      <span className=""></span>
      <img src={img} alt="" />
    </Button>
  );
}

function MobileProductImages({ currentImageIndex, setCurrentImageIndex }) {
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
        className={`${classNames} left-4`}
      >
        <img src={PreviousIcon} alt="" />
      </Button>

      <FullImage currentImageIndex={currentImageIndex} />

      <Button
        onClick={showNext}
        aria-label="Next Image"
        className={classNames + " right-4"}
      >
        <img src={NextIcon} alt="" />
      </Button>
    </div>
  );
}

export default App;
