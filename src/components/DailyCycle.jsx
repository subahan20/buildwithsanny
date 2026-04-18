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
    <section className="py-4 px-4 md:px-4 bg-bg relative overflow-hidden transition-colors duration-500">
      <div className="absolute inset-0 bg-dot-grid opacity-[0.03]"></div>
      
      {/* Soft Ethereal Blooms */}
      <div className="absolute top-0 left-0 w-[1000px] h-[1000px] bg-yellow-500/5 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-orange-500/5 blur-[150px] rounded-full translate-x-1/4 translate-y-1/4"></div>
      
      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="text-center mb-8">
          <h3 className="text-[10px] md:text-[15px] font-black uppercase tracking-[0.4em] text-yellow-500 mb-2">// CYCLE</h3>
          <h2 className="text-[27px] md:text-[45px] lg:text-[60px] font-black text-text tracking-tighter leading-[1.1] transition-colors">
            Our days consist of <span className="text-yellow-500 italic">three things...</span>
          </h2>
        </div>

        <div className="max-w-[1440px] grid grid-cols-1 lg:grid-cols-3 gap-5 mx-auto">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className="group transition-all duration-700 flex w-full"
            >
              <div className="w-full flex-1 bg-card border border-border/10 rounded-[2.5rem] p-6 md:p-10 shadow-2xl relative overflow-hidden transition-all hover:-translate-y-2 group-hover:border-yellow-500/20 flex flex-col justify-start">
                <div className="absolute top-10 right-10 opacity-10 group-hover:opacity-30 transition-opacity duration-700">
                  {step.icon}
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl sm:text-3xl md:text-[30px] lg:text-[35px] xl:text-[40px] font-black text-text mb-3 tracking-tighter transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-text/50 text-[15px] md:text-sm xl:text-[18px] font-bold leading-relaxed transition-colors">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Final Action */}
        <div className="mt-8 mb-0 flex flex-col items-center">
          <Button 
            variant="yellow" 
            className="w-[260px] h-14 rounded-full shadow-2xl shadow-yellow-500/30 text-[14px] md:text-[14px] font-black tracking-[0.2em] uppercase transition-transform hover:scale-[1.03]"
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
