import logolinkedin from "../assets/logolinkedin.png";
import logoleetcode from "../assets/logoleetcode.png";
import logogmail from "../assets/logogmail.png";
import logohackerrank from "../assets/logohackerrank.png";
import logogithub from "../assets/logogithub.jpeg";
import logogfg from "../assets/gfg.png";
import { SiInstagram, SiLinkedin, SiGmail } from "react-icons/si";
import { Icon } from "lucide-react";
export default function Contact() {
  const links = [
    {
      Icon: SiGmail,
      href: "mailto:ashutoshtiwari200128@gmail.com",
      title: "Email",
    },
    {
      Icon: SiLinkedin,
      href: "https://www.linkedin.com/in/ashutosh-tiwari28/",
      title: "Linkedin",
      src: logolinkedin,
    },
    {
      Icon: SiInstagram,
      href: "https://www.instagram.com/the_ashu_99/",
      title: "Instagram",
    },
  ];
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Profiles & Contact</h2>
        <ul className="justify-center space-x-6 space-y-3">
          {links.map((link) => (
            <li key={link} className="flex items-center gap-2">
              <p className="flex">
                <a
                  href={link.href}
                  className="hover:text-blue-400"
                  target="_blank"
                >
                  <link.Icon size={24} />
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
