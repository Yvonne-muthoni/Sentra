import { useParams, Link } from "react-router-dom";
import { servicesData } from "../data/servicesData";

export default function ServiceDetails() {
  const { id } = useParams();
  const service = servicesData.find(s => s.id === id);

  if (!service) {
    return (
      <div className="bg-gray-300 text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
          <Link to="/services" className="bg-[#FFA500] text-black px-6 py-3 rounded-full font-semibold">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 text-white">
      
      {/* ================= HERO SECTION ================= */}
      <section 
        className="pt-28 pb-20 text-center px-6 bg-linear-to-r from-black via-gray-900 to-black relative"
      >
        <div className="max-w-3xl mx-auto">
          <div className="bg-black/40 w-20 h-20 flex items-center justify-center rounded-full mb-6 mx-auto">
            <i className={`${service.icon} text-[#FFA500] text-5xl`}></i>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {service.title}
          </h1>
          
          <p className="text-gray-300 text-lg mb-8">
            {service.overview}
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/contact"
              className="bg-[#FFA500] text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
            >
              Request a Quote
            </Link>

            <a
              href="https://wa.me/254798467717"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* ================= PROBLEMS WE SOLVE ================= */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">
          <span className="text-[#FFA500]">Problems We Solve</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {service.problemsWeSolve.map((problem, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg border-l-4 border-[#FFA500]">
              <p className="text-gray-300 text-lg">
                ❌ {problem}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= OUR SOLUTION ================= */}
      <section className="max-w-6xl mx-auto px-6 py-16 bg-gray-800/50">
        <h2 className="text-3xl font-bold mb-8">
          <span className="text-[#FFA500]">Our Solution</span>
        </h2>
        
        <div className="bg-gray-800 p-8 rounded-lg border-l-4 border-green-500">
          <p className="text-gray-200 text-lg leading-relaxed">
            {service.solution}
          </p>
        </div>
      </section>

      {/* ================= WHAT YOU GET ================= */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">
          <span className="text-[#FFA500]">What You Get</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {service.whatYouGet.map((item, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg flex gap-4">
              <span className="text-green-500 text-2xl flex-shrink-0">✔</span>
              <p className="text-gray-300 text-lg">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE SENTRA CORD ================= */}
      <section className="max-w-6xl mx-auto px-6 py-16 bg-gray-800/50">
        <h2 className="text-3xl font-bold mb-8">
          Why Choose <span className="text-[#FFA500]">Sentra Cord</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {service.whyChooseSentra.map((reason, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg border-t-2 border-[#FFA500]">
              <p className="text-gray-300 text-lg">
                ⭐ {reason}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-linear-to-r from-[#FFA500]/20 to-green-600/20 border border-[#FFA500]/50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-6">
            👉 {service.cta}
          </h3>

          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/contact"
              className="bg-[#FFA500] text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
            >
              Get Started Today
            </Link>

            <a
              href="https://wa.me/254798467717"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
            >
              Contact on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ================= BACK TO SERVICES ================= */}
      <section className="max-w-6xl mx-auto px-6 py-8">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-[#FFA500] hover:text-white transition font-semibold"
        >
          ← Back to All Services
        </Link>
      </section>

    </div>
  );
}
