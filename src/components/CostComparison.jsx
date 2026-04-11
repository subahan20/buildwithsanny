import React from 'react';

const CostComparison = () => {
  const fullTeam = [
    { role: "UI/UX Designer", cost: "₹10-12L/yr" },
    { role: "Frontend Dev", cost: "₹12-15L/yr" },
    { role: "Backend Dev", cost: "₹12-18L/yr" },
    { role: "DevOps", cost: "₹20-30L/yr" },
    { role: "AI/ML", cost: "₹30-40L/yr" },
  ];

  const sannyBenefits = [
    "MVP in 2-6 weeks",
    "AI-ready product",
    "Web + Mobile included",
    "Cloud + DevOps setup",
    "Iterations + support",
  ];

  const painPoints = [
    "3-6 months hiring time",
    "Communication gaps",
    "No ownership",
    "Burn before revenue"
  ];

  const pros = [
    "Single point of accountability",
    "Faster execution",
    "Founder-friendly decisions",
    "Iterations + support"
  ];

  return (
    <section className="py-1 bg-bg relative overflow-hidden transition-colors duration-500">
      <div className="absolute inset-0 bg-dot-grid opacity-[0.05]"></div>
      
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20 relative z-10">
        {/* Header */}
        <div className="text-center mb-1 md:mb-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-text tracking-tighter mb-1 leading-none transition-colors">
            Build your startup without hiring a team.
          </h2>
          <p className="text-text/60 text-[13px] md:text-sm font-bold max-w-2xl mx-auto transition-colors">
            From idea → MVP → first revenue. I handle everything.
          </p>
        </div>

        {/* Comparison Card */}
        <div className="max-w-5xl mx-auto relative group">
          {/* Background Glows */}
          <div className="absolute top-0 left-0 w-1/2 h-full bg-red-500/5 blur-[120px] rounded-full pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-green-500/5 blur-[120px] rounded-full pointer-events-none"></div>

          <div className="relative z-10 bg-card/80 backdrop-blur-xl rounded-[2.5rem] border border-border shadow-2xl overflow-hidden">
            <div className="grid grid-cols-2">
              
              {/* Left Side: Hiring A Team */}
              <div className="p-2.5 sm:p-6 md:p-8 lg:p-10 border-r border-border">
                <div className="flex items-center gap-1.5 sm:gap-3 mb-1.5">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-red-500/10 flex items-center justify-center border border-red-500/20">
                    <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h3 className="text-[11px] sm:text-base md:text-xl font-extrabold text-text tracking-tight uppercase">Hiring a Team</h3>
                </div>
                
                <div className="space-y-0 mb-1">
                  {fullTeam.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center py-0.5">
                      <div className="flex items-center gap-2">
                          <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20">
                            <svg className="w-2 sm:w-2.5 h-2 sm:h-2.5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                         </div>
                        <span className="text-text font-bold opacity-90 text-[9px] sm:text-[12px] md:text-[13px]">{item.role}</span>
                      </div>
                      <span className="text-text font-black text-[9px] sm:text-[12px] md:text-[13px]">{item.cost}</span>
                    </div>
                  ))}
                </div>

                <div className="mb-1.5 md:mb-2">
                  <span className="text-[9px] sm:text-[15px] md:text-[18px] font-black text-red-500 tracking-tight whitespace-nowrap">
                    Typical Market Rate ₹70L-90L+/yr
                  </span>
                </div>

                <div className="space-y-0.5 pt-1 md:pt-1.5 border-t border-border">
                  {painPoints.map((point, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-red-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="text-text/60 font-bold text-[9px] sm:text-[11px] md:text-xs tracking-tight">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side: Working With Me */}
              <div className="pt-2.5 sm:pt-6 md:pt-8 lg:pt-10 px-2.5 sm:px-6 md:px-8 lg:px-10 pb-2.5 bg-green-500/[0.02]">
                <div className="flex items-center gap-1.5 sm:gap-3 mb-1.5 relative">
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-green-500/10 blur-[40px] rounded-full"></div>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-green-500/10 flex items-center justify-center border border-green-500/20 relative z-10">
                    <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-[11px] sm:text-base md:text-xl font-extrabold text-text tracking-tight uppercase relative z-10">Working With Me</h3>
                </div>

                <div className="space-y-0 mb-1 relative z-10">
                  {sannyBenefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 py-0.5">
                      <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20">
                        <svg className="w-2 sm:w-2.5 h-2 sm:h-2.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-text font-bold opacity-90 text-[9px] sm:text-[12px] md:text-[13px]">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="mb-1.5 md:mb-2 relative z-10">
                  <span className="text-[9px] sm:text-[15px] md:text-[15px] font-black text-green-400 tracking-tight drop-shadow-[0_0_15px_rgba(74,222,128,0.2)] whitespace-nowrap">
                    STARTING FROM 10% Market Rate
                  </span>
                </div>

                <div className="space-y-0.5 pt-1 md:pt-1.5 border-t border-border/50 relative z-10">
                  {pros.map((pro, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-text/70 font-bold text-[9px] sm:text-[11px] md:text-xs tracking-tight">{pro}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Inner Footer CTA */}
            <div className="p-3 md:p-4 border-t border-border bg-card flex flex-col items-center text-center">
              <h4 className="text-lg sm:text-xl md:text-2xl font-black text-text mb-1">
                You don't need a team. <span className="text-yellow-500">You need execution.</span>
              </h4>
              <p className="text-text/60 font-bold mb-3 md:mb-4 uppercase tracking-widest text-[8px] md:text-[9px]">Save 90% cost. Start from 10% Market Rate</p>
              
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-8 py-3.5 rounded-xl bg-yellow-500 text-slate-900 font-black uppercase tracking-[0.2em] text-[9px] sm:text-[10px] md:text-xs shadow-2xl shadow-yellow-500/20 hover:shadow-yellow-500/40 hover:scale-105 active:scale-95 transition-all duration-500 cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <span className="relative z-10">Build My MVP →</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* External Stats Footer */}
        <div className="max-w-4xl mx-auto mt-2 flex flex-wrap justify-between items-center gap-1 border-t border-border/50 pt-1.5 md:pt-2">
          <div className="flex-1 min-w-[140px] text-center">
            <p className="text-lg sm:text-xl font-black text-text tracking-tighter mb-0.5">Trusted by 50+</p>
            <p className="text-[8px] md:text-[9px] font-bold text-text/40 uppercase tracking-widest">Global Founders</p>
          </div>
          <div className="w-px h-6 bg-border/50 hidden md:block"></div>
          <div className="flex-1 min-w-[140px] text-center">
            <p className="text-lg sm:text-xl font-black text-text tracking-tighter mb-0.5">Built 100+</p>
            <p className="text-[8px] md:text-[9px] font-bold text-text/40 uppercase tracking-widest">Products Shipped</p>
          </div>
          <div className="w-px h-6 bg-border/50 hidden md:block"></div>
          <div className="flex-1 min-w-[140px] text-center">
            <p className="text-lg sm:text-xl font-black text-text tracking-tighter mb-0.5">Reach Revenue</p>
            <p className="text-[8px] md:text-[9px] font-bold text-text/40 uppercase tracking-widest">Fast & Profitable</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CostComparison;
