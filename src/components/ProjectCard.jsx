import React from 'react';

const ProjectCard = ({ name, type, duration, description, logo, demoLink = "#", codeLink = "#" }) => {
  return (
    <div className="bg-slate-900/40 p-10 rounded-[2.5rem] border border-white/5 hover:bg-slate-900/60 hover:border-yellow-500 hover:shadow-2xl hover:shadow-yellow-500/10 transition-all duration-500 flex flex-col group cursor-pointer h-full relative overflow-hidden">
      {/* Top Section: Title & Logo */}
      <div className="flex justify-between items-start mb-6">
        <div className="space-y-3">
          <h3 className="text-3xl font-black text-yellow-500 tracking-tighter leading-none group-hover:text-yellow-400 transition-colors">
            {name}
          </h3>
          
          {/* Metadata Row */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-1.5 text-[10px] font-black text-slate-300 uppercase tracking-widest">
              <span className="w-3.5 h-3.5 flex items-center justify-center bg-slate-100 text-slate-600 rounded-sm">💼</span>
              {type}
            </div>
            {duration && (
              <div className="flex items-center gap-1.5 text-[10px] font-black text-slate-300 uppercase tracking-widest">
                <span className="w-3.5 h-3.5 flex items-center justify-center bg-slate-100 text-slate-600 rounded-sm">📅</span>
                {duration}
              </div>
            )}
          </div>
        </div>

        {/* Project Logo Square */}
        <div className={`w-14 h-14 rounded-xl flex items-center justify-center overflow-hidden transition-all duration-500 shadow-sm border border-yellow-500/20 group-hover:scale-110 ${
          typeof logo === 'string' && logo.length <= 4 
            ? 'bg-yellow-500/10 text-xl group-hover:bg-yellow-500 group-hover:text-slate-900' 
            : 'bg-white p-2'
        }`}>
          {typeof logo === 'string' && logo.length <= 4 ? (
            logo || "🚀"
          ) : (
            <img src={logo} alt={name} className="w-full h-full object-contain" />
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-base font-bold text-slate-100 leading-relaxed mb-10 flex-1 opacity-95">
        {description}
      </p>

      {/* Bottom Action Buttons */}
      <div className="flex items-center gap-3 mt-auto">
        <a href={demoLink} className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-yellow-500 hover:text-slate-900 transition-all">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/></svg>
        </a>
        <a href={codeLink} className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-slate-700 hover:text-white transition-all">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.341-3.369-1.341-.454-1.152-1.11-1.459-1.11-1.459-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75.1 .797-.221 1.652-.332 2.5-.336.848.004 1.703.115 2.5.336 1.91-1.369 2.75-1.1 2.75-1.1.544 1.377.201 2.394.099 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z"/></svg>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
