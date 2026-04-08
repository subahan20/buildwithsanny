import React from 'react';

const Footer = () => {
  return (
    <footer className="py-10 md:py-14 bg-bg text-text/50 relative overflow-hidden transition-colors duration-500">
      {/* Concentric Decorative Arcs */}
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] border border-slate-900/5 dark:border-slate-900/40 rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
      
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20 relative z-10">
        {/* Main Information Layer */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12 mb-10">
          
          {/* Brand Column */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <img 
                src="/sanny_profile.jpg" 
                alt="ScaleBySanny Logo" 
                className="w-10 h-10 rounded-full border border-border object-cover"
              />
              <span className="text-2xl font-black text-text tracking-tighter transition-colors">
                ScaleBySanny
              </span>
            </div>
            <p className="text-text/70 text-base md:text-lg font-bold leading-relaxed max-w-xl transition-colors">
              <span className="text-text">One builder. Any domain. Every founder.</span> I work with a selected few clients at a time - giving each product the full attention it deserves. AI solutions, web apps, custom ai solution, ui design, backend systems - if it helps your business grow, I build it.
            </p>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-black text-text uppercase tracking-[0.3em] transition-colors">Contact Us</h4>
            <div className="space-y-4">
              <p className="text-text/70 hover:text-yellow-600 dark:hover:text-white transition-colors cursor-pointer">buildwithsanny7@gmail.com</p>
              <p className="text-text/70 font-mono tracking-wider transition-colors">9546510540</p>
            </div>
          </div>

          {/* Location Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-black text-text uppercase tracking-[0.3em] transition-colors">Location</h4>
            <div className="space-y-4 text-slate-500 dark:text-slate-300 leading-relaxed font-medium italic">
              <p>Remote</p>
            </div>
          </div>

        </div>

        {/* Bottom Signature Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 pt-6 md:pt-8 border-t border-border">
          <p className="text-[9px] md:text-[10px] font-bold text-text/40 uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} <span className="text-text">ScaleBySanny</span> - All Rights Reserved
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
