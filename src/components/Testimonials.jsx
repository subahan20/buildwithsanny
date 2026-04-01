import React from 'react';
import TestimonialCard from './TestimonialCard';

const TESTIMONIALS_DATA = [
  {
    text: "Sanny helped us launch our product in 30 days. Super fast & reliable.",
    author: "Founder, Startup"
  },
  {
    text: "Best developer I worked with. Understands business, not just code.",
    author: "Client"
  },
  {
    text: "Highly professional and delivers on time. Great experience working together.",
    author: "Product Manager"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-mesh-light relative overflow-hidden border-t border-slate-50">
      {/* Background patterns to cover space */}
      <div className="absolute inset-0 bg-dot-grid opacity-[0.25]"></div>
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-purple-50/50 blur-[100px] rounded-full"></div>
      
      <div className="max-w-[1440px] mx-auto px-8 relative z-10">
        <div className="mb-20 text-left sm:text-center max-w-3xl sm:mx-auto">
          <span className="text-purple-600 bg-purple-50 border border-purple-100 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] leading-none">Social Proof</span>
          <h2 className="text-4xl sm:text-7xl font-black text-slate-900 mt-6 tracking-tighter leading-none">What Clients Say</h2>
          <p className="text-slate-500 mt-6 text-xl font-medium leading-relaxed">
            Real stories from startups and teams built on trust and professional performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((testimonial, idx) => (
            <TestimonialCard 
              key={idx} 
              text={testimonial.text} 
              author={testimonial.author} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
