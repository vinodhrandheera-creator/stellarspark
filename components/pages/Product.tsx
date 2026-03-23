
import React from 'react';
import FadeInSection from '../FadeInSection';

const Product: React.FC = () => {
  const painPoints = [
    {
      title: "Scattered Tools",
      desc: "Managing students, attendance, and fees across multiple spreadsheets is time-consuming.",
      icon: "table_chart"
    },
    {
      title: "Fragmented Communication",
      desc: "Communication between teachers, parents, and staff often relies on disjointed channels.",
      icon: "forum"
    },
    {
      title: "Manual Reporting",
      desc: "Generating reports and business insights is manual, slow, and prone to human error.",
      icon: "analytics"
    }
  ];

  return (
    <div className="bg-background-light">
      <FadeInSection>
        <section className="relative bg-[#020617] pt-28 pb-40 lg:pt-40 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0f172a] via-[#020617] to-[#010309]"></div>
          <div className="absolute inset-0 z-0 tech-mesh opacity-30"></div>
          
          <div className="absolute top-0 right-0 -mr-24 -mt-24 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[160px] opacity-40 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[140px] opacity-30"></div>
          
          <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 text-center">
            <h1 className="pt-4 text-4xl md:text-6xl lg:text-7xl font-display font-extrabold text-white leading-[1.1] mb-8 tracking-tight max-w-5xl mx-auto">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-amber-300"> EasySchools </span> <br/> Our School Management Platform
            </h1>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
              A cloud-based system for managing school operations, built end-to-end by StellarSpark.
            </p>
          </div>
        </section>
      </FadeInSection>

      <section className="py-24 lg:py-32 bg-white relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <FadeInSection>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 text-primary text-xs font-bold uppercase tracking-widest mb-6 border border-gray-100">
                  The Challenge
                </span>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 leading-tight mb-8">
                  Schools face too many <span className="text-primary">scattered tools.</span>
                </h2>
              </FadeInSection>
              
              <div className="space-y-10">
                {painPoints.map((point, idx) => (
                  <FadeInSection key={idx} delay={`stagger-${idx + 1}` as any} className="flex gap-6 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <span className="material-symbols-outlined text-2xl">{point.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{point.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{point.desc}</p>
                    </div>
                  </FadeInSection>
                ))}
              </div>

              <FadeInSection className="mt-16 p-8 bg-slate-50 rounded-3xl border border-gray-100 mb-10">
                <p className="text-xl font-display font-bold text-gray-900 leading-relaxed italic">
                  "EasySchools consolidates all your school operations into one intuitive system."
                </p>
              </FadeInSection>

              <FadeInSection delay="stagger-4">
                <a 
                  href="https://easyschools.com.au" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 group shadow-lg shadow-primary/5 active:scale-[0.98]"
                >
                  Visit EasySchools Website
                  <span className="material-icons-round text-xl group-hover:translate-x-1 transition-transform">open_in_new</span>
                </a>
              </FadeInSection>
            </div>

            <FadeInSection className="relative">
              <div className="absolute -right-12 -top-12 w-64 h-64 bg-primary/10 rounded-full blur-[80px]"></div>
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100">
                <img 
                  src="https://easyschools.com.au/wp-content/uploads/2025/08/Untitled-design-15.png" 
                  alt="EasySchools Dashboard Interface"
                  className="w-full h-full object-cover object-right aspect-[4/5] lg:aspect-square"
                  referrerPolicy="no-referrer"
                />
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
