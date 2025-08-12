export default function Skills() {
  const skills = [
    "Spring Boot",
    "Spring Security",
    "Spring Data JPA",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "ReactJS",
    "Git/Github",
    "Github Actions",
    "Tailwind CSS",
    "Java",
    "Python",
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg text-center"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
