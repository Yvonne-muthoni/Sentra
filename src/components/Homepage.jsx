import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import slide1 from "/images/Gallery5.jpg";

const Homepage = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-center overflow-hidden"
    >
      {/* Background Image (FIXED) */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${slide1})` }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-20 max-w-3xl px-6"
      >
        {/* Top Heading */}
       <h1 className="text-gray-300 text-2xl md:text-3xl font-extrabold text-center w-full mb-6 -ml-30 whitespace-normal md:whitespace-nowrap">
       Sentra Cord Delivers Smart ICT and Technology Solutions Including
       </h1>

        {/* Typing Effect */}
        <h2 className="text-yellow-500 text-2xl sm:text-4xl md:text-5xl font-bold mb-6">
          <TypeAnimation
            sequence={[
              "Network Infrastructure",
              2000,
              "CCTV Security Systems",
              2000,
              "IT Support Services",
              2000,
              "Web Development",
              2000,
              "Automation Services",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </h2>

        {/* Bottom Heading */}
        <h3 className="text-gray-300 mt-4 tracking-wide text-xl md:text-2xl font-semibold text-center whitespace-normal md:whitespace-nowrap">
          for Businesses and Homes Across Nairobi and Kenya.
        </h3>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-base sm:text-lg text-gray-200 mt-6 mb-8 leading-relaxed"
        >
          We are committed to delivering practical, high-quality technology solutions that our clients can trust.
        </motion.p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#whoweare"
            className="bg-green-500 text-white px-6 py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-blue-600 transition duration-300 shadow-lg"
          >
            Get Started
          </a>

          <a
            href="#contact"
            className="border border-white text-white px-6 py-3 rounded-full text-base sm:text-lg hover:bg-white hover:text-black transition duration-300"
          >
            Reach us
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Homepage;