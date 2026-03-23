
import React from 'react';
import { PageId } from '../types';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-darkblue pt-32 pb-16 border-t border-white/5 relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div>
            <button onClick={() => onNavigate('home')} className="flex items-center mb-10 group focus:outline-none">
              <img 
                src="https://i.imgur.com/oipot4V.png" 
                alt="StellarSpark Logo" 
                className="h-10 w-auto transition-transform group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </button>
            <p className="text-slate-500 leading-relaxed max-w-xs">
              Transforming complex business problems into elegant software solutions. We build the future, one line of code at a time.
            </p>
          </div>
          
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-10">Quick links</h4>
            <ul className="space-y-4">
              <li>
                <button onClick={() => onNavigate('services')} className="text-slate-500 hover:text-primary transition-colors text-[10px] font-bold uppercase tracking-widest">Services</button>
              </li>
              <li>
                <button onClick={() => onNavigate('how-we-work')} className="text-slate-500 hover:text-primary transition-colors text-[10px] font-bold uppercase tracking-widest">How we work</button>
              </li>
              <li>
                <button onClick={() => onNavigate('product')} className="text-slate-500 hover:text-primary transition-colors text-[10px] font-bold uppercase tracking-widest">Product</button>
              </li>
              <li>
                <button onClick={() => onNavigate('about-us')} className="text-slate-500 hover:text-primary transition-colors text-[10px] font-bold uppercase tracking-widest">About Us</button>
              </li>
              <li>
                <button onClick={() => onNavigate('privacy')} className="text-slate-500 hover:text-primary transition-colors text-[10px] font-bold uppercase tracking-widest">Privacy policy</button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-10">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-primary border border-white/5">
                  <span className="material-icons-round">mail</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold text-slate-600 mb-1 tracking-widest">Secure Line</span>
                  <a href="mailto:hello@stellarspark.com.au" className="font-bold text-white hover:text-primary transition-colors">hello@stellarspark.com.au</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <p className="text-slate-600 text-sm font-medium">© 2026 StellarSpark Systems — Australian Company | ABN 88 687 130 089</p>
          <div className="max-w-xl text-right md:text-right">
            <h5 className="text-white text-[10px] font-bold uppercase tracking-widest mb-2">Acknowledgement of Country</h5>
            <p className="text-slate-600 text-[10px] leading-relaxed uppercase font-bold tracking-widest">
              StellarSpark acknowledges the Traditional Owners of Country throughout Australia and recognises their continuing connection to land, waters and community. We pay our respects to Elders past and present.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
