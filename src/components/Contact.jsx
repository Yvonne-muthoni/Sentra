import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();
      alert(data.success || "Message sent!");

      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      alert("Failed to send message");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

        {/* LEFT — Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-[#008000]">Contact Us</h2>

          <p className="text-gray-600">
            We are available to discuss your ICT needs, project requirements, or support inquiries.
          </p>

          <div className="space-y-4 text-gray-700">

            <a
              href="https://wa.me/254700000000"
              className="flex items-center gap-3 hover:text-green-600"
            >
              <i className="fa-brands fa-whatsapp text-green-500 text-xl"></i>
              WhatsApp 24/7 Support
            </a>

            <a
              href="mailto:info@sentratechltd.com"
              className="flex items-center gap-3 hover:text-green-600"
            >
              <i className="fa-solid fa-envelope text-[#008000]"></i>
              info@sentratechltd.com
            </a>

            <p className="flex items-center gap-3">
              <i className="fa-solid fa-location-dot text-red-500"></i>
              Nairobi, Kenya
            </p>

            <a
              href="tel:+254700000000"
              className="flex items-center gap-3 hover:text-blue-600"
            >
              <i className="fa-solid fa-phone text-blue-500"></i>
              +254 700 000 000
            </a>

            <p className="flex items-center gap-3">
              <i className="fa-solid fa-clock text-orange-500"></i>
              Mon–Fri: 8AM–5PM | Sat: 9AM–1PM
            </p>

          </div>
        </motion.div>

        {/* RIGHT — Real API Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white p-8 rounded-3xl shadow-xl space-y-4"
        >
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
      </div>

     
      {/* WHATSAPP FLOATING BUTTON */}
      <a
        href="https://wa.me/254700000000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition z-50"
      >
        <i className="fa-brands fa-whatsapp text-2xl"></i>
      </a>
    </section>
  );
}