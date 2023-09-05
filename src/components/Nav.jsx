import  { useState } from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const toggleMenu = () => {
    setToggleDropdown((prev) => !prev);
  };

  return (
    <header className="padding-x py-8 absolute  z-10 w-full  ">
      <nav className="max-container  flex justify-between items-center">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={129} height={29} className="m-0 w-[129px] h-[29px]" />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden ">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-slate-gray leading-normal font-montserrat text-lg"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <button
            onClick={toggleMenu}
            className="flex items-center focus:outline-none"
          >
            <img
              src={hamburger}
              alt="Hamburger Menu"
              width={25}
              height={25}
              className="cursor-pointer"
            />
          </button>
          {toggleDropdown && (
            <ul className="absolute top-12 right-0 mt-2 space-y-2 bg-white shadow-lg rounded-lg">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="block px-4 py-2 text-black hover:text-gray-600"
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
