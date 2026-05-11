import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <div className="bg-linear-to-r from-black via-gray-900 to-black text-black">

      {/* ================= HERO ================= */}
      <section className="relative pt-28 pb-20 flex items-center justify-center text-center px-4 md:px-2">

        {/* BACKGROUND IMAGE */}
        <img
          src="/images/Cabling/cabling/Cabling1.jpeg"
          alt="Projects Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-3xl">
         <h1 className="text-2xl md:text-4xl font-bold mb-1">
         <span className="text-white">Our Recent</span>{" "}
         <span className="text-[#FFA500]">Projects</span>
             </h1>

          <p className="text-gray-300 mb-6 text-sm md:text-base">
            A selection of our recent ICT and smart technology installations showcasing our commitment to quality, reliability, and practical solutions.
          </p>

          <div className="flex justify-center gap-2 md:gap-4 flex-wrap">
            <Link
              to="/contact"
              className="bg-[#FFA500] text-black px-4 md:px-6 py-2 md:py-3 text-sm md:text-base rounded-full font-semibold hover:scale-105 transition"
            >
              Request a Project
            </Link>

            <a
              href="https://wa.me/254798467717"
              className="bg-green-600 px-4 md:px-6 py-2 md:py-3 text-sm md:text-base rounded-full font-semibold"
            >
              Talk on WhatsApp
            </a>
          </div>
        </div>

      </section>

      {/* ================= PROJECT GRID ================= */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">

        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white text-black rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 transition"
          >

            {/* IMAGE */}
          <div className="w-full aspect-video overflow-hidden">
             <img
        src={project.images[0] || "/images/placeholder.jpg"}
        alt={project.title}
        className="w-full h-full object-cover"
          />
        </div>

            {/* CONTENT */}
            <div className="p-5">

              <h3 className="font-bold text-lg mb-2">
                {project.title}
              </h3>

              <p className="text-gray-600 text-sm mb-4">
                {project.shortDesc}
              </p>

              {/* BUTTON */}
              <Link
                to={`/projects/${index}`}
                className="bg-[#FFA500] px-5 py-2 rounded-full font-semibold inline-block hover:scale-105 transition"
              >
                View Project
              </Link>

            </div>

          </div>
        ))}

      </section>

      {/* ================= CTA ================= */}
      <section className="text-center py-12 md:py-16 px-4 md:px-6 bg-gray-300">
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-[#008000]">
          Looking to Secure and{" "}
          <span className="text-blue-700">Automate Your Space?</span>
        </h2>

        <p className="text-black mb-6 text-sm md:text-base">
          Contact Sentra Cord for reliable ICT and smart technology solutions in Kenya.
        </p>

        <div className="flex justify-center gap-2 md:gap-4 flex-wrap">
          <Link
            to="/contact"
            className="bg-[#FFA500] text-black px-4 md:px-6 py-2 md:py-3 text-sm md:text-base rounded-full font-semibold"
          >
            Contact Us
          </Link>

          <a
            href="https://wa.me/254798467717"
            className="bg-green-600 px-4 md:px-6 py-2 md:py-3 text-sm md:text-base rounded-full font-semibold"
          >
            Call / WhatsApp Now
          </a>
        </div>
      </section>

    </div>
  );
}