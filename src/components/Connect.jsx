import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const contacts = [
  {
    title: "GitHub",
    description: "Explore my projects and contributions.",
    icon: <FaGithub size={30} />,
    link: "https://github.com/darshan2006-coder",
    button: "Connect",
    isExternal: true,
  },
  {
    title: "LinkedIn",
    description: "Let's grow our professional network.",
    icon: <FaLinkedin size={30} />,
    link: "https://www.linkedin.com/in/darshan-ai-dev",
    button: "Connect",
    isExternal: true,
  },
  {
    title: "LeetCode",
    description: "Check out my DSA progress.",
    icon: <SiLeetcode size={30} />,
    link: "https://leetcode.com/DARSHAN-2006",
    button: "Connect",
    isExternal: true,
  },
  {
    title: "Email",
    description: "Have an opportunity or idea? Let's talk.",
    icon: <FaEnvelope size={30} />,
    link: "mailto:drdarshan2006@gmail.com",
    button: "Connect",
    isExternal: false,
  },
];

function Connect() {
  return (
    <section id="connect" className="bg-[#0B0F19] text-white py-28 px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl font-bold mt-4">LET'S BUILD</h2>
          <p className="mt-6 text-gray-400 max-w-2xl">
            Whether it's an internship, collaboration, freelance opportunity, or just a tech conversation, I'd love to hear from you.
          </p>
        </div>

        {/* Layout Grid with explicit dimensions and updated hover transitions */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contacts.map((item) => (
            <div
              key={item.title}
              className="bg-[#111827] rounded-2xl border border-violet-500/20 p-6 hover:border-violet-500 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between min-h-[220px]"
            >
              <div>
                <div className="text-violet-400 mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="text-gray-400 mt-2 text-sm leading-6">{item.description}</p>
              </div>

              <div>
                <a
                  href={item.link}
                  target={item.isExternal ? "_blank" : "_self"}
                  rel={item.isExternal ? "noreferrer" : undefined}
                  className="inline-flex items-center mt-6 text-sm font-semibold text-violet-400 hover:text-violet-300 transition-colors"
                >
                  {item.button} <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Connect;