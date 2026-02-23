import Logo from "@/components/ui/Logo.jsx";
import Avatar from "@/components/header/Avatar.jsx";
import Cart from "@/components/header/Cart.jsx";
import DesktopNav from "@/components/header/DesktopNav.jsx";
import HamburgerMenu from "@/components/header/HamburgerMenu.jsx";

function Header({ cart,  onDelete, onCheckout, showToast }) {
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
