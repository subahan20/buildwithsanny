import React from 'react';

const TechCard = ({ name, icon, color }) => {
  // Use destructuring and nullish coalescing
  const displayName = name ?? 'Technology';
  const iconColor = color ?? 'currentColor';

  return (
    <div className="flex items-center gap-4 bg-slate-900/40 backdrop-blur-xl px-6 py-4 rounded-2xl border border-white/5 shadow-2xl hover:shadow-yellow-500/10 hover:border-yellow-500/50 transition-all duration-500 group shrink-0 mx-4">
      <div 
        className="w-10 h-10 flex items-center justify-center rounded-lg transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundColor: `${iconColor}15` }}
      >
        {icon ? (
          <span className="text-2xl" aria-hidden="true">{icon}</span>
        ) : (
          <div className="w-6 h-6 rounded-sm bg-slate-100 animate-pulse" />
        )}
      </div>
      <span className="text-lg font-black text-white tracking-tight whitespace-nowrap">
        {displayName}
      </span>
    </div>
  );
};

export default TechCard;
