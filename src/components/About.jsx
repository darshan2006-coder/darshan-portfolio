import React from 'react';
import { FaBrain, FaMapMarkerAlt, FaBullseye, FaRocket } from 'react-icons/fa';

function About() {
  return (
    <section
      id="about"
      className="bg-nordic-midnight text-text-primary py-24 px-10 lg:px-12 relative overflow-hidden"
    >
      {/* Dynamic Arctic Cyan Background Ambient Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-arctic-cyan/5 blur-[100px] rounded-full pointer-events-none"></div>

      {/* Main Container */}
      <div className="max-w-[1250px] mx-auto w-full relative z-10">
        
        {/* Main Section Heading */}
        <div className="mb-12 text-left">
          <p className="text-arctic-cyan uppercase tracking-[0.3em] text-sm font-semibold">
            DISCOVER
          </p>
          <h2 className="text-5xl font-bold text-text-primary mt-3 tracking-wide">
            ABOUT ME
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Clean Bio Layout */}
          <div className="space-y-5">
            <p className="text-text-secondary text-lg leading-relaxed">
              I'm passionate about building modern web applications and
              AI-powered intelligent systems that solve real-world problems.
              I enjoy turning ideas into practical software while exploring
              new technologies and improving through every project I build.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed">
              My goal is to create scalable, impactful applications that
              make a difference, constantly pushing the boundaries of what I can create.
            </p>
          </div>

          {/* Right Side: Rebalanced 3-Column Premium Bento Box */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
            
            {/* Bento Card 1: Focus (Spans 2 columns) */}
            <div className="sm:col-span-2 group bg-nordic-slate/60 backdrop-blur-md border border-dark-steel rounded-2xl p-5 hover:-translate-y-1 hover:border-arctic-cyan/30 hover:shadow-[0_15px_30px_-10px_rgba(100,255,218,0.06)] transition-all duration-300 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-2">
                <FaBrain className="text-emerald-400 text-xl group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-text-secondary text-xs font-semibold uppercase tracking-wider">Currently Building</h3>
              </div>
              <p className="text-lg font-bold text-text-primary tracking-wide">
                AI-Powered Intelligent Systems
              </p>
            </div>

            {/* Bento Card 2: Goal (Spans 1 column) */}
            <div className="sm:col-span-1 group bg-nordic-slate/60 backdrop-blur-md border border-dark-steel rounded-2xl p-5 hover:-translate-y-1 hover:border-arctic-cyan/30 hover:shadow-[0_15px_30px_-10px_rgba(100,255,218,0.06)] transition-all duration-300 flex flex-col justify-center">
              <FaBullseye className="text-red-400 text-xl mb-2 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-text-secondary text-[10px] font-semibold uppercase tracking-wider mb-0.5">Goal</h3>
              <p className="text-sm font-bold text-text-primary leading-tight">Securing Tech Opportunities</p>
            </div>

            {/* Bento Card 3: Location (Spans 1 column) */}
            <div className="sm:col-span-1 group bg-nordic-slate/60 backdrop-blur-md border border-dark-steel rounded-2xl p-5 hover:-translate-y-1 hover:border-arctic-cyan/30 hover:shadow-[0_15px_30px_-10px_rgba(100,255,218,0.06)] transition-all duration-300 flex flex-col justify-center">
              <FaMapMarkerAlt className="text-coral-500 text-xl mb-2 style={{ color: '#ff6b6b' }} group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-text-secondary text-[10px] font-semibold uppercase tracking-wider mb-0.5">Base</h3>
              <p className="text-sm font-bold text-text-primary leading-tight">Chennai, India</p>
            </div>

            {/* Bento Card 4: Exploring (Spans 2 columns) */}
            <div className="sm:col-span-2 group bg-nordic-slate/60 backdrop-blur-md border border-dark-steel rounded-2xl p-5 hover:-translate-y-1 hover:border-arctic-cyan/30 hover:shadow-[0_15px_30px_-10px_rgba(100,255,218,0.06)] transition-all duration-300 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-3">
                <FaRocket className="text-orange-400 text-lg group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-text-secondary text-xs font-semibold uppercase tracking-wider">Exploring</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {["Backend Tech", "AI Systems", "Cloud", "DSA"].map((tech) => (
                  <span 
                    key={tech} 
                    className="px-2.5 py-1 bg-nordic-midnight border border-dark-steel/60 rounded-md text-[11px] font-medium font-mono text-text-secondary tracking-wide group-hover:text-arctic-cyan group-hover:border-arctic-cyan/20 transition-all duration-200 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;