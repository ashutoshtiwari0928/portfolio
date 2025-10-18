import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "../info/Projects";

const ProjectsV2 = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      <section id="projects" className="py-20 bg-gray-950">
        <div className="max-w-6xl mx-auto px-6 text-center">
          {/* Carousel */}
          <div className="relative flex items-center justify-center">
            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              className="absolute left-0 z-10 bg-gray-900 rounded-full shadow-md p-3 hover:scale-105 transition"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Cards */}
            <div className="flex gap-6 overflow-hidden px-6">
              {projects.map((p, i) => (
                <div
                  key={i}
                  className={`relative flex-shrink-0 rounded-3xl overflow-hidden transition-all duration-700 ${
                    i === current
                      ? "w-80 scale-105 shadow-xl"
                      : "w-72 opacity-70"
                  }`}
                >
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-96 object-cover"
                  />

                  {i === current && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {p.title}
                      </h3>
                      <p className="text-gray-200 text-sm">{p.desc}</p>
                      <div className="mt-4 flex gap-2 flex-wrap">
                        {p.tags?.map((tag, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-white/20 text-white px-3 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              className="absolute right-0 z-10 bg-gray-900 rounded-full shadow-md p-3 hover:scale-105 transition"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsV2;
