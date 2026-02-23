import Logo from "../ui/Logo.jsx";
import Avatar from "./Avatar.jsx";
import Cart from "./Cart.jsx";
import DesktopNav from "./DesktopNav.jsx";
import HamburgerMenu from "./HamburgerMenu.jsx";

function Header({ cart, CartQuantity, onDelete, onCheckout, showToast }) {
  return (
    <header className="px-4">
      <div className="container mx-auto flex items-center py-4 justify-between border-b border-gray-300 relative">
        <div className="flex items-center gap-4 lg:gap-12">
          <HamburgerMenu />
          <Logo />
          <DesktopNav />
        </div>

        <div className="flex items-center gap-8">
          <Cart
            cart={cart}
            CartQuantity={CartQuantity}
            onDelete={onDelete}
            onCheckout={onCheckout}
            showToast={showToast}
          />
          <Avatar />
        </div>
      </div>
    </header>
  );
}

export default Header;
