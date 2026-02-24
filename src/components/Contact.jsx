import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [chatOpen, setChatOpen] = useState(false);

  const socialLinks = [
    {
      name: "Phone",
      href: "tel:+254798467717",
      icon: "fa-solid fa-phone text-white",
      bg: "bg-blue-500",
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/254798467717",
      icon: "fa-brands fa-whatsapp text-white",
      bg: "bg-green-500",
    },
    {
      name: "X / Twitter",
      href: "https://twitter.com/YourHandle",
      icon: "fa-brands fa-x-twitter text-white",
      bg: "bg-blue-400",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/YourProfile",
      icon: "fa-brands fa-linkedin-in text-white",
      bg: "bg-blue-700",
    },
    {
      name: "Facebook",
      href: "https://facebook.com/YourPage",
      icon: "fa-brands fa-facebook-f text-white",
      bg: "bg-blue-600",
    },
    {
      name: "TikTok",
      href: "https://tiktok.com/@YourHandle",
      icon: "fa-brands fa-tiktok text-white",
      bg: "bg-black",
    },
  ];

  return (
    <section className="relative">
      {/* Your existing Contact form / info here */}

      {/* Floating "Let's Chat" Button */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col items-center">
        {/* Social icons popout */}
       <AnimatePresence>
  {chatOpen &&
    socialLinks.map((link, index) => (
      <motion.a
        key={link.name}
        href={link.href}

        // ✅ Only open new tab for non-phone links
        target={link.name === "Phone" ? undefined : "_blank"}
        rel={link.name === "Phone" ? undefined : "noopener noreferrer"}

        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ delay: index * 0.05 }}
        className={`w-12 h-12 mb-3 rounded-full flex items-center justify-center shadow-lg ${link.bg} hover:scale-110 transform transition`}
        title={
          link.name === "Phone"
            ? "Call Sentra Cord"
            : `Chat on ${link.name}`
        }
      >
        <i className={`${link.icon} text-xl`}></i>
      </motion.a>
    ))}
</AnimatePresence>

        {/* Main Chat Button */}
        <button
          onClick={() => setChatOpen((prev) => !prev)}
          className="w-16 h-16 rounded-full bg-[#008000] shadow-2xl flex items-center justify-center text-white text-xl hover:scale-110 transition"
        >
          <i className="fa-solid fa-comments"></i>
        </button>
      </div>
    </section>
  );
}