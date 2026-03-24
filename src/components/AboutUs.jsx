import { motion } from "framer-motion";

export default function AboutUs() {
  const aboutImage = "/images/Gallery2.jpg";

  return (
    <section id="aboutus" className="py-23 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16 text-[#008000]"
        >
          About Us
        </motion.h2>

        {/* TOP SECTION (TEXT LEFT - IMAGE RIGHT) */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

          {/* LEFT - TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <p className="text-gray-700 text-lg">
              Sentra Cord is a trusted ICT and smart technology solutions provider based in Kenya,
              dedicated to helping businesses, institutions, and homeowners build secure, efficient,
              and connected environments.
            </p>

            <p className="text-gray-700">
              We specialize in delivering reliable ICT infrastructure, security systems, and automation
              solutions tailored to modern needs. From network installation and CCTV surveillance to
              smart home systems and biometric access control, we provide end-to-end solutions designed
              for performance, security, and scalability.
            </p>

            <a
              href="#services"
              className="inline-block bg-[#FFA500] hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full shadow-md transition"
            >
              Our Services
            </a>
          </motion.div>

          {/* RIGHT - IMAGE */}
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

            <div className="absolute inset-0 bg-black/40"></div>

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

        {/* OUR STORY */}
        <section className="max-w-5xl mx-auto text-center mb-20">
          <h2 className="text-3xl font-bold mb-6 text-[#008000]">Our Story</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              Sentra Cord was established to bridge the gap between technology and practical everyday use.
              We identified a growing demand for dependable ICT systems that are not only advanced but also reliable, secure, and easy to manage.
            </p>
            <p>
              Over time, we have built a reputation for delivering high-quality smart technology solutions tailored to meet the unique needs of each client.
              Our experience spans across residential, commercial, and institutional projects, making us a trusted partner.
            </p>
            <p>
              We believe in delivering solutions that are not just functional, but also future-ready and scalable.
            </p>
          </div>
        </section>

        {/* WHAT SETS US APART */}
        <section className="max-w-5xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center 
          text-[#008000] mb-10">What Sets Us Apart</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Solution-Oriented Approach",
              "Reliability & Performance",
              "Professional Execution",
              "Client-Centered Service",
              "End-to-End Delivery",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-xl p-6 border-l-4 border-[#008000]"
              >
                ✔ {item}
              </div>
            ))}
          </div>
        </section>

        {/* CORE VALUES */}
        <section className="max-w-5xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center text-[#008000] mb-10">Our Core Values</h2>

          <div className="grid md:grid-cols-2 gap-8 text-gray-700">
            <div>
              <h3 className="font-semibold text-lg">Integrity</h3>
              <p>We operate with honesty, transparency, and accountability.</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Excellence</h3>
              <p>We deliver high-quality solutions with precision and professionalism.</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Innovation</h3>
              <p>We leverage modern technology to provide smart and future-ready solutions.</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Customer Commitment</h3>
              <p>We prioritize clients through reliable systems and ongoing support.</p>
            </div>
          </div>
        </section>

        {/* WHY TRUST US */}
        <section className="max-w-5xl mx-auto text-center mb-20">
          <h2 className="text-3xl font-bold mb-8 text-[#008000]">Why Clients Trust Us</h2>
          <ul className="space-y-2 text-gray-700">
            <li>✔ Experienced in ICT and smart technology solutions in Kenya</li>
            <li>✔ Proven delivery across residential and commercial projects</li>
            <li>✔ Skilled and professional technical team</li>
            <li>✔ Reliable system support and maintenance</li>
            <li>✔ Focus on security, performance, and scalability</li>
          </ul>
        </section>

        {/* MISSION & VISION */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-10 text-[#008000]">Our Purpose</h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white rounded-3xl shadow-lg p-8 border-t-4 border-t-[#008000]">
              <h3 className="text-xl font-bold text-[#008000] mb-3">Mission</h3>
              <p className="text-gray-700">
                To design and deliver reliable, secure, and scalable ICT and smart technology solutions
                that enhance efficiency, connectivity, and safety for our clients.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 border-t-4 border-blue-600">
              <h3 className="text-xl font-bold text-blue-600 mb-3">Vision</h3>
              <p className="text-gray-700">
                To become a leading provider of ICT and smart technology solutions across Africa,
                recognized for innovation, reliability, and excellence.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <section className="bg-[#008000] text-white rounded-3xl p-10 text-center mb-20">
          <h2 className="text-3xl font-bold mb-4">
            Let’s Build Your Smart Technology Solution
          </h2>

          <p className="mb-6">
            Looking for CCTV installation in Nairobi, network setup, or smart home automation?
            Sentra Cord is ready to deliver reliable and professional ICT solutions tailored to your needs.
          </p>

          <div className="flex justify-center gap-4">
            <a href="#contact" className="bg-white text-[#008000] px-6 py-3 rounded-xl font-semibold">
              Contact Us
            </a>

            <a href="#projects" className="border border-white px-6 py-3 rounded-xl font-semibold">
              View Our Projects
            </a>
          </div>
        </section>

        {/* SEO BOOST */}
        <section className="text-gray-500 text-sm text-center max-w-4xl mx-auto">
          <p>
            Sentra Cord is a trusted ICT company in Kenya offering professional services including CCTV installation in Nairobi,
            network installation, structured cabling, smart home automation, and biometric access control systems.
            We provide reliable ICT solutions for businesses, homes, and institutions across Kenya, ensuring security,
            connectivity, and efficiency.
          </p>
        </section>

      </div>
    </section>
  );
}