import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaChevronDown } from "react-icons/fa";

export default function Contact() {
  
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  

  const faqs = [
    {
      id: 1,
      question: "Do you serve outside Nairobi?",
      answer: "Yes! We serve all counties across Kenya with professional installation and support services."
    },
    {
      id: 2,
      question: "How fast can you respond?",
      answer: "We typically respond to inquiries within 5-15 minutes during business hours and offer 24/7 WhatsApp support."
    },
    {
      id: 3,
      question: "Do you offer free quotes?",
      answer: "Yes, absolutely! We provide free consultations and detailed quotes for all projects."
    },
    {
      id: 4,
      question: "Is installation support available?",
      answer: "Yes, we provide complete installation support with ongoing maintenance and technical assistance."
    }
  ];

  const toggleFAQ = (id) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.email || !form.message) {
      setStatus("Please fill in all required fields.");
      return;
    }

    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form, "YOUR_PUBLIC_KEY")
      .then(() => {
        setStatus("Message sent successfully!");
        setForm({ name: "", phone: "", email: "", service: "", message: "" });
      })
      .catch(() => {
        setStatus("Failed to send message. Try again.");
      });
  };

  return (
    <div className="bg-black text-white">

      {/* ================= HERO ================= */}
      <section
        className="relative py-28 text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/Structured Network/Structured Network cabling/WhatsApp Image 2026-03-13 at 12.53.42.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="absolute inset-0 bg-linear-to-r from-yellow-500/10 via-transparent to-green-500/10"></div>

        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Contact <span className="text-[#FFA500]">Us</span>
          </h1>

          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            We’re here to help you secure, connect, and automate your world with reliable ICT solutions.
          </p>

          <div className="flex justify-center gap-6 mt-4 text-sm text-gray-300 flex-wrap">
            <span>✔ Fast Response</span>
            <span>✔ Free Quotes</span>
            <span>✔ Expert Support</span>
          </div>

          <div className="flex justify-center gap-4 mt-8 flex-wrap">
            <a
              href="tel:+254798467717"
              className="bg-[#FFA500] text-black px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition"
            >
              📞 Call Now: +254 798 467717
            </a>

            <a
              href="https://wa.me/254798467717"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition"
            >
              💬 Chat on WhatsApp
            </a>
          </div>

          <p className="text-gray-400 mt-4 text-sm">
            📍 Serving Nairobi & All of Kenya
          </p>
        </div>
      </section>

      {/* ================= MAIN ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">

        {/* FORM */}
        <form
          id="contact-form"
          onSubmit={handleSubmit}
          className="bg-white text-black p-8 rounded-2xl shadow-xl"
        >
          <h2 className="text-2xl font-bold mb-2">Send Us a Message</h2>
          <p className="text-gray-500 mb-6 text-sm">
            Fill out the form and we’ll get back to you shortly.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="bg-gray-100 border-0 p-3 rounded-lg w-full"
              placeholder="Full Name"
            />
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="bg-gray-100 border-0 p-3 rounded-lg w-full"
              placeholder="Phone Number"
            />
          </div>

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            className="bg-gray-100 border-0 p-3 rounded-lg w-full mb-4"
            placeholder="Email Address"
          />

          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className="bg-gray-100 border-0 p-3 rounded-lg w-full mb-4"
          >
            <option value="">Service Needed</option>
            <option>CCTV Installation</option>
            <option>Networking</option>
            <option>Smart Home</option>
          </select>

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            className="bg-gray-100 border-0 p-3 rounded-lg w-full mb-4"
            rows="4"
            placeholder="Project Details"
          />

          <button className="w-full bg-[#FFA500] text-black py-3 rounded font-semibold hover:opacity-90">
            Send Message
          </button>

          {status && (
            <p className="mt-3 text-sm text-green-600">{status}</p>
          )}

          <p className="text-green-600 text-sm mt-3">
            We typically reply within 5–15 minutes!
          </p>
        </form>

        {/* CONTACT INFO */}
        <div className="space-y-5">

          <h3 className="text-xl font-bold mb-2">Get in Touch</h3>

          <div className="bg-gray-900 p-5 rounded-xl flex items-center gap-4 shadow-md">
            <FaPhoneAlt className="text-green-500 text-xl" />
            <div>
              <p className="text-sm text-gray-400">Phone / Call</p>
              <p className="font-bold text-[#FFA500]">+254 798 467717</p>
              <p className="text-xs text-gray-500">Mon - Sat, 8AM - 6PM</p>
            </div>
          </div>

          <div className="bg-gray-900 p-5 rounded-xl flex items-center gap-4 shadow-md">
            <FaWhatsapp className="text-green-500 text-xl" />
            <div>
              <p className="text-sm text-gray-400">WhatsApp</p>
              <p className="font-bold text-[#FFA500]">+254 798 467717</p>
              <p className="text-xs text-gray-500">24/7 Instant Response</p>
            </div>
          </div>

          <div className="bg-gray-900 p-5 rounded-xl flex items-center gap-4 shadow-md">
            <FaEnvelope className="text-green-500 text-xl" />
            <div>
              <p className="text-sm text-gray-400">Email</p>
              <p className="font-bold text-[#FFA500]">info@sentracord.co.ke</p>
              <p className="text-xs text-gray-500">Replies within 1 hour</p>
            </div>
          </div>

          <div className="bg-gray-900 p-5 rounded-xl flex items-center gap-4 shadow-md">
            <FaMapMarkerAlt className="text-green-500 text-xl" />
            <div>
              <p className="text-sm text-gray-400">Location</p>
              <p className="font-bold text-[#FFA500]">Nairobi, Kenya</p>
              <p className="text-xs text-gray-500">Serving all counties</p>
            </div>
          </div>

          {/* BUSINESS HOURS */}
          <div className="bg-gray-900 p-5 rounded-xl mt-6 shadow-md">
            <h4 className="font-bold mb-3">Business Hours</h4>
            <p className="text-sm text-gray-400">
              Monday - Friday: <span className="text-green-400">8:00 AM - 6:00 PM</span>
            </p>
            <p className="text-sm text-gray-400">
              Saturday: <span className="text-[#FFA500]">9:00 AM - 2:00 PM</span>
            </p>
            <p className="text-sm text-gray-400">
              Sunday: <span className="text-red-400">By Appointment</span>
            </p>
          </div>

        </div>
      </section>

      {/* ================= OFFICES + FAQ ================= */}
<section className="max-w-6xl mx-auto px-6 pb-16 grid md:grid-cols-2 gap-10 items-stretch">

  {/* ================= OUR OFFICES ================= */}
  <div>
    <h2 className="text-xl font-bold mb-4">Our Offices</h2>

    <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg h-full flex flex-col">
      <iframe
        title="map"
        src="https://maps.google.com/maps?q=Nairobi&t=&z=13&ie=UTF8&iwloc=&output=embed"
        className="w-full h-64 border-0"
      ></iframe>

      <div className="p-5">
        <p className="font-bold text-[#FFA500]">Head Office - Nairobi</p>
        <p className="text-gray-400 text-sm">
          123 ICT Street, Westlands, Nairobi, Kenya
        </p>
      </div>
    </div>
  </div>

  {/* ================= FAQ ================= */}
  <div>
    <h2 className="text-xl font-bold mb-4">Quick FAQs</h2>

    <div className="space-y-4">

      <div className="bg-gray-900 p-5 rounded-xl shadow-md">
        <h4 className="font-semibold text-[#FFA500] mb-2">
          How fast do you respond?
        </h4>
        <p className="text-gray-400 text-sm">
          We typically respond within 5–15 minutes during business hours.
        </p>
      </div>

      <div className="bg-gray-900 p-5 rounded-xl shadow-md">
        <h4 className="font-semibold text-[#FFA500] mb-2">
          Do you offer free quotes?
        </h4>
        <p className="text-gray-400 text-sm">
          Yes, all our consultations and quotes are completely free.
        </p>
      </div>

      <div className="bg-gray-900 p-5 rounded-xl shadow-md">
        <h4 className="font-semibold text-[#FFA500] mb-2">
          Which areas do you serve?
        </h4>
        <p className="text-gray-400 text-sm">
          We serve Nairobi and all counties across Kenya.
        </p>
      </div>

      <div className="bg-gray-900 p-5 rounded-xl shadow-md">
        <h4 className="font-semibold text-[#FFA500] mb-2">
          What services do you offer?
        </h4>
        <p className="text-gray-400 text-sm">
          CCTV installation, networking, smart home systems, and access control solutions.
        </p>
      </div>

    </div>
  </div>

</section>

      {/* ================= CTA ================= */}
      <section className="py-20 text-center bg-[#FFA500] text-black">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Start <span className="text-black">Your Project?</span>
        </h2>

        <p className="text-black mb-8">
          Get a free consultation and quote for your ICT needs today!
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a 
            href="/contact"
            className="bg-black text-[#FFA500] px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
          >
            Request Free Quote
          </a>

          <a
            href="https://wa.me/254798467717"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
          >
            WhatsApp Us Now
          </a>
        </div>

        <div className="mt-6 text-sm text-black flex justify-center gap-6 flex-wrap">
          <span>✔ No Obligation</span>
          <span>✔ Free Consultation</span>
          <span>✔ Quick Response</span>
        </div>
      </section>

    </div>
  );
}