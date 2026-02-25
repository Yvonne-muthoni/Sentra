import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  return (
    <section
      id="contact"
      className="py-24 bg linear from-white to-gray-50"
    >

      {/* Header */}
      <div className="text-center mb-16 px-6">

        <h2 className="text-4xl lg:text-5xl font-bold text-[#008000] mb-4">
          Contact us
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto">
          Tell us what you need and our team will provide a tailored solution
          to support your business, organization, or home.
        </p>

      </div>


      {/* Main Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6">


        {/* LEFT — FORM */}
        <motion.form
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 rounded-3xl shadow-xl space-y-5"
        >

          <div>

            <h3 className="text-2xl font-semibold mb-2">
              Request a Quote
            </h3>

            <p className="text-gray-500 text-sm">
              We usually respond within 24 hours.
            </p>

          </div>


          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-[#008000]"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />


          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-[#008000]"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />


          {/* Service Dropdown */}
          <select
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-[#008000]"
            value={service}
            onChange={(e)=>setService(e.target.value)}
          >

            <option>Select Service</option>

            <option>Network Installation</option>

            <option>CCTV Installation</option>

            <option>ICT Support</option>

            <option>System Administration</option>

            <option>Other</option>

          </select>



          <textarea
            rows="4"
            placeholder="Tell us about your project..."
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-[#008000]"
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
          />



          <button
            className="w-full bg-[#008000] text-white py-3 rounded-xl hover:bg-green-700 transition font-medium"
          >

            Send Request

          </button>


        </motion.form>



        {/* RIGHT — CONTACT INFO */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >


          <div>

            <h3 className="text-2xl font-semibold mb-4">
              Contact Information
            </h3>

            <p className="text-gray-600">
              Reach out directly or use the form.
            </p>

          </div>



          {/* Phone */}
          <a
            href="tel:+254798467717"
            className="flex items-center gap-4 p-4 bg-white rounded-xl shadow hover:shadow-lg transition"
          >

            <i className="fa-solid fa-phone text-blue-500 text-xl"></i>

            <div>

              <p className="font-medium">Call Us</p>

              <p className="text-gray-500 text-sm">
                +254 798 467 717
              </p>

            </div>

          </a>



          {/* WhatsApp */}
          <a
            href="https://wa.me/254798467717"
            target="_blank"
            className="flex items-center gap-4 p-4 bg-white rounded-xl shadow hover:shadow-lg transition"
          >

            <i className="fa-brands fa-whatsapp text-green-500 text-xl"></i>

            <div>

              <p className="font-medium">
                WhatsApp
              </p>

              <p className="text-gray-500 text-sm">
                Chat with us
              </p>

            </div>

          </a>



          {/* Email */}
          <a
            href="mailto:info@sentracord.co.ke"
            className="flex items-center gap-4 p-4 bg-white rounded-xl shadow hover:shadow-lg transition"
          >

            <i className="fa-solid fa-envelope text-[#008000] text-xl"></i>

            <div>

              <p className="font-medium">
                Email
              </p>

              <p className="text-gray-500 text-sm">
                info@sentracord.co.ke
              </p>

            </div>

          </a>



          {/* Location */}
          <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow">

            <i className="fa-solid fa-location-dot text-red-500 text-xl"></i>

            <div>

              <p className="font-medium">
                Location
              </p>

              <p className="text-gray-500 text-sm">
                Nairobi, Kenya
              </p>

            </div>

          </div>


        </motion.div>


      </div>
<div className="fixed bottom-8 right-8 z-50 flex flex-col items-center">

  <AnimatePresence>

    {chatOpen && (

      <>

        <motion.a
          href="https://linkedin.com"
          target="_blank"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="w-12 h-12 mb-3 rounded-full bg-blue-700 flex items-center justify-center shadow-lg"
        >
          <i className="fa-brands fa-linkedin-in text-white"></i>
        </motion.a>


        <motion.a
          href="https://twitter.com"
          target="_blank"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="w-12 h-12 mb-3 rounded-full bg-black flex items-center justify-center shadow-lg"
        >
          <i className="fa-brands fa-x-twitter text-white"></i>
        </motion.a>


        <motion.a
          href="https://facebook.com"
          target="_blank"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="w-12 h-12 mb-3 rounded-full bg-blue-600 flex items-center justify-center shadow-lg"
        >
          <i className="fa-brands fa-facebook-f text-white"></i>
        </motion.a>


        <motion.a
          href="https://tiktok.com"
          target="_blank"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="w-12 h-12 mb-3 rounded-full bg-black flex items-center justify-center shadow-lg"
        >
          <i className="fa-brands fa-tiktok text-white"></i>
        </motion.a>


        <motion.a
          href="https://instagram.com"
          target="_blank"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="w-12 h-12 mb-3 rounded-full bg-pink-600 flex items-center justify-center shadow-lg"
        >
          <i className="fa-brands fa-instagram text-white"></i>
        </motion.a>

      </>

    )}

  </AnimatePresence>
  {/* MAIN BUTTON */}
  <button
    onClick={() => setChatOpen(!chatOpen)}
    className="w-16 h-16 bg-[#008000] rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 transition"
  >

    <i className="fa-solid fa-comments text-xl"></i>

  </button>

</div>

    </section>
  );
}