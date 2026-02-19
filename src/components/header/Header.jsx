import Logo from "../ui/Logo.jsx";
import Avatar from "./Avatar.jsx";
import Cart from "./Cart.jsx";
import DesktopNav from "./DesktopNav.jsx";
import HamburgerMenu from "./HamburgerMenu.jsx";

function Header() {
  return (
    <header>
      <div className="container mx-auto flex items-center py-4 px-4 justify-between border-b border-gray-300">
        <div className="flex items-center gap-4 lg:gap-12">
          <HamburgerMenu />
          <Logo />
          <DesktopNav />
        </div>

        <div className="flex items-center gap-8">
          <Cart />
          <Avatar />
        </div>
      </div>
    </header>
  );
}

export default Header;
