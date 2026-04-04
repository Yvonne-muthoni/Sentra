import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="bg-black text-white">

      {/* HERO SECTION */}
      <section className="relative bg-linear-to-r from-black via-gray-900 to-black py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Contact <span className="text-yellow-500">Us</span>
        </h1>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          We’re here to help you secure, connect, and automate your world with reliable ICT solutions.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <button className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400">
            Call Now
          </button>
          <button className="bg-green-600 px-6 py-3 rounded-full font-semibold hover:bg-green-500">
            WhatsApp
          </button>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">

        {/* FORM */}
        <div className="bg-white text-black p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <input className="border p-2 rounded" placeholder="Full Name" />
            <input className="border p-2 rounded" placeholder="Phone Number" />
          </div>

          <input className="border p-2 rounded w-full mb-4" placeholder="Email Address" />

          <select className="border p-2 rounded w-full mb-4">
            <option>Service Needed</option>
            <option>CCTV</option>
            <option>Networking</option>
          </select>

          <textarea
            className="border p-2 rounded w-full mb-4"
            rows="4"
            placeholder="Project Details"
          />

          <button className="w-full bg-yellow-500 py-3 rounded font-semibold hover:bg-yellow-400">
            Send Message
          </button>
        </div>

        {/* CONTACT INFO */}
        <div className="space-y-6">

          <div className="bg-gray-900 p-4 rounded-lg">
            <h3 className="font-bold text-lg">Phone</h3>
            <p className="text-yellow-500">+254 700 000 000</p>
          </div>

          <div className="bg-gray-900 p-4 rounded-lg">
            <h3 className="font-bold text-lg">WhatsApp</h3>
            <p className="text-green-500">+254 700 000 000</p>
          </div>

          <div className="bg-gray-900 p-4 rounded-lg">
            <h3 className="font-bold text-lg">Email</h3>
            <p className="text-yellow-500">info@company.com</p>
          </div>

          <div className="bg-gray-900 p-4 rounded-lg">
            <h3 className="font-bold text-lg">Location</h3>
            <p>Nairobi, Kenya</p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-16 bg-linear-to-r from-gray-900 to-black">
        <h2 className="text-3xl font-bold">
          Ready to Start <span className="text-yellow-500">Your Project?</span>
        </h2>

        <div className="flex justify-center gap-4 mt-6">
          <button className="bg-yellow-500 px-6 py-3 rounded-full font-semibold hover:bg-yellow-400">
            Request Quote
          </button>
          <button className="bg-green-600 px-6 py-3 rounded-full font-semibold hover:bg-green-500">
            WhatsApp Us
          </button>
        </div>
      </section>

    </div>
  );
}
