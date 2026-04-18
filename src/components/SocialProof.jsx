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
      className="py-[2px] px-4 md:px-4 bg-bg relative overflow-hidden transition-all duration-500"
    >
      <div className="absolute inset-0 bg-dot-grid opacity-[0.05] dark:opacity-[0.15]"></div>
      
      <div className="max-w-[1440px] mx-auto md:px-4  relative z-10">
        
        {/* --- DESKTOP VIEW --- */}
        <div className="hidden md:block">
          <div className="mb-12 text-center">
            <h2 className="text-[27px] md:text-[45px] lg:text-[60px] font-black text-text tracking-tighter leading-none transition-all duration-500">
              Impact <span className="text-yellow-500 italic">Numbers</span>
            </h2>
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

          <div className="flex justify-center mt-8">
            <Button 
              variant="yellow" 
              className="w-[260px] h-14 rounded-full shadow-xl shadow-yellow-500/20 text-[14px] md:text-[14px] font-black tracking-[0.2em] uppercase"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              LET'S SCOPE YOUR MVP
            </Button>
          </div>
        </div>

        {/* --- MOBILE VIEW (Exact Design Recreated) --- */}
        <div className="block md:hidden">
          <div className="mb-4 mt-4 text-center">
            <h2 className="text-[27px] font-black tracking-tight leading-none mb-2 text-text">
              IMPACT <span className="text-yellow-500 italic">NUMBERS</span>
            </h2>
          </div>

          <p className="text-text/50 text-[15px] md:text-[17px] xl:text-[21px] font-bold leading-relaxed mb-8 transition-colors text-center mx-auto max-w-2xl">
            Strategic execution meets architectural precision. Our track record in building the future of venture.
          </p>

          <div className="flex flex-col gap-3">
            {SOCIAL_METRICS.map((metric, idx) => (
              <div 
                key={idx} 
                className="relative overflow-hidden p-6 rounded-2xl min-h-[160px] flex flex-col items-center justify-center text-center bg-card border border-white/5 active:scale-[0.98] transition-all"
              >
                {/* Image Background */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img 
                    src={metric.image} 
                    alt={metric.label} 
                    className="w-full h-full object-cover opacity-[0.15] filter grayscale brightness-50"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg/40 to-bg"></div>
                </div>

                <div className="relative z-10 mb-2">
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-text/40">
                    {metric.label}
                  </span>
                </div>

                <div className="relative z-10">
                  <p className="text-[72px] font-black tracking-tighter leading-none text-text">
                    {metric.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center mt-8 gap-3">
            <span className="text-[9px] font-black text-text/40 tracking-[0.2em] uppercase">
              Ready to scale your impact?
            </span>
            <Button 
              variant="yellow" 
              className="w-[280px] h-14 rounded-full text-[14px] md:text-[14px] shadow-none uppercase font-black tracking-[0.2em]"
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
