import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/254798467717"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition duration-300 flex items-center justify-center"
      title="Chat on WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
