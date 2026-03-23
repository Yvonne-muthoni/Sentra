import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import img1 from "/images/img/new-1.jpg";
import img2 from "/images/img/new-2.jpg";
import img3 from "/images/img/new-3.jpg";
import img4 from "/images/img/new-4.jpg";
import img5 from "/images/img/new-5.jpg";

const PER_PAGE = 3;

const services = [
  {
    image: img1,
    title: "Network Infrastructure & Connectivity",
    shortDesc:
      "We design and implement secure, high-performance wired and wireless networks.",
    includes: [
      "LAN & structured cabling",
      "Wi-Fi deployment & optimization",
      "Router, firewall & switch configuration",
      "Network performance assessment",
      "Secure internet access setup",
    ],
    outcome: "Stable connectivity, reduced downtime, improved productivity.",
  },
  {
    image: img2,
    title: "IT Support & Systems Management",
    shortDesc:
      "Structured technical support to keep systems running efficiently and reliably.",
    includes: [
      "Troubleshooting & fault resolution",
      "Software installation & configuration",
      "Email & user account setup",
      "Remote and on-site support",
      "Preventive maintenance",
    ],
    outcome: "Minimal disruptions and dependable system performance.",
  },
  {
    image: img3,
    title: "Smart Technology & Security Systems",
    shortDesc:
      "Intelligent systems that enhance security, control, and visibility.",
    includes: [
      "CCTV installation & configuration",
      "Access control systems",
      "Smart home & office automation",
      "Surveillance system integration",
      "User training & handover",
    ],
    outcome: "Enhanced security, monitoring, and operational control.",
  },
  {
    image: img4,
    title: "ICT Consulting & Advisory",
    shortDesc:
      "Guidance to align technology decisions with operational goals.",
    includes: [
      "ICT needs assessment",
      "Infrastructure planning",
      "Technology upgrade strategies",
      "Cost-effective solution recommendations",
    ],
    outcome: "Practical, scalable technology investments.",
  },
  {
    image: img5,
    title: "Systems Installation & Integration",
    shortDesc:
      "Professional deployment and integration of hardware and software systems.",
    includes: [
      "Hardware installation",
      "System configuration",
      "Testing & commissioning",
      "Documentation & handover",
    ],
    outcome: "Properly implemented systems that work from day one.",
  },
];

export default function Services() {
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(services.length / PER_PAGE);

  const visibleServices = services.slice(
    page * PER_PAGE,
    page * PER_PAGE + PER_PAGE
  );

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-10xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold text-[#008000] mt-6">
          Our Core Services
        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto mb-14">
          Sentra Cord Limited offers comprehensive ICT and smart technology services
          that strengthen digital infrastructure, streamline operations, and enable
          sustainable organizational performance.
        </p>

        {/* SERVICES GRID */}
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {visibleServices.map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 rounded-3xl p-8 shadow-lg"
              >
                <div className="mx-auto mb-6 w-48 h-36 p-1 rounded-full bg-linear-to-r from-[#008000] via-[#FFA500] to-[#0000FF]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full rounded-full object-cover bg-white"
                  />
                </div>

                <h3 className="text-lg font-semibold mb-2">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm mb-2">
                  {service.shortDesc}
                </p>

                <div className="text-left">
                  <p className="font-semibold text-sm mb-1">Includes:</p>
                  <ul className="list-disc list-inside text-sm text-gray-600">
                    {service.includes.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>

                  <p className="mt-2 text-sm text-gray-700">
                    <span className="font-semibold">Outcome:</span>{" "}
                    {service.outcome}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* APPROACH & WHY CHOOSE */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-10">
            How We Work
          </h2>

          <div className="grid md:grid-cols-2 gap-12">

            <motion.div className="bg-linear-to-br from-green-50 to-white rounded-3xl p-10 shadow-lg border-l-4 border-green-600">
              <h3 className="text-2xl font-bold text-green-600 mb-6">
                Our Approach
              </h3>

              <div className="space-y-4">
                {["Assess needs", "Design solutions", "Implement systems", "Provide support"].map(
                  (item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-7 h-7 bg-green-600 text-white rounded-full flex items-center justify-center text-sm">
                        {idx + 1}
                      </div>
                      <p>{item}</p>
                    </div>
                  )
                )}
              </div>
            </motion.div>

            <motion.div className="bg-linear-to-br from-blue-50 to-white rounded-3xl p-10 shadow-lg border-l-4 border-blue-600">
              <h3 className="text-2xl font-bold text-blue-600 mb-6">
                Why Choose Us
              </h3>

              <div className="space-y-4">
                {["Reliable solutions", "Strong support", "Clear communication", "Tailored services"].map(
                  (item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <i className="fas fa-check-circle text-blue-600"></i>
                      <p>{item}</p>
                    </div>
                  )
                )}
              </div>
            </motion.div>

          </div>
        </div>

        {/* NAVIGATION DOTS */}
        <div className="flex justify-center mt-12 space-x-3">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                page === i
                  ? "bg-[#008000] scale-125"
                  : "bg-gray-400 hover:bg-[#FFA500]"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}