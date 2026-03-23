
import React from 'react';
import FadeInSection from '../FadeInSection';

const ServicesCatalog: React.FC = () => {
  return (
    <div className="bg-background-light">
      <FadeInSection>
        <section className="relative bg-[#020617] pt-28 pb-40 lg:pt-40 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0f172a] via-[#020617] to-[#010309]"></div>
          <div className="absolute inset-0 z-0 tech-mesh opacity-30"></div>
          
          <div className="absolute top-0 right-0 -mr-24 -mt-24 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[160px] opacity-40 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[140px] opacity-30"></div>
          
          <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 text-center">
            <h1 className="pt-12 md:pt-16 text-4xl md:text-6xl lg:text-7xl font-display font-extrabold text-white leading-[1.1] mb-8 tracking-tight max-w-5xl mx-auto">
              We focus on <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-amber-300">clarity, speed, and long-term usability.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
              Analytical precision meets high-performance engineering. Explore our comprehensive service offerings designed for the modern enterprise.
            </p>
          </div>
        </section>
      </FadeInSection>

      <div className="service-catalog bg-white">
        {/* 1. Custom Software Block */}
        <FadeInSection id="custom-software" className="py-24 lg:py-32 border-b border-gray-100 relative">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-1 lg:order-1">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8">
                  <span className="material-symbols-outlined text-4xl">code</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-8 leading-tight">Custom Software <br/><span className="text-primary">Development</span></h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                 We specialize in creating web platforms, internal tools, customer portals, and SaaS products that are designed for real-world usage not just demos. Our development process ensures scalability, reliability, and ease of integration.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                  <div className="p-4 bg-slate-50 rounded-xl shadow-sm border border-gray-100">
                    <span className="material-symbols-outlined text-primary mb-2 text-3xl">web</span>
                    <h4 className="font-bold text-gray-900 text-sm">Modern web applications</h4>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl shadow-sm border border-gray-100">
                    <span className="material-symbols-outlined text-primary mb-2 text-3xl">api</span>
                    <h4 className="font-bold text-gray-900 text-sm">Robust APIs</h4>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl shadow-sm border border-gray-100">
                    <span className="material-symbols-outlined text-primary mb-2 text-3xl">database</span>
                    <h4 className="font-bold text-gray-900 text-sm">Scalable data models</h4>
                  </div>
                </div>
              </div>
              <div className="order-2 lg:order-2">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] blur-2xl group-hover:bg-primary/20 transition-all"></div>
                  <img alt="Modern web dashboard" className="relative rounded-3xl shadow-2xl border border-gray-100" src="https://www.shutterstock.com/shutterstock/photos/1227450289/display_1500/stock-photo-business-office-concept-meeting-of-three-managers-to-discuss-weekly-stats-together-1227450289.jpg" referrerPolicy="no-referrer"/>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* 2. Cloud Solutions Block - DARK THEME */}
        <FadeInSection id="cloud-solutions" className="py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0f172a] via-[#020617] to-[#010309]"></div>
          <div className="absolute inset-0 z-0 tech-mesh opacity-30"></div>
          
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-primary/20 rounded-[3rem] blur-3xl group-hover:bg-primary/30 transition-all opacity-40"></div>
                  <img alt="Cloud architecture and server room" className="relative rounded-3xl shadow-2xl border border-white/10" src="https://as1.ftcdn.net/v2/jpg/02/11/79/58/1000_F_211795866_CUu43PC9ALgjUnHJFrzlrkfkhzgma7Vd.jpg" referrerPolicy="no-referrer"/>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 border border-primary/20">
                  <span className="material-symbols-outlined text-4xl">cloud_queue</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8 leading-tight">Cloud <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Solutions</span></h2>
                <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                  We offer state-of-the-art cloud solutions built on AWS, designed to scale with your business needs while staying cost-effective. Our cloud solutions are tailored to provide maximum security, flexibility, and high availability, making sure your infrastructure grows as your business does, without ever compromising on performance or reliability.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                  <div className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                    <span className="material-symbols-outlined text-primary mb-2 text-3xl">security</span>
                    <h4 className="font-bold text-white text-sm">Secure cloud infrastructure</h4>
                  </div>
                  <div className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                    <span className="material-symbols-outlined text-primary mb-2 text-3xl">public</span>
                    <h4 className="font-bold text-white text-sm">Fast content delivery worldwide</h4>
                  </div>
                  <div className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                    <span className="material-symbols-outlined text-primary mb-2 text-3xl">bolt</span>
                    <h4 className="font-bold text-white text-sm">Flexible, event-driven systems</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* 3. Product Engineering Block */}
        <FadeInSection id="product-engineering" className="py-24 lg:py-32 border-b border-gray-100 relative">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-1 lg:order-1">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8">
                  <span className="material-symbols-outlined text-4xl">terminal</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-8 leading-tight">Product <span className="text-primary">Engineering</span></h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our Product Engineering services take your product from MVP (Minimum Viable Product) to full maturity. We focus on building the right features, optimizing delivery, and creating a roadmap that’s maintainable and aligned with your business goals. Our team supports you every step of the way, ensuring your product is designed to scale and evolve as your market and user base grow.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                  <div className="p-4 bg-slate-50 rounded-xl shadow-sm border border-gray-100">
                    <span className="material-symbols-outlined text-primary mb-2 text-3xl">manage_search</span>
                    <h4 className="font-bold text-gray-900 text-sm">Discovery & scoping</h4>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl shadow-sm border border-gray-100">
                    <span className="material-symbols-outlined text-primary mb-2 text-3xl">touch_app</span>
                    <h4 className="font-bold text-gray-900 text-sm">UX flow support</h4>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl shadow-sm border border-gray-100">
                    <span className="material-symbols-outlined text-primary mb-2 text-3xl">published_with_changes</span>
                    <h4 className="font-bold text-gray-900 text-sm">Release + iteration</h4>
                  </div>
                </div>
              </div>
              <div className="order-2 lg:order-2">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] blur-2xl group-hover:bg-primary/20 transition-all"></div>
                  <img alt="Product engineering and strategy" className="relative rounded-3xl shadow-2xl border border-gray-100" src="https://as1.ftcdn.net/v2/jpg/01/81/37/72/1000_F_181377276_rYr72GAZ3FlTTTPCJ82s6fJD09VvJNR1.jpg" referrerPolicy="no-referrer"/>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* 4. Modernisation Block - DARK THEME */}
        <FadeInSection id="modernisation" className="py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0f172a] via-[#020617] to-[#010309]"></div>
          <div className="absolute inset-0 z-0 tech-mesh opacity-30"></div>

          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-primary/20 rounded-[3rem] blur-3xl group-hover:bg-primary/30 transition-all opacity-40"></div>
                  <img alt="Legacy system refactoring" className="relative rounded-3xl shadow-2xl border border-white/10" src="https://www.shutterstock.com/shutterstock/photos/1322473664/display_1500/stock-photo-office-teamwork-situation-group-of-people-and-daily-general-tasks-in-workspace-1322473664.jpg" referrerPolicy="no-referrer"/>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 border border-primary/20">
                  <span className="material-symbols-outlined text-4xl">history_edu</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8 leading-tight">Legacy System <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Modernisation</span></h2>
                <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                  We help you modernize legacy systems and move towards a more flexible, scalable, and secure architecture that supports your current and future business needs. Our system modernisation process ensures that your business operates with cutting-edge technology while minimizing disruptions to your existing processes.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                  <div className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                    <span className="material-symbols-outlined text-primary mb-2 text-3xl">speed</span>
                    <h4 className="font-bold text-white text-sm">Refactor + improve performance</h4>
                  </div>
                  <div className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                    <span className="material-symbols-outlined text-primary mb-2 text-3xl">security</span>
                    <h4 className="font-bold text-white text-sm">Security hardening</h4>
                  </div>
                  <div className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                    <span className="material-symbols-outlined text-primary mb-2 text-3xl">insights</span>
                    <h4 className="font-bold text-white text-sm">Observability (logs/metrics/traces)</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* 5. Payments & Operations Block */}
        <FadeInSection id="payments" className="py-24 lg:py-32 border-b border-gray-100 relative">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-1 lg:order-1">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8">
                  <span className="material-symbols-outlined text-4xl">account_balance_wallet</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-8 leading-tight">Payments & <span className="text-primary">Operations</span></h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our Payments & Operations services provide the expertise and tools needed to build reliable and secure payment systems for real-world transactions. Whether you need to set up payment gateways, integrate with financial systems, or ensure compliance, our team has the experience to help you navigate the complexities of modern payment infrastructure.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                  <div className="p-4 bg-slate-50 rounded-xl shadow-sm border border-gray-100">
                    <span className="material-symbols-outlined text-primary mb-2 text-3xl">sync_alt</span>
                    <h4 className="font-bold text-gray-900 text-sm">Stripe integrations</h4>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl shadow-sm border border-gray-100">
                    <span className="material-symbols-outlined text-primary mb-2 text-3xl">payments</span>
                    <h4 className="font-bold text-gray-900 text-sm">Wallet & credit systems</h4>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl shadow-sm border border-gray-100">
                    <span className="material-symbols-outlined text-primary mb-2 text-3xl">description</span>
                    <h4 className="font-bold text-gray-900 text-sm">Reporting + exports</h4>
                  </div>
                </div>
              </div>
              <div className="order-2 lg:order-2">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] blur-2xl group-hover:bg-primary/20 transition-all"></div>
                  <img alt="FinTech dashboard" className="relative rounded-3xl shadow-2xl border border-gray-100" src="https://pixabay.com/images/download/joshuaworoniecki-cyber-monday-5463567_1920.jpg" referrerPolicy="no-referrer"/>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* 6. Ongoing Support Block - DARK THEME */}
        <FadeInSection id="ongoing-support" className="py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0f172a] via-[#020617] to-[#010309]"></div>
          <div className="absolute inset-0 z-0 tech-mesh opacity-30"></div>

          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-primary/20 rounded-[3rem] blur-3xl group-hover:bg-primary/30 transition-all opacity-40"></div>
                  <img alt="IT support and maintenance" className="relative rounded-3xl shadow-2xl border border-white/10" src="https://as2.ftcdn.net/v2/jpg/02/51/38/35/1000_F_251383561_VFVu0o5ez3A7gsgK33yCgenSA2a8I2re.jpg" referrerPolicy="no-referrer"/>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 border border-primary/20">
                  <span className="material-symbols-outlined text-4xl">support_agent</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8 leading-tight">Ongoing Support & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Maintenance</span></h2>
                <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                  Building the software is just the beginning. We provide dedicated support to ensure your systems remain healthy, secure, and up-to-date as your business scales. From proactive monitoring to rapid feature iterations, we are your long-term technology partner.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                  <div className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                    <span className="material-symbols-outlined text-primary mb-2 text-3xl">monitor_heart</span>
                    <h4 className="font-bold text-white text-sm">Uptime monitoring</h4>
                  </div>
                  <div className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                    <span className="material-symbols-outlined text-primary mb-2 text-3xl">security_update</span>
                    <h4 className="font-bold text-white text-sm">Regular security patches</h4>
                  </div>
                  <div className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                    <span className="material-symbols-outlined text-primary mb-2 text-3xl">history</span>
                    <h4 className="font-bold text-white text-sm">Feature iterations</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
};

export default ServicesCatalog;
