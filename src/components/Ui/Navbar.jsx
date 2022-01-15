import { Link } from "gatsby";
import React, { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { navItems } from "../../assets/data/navItems";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const toggleClass = show ? "h-[16rem]" : "h-0";

  const showMobilnav = () => {
    setShow(!show);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap pt-6 pb-6 px-4">
      <div className="flex items-center flex-shrink-0 text-black mr-12">
        <span className="font-bold text-3xl tracking-wider">
          <Link to="/">
            <span className="text-violet-500">Simple</span> Recipes
          </Link>
        </span>
      </div>
      <div className="block md:hidden ">
        <button
          onClick={showMobilnav}
          className="flex items-center px-3 py-2 rounded text-white bg-violet-500"
        >
          <FiAlignJustify />
        </button>
      </div>
      <div
        className={`${toggleClass} w-full transition-[height] block flex-grow overflow-hidden text-center md:text-left md:flex md:h-auto md:items-center md:w-auto`}
      >
        <div className="text-2xl md:text-lg md:flex-grow">
          {navItems.map((navItem, index) => {
            return (
              <Link
                key={index}
                to={navItem.href}
                activeClassName="text-violet-500"
                className="block mt-4 md:inline-block md:mr-4 md:mt-0 hover:text-violet-500 mr-0"
              >
                {navItem.title}
              </Link>
            );
          })}
        </div>
        <div>
          <Link
            to="/contact"
            className="inline-block text-lg px-4 pt-2 pb-3 leading-none rounded transition-colors bg-violet-500 text-white hover:bg-violet-600 mt-4 md:mt-0"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
