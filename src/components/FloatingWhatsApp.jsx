import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/254798467717"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 md:bottom-5 md:right-5 z-50 bg-green-600 text-white p-2.5 md:p-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 flex items-center justify-center"
      title="Chat on WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}