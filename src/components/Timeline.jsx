import { timelineData } from "../info/timelineData";

export default function Timeline() {
  return (
    <section id="timeline" className=" py-12">
      <div className="max-w-4xl mx-auto ">
        <h2 className="text-3xl font-bold text-center mb-12 font-mono">
          My Journey
        </h2>
        <div className="px-6 md:px-12 lg:px-20 py-10 bg-gray-950">
          <div className="relative border-l ">
            {timelineData.map((item, index) => (
              <div key={index} className="mb-10 ml-6 bg-gray-900 px-6 py-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-700 rounded-full -left-4 ring-8 ring-gray-50">
                  {item.type === "work" ? "💼" : "🎓"}
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold ">
                  {item.title}{" "}
                  <span className="ml-2 text-sm font-medium ">
                    @ {item.company}
                  </span>
                </h3>
                <time className="block mb-2 text-sm font-normal ">
                  {item.date}
                </time>
                <p className="text-base font-normal ">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
