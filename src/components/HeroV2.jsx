import resume from "../assets/resume.pdf";
import "../App.css";
import dp from "../assets/dp.png";
import { skills } from "../info/Skills";
import { profile } from "../info/Profile";
import { ArrowDown } from "lucide-react";
export default function Hero() {
  return (
    <div className="text-white md:px-12 lg:px-20">
      <div id="hero" className="flex flex-col lg:flex-row lg:py-10">
        {/* ===== Left Section ===== */}
        <div className="flex flex-col lg:w-2/3 w-full text-center lg:text-left justify-center items-center lg:items-start space-y-6">
          <section className="flex flex-col justify-center items-center lg:items-start">
            <span className="inline-flex items-center rounded-full border border-indigo-500/40 bg-indigo-500/10 px-4 py-1.5 text-xs font-mono text-indigo-300">
              Java Backend Developer
            </span>

            <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Ashutosh Tiwari
              </span>
            </h1>

            <p className="mt-4 text-base md:text-lg text-gray-300 font-mono max-w-2xl">
              I design and build resilient, enterprise-grade{" "}
              <span className="text-indigo-400">Java microservices</span> —
              Spring Cloud Gateway, Eureka service discovery, load balancing,
              circuit breaking, Redis caching, and Kafka-driven event streams —
              auto-scaled and shipped through CI/CD.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mt-6">
              {[
                "Spring Cloud Gateway",
                "Netflix Eureka",
                "Resilience4j",
                "Redis",
                "Kafka",
                "K8s HPA",
              ].map((t) => (
                <a
                  key={t}
                  href="#architecture"
                  className="rounded-full border border-gray-700 bg-gray-900 px-3 py-1 text-xs font-mono text-gray-300 hover:border-indigo-500/60 hover:text-indigo-300 transition"
                >
                  {t}
                </a>
              ))}
            </div>

            <div className="flex justify-center lg:justify-start mt-6">
              <a
                href={resume}
                download="AshutoshTiwari.pdf"
                className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-6 py-3 rounded-full shadow-lg shadow-indigo-950/50 hover:scale-105 transition"
              >
                <button className="hover:text-gray-900 transition font-semibold">
                  Download Resume!
                </button>
              </a>
            </div>
          </section>
        </div>

        {/* ===== Right Section ===== */}
        <div className="flex flex-col lg:w-1/3 w-full items-center justify-center mt-10 lg:mt-0 space-y-6">
          <div className="relative">
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-40 blur-xl" />
            <img
              src={dp}
              alt="Profile pic"
              className="relative w-28 md:w-36 lg:w-48 mx-auto rounded-full border-2 border-indigo-500/50 shadow-2xl"
            />
          </div>
          <nav className="flex flex-wrap justify-center gap-5 bg-gray-900 border border-gray-700 shadow-2xl rounded-full px-5 py-3">
            {profile.map((item) => (
              <a
                href={item.href}
                target="_blank"
                className="text-gray-400 hover:text-indigo-400 transition"
                title={item.title}
              >
                {<item.icon size={24} />}
              </a>
            ))}
          </nav>
          <p className="text-center font-mono text-xs text-gray-500">
            Spring Cloud · Resilience4j · Kafka · Autoscaling
          </p>
        </div>
      </div>

      {/* ===== Skills Section ===== */}
      <div className="pt-14 pb-6">
        <p className="font-mono text-sm md:text-base text-center lg:text-left py-6 flex items-center gap-2">
          <ArrowDown size={16} className="animate-bounce text-indigo-400" />
          Tools and Skills:
        </p>
        <section
          id="skills"
          className="flex flex-wrap justify-center lg:justify-start gap-3"
        >
          {skills.map((skill, i) => (
            <div
              key={i}
              className="shadow-lg rounded-full px-5 py-3 flex items-center gap-2 
          bg-gray-900 border border-gray-700 w-max hover:scale-110 hover:shadow-2xl hover:shadow-indigo-500/20
          hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 
          transition-transform duration-300"
            >
              <skill.Icon size={20} />
              <p className="text-sm md:text-base">{skill.name}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}