import { FaFacebookF, FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";

export default function CustomFooter() {
  return (
    <footer className="bg-black text-gray-300 py-4 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12 mb-10">
        
        {/* COMPANY INFO */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">🏢 Sentra Cord</h3>
          <p className="text-sm text-gray-400 mb-4">
            Your trusted ICT & smart technology solutions provider across Kenya.
          </p>
          <div className="flex gap-4 text-xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400 hover:scale-110 transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/sentracord?igsh=MjhqMmNoemxjbTlx&utm_source=ig_contact_invite
"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-400 hover:scale-110 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://wa.me/254798467717"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-400 hover:scale-110 transition"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://www.tiktok.com/@sentra_cord?_r=1&_t=ZS-94axu3VXbpU"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 hover:scale-110 transition"
            >
              <FaTiktok />
            </a>
          </div>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[#FFA500]">CCTV Installation</a></li>
            <li><a href="#" className="hover:text-[#FFA500]">Network Infrastructure</a></li>
            <li><a href="#" className="hover:text-[#FFA500]">Smart Home Solutions</a></li>
            <li><a href="#" className="hover:text-[#FFA500]">Access Control Systems</a></li>
            <li><a href="#" className="hover:text-[#FFA500]">Intercom Installation</a></li>
          </ul>
        </div>

        {/* COVERAGE */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Coverage</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[#FFA500]">Nairobi</a></li>
            <li><a href="#" className="hover:text-[#FFA500]">Mombasa</a></li>
            <li><a href="#" className="hover:text-[#FFA500]">Kisumu</a></li>
            <li><a href="#" className="hover:text-[#FFA500]">All Kenya Counties</a></li>
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-[#FFA500]">Home</a></li>
            <li><a href="/about" className="hover:text-[#FFA500]">About Us</a></li>
            <li><a href="/services" className="hover:text-[#FFA500]">Services</a></li>
            <li><a href="/contact" className="hover:text-[#FFA500]">Contact Us</a></li>
          </ul>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="border-t border-gray-700 pt-8">
        <div className="flex flex-col items-center gap-4 text-sm text-gray-500">
          <p className="text-center">© 2025 Sentra Cord. All Rights Reserved.|Powering Kenya with Smart Technology Solutions  .</p>
          <div className="flex gap-4">
            <span>🔒 Licensed</span>
            <span>✓ Insured</span>
            <span>⭐ Trusted</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
