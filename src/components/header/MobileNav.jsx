import navLinks from "../data/NavLinks.jsx";
import NavLink from "../ui/NavLink.jsx";
import Overlay from "../ui/Overlay.jsx";

function MobileNav({ onCloseNav }) {
  return (
    <>
      <Overlay onClose={onCloseNav} className="lg:hidden" />
      <nav
        className="fixed lg:hidden top-0 left-0 bg-white z-10 w-80  h-full overflow-auto pt-28"
        id="mobile-nav"
      >
        <ul className="flex flex-col gap-8 pl-12 font-medium">
          {navLinks.map((link) => (
            <NavLink key={link} link={link}>
              {link[0].toUpperCase() + link.slice(1)}
            </NavLink>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default MobileNav;
