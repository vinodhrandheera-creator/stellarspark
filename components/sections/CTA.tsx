
import React, { useEffect, useRef } from 'react';

interface CTAProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onViewServices: () => void;
  onStartConversation: () => void;
}

const ParticleWave: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
    let height = canvas.height = canvas.parentElement?.clientHeight || 600;

    const particles: { x: number; z: number; baseOpacity: number }[] = [];
    const countX = 60; // Increased density
    const countZ = 45; 
    const spacingX = width / countX;
    const spacingZ = height / countZ;

    for (let x = 0; x < countX; x++) {
      for (let z = 0; z < countZ; z++) {
        particles.push({
          x: x * spacingX,
          z: z * spacingZ,
          baseOpacity: 0.8 + Math.random() * 0.2
        });
      }
    }

    let time = 0;
    const render = () => {
      time += 0.012;
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      particles.forEach((p) => {
        const wave1 = Math.sin(p.x * 0.005 + time) * 40;
        const wave2 = Math.sin(p.z * 0.008 + time * 1.2) * 30;
        const y = centerY + wave1 + wave2 + (p.z - height / 2) * 0.5;

        const scale = (p.z / height) * 0.8 + 0.2;
        const size = 1.6 * scale; // Slightly larger particles
        const opacity = p.baseOpacity * scale * (0.6 + Math.sin(time + p.x * 0.01) * 0.4);

        ctx.beginPath();
        ctx.arc(p.x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(249, 115, 22, ${opacity * 0.9})`; // Higher visibility
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);
    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0 pointer-events-none opacity-80" // Increased canvas opacity
    />
  );
};

const CTA: React.FC<CTAProps> = ({ 
  title = "Build the right system. The right way.",
  description = "Choose analytical precision and long-term stability for your enterprise software projects.",
  primaryButtonText = "Start a Conversation",
  secondaryButtonText,
  onViewServices, 
  onStartConversation 
}) => {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="relative bg-[#020617] rounded-[3.5rem] overflow-hidden px-8 py-24 md:px-16 md:py-32 text-center border border-white/5 shadow-[0_40px_100px_rgba(0,0,0,0.2)]">
          {/* Background matching Hero section */}
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0f172a] via-[#020617] to-[#010309]"></div>
          
          <ParticleWave />
          
          <div className="absolute inset-0 z-0 tech-mesh opacity-[0.06]"></div>
          
          {/* Cinematic Glow */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] mix-blend-screen opacity-20"></div>
          
          <div className="relative z-10 max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-extrabold text-white mb-8 leading-tight tracking-tight">
              {title}
            </h2>
            <p className="text-slate-400 text-base md:text-lg mb-14 leading-relaxed max-w-2xl mx-auto">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button 
                onClick={onStartConversation}
                className="bg-primary hover:bg-secondary text-white text-lg px-14 py-6 rounded-2xl font-bold shadow-2xl shadow-primary/40 transition-all transform hover:-translate-y-2 active:scale-95"
              >
                {primaryButtonText}
              </button>
              {secondaryButtonText && (
                <button 
                  onClick={onViewServices}
                  className="bg-white/5 hover:bg-white/10 text-white border border-white/10 backdrop-blur-sm text-lg px-14 py-6 rounded-2xl font-bold transition-all"
                >
                  {secondaryButtonText}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
