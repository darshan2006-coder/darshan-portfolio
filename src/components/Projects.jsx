import { useState } from 'react';
import { FaExternalLinkAlt, FaArrowLeft, FaGithub } from 'react-icons/fa';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "AI Healthcare Assistant",
      subtitle: "Intelligent Patient Triage System",
      description: "An AI-powered healthcare assistant that helps users assess symptoms, evaluates patient risk, generates medical reports, and securely manages consultation history through a responsive web application.",
      tech: ["Node.js", "Express.js", "JavaScript", "HTML5", "CSS3"],
      github: "https://github.com/darshan2006-coder/AI-HealthCare-Assistant",
      demo: "https://ai-healthcare-assistant-kkwh.onrender.com",
      status: "Live",
      breakdown: [
        "NLP-driven symptom assessment engine for accurate triage",
        "Automated patient risk evaluation and data processing",
        "Responsive, accessible UI with seamless report generation"
      ]
    },
    {
      id: 2,
      title: "AI Resume ATS Analyzer",
      subtitle: "Intelligent Recruitment Tool",
      description: "An AI-powered resume analyzer that deeply compares resumes with job descriptions, providing ATS compatibility insights, keyword gaps, and actionable improvement metrics.",
      tech: ["React", "FastAPI", "PostgreSQL", "OpenAI API"],
      github: "#",
      demo: "#",
      status: "In Progress",
      breakdown: [
        "Semantic parsing and data extraction from PDF resumes",
        "OpenAI API integration for contextual keyword matching",
        "Real-time scoring algorithm for ATS compatibility",
        "Secure database architecture for user history"
      ]
    },
    {
      id: 3,
      title: "Next-Gen Platform",
      subtitle: "Stealth Project",
      description: "A new AI-powered full-stack architecture is currently under planning and development. Exploring edge-computing and advanced vector databases. Stay tuned for future updates.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
      github: "#",
      demo: null,
      status: "Coming Soon",
      breakdown: [
        "System architecture and cloud infrastructure planning",
        "Relational and Vector database schema design",
        "Advanced authentication and security protocols",
        "Modern UI/UX prototyping and wireframing"
      ]
    }
  ];

  return (
    <section id="projects" className="bg-[#0B0F19] text-white py-28 px-10 lg:px-12 min-h-screen">
      <div className="max-w-[1250px] mx-auto w-full">
        
        {/* Header - Aligned perfectly */}
        <div className="mb-16 text-left">
          <h2 className="text-6xl font-bold mt-4">PROJECTS</h2>
          <p className="text-gray-400 mt-6 text-sm max-w-2xl leading-relaxed">
            Transforming complex challenges into elegant, AI-driven applications.<br/>
            Explore my latest full-stack builds and intelligent systems.
          </p>
        </div>

        {/* --- PROJECT GRID (Strictly 2 Columns Max) --- */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-[#111827] border border-violet-500/20 rounded-2xl p-8 flex flex-col h-full hover:-translate-y-2 hover:border-violet-500/60 hover:shadow-[0_15px_40px_-10px_rgba(124,58,237,0.25)] transition-all duration-300 ease-out relative overflow-hidden"
            >
              {/* Status Badge */}
              <span className="absolute top-6 right-6 px-3 py-1 text-xs font-semibold bg-[#0B0F19] border border-violet-500/30 rounded-full text-violet-300">
                {project.status}
              </span>

              <div className="mb-5">
                <p className="text-violet-400 text-xs font-bold tracking-widest uppercase mb-2">
                  {project.subtitle}
                </p>
                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>
              </div>
              
              <p className="text-gray-400 mb-6 flex-grow leading-relaxed text-sm">
                {project.description}
              </p>

              {/* Attractive, Glowing Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1.5 rounded-md bg-violet-900/30 border border-violet-500/40 text-xs font-semibold text-violet-200 shadow-[0_0_10px_rgba(139,92,246,0.1)]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Card Action Buttons */}
              <div className="pt-6 border-t border-gray-800/60 mt-auto flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  {/* GitHub Button */}
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md border border-gray-600 hover:border-gray-400 text-white transition-all text-xs font-bold tracking-widest uppercase"
                  >
                    <span className="font-mono text-sm font-black">{'</>'}</span>
                    GITHUB
                  </a>

                  {/* Demo Button */}
                  {project.demo && (
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md border border-gray-600 hover:border-gray-400 text-white transition-all text-xs font-bold tracking-widest uppercase"
                    >
                      <FaExternalLinkAlt size={11} />
                      LIVE DEMO
                    </a>
                  )}
                </div>

                {/* Project Details Button */}
                <button 
                  onClick={() => setActiveProject(project)}
                  className="inline-flex items-center justify-center px-4 py-2.5 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all text-xs font-bold tracking-widest uppercase whitespace-nowrap"
                >
                  PROJECT DETAILS
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* --- FULL SCREEN OVERLAY VIEW --- */}
        {activeProject && (
          <div className="fixed inset-0 z-50 bg-[#0B0F19] overflow-y-auto py-20 px-10 lg:px-12 animate-in fade-in duration-300">
            <div className="max-w-[1250px] mx-auto w-full">
              
              {/* Back to Portfolio Button */}
              <button 
                onClick={() => setActiveProject(null)}
                className="group inline-flex items-center gap-3 px-5 py-2.5 rounded-xl bg-gray-800/50 hover:bg-gray-800 border border-gray-700 text-gray-300 hover:text-white font-semibold mb-12 transition-all duration-300"
              >
                <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
                Back to Portfolio
              </button>

              {/* Isolated Space Container */}
              <div className="bg-[#111827] border border-violet-500/20 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-600/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

                <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
                  
                  {/* Left Side Info */}
                  <div className="lg:col-span-3">
                    <p className="text-emerald-400 tracking-[0.3em] text-sm font-bold uppercase mb-3">
                      {activeProject.subtitle}
                    </p>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                      {activeProject.title}
                    </h2>
                    <p className="text-gray-300 text-lg leading-relaxed mb-10">
                      {activeProject.description}
                    </p>

                    <div className="flex flex-wrap gap-4">
                      <a 
                        href={activeProject.github}
                        target="_blank"
                        rel="noreferrer" 
                        className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border-2 border-gray-600 hover:border-white text-gray-300 hover:text-white transition-all font-semibold"
                      >
                        <FaGithub size={20} />
                        Source Code
                      </a>
                      {activeProject.demo && (
                        <a 
                          href={activeProject.demo}
                          target="_blank"
                          rel="noreferrer"  
                          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.25)] transition-all font-semibold text-white"
                        >
                          <FaExternalLinkAlt size={16} />
                          View Live Application
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right Side Info */}
                  <div className="lg:col-span-2 space-y-10">
                    <div>
                      <h4 className="text-xl font-bold text-white mb-5 border-b border-gray-800 pb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {activeProject.tech.map((t, index) => (
                          <span 
                            key={index} 
                            className="px-4 py-2 rounded-lg bg-violet-900/20 border border-violet-500/30 text-sm font-semibold text-violet-300 shadow-inner"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-white mb-5 border-b border-gray-800 pb-3">Key Architecture</h4>
                      <ul className="space-y-4">
                        {activeProject.breakdown.map((item, idx) => (
                          <li key={idx} className="flex gap-4">
                            <span className="mt-1.5 w-2 h-2 rounded-full bg-emerald-500 shrink-0 shadow-[0_0_8px_#10b981]"></span>
                            <span className="text-gray-300 leading-relaxed text-sm md:text-base">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Projects;