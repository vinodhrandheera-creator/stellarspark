
import React from 'react';
import FadeInSection from '../FadeInSection';

const AboutUs: React.FC = () => {
  return (
    <div className="bg-background-light">
      <FadeInSection>
        <section className="relative bg-[#020617] pt-28 pb-40 lg:pt-40 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0f172a] via-[#020617] to-[#010309]"></div>
          <div className="absolute inset-0 z-0 tech-mesh opacity-30"></div>
          
          <div className="absolute top-0 right-0 -mr-24 -mt-24 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[160px] opacity-40 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[140px] opacity-30"></div>
          
          <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold text-white leading-[1.1] mb-8 tracking-tight max-w-5xl mx-auto">
              We’re not just developers. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-amber-300">We’re problem-solvers.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
              At StellarSpark, we bridge the gap between complex technical challenges and elegant, practical business outcomes.
            </p>
          </div>
        </section>
      </FadeInSection>

      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeInSection className="relative">
              <div className="absolute -left-12 -top-12 w-64 h-64 bg-primary/10 rounded-full blur-[80px]"></div>
              <div className="relative rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100">
                <img 
                  src="https://www.shutterstock.com/shutterstock/photos/1322838044/display_1500/stock-photo-team-meating-in-the-office-four-people-discussing-new-monthly-work-plan-1322838044.jpg" 
                  className="w-full h-full object-cover aspect-[4/5] lg:aspect-square"
                  alt="Team working together"
                  referrerPolicy="no-referrer"
                />
              </div>
            </FadeInSection>

            <FadeInSection className="flex flex-col gap-6">
              <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm">Our Story</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 leading-tight">
                Practical systems for the <span className="text-primary">Australian landscape.</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  StellarSpark is an Australian software company dedicated to designing and building
                  practical, maintainable systems that last. We help founders and business owners bring
                  their ideas to life without needing to become tech experts.
                  <br />
                  <br />
                  By combining strong engineering practices with a deep understanding of real-world
                  business challenges, we deliver software that is reliable, secure, and scalable.
                </p>
                <p>
                  Our roots are in education technology, including the creation of EasySchools, but our
                  expertise spans industries. If you have a problem worth solving, we help you turn ideas
                  into structured systems that fit how your business actually works.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Core Philosophy Section - Dark Theme Hero Style */}
      <section className="py-24 lg:py-32 relative overflow-hidden bg-[#020617]">
        {/* Cinematic Background matching Hero */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0f172a] via-[#020617] to-[#010309]"></div>
        <div className="absolute inset-0 z-0 tech-mesh opacity-20"></div>
        <div className="absolute top-1/4 right-0 -mr-24 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[160px] opacity-20"></div>
        <div className="absolute bottom-1/4 left-0 -ml-24 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[140px] opacity-15"></div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <FadeInSection className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Our Core Philosophy:</h2>
            <div className="w-24 h-1.5 bg-primary/50 mx-auto rounded-full"></div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Simple to use",
                icon: "ads_click",
                desc: "User experience isn't a luxury; it's a requirement. We focus on creating interfaces that feel natural."
              },
              {
                title: "Clear to understand",
                icon: "visibility",
                desc: "No jargon. No hidden logic. We maintain transparency in our code and our communication always."
              },
              {
                title: "Easy to grow with",
                icon: "trending_up",
                desc: "We build on maintainable architectures that allow your software to evolve as your business expands."
              }
            ].map((value, idx) => (
              <FadeInSection key={idx} delay={`stagger-${idx + 1}` as any} className="h-full relative bg-white/5 backdrop-blur-md p-10 rounded-[2.5rem] shadow-2xl border border-white/10 hover:border-primary/40 transition-all duration-500 group">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined text-3xl">{value.icon}</span>
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-primary transition-colors">{value.title}</h3>
                <p className="text-slate-400 leading-relaxed">{value.desc}</p>
                
                {/* Decorative glow on hover */}
                <div className="absolute top-10 left-10 w-20 h-20 bg-primary/20 blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
