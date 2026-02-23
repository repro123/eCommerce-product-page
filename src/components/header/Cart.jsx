import { useState } from "react";
import CartIcon from "../../assets/images/icon-cart.svg";
import Button from "../ui/Button.jsx";
import CartUI from "../ui/CartUI.jsx";

function Cart({ cart, CartQuantity, onDelete, onCheckout, showToast }) {
  const [isCartOpen, setIsCartOpen] = useState(false);

  function handleToggleCart() {
    setIsCartOpen((e) => !e);
  }

  return (
    <div className="">
      <Button
        onClick={handleToggleCart}
        className="cursor-pointer relative"
        aria-label="Toggle cart"
      >
        <img src={CartIcon} alt="" />
        {CartQuantity > 0 && (
          <span className="absolute text-white -top-2 -right-2 bg-primary rounded-full size-4 text-xs">
            {CartQuantity}
          </span>
        )}
      </Button>

      {isCartOpen && (
        <CartUI
          cart={cart}
          setIsCartOpen={setIsCartOpen}
          onDelete={onDelete}
          onCheckout={onCheckout}
          showToast={showToast}
        />
      )}
    </div>
  );
}

export default Cart;
