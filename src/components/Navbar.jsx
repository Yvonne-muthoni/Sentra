import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 right-0 w-full z-50 bg-black/80 text-white backdrop-blur-md px-4 py-3 md:px-6 md:py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">

        {/* LOGO (LEFT) */}
        <div className="flex items-center gap-2">
          <img
            src="/images/logo.png"   
            alt="Sentra Cord Logo"
            className="h-10 w-auto object-contain"
          />

          <h1 className="text-xl font-bold text-[#FFA500]">
            Sentra Cord
          </h1>
        </div>

        {/* LINKS (RIGHT) - DESKTOP */}
        <div className="hidden md:flex gap-6 font-bold">
          <Link to="/" className="hover:text-[#FFA500] transition">Home</Link>
          <Link to="/about" className="hover:text-[#FFA500] transition">About</Link>
          <Link to="/services" className="hover:text-[#FFA500] transition">Services</Link>
          <Link to="/projects" className="hover:text-[#FFA500] transition">Projects</Link>
          <Link to="/contact" className="hover:text-[#FFA500] transition">Contact</Link>
        </div>

        {/* HAMBURGER MENU - MOBILE */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white text-2xl focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-black/90 rounded-lg p-4">
          <div className="flex flex-col gap-4 font-bold">
            <Link 
              to="/" 
              className="hover:text-[#FFA500] transition py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="hover:text-[#FFA500] transition py-2"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className="hover:text-[#FFA500] transition py-2"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/projects" 
              className="hover:text-[#FFA500] transition py-2"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link 
              to="/contact" 
              className="hover:text-[#FFA500] transition py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}