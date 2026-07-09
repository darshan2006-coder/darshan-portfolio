import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    "home",
    "about",
    "skills",
    "projects",
    "journey",
    "connect",
  ];

  return (
    // Outer Wrapper: Spans full screen width and applies the base horizontal layout padding
    <header
      className={`fixed top-0 left-0 w-full z-50 px-10 lg:px-12 transition-all duration-300 ${
        scrolled
          ? "bg-nordic-midnight/80 backdrop-blur-xl shadow-lg border-b border-dark-steel/40"
          : "bg-transparent"
      }`}
    >
      {/* Inner Navigation Container: Re-aligned to perfectly mirror the Hero content constraint */}
      <nav className="max-w-[1250px] mx-auto flex justify-between items-center h-20 w-full">

        {/* Logo - Anchors flawlessly onto the grid wall */}
        <h1 className="text-2xl font-bold tracking-wide text-text-primary pl-0 ml-0 select-none">
          DARSHAN
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={item}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                activeClass="text-arctic-cyan font-semibold"
                className="cursor-pointer text-text-secondary hover:text-arctic-cyan transition-colors duration-200"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        {/* High-Contrast Arctic Cyan Resume Button */}
        <a
          href="/resume.pdf"
          className="hidden md:inline-flex px-5 py-2.5 rounded-xl bg-arctic-cyan hover:bg-bright-cyan text-nordic-midnight transition duration-300 font-bold text-sm shadow-md shadow-arctic-cyan/5"
        >
          Download Resume
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-text-primary text-3xl focus:outline-none"
        >
          {menuOpen ? <HiX /> : <HiMenu className="text-arctic-cyan" />}
        </button>

      </nav>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-nordic-slate border-t border-arctic-cyan/15 shadow-xl mx-[-2.5rem]">
          <div className="flex flex-col px-10 py-6 gap-6">
            {navItems.map((item) => (
              <Link
                key={item}
                to={item}
                smooth={true}
                duration={500}
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer text-text-secondary hover:text-arctic-cyan transition-colors duration-200"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}

            <a 
              href="/resume.pdf" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-arctic-cyan hover:bg-bright-cyan text-nordic-midnight transition duration-300 font-bold text-sm"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;