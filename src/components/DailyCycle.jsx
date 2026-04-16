import React from 'react';
import Button from './ui/Button';

const DailyCycle = () => {
  const steps = [
    {
      id: "1",
      title: "Identify",
      description: "Every project starts with clarity. We start by understanding how your team actually works-where time is being lost, what slows things down, and why work piles up. From there, we find the 5% of opportunities worth building.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-24 h-24 text-yellow-600 opacity-10 group-hover:opacity-30 transition-opacity duration-700" fill="none" stroke="currentColor" strokeWidth="1">
          <circle cx="12" cy="12" r="6" />
          <path d="M12 6v12M6 12h12M8.5 8.5l7 7m0-7l-7 7" />
        </svg>
      ),
      margin: "ml-0"
    },
    {
      id: "2",
      title: "Develop",
      description: "Once we know what matters, we move quickly and get to the building. Our team plans and develops solutions that fit seamlessly into your existing systems-built the right way, so they work exactly as they should from day one.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-24 h-24 text-yellow-600 opacity-10 group-hover:opacity-30 transition-opacity duration-700" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
      margin: "ml-[15%]"
    },
    {
      id: "3",
      title: "Adopt",
      description: "Then we make it real. We work side by side with your teams-training, fine-tuning, and helping them integrate your new systems into their everyday work. By the time we step back, it's not a project anymore-it's just how work gets done.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-24 h-24 text-yellow-600 opacity-10 group-hover:opacity-30 transition-opacity duration-700" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M12 3L2 20h20L12 3z" />
          <path d="M12 8l4 6H8l4-6z" />
        </svg>
      ),
      margin: "ml-[30%]"
    }
  ];

  return (
    <section className="py-8 px-4 md:px-8 bg-bg relative overflow-hidden transition-colors duration-500">
      <div className="absolute inset-0 bg-dot-grid opacity-[0.05] dark:opacity-[0.1]"></div>
      
      {/* Soft Ethereal Blooms */}
      <div className="absolute top-0 left-0 w-[1000px] h-[1000px] bg-yellow-500/5 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-orange-500/5 blur-[150px] rounded-full translate-x-1/4 translate-y-1/4"></div>
      
      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none mb-2 text-text transition-colors">
            Our days consist of three things...
          </h2>
        </div>

        {/* Shifting Step Cards */}
        <div className="max-w-6xl space-y-6">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col lg:flex-row items-center gap-6 group transition-all duration-700 lg:${step.margin}`}
            >
              {/* Giant Index Number - Hidden on mobile, visible from LG up */}
              <span className="hidden lg:block text-9xl md:text-[12rem] font-medium leading-none text-transparent bg-clip-text bg-gradient-to-b from-yellow-500/40 dark:from-yellow-400/60 to-orange-500/10 dark:to-orange-400/20 tracking-tighter opacity-70 group-hover:opacity-100 transition-opacity duration-700 select-none shrink-0">
                {step.id}
              </span>
              
              <div className="flex-1 bg-card backdrop-blur-xl border border-border rounded-[2.5rem] p-4 md:p-6 shadow-2xl shadow-yellow-950/20 max-w-2xl relative overflow-hidden transition-all hover:-translate-y-2 group-hover:border-yellow-500/30">
                <div className="absolute top-10 right-10">
                  {step.icon}
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-text mb-1.5 tracking-tight group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-text/70 text-sm sm:text-base md:text-lg font-bold leading-relaxed max-w-md transition-colors">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Final Action */}
        <div className="mt-12 flex flex-col items-center">
          <Button 
            variant="yellow" 
            className="px-12 md:px-16 py-4 md:py-5 shadow-xl shadow-yellow-500/20 text-[10px] sm:text-xs md:text-sm font-black tracking-widest uppercase"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            CONTACT US
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DailyCycle;
