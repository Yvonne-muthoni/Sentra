import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "About Sentra",
      links: [
        { label: "About Us", href: "#about" },
        { label: "Our Services", href: "#services" },
        { label: "Projects", href: "#projects" },
        { label: "Team", href: "#team" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "ICT Solutions", href: "#ict" },
        { label: "Smart Technology", href: "#smart-tech" },
        { label: "Network Setup", href: "#network" },
        { label: "Consultation", href: "#consultation" },
      ],
    },
    {
      title: "Quick Links",
      links: [
        { label: "Contact Us", href: "#contact" },
        { label: "Privacy Policy", href: "#privacy" },
        { label: "Terms & Conditions", href: "#terms" },
        { label: "Sitemap", href: "/sitemap.xml" },
      ],
    },
  ];

  const socialLinks = [
    { icon: "fa-whatsapp", url: "https://wa.me/254798467717", color: "text-green-400" },
    { icon: "fa-linkedin", url: "https://linkedin.com", color: "text-blue-400" },
    { icon: "fa-facebook", url: "https://facebook.com", color: "text-blue-500" },
    { icon: "fa-instagram", url: "https://instagram.com", color: "text-pink-400" },
    { icon: "fa-tiktok", url: "https://tiktok.com", color: "text-white" },
    { icon: "fa-x-twitter", url: "https://twitter.com", color: "text-gray-400" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Section - Company Info & Subscribe */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8 pb-12 border-b border-gray-700"
        >
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              <span className="text-[#FFA500]">Sentra</span> Cord
            </h2>
            <p className="text-gray-400 mb-4">
              Reliable ICT & Smart Technology Solutions for your business excellence.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.color} text-lg hover:text-[#FFA500] transition-colors duration-300`}
                >
                  <i className={`fa-brands ${social.icon}`}></i>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start gap-3">
                <i className="fa-solid fa-envelope mt-1 text-[#FFA500]"></i>
                <a 
                  href="mailto:info@sentracord.co.ke"
                  className="hover:text-white transition-colors"
                >
                  info@sentracord.co.ke
                </a>
              </div>
              <div className="flex items-start gap-3">
                <i className="fa-solid fa-phone mt-1 text-[#FFA500]"></i>
                <a 
                  href="tel:+254798467717"
                  className="hover:text-white transition-colors"
                >
                  +254 798 467 717
                </a>
              </div>
              <div className="flex items-start gap-3">
                <i className="fa-solid fa-location-dot mt-1 text-[#FFA500]"></i>
                <p>Nairobi, Kenya</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Middle Section - Footer Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 border-b border-gray-700"
        >
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4 text-white">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-[#FFA500] transition-colors duration-300 flex items-center gap-2"
                    >
                      <span className="text-[#FFA500]">›</span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Bottom Section - Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="pt-8 mt-8 border-t border-gray-700"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Sentra Cord. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Designed with <span className="text-[#FFA500]">♡</span> for your success
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;