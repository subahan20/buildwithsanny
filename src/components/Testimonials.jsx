import React from 'react';
import TestimonialCard from './TestimonialCard';
import shawnAvatar from '../assets/testomonials/first_match_founder.jpeg';
import almaClinicsLogo from '../assets/projects/alma-clinics-logo.png';

const TESTIMONIALS_DATA = [
  {
    text: (
      <>
        <span className="font-black text-text"><span className="text-text font-black tracking-widest text-[10px]">NEURAL ARCH</span> exceptional technical expertise and architectural redesign were pivotal for our platform's evolution.</span>
        <span className="text-text/60"> He conducted a comprehensive analysis, identified key inefficiencies, and proposed a complete architectural redesign. He introduced scalable backend services and optimized database queries that significantly improved response times."</span>
      </>
    ),
    author: "Mathew Wade",
    role: "CTO, VESTIQ",
    avatar: "https://ui-avatars.com/api/?name=Mathew+Wade&background=020617&color=fde047&bold=true&size=200"
  },
  {
    text: (
      <>
        <span className="font-black text-text">"Sanny took complete ownership of modernizing our legacy systems and transitioning us to a scalable microservices architecture.</span>
        <span className="text-text/60"> His ability to balance technical excellence with business priorities was outstanding. He worked closely with stakeholders to deliver production-ready systems that improved reliability and boosted team productivity."</span>
      </>
    ),
    author: "Vicky Joseph",
    role: "Head of Engineering, Gentechrise Analytics",
    avatar: "https://ui-avatars.com/api/?name=Vicky+Joseph&background=020617&color=fde047&bold=true&size=200"
  },
  {
    text: (
      <>
        <span className="font-black text-text">"I think you are very proactive in your thinking and you communicate very well.</span>
        <span className="text-text/60"> Your English is easy for me to understand. I regret that you are not going to be on this project. Let me know if you ever need me for a work reference."</span>
      </>
    ),
    author: "Shawn",
    role: "Founder, First Match",
    avatar: shawnAvatar
  },
  {
    text: (
      <>
        <span className="font-black text-text">"Sanny did not just restore our access; he fundamentally transformed our platform.</span>
        <span className="text-text/60"> He successfully redesigned our software architecture, overhauled our security protocols, and significantly enhanced application performance."</span>
      </>
    ),
    author: "Collen Ngubeni",
    role: "ALMA CLINICS",
    avatar: almaClinicsLogo
  },
  {
    text: (
      <>
        <span className="font-black text-text">"Your creativity and clear vision have always stood out to me.</span>
        <span className="text-text/60"> I've learned so much from the way you simplify complex problems and turn them into well-structured, manageable tasks. Your constant drive to grow and upskill has been truly inspiring."</span>
      </>
    ),
    author: "Ankit JCC",
    role: "Founder, Mumbai Design Club",
    avatar: "https://ui-avatars.com/api/?name=Mumbai+Design+Club&background=020617&color=fde047&bold=true&size=200"
  }
];

const Testimonials = () => {
  // Triple the items to ensure the marquee is long enough for a seamless loop
  const marqueeItems = [...TESTIMONIALS_DATA, ...TESTIMONIALS_DATA, ...TESTIMONIALS_DATA];

  return (
    <section className="pt-4 pb-4 px-4 md:px-4 bg-bg relative overflow-hidden transition-colors duration-500">
      <div className="absolute inset-0 bg-dot-grid opacity-[0.05]"></div>
      
      <div className="max-w-[1440px] mx-auto relative z-10 mb-8 text-center">
        {/* Header */}
        <div className="flex flex-col items-center">
          <h3 className="text-yellow-500 font-extrabold uppercase tracking-[0.4em] text-[10px] md:text-[15px] mb-2">
            // Client Voices
          </h3>
          <h2 className="text-[27px] md:text-[45px] lg:text-[60px] font-black text-text tracking-tighter leading-tight mb-4 transition-colors">
            What clients say
          </h2>
          <p className="text-text/50 text-[16px] md:text-[19px] xl:text-[21px] font-bold max-w-2xl transition-colors leading-relaxed mx-auto md:mx-0">
            A few words from the people I've worked closely with.
          </p>
        </div>
      </div>

      <div className="relative w-full max-w-[1440px] mx-auto">
        {/* Gradient Overlays for smooth entry/exit */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-bg via-bg/80 to-transparent z-20 pointer-events-none transition-all duration-500"></div>
        <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-bg via-bg/80 to-transparent z-20 pointer-events-none transition-all duration-500"></div>

        <div className="flex overflow-hidden group/marquee select-none">
          {/* Marquee Row 1 */}
          <div className="flex gap-6 animate-marquee py-2 group-hover/marquee:[animation-play-state:paused] pr-6">
            {marqueeItems.map((testimonial, idx) => (
              <TestimonialCard 
                key={`m1-${idx}`} 
                {...testimonial}
              />
            ))}
          </div>
          {/* Duplicate Row for Seamless Loop */}
          <div className="flex gap-6 animate-marquee py-2 group-hover/marquee:[animation-play-state:paused] pr-6" aria-hidden="true">
            {marqueeItems.map((testimonial, idx) => (
              <TestimonialCard 
                key={`m2-${idx}`} 
                {...testimonial}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};



export default Testimonials;

