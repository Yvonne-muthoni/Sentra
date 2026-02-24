import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("http://127.0.0.1:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({ type: "success", message: data.success });
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus({
          type: "error",
          message: data.error || "Failed to send message",
        });
      }
    } catch (err) {
      console.error(err);
      setStatus({
        type: "error",
        message: "Failed to send message",
      });
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT — Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white p-8 rounded-3xl shadow-xl space-y-4"
        >
          {status && (
            <div
              className={`p-3 rounded-lg text-white font-medium ${
                status.type === "success"
                  ? "bg-green-500"
                  : "bg-red-500"
              }`}
            >
              {status.message}
            </div>
          )}

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Your Name"
            required
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-green-500"
          />

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Your Email"
            required
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-green-500"
          />

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message"
            rows="4"
            required
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-green-500"
          />

          <button
            disabled={loading}
            className="w-full bg-[#008000] text-white py-3 rounded-xl hover:bg-green-700 transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </motion.form>

        {/* RIGHT — Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-[#008000]">
            Contact Us
          </h2>

          <p className="text-gray-600">
            We are available to discuss your ICT needs,
            project requirements, or support inquiries.
          </p>

          <div className="space-y-4 text-gray-700">

            {/* WhatsApp */}
            <a
              href="https://wa.me/254798467717"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-green-600"
            >
              <i className="fa-brands fa-whatsapp text-green-500 text-xl"></i>
              WhatsApp 24/7 Support
            </a>

            {/* Email */}
            <a
              href="mailto:sentratechlimited@gmail.com"
              className="flex items-center gap-3 hover:text-green-600"
            >
              <i className="fa-solid fa-envelope text-[#008000]"></i>
              infosentratechlimited@gmail.com
            </a>

            {/* WEBSITE GLOBE ICON ADDED HERE */}
            <a
              href="https://sentracord.co.ke"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-blue-600"
            >
              <i className="fa-solid fa-globe text-blue-500"></i>
              Sentra Cord
            </a>

            {/* Location */}
            <p className="flex items-center gap-3">
              <i className="fa-solid fa-location-dot text-red-500"></i>
              Nairobi, Kenya
            </p>

            {/* Phone */}
            <a
              href="tel:+254798467717"
              className="flex items-center gap-3 hover:text-blue-600"
            >
              <i className="fa-solid fa-phone text-blue-500"></i>
              +254 798 467 717
            </a>

            {/* Time */}
            <p className="flex items-center gap-3">
              <i className="fa-solid fa-clock text-orange-500"></i>
              Mon–Fri: 8AM–5PM | Sat: 9AM–1PM
            </p>

          </div>
        </motion.div>

      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/254798467717"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-green-500 text-white w-16 h-16 rounded-full shadow-2xl hover:scale-110 transition z-50 flex items-center justify-center"
      >
        <i className="fa-brands fa-whatsapp text-3xl"></i>
      </a>

    </section>
  );
}