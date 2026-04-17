import { Link } from "react-router-dom";
import { servicesData } from "../data/servicesData";

export default function Services() {
  return (
    <div className="bg-gray-300 text-white">

      {/* ================= HERO ================= */}
      <section
        className="pt-28 pb-20 text-center px-6 bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/images/Project%20Unifi/Project%20Unifi%20Network%20Installation/k%20(1).jpg')"
        }}
      >
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

        {servicesData.map((service, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:scale-105 transition"
          >

            {/* ICON */}
            <div className="bg-black/40 w-14 h-14 flex items-center justify-center rounded-full mb-4">
              <i className={`${service.icon} text-[#FFA500] text-2xl`}></i>
            </div>

            {/* TITLE */}
            <h3 className="text-xl font-bold mb-2">
              {service.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-gray-400 text-sm mb-3">
              {service.shortDescription}
            </p>

            {/* LIST */}
            <ul className="space-y-2 text-gray-300 text-sm mb-4">
              {service.items.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-green-500">✔</span>
                  {item}
                </li>
              ))}
            </ul>

            {/* OUTCOME */}
            <p className="text-sm text-gray-400 italic mb-4">
              {service.outcome}
            </p>

            {/* BUTTON */}
            <Link
              to={`/services/${service.id}`}
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