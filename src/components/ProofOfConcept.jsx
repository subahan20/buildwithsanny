import React from 'react';
import Button from './ui/Button';

const ProofOfConcept = () => {
  return (
    <section id="poc" className="py-2 md:py-5 bg-[#020617] relative overflow-hidden transition-all duration-500">
      <div className="absolute inset-0 bg-dot-grid opacity-[0.1]"></div>
      
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-[2px] bg-yellow-400 rounded-full"></div>
            <span className="text-yellow-400 font-black uppercase tracking-[0.3em] text-[10px]">Showcase</span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-none mb-6 transition-colors">
            Our Proof of <span className="text-yellow-400 italic">Concept</span>
          </h2>
          <p className="text-slate-400 text-xl font-bold leading-relaxed transition-colors">
            High-impact AI deployments that transformed internal operations and external outreach for our partners.
          </p>
        </div>

        {/* Device Frame (The Showcase) */}
        <div className="relative group max-w-6xl mx-auto mb-8">
          <div className="bg-slate-900/60 backdrop-blur-xl rounded-[2.5rem] p-4 md:p-12 shadow-2xl shadow-yellow-950/20 overflow-hidden border border-white/5 transition-transform duration-700 hover:scale-[1.01]">
            
            {/* Browser Controls (Dots) */}
            <div className="flex gap-2 mb-4 px-4 transition-opacity">
              <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
            </div>

            {/* Dashboard Visual Container */}
            <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-white/5">
              <img 
                src="/poc/poc_dash.png" 
                alt="AI Dashboard Showcase" 
                className="w-full h-auto object-cover transition-opacity duration-700 opacity-80 group-hover:opacity-100"
              />
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
            GET IN TOUCH
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProofOfConcept;
