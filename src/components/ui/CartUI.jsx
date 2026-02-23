import Button from "./Button.jsx";
import CloseIcon from "../../assets/images/icon-close.svg";
import CartItem from "./CartItem.jsx";
import EmptyCart from "./EmptyCart.jsx";

function CartUI({ cart, setIsCartOpen, onDelete, onCheckout, showToast }) {
  return (
    <div className="shadow-2xl absolute top-20 mt-4 max-md:mx-auto w-full md:right-0 md:max-w-xl max-md:left-0 rounded-2xl z-10 bg-white">
      <div className="p-4 py-3 border-b border-b-gray-300 font-medium flex items-center gap-4 justify-between">
        <p>Cart</p>
        <Button
          className="cursor-pointer"
          aria-label="Close cart"
          onClick={() => setIsCartOpen(false)}
        >
          <img src={CloseIcon} alt="Close cart" />
        </Button>
      </div>

      {!cart ? (
        <EmptyCart />
      ) : (
        <CartItem
          item={cart}
          onDelete={onDelete}
          onCheckout={onCheckout}
          setIsCartOpen={setIsCartOpen}
          showToast={showToast}
        />
      )}
    </div>
  );
}
export default CartUI;
