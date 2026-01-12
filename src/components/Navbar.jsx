import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => {
    return location.pathname === path
      ? "text-primary font-semibold"
      : "text-maintext hover:text-primary transition-colors";
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-black/10 backdrop-blur-sm shadow-sm w-full">
      <div className="container mx-auto px-4 md:px-4 h-20 flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/logo.png"
            alt="Star Enterprises Logo"
            className="h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-200"
          />
          <span className="text-xl md:text-2xl font-bold text-maintext tracking-tight font-fira">
            Star Enterprises
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`${isActive(
                    link.path
                  )} text-base font-medium tracking-wide`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          
          {/* CTA Button */}
          <Link
            to="/contact"
            className="btn btn-primary"
          >
            Get In Touch
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-maintext hover:text-primary transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-20 left-0 w-full bg-white shadow-lg border-t border-gray-100 transform transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col p-6 space-y-4">
          <ul className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`block text-lg font-medium ${isActive(link.path)}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="pt-4 border-t border-gray-100">
            <Link
              to="/contact"
              className="block w-full text-center bg-primary text-white py-3 rounded-lg font-semibold shadow-md active:scale-95 transition-transform"
              onClick={() => setIsOpen(false)}
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
