import { useEffect, useState } from "react";
import {
  Home,
  User,
  Briefcase,
  Mail,
  Code,
  Zap,
  Menu,
  Icon,
  X,
} from "lucide-react";
function Navbar() {
  const [isOpen, setOpen] = useState(false);
  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

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
      {/* Main Navbar */}
      <nav className="backdrop-blur-lg bg-white/30 fixed top-5 left-1/2 -translate-x-1/2 shadow-lg rounded-full px-4 py-2 flex items-center gap-6 w-min z-50">
        {/* Mobile Menu Button */}
        <button
          className="sm:hidden text-gray-700"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          <Menu size={24} />
        </button>

        {/* Desktop Icons */}
        <div className="hidden sm:flex gap-6">
          <a
            href="#hero"
            aria-label="Home"
            title="Home"
            className="text-gray-600 hover:text-indigo-600 transition"
          >
            <Home size={24} />
          </a>
          <a
            href="#timeline"
            aria-label="Experience and Education"
            title="Experience and Education"
            className="text-gray-600 hover:text-indigo-600 transition"
          >
            <Briefcase size={24} />
          </a>
          <a
            href="#projects"
            aria-label="Projects"
            title="Projects"
            className="text-gray-600 hover:text-indigo-600 transition"
          >
            <Code size={24} />
          </a>
          <a
            href="#skills"
            aria-label="Skills"
            title="Skills"
            className="text-gray-600 hover:text-indigo-600 transition"
          >
            <Zap size={24} />
          </a>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-md shadow-lg rounded-2xl p-4 flex flex-col items-center gap-4 sm:hidden z-40 animate-fade-in">
          <a
            href="#hero"
            onClick={() => setOpen(false)}
            className="text-gray-700 hover:text-indigo-600 transition"
          >
            <Home size={28} />
          </a>
          <a
            href="#timeline"
            onClick={() => setOpen(false)}
            className="text-gray-700 hover:text-indigo-600 transition"
          >
            <Briefcase size={28} />
          </a>
          <a
            href="#projects"
            onClick={() => setOpen(false)}
            className="text-gray-700 hover:text-indigo-600 transition"
          >
            <Code size={28} />
          </a>
          <a
            href="#skills"
            onClick={() => setOpen(false)}
            className="text-gray-700 hover:text-indigo-600 transition"
          >
            <Zap size={28} />
          </a>
        </div>
      )}
    </>
  );
}

export default Navbar;
