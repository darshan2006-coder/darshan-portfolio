import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  // Shortened clean tech statement
  const uniqueSentence = "Bridging Engineering with Intelligent Systems.";
  const [typedText, setTypedText] = useState("");
  const canvasRef = useRef(null);

  // 1. Calibrated Typing Engine (Strict 2s Lifespan)
  useEffect(() => {
    if (typedText.length < uniqueSentence.length) {
      const timeout = setTimeout(() => {
        setTypedText(uniqueSentence.slice(0, typedText.length + 1));
      }, 20); // Perfectly balanced interval for the shortened text length
      return () => clearTimeout(timeout);
    } else {
      const finishTimeout = setTimeout(() => {
        onComplete();
      }, 300);
      return () => clearTimeout(finishTimeout);
    }
  }, [typedText, onComplete]);

  // 2. Full-Screen Dynamic Explosion Engine
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let animationFrameId;
    const particles = [];
    const particleCount = 145;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 3.0 + 0.6; 
      
      particles.push({
        x: centerX,
        y: centerY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        radius: Math.random() * 1.8 + 0.5,
        alpha: Math.random() * 0.6 + 0.3,
        color: Math.random() > 0.4 ? '139, 92, 246' : '168, 85, 247'
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 95) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(124, 58, 237, ${0.12 * (1 - dist / 95)})`;
            ctx.lineWidth = 0.4;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <motion.div 
      initial={{ y: 0 }}
      exit={{ y: "-100%" }} 
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }} 
      className="fixed inset-0 bg-[#0B0F19] z-[9999] flex flex-col items-center justify-center overflow-hidden select-none"
    >
      <canvas 
        ref={canvasRef} 
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-0" 
      />

      <div className="absolute w-[450px] h-[450px] rounded-full bg-violet-600/10 blur-[110px] pointer-events-none z-0" />

      <div className="relative flex flex-col items-center justify-center p-4 z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mb-5"
        >
          <h1 className="text-5xl md:text-7xl font-black tracking-[0.25em] bg-gradient-to-r from-white via-violet-200 to-violet-400 bg-clip-text text-transparent font-sans ml-[0.25em]">
            DARSHAN R
          </h1>
        </motion.div>

        {/* Clean, high-contrast white text layout block */}
        <div className="h-8 flex items-center justify-center">
          <p className="text-white/95 font-mono text-sm md:text-base font-semibold tracking-[0.15em] uppercase whitespace-nowrap">
            {typedText}
            <span className="animate-pulse ml-0.5 text-white">|</span>
          </p>
        </div>

      </div>
    </motion.div>
  );
};

export default Preloader;