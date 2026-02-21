import Header from "./components/header/Header.jsx";
import CartSvg from "./components/ui/CartSvg.jsx";
import MinusIcon from "./assets/images/icon-minus.svg";
import PlusIcon from "./assets/images/icon-plus.svg";
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
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

function Main() {
  return (
    <main>
      <div className="md:container mx-auto md:py-8 md:px-4 grid  lg:grid-cols-2 gap-4 lg:gap-12">
        <div className="lg:hidden">
          <MobileProductImages />
        </div>
        <ProductDescription />
      </div>
    </main>
  );
}

function MobileProductImages() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
    <div className="border h-full relative">
      <Button
        onClick={showPrevious}
        aria-label="Previous Image"
        className={`${classNames} left-4`}
      >
        <img src={PreviousIcon} alt="" />
      </Button>

      <img
        src={productImages[currentImageIndex].fullSize}
        className="max-w-full w-full"
        loading="lazy"
      />

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

function ProductDescription() {
  const [numberOfItems, setNumberOfItems] = useState(0);

  function handleRemoveOne() {
    numberOfItems && setNumberOfItems((i) => i - 1);
  }

  function handleAddOne() {
    setNumberOfItems((i) => i + 1);
  }

  return (
    <section className="max-md:px-8 max-md:pb-8">
      <ProductSpecs />

      <div className="grid gap-4 md:grid-cols-2 mt-8">
        <QuantitySelector
          numberOfItems={numberOfItems}
          onAddOne={handleAddOne}
          onRemoveOne={handleRemoveOne}
        />

        <AddToCart />
      </div>
    </section>
  );
}

function QuantitySelector({ numberOfItems, onAddOne, onRemoveOne }) {
  return (
    <div className="flex items-center justify-between bg-gray-50 p-3 w-full rounded-lg">
      <Button
        aria-label="remove one"
        className={`${!numberOfItems ? "cursor-not-allowed" : "cursor-pointer"} border p-3 rounded-md`}
        onClick={onRemoveOne}
      >
        <img src={MinusIcon} alt="" />
      </Button>
      <span>{numberOfItems}</span>
      <Button
        aria-label="add one"
        className="cursor-pointer border p-3 rounded-md"
        onClick={onAddOne}
      >
        <img src={PlusIcon} alt="" />
      </Button>
    </div>
  );
}

function Button({ children, type = "button", ...props }) {
  return (
    <button type={type} {...props}>
      {children}
    </button>
  );
}

function AddToCart() {
  return (
    <button className="flex items-center gap-2 justify-center bg-primary cursor-pointer rounded-lg p-3 w-full text-black">
      <CartSvg />
      <span>Add to cart</span>
    </button>
  );
}

function ProductSpecs() {
  return (
    <>
      <p className="text-sm uppercase tracking-wider">Sneaker Company</p>
      <h1 className="text-3xl font-bold mt-4 text-gray-950">
        Fall Limited Edition Sneakers
      </h1>
      <p className="mt-4">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="mt-4 flex gap-4 items-start">
        <span className="font-bold text-2xl text-gray-950">$125.00</span>{" "}
        <span className="bg-gray-950 text-white text-sm p-1 rounded-md">
          50% <span className="sr-only">discount</span>
        </span>
      </div>
      <p>
        <del className="font-bold">$250.00</del>
      </p>
    </>
  );
}

export default App;
