function NavLink({ children }) {
  return (
    <li className=" hover:text-gray-950 transition-colors duration-300 ">
      <a
        href="#"
        className="lg:border-b-2 lg:pb-[calc(2rem-1px)] lg:border-transparent lg:hover:border-primary lg:focus:border-primary"
      >
        {children}
      </a>
    </li>
  );
}

export default NavLink;
