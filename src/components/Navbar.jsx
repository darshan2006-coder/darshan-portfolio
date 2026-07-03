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
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0B0F19]/80 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-8 lg:px-16 h-20">

        {/* Logo */}

        <h1 className="text-2xl font-bold tracking-wide text-white">
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
                activeClass="text-violet-400"
                className="cursor-pointer text-gray-300 hover:text-violet-400 transition"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}

        </ul>

        {/* Resume Button */}

        <a
          href="/resume.pdf"
          className="hidden md:inline-flex px-5 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 transition font-semibold"
        >
          Download Resume
        </a>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-3xl"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>

      </nav>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="md:hidden bg-[#111827] border-t border-violet-500/20">

          <div className="flex flex-col px-8 py-6 gap-6">

            {navItems.map((item) => (
              <Link
                key={item}
                to={item}
                smooth={true}
                duration={500}
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer text-gray-300 hover:text-violet-400"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}

           <a href="/resume.pdf" className="hidden md:inline-flex items-center justify-center px-6 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 transition font-semibold text-sm text-white">
                    Download Resume
           </a>

          </div>

        </div>
      )}
    </header>
  );
}

export default Navbar;