import React from 'react';

const ProjectCard = ({ name, type, duration, description, logo, demoLink = "#", codeLink = "#" }) => {
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

      {/* Bottom Action Buttons */}
      <div className="flex items-center gap-3 mt-auto">
        <a href={demoLink} className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-yellow-500 hover:text-slate-900 transition-all">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/></svg>
        </a>
        <button className='text-xs font-black text-text/50 uppercase tracking-widest px-4 py-2 rounded-full bg-card hover:bg-yellow-500 hover:text-slate-900 transition-all cursor-pointer'>Built in {duration} days</button>
      </div>
    </div>
  );
};

export default ProjectCard;
