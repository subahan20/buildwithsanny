const ServiceCard = ({ title, items, icon }) => {
  return (
    <div className="group relative w-full py-2.5 md:py-3 xl:py-4 border-b border-border/10 last:border-0 hover:bg-card/30 transition-all duration-500 cursor-default overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto flex items-center gap-4 xl:gap-8 px-2 sm:px-4">

        {/* Left: Icon Container */}
        <div className="flex w-10 h-10 md:w-12 md:h-12 xl:w-14 xl:h-14 bg-card border border-border/30 rounded-xl items-center justify-center shadow-sm group-hover:bg-gradient-to-br group-hover:from-yellow-400 group-hover:to-orange-500 group-hover:border-transparent transition-all duration-700 shrink-0 select-none relative overflow-hidden">
          <div className="relative z-10 text-text/80 group-hover:text-slate-900 transition-colors duration-500">
            {icon || "⚡"}
          </div>
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-1 md:gap-2 lg:gap-2.5 flex-1 min-w-0">
          <h3 className="text-[20px] sm:text-xl md:text-[23px] lg:text-[25px] font-black text-text tracking-tight group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-500 leading-none">
            {title}
          </h3>

          <div className="flex flex-wrap items-center gap-x-3 md:gap-x-5 gap-y-1 md:gap-y-2">
            {items.map((item, idx) => (
              <div key={idx} className="flex items-center gap-1.5 group/item">
                <span className="w-1 h-1 rounded-full bg-yellow-500 shrink-0 shadow-[0_0_8px_rgba(234,179,8,0.4)]"></span>
                <span className="text-[9px] md:text-[15px] lg:text-[16px] xl:text-[17px] font-black uppercase tracking-[0.2em] text-text/40 group-hover:text-text/70 transition-colors whitespace-nowrap">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <div className="hidden sm:flex items-center justify-center p-1.5 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 shrink-0">
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </div>

      </div>
    </div>
  );
};

export default ServiceCard;
