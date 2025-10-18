import { projects } from "../info/Projects";
export default function Projects() {
  return (
    <section id="projects" className="py-5 ">
      <div className="w-auto mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 px-6 md:px-12 lg:px-20 py-10 bg-gray-950">
          {projects.map((p, i) => (
            <div className="bg-gray-900 shadow-lg rounded-lg px-3 py-3">
              <a
                key={i}
                className="bg-gray- shadow-lg rounded-lg overflow-hidden"
                href={p.href}
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-white">{p.title}</h3>
                  <p className="mt-2 text-white">{p.desc}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
