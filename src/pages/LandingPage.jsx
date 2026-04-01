import React from 'react';
import Header from '../components/Header';
import HeroForm from '../components/HeroForm';
import SocialProof from '../components/SocialProof';
import Services from '../components/Services';
import Projects from '../components/Projects';
import TechStack from '../components/TechStack';
import ProofOfConcept from '../components/ProofOfConcept';
import DigitalVoid from '../components/DigitalVoid';
import DailyCycle from '../components/DailyCycle';
import VisionStatement from '../components/VisionStatement';
import CTA from '../components/CTA';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#020617] selection:bg-yellow-500/30 font-inter text-white">
      <Header />
      
      <HeroForm />
      
      <TechStack />

      <Projects />

      <SocialProof />

      <Services />

      <DailyCycle />

      <VisionStatement />

      <ProofOfConcept />

      <CTA />


      <DigitalVoid />

      <ContactForm />

      <Footer />
    </div>
  );
};

export default LandingPage;
