import { projects } from "../info/Projects";
import { ExternalLink, Folder } from "lucide-react";
export default function Projects() {
  return (
    <section id="projects" className="py-5">
      <div className="w-auto mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Projects
          <span className="block mt-2 text-sm font-mono font-normal text-gray-400">
            real-world Java backend you can browse on GitHub
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8 px-6 md:px-12 lg:px-20 py-10">
          {projects.map((p, i) => (
            <a
              key={i}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-gray-700 bg-gray-900 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-indigo-500/10 hover:border-indigo-500/50 transition"
            >
              <div className="relative overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-48 object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <Folder size={20} className="text-indigo-400" />
                  <ExternalLink
                    size={18}
                    className="text-gray-500 group-hover:text-indigo-400 transition"
                  />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-gray-400">{p.desc}</p>
                <div className="mt-4 flex gap-2 flex-wrap">
                  {p.tags?.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}