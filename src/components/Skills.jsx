import React from 'react';
import { FaLaptopCode, FaServer, FaDatabase, FaCode, FaWrench, FaRocket } from 'react-icons/fa';

const skillCategories = [
  {
    title: "Frontend",
    icon: <FaLaptopCode className="text-violet-400 text-xl" />,
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Bootstrap"],
    styles: {
      cardHover: "hover:border-violet-400 hover:shadow-[0_20px_40px_-15px_rgba(167,139,250,0.15)]",
      btnBorder: "border-violet-400",
      btnHoverText: "hover:text-violet-600",
      btnHoverShadow: "hover:shadow-[4px_4px_0px_#a78bfa]"
    }
  },
  {
    title: "Backend",
    icon: <FaServer className="text-emerald-400 text-xl" />,
    skills: ["Node.js", "Express.js", "FastAPI", "Flask"],
    styles: {
      cardHover: "hover:border-emerald-400 hover:shadow-[0_20px_40px_-15px_rgba(52,211,153,0.15)]",
      btnBorder: "border-emerald-400",
      btnHoverText: "hover:text-emerald-600",
      btnHoverShadow: "hover:shadow-[4px_4px_0px_#34d399]"
    }
  },
  {
    title: "Database",
    icon: <FaDatabase className="text-blue-400 text-xl" />,
    skills: ["MongoDB", "PostgreSQL", "SQLite"],
    styles: {
      cardHover: "hover:border-blue-400 hover:shadow-[0_20px_40px_-15px_rgba(96,165,250,0.15)]",
      btnBorder: "border-blue-400",
      btnHoverText: "hover:text-blue-600",
      btnHoverShadow: "hover:shadow-[4px_4px_0px_#60a5fa]"
    }
  },
  {
    title: "Languages",
    icon: <FaCode className="text-amber-400 text-xl" />,
    skills: ["Python", "JavaScript", "C++"],
    styles: {
      cardHover: "hover:border-amber-400 hover:shadow-[0_20px_40px_-15px_rgba(251,191,36,0.15)]",
      btnBorder: "border-amber-400",
      btnHoverText: "hover:text-amber-600",
      btnHoverShadow: "hover:shadow-[4px_4px_0px_#fbbf24]"
    }
  },
  {
    title: "Tools",
    icon: <FaWrench className="text-gray-400 text-xl" />,
    skills: ["Git", "GitHub", "VS Code", "Postman", "Docker"],
    styles: {
      cardHover: "hover:border-gray-400 hover:shadow-[0_20px_40px_-15px_rgba(156,163,175,0.15)]",
      btnBorder: "border-gray-400",
      btnHoverText: "hover:text-gray-700",
      btnHoverShadow: "hover:shadow-[4px_4px_0px_#9ca3af]"
    }
  },
  {
    title: "Deployment",
    icon: <FaRocket className="text-rose-400 text-xl" />,
    skills: ["Vercel", "Netlify", "Render"],
    styles: {
      cardHover: "hover:border-rose-400 hover:shadow-[0_20px_40px_-15px_rgba(251,113,133,0.15)]",
      btnBorder: "border-rose-400",
      btnHoverText: "hover:text-rose-600",
      btnHoverShadow: "hover:shadow-[4px_4px_0px_#fb7185]"
    }
  },
];

function Skills() {
  return (
    <section id="skills" className="bg-[#0B0F19] text-white py-28 px-6 md:px-12 lg:px-16 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main Header (Now left-aligned, pure white, with an elegant layout style) */}
        <div className="mb-16 text-left">
          <h1 className="text-5xl font-bold text-white mt-4 tracking-wide">
            TECH STACK
          </h1>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className={`group bg-[#111827]/80 backdrop-blur-md rounded-3xl border border-gray-800/60 p-8 hover:-translate-y-2 transition-all duration-500 ease-out flex flex-col ${category.styles.cardHover}`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-7 border-b border-gray-800/40 pb-4">
                <div className="w-11 h-11 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center shadow-inner">
                  {category.icon}
                </div>
                {/* Toned typography weights to a clean, crisp 'font-semibold' */}
                <h3 className="text-xl font-semibold text-white tracking-wide text-left">
                  {category.title}
                </h3>
              </div>

              {/* Square Buttons container */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`inline-block px-4 py-2 bg-white text-gray-900 font-bold text-xs tracking-wider uppercase rounded-none border transition-all duration-200 ease-out cursor-default hover:-translate-y-1 hover:-translate-x-1 ${category.styles.btnBorder} ${category.styles.btnHoverText} ${category.styles.btnHoverShadow}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;