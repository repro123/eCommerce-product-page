import Button from "./Button.jsx";
import DeleteIcon from "../../assets/images/icon-delete.svg";

function CartItem({ item, onDelete, onCheckout, setIsCartOpen, showToast }) {
  return (
    <div className="p-4 py-6">
      <div className="flex items-center gap-4 justify-between">
        <div className="flex items-center gap-4">
          <img
            src={item.thumbnail}
            alt={item.name}
            className="size-12 object-cover rounded-lg"
          />
          <div>
            <span>{item.name}</span>
            <div className="space-x-8">
              <span>{`$${item.price.toFixed(2)} x ${item.quantity}`}</span>
              <strong>{(item.price * item.quantity).toFixed(2)}</strong>
            </div>
          </div>
        </div>

        <Button
          className="cursor-pointer border p-2 border-transparent rounded-2xl hover:border-primary"
          onClick={() => {
            onDelete();
            showToast && showToast("Removed from cart", "info");
          }}
        >
          <img src={DeleteIcon} alt="" />
        </Button>
      </div>

      <Button
        className="bg-primary text-gray-950 font-bold w-full whitespace-nowrap p-3 rounded-2xl hover:bg-pale-primary cursor-pointer border-2 border-primary mt-6"
        onClick={() => {
          onCheckout && onCheckout();
          setIsCartOpen(false);
        }}
      >
        Checkout
      </Button>
    </div>
  );
}

export default CartItem;
