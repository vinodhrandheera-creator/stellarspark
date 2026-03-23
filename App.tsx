
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/sections/Hero';
import ServiceCard from './components/ServiceCard';
import Challenges from './components/sections/Challenges';
import CTA from './components/sections/CTA';
import ServicesCatalog from './components/pages/ServicesCatalog';
import HowWeWork from './components/pages/HowWeWork';
import Product from './components/pages/Product';
import AboutUs from './components/pages/AboutUs';
import Contact from './components/pages/Contact';
import Privacy from './components/pages/Privacy';
import FadeInSection from './components/FadeInSection';
import { PageId } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const getCtaProps = (page: PageId) => {
    switch (page) {
      case 'services':
        return {
          title: "Software that solves\nreal operational pain.",
          description: "No buzzwords, no overengineering. Just well-designed systems that fit how your business actually works and evolve as your needs grow.",
          primaryButtonText: "Let’s talk"
        };
      case 'how-we-work':
        return {
          title: "Tell us what you’re\nbuilding or fixing.",
          description: "Whether you’re starting from scratch or untangling an existing system, we begin by understanding your goals, constraints, and users, then design a clear, practical path forward.",
          primaryButtonText: "Let’s talk"
        };
      case 'product':
        return {
          title: "Have something\nsimilar in mind?",
          description: "We design and build systems that fit your business. If you’re thinking about a custom product or internal system, we can help you shape and build it.",
          primaryButtonText: "Talk to us about your idea"
        };
      case 'about-us':
        return {
          title: "Have a problem\nworth solving?",
          description: "We help turn ideas into systems that actually work. If your challenge needs thoughtful design and solid engineering, we’d love to explore it with you.",
          primaryButtonText: "Talk to us about your project"
        };
      case 'home':
      default:
        return {
          title: "Build the right system.\nThe right way.",
          description: "Choose analytical precision and long-term stability for your enterprise software projects.",
          primaryButtonText: "Start a Conversation",
          secondaryButtonText: "View Services"
        };
    }
  };

  const HomeView = () => (
    <>
      <FadeInSection>
        <Hero 
          onStartProject={() => setCurrentPage('contact')} 
          onViewServices={() => setCurrentPage('services')}
        />
      </FadeInSection>

      {/* Services Grid Preview */}
      <section id="services-preview" className="relative -mt-24 z-20 pb-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FadeInSection delay="stagger-1" className="h-full">
              <ServiceCard 
                icon="terminal"
                title="Custom Software Development"
                description="Tailored web platforms, internal tools, customer portals, and SaaS products focused on practical, real-world use cases."
                features={["Modern web applications", "Robust APIs and integrations"]}
              />
            </FadeInSection>
            <FadeInSection delay="stagger-2" className="h-full">
              <ServiceCard 
                icon="cloud"
                title="Cloud Solutions"
                description="Modern cloud infrastructure on AWS, optimized for cost-efficiency while scaling."
                features={["Secure cloud infrastructure", "Fast worldwide content delivery"]}
              />
            </FadeInSection>
            <FadeInSection delay="stagger-3" className="h-full">
              <ServiceCard 
                icon="autorenew"
                title="System Modernisation"
                description="Update and improve your existing systems without disrupting business operations."
                features={["Refactor and enhance performance", "Security hardening"]}
              />
            </FadeInSection>
            <FadeInSection delay="stagger-4" className="h-full">
              <ServiceCard 
                icon="rocket_launch"
                title="Product Engineering"
                description="From MVP to full product maturity, ensuring clean delivery with the right features and a sustainable roadmap for your team."
                features={["Discovery & scoping", "UX flow support"]}
              />
            </FadeInSection>
          </div>
        </div>
      </section>

      <FadeInSection>
        <Challenges />
      </FadeInSection>

      {/* Why Us Section */}
      <section className="py-32 overflow-hidden bg-background-dark border-t border-white/5 relative">
        {/* Visual Background Elements - Matching Hero */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0f172a] via-[#020617] to-[#010309] opacity-50"></div>
        <div className="absolute inset-0 z-0 tech-mesh opacity-20"></div>
        <div className="absolute top-1/4 right-0 -mr-24 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] opacity-30"></div>
        <div className="absolute bottom-1/4 left-0 -ml-24 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] opacity-20"></div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch gap-12 lg:gap-20">
            
            {/* Right Side Stack: Heading & Features grouped to minimize gap */}
            <div className="order-1 lg:order-2 flex flex-col gap-8 lg:gap-10 h-full">
              <FadeInSection>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-6 border border-primary/20">
                  Why Choose StellarSpark
                </span>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight mb-4">
                  We design systems that fit your business <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">not the other way around.</span>
                </h2>
                <p className="text-slate-400 text-lg mb-0 leading-relaxed max-w-xl">
                  We prioritize analytical precision and long-term stability, ensuring your technology serves your business goals without becoming a burden.
                  <br /><br />
                  As an Australian-based engineering company, we bring a strong focus on reliability, structure, and disciplined software development.
                </p>
              </FadeInSection>

              <div className="space-y-6">
                {[
                  { icon: 'architecture', title: 'Structured Software', desc: 'Turn vague ideas into concrete, documented, and scalable technical architecture.' },
                  { icon: 'settings_suggest', title: 'Automated Operations', desc: 'Eliminate manual data entry and repetitive tasks so your team focuses on growth.' },
                  { icon: 'block', title: 'Build only what you need', desc: 'We avoid bloatware. We build lean, efficient software tailored to your specific workflow.' }
                ].map((feature, i) => (
                  <FadeInSection key={i} delay={`stagger-${i+1}` as any} className="glass-card p-6 rounded-2xl border border-white/10 flex gap-6 transition-all duration-300">
                    <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary border border-primary/20">
                      <span className="material-icons-round text-2xl">{feature.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                      <p className="text-slate-400 leading-relaxed text-sm">{feature.desc}</p>
                    </div>
                  </FadeInSection>
                ))}
              </div>
            </div>

            {/* Left Side: Image container that matches the height of the right side */}
            <FadeInSection className="order-2 lg:order-1 relative h-full flex">
              <div className="absolute -inset-4 bg-primary/20 rounded-[2.5rem] blur-3xl opacity-20"></div>
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 group flex-grow">
                <img 
                  src="https://www.shutterstock.com/shutterstock/photos/1227427159/display_1500/stock-photo-business-office-concept-successful-meeting-handshake-top-view-1227427159.jpg" 
                  alt="Team collaboration" 
                  className="w-full h-[450px] lg:h-full object-cover transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-darkblue/80 via-transparent to-transparent"></div>
              </div>
            </FadeInSection>
            
          </div>
        </div>
      </section>
    </>
  );

  return (
    <div className="min-h-screen bg-background-dark text-slate-200 selection:bg-primary/30 selection:text-white overflow-x-hidden tech-mesh">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />

      <main>
        {currentPage === 'home' && <HomeView />}
        {currentPage === 'services' && <ServicesCatalog />}
        {currentPage === 'how-we-work' && <HowWeWork />}
        {currentPage === 'product' && <Product />}
        {currentPage === 'about-us' && <AboutUs />}
        {currentPage === 'contact' && <Contact />}
        {currentPage === 'privacy' && <Privacy />}
      </main>

      {currentPage !== 'contact' && currentPage !== 'privacy' && (
        <FadeInSection>
          <CTA 
            {...getCtaProps(currentPage)}
            onViewServices={() => setCurrentPage('services')} 
            onStartConversation={() => setCurrentPage('contact')}
          />
        </FadeInSection>
      )}
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
};

export default App;
