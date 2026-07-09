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
    <section id="connect" className="bg-nordic-midnight text-text-primary py-28 px-10 lg:px-12">
      <div className="max-w-[1250px] mx-auto w-full">
        
        {/* Left Aligned Heading */}
        <div className="mb-16 text-left">
          <p className="text-arctic-cyan uppercase tracking-[0.3em] text-sm font-semibold">
            GET IN TOUCH
          </p>
          <h2 className="text-5xl font-bold text-text-primary mt-4 tracking-wide">
            LET'S BUILD
          </h2>
          <p className="mt-6 text-text-secondary text-sm max-w-2xl leading-relaxed">
            Whether it's an internship, collaboration, freelance opportunity, or just a tech conversation, I'd love to hear from you.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contacts.map((item) => (
            <div
              key={item.title}
              className="bg-nordic-slate border border-dark-steel rounded-2xl p-6 hover:border-arctic-cyan/30 hover:-translate-y-1.5 hover:shadow-[0_15px_30px_-10px_rgba(100,255,218,0.05)] transition-all duration-300 ease-out flex flex-col justify-between min-h-[220px]"
            >
              <div>
                {/* Icons in Arctic Cyan */}
                <div className="text-arctic-cyan mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-text-primary">{item.title}</h3>
                <p className="text-text-secondary mt-2 text-sm leading-6">{item.description}</p>
              </div>

              <div>
                <a
                  href={item.link}
                  target={item.isExternal ? "_blank" : "_self"}
                  rel={item.isExternal ? "noreferrer" : undefined}
                  className="inline-flex items-center mt-6 text-sm font-semibold text-arctic-cyan hover:text-white transition-colors duration-200"
                >
                  {item.button} <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
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