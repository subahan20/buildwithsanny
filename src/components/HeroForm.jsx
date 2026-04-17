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
    bio: "\"The Startup Builder Who Speaks and Builds Both AI and Code\" - I turn founder ideas into live products - SaaS, mobile, AI agents - shipped fast.",
    features: [
      { icon: "⚡", text: "From MVP -> Scale -> Automation" },
      { 
        icon: "🌐", 
        text: (
          <div className="flex flex-col gap-0.5 md:gap-1">
            <span className="block opacity-90 uppercase tracking-widest text-[10px] sm:text-xs">Served clients in 10+ countries</span>
            <div className="flex items-center gap-1.5 overflow-visible">
              {countries.map((c, i) => (
                <div key={i} className="group/flag relative">
                  <div className="w-7 h-4 md:w-8 md:h-5 rounded-sm overflow-hidden relative z-10 border border-white/5 hover:scale-110 hover:-rotate-2 transition-all duration-500 cursor-help shadow-sm">
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
    <section id="hero" className="bg-bg flex items-center justify-center pt-24 pb-12 px-4 md:px-8 relative overflow-hidden transition-all duration-700">
      <div className="absolute inset-0 bg-dot-grid opacity-[0.05] dark:opacity-[0.1]"></div>
      
      {/* Cinematic Blooms */}
      <div className="absolute top-20 -left-10 w-[600px] h-[600px] bg-yellow-500/5 dark:bg-yellow-500/[0.03] rounded-full filter blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-20 -right-10 w-[600px] h-[600px] bg-orange-500/5 dark:bg-orange-500/[0.03] rounded-full filter blur-[120px] animate-pulse delay-700"></div>

      <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center relative z-10">
        <div className="flex flex-col gap-12 animate-in fade-in slide-in-from-left-12 duration-1000">

          {/* Main Heading Group */}
          <div className="flex flex-col items-center lg:items-start p-0 m-0 gap-1 md:gap-1.5 border-b border-white/5 lg:border-none">
            <span className="text-text/70 text-[26px] font-black italic tracking-tight leading-none m-0 p-0 whitespace-nowrap">
              Helping founders ship
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-yellow-500 leading-none tracking-tighter transition-colors m-0 p-0 whitespace-nowrap">
              AI products fast.
            </h1>
            <span className="text-text/60 text-[26px] font-black italic tracking-tighter leading-none m-0 p-0 whitespace-nowrap">
              Making them profitable.
            </span>
          </div>
 
          {/* Bio & Features */}
          <div className="flex flex-col gap-6">
            <p className="text-text/70 text-[13px] md:text-[15px] mx-auto lg:mx-0 font-bold leading-relaxed max-w-xl transition-colors text-center lg:text-left drop-shadow-sm mb-0">
              {bio}
            </p>
 
            <div className="flex flex-col md:flex-row gap-2.5 md:gap-8 lg:gap-x-4 xl:gap-x-8 items-start md:items-center justify-start md:justify-center lg:justify-start mx-0 md:mx-auto lg:mx-0 w-full lg:w-fit">
              {features?.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2.5 group w-auto">
                  <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 flex items-center justify-center rounded-xl bg-card border border-border group-hover:bg-yellow-500/10 group-hover:border-yellow-500/50 group-hover:scale-105 transition-all duration-500 shadow-sm">
                    <span className="text-xl md:text-2xl">{feature.icon}</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-text/90 font-black tracking-tight text-[11px] md:text-sm uppercase transition-colors text-left">
                      {feature.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 mx-auto sm:px-0">
              <Button 
                variant="yellow"
                className="w-full sm:w-[260px] h-14 shadow-2xl shadow-yellow-500/30 text-xs md:text-sm font-black tracking-[0.2em] uppercase transition-transform active:scale-95 rounded-full"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                DISCOVER OUR WORK
              </Button>
              <Button  
                variant="outline"
                className="w-full sm:w-[260px] h-14 border-2 border-border text-text font-black shadow-sm text-xs md:text-sm tracking-[0.2em] uppercase transition-all rounded-full"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                LET'S SCOPE MVP
              </Button>
            </div>
          </div>
        </div>

        {/* Desktop Graphic */}
        <div className="relative animate-in fade-in slide-in-from-right-12 duration-1000 hidden lg:block">
          <div className="relative z-10 p-4 border border-border rounded-[4rem] bg-card backdrop-blur-3xl shadow-2xl overflow-hidden group transition-all transform hover:scale-[1.02] duration-700 max-w-[480px] ml-auto">
            <div className="aspect-square rounded-[3.5rem] overflow-hidden relative">
              <img 
                src={heroGraphic} 
                alt="Modern Networking Graphic" 
                className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-1000 brightness-100 dark:brightness-90 grayscale-[0.1]"
              />
              <div className="absolute bottom-6 right-6 flex items-center gap-3 bg-card/95 backdrop-blur-md p-3.5 rounded-[1.5rem] shadow-2xl border border-border transition-colors">
                <div className="w-9 h-9 flex items-center justify-center bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 rounded-full animate-bounce">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/></svg>
                </div>
                <div>
                  <p className="text-[8px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] leading-none mb-1">Performance</p>
                  <p className="text-lg font-black text-text leading-none tracking-tighter">99.9%</p>
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
