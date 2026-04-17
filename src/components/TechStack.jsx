import React from 'react';
import TechCard from './TechCard';
import Button from './ui/Button';

// Define the tech stack with specific colors and icons matching Reference 2
// SVG Icons for each technology
const JSIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#F7DF1E]">
    <path d="M0 0h24v24H0V0z" fill="none"/><path d="M1.5 1.5h21v21h-21v-21zm19.5 19.5V3H3v18h18zM14.5 16.5c0 1.1-.9 2-2 2s-2-.9-2-2v-4.5h1.5v4.5c0 .28.22.5.5.5s.5-.22.5-.5v-4.5h1.5v4.5zm4.5 0c0 1.1-.9 2-2 2s-2-.9-2-2h1.5c0 .28.22.5.5.5s.5-.22.5-.5v-3.5H16v-1h3v4.5z"/>
  </svg>
);
const TSIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#3178C6]">
    <path d="M1.5 1.5h21v21h-21v-21zm19.5 19.5V3H3v18h18zM11.5 14.5H9v-1h6v1h-2.5V19h-1v-4.5zm6 0c0-1.1-.9-2-2-2h-1c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h.5c.28 0 .5.22.5.5s-.22.5-.5.5h-1v.5c0 .55.45 1 1 1h.5c.55 0 1-.45 1-1v-2.5zm-1 0v1h-.5v-1h.5z"/>
  </svg>
);
const ReactIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#61DAFB] animate-[spin_10s_linear_infinite]">
    <path d="M22 12c0-1.92-2.14-3.52-5-4.41V6.5c0-1.92-2-3.5-4.5-3.5S8 4.58 8 6.5v1.09c-2.86.89-5 2.49-5 4.41s2.14 3.52 5 4.41v1.09c0 1.92 2 3.5 4.5 3.5s4.5-1.58 4.5-3.5v-1.09c2.86-.89 5-2.49 5-4.41zm-10 1a1 1 0 110-2 1 1 0 010 2z"/>
  </svg>
);
const NextIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-slate-900">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 1c6.075 0 11 4.925 11 11 0 1.57-.333 3.064-.937 4.415L9.67 5.75c.677-.48 1.436-.838 2.247-1.042.027-.008.056-.008.083-.008zM1 12C1 5.925 5.925 1 12 1c.852 0 1.674.098 2.463.282.028.007.056.007.084.007L5.352 14.85C5.123 13.935 5 12.983 5 12c0-2.26 1.053-4.27 2.72-5.602l3.43 5.485c.084.135.084.306 0 .44L5.32 21.05C2.693 19.123 1 15.753 1 12zm11 11c-1.393 0-2.716-.26-3.93-.733L15.35 10.35l3.81 10.3c-.028.007-.056.007-.083.007-.852 0-1.674-.098-2.463-.282zm6.2-7.5L12.55 3.5c.23.914.354 1.866.354 2.85 0 2.26-1.053 4.27-2.72 5.602l3.43-5.485c.084-.135.084-.306 0-.44l3.818-6.115C20.17 10.027 21 11.94 21 14c0 2.05-.56 3.963-1.538 5.61l-1.262-3.11z"/>
  </svg>
);
const NodeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#339933]">
    <path d="M12 2L4 6.7v10.6L12 22l8-4.7V6.7L12 2zm0 17.5l-6-3.5V8l6-3.5 6 3.5v8l-6 3.5z"/>
  </svg>
);
const ExpressIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-slate-900">
    <path d="M2 12h20M2 17h20M2 7h20" stroke="currentColor" strokeWidth="2"/>
    <text x="4" y="14" className="text-[8px] font-black fill-slate-900" style={{ fontFamily: 'Arial' }}>EX</text>
  </svg>
);
const NestIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#E0234E]">
    <path d="M12 2L2 7v10l10 5 10-5V7l-10-5zm0 2.5l7.5 3.8v7.4L12 19.5 4.5 15.7V8.3L12 4.5zm0 3.5l-4.5 2.3V13l4.5 2.3 4.5-2.3v-2.7L12 8z"/>
  </svg>
);
const SocketIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-slate-900">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1" fill="none"/>
    <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1" fill="none"/>
    <circle cx="12" cy="12" r="2" fill="currentColor"/>
  </svg>
);

// New Mobile-focused Icons
const RNIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#61DAFB]">
    <path d="M22 12c0-1.92-2-3.5-4.5-3.5s-4.5 1.58-4.5 3.5 2 3.5 4.5 3.5 4.5-1.58 4.5-3.5zm-10 1a1 1 0 110-2 1 1 0 010 2z"/>
    <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
  </svg>
);
const FlutterIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#02569B]">
    <path d="M14.314 0L2.3 12l3.6 3.6 15.602-15.6H14.314zM24 12L12 24l-3.6-3.6L20.4 8.4H24z"/>
  </svg>
);
const FirebaseIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#FFCA28]">
    <path d="M3.89 15.67L5.26 1.86c.01-.15.1-.28.24-.32.14-.04.3.01.37.13l2.25 3.99 4.3 4.3 3.82-3.82L12.39.2c-.08-.12-.07-.29.03-.39.1-.1.27-.11.38-.03l7.26 5.52c.11.08.15.22.1.35l-2.09 9.87 3.94 2.2c.15.08.24.24.23.41s-.11.32-.26.39l-7.79 3.42c-.13.06-.29.06-.42 0l-7.79-3.42c-.15-.07-.25-.22-.26-.39s.08-.33.23-.41l3.87-2.16z"/>
  </svg>
);
const ExpoIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-slate-900">
    <path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm10-8a8 8 0 100 16 8 8 0 000-16z"/>
    <path d="M12 6a6 6 0 100 12 6 6 0 000-12zm0 10a4 4 0 110-8 4 4 0 010 8z" fill="currentColor"/>
  </svg>
);

const TECH_ITEMS = [
  { name: "React.js", color: "#61DAFB", icon: <ReactIcon /> },
  { name: "Next.js", color: "#000000", icon: <NextIcon /> },
  { name: "TypeScript", color: "#3178C6", icon: <TSIcon /> },
  { name: "Node.js", color: "#339933", icon: <NodeIcon /> },
  { name: "Express.js", color: "#000000", icon: <ExpressIcon /> },
  { name: "Nest.js", color: "#E0234E", icon: <NestIcon /> },
  { name: "Socket.io", color: "#000000", icon: <SocketIcon /> },
  { name: "React Native", color: "#61DAFB", icon: <RNIcon /> },
  { name: "Flutter", color: "#02569B", icon: <FlutterIcon /> },
  { name: "Firebase", color: "#FFCA28", icon: <FirebaseIcon /> },
  { name: "Expo", color: "#000000", icon: <ExpoIcon /> },
];

const TechStack = () => {
  const marqueeItems = [...TECH_ITEMS, ...TECH_ITEMS];

  return (
    <section 
      className="py-3 px-4 md:px-8 bg-bg relative overflow-hidden transition-colors duration-500"
      aria-label="Technologies and Frameworks we use"
    >
      <div className="absolute inset-0 bg-dot-grid opacity-[0.1]"></div>
      
      <div className="max-w-[1440px] mx-auto mb-3 relative z-20 transition-all duration-500 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[26px] font-black text-text tracking-tighter leading-none mb-4 transition-all duration-300">
            Custom Tech <span className="text-yellow-500 italic">Architectures</span>
          </h2>
          <p className="text-text/50 text-[13px] md:text-sm font-bold max-w-2xl mx-auto leading-relaxed mb-8 transition-all duration-300">
             Built with a foundation designed for scale, speed, and absolute reliability.
          </p>
        </div>
      </div>
      
      <div className="relative">
        <div className="flex overflow-hidden group select-none">
          <div className="flex animate-marquee py-1 group-hover:[animation-play-state:paused]">
            {marqueeItems.map((item, idx) => (
              <TechCard key={`r1-${item.name}-${idx}`} {...item} />
            ))}
          </div>
          <div className="flex animate-marquee py-1 group-hover:[animation-play-state:paused]" aria-hidden="true">
            {marqueeItems.map((item, idx) => (
              <TechCard key={`r1-clone-${item.name}-${idx}`} {...item} />
            ))}
          </div>
        </div>
      </div>

      {/* Decorative gradient overlays */}
      <div className="absolute inset-y-0 left-0 w-12 sm:w-32 lg:w-48 bg-gradient-to-r from-bg via-bg/80 to-transparent z-10 pointer-events-none transition-all duration-500"></div>
      <div className="absolute inset-y-0 right-0 w-12 sm:w-32 lg:w-48 bg-gradient-to-l from-bg via-bg/80 to-transparent z-10 pointer-events-none transition-all duration-500"></div>

      <div className="relative z-20 flex justify-center mt-8">
        <Button 
          variant="yellow" 
          className="w-[260px] h-14 rounded-full shadow-2xl shadow-yellow-500/30 text-xs md:text-sm font-black tracking-[0.2em] uppercase hover:scale-[1.03] transition-transform"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          GET IN TOUCH
        </Button>
      </div>
    </section>
  );
};

export default TechStack;
