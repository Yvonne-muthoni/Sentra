import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);

  const project = projects[parseInt(id)];

  if (!project) {
    return (
      <div className="bg-black text-white min-h-screen pt-28 px-6 text-center">
        <h1 className="text-3xl font-bold mb-4">Project not found</h1>
        <button
          onClick={() => navigate("/projects")}
          className="bg-[#FFA500] text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
        >
          Back to Projects
        </button>
      </div>
    );
  }

  const hasImages = project.images && project.images.length > 0;

  const goToPrevious = () => {
    if (selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  const goToNext = () => {
    if (selectedImage < project.images.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-gray-300 mb-8">{project.fullDesc}</p>

        {hasImages ? (
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* MAIN IMAGE WITH ARROWS */}
            <div className="lg:col-span-2">
              <div className="relative bg-gray-900 rounded-xl overflow-hidden flex items-center justify-center" style={{ height: "500px" }}>
                <img
                  src={project.images[selectedImage]}
                  alt="main"
                  className="w-full h-full object-contain"
                />

                {/* LEFT ARROW */}
                {selectedImage > 0 && (
                  <button
                    onClick={goToPrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition"
                  >
                    ←
                  </button>
                )}

                {/* RIGHT ARROW */}
                {selectedImage < project.images.length - 1 && (
                  <button
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition"
                  >
                    →
                  </button>
                )}

                {/* IMAGE COUNTER */}
                {project.images.length > 1 && (
                  <div className="absolute bottom-4 right-4 bg-black/80 px-3 py-1 rounded-full text-sm text-gray-300">
                    {selectedImage + 1} / {project.images.length}
                  </div>
                )}
              </div>
            </div>

            {/* PROJECT DETAILS */}
            <div className="bg-gray-900 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-[#FFA500]">
                Project Highlights
              </h3>
              <ul className="space-y-3">
                {project.points?.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#FFA500] mt-1">•</span>
                    <span className="text-gray-200">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div className="bg-gray-900 p-12 rounded-xl text-center mb-12">
            <p className="text-gray-400">No images available for this project</p>
          </div>
        )}

        {/* PROJECT POINTS */}
        {project.points && !hasImages && (
          <div className="bg-gray-900 p-8 rounded-xl mb-12">
            <h3 className="text-2xl font-bold mb-6 text-[#FFA500]">
              Project Highlights
            </h3>
            <ul className="grid md:grid-cols-2 gap-4">
              {project.points.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#FFA500]">✓</span>
                  <span className="text-gray-200">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* BACK BUTTON */}
        <div className="text-center mt-12">
          <button
            onClick={() => navigate("/projects")}
            className="bg-[#FFA500] text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
          >
            Back to Projects
          </button>
        </div>
      </div>
    </div>
  );
}