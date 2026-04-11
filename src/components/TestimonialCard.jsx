import React from 'react';

const TestimonialCard = ({ text, author }) => {
  return (
    <div className="bg-card backdrop-blur-xl p-4 sm:p-6 rounded-[2.5rem] border border-border hover:shadow-2xl hover:shadow-yellow-500/10 transition-all duration-500 relative group h-full flex flex-col">
      <div className="text-4xl text-yellow-500/10 absolute top-4 left-6 font-serif select-none">“</div>
      
      <div className="flex-1 relative pt-2">
        <p className="text-sm sm:text-base italic font-bold text-text/80 leading-relaxed mb-4">
          {text}
        </p>
      </div>

      <div className="flex items-center gap-3 pt-3 border-t border-border/50">
        <div className="w-8 h-8 bg-yellow-500/10 rounded-full flex items-center justify-center text-yellow-500 font-black text-[10px] uppercase border border-yellow-500/20">
          {author.charAt(0)}
        </div>
        <div>
          <p className="text-[10px] font-black text-text tracking-tight leading-none uppercase">
            Verified Client
          </p>
          <p className="text-[9px] font-bold text-text/40 mt-0.5 uppercase tracking-widest">
            {author}
          </p>
        </div>
        <div className="ml-auto text-yellow-400 flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-[10px]">⭐</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
