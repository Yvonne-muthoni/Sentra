import React, { useState } from "react";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navItems = ["Home", "Who We Are", "Our Services", "Gallery", "Contact"];

  return (
    <nav className="fixed top-2 left-0 w-full z-50 bg-transparent backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-2">
        
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Sentra Tech Logo"
            className="h-10 md:h-12 w-auto object-contain mix-blend-lighten"
          />
          <span className="text-3xl md:text-4xl font-bold tracking-wide text-[#FFA500]">
            SentraTech
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 font-bold">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.replace(/\s+/g, "").toLowerCase()}`}
                className="text-[#FFA500] hover:text-white transition duration-300 text-lg md:text-xl font-bold"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        {/* Mobile Burger */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-[#FFA500] focus:outline-none"
          >
            <i className={`fas ${open ? "fa-xmark" : "fa-bars"} text-3xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black/80 backdrop-blur-lg w-full absolute top-full left-0 transition-all duration-300 ease-in-out ${
          open ? "opacity-100 visible max-h-96" : "opacity-0 invisible max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 font-bold py-4">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.replace(/\s+/g, "").toLowerCase()}`}
                className="text-[#FFA500] hover:text-white transition duration-300 text-lg font-bold"
                onClick={() => setOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          onClick={() => setOpen(false)}
          className="mt-4 mb-4 block w-full mx-auto bg-[#008000] text-white px-6 py-2 rounded-full hover:bg-[#0000FF] transition text-center text-lg"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
};

export default Navbar;