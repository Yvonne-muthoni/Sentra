import React, { useState } from "react";
import logo from "/images/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = ["Home", "About Us", "Services", "Projects", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-999 bg-black/30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Sentra Cord Logo"
            className="h-10 md:h-12 w-auto object-contain"
          />
          <span className="text-2xl md:text-3xl font-bold text-[#FFA500]">
            Sentra Cord
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 font-bold items-center">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.replace(/\s+/g, "").toLowerCase()}`}
                className="text-[#FFA500] hover:text-white transition text-lg"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Burger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#FFA500] text-3xl relative z-1000"
        >
          <i className={`fas ${open ? "fa-xmark" : "fa-bars"}`}></i>
        </button>
      </div>

      {/* MOBILE MENU FIXED */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-lg transition-all duration-300 overflow-hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center justify-center py-6 space-y-5">

          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.replace(/\s+/g, "").toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-[#FFA500] text-lg font-semibold hover:text-white transition w-full text-center"
            >
              {item}
            </a>
          ))}

          {/* CTA Button */}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 bg-[#008000] text-white px-6 py-2 rounded-full hover:bg-[#006400] transition text-center w-fit"
          >
            Get Started
          </a>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;