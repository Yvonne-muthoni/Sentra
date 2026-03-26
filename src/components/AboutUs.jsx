import { motion } from "framer-motion";
import { useState } from "react";

export default function AboutUs() {
  const aboutImage = "/images/Gallery2.jpg";
  const [activeTab, setActiveTab] = useState("mission");

  return (
    <section id="aboutus" className="py-16 bg-blue-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-4 text-blue-600"
        >
          About Us
        </motion.h2>

        {/* INTRO */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-700 text-medium text-center max-w-4xl mx-auto mb-10"
        >
          Sentra Cord is a trusted ICT and smart technology solutions provider based in Kenya,
          dedicated to helping businesses, institutions, and homeowners build secure, efficient,
          and connected environments.
        </motion.p>

        {/* OUR STORY SECTION */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-5"
            >
              <h2 className="text-3xl font-bold text-[#008000]">
                Our Story
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Sentra Cord was established to bridge the gap between technology and practical everyday use.
                We identified a growing demand for dependable ICT systems that are reliable, secure, and easy to manage.
                Over time, we have built a strong reputation for delivering high-quality smart technology solutions
                across residential, commercial, and institutional projects.
                We believe in delivering solutions that are functional, future-ready, and scalable.
              </p>

              {/* WHAT SETS US APART */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="ml-6"
              >
                <h3 className="font-semibold text-lg mb-2">
                  What sets us apart:
                </h3>

                <ul className="space-y-1 text-gray-700">
                  <li>✔ Solution-Oriented Approach</li>
                  <li>✔ Reliability & Performance</li>
                  <li>✔ Professional Execution</li>
                  <li>✔ Client-Centered Service</li>
                  <li>✔ End-to-End Delivery</li>
                </ul>
              </motion.div>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative w-full group overflow-hidden rounded-2xl shadow-xl"
            >
              <img
                src={aboutImage}
                alt="About Sentra Cord"
                className="w-full h-80 object-cover transform group-hover:scale-105 transition duration-700"
              />

              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"></div>

              <div className="absolute inset-0 flex items-end justify-between p-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <h3 className="text-white text-2xl font-bold mb-2">
                    Smart Technology Solutions
                  </h3>
                  <p className="text-gray-200 text-sm max-w-xs">
                    Empowering businesses and homes with secure ICT systems.
                  </p>
                </motion.div>

                <motion.a
                  href="#services"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="border border-white text-white px-5 py-2 rounded-full hover:bg-white hover:text-black transition duration-300"
                >
                  Our Services
                </motion.a>

              </div>
            </motion.div>
          </div>
        </div>

        {/* THREE COLUMN SECTION */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* MISSION & VISION */}
          <div className="bg-blue-50 shadow-lg rounded-2xl p-6">
            <div className="flex gap-3 mb-3 justify-center">
              <button
                onClick={() => setActiveTab("mission")}
                className={`px-4 py-1 rounded-full text-sm font-semibold ${
                  activeTab === "mission"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                Mission
              </button>

              <button
                onClick={() => setActiveTab("vision")}
                className={`px-4 py-1 rounded-full text-sm font-semibold ${
                  activeTab === "vision"
                    ? "bg-[#008000]  text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                Vision
              </button>
            </div>

            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="min-h-25"
            >
              {activeTab === "mission" && (
                <>
                  <h2 className="text-2xl font-bold text-blue-600 mb-2">
                    Mission
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    To design and deliver reliable, secure, and scalable ICT and smart technology solutions
                    that enhance efficiency, connectivity, and safety for our clients.
                  </p>
                </>
              )}

              {activeTab === "vision" && (
                <>
                  <h2 className="text-2xl font-bold text-[#008000]  mb-2">
                    Vision
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    To become a leading provider of ICT and smart technology solutions across Africa,
                    recognized for innovation, reliability, and excellence.
                  </p>
                </>
              )}
            </motion.div>
          </div>

          {/* CORE VALUES */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-blue-50 shadow-lg rounded-2xl p-6"
          >
            <h2 className="text-2xl font-bold text-[#FFA500] mb-3">
              Our Core Values
            </h2>

            <ul className="space-y-4 text-gray-700 text-sm">
              <li>✔ Integrity – We operate with honesty and accountability.</li>
              <li>✔ Excellence – We deliver high-quality solutions.</li>
              <li>✔ Innovation – We provide smart and modern solutions.</li>
              <li>✔ Customer Commitment – We prioritize client satisfaction.</li>
            </ul>
          </motion.div>

          {/* WHY TRUST US */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-blue-50 shadow-lg rounded-2xl p-6"
          >
            <h2 className="text-2xl font-bold text-[#FFA500] mb-3">
              Why Clients Trust Us
            </h2>

            <ul className="space-y-4 text-gray-700 text-sm">
              <li>✔ Experienced in ICT and smart technology solutions.</li>
              <li>✔ Proven delivery across residential and commercial projects.</li>
              <li>✔ Skilled and professional technical team.</li>
              <li>✔ Reliable system support and maintenance.</li>
              <li>✔ Focus on security, performance, and scalability.</li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}