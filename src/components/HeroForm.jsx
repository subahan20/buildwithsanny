import React, { useState, useEffect } from 'react';
import Button from './ui/Button';
import heroGraphic from '../assets/hero-graphic.png';

// Flag Assets are now loaded via FlagCDN (SVGs for transparency)

const HeroForm = () => {
  const getCurrentMonthYear = () => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const d = new Date();
    return `${months[d.getMonth()]} ${d.getFullYear()}`;
  };

  const dynamicDate = getCurrentMonthYear();

  const countries = [
    { name: "India", flag: "https://flagcdn.com/in.svg" },
    { name: "USA", flag: "https://flagcdn.com/us.svg" },
    { name: "UK", flag: "https://flagcdn.com/gb.svg" },
    { name: "Switzerland", flag: "https://flagcdn.com/ch.svg" },
    { name: "Canada", flag: "https://flagcdn.com/ca.svg" },
    { name: "Australia", flag: "https://flagcdn.com/au.svg" }
  ];

  const content = {
    bio: "\"The Startup Builder Who Speaks and Builds Both AI and Code\" - I turn founder ideas into live products: SaaS, mobile, AI agents - shipped fast.",
    features: [
      { icon: "⚡", text: "From MVP -> Scale -> Automation" },
      { 
        icon: "🌐", 
        text: (
          <div className="flex flex-col gap-2">
            <span className="block opacity-90 ">Served clients in 10+ countries</span>
            <div className="flex items-center gap-1.5 overflow-visible">
              {countries.map((c, i) => (
                <div key={i} className="group/flag relative">
                  <div className="absolute inset-0 bg-yellow-500/10 blur-lg rounded-full opacity-0 group-hover/flag:opacity-100 transition-opacity duration-500"></div>
                  <div className="w-10 h-6 md:w-12 md:h-8 rounded-sm overflow-hidden relative z-10 border border-white/5 hover:scale-110 hover:-rotate-2 transition-all duration-500 cursor-help shadow-sm">
                    <img 
                      src={c.flag} 
                      alt={c.name} 
                      className="w-full h-full object-cover"
                      title={c.name}
                    />
                  </div>
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
    <section id="hero" className="bg-bg min-h-[60vh] md:min-h-[70vh] flex items-center justify-center pt-8 md:pt-5 pb-2 relative overflow-hidden transition-colors duration-500">
      <div className="absolute inset-0 bg-dot-grid opacity-[0.05] dark:opacity-[0.1]"></div>
      
      {/* Cinematic Blooms */}
      <div className="absolute top-20 -left-10 w-[600px] h-[600px] bg-yellow-500/5 dark:bg-yellow-500/[0.03] rounded-full filter blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-20 -right-10 w-[600px] h-[600px] bg-orange-500/5 dark:bg-orange-500/[0.03] rounded-full filter blur-[120px] animate-pulse delay-700"></div>

      <div className="w-full max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-30 items-center relative z-10">
        <div className="space-y-5 animate-in fade-in slide-in-from-left-12 duration-1000">

          {/* Main Heading Group */}
          <div className="space-y-3">
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-text leading-[1.05] tracking-tight transition-colors">
              <span className="block text-slate-500 dark:text-slate-300 text-2xl md:text-4xl lg:text-5xl mb-1.5 font-extrabold italic tracking-normal">
                Helping founders ship 
              </span>
              <span className="text-yellow-500 dark:text-yellow-400">AI products fast</span>
              <span className="block text-slate-500 dark:text-slate-300 text-xl md:text-3xl lg:text-4xl mt-2 md:mt-3 font-extrabold tracking-tight opacity-80">
                Making them profitable.
              </span>
            </h1>
          </div>
 
          {/* Bio & Features */}
          <div className="space-y-5">
            <p className="text-text/70 text-base md:text-lg font-bold leading-relaxed max-w-xl border-l-[3px] border-yellow-500/20 pl-6 md:pl-8 transition-colors">
              {bio}
            </p>
 
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {features?.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 group">
                  <div className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0 flex items-center justify-center rounded-lg md:rounded-xl bg-card border border-border group-hover:bg-yellow-500/10 group-hover:border-yellow-500/50 group-hover:scale-105 transition-all duration-500">
                    <span className="text-xl md:text-2xl">{feature.icon}</span>
                  </div>
                  <div className="text-text/80 font-bold tracking-tight text-[11px] md:text-xs transition-colors">
                    {feature.text}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <div className="flex flex-wrap items-center gap-4">
              <Button 
                variant="yellow"
                className="px-8 md:px-10 py-4 shadow-2xl shadow-yellow-500/20 hover:scale-[1.02] active:scale-95 transition-all text-[10px] md:text-xs tracking-widest uppercase"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                DISCOVER OUR WORK
              </Button>
              <Button  
                variant="outline"
                className="px-8 md:px-10 py-4 border-border text-text/80 hover:bg-card hover:border-text/30 shadow-sm text-[10px] md:text-xs tracking-widest uppercase transition-colors"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                LET'S SCOPE YOUR MVP
              </Button>
            </div>
          </div>
        </div>

        <div className="relative animate-in fade-in slide-in-from-right-12 duration-1000 hidden lg:block pt-24">
          <div className="relative z-10 p-3 border border-border rounded-[4rem] bg-card backdrop-blur-3xl shadow-2xl overflow-hidden group transition-all transform scale-85">
            <div className="aspect-square rounded-[3.5rem] overflow-hidden relative">
              <img 
                src={heroGraphic} 
                alt="Modern Networking Graphic" 
                className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-1000 brightness-100 dark:brightness-90 grayscale-[0.2]"
              />
              <div className="absolute bottom-12 right-12 flex items-center gap-4 bg-card/95 backdrop-blur-md p-6 rounded-[2.5rem] shadow-2xl border border-border transition-colors">
                <div className="w-14 h-14 flex items-center justify-center bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 rounded-full animate-bounce">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/></svg>
                </div>
                <div>
                  <p className="text-[11px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] leading-none mb-2">Performance</p>
                  <p className="text-3xl font-black text-text leading-none tracking-tighter">99.9%</p>
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
