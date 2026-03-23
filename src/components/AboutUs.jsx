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

        {/* ========================= */}
        {/* TOP SECTION (BULLETS + IMAGE) */}
        {/* ========================= */}
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

        {/* ========================= */}
        {/* MISSION & VISION */}
        {/* ========================= */}
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
                To design and deliver dependable ICT systems that improve efficiency,
                connectivity, and security.
              </p>
            </motion.div>

            <motion.div className="bg-white rounded-3xl shadow-lg p-8 border-t-4 border-blue-600">
              <div className="flex items-center gap-4 mb-4">
                <i className="fas fa-eye text-2xl text-blue-600"></i>
                <h3 className="text-xl font-bold text-blue-600">Vision</h3>
              </div>
              <p className="text-gray-700">
                To be a leading provider of smart technology solutions across Africa.
              </p>
            </motion.div>

          </div>
        </div>

        {/* ========================= */}
        {/* APPROACH & WHY CHOOSE */}
        {/* ========================= */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-10">
            How We Work
          </h2>

          <div className="grid md:grid-cols-2 gap-12">

            {/* APPROACH */}
            <motion.div className="bg-linear-to-br from-green-50 to-white rounded-3xl p-10 shadow-lg border-l-4 border-green-600">
              <h3 className="text-2xl font-bold text-green-600 mb-6">
                Our Approach
              </h3>

              <div className="space-y-4">
                {[
                  "Assess needs",
                  "Design solutions",
                  "Implement systems",
                  "Provide support",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-7 h-7 bg-green-600 text-white rounded-full flex items-center justify-center text-sm">
                      {idx + 1}
                    </div>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* WHY CHOOSE */}
            <motion.div className="bg-linear-to-br from-blue-50 to-white rounded-3xl p-10 shadow-lg border-l-4 border-blue-600">
              <h3 className="text-2xl font-bold text-blue-600 mb-6">
                Why Choose Us
              </h3>

              <div className="space-y-4">
                {[
                  "Reliable solutions",
                  "Strong support",
                  "Clear communication",
                  "Tailored services",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <i className="fas fa-check-circle text-blue-600"></i>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}