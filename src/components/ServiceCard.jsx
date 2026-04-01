const ServiceCard = ({ title, items, icon, thumbnail }) => {
  return (
    <div className="group relative w-full py-8 border-b border-white/5 last:border-0 hover:bg-white/5 transition-all duration-500 cursor-pointer overflow-visible">
      <div className="max-w-[1440px] mx-auto px-8 flex flex-col lg:flex-row lg:items-center justify-between gap-12">
        
        <div className="flex items-center gap-12 flex-1 max-w-4xl">
          {/* Left: Icon */}
          <div className="w-16 h-16 bg-slate-900 border border-white/5 rounded-2xl flex items-center justify-center text-2xl shadow-sm group-hover:bg-gradient-to-br group-hover:from-yellow-400 group-hover:to-orange-600 group-hover:text-slate-900 transition-all duration-500 shrink-0 uppercase font-black text-[10px]">
            {icon || "⚡"}
          </div>

          {/* Mid-Left: Title & Floating Thumbnail */}
          <div className="relative flex items-center gap-6">
            <h3 className="text-3xl font-black text-white tracking-tight group-hover:text-yellow-400 transition-colors duration-500">
              {title}
            </h3>

            {/* Floating Thumbnail (Revealed on Hover - Desktop Only) */}
            {thumbnail && (
              <div className="hidden xl:block absolute left-full ml-12 w-48 h-28 rounded-2xl overflow-hidden shadow-2xl opacity-0 -translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700 pointer-events-none z-50 border-4 border-white/10 scale-90 group-hover:scale-100">
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
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 group-hover:bg-yellow-400 transition-colors shrink-0"></span>
              <span className="text-xs font-black uppercase tracking-widest text-slate-100 group-hover:text-white transition-colors whitespace-nowrap">
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
