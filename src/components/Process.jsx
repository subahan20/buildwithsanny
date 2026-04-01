const PROCESS_STEPS = [
  { id: "01", title: "Discovery & Audit" },
  { id: "02", title: "Neural Blueprint" },
  { id: "03", title: "Agile Development" },
  { id: "04", title: "Global Deployment" }
];

const Process = () => {
  return (
    <section id="process" className="py-24 bg-white relative overflow-hidden border-b border-slate-50">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-dot-grid opacity-[0.05]"></div>
      
      <div className="max-w-[1440px] mx-auto px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-20 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          <h2 className="text-6xl sm:text-8xl font-black tracking-tighter leading-[0.85] max-w-4xl text-transparent bg-clip-text bg-gradient-to-br from-slate-950 via-slate-900 to-slate-500 pb-2">
            Strategic Deployment Cycle<span className="text-yellow-500">.</span>
          </h2>
        </div>

        {/* Vertical Pipeline List */}
        <div className="flex flex-col border-t border-slate-100 mb-24">
          {PROCESS_STEPS.map((step, idx) => (
            <div 
              key={idx} 
              className="group flex flex-col md:flex-row items-center py-12 border-b border-slate-100 hover:bg-slate-50/50 transition-all duration-500 cursor-pointer"
            >
              <div className="flex-1 flex items-center gap-12 md:gap-24">
                <span className="text-2xl font-black text-yellow-500 tracking-tighter">
                  {step.id}
                </span>
                <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                  {step.title}
                </h3>
              </div>
              
              <div className="mt-8 md:mt-0 w-16 h-16 border border-slate-200 rounded-xl flex items-center justify-center text-2xl text-slate-400 group-hover:bg-yellow-600 group-hover:text-white group-hover:border-yellow-600 transition-all duration-500 shadow-sm">
                ↗
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Process;
