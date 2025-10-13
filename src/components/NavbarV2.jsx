import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavList } from "../info/NavList.js";
function NavbarV2() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="backdrop-blur-lg bg-white/30 fixed top-10 sm:left-1/2 sm:-translate-1/2 left-10/12 -translate-x-2/12 shadow-lg rounded-full px-4 py-2 sm:flex block sm:items-center gap-6 w-min z-50">
        {/* desktop buttons */}
        <div className="hidden sm:flex sm:gap-6">
          {NavList.map((item) => (
            <a
              href={item.href}
              aria-label={item.label}
              title={item.label}
              className="text-gray-800 hover:text-indigo-600 transition"
            >
              {<item.Icon size={24} />}
            </a>
          ))}
        </div>
        {/* moblie menu button */}
        <button
          className="sm:hidden block text-gray-800 pb-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        {/*Mobile nav buttons */}
        <div className={`sm:hidden ${isOpen ? "block" : "hidden"} space-y-2`}>
          {NavList.map((item) => (
            <a
              href={item.href}
              aria-label={item.label}
              title={item.label}
              className="text-gray-800
              hover:text-indigo-600 transition block"
            >
              {<item.Icon size={24} />}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}

export default NavbarV2;
