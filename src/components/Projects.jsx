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

const PROJECTS_DATA = [
  {
    name: "Medmate",
    type: "Healthcare Platform",
    duration: "22 Months",
    description: "A comprehensive healthcare management ecosystem designed to streamline patient records and appointment scheduling for modern clinics.",
    logo: medmateLogo,
    demoLink: "#",
    codeLink: "#"
  },
  {
    name: "ZAAP",
    type: "Link Infrastructure",
    duration: "6K+ Monthly",
    description: "High-performance link-in-bio tool for creators, optimized for conversion and rapid page loads with deep analytics integration.",
    logo: zaapLogo,
    demoLink: "#",
    codeLink: "#"
  },
  {
    name: "Expertrons",
    type: "AI Career Platform",
    duration: "50K+ Active",
    description: "World's largest AI video bot-assisted career platform, connecting job seekers with industry experts through immersive tech.",
    logo: expertronsLogo,
    demoLink: "#",
    codeLink: "#"
  },
  {
    name: "Touch",
    type: "Encrypted Social",
    duration: "Security First",
    description: "A next-generation social networking application focused on privacy and real-time community engagement through encrypted channels.",
    logo: touchLogo,
    demoLink: "#",
    codeLink: "#"
  },
  {
    name: "ScrapQ",
    type: "Recycling Marketplace",
    duration: "Consumer App",
    description: "Smart waste collection system providing a digital marketplace for scrap materials, bridging the gap between households and recyclers.",
    logo: scrapqLogo,
    demoLink: "#",
    codeLink: "#"
  },
  {
    name: "Next Skills 360",
    type: "Ed-Tech Dashboard",
    duration: "Curriculum Focus",
    description: "A robust ed-tech dashboard for tracking student progress and curriculum delivery across diverse learning environments.",
    logo: nextskills360Logo,
    demoLink: "#",
    codeLink: "#"
  },
  {
    name: "Click2Clean",
    type: "Service Marketplace",
    duration: "On-Demand",
    description: "On-demand home cleaning service marketplace connecting professional cleaners with local residential clients.",
    logo: click2cleanLogo,
    demoLink: "#",
    codeLink: "#"
  },
  {
    name: "Sahasra Seva Samithi",
    type: "Charitable Org",
    duration: "Non-Profit",
    description: "Digital presence and donation management system for a non-profit organization dedicated to community welfare and education.",
    logo: sahasraLogo,
    demoLink: "#",
    codeLink: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-12 md:py-15 bg-mesh-dark relative overflow-hidden transition-colors duration-500">
      <div className="absolute inset-0 bg-dot-grid opacity-[0.03]"></div>
      
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20 relative z-10">
        <div className="mb-5">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-none transition-colors">
            Selected Mandates.
          </h2>
          <div className="w-24 h-2 bg-yellow-500 rounded-full mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>

        {/* Section Bottom CTA */}
        <div className="flex justify-center mt-12">
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
