import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('HERO');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isMenuOpen]);

  const getCurrentMonthYear = () => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const d = new Date();
    return `${months[d.getMonth()]} ${d.getFullYear()}`;
  };

  const dynamicDate = getCurrentMonthYear();

  const location = useLocation();

  if (location.pathname.startsWith('/dashboard')) return null;

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'SERVICES', href: '#expertise' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'STATS', href: '#stats' },
    { name: 'PROCESS', href: '#daily-cycle' },
    { name: 'PRICING', href: '#pricing' },
    { name: 'CONTACT', href: '#contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
      isScrolled 
        ? 'bg-bg/95 backdrop-blur-md py-2 shadow-2xl shadow-yellow-950/10' 
        : 'bg-bg py-4'
    }`}>
      <div className="w-full max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20 flex items-center justify-between transition-all duration-500">
        
        {/* Brand Mark */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <img 
            src="/sanny_profile.jpg" 
            alt="ScaleBySanny Logo" 
            className="w-10 h-10 rounded-full border border-border group-hover:border-yellow-500/50 transition-all duration-300 object-cover shadow-lg"
          />
          <span className="text-xl font-black tracking-tighter text-text drop-shadow-[0_0_10px_rgba(255,255,255,0.1)] transition-all duration-300">
            ScaleBySanny
          </span>
        </div>

        {/* Center Navigation Suite (Desktop) */}
        <nav className="hidden lg:flex items-center lg:gap-4 xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActiveSection(link.name)}
              className={`text-[9px] font-black tracking-[0.2em] uppercase transition-all duration-300 relative py-1.5 ${
                activeSection === link.name 
                  ? 'text-yellow-500' 
                  : 'text-text/60 hover:text-text'
              }`}
            >
              {link.name}
              {activeSection === link.name && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-yellow-500 rounded-full animate-in fade-in slide-in-from-bottom-1 scale-x-100 transition-transform duration-300"></span>
              )}
            </a>
          ))}
        </nav>

        {/* Right Tools & Action Button */}
          <div className="flex items-center gap-4">
          <div className="hidden xl:flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/5 border border-green-500/10">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse-green"></div>
            <span className="text-[10px] font-black text-green-500 uppercase tracking-[0.2em]">
              Available {dynamicDate}
            </span>
          </div>

          <ThemeToggle />

          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hidden md:block px-8 py-2.5 rounded-lg text-[10px] font-black uppercase tracking-widest shadow-lg bg-yellow-500 text-slate-900 shadow-yellow-500/20 hover:shadow-yellow-500/40 hover:scale-105 transition-all active:scale-95 duration-500 cursor-pointer"
          >
            CONTACT US
          </button>
          
          {/* Mobile Menu Trigger */}
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="lg:hidden text-text p-1 hover:text-yellow-500 transition-colors cursor-pointer"
          >
            <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
            </svg>
          </button>
        </div>

      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[100] bg-bg opacity-100 transition-all duration-500 ease-in-out lg:hidden ${
        isMenuOpen ? 'translate-x-0 pointer-events-auto' : 'translate-x-full pointer-events-none'
      }`}>
        <div className="flex flex-col h-full min-h-screen">
          {/* Close Header */}
          <section className="px-8 md:px-12 lg:px-20 flex items-center justify-between py-6">
            <span className="text-xl font-black tracking-tighter text-text">
              ScaleBySanny
            </span>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-text hover:text-yellow-500 transition-colors cursor-pointer"
            >
              <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>
          </section>
  
          {/* Navigation Links */}
          <nav className="flex-1 flex flex-col items-center justify-center gap-8 px-8">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveSection(link.name);
                  setIsMenuOpen(false);
                }}
                className={`text-xl font-black tracking-[0.3em] uppercase transition-all duration-300 cursor-pointer text-center ${
                  activeSection === link.name 
                    ? 'text-yellow-500' 
                    : 'text-text/60 hover:text-text'
                }`}
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                {link.name}
              </a>
            ))}
          </nav>
  
          {/* Bottom Action */}
          <div className="px-8 md:px-12 lg:px-20 py-10 flex flex-col items-center gap-6 bg-card">
            <button 
              onClick={() => {
                setIsMenuOpen(false);
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full max-w-xs bg-yellow-500 text-slate-900 py-5 rounded-xl font-black uppercase tracking-[0.3em] text-xs shadow-xl shadow-yellow-500/20 active:scale-95 transition-all cursor-pointer"
            >
              Initiate Contact
            </button>
            <p className="text-[10px] font-black text-text/40 uppercase tracking-widest opacity-80">Architectural Light Edition v1.0</p>
          </div>
        </div>
      </div>

    </header>
  );
};

export default Header;
