import { useEffect, useRef } from 'react';

const BackgroundCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let animationFrameId;
    let particles = [];
    const particleCount = 45; // Performance-friendly particle density

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight || window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    // Extra delay hook to capture accurate page height once DOM layouts populate
    setTimeout(resizeCanvas, 100);

    // Initialize particles across full document height
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * (document.documentElement.scrollHeight || window.innerHeight),
        radius: Math.random() * 1.5 + 0.6,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        alpha: Math.random() * 0.5 + 0.15
      });
    }

    // Animation Render Loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        // Using your exact Arctic Cyan hex #64FFDA converted to RGB format
        ctx.fillStyle = `rgba(100, 255, 218, ${p.alpha})`; 
        ctx.fill();
      });

      // Draw interactive connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            // Swapped to Arctic Cyan wires utilizing your custom 0.15 opacity boundary
            ctx.strokeStyle = `rgba(100, 255, 218, ${0.15 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.5;
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
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* JavaScript Active Constellation Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-70" />

      {/* Floating Nebula Light Flares re-targeted to your custom Arctic Cyan theme */}
      <div className="fixed top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#64FFDA]/4 blur-[130px] pointer-events-none mix-blend-screen" />
      <div className="fixed bottom-[15%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-[#64FFDA]/4 blur-[150px] pointer-events-none mix-blend-screen" />
    </div>
  );
};

export default BackgroundCanvas;