import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Footer() {
  return (
    <footer className="bg-[#070a11] border-t border-dark-steel/60 text-text-primary py-12 px-10 lg:px-12">
      <div className="max-w-[1250px] mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-8">

        {/* Left Section: Signature Branding */}
        <div className="text-center md:text-left">
          <p className="text-arctic-cyan text-sm font-semibold tracking-[0.25em] uppercase font-mono">
            DARSHAN
          </p>
        </div>

        {/* Center Section: Social Links */}
        <div className="flex gap-6 text-xl items-center">
          <a
            href="https://github.com/darshan2006-coder"
            target="_blank"
            rel="noreferrer"
            className="text-text-secondary hover:text-arctic-cyan hover:-translate-y-1 transition-all duration-300 ease-out"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/darshan-ai-dev"
            target="_blank"
            rel="noreferrer"
            className="text-text-secondary hover:text-arctic-cyan hover:-translate-y-1 transition-all duration-300 ease-out"
          >
            <FaLinkedin size={20} />
          </a>

          <a
            href="https://leetcode.com/DARSHAN-2006"
            target="_blank"
            rel="noreferrer"
            className="text-text-secondary hover:text-arctic-cyan hover:-translate-y-1 transition-all duration-300 ease-out"
          >
            <SiLeetcode size={20} />
          </a>
        </div>

        {/* Right Section: System Metrics */}
        <div className="text-text-secondary text-xs tracking-wide text-center md:text-right font-medium">
          <p>© {new Date().getFullYear()} All rights reserved.</p>
          <p className="mt-1.5 opacity-60 text-xs">
            Built with React & Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;