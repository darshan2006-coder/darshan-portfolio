import { Link } from "react-scroll";
import profile from "../assets/images/Darshan-Profile.png";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#0B0F19] overflow-hidden flex items-center pt-20"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-24 left-20 w-80 h-80 bg-violet-600/20 blur-[140px] rounded-full animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-20 w-[420px] h-[420px] bg-indigo-500/15 blur-[180px] rounded-full animate-pulse-glow" style={{ animationDelay: '-4s' }}></div>
      </div>

      {/* Main Container - Using exact same structure as subsequent sections */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-16 lg:px-24">
        <div className="grid lg:grid-cols-2 items-center gap-10">
          
          {/* Left Side: Completely flush against the left padding layout boundary */}
          <div className="text-left w-full">
            <h1 className="text-6xl md:text-7xl lg:text-[7rem] font-black tracking-tight leading-none text-white pl-0 ml-0">
              DARSHAN
            </h1>

            <h2 className="mt-6 text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              AI + Full-Stack Developer
            </h2>

            <p className="mt-5 text-lg text-gray-400">
              3rd Year CSE @ SRM Ramapuram | Chennai
            </p>

            {/* Fixed Buttons Layout */}
            <div className="mt-12 flex flex-col sm:flex-row justify-start gap-5">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-70}
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-violet-600 hover:bg-violet-500 transition-all duration-300 hover:scale-105 font-semibold shadow-lg shadow-violet-600/30 cursor-pointer text-white"
              >
                View My Work
              </Link>

              <Link
                to="connect"
                smooth={true}
                duration={500}
                offset={-70}
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-violet-500 hover:bg-violet-500/10 transition-all duration-300 hover:scale-105 font-semibold cursor-pointer text-white"
              >
                Let's Connect
              </Link>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex justify-center lg:justify-end animate-float">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-violet-500/20 blur-3xl scale-110"></div>
              <img
                src={profile}
                alt="Darshan"
                className="relative w-[300px] md:w-[360px] lg:w-[430px] rounded-full border-4 border-violet-500/30 shadow-[0_0_80px_rgba(124,58,237,0.35)]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;