import React from 'react';
import Button from './ui/Button';

const VisionStatement = () => {
  return (
    <section className="py-8 px-4 md:px-8 bg-bg relative overflow-hidden transition-all duration-500">
      <div className="max-w-[1440px] mx-auto relative z-10 flex justify-center text-center">
        <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-12 duration-1000">
          
          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none mb-12 text-text transition-all">
            <span className="block">AI is here.</span>
            <span className="block text-yellow-500 font-serif italic font-normal tracking-tight">The few with a plan will lead.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-12">
            <p className="text-sm sm:text-base md:text-lg font-bold text-text/70 leading-relaxed max-w-md opacity-95 transition-colors">
              Technology shouldn't just be a tool; it should be an extension of human intent. We bridge the gap between complex AI and practical, high-impact business operations.
            </p>
            <p className="text-sm sm:text-base md:text-lg font-bold text-text/70 leading-relaxed max-w-md opacity-95 transition-colors">
              By building custom architectural foundations, we allow visionaries to focus on what matters most: innovation, growth, and the human element of building something great.
            </p>
          </div>

          {/* Section Bottom CTA */}
          <div className="flex justify-center">
            <Button 
              variant="yellow" 
              className="px-12 py-4 shadow-xl shadow-yellow-500/20 text-[10px] sm:text-xs md:text-sm font-black tracking-widest uppercase"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              GET IN TOUCH
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisionStatement;
