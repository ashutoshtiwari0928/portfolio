import logolinkedin from "../assets/logolinkedin.png";
import logoleetcode from "../assets/logoleetcode.png";
import logogmail from "../assets/logogmail.png";
import logohackerrank from "../assets/logohackerrank.png";
import logogithub from "../assets/logogithub.jpeg";
import logogfg from "../assets/gfg.png";
export default function Contact() {
  const links = [
    {
      name: "Github",
      href: "https://github.com/ashutoshtiwari0928",
      title: "ashutoshtiwari0928",
      src: logogithub,
    },
    {
      name: "Email",
      href: "mailto:ashutoshtiwari200128@gmail.com",
      title: "ashutoshtiwari200128@gmail.com",
      src: logogmail,
    },
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/in/ashutosh-tiwari28/",
      title: "ashutosh-tiwari28",
      src: logolinkedin,
    },
    {
      name: "Leetcode",
      href: "https://leetcode.com/u/the_ashutosh/",
      title: "the_ashutosh",
      src: logoleetcode,
    },
    {
      name: "Hackerrank",
      href: "https://www.hackerrank.com/profile/ashutoshtiwari25",
      title: "ashutoshtiwari25",
      src: logohackerrank,
    },
    {
      name: "Geeksforgeeks",
      href: "https://www.geeksforgeeks.org/user/ashutoshtiwari200128/",
      title: "ashutoshtiwari200128",
      src: logogfg,
    },
  ];
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Profiles & Contact</h2>
        <ul className="justify-center space-x-6 space-y-3">
          {links.map((link) => (
            <li key={link} className="flex items-center gap-2">
              <img src={link.src} className="w-9" />
              <p>
                {link.name} :{" "}
                <a href={link.href} className="text-blue-400" target="_blank">
                  {link.title}
                </a>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
