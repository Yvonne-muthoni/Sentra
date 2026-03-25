import { motion } from "framer-motion";

export default function AboutUs() {
  const aboutImage = "/images/Gallery2.jpg";

  return (
    <section id="aboutus" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-6 text-blue-600"
        >
          About Us
        </motion.h2>

        {/* INTRO */}
        <p className="text-gray-700 text-lg text-center max-w-4xl mx-auto mb-16">
          Sentra Cord is a trusted ICT and smart technology solutions provider based in Kenya,
          dedicated to helping businesses, institutions, and homeowners build secure, efficient,
          and connected environments.
        </p>

        {/* OUR STORY SECTION */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

          {/* LEFT - STORY */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-blue-600">
              Our Story
            </h2>

            <p className="text-gray-700">
              Sentra Cord was established to bridge the gap between technology and practical everyday use.
              We identified a growing demand for dependable ICT systems that are reliable, secure, and easy to manage.
            </p>

            <p className="text-gray-700">
              Over time, we have built a strong reputation for delivering high-quality smart technology solutions
              across residential, commercial, and institutional projects.
            </p>

            <p className="text-gray-700">
              We believe in delivering solutions that are functional, future-ready, and scalable.
            </p>
          </motion.div>

          {/* RIGHT - IMAGE WITH BUTTON */}
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
            <div className="absolute inset-0 bg-black/40"></div>

            {/* TEXT + BUTTON OVER IMAGE */}
            <div className="absolute inset-0 flex flex-col justify-end items-start p-6">
              <h3 className="text-white text-2xl font-bold mb-2">
                Smart Technology Solutions
              </h3>
              <p className="text-gray-200 text-sm mb-4">
                Empowering businesses and homes with secure ICT systems.
              </p>

              {/* 🔥 TRANSPARENT BUTTON */}
              <a
                href="#services"
                className="border border-white text-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-[#008000] transition"
              >
                Our Services
              </a>
            </div>
          </motion.div>

        </div>

        {/* THREE COLUMN SECTION */}
        <div className="grid md:grid-cols-3 gap-10 items-start mb-20">

          {/* WHAT SETS US APART */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-6">
              What Sets Us Apart
            </h2>

            <div className="space-y-4">
              {[
                "Solution-Oriented Approach",
                "Reliability & Performance",
                "Professional Execution",
                "Client-Centered Service",
                "End-to-End Delivery",
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

          {/* CORE VALUES */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-6">
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

          {/* WHY TRUST US */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-6">
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