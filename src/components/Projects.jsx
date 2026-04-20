import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import Button from './ui/Button';

// Project Logos
import medmateLogo from '../assets/projects/medmate.png';
import zaapLogo from '../assets/projects/zaap.png';
import expertronsLogo from '../assets/projects/expertrons.png';
import touchLogo from '../assets/projects/touch.png';
import scrapqLogo from '../assets/projects/scrapq.png';
import nextskills360Logo from '../assets/projects/nextskills360.png';
import sahasraLogo from '../assets/projects/sahasra.png';
import click2cleanLogo from '../assets/projects/click2clean.png';
import hireLogo from '../assets/projects/outfit-ai-logo.png';
import styleaiLogo from '../assets/projects/styleai-mockup.png';
import firstmatchLogo from '../assets/projects/firstmatch-star-logo.png';
import touchUILogo from '../assets/projects/touch-ui-logo.png';
import zastraLogo from '../assets/projects/zastra-logo.png';
import almaLogo from '../assets/projects/alma-clinics-logo.png';
import adelphoiLogo from '../assets/projects/adelphoi-logo.png';
import epratibhaLogo from '../assets/projects/epratibha.png';
import tenThousandCodersLogo from '../assets/logo-10k.png';
import tenThousandCodersLogoWhite from '../assets/logo-10k-white.png';

const PROJECTS_DATA = [
  {
    name: "10000coders",
    type: "EdTech Platform",
    duration: "Built in 84 Weeks",
    description: "South India’s large-scale outcome-driven coding platform transforming beginners into job-ready software engineers. Features an end-to-end LMS, mentorship ecosystems, and robust placement workflows.",
    logo: tenThousandCodersLogo,
    darkLogo: tenThousandCodersLogoWhite,
    demoLink: "https://10000coders.co/",
    studyLink: "#"
  },
  {
    name: "Hirecruite",
    type: "AI Recruitment",
    duration: "Built in 8 Weeks",
    description: "AI-powered recruitment platform designed to streamline hiring processes for startups and enterprises.",
    logo: hireLogo,
    demoLink: "https://hirecruitai.com/",
    studyLink: "#"
  },
  {
    name: "OutFit.Ai",
    type: "AI Fashion",
    duration: "Built in 4 Weeks",
    description: "Intelligent fashion recommendation engine that suggests outfits based on user preferences and style trends.",
    logo: styleaiLogo,
    demoLink: "https://styleai-xi.vercel.app/",
    studyLink: "#"
  },
  {
    name: "FirstMatch",
    type: "Healthcare Tech",
    duration: "Built in 12 Weeks",
    description: "Advanced healthcare data ecosystem featuring Power BI analytics, predictive scoring, and dynamic organizational management (Provider, County, Foster) built with React and Redux Toolkit.",
    logo: firstmatchLogo,
    demoLink: "https://www.firstmatch.com/",
    studyLink: "#"
  },
  {
    name: "Zaap",
    type: "On-Demand Delivery",
    duration: "Built in 10 Weeks",
    description: "Multi-service on-demand delivery platform for the Canadian market, streamlining logistics and local commerce.",
    logo: zaapLogo,
    demoLink: "https://zaapondemand.ca/",
    studyLink: "#"
  },
  {
    name: "Medmate",
    type: "Healthcare Marketplace",
    duration: "Built in 12 Weeks",
    description: "Australia's leading healthcare app for prescription delivery and e-health services, connecting patients with local pharmacies.",
    logo: medmateLogo,
    demoLink: "https://medmate.com.au/",
    studyLink: "#"
  },
  {
    name: "Touch",
    type: "Encrypted Social",
    duration: "Built in 6 Weeks",
    description: "A next-generation social networking application focused on privacy and real-time community engagement through encrypted channels.",
    logo: touchLogo,
    demoLink: "https://touch.net.in/",
    studyLink: "#"
  },
  {
    name: "Adelphoi",
    type: "Healthcare Tech",
    duration: "Built in 16 Weeks",
    description: "Full Stack Lead for healthcare domain applications serving at-risk youth and families, focused on scalable system architecture.",
    logo: adelphoiLogo,
    demoLink: "https://adelphoi.org/",
    studyLink: "#"
  },
  {
    name: "EPratibha",
    type: "Ed-Tech Platform",
    duration: "Built in 16 Weeks",
    description: "Comprehensive online education platform for competitive exam prep, featuring real-time test simulations, interactive quizzes, and Zoom SDK integration.",
    logo: epratibhaLogo,
    demoLink: "https://epratibha.net/",
    studyLink: "#"
  },
  {
    name: "Zastra",
    type: "AI Vision Platform",
    duration: "Built in 14 Weeks",
    description: "AI curation platform accelerating model development through active learning, 3D annotation, and scalable microservices.",
    logo: zastraLogo,
    demoLink: "https://zastraa.com/",
    studyLink: "#"
  },
  {
    name: "Alma Clinics",
    type: "Digital Healthcare",
    duration: "Built in 12 Weeks",
    description: "Technology strategy for a digital healthcare platform optimizing clinical operations and patient workflows.",
    logo: almaLogo,
    demoLink: "https://alma-clinic.com/",
    studyLink: "#"
  },
  {
    name: "Expertrons",
    type: "AI Career Platform",
    duration: "Built in 8 Weeks",
    description: "World's largest AI video bot-assisted career platform, connecting job seekers with industry experts through immersive tech.",
    logo: expertronsLogo,
    demoLink: "https://www.expertrons.com/",
    studyLink: "#"
  },
  {
    name: "ScrapQ",
    type: "Recycling Marketplace",
    duration: "Built in 10 Weeks",
    description: "Smart waste collection system providing a digital marketplace for scrap materials, bridging the gap between households and recyclers.",
    logo: scrapqLogo,
    demoLink: "https://scrapq.com/",
    studyLink: "#"
  },
  {
    name: "Next Skills 360",
    type: "Ed-Tech Dashboard",
    duration: "Built in 8 Weeks",
    description: "A robust ed-tech dashboard for tracking student progress and curriculum delivery across diverse learning environments.",
    logo: nextskills360Logo,
    demoLink: "https://nextskills360.com/",
    studyLink: "#"
  },
  {
    name: "Click2Clean",
    type: "Service Marketplace",
    duration: "Built in 6 Weeks",
    description: "On-demand home cleaning service marketplace connecting professional cleaners with local residential clients.",
    logo: click2cleanLogo,
    demoLink: "https://click2clean.in/",
    studyLink: "#"
  },
];

const Projects = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1440);

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleToggleVisible = () => {
    setIsExpanded(!isExpanded);
  };
  // Determine how many to show based on screen size and expansion state
  // On mobile (< 768px), we show 2 if not expanded.
  // On desktop, we show 6 if not expanded.
  // We'll calculate this dynamically or just use a state that the button toggles to 'all'
  
  const getVisibleProjects = () => {
    if (isExpanded) return PROJECTS_DATA;
    
    if (windowWidth < 768) return PROJECTS_DATA.slice(0, 2);   // Mobile: 2 cards
    if (windowWidth < 1024) return PROJECTS_DATA.slice(0, 4);  // Tablet (2 cols): 4 cards
    return PROJECTS_DATA.slice(0, 6);                        // LG/Desktop (3 cols): 6 cards
  };

  const visibleProjects = getVisibleProjects();
  const getRequiredCount = () => {
    if (windowWidth < 768) return 2;
    if (windowWidth < 1024) return 4;
    return 6;
  };
  const hasMore = PROJECTS_DATA.length > getRequiredCount();

  return (
    <section id="projects" className="pt-6 pb-0 md:py-8 bg-bg relative transition-colors duration-500 overflow-visible">
      <div className="absolute inset-0 bg-dot-grid opacity-[0.03]"></div>
      
      <div className="max-w-[1440px] mx-auto px-4 md:px-4  relative z-10">
        <div className="mb-8 md:mb-5 text-center">
          <h3 className="text-[10px] md:text-[15px] font-black uppercase tracking-[0.3em] text-yellow-500 mb-2">Showcase</h3>
          <h2 className="text-[27px] md:text-[45px] lg:text-[60px] font-black text-text tracking-tight leading-[1.1] transition-colors">
            What <span className="text-yellow-500 italic">I've shipped.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {visibleProjects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>

        {/* Section Bottom CTA */}
         {hasMore && (
          <div className="flex flex-row justify-center items-center gap-2 md:gap-4 mt-8 mb-2 md:my-12">
            <Button 
              variant="outline" 
              className="w-full md:w-[260px] h-14"
              onClick={handleToggleVisible}
            >
              {isExpanded ? 'VIEW LESS' : 'VIEW MORE'}
            </Button>
            <Button 
              variant="yellow" 
              className="w-full md:w-[260px] h-14 shadow-xl shadow-yellow-500/20 border-2 border-yellow-600/50 text-[14px] md:text-[14px] font-black tracking-[0.2em] uppercase transition-all active:scale-95"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              GET IN TOUCH
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
