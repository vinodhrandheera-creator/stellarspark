
import React from 'react';

interface HeroProps {
  onStartProject: () => void;
  onViewServices: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStartProject, onViewServices }) => {
  return (
    <section className="relative bg-[#020617] pt-44 pb-64 lg:pt-52 lg:pb-64 overflow-hidden clip-hero">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0f172a] via-[#020617] to-[#010309]"></div>
      <div className="absolute inset-0 z-0 tech-mesh opacity-30"></div>
      
      {/* Cinematic Glows */}
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[140px] opacity-30"></div>
      
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 text-center lg:text-left">

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold text-white leading-[1.05] mb-8 tracking-tighter">
              Transform business problems into <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-amber-300">custom scalable software.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Whether you’re running everything alone, scaling a growing business, or building a new product, StellarSpark helps you move faster without worrying about the tech.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <button 
                onClick={onStartProject}
                className="bg-primary hover:bg-secondary text-white px-10 py-5 rounded-2xl font-bold shadow-2xl shadow-primary/40 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3"
              >
                Start your Project
                <span className="material-icons-round">east</span>
              </button>
              <button 
                onClick={onViewServices}
                className="glass-card hover:bg-white/10 text-white px-10 py-5 rounded-2xl font-bold transition-all backdrop-blur-sm border border-white/10 capitalize"
              >
                view services
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 relative group">
            <div className="absolute -inset-4 bg-blue-500/10 rounded-[3rem] blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>
            <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl transform lg:rotate-2 group-hover:rotate-0 transition-transform duration-700">
              <img 
                src="https://as2.ftcdn.net/v2/jpg/02/51/38/09/1000_F_251380999_xCsam4S22xt4WscGjwFmFEh9T4NqFHE3.jpg" 
                alt="Infrastructure Visualization" 
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover aspect-[4/3] transition-all duration-700 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-darkblue via-transparent to-transparent opacity-60"></div>
              
              {/* Australia Badge */}
              <div className="absolute bottom-6 right-6 z-20 bg-white/10 backdrop-blur-xl px-4 py-2 rounded-2xl border border-white/20 flex items-center gap-3 shadow-2xl max-w-[240px]">
                <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center text-white border border-white/30">
                  <span className="material-icons-round text-lg">verified</span>
                </div>
                <p className="text-white text-[9px] font-bold uppercase tracking-widest leading-tight">
                  Trusted software engineering company based in Australia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
