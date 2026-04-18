import React from 'react';
import Button from './ui/Button';

const VisionStatement = () => {
  return (
    <section className="py-4 px-4 md:px-4 bg-bg relative overflow-hidden transition-all duration-500">
      <div className="max-w-[1440px] mx-auto relative z-10 flex justify-center text-center">
        <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-12 duration-1000">
          
          {/* Main Headline */}
          <h2 className="text-[27px] md:text-[45px] lg:text-[60px] font-black tracking-tighter leading-none mb-10 text-text transition-all">
            <span className="block">AI is here.</span>
            <span className="block text-yellow-500 italic">The few with a plan will lead.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-4">
            <p className="text-text/60 text-[15px] sm:text-[17px] md:text-[13px] lg:text-[15px] xl:text-[17px] font-bold leading-relaxed transition-colors">
              Technology shouldn't just be a tool; it should be an extension of human intent. We bridge the gap between complex AI and practical, high-impact business operations.
            </p>
            <p className="text-text/60 text-[15px] sm:text-[17px] md:text-[13px] lg:text-[15px] xl:text-[17px] font-bold leading-relaxed transition-colors">
              By building custom architectural foundations, we allow visionaries to focus on what matters most: innovation, growth, and the human element of building something great.
            </p>
          </div>

          {/* Section Bottom CTA */}
          <div className="flex justify-center">
            <Button 
              variant="yellow" 
              className="w-[260px] h-14 rounded-full shadow-2xl shadow-yellow-500/30 text-[14px] md:text-[14px] font-black tracking-[0.2em] uppercase transition-transform hover:scale-[1.03]"
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
