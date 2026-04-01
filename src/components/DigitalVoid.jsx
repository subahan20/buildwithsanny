import React from 'react';

const DigitalVoid = () => {
  return (
    <section className="py-2 md:py-5 bg-[#020617] relative overflow-hidden transition-all duration-500">
      <div className="absolute inset-0 bg-dot-grid opacity-[0.1]"></div>
      
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20 relative z-10 text-center animate-in fade-in slide-in-from-bottom-12 duration-1000">
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tighter mb-6 leading-tight max-w-4xl mx-auto">
          Architecting the <span className="text-yellow-400 italic">Digital Void</span>
        </h2>
        
        <p className="text-slate-400 text-lg md:text-xl font-bold tracking-tight max-w-2xl mx-auto leading-relaxed">
          A premium developer portfolio showcasing high-end visual systems and precision engineering.
        </p>

        {/* Decorative subtle pulse line */}
        <div className="mt-6 flex justify-center">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default DigitalVoid;
