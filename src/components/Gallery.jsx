import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import gallery1 from "../assets/images/gallery1.jpg";
import gallery2 from "../assets/images/Gallery2.jpg";
import gallery3 from "../assets/images/Gallery3.jpg";
import gallery4 from "../assets/images/Gallery4.jpg";
import gallery5 from "../assets/images/Gallery5.jpg";

const images = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
];

export default function Gallery() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 2) % images.length);
    }, 4000); // change every 4 seconds

    return () => clearInterval(timer);
  }, []);

  const first = images[index];
  const second = images[(index + 1) % images.length];

  return (
    <section id="gallery" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-[#008000] mb-10">
          Gallery
        </h2>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {[first, second].map((img, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-3xl shadow-xl"
              >
                <img
                  src={img}
                  className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
                  alt="Sentra Tech gallery"
                />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}