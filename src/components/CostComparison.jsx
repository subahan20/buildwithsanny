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
    <section className="py-2 bg-bg relative overflow-hidden transition-colors duration-500">
      <div className="absolute inset-0 bg-dot-grid opacity-[0.05]"></div>
      
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20 relative z-10">
        {/* Header */}
        <div className="text-center mb-2">
          <h2 className="text-xl md:text-3xl lg:text-5xl font-black text-text tracking-tighter mb-6 leading-tight transition-colors">
            Build your startup without hiring a team.
          </h2>
          <p className="text-text/60 text-lg md:text-xl font-bold max-w-2xl mx-auto transition-colors">
            From idea → MVP → first revenue. I handle everything.
          </p>
        </div>

        {/* Comparison Card */}
        <div className="max-w-5xl mx-auto relative group">
          {/* Background Glows */}
          <div className="absolute top-0 left-0 w-1/2 h-full bg-red-500/5 blur-[120px] rounded-full pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-green-500/5 blur-[120px] rounded-full pointer-events-none"></div>

          <div className="relative z-10 bg-card/80 backdrop-blur-xl rounded-[2.5rem] border border-border shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
              
              {/* Left Side: Hiring A Team */}
              <div className="p-5 md:p-5">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center border border-red-500/20">
                    <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-black text-text tracking-tight uppercase">Hiring a Team</h3>
                </div>
                
                <div className="space-y-0 mb-0">
                  {fullTeam.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center py-1">
                      <div className="flex items-center gap-3">
                         <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20">
                            <svg className="w-3 h-3 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                         </div>
                        <span className="text-text font-bold opacity-90">{item.role}</span>
                      </div>
                      <span className="text-text font-black text-sm">{item.cost}</span>
                    </div>
                  ))}
                </div>

                <div className="mb-2">
                  <span className="text-2xl md:text-3xl font-black text-red-500 tracking-tighter">
                    Typical Market Rate ₹70L-90L+/yr
                  </span>
                </div>

                <div className="space-y-1 pt-2 border-t border-border">
                  {painPoints.map((point, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <svg className="w-4 h-4 text-red-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="text-text/60 font-bold text-sm tracking-tight">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side: Working With Me */}
              <div className="p-2 md:p-5 bg-green-500/[0.02]">
                <div className="flex items-center gap-4 mb-2 relative">
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-500/10 blur-[60px] rounded-full"></div>
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center border border-green-500/20 relative z-10">
                    <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-black text-text tracking-tight uppercase relative z-10">Working With Me</h3>
                </div>

                <div className="space-y-0 mb-1 relative z-10">
                  {sannyBenefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-3 py-1">
                      <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20">
                        <svg className="w-3 h-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-text font-bold opacity-90">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="mb-1 relative z-10">
                  <span className="text-2xl md:text-3xl font-black text-green-400 tracking-tighter drop-shadow-[0_0_15px_rgba(74,222,128,0.2)]">
                    STARTING FROM 10% Market Rate
                  </span>
                </div>

                <div className="space-y-1 pt-1 border-t border-border/50 relative z-10">
                  {pros.map((pro, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-text/70 font-bold text-sm tracking-tight">{pro}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Inner Footer CTA */}
            <div className="p-2 md:p-5 border-t border-border bg-card flex flex-col items-center text-center">
              <h4 className="text-xl md:text-2xl font-black text-text mb-2">
                You don't need a team. <span className="text-yellow-500">You need execution.</span>
              </h4>
              <p className="text-text/60 font-bold mb-8 uppercase tracking-widest text-xs">Save 90% cost. Start from 10% Market Rate</p>
              
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-12 py-5 rounded-2xl bg-yellow-500 text-slate-900 font-black uppercase tracking-[0.2em] text-xs shadow-2xl shadow-yellow-500/20 hover:shadow-yellow-500/40 hover:scale-105 active:scale-95 transition-all duration-500 cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <span className="relative z-10">Build My MVP →</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* External Stats Footer */}
        <div className="max-w-4xl mx-auto mt-5 flex flex-wrap justify-between items-center gap-8 border-t border-border/50 pt-10">
          <div className="flex-1 min-w-[200px] text-center">
            <p className="text-2xl font-black text-text tracking-tighter mb-1">Trusted by 50+</p>
            <p className="text-[10px] font-bold text-text/40 uppercase tracking-widest">Global Founders</p>
          </div>
          <div className="w-px h-10 bg-border/50 hidden md:block"></div>
          <div className="flex-1 min-w-[200px] text-center">
            <p className="text-2xl font-black text-text tracking-tighter mb-1">Built 100+</p>
            <p className="text-[10px] font-bold text-text/40 uppercase tracking-widest">Products Shipped</p>
          </div>
          <div className="w-px h-10 bg-border/50 hidden md:block"></div>
          <div className="flex-1 min-w-[200px] text-center">
            <p className="text-2xl font-black text-text tracking-tighter mb-1">Helped startups</p>
            <p className="text-[10px] font-bold text-text/40 uppercase tracking-widest">reach first revenue</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CostComparison;
