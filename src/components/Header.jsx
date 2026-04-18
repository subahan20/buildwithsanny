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
    { name: 'Home', href: '/' },
    { name: 'SERVICES', href: '#services' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'STATS', href: '#stats' },
    { name: 'PROCESS', href: '#process' },
    { name: 'PRICING', href: '#pricing' },
    { name: 'CONTACT', href: '#contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
      isScrolled 
        ? 'bg-bg/95 backdrop-blur-md py-2 shadow-2xl shadow-yellow-950/10' 
        : 'bg-bg py-4'
    }`}>
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-4 flex items-center justify-between transition-all duration-500">
        
        {/* Brand Mark */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <img 
            src="/sanny_profile.jpg" 
            alt="ScaleBySanny Logo" 
            className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-border group-hover:border-yellow-500/50 transition-all duration-300 object-cover shadow-lg"
          />
          <span className="text-[18px] font-black tracking-tighter text-text drop-shadow-[0_0_10px_rgba(255,255,255,0.1)] transition-all duration-300">
            ScaleBySanny
          </span>
        </div>

        {/* Center Navigation Suite (Desktop) */}
        <nav className="hidden lg:flex items-center lg:gap-4 xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link?.name}
              href={link?.href}
              onClick={(e) => {
                if (location.pathname === '/' && link.href.startsWith('#')) {
                  e.preventDefault();
                  const element = document.getElementById(link.href.substring(1));
                  element?.scrollIntoView({ behavior: 'smooth' });
                } else if (link.name.toLowerCase() === 'home' && location.pathname === '/') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
                setActiveSection(link.name);
              }}
              className={`text-[9px] lg:text-[10px] font-black tracking-[0.2em] uppercase transition-all duration-300 relative py-1.5 ${
                activeSection === link?.name 
                  ? 'text-yellow-500' 
                  : 'text-text/60 hover:text-text'
              }`}
            >
              {link?.name}
              {activeSection === link?.name && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-yellow-500 rounded-full animate-in fade-in slide-in-from-bottom-1 scale-x-100 transition-transform duration-300"></span>
              )}
            </a>
          ))}
        </nav>

        {/* Right Tools & Action Button */}
          <div className="flex items-center gap-2 md:gap-4">
          <div 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/5 border border-green-500/10 cursor-pointer hover:bg-green-500/10 transition-colors"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse-green"></div>
            <span className="text-[10px] font-black text-green-500 uppercase tracking-[0.2em]">
              Available {dynamicDate}
            </span>
          </div>

          <div className="hidden lg:block">
            <ThemeToggle />
          </div>

          {/* Mobile Menu Trigger Area */}
          <div className="flex items-center gap-3 lg:hidden">
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-5 py-2 rounded-xl text-[12px] md:text-[10px] font-black uppercase tracking-[0.2em] bg-yellow-500 text-slate-900 shadow-lg shadow-yellow-500/20 active:scale-95 transition-all cursor-pointer"
            >
              CALL
            </button>
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="text-text p-1 hover:text-yellow-500 transition-colors cursor-pointer"
            >
              <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
              </svg>
            </button>
          </div>
        </div>

      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[100] h-screen w-screen transition-all duration-700 ease-in-out lg:hidden ${
        isMenuOpen 
          ? 'translate-y-0 opacity-100' 
          : '-translate-y-full opacity-0 pointer-events-none'
      }`}>
        {/* Background Mask - Solid Themed isolation (Full Screen) */}
        <div className="absolute inset-0 bg-bg transition-colors duration-700"></div>
        
        <div className="relative h-screen flex flex-col uppercase text-white overflow-y-auto">
          {/* Header Controls */}
          <div className="absolute top-10 left-8 right-8 flex justify-between items-center z-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-yellow-500 bg-yellow-500 shadow-xl shadow-yellow-500/20">
                <img 
                  src="/sanny_profile.jpg" 
                  alt="Sanny" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-[18px] md:text-[20px] font-black tracking-tighter text-text drop-shadow-[0_0_10px_rgba(255,255,255,0.1)] transition-all duration-300">
                ScaleBySanny
              </span>
            </div>
            <div className="flex items-center gap-6">
              <ThemeToggle />
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="group p-2 text-text hover:text-yellow-500 transition-all duration-500 cursor-pointer"
                aria-label="Close Menu"
              >
                <div className="relative w-8 h-8 flex items-center justify-center">
                  <span className="absolute w-8 h-[2px] bg-current transform rotate-45 group-hover:rotate-[135deg] transition-all duration-500"></span>
                  <span className="absolute w-8 h-[2px] bg-current transform -rotate-45 group-hover:rotate-[45deg] transition-all duration-500"></span>
                </div>
              </button>
            </div>
          </div>

          {/* Centered Navigation Hub */}
          <nav className="flex-1 flex flex-col items-center justify-center gap-10 relative z-10 px-8">
            {[
              { name: 'Home', href: '/' },
              { name: 'Services', href: '#services' },
              { name: 'Work', href: '#projects' },
              { name: 'Contact', href: '#contact' }
            ].map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  if (link.href.startsWith('#')) {
                    e.preventDefault();
                    setIsMenuOpen(false);
                    const element = document.getElementById(link.href.substring(1));
                    element?.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    setIsMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                  setActiveSection(link.name.toUpperCase());
                }}
                className={`group flex flex-col items-center gap-2 transition-all duration-700 ${
                  isMenuOpen 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-12 opacity-0 text-transparent'
                }`}
                style={{ 
                  transitionDelay: `${isMenuOpen ? 200 + (idx * 100) : 0}ms`,
                }}
              >
                <span className={`text-[16px] md:text-[20px] font-black uppercase tracking-[0.3em] transition-all duration-500 group-hover:scale-110 group-hover:tracking-[0.4em] ${
                   activeSection === link.name.toUpperCase() ? 'text-yellow-500' : 'text-text'
                }`}>
                  {link.name}
                </span>
                {/* Minimal Underline */}
                <div className="w-0 h-[2px] bg-yellow-500 transition-all duration-700 group-hover:w-full shadow-[0_0_15px_rgba(234,179,8,0.5)]"></div>
              </a>
            ))}
          </nav>

          {/* Minimal Footer */}
          <div className="absolute bottom-12 left-0 w-full flex flex-col items-center gap-4 z-10">
            <div className="w-12 h-[1px] bg-border/20"></div>
            <p className="text-[9px] font-black text-text/15 uppercase tracking-[0.6em]">
               Architectural Vision Edition
            </p>
          </div>
        </div>
      </div>

    </header>
  );
};

export default Header;
