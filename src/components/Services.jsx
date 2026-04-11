import React from 'react';
import ServiceCard from './ServiceCard';
import Button from './ui/Button';

const SERVICES_DATA = [
  {
    title: "Custom AI Solutions",
    icon: "🧠",
    thumbnail: "/expertise/custom_ai.png",
    items: ["Custom Models", "Database Integration", "Knowledge Systems"]
  },
  {
    title: "AI Products",
    icon: "📦",
    thumbnail: "/expertise/ai_products.png",
    items: ["hirecruite", "Style.ai", "Zastra"]
  },
  {
    title: "AI Calling Agents",
    icon: "📞",
    thumbnail: "/expertise/ai_calling.png",
    items: ["Voice AI Integration", "Autonomous Care", "Outbound Lead Gen"]
  },
  {
    title: "Custom CRM/ERP",
    icon: "📂",
    thumbnail: "/expertise/crm_erp.png",
    items: ["Workflow Automation", "Inventory Forecasting", "Data Hubs"]
  },
  {
    title: "Business Consultation",
    icon: "📈",
    thumbnail: "/expertise/consultation.png",
    items: ["AI Roadmap Strategy", "Efficiency Audits", "Tech Stack Optimization"]
  },
  {
    title: "Web Ecosystems",
    icon: "🌐",
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    items: ["Next.js Hubs", "Scalable Cloud Portals", "Enterprise Dashboards"]
  },
  {
    title: "Mobile Architecture",
    icon: "📱",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    items: ["React Native Apps", "Cross-Platform Mastery", "Native Performance"]
  }
];

const Services = () => {
  return (
    <section 
      id="services" 
      className="py-1 bg-bg relative overflow-hidden transition-colors duration-500"
      aria-label="Technologies and Frameworks we use"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 bg-dot-grid opacity-[0.05] dark:opacity-[0.1]"></div>
      
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20 relative z-10">
        {/* Section Header */}
        <div className="mb-0.5 md:mb-1">
          <div className="flex items-center gap-4 mb-0.5">
            <div className="w-10 md:w-12 h-[2px] bg-yellow-500 rounded-full"></div>
            <span className="text-yellow-500 font-bold uppercase tracking-[0.4em] text-[7px] md:text-[8px]">Expertise</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-text tracking-tighter leading-[1.15] transition-colors max-w-2xl">
            We build the <span className="text-yellow-500 dark:text-yellow-400">Neural Architecture</span><br className="md:block" /> of modern business.
          </h2>
        </div>

        {/* Vertical Rows Wrapper */}
        <div className="flex flex-col">
          {SERVICES_DATA.map((service, idx) => (
            <ServiceCard 
              key={idx} 
              title={service.title} 
              items={service.items}
              icon={service.icon}
              thumbnail={service.thumbnail}
            />
          ))}
        </div>

        {/* Section Bottom CTA */}
        <div className="flex justify-center py-4 md:py-6">
          <Button 
            variant="yellow" 
            className="px-12 py-4 shadow-xl shadow-yellow-500/20 text-[10px] sm:text-xs md:text-sm font-black tracking-widest uppercase"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            GET IN TOUCH
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
