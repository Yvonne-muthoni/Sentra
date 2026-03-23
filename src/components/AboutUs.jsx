import { motion } from "framer-motion";

const whoWeAreData = [
  {
    title: "ICT & Technology Solutions",
    icon: "fa-network-wired",
    color: "text-blue-600",
  },
  {
    title: "Reliable Technical Support",
    icon: "fa-headset",
    color: "text-green-600",
  },
  {
    title: "Security & Risk Management",
    icon: "fa-shield-halved",
    color: "text-orange-500",
  },
  {
    title: "Business & Community Impact",
    icon: "fa-chart-line",
    color: "text-blue-500",
  },
];

export default function AboutUs() {
  const aboutImage = "/images/Gallery2.jpg";

  return (
    <section id="aboutus" className="py-23 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-10 text-[#008000]"
        >
          About Us
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-gray-700 text-center max-w-3xl mx-auto mb-16"
        >
          Sentra Cord delivers reliable, practical, and secure ICT and smart technology services.
        </motion.p>

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div className="space-y-4">
            {whoWeAreData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ x: 8 }}
                className="flex items-center gap-4 bg-white shadow-md rounded-lg px-6 py-4 hover:bg-gray-50 transition"
              >
                <i className={`fas ${item.icon} text-xl ${item.color}`}></i>
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative w-full group overflow-hidden rounded-2xl shadow-xl"
          >
            <img
              src={aboutImage}
              alt="About"
              className="w-full h-105 object-cover transform group-hover:scale-110 transition duration-700"
            />

            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"></div>

            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <h3 className="text-white text-2xl font-bold mb-2">
                Smart Technology Solutions
              </h3>
              <p className="text-gray-200 text-sm">
                Empowering businesses and homes with secure ICT systems.
              </p>
            </div>
          </motion.div>
        </div>

        {/* 🔥 OUR SERVICES BUTTON */}
        <div className="mt-16 text-center">
          <a
            href="#services"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full shadow-lg transition duration-300"
          >
            Our Services
          </a>
        </div>

        {/* MISSION & VISION */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-10">
            Our Purpose
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            <motion.div className="bg-white rounded-3xl shadow-lg p-8 border-t-4 border-green-600">
              <div className="flex items-center gap-4 mb-4">
                <i className="fas fa-bullseye text-2xl text-green-600"></i>
                <h3 className="text-xl font-bold text-green-600">Mission</h3>
              </div>
              <p className="text-gray-700">
               To design, implement, and support dependable ICT and smart technology systems that improve connectivity, enhance security, and enable organizations to operate efficiently in a rapidly evolving digital environment.

              </p>
            </motion.div>

            <motion.div className="bg-white rounded-3xl shadow-lg p-8 border-t-4 border-blue-600">
              <div className="flex items-center gap-4 mb-4">
                <i className="fas fa-eye text-2xl text-blue-600"></i>
                <h3 className="text-xl font-bold text-blue-600">Vision</h3>
              </div>
              <p className="text-gray-700">
               To become a leading provider of ICT and smart technology solutions across East Africa, setting the standard for reliability, innovation, and client-focused service delivery.
              </p>
            </motion.div>

          </div>

          {/* 🔥 BUTTONS UNDER MISSION & VISION */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

            <a
              href="#contact"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transition"
            >
              Contact Us
            </a>

            <a
              href="#projects"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full shadow-md transition"
            >
              Our Projects
            </a>

          </div>
        </div>

  

      </div>
    </section>
  );
}