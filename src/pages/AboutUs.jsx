import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <div className="bg-gray-100">

      {/* ================= HERO SECTION ================= */}
      <section
        className="relative py-22 text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/Network Cabinet/Network cabinet cabling and Labellind/d (25).jpg')",
        }}
      >
        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            About <span className="text-[#FFA500]">Sentra Cord</span>
          </h1>

          <p className="text-gray-300 leading-relaxed">
            We are a trusted ICT and smart technology solutions provider helping
            businesses, institutions, and homeowners build secure, efficient,
            and connected environments.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex justify-center gap-4 mt-8 flex-wrap">
            <Link
              to="/contact"
              className="bg-[#FFA500] text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition"
            >
              Request a Quote
            </Link>

            <a
              href="https://wa.me/254798467717"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-500 transition"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* ================= MAIN SECTION ================= */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-[#008000] mb-4">
            Our Story
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Sentra Cord was established to bridge the gap between technology and
            practical everyday use. We identified a growing demand for dependable
            ICT systems that are reliable, secure, and easy to manage.
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Over time, we have built a strong reputation for delivering
            high-quality smart technology solutions tailored to meet the unique
            needs of each client.
          </p>

          <h3 className="font-semibold mb-4 text-lg">
            What Sets Us Apart
          </h3>

          <ul className="space-y-3 text-gray-600">
            <li>✔ Solution-Oriented Approach</li>
            <li>✔ Reliability & Performance</li>
            <li>✔ Professional Execution</li>
            <li>✔ Client-Centered Service</li>
            <li>✔ End-to-End Delivery</li>
          </ul>
        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden shadow-xl h-[420px]"
        >
          <img
            src="/images/Network Cabinet/Network cabinet cabling and Labellind/d (10).jpg"
            alt="Technology"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 text-white">
            <h3 className="text-2xl font-bold mb-2">
              Smart Technology Solutions
            </h3>

            <p className="text-sm mb-4">
              Empowering businesses and homes with modern ICT systems.
            </p>

            <Link
              to="/services"
              className="inline-block border border-white px-4 py-2 rounded-full text-sm hover:bg-white hover:text-black transition w-fit"
            >
              Explore Solutions →
            </Link>
          </div>
        </motion.div>

      </section>

      {/* ================= MISSION, VISION & VALUES ================= */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 pb-16">

        {/* MISSION */}
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition">
          <h3 className="text-2xl font-bold text-[#008000] mb-4">
            Mission
          </h3>

          <p className="text-gray-600 leading-relaxed">
            To design and deliver reliable, secure, and scalable ICT and smart
            technology solutions that enhance efficiency, connectivity, and safety.
          </p>
        </div>

        {/* VISION */}
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition">
          <h3 className="text-2xl font-bold text-blue-700 mb-4">
            Vision
          </h3>

          <p className="text-gray-600 leading-relaxed">
            To become a leading provider of ICT and smart technology solutions
            across Africa, recognized for innovation, reliability, and excellence.
          </p>
        </div>

        {/* CORE VALUES */}
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition">
          <h3 className="text-2xl font-bold text-[#FFA500] mb-6">
            Our Core Values
          </h3>

          <ul className="space-y-4 text-gray-600">

            <li className="flex items-start gap-3">
              <span className="text-[#008000] text-xl">🛡️</span>
              <div>
                <b>Integrity</b> – We operate with honesty and accountability.
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-yellow-500 text-xl">⭐</span>
              <div>
                <b>Excellence</b> – We deliver high-quality solutions.
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-blue-700 text-xl">💡</span>
              <div>
                <b>Innovation</b> – We leverage modern technology.
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-[#008000] text-xl">🤝</span>
              <div>
                <b>Customer Commitment</b> – We prioritize client satisfaction.
              </div>
            </li>

          </ul>
        </div>

      </section>

      {/* ================= WHY TRUST US ================= */}
      <section className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          {/* TEXT */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Why Clients Trust{" "}
              <span className="text-[#FFA500]">Sentra Cord</span>
            </h2>

            <ul className="space-y-4 text-gray-300">
              <li>✔ Experienced in ICT and smart technology solutions in Kenya</li>
              <li>✔ Proven delivery across residential and commercial projects</li>
              <li>✔ Skilled and professional technical team</li>
              <li>✔ Reliable system support and maintenance</li>
              <li>✔ Focus on security, performance, and scalability</li>
            </ul>
          </div>

          {/* IMAGE */}
          <img
            src="/images/Camera Mounting/Camera Mounting Hikv/d (4).jpg"
            alt="Clients Trust"
            className="rounded-2xl shadow-xl"
          />

        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto">

          {/* HEADING */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">
              What Our{" "}
              <span className="text-[#FFA500]">Clients Say</span>
            </h2>

            <p className="text-gray-600 mt-3">
              Trusted by businesses, institutions, and homeowners across Kenya.
            </p>
          </div>

          {/* TESTIMONIAL CARDS */}
          <div className="grid md:grid-cols-3 gap-8">

            {/* CARD 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition">
              <div className="text-[#FFA500] text-3xl mb-4">★★★★★</div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Sentra Cord delivered our CCTV and networking project
                professionally and on time. Their team was highly skilled and
                very supportive.
              </p>

              <div>
                <h4 className="font-bold text-[#008000]">
                  James Mwangi
                </h4>

                <p className="text-sm text-gray-500">
                  Business Owner
                </p>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition">
              <div className="text-[#FFA500] text-3xl mb-4">★★★★★</div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Their smart security solutions helped improve safety in our
                offices. Excellent workmanship and reliable support.
              </p>

              <div>
                <h4 className="font-bold text-[#008000]">
                  Faith Wanjiku
                </h4>

                <p className="text-sm text-gray-500">
                  Operations Manager
                </p>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition">
              <div className="text-[#FFA500] text-3xl mb-4">★★★★★</div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                We highly recommend Sentra Cord for ICT installations. Their
                attention to detail and professionalism stood out throughout
                the project.
              </p>

              <div>
                <h4 className="font-bold text-[#008000]">
                  Brian Kiptoo
                </h4>

                <p className="text-sm text-gray-500">
                  Facility Administrator
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-gradient-to-r from-black via-gray-900 to-black text-white text-center py-16 px-6">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Upgrade Your{" "}
            <span className="text-[#FFA500]">ICT Systems?</span>
          </h2>

          <p className="text-white mb-8 text-lg">
            Let Sentra Cord help you build a secure and connected environment.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">

            <Link
              to="/contact"
              className="bg-[#FFA500] text-black px-8 py-3 rounded-full font-semibold hover:scale-105 hover:bg-yellow-400 transition"
            >
              Contact Us
            </Link>

            <a
              href="https://wa.me/254798467717"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#008000] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 hover:bg-green-600 transition"
            >
              Call / WhatsApp Now
            </a>

          </div>
        </div>
      </section>

    </div>
  );
}