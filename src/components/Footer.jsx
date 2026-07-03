import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Footer() {
  return (
    <footer className="bg-[#080C14] border-t border-violet-500/20 text-white py-12 px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

        {/* Left Section: DARSHAN styled like the old subtitle */}
        <div className="text-center md:text-left">
          <p className="text-gray-400 text-sm font-medium tracking-widest uppercase">
            DARSHAN
          </p>
        </div>

        {/* Center Section: Social Links */}
        <div className="flex gap-6 text-xl items-center">
          <a
            href="https://github.com/darshan2006-coder"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-white hover:-translate-y-1 transition-all duration-300 ease-out"
          >
            <FaGithub size={22} />
          </a>

          <a
            href="https://www.linkedin.com/in/darshan-ai-dev"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-blue-400 hover:-translate-y-1 transition-all duration-300 ease-out"
          >
            <FaLinkedin size={22} />
          </a>

          <a
            href="https://leetcode.com/DARSHAN-2006"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-amber-500 hover:-translate-y-1 transition-all duration-300 ease-out"
          >
            <SiLeetcode size={22} />
          </a>
        </div>

        {/* Right Section: Cleaner copyright text */}
        <div className="text-gray-500 text-xs tracking-wide text-center md:text-right font-medium">
          <p>© {new Date().getFullYear()} All rights reserved.</p>
          <p className="mt-1.5 text-gray-600">
            Built with React & Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;