import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
export default function Homepage() {
  return (
    <div>
{/* ================= HERO SECTION ================= */}
      <section className="relative h-200 flex items-center justify-center text-center text-[#FFA500]">

  <img
    src="/images/Gallery5.jpg"
    alt="Hero"
    className="absolute inset-0 w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-black/70"></div>

  <div className="relative z-10 max-w-4xl px-6">
    
    {/* HEADING */}
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-2xl md:text-4xl font-bold mb-4 text-white"
    >
      We Provide <br />
      <span className="text-[#FFA500]">
        <TypeAnimation
          sequence={[
            "Smart Technology Solutions", 2000,
            "CCTV & Surveillance Systems", 2000,
            "Network & ICT Infrastructure", 2000,
            "Smart Home Automation", 2000,
          ]}
          speed={50}
          repeat={Infinity}
          cursor={true}
        />
      </span>
    </motion.h1>

    {/* DESCRIPTION */}
    <p className="text-gray-300 mb-6">
      Reliable ICT services for businesses, homes, and institutions in Kenya.
    </p>

    {/* SERVICES TAGS */}
    <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm text-gray-300">
      <span>✔ CCTV Installation</span>
      <span>✔ Network Installation</span>
      <span>✔ Smart Home</span>
      <span>✔ Access Control</span>
    </div>

    {/* BUTTONS */}
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      <Link
        to="/contact"
        className="bg-[#FFA500] text-black px-6 py-3 rounded-full font-semibold hover:opacity-90 transition inline-block"
      >
        Request a Free Quote
      </Link>

      <a
        href="https://wa.me/254798467717"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#008000] text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
      >
        Chat on WhatsApp
      </a>
    </div>

    {/* TRUST STATS */}
    <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
      <div className="flex items-center gap-2">
        <span className="text-green-400">✔</span>
        <span><span className="text-[#FFA500] font-bold">20+</span> Years Experience</span>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-green-400">✔</span>
        <span><span className="text-[#FFA500] font-bold">500+</span> Projects Completed</span>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-green-400">✔</span>
        <span><span className="text-[#FFA500]  font-bold">100%</span> Client Satisfaction</span>
      </div>
    </div>

  </div>
</section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* TEXT */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-primary text-[#008000]">
              About Sentra Cord
            </h2>

            <p className="text-gray-600 mb-4">
              Sentra Cord is a trusted provider of innovative ICT and smart technology solutions across Kenya.
              We deliver secure, scalable systems that enhance efficiency and control.
            </p>

            <ul className="space-y-2 text-gray-600 mb-6">
              <li><span className="text-secondary">✔</span> Solution-Oriented Approach</li>
              <li><span className="text-secondary">✔</span> Experienced ICT Professionals</li>
              <li><span className="text-secondary">✔</span> Secure & Scalable Systems</li>
              <li><span className="text-secondary">✔</span> Ongoing Support & Maintenance</li>
            </ul>

            <Link
           to="/about"
         className="bg-[#FFA500] text-black px-6 py-2 rounded-full font-semibold hover:scale-105 hover:opacity-90 transition inline-block"
        >
  Learn More About Us
</Link>
          </div>

          {/* IMAGE */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/images/Cabling/cabling/Cabling4.jpeg"
              alt="About"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-black/50 p-6 flex flex-col justify-end text-white">
              <h3 className="text-2xl font-bold">Smart Technology Solutions</h3>
              <p className="text-sm">Reliable ICT services across Kenya</p>
            </div>
          </div>

        </div>
      </section>


    {/* ================= SERVICES ================= */}
<section className="py-20 bg-linear-to-r from-black via-gray-900 to-black text-white">
  <div className="max-w-6xl mx-auto px-6 text-center">

    <h2 className="text-3xl font-bold mb-2">
      Our <span className="text-[#FFA500]">Services</span>
    </h2>

    <p className="text-gray-400 mb-12">
      Explore our ICT and smart technology solutions
    </p>

    <div className="grid md:grid-cols-3 gap-8">

      {/* CARD 1 */}
      <div className="relative rounded-2xl overflow-hidden group shadow-lg">
        <img
          src="/images/Cabling/cabling/Cabling1.jpeg"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />

        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/50 transition"></div>

        <div className="relative p-6 flex flex-col justify-end h-80 text-left">
          <div className="text-[#FFA500] mb-2">★★★★★</div>

          <h3 className="text-l font-semibold mb-2">
            Network Infrastructure and Connectivity
          </h3>

          <ul className="text-sm text-gray-300 mb-4 space-y-1">
            <li>✔ Reliable Network Setup</li>
            <li>✔ Secure Connectivity</li>
          </ul>

          <Link
            to="/services"
            className="bg-[#FFA500] text-black px-5 py-2 rounded-full font-semibold w-fit hover:scale-105 transition"
          >
            Learn More →
          </Link>
        </div>
      </div>

      {/* CARD 2 */}
      <div className="relative rounded-2xl overflow-hidden group shadow-lg">
        <img
          src="/images/Biometrics/Biometric installations access Control/d (27).jpg"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />

        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition"></div>

        <div className="relative p-6 flex flex-col justify-end h-80 text-left">
          <div className="text-[#FFA500] mb-2">★★★★★</div>

          <h3 className="text-l font-semibold mb-2">
            Access Control Systems
          </h3>

          <ul className="text-sm text-gray-300 mb-4 space-y-1">
            <li>✔ CCTV Installation</li>
            <li>✔ Remote Monitoring</li>
          </ul>

          <Link
            to="/services"
            className="bg-[#FFA500] text-black px-5 py-2 rounded-full font-semibold w-fit hover:scale-105 transition"
          >
            Learn More →
          </Link>
        </div>
      </div>

      {/* CARD 3 */}
      <div className="relative rounded-2xl overflow-hidden group shadow-lg">
        <img
          src="/images/Cameras/Cameeras/Camera2.jpeg"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />

        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition"></div>

        <div className="relative p-6 flex flex-col justify-end h-80 text-left">
          <div className="text-[#FFA500] mb-2">★★★★★</div>

          <h3 className="text-l font-semibold mb-2">
            CCTV Monitoring System
          </h3>

          <ul className="text-sm text-gray-300 mb-4 space-y-1">
            <li>✔ 24/7 Monitoring</li>
            <li>✔ Advanced Surveillance</li>
          </ul>

          <Link
            to="/services"
            className="bg-[#FFA500] text-black px-5 py-2 rounded-full font-semibold w-fit hover:scale-105 transition"
          >
            Learn More →
          </Link>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* ================= PROJECTS ================= */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-2 text-primary text-[#FFA500]">
            Featured <span className="text-accent">Projects</span>
          </h2>

          <p className="text-gray-500 mb-10">
            Delivering quality ICT solutions across Kenya
          </p>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <img src="/images/Structured Network/Structured Network cabling/WhatsApp Image 2026-03-13 at 12.53.36 (1).jpeg" className="h-48 w-full object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-blue-700"> Network Cabinet Installation  </h3>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <img src="/images/Biometrics/Biometric installations access Control/d (11).jpg" className="h-48 w-full object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-[#FFA500]"> Biometric System Installation </h3>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <img src="/images/Camera Mounting/Camera Mounting Hikv/d (1).jpg" className="h-48 w-full object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-[#008000]">CCTV Installation</h3>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-4 bg-linear-to-r from-black via-gray-900 to-black text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-4">
         Ready to <span className="text-[#FFA500]">Transform</span> Your Business?
       </h3>
          <p className="text-lg mb-8">Get a free consultation and quote for your ICT solutions today.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-black text-[#FFA500] px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
            >
              Request a Free Quote
            </Link>
            <a
              href="https://wa.me/254798467717"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#008000] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
