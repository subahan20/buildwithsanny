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
  const getCurrentMonthYear = () => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const d = new Date();
    return `${months[d.getMonth()]} ${d.getFullYear()}`;
  };

  const dynamicDate = getCurrentMonthYear();

  return (
    <section id="stats" className="py-2 md:py-3 bg-bg relative overflow-hidden transition-all duration-500">
      <div className="absolute inset-0 bg-dot-grid opacity-[0.05] dark:opacity-[0.15]"></div>
      
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20 relative z-10">
        {/* Section Header */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-text tracking-[0.1em] md:tracking-[0.2em] uppercase leading-none transition-all duration-500">
            Impact Numbers
          </h2>
          <div className="w-16 md:w-24 h-1.5 md:h-2 bg-yellow-500 rounded-full mt-2 md:mt-3"></div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 max-w-6xl mx-auto">
          {SOCIAL_METRICS.map((metric, idx) => (
            <div 
              key={idx} 
              className="relative overflow-hidden p-6 md:p-8 rounded-[2rem] min-h-[260px] md:min-h-[300px] flex flex-col justify-between transition-all duration-700 group cursor-default bg-card border border-border hover:border-yellow-500 hover:shadow-2xl"
            >
              {/* Image Background (Subtle by default, full on hover) */}
              <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-80 transition-opacity duration-700">
                <img 
                  src={metric.image} 
                  alt={metric.label} 
                  className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/50 to-transparent"></div>
              </div>

              {/* Card Label & Arrow */}
              <div className="relative z-10 flex justify-between items-start">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-text/60 group-hover:text-text transition-colors duration-500">
                  {metric.label}
                </span>
                <span className="text-2xl transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500 font-black text-yellow-600 dark:text-yellow-600 group-hover:text-slate-900 dark:group-hover:text-white">
                  {metric.icon}
                </span>
              </div>

              {/* Large Value */}
              <div className="relative z-10">
                <p className="text-5xl md:text-6xl font-black tracking-tighter leading-none text-text group-hover:text-slate-900 transition-colors duration-700">
                  {metric.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Section Bottom CTA */}
        <div className="flex justify-center mt-5">
          <Button 
            variant="yellow" 
            className="px-12 py-4 shadow-xl shadow-yellow-500/20"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            LET'S SCOPE YOUR MVP
          </Button>
        </div>

      </div>
    </section>
  );
};

export default SocialProof;
