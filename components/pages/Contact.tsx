
import React, { useState } from 'react';
import FadeInSection from '../FadeInSection';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const services = [
    'Custom Software Development',
    'Cloud Solutions',
    'System Modernisation',
    'Product Engineering',
    'Payments & Operations'
  ];

  return (
    <div className="bg-background-light min-h-screen">
      <FadeInSection>
        <section className="relative bg-[#020617] pt-28 pb-40 lg:pt-40 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0f172a] via-[#020617] to-[#010309]"></div>
          <div className="absolute inset-0 z-0 tech-mesh opacity-30"></div>
          
          <div className="absolute top-0 right-0 -mr-24 -mt-24 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[160px] opacity-40 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[140px] opacity-30"></div>
          
          <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold text-white leading-[1.1] mb-8 tracking-tight max-w-5xl mx-auto">
              Ready to spark your next <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-amber-300">digital transformation?</span>
            </h1>
          </div>
        </section>
      </FadeInSection>

      <section className="py-24 lg:py-32 bg-white relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            {/* Left Column: Contact Info */}
            <FadeInSection className="lg:col-span-5 space-y-12">
              <div>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">Contact Information</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-10">
                  Whether you're looking to scale an existing product or launch a new initiative, our team is ready to discuss your requirements.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex gap-6 items-start group">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="material-icons-round text-2xl">mail</span>
                  </div>
                  <div>
                    <span className="block text-xs uppercase font-bold text-gray-400 mb-1 tracking-widest">Email Us</span>
                    <a href="mailto:hello@stellarspark.com" className="text-xl font-bold text-gray-900 hover:text-primary transition-colors">hello@stellarspark.com</a>
                  </div>
                </div>

                <div className="flex gap-6 items-start group">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="material-icons-round text-2xl">location_on</span>
                  </div>
                  <div>
                    <span className="block text-xs uppercase font-bold text-gray-400 mb-1 tracking-widest">Location</span>
                    <p className="text-xl font-bold text-gray-900">Brisbane, Australia</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start group">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="material-icons-round text-2xl">event_available</span>
                  </div>
                  <div>
                    <span className="block text-xs uppercase font-bold text-gray-400 mb-1 tracking-widest">Typical Response</span>
                    <p className="text-xl font-bold text-gray-900">Within 24 business hours</p>
                  </div>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection className="lg:col-span-7">
              <div className="bg-slate-50/50 p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-slate-200/40 relative">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                      <span className="material-icons-round text-4xl">check</span>
                    </div>
                    <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">Message Received!</h3>
                    <button onClick={() => setSubmitted(false)} className="text-primary font-bold">Send another message</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <input 
                        required 
                        placeholder="Full Name" 
                        value={formData.name} 
                        onChange={e => setFormData({...formData, name: e.target.value})} 
                        className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-gray-900" 
                      />
                      <input 
                        required 
                        type="email" 
                        placeholder="Email Address" 
                        value={formData.email} 
                        onChange={e => setFormData({...formData, email: e.target.value})} 
                        className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-gray-900" 
                      />
                    </div>
                    
                    <div className="relative">
                      <select 
                        required 
                        value={formData.service} 
                        onChange={e => setFormData({...formData, service: e.target.value})} 
                        className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all appearance-none cursor-pointer pr-12 text-gray-900"
                      >
                        <option value="" disabled className="text-gray-400">Select a service...</option>
                        {services.map(s => <option key={s} value={s} className="text-gray-900">{s}</option>)}
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                        <span className="material-icons-round text-2xl">expand_more</span>
                      </div>
                    </div>

                    <textarea 
                      required 
                      rows={5} 
                      placeholder="Your Message" 
                      value={formData.message} 
                      onChange={e => setFormData({...formData, message: e.target.value})} 
                      className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 outline-none resize-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-gray-900" 
                    />
                    <button type="submit" className="w-full bg-primary hover:bg-secondary text-white py-5 rounded-2xl font-bold text-lg transition-all shadow-lg shadow-primary/20 active:scale-[0.98]">Send Message</button>
                  </form>
                )}
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
