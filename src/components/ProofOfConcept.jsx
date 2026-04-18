import React from 'react';
import Button from './ui/Button';

const ProofOfConcept = () => {
  return (
    <section id="poc" className="py-4 px-4 md:px-4 bg-bg relative overflow-hidden transition-all duration-500">
      <div className="absolute inset-0 bg-dot-grid opacity-[0.1]"></div>
      
      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="w-10 h-[1.5px] bg-yellow-400 rounded-full"></div>
            <span className="text-yellow-400 font-bold uppercase tracking-[0.3em] text-[10px] md:text-[15px]">Case Study</span>
          </div>
          <h2 className="text-[27px] md:text-[45px] lg:text-[60px] font-black text-text tracking-tighter leading-[1.1] mb-4 transition-colors">
            Our Proof of <span className="text-yellow-400 italic">Concept</span>
          </h2>
          <p className="text-text/50 text-[16px] md:text-[19px] lg:text-[21px] xl:text-[23px] font-bold leading-relaxed transition-colors">
            High-impact AI deployments including scalable data pipelines and precision computer vision.
          </p>
        </div>

        {/* Device Frame (The Reproduced Zastra Layout) */}
        <div className="relative group max-w-7xl mx-auto mb-4">
          <div className="bg-card backdrop-blur-xl rounded-[1.5rem] p-1.5 md:p-4.5 shadow-2xl shadow-yellow-950/20 overflow-hidden border border-border transition-transform duration-700 hover:scale-[1.005]">
            
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 lg:gap-16 items-center">
              
              {/* Left Column: The Visual (Annotation) - Reduced for better balance */}
              <div className="sm:col-span-5 relative rounded-2xl overflow-hidden border border-border bg-bg shadow-inner group/img flex items-center justify-center">
                <img 
                  src="/poc/zastra_repro.png" 
                  alt="Computer Vision Annotation Pipeline" 
                  className="w-full h-full max-h-[200px] md:max-h-[250px] lg:max-h-[300px] object-cover opacity-95 group-hover/img:scale-105 transition-all duration-700"
                />
              </div>
    
              {/* Right Column: The Content - Increased Typographic Presence */}
              <div className="sm:col-span-7 flex flex-col justify-center text-left space-y-2 py-0">
                <h2 className="text-[27px] lg:text-[60px] font-black text-text leading-[1.1] tracking-tighter">
                  How to Build a Scalable Data Annotation Pipeline with <span className="text-yellow-400">Zastra™</span>
                </h2>
    
                <div className="space-y-2">
                  <h3 className="text-yellow-500 text-[10px] md:text-xs font-black uppercase tracking-[0.4em] border-l-2 border-yellow-500 pl-4 py-1">Abstract</h3>
                  <p className="text-text/50 text-[13px] md:text-sm xl:text-[18px] leading-relaxed font-bold">
                    Poorly processed data is a major reason machine learning projects fail. 
                    Your dataset's construction and annotation directly affect the model you develop. 
                    When trying to scale pipelines, enterprises face substantial challenges. 
                    Read how our end-to-end data curation platform - <span className="text-yellow-400 font-bold">Zastra™</span> - addresses these challenges.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Subtle Outer Glow to highlight it as a device */}
          <div className="absolute -inset-10 bg-yellow-500/5 blur-[100px] rounded-full pointer-events-none -z-10 group-hover:bg-purple-500/10 transition-colors duration-1000"></div>
        </div>

        {/* Section Bottom CTA */}
        <div className="flex justify-center mt-2">
          <Button 
            variant="yellow" 
            className="w-[260px] h-14 rounded-full shadow-2xl shadow-yellow-500/30 text-[14px] md:text-[14px] font-black tracking-[0.2em] uppercase transition-transform hover:scale-[1.03]"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProofOfConcept;
