import resume from "../assets/resume.pdf";
import "../App.css";
import dp from "../assets/dp.png";
import {
  SiGeeksforgeeks,
  SiGithub,
  SiGithubactions,
  SiGmail,
  SiHackerrank,
  SiInsomnia,
  SiInstagram,
  SiLeetcode,
  SiLinkedin,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSkillshare,
  SiSpring,
  SiSpringboot,
  SiSpringsecurity,
  SiTailwindcss,
} from "react-icons/si";
import { Icon } from "lucide-react";
export default function Hero() {
  const skills = [
    {
      Icon: SiSpringboot,
      name: "Spring Boot",
    },
    {
      Icon: SiSpringsecurity,
      name: "Spring Security",
    },
    {
      Icon: SiMysql,
      name: "MySQL",
    },
    {
      Icon: SiPostgresql,
      name: "PosgreSql",
    },
    {
      Icon: SiMongodb,
      name: "MongoDB",
    },
    {
      Icon: SiReact,
      name: "React.js",
    },
    {
      Icon: SiGithub,
      name: "Github",
    },
    {
      Icon: SiGithubactions,
      name: "Github Actions",
    },
    {
      Icon: SiTailwindcss,
      name: "Tailwind CSS",
    },
    {
      Icon: SiPython,
      name: "Python",
    },
  ];
  return (
    <div id="hero" className="flex h-screen  ">
      <div className="flex flex-col w-2/3 ">
        <section className="h-screen flex flex-col justify-center items-center   text-center w-auto">
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
              <a href={resume} download="AshutoshTiwari.pdf">
                <button className="mt-6 px-6 py-3 bg-gray-900 rounded-lg hover:text-indigo-600 transition shadow-lg">
                  Download Resume!
                </button>
              </a>
            </div>
          </div>
        </section>
        <p className="text-white font-mono align-middle py-10 text-center">
          Tools and Skills:{" "}
        </p>
        <section
          id="skills"
          className="  flex flex-wrap text-white mx-auto my-auto  gap-3 "
        >
          {skills.map((skill, i) => (
            <div
              className="shadow-lg rounded-full px-5 py-3 flex mx-auto bg-gray-900 w-max gap-2 
                    hover:scale-110 hover:shadow-2xl hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500"
            >
              <skill.Icon size={24} />
              <p>{skill.name}</p>
            </div>
          ))}
        </section>
      </div>
      <div className="w-1/3  text-white text-center p-4 mx-auto my-auto flex-col space-y-5">
        <img
          src={dp}
          alt="Profile pic"
          className="w-2/3 mx-auto shadow-lg rounded-full"
        />
        <nav className=" shadow-lg rounded-full px-5 py-3 flex gap-6 w-min mx-auto bg-gray-900">
          <a
            href="https://leetcode.com/u/the_ashutosh/"
            target="blank"
            className="text-gray-400 hover:text-indigo-600 transition"
            title="Leetcode"
          >
            <SiLeetcode size={24} />
          </a>
          <a
            href="https://www.geeksforgeeks.org/user/ashutoshtiwari200128/"
            target="blank"
            className="text-gray-400 hover:text-indigo-600 transition"
            title="Geeksforgeeks"
          >
            <SiGeeksforgeeks size={24} />
          </a>
          <a
            href="https://github.com/ashutoshtiwari0928"
            target="blank"
            className="text-gray-400 hover:text-indigo-600 transition"
            title="Github"
          >
            <SiGithub size={24} />
          </a>
          <a
            href="https://www.hackerrank.com/profile/ashutoshtiwari25"
            target="blank"
            className="text-gray-400 hover:text-indigo-600 transition"
            title="Hackarrank"
          >
            <SiHackerrank size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/ashutosh-tiwari28/"
            target="blank"
            className="text-gray-400 hover:text-indigo-600 transition"
            title="Linkedin"
          >
            <SiLinkedin size={24} />
          </a>
          <a
            href="mailto:ashutoshtiwari200128@gmail.com"
            target="blank"
            className="text-gray-400 hover:text-indigo-600 transition"
            title="Gmail"
          >
            <SiGmail size={24} />
          </a>
          <a
            href="https://www.instagram.com/the_ashu_99/"
            target="blank"
            className="text-gray-400 hover:text-indigo-600 transition"
            title="Instagram"
          >
            <SiInstagram size={24} />
          </a>
        </nav>
      </div>
    </div>
  );
}
