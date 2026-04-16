import React from 'react';

const DigitalVoid = () => {
  return (
    <section className="py-8 px-4 md:px-8 bg-bg relative overflow-hidden transition-all duration-500">
      <div className="absolute inset-0 bg-dot-grid opacity-[0.1]"></div>
      
      <div className="max-w-[1440px] mx-auto relative z-10 text-center animate-in fade-in slide-in-from-bottom-12 duration-1000">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-text tracking-tight mb-12 leading-none max-w-5xl mx-auto transition-all">
          Let's build your idea - <span className="text-yellow-500 italic">the right way</span>
        </h2>
        
        <p className="text-text/70 text-sm sm:text-base md:text-lg font-bold tracking-tight max-w-3xl mx-auto leading-relaxed">
          Tell me what you are building, where you are stuck, and where you want to achieve. I will help you turn it into a real product.
        </p>
      </div>
    </section>
  );
};

export default DigitalVoid;
