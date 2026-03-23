
import React, { useState, useEffect } from 'react';
import { PageId, NavItem } from '../types';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: PageId) => {
    onNavigate(id);
    setIsMenuOpen(false);
  };

  const navItems: NavItem[] = [
    { label: 'Services', id: 'services' },
    { label: 'How we work', id: 'how-we-work' },
    { label: 'Product', id: 'product' },
    { label: 'About Us', id: 'about-us' },
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-[60] transition-all duration-300 ${
        scrolled ? 'bg-darkblue/80 backdrop-blur-xl py-3 border-b border-white/5' : 'bg-transparent py-5'
      }`}>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex justify-between items-center h-14">
            <button 
              onClick={() => handleNavClick('home')}
              className="flex items-center group focus:outline-none"
            >
              <img 
                src="https://i.imgur.com/oipot4V.png" 
                alt="StellarSpark Logo" 
                className="h-10 w-auto transition-transform group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <button 
                  key={item.id} 
                  onClick={() => handleNavClick(item.id)}
                  className={`font-medium transition hover:text-primary focus:outline-none ${
                    currentPage === item.id 
                      ? 'text-primary' 
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="hidden lg:flex items-center">
              <button 
                onClick={() => handleNavClick('contact')}
                className="bg-primary hover:bg-secondary text-white px-8 py-3 rounded-xl font-bold shadow-xl shadow-primary/40 transition-all transform hover:-translate-y-1"
              >
                Talk to Us
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden text-white">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="focus:outline-none p-2"
                aria-label="Toggle menu"
              >
                <span className="material-icons-round text-3xl">
                  {isMenuOpen ? 'close' : 'menu'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu Overlay */}
      <div 
        className={`fixed inset-0 z-50 bg-darkblue transition-transform duration-300 lg:hidden ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex flex-col h-full pt-28 px-6 pb-10">
          <div className="space-y-6 flex-grow">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left text-3xl font-display font-bold transition-colors ${
                  currentPage === item.id ? 'text-primary' : 'text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          <div className="space-y-4 pt-6 border-t border-white/5">
            <button 
              onClick={() => handleNavClick('contact')}
              className="w-full bg-primary hover:bg-secondary text-white py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/40 transition-all active:scale-[0.98]"
            >
              Talk to Us
            </button>
            <p className="text-center text-slate-500 text-sm">
              hello@stellarspark.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
