const ServiceCard = ({ title, items, icon, thumbnail }) => {
  return (
    <div className="group relative w-full py-1 border-b border-border/50 last:border-0 hover:bg-card/40 transition-all duration-500 cursor-default overflow-visible">
      <div className="w-full max-w-[1440px] mx-auto flex items-center gap-4 md:gap-8">
        
        {/* Left: Icon - Hidden on small mobile */}
        <div className="hidden sm:flex w-10 h-10 md:w-12 md:h-12 bg-card border border-border/50 rounded-xl items-center justify-center text-xl shadow-sm group-hover:bg-gradient-to-br group-hover:from-yellow-400 group-hover:to-orange-600 group-hover:text-slate-900 transition-all duration-700 shrink-0 select-none">
          {icon || "⚡"}
        </div>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-1 lg:gap-12 flex-1 pt-0.5 lg:pt-0">
            {/* Title Area */}
            <div className="relative flex items-center gap-1">
              <h3 className="text-lg sm:text-xl md:text-2xl font-black text-text tracking-tighter group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-500 whitespace-nowrap">
                {title}
              </h3>

              {/* Floating Thumbnail (Revealed on Hover - Desktop Only) */}
              {thumbnail && (
                <div className="hidden xl:block absolute left-full ml-12 w-48 h-28 rounded-2xl overflow-hidden shadow-2xl opacity-0 -translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700 pointer-events-none z-50 border-4 border-border scale-90 group-hover:scale-100">
                  <img 
                    src={thumbnail} 
                    alt="Service Highlight" 
                    className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                  />
                </div>
              )}
            </div>

            {/* Capabilities: Vertical (Mobile) -> Horizontal Single (tablet/desktop) */}
            <div className="flex flex-wrap items-center gap-x-4 md:gap-x-6 gap-y-0.5 lg:justify-end">
              {items.map((item, idx) => (
                <div key={idx} className="flex items-center gap-1.5 group/item">
                  <span className="w-1 h-1 rounded-full bg-yellow-500 transition-colors shrink-0 shadow-[0_0_8px_rgba(234,179,8,0.4)]"></span>
                  <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-text/60 group-hover:text-text transition-colors whitespace-nowrap">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

      </div>
    </div>
  );
};

export default ServiceCard;
