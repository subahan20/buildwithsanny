import React from 'react';
import Button from './ui/Button';

const VisionStatement = () => {
  return (
    <section className="py-2 md:py-5 bg-[#020617] relative overflow-hidden transition-all duration-500">
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20 relative z-10 flex justify-center text-center">
        <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-12 duration-1000">
          
          {/* Main Headline */}
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.1] mb-8 text-white">
            <span className="block mb-2">AI is here.</span>
            <span className="block text-yellow-400 font-serif italic font-normal tracking-tight">The few with a plan will lead.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left mb-8">
            <p className="text-lg font-bold text-slate-200 leading-relaxed">
              Technology shouldn't just be a tool; it should be an extension of human intent. We bridge the gap between complex AI and practical, high-impact business operations.
            </p>
            <p className="text-lg font-bold text-slate-200 leading-relaxed">
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
