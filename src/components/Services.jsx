import React from 'react';
import ServiceCard from './ServiceCard';
import Button from './ui/Button';

const SERVICES_DATA = [
  {
    title: "Custom AI Solutions",
    description: "Tailored cognitive layers designed to integrate seamlessly with existing legacy infrastructure.",
    icon: "🧠",
    thumbnail: "/expertise/custom_ai.png",
    items: ["Custom Models", "Database Integration", "Knowledge Systems"],
    showOnMobile: true
  },
  {
    title: "Autonomous Systems",
    description: "Self-optimizing workflows that adapt to market fluctuations and operational demands in real-time.",
    icon: "⛓️‍💥",
    thumbnail: "/expertise/autonomous.png",
    items: ["Automated Pipeline", "Edge Computing", "Self-healing Nodes"],
    showOnMobile: true
  },
  {
    title: "Cognitive Intelligence",
    description: "Advanced predictive engines that translate raw data into strategic execution pathways.",
    icon: "📈",
    thumbnail: "/expertise/cognitive.png",
    items: ["Predictive Analysis", "NLP Interface", "Real-time Dashboard"],
    showOnMobile: true
  },
  {
    title: "AI Products",
    description: "Scalable AI-native software solutions for immediate business impact.",
    icon: "📦",
    thumbnail: "/expertise/ai_products.png",
    items: ["hirecruite", "Style.ai", "Zastra"],
    showOnMobile: false
  },
  {
    title: "AI Calling Agents",
    description: "Autonomous voice systems that handle lead generation and customer support 24/7.",
    icon: "📞",
    thumbnail: "/expertise/ai_calling.png",
    items: ["Voice AI Integration", "Autonomous Care", "Outbound Lead Gen"],
    showOnMobile: false
  },
  {
    title: "Custom CRM/ERP",
    description: "Enterprise management systems built with AI at the core of every workflow.",
    icon: "📂",
    thumbnail: "/expertise/crm_erp.png",
    items: ["Workflow Automation", "Inventory Forecasting", "Data Hubs"],
    showOnMobile: false
  },
  {
    title: "Web Ecosystems",
    description: "High-performance web platforms designed for global scale and security.",
    icon: "🌐",
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    items: ["Next.js Hubs", "Scalable Cloud Portals", "Enterprise Dashboards"],
    showOnMobile: false
  }
];

const Services = () => {
  return (
    <section 
      id="services" 
      className="py-4 md:py-8 px-4 md:px-8 bg-bg relative overflow-hidden transition-colors duration-500"
      aria-label="Technologies and Frameworks we use"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 bg-dot-grid opacity-[0.05] dark:opacity-[0.1]"></div>
      
      <div className="max-w-[1440px] mx-auto md:px-12 lg:px-20 relative z-10">
        
        {/* --- DESKTOP VIEW --- */}
        <div className="hidden md:block">
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-0.5">
              <div className="w-10 md:w-12 h-[2px] bg-yellow-500 rounded-full"></div>
              <span className="text-yellow-500 font-bold uppercase tracking-[0.4em] text-[7px] md:text-[8px]">Expertise</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-text tracking-tighter leading-[1.15] transition-colors max-w-2xl">
              We build the <span className="text-yellow-500 dark:text-yellow-400">Neural Architecture</span><br className="md:block" /> of modern business.
            </h2>
          </div>

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

          <div className="flex justify-center mt-8">
            <Button 
              variant="yellow" 
              className="px-12 py-4 shadow-xl shadow-yellow-500/20 text-[10px] sm:text-xs md:text-sm font-black tracking-widest uppercase"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              GET IN TOUCH
            </Button>
          </div>
        </div>

        {/* --- MOBILE VIEW --- */}
        <div className="block md:hidden">
          <div className="mb-4 pl-1">
            <h2 className="text-[19px] font-black text-text leading-[1.2] tracking-tight mb-2">
              We build the <span className="text-yellow-500 whitespace-nowrap">Neural Architecture</span><br />
              of modern business.
            </h2>
            <div className="w-8 h-[1px] bg-yellow-500/60"></div>
          </div>

          <div className="flex flex-col gap-4">
            {SERVICES_DATA.filter(s => s.showOnMobile).map((srv) => (
              <div key={srv.title} className="flex flex-col pl-1">
                <h3 className="text-[15px] font-bold text-text mb-1">
                  {srv.title}
                </h3>
                <p className="text-[11px] text-text/80 mb-2 leading-relaxed pr-2">
                  {srv.description}
                </p>
                
                <div className="bg-[#111318] dark:bg-[#111318] rounded-xl p-3 border border-border/10">
                  <ul className="flex flex-col gap-2">
                    {srv.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-yellow-500 rounded-sm shadow-[0_0_8px_rgba(234,179,8,0.4)]"></div>
                        <span className="text-[9px] font-bold text-text/90 tracking-widest uppercase">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 mb-1">
            <Button 
              variant="yellow" 
              className="w-full py-3 rounded-[32px] text-[10px] shadow-none"
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

export default Services;
