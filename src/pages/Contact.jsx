import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.email || !form.message) {
      setStatus("Please fill in all required fields.");
      return;
    }

    const serviceID = "YOUR_SERVICE_ID";
    const templateID = "YOUR_TEMPLATE_ID";
    const publicKey = "YOUR_PUBLIC_KEY";

    emailjs
      .send(serviceID, templateID, form, publicKey)
      .then(() => {
        setStatus("Message sent successfully!");
        setForm({ name: "", phone: "", email: "", service: "", message: "" });
      })
      .catch(() => {
        setStatus("Failed to send message. Try again.");
      });
  };

  return (
    <div className="bg-gray-300 text-white">

      {/* HERO */}
     <section
  className="relative py-28 text-center bg-cover bg-center"
  style={{ backgroundImage: "url('/images/Structured Network/Structured Network cabling/WhatsApp Image 2026-03-13 at 12.53.42.jpeg')" }}
>
  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/70"></div>

  {/* CONTENT */}
  <div className="relative z-10">
    <h1 className="text-4xl md:text-5xl font-extrabold">
      Contact <span className="text-yellow-500">Us</span>
    </h1>

    <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
      We’re here to help you secure, connect, and automate your world.
    </p>

    <div className="flex justify-center gap-4 mt-8 flex-wrap">
      <a
        href="#contact-form"
        className="bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-400"
      >
        Request Free Quote
      </a>

      <a
        href="https://wa.me/254798467717"
        target="_blank"
        className="bg-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-500"
      >
        WhatsApp Us
      </a>
    </div>
  </div>
</section>

      {/* FORM */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">

        <form id="contact-form" onSubmit={handleSubmit} className="bg-white text-blue-500 p-8 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <input name="name" value={form.name} onChange={handleChange} className="border p-3 rounded" placeholder="Full Name" />
            <input name="phone" value={form.phone} onChange={handleChange} className="border p-3 rounded" placeholder="Phone Number" />
          </div>

          <input name="email" value={form.email} onChange={handleChange} className="border p-3 rounded w-full mb-4" placeholder="Email Address" />

          <select name="service" value={form.service} onChange={handleChange} className="border p-3 rounded w-full mb-4">
            <option value="">Service Needed</option>
            <option>CCTV Installation</option>
            <option>Networking</option>
            <option>Smart Home</option>
          </select>

          <textarea name="message" value={form.message} onChange={handleChange} className="border p-3 rounded w-full mb-4" rows="4" placeholder="Project Details" />

          <button type="submit" className="w-full bg-yellow-500 py-3 rounded font-semibold hover:bg-yellow-400">
            Send Message
          </button>

          {status && <p className="mt-3 text-sm text-green-600">{status}</p>}
        </form>

        {/* CONTACT INFO */}
        <div className="space-y-5">

          <div className="bg-gray-900 p-5 rounded-xl flex items-center gap-4">
            <FaPhoneAlt className="text-green-500" />
            <p>+254 798 467717</p>
          </div>

          <div className="bg-gray-900 p-5 rounded-xl flex items-center gap-4">
            <FaWhatsapp className="text-green-500" />
            <p>+254 798 467717</p>
          </div>

          <div className="bg-gray-900 p-5 rounded-xl flex items-center gap-4">
            <FaEnvelope className="text-green-500" />
            <p>info@sentracord.co.ke</p>
          </div>

          <div className="bg-gray-900 p-5 rounded-xl flex items-center gap-4">
            <FaMapMarkerAlt className="text-green-500" />
            <p>Nairobi, Kenya</p>
          </div>

        </div>
      </section>

    </div>
  );
}
