import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Smart <span className="text-accent">Technology Solutions</span>
          </h1>

          <p className="text-gray-300 mb-6">
            Reliable ICT services for businesses, homes, and institutions in Kenya.
          </p>

          {/* SERVICES TAGS */}
          <div className="flex flex-wrap justify-center gap-4 mb-6 text-sm">
            <span className="text-secondary">✔ CCTV Installation</span>
            <span className="text-secondary">✔ Network Installation</span>
            <span className="text-secondary">✔ Smart Home</span>
            <span className="text-secondary">✔ Access Control</span>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link
            to="/contact"
           className="bg-[#FFA500] text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition inline-block"
            >
             Request a Free Quote
            </Link>

            <a
        href="https://wa.me/254798467717" // 
       target="_blank"
      rel="noopener noreferrer"
       className="bg-[#008000] text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
       >
  Chat on WhatsApp
</a>
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
         className="bg-accent px-6 py-2 rounded-full font-semibold hover:scale-105 hover:opacity-90 transition inline-block"
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
      <section className="py-20 bg-gray-200 text-[#008000]">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-2">
            Our <span className="text-accent">Services</span>
          </h2>

          <p className="text-gray-400 mb-10">
            Explore our ICT and smart technology solutions
          </p>

          <div className="grid md:grid-cols-3 gap-8">

            {/* CARD */}
            <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition">
              <img src="/images/Cameras/Cameeras/Camera8.jpeg" className="h-120 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Network Infrastructure and Connectivity</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Reliable networking solutions for businesses.
                </p>
             <Link
            to="/services"
           className="bg-[#FFA500] text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition inline-block"
            >
              Learn more
            </Link>
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition">
              <img src="/images/Biometrics/Biometric installations access Control/d (27).jpg" className="h-120 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">  Surveillance Systems  </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Automate and secure your home systems.
                </p>
                    <Link
            to="/services"
           className="bg-[#FFA500] text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition inline-block"
            >
              Learn more
            </Link>
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition">
              <img src="/images/Cameras/Cameeras/Camera2.jpeg" className="h-120 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">CCTV Monitoring System</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Advanced surveillance systems for safety.
                </p>
                <Link
            to="/services"
           className="bg-[#FFA500] text-white px-4 py-3 rounded-full font-semibold hover:opacity-90 transition inline-block"
            >
              Learn more
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
                <h3 className="font-bold"> Network Cabinet Installation  </h3>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <img src="/images/Biometrics/Biometric installations access Control/d (11).jpg" className="h-48 w-full object-cover" />
              <div className="p-4">
                <h3 className="font-bold"> Biometric System Installation </h3>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <img src="/images/Camera Mounting/Camera Mounting Hikv/d (1).jpg" className="h-48 w-full object-cover" />
              <div className="p-4">
                <h3 className="font-bold">CCTV Installation</h3>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}