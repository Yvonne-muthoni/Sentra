import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div className="bg-gray-300 text-white">

      {/* ================= HERO ================= */}
      <section className="pt-28 pb-16 text-center px-6 bg-['/images/Project Unifi/Project Unifi Network Installation/k (1).jpg')] bg-center relative">
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">
            Our ICT & Smart <span className="text-[#FFA500]">Technology Services</span>
          </h1>

          <p className="text-gray-300 mb-6">
            We provide reliable, secure, and scalable ICT solutions for businesses,
            homes, and institutions across Kenya.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/contact"
              className="bg-[#FFA500] text-black px-6 py-3 rounded-full font-semibold"
            >
              Request a Free Quote
            </Link>

            <a
              href="https://wa.me/254798467717"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 px-6 py-3 rounded-full font-semibold"
            >
              Talk to Us on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8">

        {[
          {
            title: "Website Development & Digital Presence ",
            Description:"We design modern, responsive websites that help your business grow online.",
            icon: "fas fa-video",
            items: ["HD & IP Cameras", 
              "Remote Monitoring",
              "Installation & Maintenance"],
          },
          {
            title: "Network Installation",
            icon: "fas fa-network-wired",
            items: ["Structured Cabling", "LAN/WAN Networks", "WiFi Setup", "Troubleshooting"],
          },
          {
            title: "Smart Home Automation",
            icon: "fas fa-home",
            items: ["Smart Lighting", "Remote Control Systems", "Security Integration"],
          },
          {
            title: "Biometric & Access Control",
            icon: "fas fa-fingerprint",
            items: ["Fingerprint Systems", "Face Recognition", "Door Access Control"],
          },
          {
            title: "Intercom Installation",
            icon: "fas fa-phone",
            items: ["Audio & Video Intercom", "Gate Integration"],
          },
          {
            title: "Office Communication",
            icon: "fas fa-building",
            items: ["PBX Setup", "Internal Communication", "VoIP Systems"],
          },
        ].map((service, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:scale-105 transition"
          >

            {/* ICON */}
            <div className="bg-black/40 w-14 h-14 flex items-center justify-center rounded-full mb-4">
              <i className={`${service.icon} text-[#FFA500] text-2xl`}></i>
            </div>

            {/* TITLE */}
            <h3 className="text-xl font-bold mb-3">
              {service.title}
            </h3>

            {/* LIST */}
            <ul className="space-y-2 text-gray-300 text-sm mb-4">
              {service.items.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-green-500">✔</span>
                  {item}
                </li>
              ))}
            </ul>

            {/* BUTTON */}
            <Link
              to="/contact"
              className="inline-block bg-[#FFA500] text-black px-4 py-2 rounded-full text-sm font-semibold hover:scale-105 transition"
            >
              Learn More →
            </Link>

          </div>
        ))}

      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="text-center py-16 px-6 bg-linear-to-r from-black via-gray-900 to-black">
        <h2 className="text-3xl font-bold mb-4">
          Why Choose <span className="text-[#FFA500]">Sentra Cord?</span>
        </h2>

        <p className="text-gray-400 mb-6">
          Experienced ICT Professionals • Reliable & Secure Solutions • Fast Installation
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            to="/contact"
            className="bg-[#FFA500] text-black px-6 py-3 rounded-full font-semibold"
          >
            Request a Free Quote
          </Link>

          <a
            href="https://wa.me/254798467717"
            className="bg-green-600 px-6 py-3 rounded-full font-semibold"
          >
            Call / WhatsApp Now
          </a>
        </div>
      </section>

    </div>
  );
}