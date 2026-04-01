import React from 'react';

const TestimonialCard = ({ text, author }) => {
  return (
    <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-primary-100/30 transition-all duration-500 relative group h-full flex flex-col">
      <div className="text-4xl text-primary-600/10 absolute top-6 left-6 font-serif">“</div>
      
      <div className="flex-1 relative pt-4">
        <p className="text-lg italic font-medium text-slate-600 leading-relaxed mb-8">
          {text}
        </p>
      </div>

      <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
        <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-black text-xs uppercase">
          {author.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-black text-slate-800 tracking-tight leading-none">
            Verified Client
          </p>
          <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-widest">
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
