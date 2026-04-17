import React from 'react';

const TechCard = ({ name, icon, color }) => {
  // Use destructuring and nullish coalescing
  const displayName = name ?? 'Technology';
  const iconColor = color ?? 'currentColor';

  return (
    <div className="flex items-center gap-3 bg-card backdrop-blur-xl px-6 py-4 rounded-[2.5rem] border border-border/50 shadow-2xl hover:border-yellow-500/30 transition-all duration-700 group shrink-0 mx-3">
      <div 
        className="w-10 h-10 flex items-center justify-center rounded-xl transition-transform duration-500 group-hover:scale-110"
      >
        {icon ? (
          <span className="shrink-0" aria-hidden="true">{icon}</span>
        ) : (
          <div className="w-6 h-6 rounded-sm bg-slate-800 animate-pulse" />
        )}
      </div>
      <span className="text-base md:text-lg font-black text-text tracking-tighter whitespace-nowrap opacity-90 group-hover:opacity-100 transition-opacity">
        {displayName}
      </span>
    </div>
  );
};

export default TechCard;
