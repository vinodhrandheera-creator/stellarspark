
import React from 'react';
import FadeInSection from '../FadeInSection';

const HowWeWork: React.FC = () => {
  const processSteps = [
    {
      title: 'Discovery',
      description: 'Deep dive into your business goals, user needs, and technical constraints.',
      icon: 'search',
    },
    {
      title: 'Design',
      description: 'Wireframing, prototyping, and high-fidelity UI/UX design tailored to your brand.',
      icon: 'architecture',
    },
    {
      title: 'Build',
      description: 'Agile development with two-week sprints and continuous feedback loops.',
      icon: 'terminal',
    },
    {
      title: 'Launch',
      description: 'Rigorous QA testing, deployment strategy, and seamless production rollout.',
      icon: 'rocket_launch',
    },
    {
      title: 'Support',
      description: 'Post-launch monitoring, maintenance, and iterative scaling for growth.',
      icon: 'support_agent',
    }
  ];

  const engagementModels = [
    {
      title: 'Dedicated Team',
      icon: 'groups',
      features: ['Your own team', 'Full collaboration', 'Continuous delivery'],
      popular: false
    },
    {
      title: 'Cost-Effective Delivery',
      icon: 'payments',
      features: ['Clear scope/budget', 'Perfect for MVPs', 'Predictable delivery'],
      popular: false
    },
    {
      title: 'Time & Materials',
      icon: 'schedule',
      features: ['Pay for actual time', 'Scale up/down', 'Ideal for dynamic scope'],
      popular: false
    }
  ];

  return (
    <div className="bg-background-light">
      {/* Hero Section */}
      <FadeInSection>
        <section className="relative bg-[#020617] pt-28 pb-40 lg:pt-40 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0f172a] via-[#020617] to-[#010309]"></div>
          <div className="absolute inset-0 z-0 tech-mesh opacity-30"></div>
          
          <div className="absolute top-0 right-0 -mr-24 -mt-24 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[160px] opacity-40 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[140px] opacity-30"></div>
          
          <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 text-center">
            <h1 className="pt-4 text-4xl md:text-6xl lg:text-7xl font-display font-extrabold text-white leading-[1.1] mb-8 tracking-tight max-w-5xl mx-auto">
              No long contracts. <br/> No over-engineering. <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-amber-300">Just clarity at every step.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
              We don't just build features; we solve business problems. Our structured process ensures clarity at every stage of the development lifecycle.
            </p>
          </div>
        </section>
      </FadeInSection>

      {/* Visual Process Section - White Background */}
      <section className="py-24 lg:py-32 bg-white relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <FadeInSection className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">Our Process</h2>
            <div className="w-24 h-1.5 bg-primary/50 mx-auto rounded-full"></div>
          </FadeInSection>

          <div className="relative">
            <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-px border-t-2 border-dashed border-primary/20 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-8 relative z-10">
              {processSteps.map((step, index) => (
                <FadeInSection key={index} delay={`stagger-${(index % 4) + 1}` as any} className="flex flex-col items-center text-center group">
                  <div className="w-20 h-20 lg:w-24 lg:h-24 bg-white rounded-3xl shadow-xl shadow-slate-200/60 border border-gray-100 flex items-center justify-center text-primary mb-8 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-primary/20">
                    <span className="material-symbols-outlined text-3xl lg:text-4xl">{step.icon}</span>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-display font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-sm lg:text-base text-gray-500 leading-relaxed px-4">{step.description}</p>
                </FadeInSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Unified Dark Section for Image and Engagement Models */}
      <section className="relative overflow-hidden bg-[#020617] py-24 lg:py-32">
        {/* Cinematic Background matching Hero */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0f172a] via-[#020617] to-[#010309]"></div>
        <div className="absolute inset-0 z-0 tech-mesh opacity-20"></div>
        <div className="absolute top-1/4 right-0 -mr-24 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[160px] opacity-20"></div>
        <div className="absolute bottom-1/4 left-0 -ml-24 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[140px] opacity-15"></div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          {/* Top Image Card */}
          <FadeInSection className="mb-32">
            <div className="relative rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden shadow-2xl h-[320px] lg:h-[520px] border border-white/10 group">
              <img 
                src="https://www.shutterstock.com/shutterstock/photos/1208916469/display_1500/stock-photo-startup-and-millenial-business-concept-team-works-together-in-big-open-space-office-1208916469.jpg" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                alt="Our workflow environment"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/60 via-transparent to-transparent"></div>
              
            </div>
          </FadeInSection>

          {/* Adaptable Engagement Models Content */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <FadeInSection>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">Adaptable engagement models.</h2>
              <p className="text-lg text-slate-400">We offer flexible engagement models tailored to your needs.</p>
            </FadeInSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {engagementModels.map((model, index) => (
              <FadeInSection key={index} delay={`stagger-${index + 1}` as any}>
                <div className="h-full relative bg-white/5 backdrop-blur-md p-10 rounded-[2.5rem] shadow-2xl border border-white/10 hover:border-primary/40 transition-all duration-500 group">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <span className="material-symbols-outlined text-3xl">{model.icon}</span>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-8 group-hover:text-primary transition-colors">{model.title}</h3>
                  <ul className="space-y-6">
                    {model.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-4 text-slate-300 font-medium">
                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                          <span className="material-icons-round text-sm">check</span>
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Decorative glow behind icon on hover */}
                  <div className="absolute top-10 left-10 w-20 h-20 bg-primary/20 blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowWeWork;
