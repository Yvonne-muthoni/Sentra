import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navItems = ["Home", "Who We Are", "Our Services", "Gallery", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">
          <span className="text-[#FFA500]">SentraTech</span>
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 font-medium">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.replace(/\s+/g, "").toLowerCase()}`}
                className="text-white hover:text-[#FFA500] transition duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button className="hidden md:block bg-[#008000] text-white px-5 py-2 rounded-full hover:bg-[#0000FF] transition duration-300">
          Get Started
        </button>

        {/* Mobile Burger */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-white focus:outline-none"
          >
            <i className={`fas ${open ? "fa-xmark" : "fa-bars"} text-2xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black/80 w-full transition-all duration-300 ${
          open ? "max-h-96 py-4" : "max-h-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 font-medium">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.replace(/\s+/g, "").toLowerCase()}`}
                className="text-white hover:text-[#FFA500] transition duration-300"
                onClick={() => setOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <button className="mt-4 bg-[#008000] text-white px-6 py-2 rounded-full hover:bg-[#0000FF] transition">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;