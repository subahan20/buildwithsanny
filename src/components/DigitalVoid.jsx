import React from 'react';

const DigitalVoid = () => {
  return (
    <section className="py-4 px-4 md:px-4 bg-bg relative overflow-hidden transition-all duration-500">
      <div className="absolute inset-0 bg-dot-grid opacity-[0.03]"></div>
      
      <div className="max-w-[1440px] mx-auto px-4 md:px-4  relative z-10 flex flex-col items-center text-center">
        <div className="mb-4">
          <h3 className="text-[10px] md:text-[15px] font-black uppercase tracking-[0.4em] text-yellow-500 mb-2">Synthesis</h3>
          <h2 className="text-[27px] md:text-[45px] lg:text-[60px] font-black text-text tracking-tighter leading-[1.1] transition-colors">
            Let's build your <span className="text-yellow-500 italic">Idea.</span>
          </h2>
        </div>
        
        <p className="text-text/50 text-[13px] md:text-[16px] xl:text-[18px] font-bold leading-relaxed max-w-2xl transition-colors">
          Tell me what you are building, where you are stuck, and where you want to achieve. We provide the architectural synthesis required to turn abstract concepts into high-impact digital products.
        </p>
      </div>
    </section>
  );
};

export default DigitalVoid;
