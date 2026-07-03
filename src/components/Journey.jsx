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
    color: "text-blue-400",
    glow: "shadow-blue-500/20"
  },
  {
    year: "2024",
    title: "The Web Foundation",
    location: "Self-Paced Learning",
    description: "Mastered HTML5, CSS3, and Modern JavaScript. Built 10+ responsive frontend layouts.",
    icon: <FaCode />,
    color: "text-orange-400",
    glow: "shadow-orange-500/20"
  },
  {
    year: "2025",
    title: "Logic & Data Systems",
    location: "Core Engineering",
    description: "Developed deep proficiency in Python and SQL. Focused on algorithmic problem solving and database architecture.",
    icon: <FaTerminal />,
    color: "text-emerald-400",
    glow: "shadow-emerald-500/20"
  },
  {
    year: "2025",
    title: "React & UI Architecture",
    location: "Modern Frontend",
    description: "Specialized in component-based architecture using React, Tailwind CSS, and Framer Motion for high-end UX.",
    icon: <FaReact />,
    color: "text-cyan-400",
    glow: "shadow-cyan-500/20"
  },
  {
    year: "2026",
    title: "Full-Stack Expansion",
    location: "Backend & DevOps",
    description: "Scaled skills into Node.js, FastAPI, and Flask. Implemented secure RESTful APIs with MongoDB and PostgreSQL.",
    icon: <FaServer />,
    color: "text-violet-400",
    glow: "shadow-violet-500/20"
  },
  {
    year: "Present",
    title: "AI Integration",
    location: "Current Milestone",
    description: "Building production-grade AI applications. Fine-tuning models and improving DSA for competitive programming.",
    icon: <FaBrain />,
    color: "text-fuchsia-400",
    glow: "shadow-fuchsia-500/20"
  },
];

function Journey() {
  return (
    <section id="journey" className="bg-[#0B0F19] text-white py-28 px-10 lg:px-12 relative overflow-hidden">
      
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-violet-600/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-emerald-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Main Container - Synchronized Layout Grid */}
      <div className="max-w-[1250px] mx-auto w-full relative z-10">
        
        {/* Left Aligned Heading - Consistent across all views */}
        <div className="mb-20 text-left">
          <p className="text-violet-400 uppercase tracking-[0.3em] text-sm font-semibold">
            THE TIMELINE
          </p>
          <h2 className="text-5xl font-bold text-white mt-4 tracking-wide">
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
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-[#111827] border-2 border-gray-800 z-20 group">
                  <div className={`text-sm ${item.color} group-hover:scale-125 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                </div>

                {/* Content Card */}
                <div className={`w-[calc(100%-3rem)] md:w-[45%] ml-12 md:ml-0`}>
                  <div className={`bg-[#111827]/60 backdrop-blur-md border border-gray-800 p-6 rounded-3xl hover:border-violet-500/30 transition-all duration-300 group shadow-lg ${item.glow}`}>
                    
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-xs font-bold tracking-widest uppercase ${item.color}`}>
                        {item.year}
                      </span>
                      <span className="text-[10px] text-gray-500 font-medium italic">
                        {item.location}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-400 transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm leading-relaxed">
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