import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <div className="bg-gray-100">
{/* ================= HERO SECTION ================= */}
<section
  className="relative py-30 text-center bg-cover bg-center"
  style={{ backgroundImage: "url('/images/Network Cabinet/Network cabinet cabling and Labellind/d (25).jpg')" }}
>
  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/70"></div>

  {/* CONTENT */}
  <div className="relative z-10 max-w-3xl mx-auto px-6">
    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
      About <span className="text-[#FFA500]">Sentra Cord</span>
    </h1>

    <p className="text-gray-300 leading-relaxed">
      We are a trusted ICT and smart technology solutions provider helping businesses,
      institutions, and homeowners build secure, efficient, and connected environments.
    </p>

    {/* CTA BUTTONS */}
    <div className="flex justify-center gap-4 mt-8 flex-wrap">
      <Link
        to="/contact"
        className="bg-[#FFA500] text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400"
      >
        Request a Quote
      </Link>

      <a
        href="https://wa.me/254798467717"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-600 px-6 py-3 rounded-full font-semibold hover:bg-green-500"
      >
        WhatsApp Us
      </a>
    </div>
  </div>
</section>
      {/* ================= MAIN SECTION ================= */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 ">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-2xl font-bold text-[#008000] mb-4">
            Our Story
          </h2>

          <p className="text-gray-600 mb-6">
            Sentra Cord was established to bridge the gap between technology and
            practical everyday use. We identified a growing demand for dependable
            ICT systems that are reliable, secure, and easy to manage.
          </p>

          <p className="text-gray-600 mb-6">
            Over time, we have built a strong reputation for delivering high-quality
            smart technology solutions tailored to meet the unique needs of each client.
          </p>

          <h3 className="font-semibold mb-3">What sets us apart:</h3>

          <ul className="space-y-2 text-gray-600">
            <li>✔ Solution-Oriented Approach</li>
            <li>✔ Reliability & Performance</li>
            <li>✔ Professional Execution</li>
            <li>✔ Client-Centered Service</li>
            <li>✔ End-to-End Delivery</li>
          </ul>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg h-100">
          <img
            src="/images/Network Cabinet/Network cabinet cabling and Labellind/d (10).jpg"
            alt="Technology"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0  flex flex-col justify-end p-6 text-white">
            <h3 className="text-xl font-bold">
              Smart Technology Solutions
            </h3>
            <p className="text-sm mb-3">
              Empowering businesses and homes with ICT systems.
            </p>

            <Link
         to="/services"
         className="inline-block border border-white px-4 py-2 rounded-full text-sm hover:bg-white hover:text-black transition"
           >
        Explore Solutions →
         </Link>
          </div>
        </div>

      </section>

      {/* ================= MISSION, VISION & VALUES ================= */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 pb-12">

        {/* MISSION */}
        <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-[#008000] mb-3">
            Mission
          </h3>
          <p className="text-gray-600">
            To design and deliver reliable, secure, and scalable ICT and smart
            technology solutions that enhance efficiency, connectivity, and safety.
          </p>
        </div>

        {/* VISION */}
        <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-blue-700 mb-3">
            Vision
          </h3>
          <p className="text-gray-600">
            To become a leading provider of ICT and smart technology solutions across Africa,
            recognized for innovation, reliability, and excellence.
          </p>
        </div>

        {/* CORE VALUES */}
        <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-[#FFA500] mb-4">
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
      <section className="bg-linear-to-r from-black via-gray-900 to-black text-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          {/* TEXT */}
          <div>
            <h2 className="text-3xl font-bold mb-6 ">
              Why Clients Trust <span className="text-[#FFA500]">Sentra Cord</span>
            </h2>

            <ul className="space-y-3 text-gray-300">
              <li>✔ Experienced in ICT and smart technology solutions in Kenya</li>
              <li>✔ Proven delivery across residential and commercial projects</li>
              <li>✔ Skilled and professional technical team</li>
              <li>✔ Reliable system support and maintenance</li>
              <li>✔ Focus on security, performance, and scalability  </li>
            </ul>
          </div>

          {/* IMAGE */}
          <img
            src="/images/Camera Mounting/Camera Mounting Hikv/d (4).jpg"
            className="rounded-xl shadow-lg"
          />

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-linear-to-r from-black via-gray-900 to-black text-white text-center py-16 px-6 mt-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            Ready to Upgrade Your <span className="text-[#FFA500]">ICT Systems?</span>
          </h2>

          <p className="text-white mb-8 text-lg">
            Let Sentra Cord help you build a secure, connected environment.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/contact"
              className="bg-black text-yellow-400 px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
            >
              Contact Us
            </Link>

            <a
              href="https://wa.me/254798467717"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#008000] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
            >
              Call / WhatsApp Now
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}