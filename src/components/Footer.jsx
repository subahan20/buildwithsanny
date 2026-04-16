import React from 'react';

const Footer = () => {
  return (
    <footer className="py-4 px-4 md:px-8 bg-[#010101] text-text/50 relative overflow-hidden transition-colors duration-500">
      {/* Concentric Decorative Arcs */}
      
      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Main Information Layer */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-4 md:gap-8 mb-4">
          
          {/* Brand Column */}
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <img 
                src="/sanny_profile.jpg" 
                alt="ScaleBySanny Logo" 
                className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-border group-hover:border-yellow-500/50 transition-all duration-300 object-cover shadow-lg"
              />
              <span className="text-xl font-black text-text tracking-tighter transition-colors">
                ScaleBySanny
              </span>
            </div>
            <p className="text-text/70 text-[15px] font-bold leading-relaxed max-w-xl transition-colors">
              <span className="text-text">One builder. Any domain. Every founder.</span> I selected few clients at a time - giving each product the full attention it deserves. AI solutions, web apps, UI/UX, and complex backend systems - if it helps your business grow, I build it.
            </p>
          </div>

          {/* Contact Column */}
          <div className="space-y-1">
            <h4 className="text-[13px] font-black text-text uppercase tracking-[0.3em] transition-colors mb-1">Contact Us</h4>
            <div className="space-y-1">
              <p className="text-text/70 text-[15px] hover:text-yellow-600 dark:hover:text-white transition-colors cursor-pointer">buildwithsanny7@gmail.com</p>
              <p className="text-text/70 text-[15px] font-mono tracking-tight transition-colors">9546510540</p>
            </div>
          </div>

          {/* Location Column */}
          <div className="space-y-1">
            <h4 className="text-[13px] font-black text-text uppercase tracking-[0.3em] transition-colors mb-1">Location</h4>
            <div className="space-y-1 text-slate-500 dark:text-slate-400 text-[15px] leading-relaxed font-bold italic">
              <p>Remote</p>
            </div>
          </div>

        </div>

        {/* Bottom Signature Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 pt-2 md:pt-4 border-t border-border">
          <p className="text-[9px] md:text-[10px] font-bold text-text/40 uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} <span className="text-text">ScaleBySanny</span> - All Rights Reserved
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
