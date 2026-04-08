import React from 'react';

const DigitalVoid = () => {
  return (
    <section className="py-2 md:py-3 bg-bg relative overflow-hidden transition-all duration-500">
      <div className="absolute inset-0 bg-dot-grid opacity-[0.1]"></div>
      
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20 relative z-10 text-center animate-in fade-in slide-in-from-bottom-12 duration-1000">
        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-text tracking-tighter mb-6 md:mb-8 leading-tight max-w-5xl mx-auto transition-all">
          Let's build your idea - <span className="text-yellow-500 italic">the right way</span>
        </h2>
        
        <p className="text-text/70 text-base md:text-xl font-bold tracking-tight max-w-3xl mx-auto leading-relaxed">
          Tell me what you are building, where you are stuck, and where you want to achieve. I will help you turn it into a real product.
        </p>
      </div>
    </section>
  );
};

export default DigitalVoid;
