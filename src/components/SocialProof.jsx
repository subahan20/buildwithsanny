import React from 'react';
import Button from './ui/Button';

const SOCIAL_METRICS = [
  { 
    label: "Projects Delivered", 
    value: "50+", 
    icon: "↗", 
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    label: "AI Solutions Built", 
    value: "35+", 
    icon: "↗", 
    image: "https://images.unsplash.com/photo-1675271591211-126ad94e495d?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    label: "Client Retention", 
    value: "95%", 
    icon: "↗", 
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    label: "Industries Served", 
    value: "8+", 
    icon: "↗", 
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" 
  }
];

const SocialProof = () => {
  return (
    <section id="stats" className="py-5 md:py-1 bg-[#020617] relative overflow-hidden transition-all duration-500">
      <div className="absolute inset-0 bg-dot-grid opacity-[0.15]"></div>
      
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20 relative z-10">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-none transition-all duration-500">
            Impact in Numbers
          </h2>
          <div className="w-24 h-2 bg-yellow-500 rounded-full mt-6"></div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {SOCIAL_METRICS.map((metric, idx) => (
            <div 
              key={idx} 
              className="relative overflow-hidden p-10 rounded-[2rem] min-h-[320px] flex flex-col justify-between transition-all duration-700 group cursor-default bg-slate-900/40 border border-white/5 hover:border-yellow-500"
            >
              {/* Image Background (Subtle by default, full on hover) */}
              <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-80 transition-opacity duration-700">
                <img 
                  src={metric.image} 
                  alt={metric.label} 
                  className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
              </div>

              {/* Card Label & Arrow */}
              <div className="relative z-10 flex justify-between items-start">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-200 group-hover:text-white transition-colors duration-500">
                  {metric.label}
                </span>
                <span className="text-2xl transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500 font-black text-yellow-600 group-hover:text-white">
                  {metric.icon}
                </span>
              </div>

              {/* Large Value */}
              <div className="relative z-10">
                <p className="text-7xl font-black tracking-tighter leading-none text-white transition-colors duration-700">
                  {metric.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Section Bottom CTA */}
        <div className="flex justify-center mt-12">
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

export default SocialProof;
