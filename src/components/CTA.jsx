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
    <section id="pricing" className="py-4 px-4 md:px-8 bg-bg relative overflow-hidden transition-colors duration-500">
      <div className="absolute inset-0 bg-dot-grid opacity-[0.05]"></div>
      
      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="text-yellow-400 font-bold uppercase tracking-[0.4em] text-[10px] block mb-2">
            // WORK WITH US
          </span>
          <h2 className="text-[26px] font-black italic tracking-tighter text-text mb-4 max-w-4xl mx-auto leading-none transition-all duration-500">
            Tailored Collaborations
          </h2>
          <p className="text-text/50 text-[13px] md:text-sm font-bold leading-relaxed max-w-2xl mx-auto mb-8 transition-colors duration-500">
            Pricing varies based on project complexity. Contact our sales team for a custom discovery call.
          </p>
        </div>

        {/* Engagement Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {engagementModels.map((model, idx) => (
            <div 
              key={idx}
              className="group relative bg-card backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 lg:p-14 border border-border shadow-2xl shadow-yellow-950/10 hover:border-yellow-500/50 transition-all duration-700 overflow-hidden"
            >
              {/* Watermark Icon */}
              <div className="absolute top-8 right-8 transition-transform duration-700 group-hover:scale-110">
                {model.icon}
              </div>

              <div className="relative z-10">
                <span className="text-[9px] font-black text-text/50 tracking-[0.3em] uppercase mb-0.5 block transition-colors">
                  {model.label}
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-text tracking-tighter mb-1 transition-colors">
                  {model.title}
                </h3>
                <p className="text-text/70 text-[12px] md:text-[13px] font-bold leading-relaxed mb-2.5 max-w-sm transition-colors">
                  {model.description}
                </p>

                <div className="space-y-1.5 mb-4">
                  {model.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full bg-yellow-500/10 flex items-center justify-center border border-yellow-500/20">
                        <svg className="w-2.5 h-2.5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-[11px] md:text-xs font-bold text-text/80 tracking-tight transition-colors">{feature}</span>
                    </div>
                  ))}
                </div>

                <a 
                  href="#contact"
                  className={`
                    w-full h-14 flex items-center justify-center rounded-xl text-center font-black tracking-[0.2em] text-xs md:text-sm transition-all duration-500 block cursor-pointer uppercase shadow-lg
                    ${model.buttonVariant === 'solid' 
                      ? 'bg-yellow-500 text-slate-900 shadow-yellow-500/20 hover:bg-yellow-400 hover:scale-[1.02]' 
                      : 'bg-card text-text hover:bg-yellow-500/10 border border-border hover:border-yellow-500/50 hover:scale-[1.02]'}
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
