import NavLink from "../ui/NavLink.jsx";
import navLinks from "../data/NavLinks.jsx";

function DesktopNav() {
  return (
    <nav>
      <ul className="items-center gap-8 hidden lg:flex">
        {navLinks.map((link) => (
          <NavLink key={link} link={link}>
            {link[0].toUpperCase() + link.slice(1)}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
}

export default DesktopNav;
