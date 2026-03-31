import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { projects } from "../data/projects";

export default function Projects() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % projects.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const project = projects[index];

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-[#008000] mb-4 mt-4">
          Our Projects
        </h2>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
          A selection of our recent ICT and smart technology installations showcasing
          our commitment to quality, reliability, and practical solutions.
        </p>

        {/* HERO SLIDER */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            className="bg-white rounded-3xl shadow-xl p-6 mb-10"
          >
            <img
              src={project.images[0]}
              className="w-full h-80 object-cover rounded-2xl mb-4"
            />

            <h3 className="text-2xl font-bold mb-2">
              {project.title}
            </h3>

            <p className="text-gray-600">
              {project.shortDesc}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl shadow-lg p-6"
            >
              <img
                src={project.images[0]}
                className="w-full h-64 object-cover rounded-xl mb-4"
              />

              <h3 className="text-lg font-bold mb-2">
                {project.title}
              </h3>

              <p className="text-gray-600 mb-3">
                {project.shortDesc}
              </p>

              <button
                onClick={() => navigate(`/projects/${i}`)}
                className="text-[#008000] font-semibold"
              >
                Read more →
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}