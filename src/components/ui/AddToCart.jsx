import CartSvg from "./CartSvg";
import Product from "../data/Product.jsx";
import productImages from "../data/ProductImages.jsx";

function AddToCart({
  numberOfItems,
  setNumberOfItems,
  setCart,
  setCartQuantity,
  showToast,
}) {
  function handleAddToCart() {
    if (!numberOfItems) return;

    setCart({
      ...Product,
      quantity: numberOfItems,
      thumbnail: productImages[0].thumbnail,
      id: productImages[0].id,
    });
    setCartQuantity(numberOfItems);
    setNumberOfItems(0);
    showToast && showToast("Added to cart", "success");
  }

  return (
    <button
      className={`flex items-center gap-2 justify-center  border border-transparent rounded-lg p-3 w-full text-black ${numberOfItems > 0 ? "cursor-pointer hover:border-primary bg-primary" : "cursor-not-allowed bg-pale-primary"}`}
      onClick={handleAddToCart}
      disabled={numberOfItems > 0 ? false : true}
    >
      <CartSvg />
      <span>Add to cart</span>
    </button>
  );
}

export default AddToCart;
