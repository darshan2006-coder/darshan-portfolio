import { useState } from 'react';
import { FaExternalLinkAlt, FaArrowLeft, FaGithub } from 'react-icons/fa';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "AI Healthcare Assistant",
      subtitle: "Intelligent Patient Triage System",
      description: "A production-ready, full-stack AI healthcare platform that performs multi-lingual symptom triage and intelligent risk evaluation. Built with strict safety guardrails, it dynamically triggers emergency hospital recommendations for severe cases, generates downloadable EHRs, and securely persists user consultation history via MongoDB Atlas.",
      tech: ["Node.js", "Express.js", "JavaScript", "HTML5", "CSS3","MongoDB Atlas", "Mongoose ODM", "Render Cloud Hosting","RESTful APIs"],
      github: "https://github.com/darshan2006-coder/AI-HealthCare-Assistant",
      demo: "https://ai-healthcare-assistant-kkwh.onrender.com",
      status: "Live",
      breakdown: [
             "Multi-lingual GenAI symptom assessment engine with strict safety guardrails and zero prescription drug generation",
             "Automated clinical risk evaluation that triggers emergency hospital and specialist recommendations for severe cases",
             "Cloud-backed Express & MongoDB Atlas backend for persistent consultation tracking and dynamic EHR PDF generation"
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
    <section id="projects" className="bg-nordic-midnight text-text-primary py-28 px-10 lg:px-12 min-h-screen">
      <div className="max-w-[1250px] mx-auto w-full">
        
        {/* Header */}
        <div className="mb-16 text-left">
          <p className="text-arctic-cyan uppercase tracking-[0.3em] text-sm font-semibold">
            PORTFOLIO
          </p>
          <h2 className="text-6xl font-bold mt-4 tracking-wide text-text-primary">PROJECTS</h2>
          <p className="text-text-secondary mt-6 text-sm max-w-2xl leading-relaxed">
            Transforming complex challenges into elegant, AI-driven applications.<br/>
            Explore my latest full-stack builds and intelligent systems.
          </p>
        </div>

        {/* --- PROJECT GRID (2 Columns Max) --- */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-nordic-slate border border-dark-steel rounded-2xl p-8 flex flex-col h-full hover:-translate-y-1 hover:border-arctic-cyan/20 hover:shadow-[0_20px_40px_-15px_rgba(100,255,218,0.07)] transition-all duration-300 ease-out relative overflow-hidden"
            >
              {/* Status Badge */}
              <span className="absolute top-6 right-6 px-3 py-1 text-xs font-mono border border-arctic-cyan/20 rounded-full text-arctic-cyan bg-nordic-midnight">
                {project.status}
              </span>

              <div className="mb-5">
                <p className="text-arctic-cyan/80 text-xs font-mono tracking-widest uppercase mb-2">
                  {project.subtitle}
                </p>
                <h3 className="text-2xl font-bold text-text-primary">
                  {project.title}
                </h3>
              </div>
              
              <p className="text-text-secondary mb-6 flex-grow leading-relaxed text-sm">
                {project.description}
              </p>

              {/* Technologies: Dark Background with Crisp White Wording inside */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1.5 rounded-lg bg-[#111c2e] text-white text-xs font-mono tracking-wide"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Card Action Buttons */}
              <div className="pt-6 border-t border-dark-steel/40 mt-auto flex flex-col xl:flex-row items-stretch xl:items-center justify-between gap-4">
                
                {/* Left Side Buttons Container */}
                <div className="flex flex-wrap items-center gap-2.5">
                  {/* GitHub Button - Pure White Border, No Background, White Text */}
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex flex-1 sm:flex-none items-center justify-center gap-2 px-3.5 py-2.5 rounded-lg border border-white bg-transparent text-white hover:bg-white/5 transition-all text-xs font-bold tracking-widest uppercase"
                  >
                    <span className="font-mono text-sm font-black">{'</>'}</span>
                    GITHUB
                  </a>

                  {/* Demo Button - Pure White Border, No Background, White Text */}
                  {project.demo && (
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex flex-1 sm:flex-none items-center justify-center gap-2 px-3.5 py-2.5 rounded-lg border border-white bg-transparent text-white hover:bg-white/5 transition-all text-xs font-bold tracking-widest uppercase"
                    >
                      <FaExternalLinkAlt size={10} />
                      LIVE DEMO
                    </a>
                  )}
                </div>

                {/* Project Details Button - Neon Mint Accent matching your upload */}
                <button 
                  onClick={() => setActiveProject(project)}
                  className="inline-flex items-center justify-center w-full xl:w-auto px-5 py-2.5 rounded-xl bg-[#53FCDB] hover:bg-[#3be0bf] text-nordic-midnight font-bold shadow-[0_0_25px_rgba(83,252,219,0.3)] transition-all duration-300 text-xs tracking-widest uppercase whitespace-nowrap cursor-pointer hover:-translate-y-0.5"
                >
                  PROJECT DETAILS
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* --- FULL SCREEN OVERLAY VIEW --- */}
        {activeProject && (
          <div className="fixed inset-0 z-50 bg-nordic-midnight overflow-y-auto py-20 px-10 lg:px-12 animate-in fade-in duration-300">
            <div className="max-w-[1250px] mx-auto w-full">
              
              {/* Back to Portfolio Button */}
              <button 
                onClick={() => setActiveProject(null)}
                className="group inline-flex items-center gap-3 px-5 py-2.5 rounded-xl bg-nordic-slate hover:bg-dark-steel border border-dark-steel text-text-secondary hover:text-text-primary font-semibold mb-12 transition-all duration-300 cursor-pointer"
              >
                <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
                Back to Portfolio
              </button>

              {/* Isolated Space Container */}
              <div className="bg-nordic-slate border border-dark-steel rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-arctic-cyan/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>

                <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
                  
                  {/* Left Side Info */}
                  <div className="lg:col-span-3">
                    <p className="text-arctic-cyan tracking-[0.3em] text-sm font-mono uppercase mb-3">
                      {activeProject.subtitle}
                    </p>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-6">
                      {activeProject.title}
                    </h2>
                    <p className="text-text-secondary text-lg leading-relaxed mb-10">
                      {activeProject.description}
                    </p>

                    <div className="flex flex-wrap gap-4">
                      <a 
                        href={activeProject.github}
                        target="_blank"
                        rel="noreferrer" 
                        className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border-2 border-white bg-transparent text-white hover:bg-white/5 transition-all font-semibold"
                      >
                        <FaGithub size={20} />
                        Source Code
                      </a>
                      {activeProject.demo && (
                        <a 
                          href={activeProject.demo}
                          target="_blank"
                          rel="noreferrer"  
                          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#53FCDB] hover:bg-[#3be0bf] text-nordic-midnight font-bold shadow-[0_0_20px_rgba(83,252,219,0.2)] transition-all"
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
                      <h4 className="text-xl font-bold text-text-primary mb-5 border-b border-dark-steel pb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {activeProject.tech.map((t, index) => (
                          <span 
                            key={index} 
                            className="px-4 py-2 rounded-lg bg-[#111c2e] text-sm font-mono text-white"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-text-primary mb-5 border-b border-dark-steel pb-3">Key Architecture</h4>
                      <ul className="space-y-4">
                        {activeProject.breakdown.map((item, idx) => (
                          <li key={idx} className="flex gap-4">
                            <span className="mt-1.5 w-2 h-2 rounded-full bg-arctic-cyan shrink-0 shadow-[0_0_8px_rgba(100,255,218,0.6)]"></span>
                            <span className="text-text-secondary leading-relaxed text-sm md:text-base">
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