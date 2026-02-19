import Header from "./components/header/Header.jsx";
import CartSvg from "./components/ui/CartSvg.jsx";
import MinusIcon from "./assets/images/icon-minus.svg";
import PlusIcon from "./assets/images/icon-plus.svg";
import { useState } from "react";

const productImages = [
  {
    id: 1,
    thumbnail: "image-product-1-thumbnail.jpg",
    fullSize: "image-product-1.jpg",
  },
  {
    id: 2,
    thumbnail: "image-product-2-thumbnail.jpg",
    fullSize: "image-product-2.jpg",
  },
  {
    id: 3,
    thumbnail: "image-product-3-thumbnail.jpg",
    fullSize: "image-product-3.jpg",
  },
  {
    id: 4,
    thumbnail: "image-product-4-thumbnail.jpg",
    fullSize: "image-product-4.jpg",
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
      <div className="container mx-auto py-8 px-4 grid lg:grid-cols-2">
        <ProductDescription />
      </div>
    </main>
  );
}

function MobileProductImages() {
  return {};
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
    <section>
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
      <button
        aria-label="remove one"
        className={`${!numberOfItems ? "cursor-not-allowed" : "cursor-pointer"} border p-3 rounded-md`}
        type="button"
        onClick={onRemoveOne}
      >
        <img src={MinusIcon} alt="" />
      </button>
      <span>{numberOfItems}</span>
      <button
        aria-label="add one"
        className="cursor-pointer border p-3 rounded-md"
        type="button"
        onClick={onAddOne}
      >
        <img src={PlusIcon} alt="" />
      </button>
    </div>
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
