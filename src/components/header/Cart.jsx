import CartIcon from "../../assets/images/icon-cart.svg";

function Cart() {
  return (
    <button className="cursor-pointer">
      <img src={CartIcon} alt="" />
    </button>
  );
}

export default Cart;
