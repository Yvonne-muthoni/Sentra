import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../data/projects";
import { useState } from "react";

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects[id];
  const [currentImage, setCurrentImage] = useState(0);

  if (!project) {
    return <div className="p-10">Project not found</div>;
  }

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">

      {/* TITLE */}
      <h1 className="text-3xl font-bold mb-6">
        {project.title}
      </h1>

      {/* MAIN DESCRIPTION IMAGE (optional replace with carousel below if you want) */}
      <p className="text-gray-700 mb-6">
        {project.fullDesc}
      </p>

      {/* POINTS */}
      <ul className="list-disc pl-5 space-y-2 mb-8 text-gray-600">
        {project.points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>

      {/* 🔥 IMAGE CAROUSEL */}
      <div className="relative mb-10">

        {/* IMAGE */}
        <img
          src={project.images[currentImage]}
          className="w-full h-112.5 md:h-137.5 object-cover rounded-2xl transition duration-500"
        />

        {/* LEFT ARROW */}
        <button
          onClick={prevImage}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-amber-600 text-white p-3 rounded-full hover:bg-black"
        >
          ‹
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={nextImage}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-amber-600 text-white p-3 rounded-full hover:bg-black"
        >
          ›
        </button>

        {/* DOTS */}
        <div className="flex justify-center mt-4 gap-2">
          {project.images.map((_, i) => (
            <div
              key={i}
              onClick={() => setCurrentImage(i)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                i === currentImage ? "bg-green-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

      </div>

      {/* BACK BUTTON */}
      <div className="flex justify-center mt-10">
        <button
          onClick={() => {
            navigate("/");

            setTimeout(() => {
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }, 100);
          }}
          className="px-6 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition"
        >
          ← Back to Projects
        </button>
      </div>

    </div>
  );
}