import React from 'react';
import { FaLaptopCode, FaServer, FaDatabase, FaCode, FaWrench, FaRocket } from 'react-icons/fa';

const skillCategories = [
  {
    title: "Frontend",
    icon: <FaLaptopCode className="text-xl" />,
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Bootstrap"],
    accentColor: "text-purple-400",
    hoverBorder: "hover:border-purple-500/40",
    hoverShadow: "hover:shadow-[0_20px_40px_-15px_rgba(168,85,247,0.1)]",
    // Base card group styling + individual button hover configuration
    badgeGroupHover: "group-hover:text-purple-300 group-hover:border-purple-500/10",
    badgeIndividualHover: "hover:!text-purple-400 hover:!border-t-purple-400 hover:!border-r-purple-400 hover:!border-b-transparent hover:!border-l-transparent"
  },
  {
    title: "Backend",
    icon: <FaServer className="text-xl" />,
    skills: ["Node.js", "Express.js", "FastAPI", "Flask"],
    accentColor: "text-indigo-400",
    hoverBorder: "hover:border-indigo-500/40",
    hoverShadow: "hover:shadow-[0_20px_40px_-15px_rgba(99,102,241,0.1)]",
    badgeGroupHover: "group-hover:text-indigo-300 group-hover:border-indigo-500/10",
    badgeIndividualHover: "hover:!text-indigo-400 hover:!border-t-indigo-400 hover:!border-r-indigo-400 hover:!border-b-transparent hover:!border-l-transparent"
  },
  {
    title: "Database",
    icon: <FaDatabase className="text-xl" />,
    skills: ["MongoDB", "PostgreSQL", "SQLite"],
    accentColor: "text-emerald-400",
    hoverBorder: "hover:border-emerald-500/40",
    hoverShadow: "hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.1)]",
    badgeGroupHover: "group-hover:text-emerald-300 group-hover:border-emerald-500/10",
    badgeIndividualHover: "hover:!text-emerald-400 hover:!border-t-emerald-400 hover:!border-r-emerald-400 hover:!border-b-transparent hover:!border-l-transparent"
  },
  {
    title: "Languages",
    icon: <FaCode className="text-xl" />,
    skills: ["Python", "JavaScript", "C++"],
    accentColor: "text-sky-400",
    hoverBorder: "hover:border-sky-500/40",
    hoverShadow: "hover:shadow-[0_20px_40px_-15px_rgba(56,189,248,0.1)]",
    badgeGroupHover: "group-hover:text-sky-300 group-hover:border-sky-500/10",
    badgeIndividualHover: "hover:!text-sky-400 hover:!border-t-sky-400 hover:!border-r-sky-400 hover:!border-b-transparent hover:!border-l-transparent"
  },
  {
    title: "Tools",
    icon: <FaWrench className="text-xl" />,
    skills: ["Git", "GitHub", "VS Code", "Postman", "Docker"],
    accentColor: "text-amber-400",
    hoverBorder: "hover:border-amber-500/40",
    hoverShadow: "hover:shadow-[0_20px_40px_-15px_rgba(245,158,11,0.1)]",
    badgeGroupHover: "group-hover:text-amber-300 group-hover:border-amber-500/10",
    badgeIndividualHover: "hover:!text-amber-400 hover:!border-t-amber-400 hover:!border-r-amber-400 hover:!border-b-transparent hover:!border-l-transparent"
  },
  {
    title: "Deployment",
    icon: <FaRocket className="text-xl" />,
    skills: ["Vercel", "Netlify", "Render"],
    accentColor: "text-arctic-cyan",
    hoverBorder: "hover:border-arctic-cyan/40",
    hoverShadow: "hover:shadow-[0_20px_40px_-15px_rgba(100,255,218,0.1)]",
    badgeGroupHover: "group-hover:text-text-secondary group-hover:border-arctic-cyan/10",
    badgeIndividualHover: "hover:!text-arctic-cyan hover:!border-t-arctic-cyan hover:!border-r-arctic-cyan hover:!border-b-transparent hover:!border-l-transparent"
  },
];

function Skills() {
  return (
    <section id="skills" className="bg-nordic-midnight text-text-primary py-28 px-6 md:px-12 lg:px-16 relative overflow-hidden">
      
      {/* Centered Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-arctic-cyan/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1250px] mx-auto relative z-10 w-full">
        
        {/* Section Header */}
        <div className="mb-16 text-left">
          <p className="text-arctic-cyan uppercase tracking-[0.3em] text-sm font-semibold">
            ABILITIES
          </p>
          <h2 className="text-5xl font-bold text-text-primary mt-3 tracking-wide">
            TECH STACK
          </h2>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className={`group bg-nordic-slate/60 backdrop-blur-md rounded-3xl border border-dark-steel/50 p-8 hover:-translate-y-2 transition-all duration-500 ease-out flex flex-col ${category.hoverBorder} ${category.hoverShadow}`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-7 border-b border-dark-steel/40 pb-4">
                <div className={`w-11 h-11 rounded-xl bg-nordic-midnight border border-dark-steel flex items-center justify-center shadow-inner group-hover:border-current ${category.accentColor} transition-colors duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-text-primary tracking-wide text-left">
                  {category.title}
                </h3>
              </div>

              {/* Skills Badge Container */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`inline-block px-3.5 py-1.5 bg-nordic-midnight text-text-secondary font-mono text-xs tracking-wide rounded-lg border border-dark-steel/60 transition-all duration-200 ease-out cursor-default ${category.badgeGroupHover} ${category.badgeIndividualHover}`}
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