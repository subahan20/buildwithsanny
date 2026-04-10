import React from 'react';
import Button from './ui/Button';

const VisionStatement = () => {
  return (
    <section className="py-2 md:py-3 bg-bg relative overflow-hidden transition-all duration-500">
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20 relative z-10 flex justify-center text-center">
        <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-12 duration-1000">
          
          {/* Main Headline */}
          <h2 className="text-3xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.05] mb-6 md:mb-10 text-text transition-all">
            <span className="block">AI is here.</span>
            <span className="block text-yellow-500 font-serif italic font-normal tracking-tight">The few with a plan will lead.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 text-left mb-10 md:mb-12">
            <p className="text-sm md:text-base font-bold text-text/70 leading-relaxed max-w-md opacity-95 transition-colors">
              Technology shouldn't just be a tool; it should be an extension of human intent. We bridge the gap between complex AI and practical, high-impact business operations.
            </p>
            <p className="text-sm md:text-base font-bold text-text/70 leading-relaxed max-w-md opacity-95 transition-colors">
              By building custom architectural foundations, we allow visionaries to focus on what matters most: innovation, growth, and the human element of building something great.
            </p>
          </div>

          {/* Section Bottom CTA */}
          <div className="flex justify-center">
            <Button 
              variant="yellow" 
              className="px-12 py-4 shadow-xl shadow-yellow-500/20"
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
