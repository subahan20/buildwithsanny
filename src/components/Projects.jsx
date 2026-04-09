import React from 'react';
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

const PROJECTS_DATA = [
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
    name: "Touch UI",
    type: "Social Media Platform",
    duration: "Built in 10 Weeks",
    description: "Social media ecosystem with React Native mobile app and TypeScript admin dashboard, supporting real-time ZegoCloud connectivity.",
    logo: touchUILogo,
    demoLink: "https://touch.net.in/",
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
    name: "Adelphoi",
    type: "Healthcare Tech",
    duration: "Built in 16 Weeks",
    description: "Full Stack Lead for healthcare domain applications serving at-risk youth and families, focused on scalable system architecture.",
    logo: adelphoiLogo,
    demoLink: "https://adelphoi.org/",
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
    name: "Touch",
    type: "Encrypted Social",
    duration: "Built in 6 Weeks",
    description: "A next-generation social networking application focused on privacy and real-time community engagement through encrypted channels.",
    logo: touchLogo,
    demoLink: "https://touch.net.in/",
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
    name: "Zaap",
    type: "On-Demand Delivery",
    duration: "Built in 10 Weeks",
    description: "Multi-service on-demand delivery platform for the Canadian market, streamlining logistics and local commerce.",
    logo: zaapLogo,
    demoLink: "https://zaapondemand.ca/",
    studyLink: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-2 md:py-3 bg-bg relative overflow-hidden transition-colors duration-500">
      <div className="absolute inset-0 bg-dot-grid opacity-[0.03]"></div>
      
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20 relative z-10">
        <div className="mb-6 md:mb-10">
          <h2 className="text-3xl md:text-6xl lg:text-7xl font-black text-text tracking-tighter leading-none transition-colors">
            What I've shipped.
          </h2>
          <div className="w-16 md:w-20 h-1.5 md:h-2 bg-yellow-500 rounded-full mt-2 md:mt-3 transition-all"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {PROJECTS_DATA.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>

        {/* Section Bottom CTA */}
        <div className="flex justify-center mt-5">
          <Button 
            variant="yellow" 
            className="px-12 py-4 shadow-xl shadow-yellow-500/20"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            GET IN TOUCH
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
