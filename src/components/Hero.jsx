import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import profile from "../assets/images/Darshan-Profile.png";

function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const phrases = [
    "Full-Stack Developer", 
    "Building AI-Powered Solutions",
    "Open to Internships"
  ];

  useEffect(() => {
    const currentPhrase = phrases[loopIndex % phrases.length];
    
    const handleTyping = () => {
      if (!isDeleting) {
        // Typing forward
        const nextText = currentPhrase.slice(0, text.length + 1);
        setText(nextText);
        setTypingSpeed(100);

        if (nextText === currentPhrase) {
          setTypingSpeed(2000); // Pause on completed phrase
          setIsDeleting(true);
        }
      } else {
        // Deleting backward
        const nextText = currentPhrase.slice(0, text.length - 1);
        setText(nextText);
        setTypingSpeed(40); // Fast deletion speed

        // Fixed: Change phrase instantly when string is completely cleared
        if (nextText === "") {
          setIsDeleting(false);
          setLoopIndex((prev) => prev + 1);
          setTypingSpeed(200); // Tiny rest before typing next phrase
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopIndex, typingSpeed]);

  return (
    <section
      id="home"
      className="relative min-h-screen bg-nordic-midnight overflow-hidden flex items-center pt-28 pb-20 px-10 lg:px-12"
    >
      {/* Premium Theme Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-24 left-20 w-80 h-80 bg-arctic-cyan/5 blur-[140px] rounded-full animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-20 w-[420px] h-[420px] bg-bright-cyan/5 blur-[180px] rounded-full animate-pulse-glow" style={{ animationDelay: '-4s' }}></div>
      </div>

      {/* Main Container - Aligned precisely with About section */}
      <div className="max-w-[1250px] mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 items-center gap-12">
          
          {/* Left Side: Text and Actions */}
          <div className="text-left w-full">
            <h1 className="text-6xl md:text-7xl lg:text-[7rem] font-black tracking-tight leading-none text-text-primary pl-0 ml-0">
              DARSHAN
            </h1>

            {/* Title styled with a sleek White-to-Cyan premium developer gradient */}
            <h2 className="mt-6 text-2xl md:text-3xl lg:text-4xl font-semibold min-h-[4rem] lg:min-h-[3rem] text-text-primary">
              <span className="bg-gradient-to-r from-text-primary to-arctic-cyan bg-clip-text text-transparent">
                {text}
              </span>
              <span className="inline-block w-[3px] h-[1.1em] bg-arctic-cyan ml-1 animate-pulse align-middle">|</span>
            </h2>

            <p className="mt-5 text-lg text-text-secondary">
              3rd Year CSE @ SRM Ramapuram | Chennai
            </p>

            {/* High-Contrast Interactive Buttons Layout */}
            <div className="mt-12 flex flex-col sm:flex-row justify-start gap-5">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-70}
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-arctic-cyan hover:bg-bright-cyan text-nordic-midnight transition-all duration-300 hover:scale-105 font-bold shadow-lg shadow-arctic-cyan/10 cursor-pointer"
              >
                View My Work
              </Link>

              <Link
                to="connect"
                smooth={true}
                duration={500}
                offset={-70}
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-arctic-cyan/30 text-arctic-cyan hover:bg-arctic-cyan/5 transition-all duration-300 hover:scale-105 font-semibold cursor-pointer"
              >
                Let's Connect
              </Link>
            </div>
          </div>

          {/* Right Side: Cybernetic Profile Framing */}
          <div className="flex justify-center lg:justify-center animate-float">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-arctic-cyan/5 blur-3xl scale-110"></div>
              <img
                src={profile}
                alt="Darshan"
                className="relative w-[280px] sm:w-[340px] md:w-[380px] lg:w-[430px] rounded-full border-4 border-arctic-cyan/20 shadow-[0_0_80px_rgba(100,255,218,0.15)] object-cover aspect-square"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;