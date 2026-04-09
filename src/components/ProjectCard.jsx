import React from 'react';

const ProjectCard = ({ name, type, duration, description, logo, demoLink = "#", studyLink = "#" }) => {
  return (
    <div className="bg-card p-6 md:p-8 rounded-[2.5rem] border border-border hover:bg-card/70 hover:border-yellow-500 hover:shadow-2xl hover:shadow-yellow-500/10 transition-all duration-500 flex flex-col group cursor-default h-full relative overflow-hidden">
      {/* Top Section: Title & Logo */}
      <div className="flex justify-between items-start mb-6">
        <div className="space-y-3">
          <h3 className="text-2xl md:text-3xl font-black text-yellow-600 dark:text-yellow-500 tracking-tighter leading-none group-hover:text-yellow-500 transition-colors">
            {name}
          </h3>
          
          {/* Metadata Row */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-1.5 text-[10px] font-black text-text/50 uppercase tracking-widest">
              <span className="w-3.5 h-3.5 flex items-center justify-center bg-card text-text/70 rounded-sm">💼</span>
              {type}
            </div>
            {duration && (
              <div className="flex items-center gap-1.5 text-[10px] font-black text-text/50 uppercase tracking-widest">
                <span className="w-3.5 h-3.5 flex items-center justify-center bg-card text-text/70 rounded-sm">📅</span>
                {duration}
              </div>
            )}
          </div>
        </div>

        {/* Project Logo Square */}
        <div className={`w-14 h-14 rounded-xl flex items-center justify-center overflow-hidden transition-all duration-500 shadow-sm border border-yellow-500/20 group-hover:scale-110 ${
          typeof logo === 'string' && logo.length <= 4 
            ? 'bg-yellow-500/10 text-xl group-hover:bg-yellow-500 group-hover:text-slate-900' 
            : 'bg-bg dark:bg-slate-800'
        }`}>
          {typeof logo === 'string' && logo.length <= 4 ? (
            logo || "🚀"
          ) : (
            <img src={logo} alt={name} className="w-full h-full object-cover" />
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-sm md:text-base font-bold text-text/70 leading-relaxed mb-6 md:mb-10 flex-1 opacity-95 transition-colors">
        {description}
      </p>

      {/* Bottom Action Footer: High Conversion Links */}
      <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border/50">
        <a 
          href={demoLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[10px] font-black uppercase tracking-widest text-yellow-600 dark:text-yellow-400 hover:text-text transition-colors flex items-center gap-2 group/btn"
        >
          <span>Live Preview</span>
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current transition-transform group-hover/btn:translate-x-0.5"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/></svg>
        </a>
        
        <span className="text-text/20">•</span>
        
        <a 
          href={studyLink}
          className="text-[10px] font-black uppercase tracking-widest text-text/60 hover:text-yellow-500 transition-colors"
        >
          View Case Study
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
