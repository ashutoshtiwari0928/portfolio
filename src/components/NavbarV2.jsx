import React, { useState } from "react";
import { Menu, Home, Briefcase, X, Code, Zap } from "lucide-react";
function NavbarV2() {
  const [isOpen, setIsOpen] = useState(false);
  const NavList = [
    {
      Icon: Home,
      href: "#hero",
      label: "Home",
    },
    {
      Icon: Briefcase,
      href: "#timeline",
      label: "Experience and Education",
    },
    {
      Icon: Code,
      href: "#projects",
      label: "Projects",
    },
    {
      Icon: Zap,
      href: "#skills",
      label: "Skills",
    },
  ];
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
              className="text-gray-600 hover:text-indigo-600 transition"
            >
              {<item.Icon size={24} />}
            </a>
          ))}
        </div>

        {/* moblie menu button */}
        <button
          className="sm:hidden block text-gray-700 pb-2"
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
              className="text-gray-700 hover:text-indigo-600 transition block"
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
