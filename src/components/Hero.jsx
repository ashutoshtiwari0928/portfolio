import resume from "../assets/resume.pdf";
import "../App.css";
import dp from "../assets/dp.png";

export default function Hero() {
  return (
    <div
      id="hero"
      className="flex h-screen bg-gradient-to-r  from-gray-900 via-gray-800 to-gray-900 "
    >
      <div className="flex-grow w-2/3 ">
        <section className="h-screen flex flex-col justify-center items-center  text-white text-center w-auto p-4">
          <h1 className="text-5xl font-stretch-condensed">
            Hi, I'm Ashutosh Tiwari
          </h1>
          <p
            className="mt-4 text-lg text-gray-300
          font-mono"
          >
            I architect and deliver robust, enterprise-grade applications —
            ensuring scalability, maintainability, and reliability across the
            full stack, with end-to-end automation via CI/CD pipelines, cloud
            platforms, and modern engineering practices.
          </p>
          <div className="flex space-x-5 ">
            <div>
              <a href="https://github.com/ashutoshtiwari0928" target="_blank">
                <button className="mt-6 px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600">
                  View My Work
                </button>
              </a>
              <a href={resume} download="AshutoshTiwari.pdf">
                <button className="mt-6 px-6 py-3 bg-gray-900 rounded-lg hover:bg-blue-600">
                  Download Resume!
                </button>
              </a>
            </div>
          </div>
        </section>
      </div>
      <div className="w-1/3  text-white text-center p-4 mx-auto my-auto">
        <img src={dp} alt="Profile pic" className="w-2/3 mx-auto" />
      </div>
    </div>
  );
}
