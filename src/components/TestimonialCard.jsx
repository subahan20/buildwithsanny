import React from 'react';

const TestimonialCard = ({ text, author, role, avatar }) => {
  return (
    <div className="shrink-0 w-[420px] md:w-[480px] group px-4 h-full cursor-pointer">
      {/* Main Card Bubble */}
      <div className="bg-card backdrop-blur-xl p-5 md:p-6 rounded-[1.5rem] md:rounded-[2rem] relative border border-border transition-all duration-500 group-hover:border-yellow-500/50 group-hover:shadow-2xl group-hover:shadow-yellow-500/5 h-full flex flex-col justify-between overflow-hidden">
        
        {/* Quote Content */}
        <div className="relative z-10">
          <div className="text-yellow-500/20 text-5xl font-serif absolute -top-4 -left-2 select-none">“</div>
          <div className="text-text/90 text-sm md:text-base leading-relaxed font-bold italic opacity-95 relative z-10 pl-2">
            {text}
          </div>
        </div>

        {/* Footer with integrated Avatar */}
        <div className="flex items-center gap-4 pt-4 mt-4 border-t border-border/50">
          {/* Avatar Inside Card */}
          <div className="flex-shrink-0">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-border shadow-md transition-transform duration-500 group-hover:scale-110">
              <img 
                src={avatar} 
                alt={author} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(author)}&background=random&color=fff&size=200`;
                }}
              />
            </div>
          </div>

          <div className="flex flex-col">
            <span className="font-black text-text text-[12px] md:text-[13px] uppercase tracking-tight leading-none mb-1">
              {author}
            </span>
            <span className="text-text/60 text-[10px] md:text-[11px] font-bold uppercase tracking-wider leading-none">
              {role}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;




