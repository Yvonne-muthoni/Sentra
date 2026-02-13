import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

import slide1 from "../assets/images/Gallery5.jpg";
import slide2 from "../assets/images/Gallery4.jpg";
import slide3 from "../assets/images/Gallery3.jpg";

const Homepage = () => {
  const slides = [
    {
      image: slide1,
      title:
        "Reliable ICT & Smart Technology solutions for modern Homes and Business",
      subtitle:
        "We help homes, businesses and organizations design, implement, and support reliable IT and smart technology systems that work.",
    },
    {
      image: slide2,
      title: "Empowering Digital Transformation",
      subtitle:
        "Secure networks, smart automation and scalable technology solutions.",
    },
    {
      image: slide3,
      title: "Innovative Solutions for a Smarter Future",
      subtitle:
        "Professional ICT services tailored for modern environments.",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center text-center relative overflow-hidden"
    >
      {/* Background Images with Smooth Fade */}
      <AnimatePresence>
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[current].image})` }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <motion.div
        key={`text-${current}`}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl px-4"
      >
        <h1 className="text-lg sm:text-3xl md:text-2xl font-bold text-white mb-6">
          {slides[current].title}
        </h1>

        <p className="text-lg sm:text-xl md:text-lg text-white mb-8">
          {slides[current].subtitle}
        </p>

        <a
          href="#whoweare"
          className="bg-[#008000] text-white px-6 sm:px-8 py-4 rounded-full text-base sm:text-lg hover:bg-[#0000FF] transition"
        >
          Get Started
        </a>
      </motion.div>
    </section>
  );
};

export default Homepage;
