import React from 'react';

const LiveAvailability = () => {
  return (
    <section className="py-1 bg-bg relative overflow-hidden transition-colors duration-500">
      <div className="absolute inset-0 bg-dot-grid opacity-[0.05]"></div>
      
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20 relative z-10">
        
        {/* Simplified Availability Bar - Full Width */}
        <div className="w-full bg-card/60 dark:bg-card/20 backdrop-blur-3xl rounded-2xl md:rounded-3xl border border-border shadow-xl p-4 md:p-6 transition-all duration-500 hover:border-yellow-500/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
            
            {/* Left Side: Status */}
            <div className="flex items-center gap-5">
              <div className="relative">
                <div className="absolute inset-0 bg-green-500/40 blur-xl rounded-full animate-pulse"></div>
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-green-500/30 flex items-center justify-center relative z-10 bg-slate-900 dark:bg-black">
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.8)]"></div>
                </div>
              </div>
              
              <div className="text-center md:text-left">
                <h5 className="text-green-500 font-black tracking-tight text-lg sm:text-xl md:text-2xl leading-none mb-1 md:mb-2 transition-all">
                  Available for new projects
                </h5>
                <p className="text-text/60 text-[9px] md:text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">
                  2 spots open · Onboarding from May 2025
                </p>
              </div>
            </div>

            {/* Right Side: CTA Button */}
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full md:w-auto px-10 py-3.5 rounded-xl border border-text/10 text-[10px] sm:text-xs md:text-sm font-black text-text uppercase tracking-widest hover:bg-text hover:text-bg transition-all duration-500 active:scale-95 cursor-pointer shadow-lg whitespace-nowrap group"
            >
              <span className="flex items-center justify-center gap-2">
                Book a call 
                <svg className="w-3.5 h-3.5 fill-current transition-transform group-hover:translate-x-1" viewBox="0 0 24 24">
                  <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"/>
                </svg>
              </span>
            </button>

          </div>
        </div>

      </div>
    </section>
  );
};

export default LiveAvailability;
