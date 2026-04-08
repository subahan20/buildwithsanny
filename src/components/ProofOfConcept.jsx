import React from 'react';
import Button from './ui/Button';

const ProofOfConcept = () => {
  return (
    <section id="poc" className="bg-bg relative overflow-hidden transition-all duration-500">
      <div className="absolute inset-0 bg-dot-grid opacity-[0.1]"></div>
      
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-2 md:mb-3 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-1">
            <div className="w-12 h-[2px] bg-yellow-400 rounded-full"></div>
            <span className="text-yellow-400 font-black uppercase tracking-[0.3em] text-[10px]">Showcase</span>
          </div>
          <h2 className="text-3xl md:text-6xl lg:text-7xl font-black text-text tracking-tighter leading-none mb-2 transition-colors">
            Our Proof of <span className="text-yellow-400 italic">Concept</span>
          </h2>
          <p className="text-text/60 text-base md:text-xl font-bold leading-relaxed transition-colors">
            High-impact AI deployments including scalable data annotation pipelines and precision computer vision systems.
          </p>
        </div>

        {/* Device Frame (The Reproduced Zastra Layout) */}
        <div className="relative group max-w-7xl mx-auto mb-10 md:mb-12">
          <div className="bg-card backdrop-blur-xl rounded-[2.5rem] p-6 md:p-10 shadow-2xl shadow-yellow-950/20 overflow-hidden border border-border transition-transform duration-700 hover:scale-[1.005]">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
              
              {/* Left Column: The Visual (Annotation) */}
              <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-border bg-bg">
                <img 
                  src="/poc/zastra_repro.png" 
                  alt="Computer Vision Annotation Pipeline" 
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                />
              </div>

              {/* Right Column: The Content */}
              <div className="lg:col-span-7 flex flex-col justify-start text-left space-y-6 py-4">
                <h2 className="text-2xl md:text-4xl font-black text-text leading-tight tracking-tight">
                  How to Build a Scalable Data Annotation Pipeline with <span className="text-yellow-400">Zastra™</span>
                </h2>

                <div className="space-y-4">
                  <h3 className="text-yellow-500 font-black uppercase tracking-widest text-sm">Abstract</h3>
                  <p className="text-text/80 text-base md:text-lg leading-relaxed font-medium">
                    Poorly processed data is cited as one of the major reasons that machine learning projects fail. 
                    Your training dataset's construction, formatting, and annotation all directly affect the model you develop. 
                    When trying to scale annotation pipelines, enterprises face substantial challenges. 
                    Read this white paper on how an active learning-based, end-to-end data curation and 
                    annotation platform - <span className="text-yellow-400 font-bold">Zastra™</span> - can address these challenges.
                  </p>
                </div>
              </div>

            </div>

          </div>
          
          {/* Subtle Outer Glow to highlight it as a device */}
          <div className="absolute -inset-10 bg-yellow-500/5 blur-[100px] rounded-full pointer-events-none -z-10 group-hover:bg-purple-500/10 transition-colors duration-1000"></div>
        </div>

        {/* Section Bottom CTA */}
        <div className="flex justify-center">
          <Button 
            variant="yellow" 
            className="px-12 py-4 shadow-xl shadow-yellow-500/20"
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
