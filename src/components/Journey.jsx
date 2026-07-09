import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaTerminal, FaReact, FaServer, FaBrain } from 'react-icons/fa';

const journey = [
  {
    year: "2024",
    title: "Started B.Tech CSE (AI & ML)",
    location: "SRM Institute of Science and Technology, Ramapuram",
    description: "Launched my academic career focusing on Artificial Intelligence and Machine Learning foundations.",
    icon: <FaGraduationCap />,
    textColor: "text-blue-400",
    hoverBorder: "hover:border-blue-500/40",
    glow: "shadow-blue-500/10"
  },
  {
    year: "2024",
    title: "The Web Foundation",
    location: "Self-Paced Learning",
    description: "Mastered HTML5, CSS3, and Modern JavaScript. Built 10+ responsive frontend layouts.",
    icon: <FaCode />,
    textColor: "text-orange-400",
    hoverBorder: "hover:border-orange-500/40",
    glow: "shadow-orange-500/10"
  },
  {
    year: "2025",
    title: "Logic & Data Systems",
    location: "Core Engineering",
    description: "Developed deep proficiency in Python and SQL. Focused on algorithmic problem solving and database architecture.",
    icon: <FaTerminal />,
    textColor: "text-emerald-400",
    hoverBorder: "hover:border-emerald-500/40",
    glow: "shadow-emerald-500/10"
  },
  {
    year: "2025",
    title: "React & UI Architecture",
    location: "Modern Frontend",
    description: "Specialized in component-based architecture using React, Tailwind CSS, and Framer Motion for high-end UX.",
    icon: <FaReact />,
    textColor: "text-cyan-400",
    hoverBorder: "hover:border-cyan-500/40",
    glow: "shadow-cyan-500/10"
  },
  {
    year: "2026",
    title: "Full-Stack Expansion",
    location: "Backend & DevOps",
    description: "Scaled skills into Node.js, FastAPI, and Flask. Implemented secure RESTful APIs with MongoDB and PostgreSQL.",
    icon: <FaServer />,
    textColor: "text-violet-400",
    hoverBorder: "hover:border-violet-500/40",
    glow: "shadow-violet-500/10"
  },
  {
    year: "Present",
    title: "AI Integration",
    location: "Current Milestone",
    description: "Building production-grade AI applications. Fine-tuning models and improving DSA for competitive programming.",
    icon: <FaBrain />,
    textColor: "text-fuchsia-400",
    hoverBorder: "hover:border-fuchsia-500/40",
    glow: "shadow-fuchsia-500/10"
  },
];

function Journey() {
  return (
    <section id="journey" className="bg-nordic-midnight text-text-primary py-28 px-10 lg:px-12 relative overflow-hidden">
      
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-violet-600/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-emerald-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Main Container */}
      <div className="max-w-[1250px] mx-auto w-full relative z-10">
        
        {/* Left Aligned Heading */}
        <div className="mb-20 text-left">
          <p className="text-arctic-cyan uppercase tracking-[0.3em] text-sm font-semibold">
            THE TIMELINE
          </p>
          <h2 className="text-5xl font-bold text-text-primary mt-4 tracking-wide">
            MY JOURNEY
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          
          {/* Central Animated Line */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 w-[2px] bg-gradient-to-b from-violet-500 via-emerald-500 to-transparent"
          />

          <div className="space-y-16">
            {journey.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center justify-between md:justify-normal w-full ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot with Icon */}
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-nordic-midnight border-2 border-dark-steel z-20 group">
                  <div className={`text-sm ${item.textColor} group-hover:scale-125 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                </div>

                {/* Content Card */}
                <div className="w-[calc(100%-3rem)] md:w-[45%] ml-12 md:ml-0">
                  <div className={`bg-nordic-slate/60 backdrop-blur-md border border-dark-steel/60 p-6 rounded-3xl transition-all duration-300 group shadow-lg ${item.hoverBorder} ${item.glow}`}>
                    
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-xs font-mono font-bold tracking-widest uppercase ${item.textColor}`}>
                        {item.year}
                      </span>
                      <span className="text-[10px] text-text-secondary font-medium italic">
                        {item.location}
                      </span>
                    </div>

                    <h3 className={`text-xl font-bold text-text-primary mb-3 group-hover:${item.textColor} transition-colors`}>
                      {item.title}
                    </h3>
                    
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Journey;