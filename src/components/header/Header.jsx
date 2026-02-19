import Logo from "../ui/Logo.jsx";
import Avatar from "./Avatar.jsx";
import CartButton from "./CartButton.jsx";
import DesktopNav from "./DesktopNav.jsx";
import HamburgerMenu from "./HamburgerMenu.jsx";

function Header() {
  return (
    <header>
      <div className="container mx-auto flex items-center py-8 px-4 justify-between">
        <div className="flex items-center gap-4 lg:gap-12">
          <HamburgerMenu />
          <Logo />
          <DesktopNav />
        </div>

        <div className="flex items-center gap-8">
          <CartButton />
          <Avatar />
        </div>
      </div>
    </header>
  );
}

export default Header;
