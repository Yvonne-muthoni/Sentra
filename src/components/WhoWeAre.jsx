import { motion } from "framer-motion";

const whoWeAreData = [
  {
    title: "ICT & Technology Solutions",
    description:
      "We provide end-to-end ICT solutions including infrastructure design, networking, software systems, and cloud services. Our approach ensures technology aligns with operational goals and business continuity requirements.",
    icon: "fa-network-wired",
    color: "text-blue-600",
    border: "border-blue-600",
  },
  {
    title: "Reliable Technical Support",
    description:
      "Our Online Team at Sentra Tech offers dependable technical support through proactive maintenance, remote assistance, and onsite services. We prioritize system uptime, fast issue resolution, and long-term reliability.",
    icon: "fa-headset",
    color: "text-green-600",
    border: "border-green-600",
  },
  {
    title: "Security & Risk Management",
    description:
      "We implement secure ICT environments through network security, access controls, surveillance systems, and data protection solutions — reducing risk and enhancing resilience.",
    icon: "fa-shield-halved",
    color: "text-orange-500",
    border: "border-orange-500",
  },
  {
    title: "Business & Community Impact",
    description:
      "Beyond technology, we support organizations and communities through digital transformation and practical capacity building.",
    icon: "fa-chart-line",
    color: "text-blue-500",
    border: "border-blue-500",
  },
];

export default function WhoWeAre() {
  return (
    <section id="whoweare" className="py-23 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-14 text-[#008000]"
        >
          Who We Are
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whoWeAreData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -12, scale: 1.03 }}
              className={`bg-white rounded-2xl shadow-lg p-8 border-t-4 ${item.border} text-center`}
            >
              <i
                className={`fas ${item.icon} text-4xl mb-5 ${item.color}`}
              ></i>

              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}