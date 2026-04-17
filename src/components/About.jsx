import React from 'react';

const About = () => {
  return (
    <section className="py-24 bg-mesh-light relative overflow-hidden border-y border-slate-50">
      {/* Background patterns to cover space */}
      <div className="absolute inset-0 bg-dot-grid opacity-[0.2]"></div>
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-yellow-100/30 blur-[100px] rounded-full"></div>

      <div className="max-w-4xl mx-auto px-8 flex flex-col md:flex-row gap-16 items-center relative z-10 animate-in fade-in duration-1000">
        <div className="flex-shrink-0 relative group">
          <div className="w-48 h-48 rounded-[3.5rem] overflow-hidden border-8 border-white shadow-2xl rotate-3 group-hover:rotate-0 transition-transform duration-500">
            <img 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sanny" 
              alt="Sanny" 
              className="w-full h-full object-cover bg-yellow-50"
            />
          </div>
          {/* Decorative Bloom behind image */}
          <div className="absolute -inset-4 bg-yellow-400/10 blur-2xl rounded-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
        </div>
        
        <div className="flex-1 space-y-8 text-left">
          <div className="space-y-4">
            <span className="text-yellow-600 font-black uppercase tracking-[0.3em] text-[10px] md:text-[15px] bg-yellow-50 border border-yellow-100 px-3 py-1 rounded-full">About Me</span>
            <h2 className="text-[26px] md:text-[45px] xl:text-[60px] font-black text-slate-900 tracking-tighter leading-none">
              Hey, I'm Sanny 👋
            </h2>
          </div>
          <p className="text-xl font-medium text-slate-600 leading-relaxed">
            For the past 10 years, I’ve been building software products - not just coding, but solving real business problems.
          </p>
          <div className="space-y-4">
            <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">
              I’ve worked with startups, founders, and teams to:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-disc pl-5">
              {['Launch MVPs fast', 'Scale products', 'Automate operations'].map((item, idx) => (
                <li key={idx} className="text-slate-800 font-bold tracking-tight">{item}</li>
              ))}
            </ul>
          </div>
          <p className="text-2xl font-black text-yellow-600 leading-tight pt-8 border-t border-slate-100">
            "I don’t just write code - I think like a product builder."
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
