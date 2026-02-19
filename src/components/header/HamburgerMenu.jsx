import { useState } from "react";
import MenuIcon from "../../assets/images/icon-menu.svg";
import CloseIcon from "../../assets/images/icon-close.svg";
import MobileNav from "./MobileNav.jsx";

function HamburgerMenu() {
  const [isExpanded, setIsExpanded] = useState(false);

  function handleToggleNav() {
    setIsExpanded((e) => !e);
  }

  return (
    <>
      <button
        className="relative z-20 p-2 rounded-md cursor-pointer lg:hidden"
        aria-expanded={isExpanded}
        aria-controls="mobile-nav"
        aria-label={isExpanded ? "Close menu" : "Open menu"}
        type="button"
        onClick={handleToggleNav}
      >
        <img src={isExpanded ? CloseIcon : MenuIcon} alt="" />
      </button>

      {isExpanded && <MobileNav onCloseNav={handleToggleNav} />}
    </>
  );
}

export default HamburgerMenu;
