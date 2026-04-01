import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 md:py-16 bg-[#050C14] text-slate-400 relative overflow-hidden border-t border-slate-900">
      {/* Concentric Decorative Arcs */}
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] border border-slate-900/40 rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] border border-slate-900/30 rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] border border-slate-900/20 rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20 relative z-10">
        {/* Main Information Layer */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12 mb-10">
          
          {/* Brand Column */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black text-white tracking-tighter">
                Build with Sanny
              </span>
            </div>
            <p className="text-slate-200 text-lg md:text-xl font-bold leading-relaxed max-w-sm">
              Professional developer portfolio showcasing expertise in AI solutions, web applications, and architectural infrastructure.
            </p>
            {/* Removed 'More about us' link per request */}

          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-black text-white uppercase tracking-[0.3em]">Contact Us</h4>
            <div className="space-y-4">
              <p className="text-slate-200 hover:text-white transition-colors cursor-pointer">hello@buildwithsanny.com</p>
              <p className="text-slate-200 font-mono tracking-wider">+91 7095373638</p>
            </div>
          </div>

          {/* Location Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-black text-white uppercase tracking-[0.3em]">Location</h4>
            <div className="space-y-4 text-slate-300 leading-relaxed font-medium italic">
              <p>Hitech City<br />Hyderabad, Telangana 500072<br />India</p>
            </div>
          </div>

        </div>

        {/* Bottom Signature Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 pt-8 border-t border-slate-900/50">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} — Copyright All Rights Reserved
          </p>

          {/* Removed language switcher and decorative icon per request */}

        </div>

      </div>
    </footer>
  );
};

export default Footer;
