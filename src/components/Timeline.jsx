import { timelineData } from "../info/timelineData";

const badges = {
  work: { icon: "💼", label: "Work" },
  education: { icon: "🎓", label: "Education" },
  current: { icon: "🚀", label: "Current" },
};

export default function Timeline() {
  return (
    <section id="timeline" className="py-5">
      <div className="w-auto mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 font-mono">
          My Journey
          <span className="block mt-2 text-sm font-normal text-gray-400">
            from hardware intern to cloud-native backend engineer
          </span>
        </h2>
        <div className="px-6 md:px-12 lg:px-20 py-10">
          <div className="relative border-l border-indigo-500/30">
            {timelineData.map((item, index) => {
              const badge = badges[item.type] || badges.work;
              const isCurrent = item.type === "current";
              return (
                <div
                  key={index}
                  className={`mb-10 ml-6 rounded-2xl border ${
                    isCurrent
                      ? "border-indigo-500/50 bg-gradient-to-b from-indigo-500/10 to-gray-900 shadow-xl shadow-indigo-950/40"
                      : "border-gray-700 bg-gray-900"
                  } px-6 py-6`}
                >
                  <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 ring-8 ring-gray-950 bg-gradient-to-r from-indigo-500 to-purple-500">
                    {badge.icon}
                  </span>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <span className="text-xs rounded-full border border-gray-700 bg-gray-800 px-2 py-0.5 text-gray-300">
                      {item.type === "current" ? "🚀 in progress" : badge.label}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400">@{item.company}</p>
                  <time className="block mb-2 text-sm font-mono text-indigo-300">
                    {item.date}
                  </time>
                  <p className="text-base font-normal text-gray-300">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}