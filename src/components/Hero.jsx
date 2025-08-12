import resume from "../assets/resume.pdf";
export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white text-center w-auto p-4">
      <h1 className="text-5xl font-bold">Hi, I'm Ashutosh Tiwari</h1>
      <p className="mt-4 text-lg text-gray-300">
        I architect and deliver robust, enterprise-grade applications — ensuring
        scalability, maintainability, and reliability across the full stack,
        with end-to-end automation via CI/CD pipelines, cloud platforms, and
        modern engineering practices.
      </p>
      <div className="flex space-x-5">
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
    </section>
  );
}
