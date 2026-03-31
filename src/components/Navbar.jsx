import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 right-0 w-full z-50 bg-black/80 text-white backdrop-blur-md px-6 py-4">
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
    {/* LINKS (RIGHT) */}
    <div className="flex gap-6 font-bold">
      <Link to="/" className="hover:text-[#FFA500]">Home</Link>
      <Link to="/about" className="hover:text-[#FFA500]">About</Link>
      <Link to="/services" className="hover:text-[#FFA500]">Services</Link>
      <Link to="/projects" className="hover:text-[#FFA500]">Projects</Link>
      <Link to="/contact" className="hover:text-[#FFA500]">Contact</Link>
    </div>

  </div>
</nav>
  );
}