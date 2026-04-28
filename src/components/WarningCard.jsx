import React from 'react';

const WarningCard = () => {
  return (
    <div className="bg-card border border-yellow-500/10 rounded-2xl p-4 md:p-5 shadow-2xl relative overflow-hidden transition-all duration-300">
      {/* Subtle background glow */}
      <div className="absolute -top-12 -right-12 w-24 h-24 bg-yellow-500/5 blur-3xl rounded-full"></div>
      
      <div className="flex flex-col space-y-3 relative z-10 text-left">
        
        {/* Top Warning Row */}
        <div className="flex items-start gap-3">
          <div className="shrink-0 mt-1">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="3" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="w-5 h-5 md:w-5 md:h-5 text-yellow-500"
            >
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
          </div>
          <p className="text-[17px] md:text-lg font-black text-text leading-tight">
            This is not for students, job seekers, or learners.
          </p>
        </div>

        {/* Requirements List with Bullets */}
        <div className="flex flex-col space-y-2">
          <p className="text-[11px] md:text-[10px] font-black text-text/30 uppercase tracking-[0.2em] px-1">
            We only work with:
          </p>
          <ul className="space-y-1.5 px-1">
            {[
              "Business owners or founders",
              "People with clear use cases and minimum budget",
              "Minimum budget: $5000"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-[14px] md:text-[13px] text-text/60 font-bold leading-snug">
                <span className="text-yellow-500 mt-0.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Highlight Message */}
        <div className="pt-3 border-t border-border/10 mt-1">
          <p className="text-[16px] md:text-base font-bold text-red-600 leading-relaxed">
            If you are looking to learn AI or development, this form is not for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WarningCard;
