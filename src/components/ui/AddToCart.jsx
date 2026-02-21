import CartSvg from "./CartSvg";

function AddToCart() {
  return (
    <button className="flex items-center gap-2 justify-center bg-primary cursor-pointer rounded-lg p-3 w-full text-black">
      <CartSvg />
      <span>Add to cart</span>
    </button>
  );
}

export default AddToCart;
