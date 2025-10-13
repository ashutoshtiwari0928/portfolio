import resume from "../assets/resume.pdf";
import "../App.css";
import dp from "../assets/dp.png";
import { skills } from "../info/Skills";
import { profile } from "../info/Profile";
export default function Hero() {
  return (
    <div
      id="hero"
      className="flex flex-col lg:flex-row h-auto lg:h-screen text-white px-6 md:px-12 lg:px-20 py-10 bg-gray-950"
    >
      {/* ===== Left Section ===== */}
      <div className="flex flex-col lg:w-2/3 w-full text-center lg:text-left justify-center items-center lg:items-start space-y-6">
        <section className="flex flex-col justify-center items-center lg:items-start">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-stretch-condensed">
            Hi, I'm <span className="text-indigo-500">Ashutosh Tiwari</span>
          </h1>

          <p className="mt-4 text-sm md:text-base lg:text-lg text-gray-300 font-mono max-w-2xl">
            I architect and deliver robust, enterprise-grade applications —
            ensuring scalability, maintainability, and reliability across the
            full stack, with end-to-end automation via CI/CD pipelines, cloud
            platforms, and modern engineering practices.
          </p>

          <div className="flex justify-center lg:justify-start mt-6">
            <a href={resume} download="AshutoshTiwari.pdf">
              <button className="px-6 py-3 bg-gray-900 rounded-lg hover:text-indigo-600 transition shadow-lg">
                Download Resume!
              </button>
            </a>
          </div>
        </section>

        <p className="font-mono text-sm md:text-base text-center lg:text-left pt-6">
          Tools and Skills:
        </p>

        {/* ===== Skills Section ===== */}
        <section
          id="skills"
          className="flex flex-wrap justify-center lg:justify-start gap-3"
        >
          {skills.map((skill, i) => (
            <div
              key={i}
              className="shadow-lg rounded-full px-5 py-3 flex items-center gap-2 
          bg-gray-900 w-max hover:scale-110 hover:shadow-2xl 
          hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 
          transition-transform duration-300"
            >
              <skill.Icon size={20} />
              <p className="text-sm md:text-base">{skill.name}</p>
            </div>
          ))}
        </section>
      </div>

      {/* ===== Right Section ===== */}
      <div className="flex flex-col lg:w-1/3 w-full items-center justify-center mt-10 lg:mt-0 space-y-6">
        <img
          src={dp}
          alt="Profile pic"
          className="w-24 md:w-32 lg:w-48 mx-auto shadow-lg rounded-full border-2 border-gray-700"
        />
        <nav className="flex flex-wrap justify-center gap-5 bg-gray-900 shadow-lg rounded-full px-5 py-3">
          {profile.map((item) => (
            <a
              href={item.href}
              target="_blank"
              className="text-gray-400 hover:text-indigo-600 transition"
              title={item.title}
            >
              {<item.icon size={24} />}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
