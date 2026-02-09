import { motion } from "framer-motion";
import hero from "../assets/images/Gallery5.jpg";

const Homepage = () => {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center text-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${hero})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-3xl px-4"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
          Smart ICT Solutions for Modern Businesses
        </h1>

        <a
          href="#whoweare"
          className="bg-[#008000] text-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg hover:bg-[#0000FF] transition"
        >
          Learn More About Us
        </a>
      </motion.div>
    </section>
  );
};

export default Homepage;