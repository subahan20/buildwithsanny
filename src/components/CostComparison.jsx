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
    <section className="pt-4 pb-0 px-4 md:px-4 bg-bg relative overflow-hidden transition-colors duration-500">
      <div className="absolute inset-0 bg-dot-grid opacity-[0.03]"></div>
      
      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-[27px] md:text-[45px] lg:text-[60px] font-black text-text tracking-tighter mb-4 leading-[1.1] transition-colors">
            Build your startup <br className="hidden md:block" /> without hiring a team.
          </h2>
          <p className="text-text/50 text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] font-bold max-w-2xl mx-auto transition-colors">
            From idea → MVP → first revenue. I handle everything.
          </p>
        </div>

        {/* Comparison Card */}
        <div className="max-w-5xl mx-auto relative group">
          {/* Background Glows */}
          <div className="absolute top-0 left-0 w-1/2 h-full bg-red-500/5 blur-[120px] rounded-full pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-green-500/5 blur-[120px] rounded-full pointer-events-none"></div>

          <div className="relative z-10 bg-card rounded-[2.5rem] border border-border/50 shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              
              {/* Left Side: Hiring A Team */}
              <div className="p-6 sm:p-8 md:p-10 border-b md:border-b-0 md:border-r border-border/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center border border-red-500/20">
                    <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-black text-text tracking-tight uppercase">Hiring a Team</h3>
                </div>
                
                <div className="space-y-1 mb-4">
                  {fullTeam.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center py-0.5">
                      <div className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20">
                            <svg className="w-2.5 h-2.5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </div>
                        <span className="text-text font-bold opacity-60 text-sm sm:text-base md:text-lg">{item.role}</span>
                      </div>
                      <span className="text-text font-black text-sm sm:text-base md:text-lg">{item.cost}</span>
                    </div>
                  ))}
                </div>

                <div className="mb-4">
                  <span className="text-[19px] lg:text-[23px] xl:text-[25px] font-black text-red-500 tracking-tight block w-full whitespace-normal md:whitespace-nowrap leading-tight">
                    Typical Market Rate ₹70L-90L+/yr
                  </span>
                </div>

                <div className="space-y-1 pt-4 border-t border-border/50">
                  {painPoints.map((point, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-red-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="text-text/40 font-bold text-sm sm:text-base tracking-tight">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side: Working With Me */}
              <div className="p-6 sm:p-8 md:p-10 bg-green-500/[0.01]">
                <div className="flex items-center gap-3 mb-4 relative">
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-green-500/5 blur-[40px] rounded-full"></div>
                  <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center border border-green-500/20 relative z-10">
                    <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-black text-text tracking-tight uppercase relative z-10">Working With Me</h3>
                </div>

                <div className="space-y-1 mb-4 relative z-10">
                  {sannyBenefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 py-0.5">
                      <div className="w-4 h-4 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20">
                        <svg className="w-2.5 h-2.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-text font-bold opacity-80 text-sm sm:text-base md:text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="mb-4">
                  <span className="text-[19px] lg:text-[23px] xl:text-[25px] font-black text-green-400 tracking-tight block w-full whitespace-normal md:whitespace-nowrap leading-tight">
                    STARTING FROM 10% Market Rate
                  </span>
                </div>

                <div className="space-y-1 pt-4 border-t border-border/50 relative z-10">
                  {pros.map((pro, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-text/60 font-bold text-sm sm:text-base tracking-tight">{pro}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Inner Footer CTA */}
            <div className="p-6 md:p-10 border-t border-border/50 bg-card flex flex-col items-center text-center">
              <h4 className="text-[27px] font-black text-text mb-2 tracking-tighter leading-none">
                You don't need a team. <span className="text-yellow-500">You need execution.</span>
              </h4>
              <p className="text-text/50 font-bold mb-8 uppercase tracking-[0.4em] text-[10px]">Save 90% cost. Start from 10% Market Rate</p>
              
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-[260px] h-14 rounded-full bg-yellow-500 text-slate-900 font-black uppercase tracking-[0.2em] text-[14px] md:text-sm shadow-2xl shadow-yellow-500/30 hover:scale-[1.03] transition-transform active:scale-95"
              >
                Build My MVP
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mt-10 mb-10 px-6 md:px-10">
          <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-3 md:gap-5">
            {/* Item 1 */}
            <div className="flex-1 text-left md:text-center border-l-2 border-yellow-500/50 md:border-none pl-4 md:pl-0 py-2 md:py-0">
              <p className="text-sm md:text-base lg:text-lg font-black text-text tracking-tighter mb-0.5 whitespace-nowrap">Trusted by 50+</p>
              <p className="text-[10px] md:text-[10px] lg:text-sm font-bold text-text/60 uppercase tracking-widest whitespace-nowrap">Global Founders</p>
            </div>
            
            {/* Desktop Separator 1 */}
            <div className="hidden md:block self-center w-px h-6 bg-border"></div>
            
            {/* Item 2 */}
            <div className="flex-1 text-left md:text-center border-l-2 border-yellow-500/50 md:border-none pl-4 md:pl-0 py-2 md:py-0">
              <p className="text-sm md:text-base lg:text-lg font-black text-text tracking-tighter mb-0.5 whitespace-nowrap">Built 100+</p>
              <p className="text-[10px] md:text-[10px] lg:text-sm font-bold text-text/60 uppercase tracking-widest whitespace-nowrap">Products Shipped</p>
            </div>
            
            {/* Desktop Separator 2 */}
            <div className="hidden md:block self-center w-px h-6 bg-border"></div>
            
            {/* Item 3 */}
            <div className="flex-1 text-left md:text-center border-l-2 border-yellow-500/50 md:border-none pl-4 md:pl-0 py-2 md:py-0">
              <p className="text-sm md:text-base lg:text-lg font-black text-text tracking-tighter mb-0.5 whitespace-nowrap">Reach Revenue</p>
              <p className="text-[10px] md:text-[10px] lg:text-sm font-bold text-text/60 uppercase tracking-widest whitespace-nowrap">Fast & Profitable</p>
            </div>
          </div>
        </div>
      </div>
        
      {/* External Stats Footer */}
      {/* <div className="max-w-4xl mx-auto mt-6 flex flex-row justify-between items-center gap-2 border-t border-white/5 pt-6">
        <div className="flex gap-5 justify-center items-center mx-auto">
          {["Trusted by 50+", "Built 100+", "Reach Revenue"].map((item, idx) => (
            <div key={idx} className="flex-1 text-center">
              <p className="text-sm md:text-base lg:text-lg font-black text-text tracking-tighter mb-0.5 whitespace-nowrap">{item}</p>
              <p className="text-[10px] md:text-[10px] lg:text-sm font-bold text-text/60 uppercase tracking-widest whitespace-nowrap">Global Founders</p>
            </div>
          ))}
        </div>
      </div> */}
    </section>
  );
};

export default CostComparison;
