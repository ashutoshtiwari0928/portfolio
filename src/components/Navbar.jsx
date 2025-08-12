import { useState } from "react";

function Navbar() {
  const links = [
    { name: "Home", href: "#" },
    { name: "About", href: "#timeline" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-xl font-bold">Welcome to my portfolio!</div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-gray-300 transition"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              <div className="w-6 h-0.5 bg-white mb-1"></div>
              <div className="w-6 h-0.5 bg-white mb-1"></div>
              <div className="w-6 h-0.5 bg-white"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-700 px-4 pb-4">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block py-2 hover:text-gray-300 transition"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
