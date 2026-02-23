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
      "Our Online Team at Sentra Cord offers dependable technical support through proactive maintenance, remote assistance, and onsite services. We prioritize system uptime, fast issue resolution, and long-term reliability.",
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

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-700 text-base lg:text-lg mb-8 text-center max-w-3xl mx-auto"
        >
          Sentra Cord is a technology solutions provider delivering reliable, practical, and secure ICT and smart technology services for businesses, organizations, and homes.
We design, implement, and support systems that strengthen connectivity, improve operational efficiency, and enhance security. Our solutions are built around real-world needs simple to use, scalable, and aligned with long-term objectives.
        </motion.p>

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

        {/* Our Approach & Why Choose Sentra Tech Sections */}
        <div className="mt-20 grid md:grid-cols-2 gap-12">
          {/* Our Approach */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-linear-to-br from-green-50 to-white rounded-3xl p-10 shadow-lg border-l-4 border-[#008000]"
          >
            <h3 className="text-3xl font-bold text-[#008000] mb-8">Our Approach</h3>
            <p className="text-gray-700 mb-8 leading-relaxed">
              We work closely with our clients to deliver practical, scalable technology solutions.
            </p>
            
            <div className="space-y-5">
              {[
                "Assess current technology needs",
                "Design practical and scalable solutions",
                "Implement systems professionally",
                "Provide ongoing support and guidance",
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="shrink-0 w-8 h-8 bg-[#008000] text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {idx + 1}
                  </div>
                  <p className="text-gray-700 pt-1">{item}</p>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-700 mt-8 pt-8 border-t border-green-200 italic"
            >
              Our solutions are built with <span className="font-semibold text-[#008000]">reliability, security, and long-term usability</span> in mind.
            </motion.p>
          </motion.div>

          {/* Why Choose Sentra Cord */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-linear-to-br from-blue-50 to-white rounded-3xl p-10 shadow-lg border-l-4 border-blue-600"
          >
            <h3 className="text-3xl font-bold text-blue-600 mb-8">Why Choose Sentra Cord</h3>
            
            <div className="space-y-5">
              {[
                { icon: "fa-check-circle", text: "Practical, no-nonsense technology solutions" },
                { icon: "fa-shield-alt", text: "Strong focus on reliability and support" },
                { icon: "fa-comments", text: "Clear communication and honest advice" },
                { icon: "fa-puzzle-piece", text: "Solutions tailored to your needs, not generic packages" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <i className={`fas ${item.icon} text-xl text-blue-600 shrink-0 mt-1`}></i>
                  <p className="text-gray-700">{item.text}</p>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-700 mt-8 pt-8 border-t border-blue-200 italic"
            >
              We are committed to building <span className="font-semibold text-blue-600">long-term partnerships</span> based on trust, performance, and value.
            </motion.p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
