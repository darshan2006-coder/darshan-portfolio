import React from 'react';
import { FaBrain, FaMapMarkerAlt, FaBullseye, FaRocket } from 'react-icons/fa';

function About() {
  return (
    <section
      id="about"
      className="bg-[#0B0F19] text-white py-24 px-10 lg:px-12 relative overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-600/5 blur-[100px] rounded-full pointer-events-none"></div>

      {/* Main Container - Matched perfectly to Hero.jsx */}
      <div className="max-w-[1250px] mx-auto w-full relative z-10">
        
        {/* Main Section Heading */}
        <div className="mb-12 text-left">
          <p className="text-violet-400 uppercase tracking-[0.3em] text-sm font-semibold">
            DISCOVER
          </p>
          <h2 className="text-5xl font-bold text-white mt-3 tracking-wide">
            ABOUT ME
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side: Bio */}
          <div className="space-y-5">
            <p className="text-gray-400 text-lg leading-relaxed">
              I'm passionate about building modern web applications and
              AI-powered intelligent systems that solve real-world problems.
              I enjoy turning ideas into practical software while exploring
              new technologies and improving through every project I build.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              My goal is to create scalable, impactful applications that
              make a difference, constantly pushing the boundaries of what I can create.
            </p>
          </div>

          {/* Right Side: Modern Bento Box Design */}
          <div className="grid grid-cols-2 gap-4">
            
            {/* Bento Card 1: Focus (Spans both columns) */}
            <div className="col-span-2 group bg-[#111827] border border-gray-800 rounded-3xl p-6 hover:-translate-y-1 hover:border-violet-500/40 hover:shadow-[0_15px_30px_-10px_rgba(139,92,246,0.15)] transition-all duration-300">
              <div className="flex items-center gap-4 mb-3">
                <FaBrain className="text-violet-400 text-2xl group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-gray-400 text-sm font-semibold uppercase tracking-wider">Currently Building</h3>
              </div>
              <p className="text-xl font-bold text-white tracking-wide">
                AI-Powered Intelligent Systems
              </p>
            </div>

            {/* Bento Card 2: Goal */}
            <div className="col-span-1 group bg-[#111827] border border-gray-800 rounded-3xl p-6 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-[0_15px_30px_-10px_rgba(16,185,129,0.15)] transition-all duration-300">
              <FaBullseye className="text-emerald-400 text-2xl mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1">Goal</h3>
              <p className="text-lg font-bold text-white">Securing Tech Opportunities</p>
            </div>

            {/* Bento Card 3: Location */}
            <div className="col-span-1 group bg-[#111827] border border-gray-800 rounded-3xl p-6 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-[0_15px_30px_-10px_rgba(59,130,246,0.15)] transition-all duration-300">
              <FaMapMarkerAlt className="text-blue-400 text-2xl mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1">Base</h3>
              <p className="text-lg font-bold text-white">Chennai, India</p>
            </div>

            {/* Bento Card 4: Exploring (Spans both columns) */}
            <div className="col-span-2 group bg-[#111827] border border-gray-800 rounded-3xl p-6 hover:-translate-y-1 hover:border-amber-500/40 hover:shadow-[0_15px_30px_-10px_rgba(245,158,11,0.15)] transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <FaRocket className="text-amber-400 text-2xl group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-gray-400 text-sm font-semibold uppercase tracking-wider">Exploring</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Backend Tech", "AI Systems", "Cloud Computing", "DSA"].map((tech) => (
                  <span key={tech} className="px-3 py-1.5 bg-gray-900 border border-gray-700 rounded-lg text-xs font-bold text-gray-300 tracking-wide">
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