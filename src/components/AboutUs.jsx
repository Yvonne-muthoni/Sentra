import { motion } from "framer-motion";

export default function AboutUs() {
  const aboutImage = "/images/Gallery2.jpg";

  return (
    <section id="aboutus" className="py-20 bg-gray-50">
      <div className="max-w-350 mx-auto px-6">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-6 text-blue-600"
        >
          About Us
        </motion.h2>

        {/* INTRO */}
        <p className="text-gray-700 text-medium text-center max-w-4xl mx-auto mb-16">
          Sentra Cord is a trusted ICT and smart technology solutions provider based in Kenya,
          dedicated to helping businesses, institutions, and homeowners build secure, efficient,
          and connected environments.
        </p>
{/* OUR STORY SECTION */}
<div className="grid md:grid-cols-2 gap-12 items-center mt-20">

  {/* LEFT - STORY */}
  <motion.div
    initial={{ opacity: 0, x: -40 }}
    whileInView={{ opacity: 1, x: 0 }}
    className="space-y-6"
  >
    <h2 className="text-3xl font-bold text-blue-600">
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
    <div>
      <h3 className="font-semibold text-lg mb-3">
        What sets us apart:
      </h3>

      <ul className="space-y-2 text-gray-700">
        <li>✔ Solution-Oriented Approach</li>
        <li>✔ Reliability & Performance</li>
        <li>✔ Professional Execution</li>
        <li>✔ Client-Centered Service</li>
        <li>✔ End-to-End Delivery</li>
      </ul>
    </div>
  </motion.div>
          {/* RIGHT - IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative w-full group overflow-hidden rounded-2xl shadow-xl"
          >
            <img
              src={aboutImage}
              alt="About Sentra Cord"
              className="w-full h-105 object-cover transform group-hover:scale-110 transition duration-700"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"></div>

            {/* CONTENT INSIDE IMAGE */}
            <div className="absolute inset-0 flex items-end justify-between p-6">

              {/* LEFT TEXT (ANIMATED) */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-white text-2xl font-bold mb-2">
                  Smart Technology Solutions
                </h3>
                <p className="text-gray-200 text-sm max-w-xs">
                  Empowering businesses and homes with secure ICT systems.
                </p>
              </motion.div>

              {/* RIGHT BUTTON (ANIMATED) */}
              <motion.a
                href="#services"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition duration-300"
              >
                Our Services
              </motion.a>

            </div>
          </motion.div>

        </div>

        {/* THREE COLUMN SECTION */}
        <div className="grid md:grid-cols-3 gap-10 items-start mb-20">

          

          {/* CORE VALUES */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-2xl font-bold text-blue-600 mt-8">
              Our Core Values
            </h2>

            <div className="space-y-4">
              {[
                "Integrity – We operate with honesty and accountability.",
                "Excellence – We deliver high-quality solutions.",
                "Innovation – We provide smart and modern solutions.",
                "Customer Commitment – We prioritize client satisfaction.",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start bg-white shadow-md rounded-xl p-4 border-l-4 border-[#008000]"
                >
                  ✔ <span className="ml-2">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
      {/* MISSION & VISION */}
<div className="mt-6">
  <div className="grid md:grid-cols-2 gap-10">

    {/* MISSION */}
    <div className="bg-white shadow-lg rounded-2xl p-8 border-l-4 border-blue-600 hover:shadow-xl transition duration-300">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">
        Mission
      </h2>
      <p className="text-gray-700 leading-relaxed">
        To design and deliver reliable, secure, and scalable ICT and smart technology solutions
        that enhance efficiency, connectivity, and safety for our clients.
      </p>
    </div>

    {/* VISION */}
         <div className="bg-white shadow-lg rounded-2xl p-8 border-l-4  border-green-500 hover:shadow-xl transition duration-300">
        <h2 className="text-2xl font-bold text-green-500 mb-4">
         Vision
        </h2>
         <p className="text-gray-700 leading-relaxed">
          To become a leading provider of ICT and smart technology solutions across Africa,
           recognized for innovation, reliability, and excellence.
          </p>
          </div>

        </div>
        </div>
          {/* WHY TRUST US */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-2xl font-bold text-blue-600 mt-8">
              Why Clients Trust Us
            </h2>

            <div className="space-y-4">
              {[
                "Experienced in ICT and smart technology solutions",
                "Proven delivery across residential and commercial projects",
                "Skilled and professional technical team",
                "Reliable system support and maintenance",
                "Focus on security, performance, and scalability",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start bg-white shadow-md rounded-xl p-4 border-l-4 border-[#008000]"
                >
                  ✔ <span className="ml-2">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}