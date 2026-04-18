import React from 'react';

const Footer = () => {
  return (
    <footer className="pt-8 md:pt-10 pb-4 md:pb-6 px-4 md:px-4 bg-bg text-text/50 relative overflow-hidden transition-colors duration-500 border-t border-border/50">
      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Main Information Layer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 mb-8 md:mb-10 md:px-8 lg:px-12">
          
          {/* Brand Column */}
          <div className="space-y-3 md:space-y-4 text-left">
            <div className="flex items-center justify-start gap-3">
              <img 
                src="/sanny_profile.jpg" 
                alt="ScaleBySanny Logo" 
                className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full border border-border group-hover:border-yellow-500/50 transition-all duration-300 object-cover shadow-lg"
              />
              <span className="text-[20px] md:text-[24px] lg:text-[28px] font-black tracking-tighter text-text drop-shadow-[0_0_10px_rgba(255,255,255,0.1)] transition-all duration-300">
                ScaleBySanny
              </span>
            </div>
            <p className="text-text/50 text-[13px] md:text-[14px] lg:text-[16px] font-bold leading-relaxed max-w-xl transition-colors">
              <span className="text-text">One builder. Any domain. Every founder.</span> I selected few clients at a time - giving each product the full attention it deserves. AI solutions, web apps, UI/UX, and complex backend systems - if it helps your business grow, I build it.
            </p>
          </div>

          {/* Contact Column */}
          <div className="space-y-4 text-left md:text-center">
            <h4 className="text-[10px] md:text-[11px] lg:text-[13px] font-black text-yellow-500 uppercase tracking-[0.4em] transition-colors">Contact Us</h4>
            <div className="space-y-2">
              <p className="text-text/50 text-[13px] md:text-[14px] lg:text-[16px] font-bold hover:text-yellow-500 transition-colors cursor-pointer">buildwithsanny7@gmail.com</p>
              <p className="text-text/50 text-[13px] md:text-[14px] lg:text-[16px] font-mono tracking-tight transition-colors">9546510540</p>
            </div>
          </div>

          {/* Location Column */}
          <div className="space-y-4 text-left md:text-right">
            <h4 className="text-[10px] md:text-[11px] lg:text-[13px] font-black text-yellow-500 uppercase tracking-[0.4em] transition-colors">Location</h4>
            <div className="space-y-2 text-text/50 text-[13px] md:text-[14px] lg:text-[16px] leading-relaxed font-bold italic">
              <p>Remote</p>
            </div>
          </div>

        </div>

        {/* Bottom Signature Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 pt-4 md:pt-6 border-t border-border md:px-8 lg:px-12">
          <p className="text-[9px] md:text-[10px] lg:text-[12px] font-bold text-text/40 uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} <span className="text-text">ScaleBySanny</span> - All Rights Reserved
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
