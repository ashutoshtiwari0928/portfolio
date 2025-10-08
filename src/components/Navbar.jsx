import { useState } from "react";
import {
  Home,
  User,
  Briefcase,
  Mail,
  Code,
  Zap,
  Menu,
  Icon,
} from "lucide-react";
function Navbar() {
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
    <nav className="backdrop-opacity-100 fixed top-5 left-1/2 -translate-x-1/2 shadow-lg rounded-full px-4 py-2 flex gap-6 w-min">
      <button className="sm:hidden">
        <Menu size={24} />
      </button>
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
  );
}

export default Navbar;
