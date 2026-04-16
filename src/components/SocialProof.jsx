import React from 'react';
import Button from './ui/Button';

const SOCIAL_METRICS = [
  { 
    label: "Projects Delivered", 
    value: "20+", 
    icon: "↗", 
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    label: "AI Solutions Built", 
    value: "12+", 
    icon: "↗", 
    image: "https://images.unsplash.com/photo-1675271591211-126ad94e495d?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    label: "Client Retention", 
    value: "90%", 
    icon: "↗", 
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    label: "Industries Served", 
    value: "5+", 
    icon: "↗", 
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" 
  }
];

const SocialProof = () => {
  return (
    <section 
      id="stats" 
      className="py-4 md:py-8 px-4 md:px-8 bg-bg relative overflow-hidden transition-all duration-500"
    >
      <div className="absolute inset-0 bg-dot-grid opacity-[0.05] dark:opacity-[0.15]"></div>
      
      <div className="max-w-[1440px] mx-auto md:px-12 lg:px-20 relative z-10">
        
        {/* --- DESKTOP VIEW --- */}
        <div className="hidden md:block">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-text tracking-tight uppercase leading-none transition-all duration-500">
              Impact <span className="text-yellow-500">Numbers</span>
            </h2>
            <div className="w-16 md:w-24 h-1.5 md:h-1.5 bg-yellow-500 rounded-full mt-1.5 md:mt-2"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 max-w-6xl mx-auto">
            {SOCIAL_METRICS.map((metric, idx) => (
              <div 
                key={idx} 
                className="relative overflow-hidden p-4 md:p-6 rounded-[2rem] min-h-[200px] md:min-h-[220px] flex flex-col justify-between transition-all duration-700 group cursor-default bg-card border border-border hover:border-yellow-500 hover:shadow-2xl"
              >
                <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-80 transition-opacity duration-700">
                  <img 
                    src={metric.image} 
                    alt={metric.label} 
                    className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/50 to-transparent"></div>
                </div>

                <div className="relative z-10 flex justify-between items-start">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-text/60 group-hover:text-text transition-colors duration-500">
                    {metric.label}
                  </span>
                  <span className="text-2xl transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500 font-black text-yellow-600">
                    {metric.icon}
                  </span>
                </div>

                <div className="relative z-10">
                  <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none text-text group-hover:text-white transition-colors duration-700">
                    {metric.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button 
              variant="yellow" 
              className="px-12 py-4 shadow-xl shadow-yellow-500/20 text-[10px] sm:text-xs md:text-sm font-black tracking-widest uppercase"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              LET'S SCOPE YOUR MVP
            </Button>
          </div>
        </div>

        {/* --- MOBILE VIEW (Exact Design Recreated) --- */}
        <div className="block md:hidden">
          <div className="mb-4 pl-1">
            <h2 className="text-[26px] font-black tracking-tight leading-none mb-2">
              <span className="text-white">IMPACT</span> <span className="text-yellow-500">NUMBERS</span>
            </h2>
            <div className="w-16 h-[2px] bg-yellow-500"></div>
          </div>

          <p className="text-[10px] text-text/60 leading-relaxed max-w-[240px] mb-6 pl-1 uppercase font-bold tracking-tight">
            Strategic execution meets architectural precision. Our track record in building the future of venture.
          </p>

          <div className="flex flex-col gap-3">
            {SOCIAL_METRICS.map((metric, idx) => (
              <div 
                key={idx} 
                className="relative overflow-hidden p-4 rounded-2xl min-h-[120px] flex flex-col justify-between bg-card border border-white/5 active:scale-[0.98] transition-all"
              >
                {/* Image Background */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img 
                    src={metric.image} 
                    alt={metric.label} 
                    className="w-full h-full object-cover opacity-20 filter grayscale brightness-50"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/80 to-transparent"></div>
                </div>

                <div className="relative z-10 flex justify-between items-start">
                  <span className="text-[7px] font-black uppercase tracking-[0.2em] text-white/50">
                    {metric.label}
                  </span>
                  <span className="text-sm font-black text-yellow-500">
                    {metric.icon}
                  </span>
                </div>

                <div className="relative z-10">
                  <p className="text-[42px] font-black tracking-tighter leading-none text-white font-inter">
                    {metric.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center mt-8 gap-3">
            <span className="text-[7px] font-black text-white/40 tracking-[0.2em] uppercase">
              Ready to scale your impact?
            </span>
            <Button 
              variant="yellow" 
              className="w-full py-4 rounded-[32px] text-[10px] shadow-none uppercase font-black tracking-widest"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              LET'S SCOPE YOUR MVP
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SocialProof;
