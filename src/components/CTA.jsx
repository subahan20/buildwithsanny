const TailoredCollaborations = () => {
  const engagementModels = [
    {
      label: "STRATEGIC CONSULTATION",
      title: "Custom Quote",
      description: "For businesses identifying AI opportunities and building a custom implementation roadmap.",
      features: [
        "AI Readiness Assessment",
        "Process Optimization Audit",
        "Resource Planning",
        "Architecture Design"
      ],
      buttonLabel: "INQUIRE NOW",
      buttonVariant: "ghost",
      icon: (
        <svg className="w-24 h-24 text-slate-800/10 group-hover:text-yellow-500/10 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
          <path d="M12 3v18M3 12h18M12 8a4 4 0 110 8 4 4 0 010-8z" />
        </svg>
      )
    },
    {
      label: "PRODUCT IMPLEMENTATION",
      title: "Project Based",
      description: "End-to-end development of custom AI agents, CRM/ERP systems, and proprietary tools.",
      features: [
        "Custom Model Development",
        "Full Stack Engineering",
        "API & Cloud Setup",
        "Dedicated Support"
      ],
      buttonLabel: "INQUIRE NOW",
      buttonVariant: "solid",
      icon: (
        <svg className="w-24 h-24 text-slate-800/10 group-hover:text-yellow-500/10 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
          <path d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <section id="pricing" className="py-2 md:py-5 bg-[#020617] relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-dot-grid opacity-[0.05]"></div>
      
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20 relative z-10">
        {/* Header */}
        <div className="mb-3">
          <span className="text-yellow-400 font-black uppercase tracking-[0.4em] text-[10px] block mb-4">
            // WORK WITH US
          </span>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black italic tracking-tighter text-white mb-6 max-w-4xl">
            Tailored Collaborations
          </h2>
          <p className="text-slate-400 text-lg md:text-xl font-bold leading-relaxed max-w-2xl">
            Pricing varies based on project complexity and requirements. Contact our sales team for a custom discovery call.
          </p>
        </div>

        {/* Engagement Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {engagementModels.map((model, idx) => (
            <div 
              key={idx}
              className="group relative bg-slate-900/40 backdrop-blur-xl rounded-[2rem] p-8 lg:p-10 border border-white/5 shadow-2xl shadow-yellow-950/10 hover:border-yellow-500/50 transition-all duration-700 overflow-hidden"
            >
              {/* Watermark Icon */}
              <div className="absolute top-12 right-12 transition-transform duration-700 group-hover:scale-110">
                {model.icon}
              </div>

              <div className="relative z-10">
                <span className="text-[10px] font-black text-slate-500 tracking-[0.3em] uppercase mb-4 block">
                  {model.label}
                </span>
                <h3 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
                  {model.title}
                </h3>
                <p className="text-slate-400 text-lg font-bold leading-relaxed mb-8 max-w-sm">
                  {model.description}
                </p>

                <div className="space-y-6 mb-10">
                  {model.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-4">
                      <div className="w-5 h-5 rounded-full bg-yellow-500/10 flex items-center justify-center border border-yellow-500/20">
                        <svg className="w-3 h-3 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-slate-300 font-bold text-sm tracking-tight">{feature}</span>
                    </div>
                  ))}
                </div>

                <a 
                  href="#contact"
                  className={`
                    w-full py-5 rounded-xl text-center font-black tracking-[0.2em] text-xs transition-all duration-500 block cursor-pointer
                    ${model.buttonVariant === 'solid' 
                      ? 'bg-yellow-500 text-slate-900 shadow-lg shadow-yellow-500/20 hover:bg-yellow-400 hover:scale-[1.02]' 
                      : 'bg-slate-800/50 text-slate-200 hover:bg-yellow-500/10 border border-white/5 hover:border-yellow-500/50'}
                  `}
                >
                  {model.buttonLabel}
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TailoredCollaborations;
