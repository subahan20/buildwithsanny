import React, { useState, useEffect } from 'react';
import Button from './ui/Button';
import heroGraphic from '../assets/hero-graphic.png';

// Flag Assets
import inFlag from '../assets/flags/in.png';
import usFlag from '../assets/flags/us.png';
import gbFlag from '../assets/flags/uk.png';
import chFlag from '../assets/flags/ch.png';
import caFlag from '../assets/flags/ca.png';
import auFlag from '../assets/flags/au.png';

const HeroForm = () => {
  const [techIndex, setTechIndex] = useState(0);

  const techPairs = [
    { h1: "Web &", h2: "Mobile" },
    { h1: "React &", h2: "Next.js" },
    { h1: "Native &", h2: "Flutter" },
    { h1: "AI &", h2: "Agents" },
    { h1: "SaaS &", h2: "Cloud" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTechIndex((prev) => (prev + 1) % techPairs.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const countries = [
    { name: "India", flag: inFlag },
    { name: "USA", flag: usFlag },
    { name: "UK", flag: gbFlag },
    { name: "Switzerland", flag: chFlag },
    { name: "Canada", flag: caFlag },
    { name: "Australia", flag: auFlag }
  ];

  const content = {
    bio: "Build with Sanny. I bridge the gap between human imagination and artificial intelligence. I am AI Solution architect and provide future for the business, engineering intelligent systems that redefine how businesses scale and innovate.",
    features: [
      { icon: "⚡", text: "From MVP -> Scale -> Automation" },
      { 
        icon: "🌐", 
        text: (
          <div className="flex flex-col gap-2">
            <span className="block opacity-90">Worked with clients across</span>
            <div className="flex flex-wrap items-center gap-2 mt-1">
              {countries.map((c, i) => (
                <div key={i} className="group/flag relative">
                  <img 
                    src={c.flag} 
                    alt={c.name} 
                    className="h-5 w-auto rounded-sm shadow-sm border border-white/10 hover:scale-125 hover:border-yellow-500/50 transition-all duration-300 cursor-help"
                    title={c.name}
                  />
                </div>
              ))}
            </div>
          </div>
        )
      }
    ],
    ctaHint: "GET YOUR PRODUCT BUILT FASTER"
  };

  const { bio, features, ctaHint } = content ?? {};

  return (
    <section id="hero" className="bg-[#020617] min-h-[70vh] flex items-center justify-center pt-20 sm:pt-16 pb-5 md:pt-25 relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-grid opacity-[0.1]"></div>
      
      {/* Cinematic Blooms */}
      <div className="absolute top-20 -left-10 w-[600px] h-[600px] bg-yellow-500/5 rounded-full filter blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-20 -right-10 w-[600px] h-[600px] bg-orange-500/5 rounded-full filter blur-[120px] animate-pulse delay-700"></div>

      <div className="w-full max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        <div className="space-y-6 animate-in fade-in slide-in-from-left-12 duration-1000">
          
          {/* Main Heading Group */}
          <div className="space-y-4">

            <h1 className="text-4xl md:text-7xl font-black text-white leading-[0.95] tracking-tight">
              <span className="block text-slate-300 text-3xl md:text-5xl mb-1 font-extrabold italic tracking-normal">Building Scalable</span>
              <div className="relative h-[1.4em] md:h-[1.2em] overflow-hidden my-2 py-2">
                <span 
                  key={techIndex} 
                  className="absolute inset-0 flex flex-wrap items-center animate-in fade-in slide-in-from-bottom-8 duration-700 transition-all ease-out"
                >
                  <span className="text-yellow-400">{techPairs[techIndex].h1}</span>
                  <span className="mx-2 md:mx-4 text-slate-800 font-thin">|</span>
                  <span className="text-orange-400">{techPairs[techIndex].h2}</span> 
                </span>
              </div>
              <span className="block text-slate-300 text-2xl md:text-4xl mt-2 font-extrabold tracking-tight">Solutions for 10+ Years</span>
            </h1>
          </div>
 
          {/* Bio & Features */}
          <div className="space-y-6">
            <p className="text-slate-200 text-lg md:text-xl font-bold leading-relaxed max-w-xl border-l-2 border-slate-800 pl-8">
              {bio}
            </p>
 
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
              {features?.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-slate-900/50 border border-slate-800 shadow-sm group-hover:bg-yellow-500/10 group-hover:border-yellow-500/50 group-hover:scale-110 transition-all duration-500">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <p className="text-slate-200 font-bold tracking-tight text-sm">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-6">
              <Button 
                variant="yellow"
                className="px-12 py-5 shadow-2xl shadow-yellow-500/20 hover:scale-[1.02] active:scale-95 transition-all text-xs tracking-widest uppercase"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                DISCOVER OUR WORK
              </Button>
              <Button  
                variant="outline"
                className="px-12 py-5 border-slate-800 text-slate-300 hover:bg-white/5 hover:border-slate-700 shadow-sm text-xs tracking-widest uppercase"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                CONTACT US
              </Button>
            </div>
          </div>
        </div>

        <div className="relative animate-in fade-in slide-in-from-right-12 duration-1000 hidden lg:block">
          <div className="relative z-10 p-3 border border-white/5 rounded-[4rem] bg-white/5 backdrop-blur-3xl shadow-2xl overflow-hidden group">
            <div className="aspect-square rounded-[3.5rem] overflow-hidden relative">
              <img 
                src={heroGraphic} 
                alt="Modern Networking Graphic" 
                className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-1000 brightness-90 grayscale-[0.2]"
              />
              <div className="absolute bottom-12 right-12 flex items-center gap-4 bg-slate-900/95 backdrop-blur-md p-6 rounded-[2.5rem] shadow-2xl border border-white/10">
                <div className="w-14 h-14 flex items-center justify-center bg-yellow-500/10 text-yellow-400 rounded-full animate-bounce">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/></svg>
                </div>
                <div>
                  <p className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] leading-none mb-2">Performance</p>
                  <p className="text-3xl font-black text-white leading-none tracking-tighter">99.9%</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -top-20 -right-20 w-80 h-80 bg-orange-500/5 blur-[120px] rounded-full -z-10 animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-yellow-500/5 blur-[120px] rounded-full -z-10 animate-pulse delay-1000"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroForm;
