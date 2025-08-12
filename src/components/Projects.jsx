import tl from "../assets/tl.png";
import AppointmentBook from "./../assets/appointmentBooking.png";
export default function Projects() {
  const projects = [
    {
      title: "Clinicbook",
      desc: "An Appointment Booking System built with Spring Boot (backend) and React.js (frontend) for seamless appointment scheduling and management. Ideal for clinics, service providers, or any business that requires managing appointments efficiently.",
      img: AppointmentBook,
      href: "https://github.com/ashutoshtiwari0928/clinicbookApplication.git",
    },
    {
      title: "Fault Detection System",
      desc: "ML model for power transmission fault detection.",
      img: tl,
      href: "https://github.com/ashutoshtiwari0928/tlfaults",
    },
    {
      title: "AI Blog + Chat Application",
      desc: "",
      img: tl,
      href: "#project",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <a
              key={i}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
              href={p.href}
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">{p.title}</h3>
                <p className="mt-2 text-gray-600">{p.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
