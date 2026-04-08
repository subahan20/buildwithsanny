const ServiceCard = ({ title, items, icon, thumbnail }) => {
  return (
    <div className="group relative w-full py-2.5 md:py-4 border-b border-border last:border-0 hover:bg-card transition-all duration-500 cursor-default overflow-visible">
      <div className="w-full max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20 flex flex-col lg:flex-row lg:items-center justify-between gap-4 lg:gap-12">
        
        <div className="flex items-center gap-5 flex-1 max-w-4xl">
          {/* Left: Icon - Hidden on mobile */}
          <div className="hidden md:flex w-16 h-16 bg-card border border-border rounded-2xl items-center justify-center text-2xl shadow-sm group-hover:bg-gradient-to-br group-hover:from-yellow-400 group-hover:to-orange-600 group-hover:text-slate-900 transition-all duration-500 shrink-0 uppercase font-black text-[10px]">
            {icon || "⚡"}
          </div>

          {/* Mid-Left: Title & Floating Thumbnail */}
          <div className="relative flex items-center gap-1">
            <h3 className="text-lg font-black text-text tracking-tight group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-500">
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
        </div>

        {/* Right: Capabilities (Responsive List) */}
        <div className="flex flex-col sm:flex-row gap-x-8 gap-y-3 items-start sm:items-center w-full lg:w-auto justify-end">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 group/item">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 transition-colors shrink-0"></span>
              <span className="text-xs font-black uppercase tracking-widest text-text/60 group-hover:text-text transition-colors whitespace-nowrap">
                {item}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ServiceCard;
