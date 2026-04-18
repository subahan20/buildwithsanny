import React from 'react';

const LiveAvailability = () => {
  return (
    <section className="py-4 px-4 md:px-4 bg-bg relative overflow-hidden transition-colors duration-500">
      <div className="absolute inset-0 bg-dot-grid opacity-[0.03]"></div>
      
      <div className="max-w-[1440px] mx-auto relative z-10">
        
        {/* Availability Card */}
        <div className="w-full bg-card rounded-[1.5rem] md:rounded-[2rem] border border-border shadow-2xl p-5 md:p-10 transition-all duration-700 hover:border-green-500/20 group/card">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
            
            {/* Status Info */}
            <div className="flex items-center gap-4 md:gap-8 w-full md:w-auto">
              <div className="relative shrink-0">
                <div className="absolute inset-0 bg-green-500/20 blur-2xl rounded-full animate-pulse"></div>
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-border flex items-center justify-center relative z-10 bg-bg shadow-[inset_0_0_20px_rgba(255,255,255,0.02)]">
                  <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-green-500 shadow-[0_0_25px_6px_rgba(34,197,94,0.6)] relative animate-pulse">
                    <div className="absolute inset-0 bg-white/30 rounded-full scale-[0.4] blur-[1px]"></div>
                  </div>
                </div>
              </div>
              
              <div className="text-left">
                <h5 className="text-green-500 font-black tracking-tighter text-xl sm:text-2xl md:text-[20px] lg:text-[25px] xl:text-[30px] leading-tight mb-2 transition-all whitespace-nowrap">
                  Available for new projects
                </h5>
                <p className="text-text/30 text-[9px] font-black uppercase tracking-widest md:tracking-[0.3em] leading-relaxed">
                  2 spots open · Onboarding from May 2025
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full md:w-[280px] h-14 rounded-full bg-bg border border-border text-[14px] md:text-[14px] font-black text-text uppercase tracking-[0.2em] hover:bg-card/50 transition-all duration-500 active:scale-95 group/btn shadow-2xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
              <span className="flex items-center justify-center gap-3 relative z-10">
                BOOK A CALL 
              </span>
            </button>

          </div>
        </div>

      </div>
    </section>
  );
};

export default LiveAvailability;
