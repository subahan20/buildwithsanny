import React from 'react';

const Footer = () => {
  return (
    <footer className="pt-8 md:pt-10 pb-4 md:pb-6 px-4 md:px-4 bg-bg text-text/50 relative overflow-hidden transition-colors duration-500 border-t border-border/50">
      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Main Information Layer */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-4 mb-8 md:mb-10 md:px-8 lg:px-12">
          
          {/* Brand Column */}
          <div className="space-y-1 text-left max-w-sm lg:max-w-md">
            <div className="flex items-center justify-start gap-3">
              <img 
                src="/sanny_profile.jpg" 
                alt="ScaleBySanny Logo" 
                className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full border border-border group-hover:border-yellow-500/50 transition-all duration-300 object-cover shadow-lg"
              />
              <span className="text-[22px] md:text-[26px] lg:text-[30px] font-black tracking-tighter text-text drop-shadow-[0_0_10px_rgba(255,255,255,0.1)] transition-all duration-300">
                ScaleBySanny
              </span>
            </div>
            <p className="text-text/50 text-[15px] md:text-[16px] lg:text-[18px] font-bold leading-relaxed max-w-xs lg:max-w-sm transition-colors">
              <span className="text-text">One builder. Any domain. Every founder.</span> we selected few clients at a time - giving each product the full attention it deserves. AI solutions, web apps, UI/UX, and complex backend systems - if it helps your business grow, we build it.
            </p>
          </div>

          <div className="flex flex-col md:items-center">
            <div className="space-y-2 text-left">
              <h4 className="text-[12px] md:text-[13px] lg:text-[15px] font-black text-yellow-500 uppercase tracking-[0.4em] transition-colors">Contact Us</h4>
              <div className="space-y-0.5 flex flex-col items-start justify-start">
                <p className="text-text/50 text-[15px] md:text-[16px] lg:text-[18px] font-bold hover:text-yellow-500 transition-colors cursor-pointer">buildwithsanny7@gmail.com</p>
                <p className="text-text/50 text-[15px] md:text-[16px] lg:text-[18px] font-mono tracking-tight transition-colors">9546510540</p>
              </div>
            </div>
          </div>

          {/* Location Column */}
          <div className="space-y-2 text-left md:text-right">
            <h4 className="text-[12px] md:text-[13px] lg:text-[15px] font-black text-yellow-500 uppercase tracking-[0.4em] transition-colors">Location</h4>
            <div className="space-y-2 text-text/50 text-[15px] md:text-[16px] lg:text-[18px] leading-relaxed font-bold italic">
              <p>Remote</p>
            </div>
          </div>

        </div>

        {/* Bottom Signature Row */}
        <div className="flex flex-col items-center justify-center pt-4 md:pt-6 border-t border-border px-4">
          <p className="text-[11px] md:text-[12px] lg:text-[14px] font-bold text-text/40 uppercase tracking-[0.2em] whitespace-nowrap text-center">
            © {new Date().getFullYear()} <span className="text-text">ScaleBySanny</span> - All Rights Reserved
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
