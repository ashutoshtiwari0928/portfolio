export default function Timeline() {
  const timelineData = [
    {
      type: "education",
      title: "B.Tech in Electrical and Electronics Engineering",
      company: "VIT University",
      date: "2021 - 2025",
      description:
        "Graduated with 8.98 CGPA. Focused on embedded systems, power systems, and software engineering. Built multiple projects involving IoT, ML, and automation.",
    },
    {
      type: "work",
      title: "Graduate Intern",
      company: "IGOwISE Mobility",
      date: "Aug 2023 - Nov 2023",
      description:
        "Developed and tested an advanced control system for electric vehicles, improving autonomous speed and steering adjustments. Implemented solutions using STM32 microcontrollers and various communication protocols.",
    },
  ];

  return (
    <section id="timeline" className="bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">My Journey</h2>
        <div className="relative border-l border-gray-300">
          {timelineData.map((item, index) => (
            <div key={index} className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full -left-4 ring-8 ring-gray-50">
                {item.type === "work" ? "💼" : "🎓"}
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
                {item.title}{" "}
                <span className="ml-2 text-sm font-medium text-gray-500">
                  @ {item.company}
                </span>
              </h3>
              <time className="block mb-2 text-sm font-normal text-gray-500">
                {item.date}
              </time>
              <p className="text-base font-normal text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
