import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import img1 from "../assets/images/img/new-1.jpg";
import img2 from "../assets/images/img/new-2.jpg";
import img3 from "../assets/images/img/new-3.jpg";
import img4 from "../assets/images/img/new-4.jpg";
import img5 from "../assets/images/img/new-5.jpg";
const services = [
  { 
    image: img1,
    title: "ICT Infrastructure",
    desc: "Development and implementation of business systems, workflow automation and web-based platforms that streamline operations and improve decision-making. Our solutions are scalable, secure, and aligned with organizational processes." 
  },
  { 
    image: img2,
    title: "Software Solutions and Automation",
    desc: "Development and implementation of business systems, workflow automation and web-based platforms that streamline operations and improve decision-making. Our solutions are scalable, secure, and aligned with organizational processes." 
  },
  { 
    image: img3, 
    title: "Cloud Computing & Collaboration", 
    desc: "Setup, migration and management of cloud services including Microsoft 365, Google Workspace, cloud storage and secure collaboration platforms. We support flexible work environments and data accessibility." 
  },
  { 
    image: img4, 
    title: "Smart Security & IoT Solutions", 
    desc: "Deployment of smart security systems such as IP CCTV, access control, GPS tracking, alarm systems and IoT-enabled solutions for homes and businesses. Our focus is on visibility, control and risk reduction." 
  },
  { 
    image: img5, 
    title: "IT Support, Maintenance & Consultancy", 
    desc: "Ongoing ICT support through preventive maintenance, troubleshooting, cybersecurity advisory and digital transformation consultancy. We ensure system stability and long-term technology sustainability." 
  },
];

const PER_PAGE = 3;

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

        <h2 className="text-4xl font-bold text-[#008000] mb-4">
          Our Core Services
        </h2>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-14">
          Sentra Tech Limited offers comprehensive ICT and smart technology services that strengthen digital infrastructure, streamline operations, and enable sustainable organizational performance.
        </p>

        {/* Services grid */}
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
                <div className="mx-auto mb-6 w-48 h-36 p-1 rounded-[50%] bg-line from-[#008000] via-[#FFA500] to-[#0000FF]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full rounded-[50%] object-cover bg-white"
                  />
                </div>

                <h3 className="text-lg font-semibold mb-2">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Navigation dots */}
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