import React from 'react';
import ServiceCard from './ServiceCard';
import Button from './ui/Button';

// --- HIGH-FIDELITY ARCHITECTURAL ICONS ---
const BrainIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2zM9 7h6M9 11h6" />
    <path d="M12 14v4" strokeLinecap="round" />
  </svg>
);

const NetworkIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
    <circle cx="12" cy="12" r="9" strokeOpacity="0.2" />
  </svg>
);

const AnalyticsIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>
);

const PackageIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25m-9-5.25v9l9 5.25" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75v8.25" />
  </svg>
);

const VoiceIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
  </svg>
);

const SystemIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.625-12.125L5.625 9.75M17.25 9.75l-4.875-7.125M3 18.75h18M6.75 21h10.5M9 3h6" />
  </svg>
);

const GlobalIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9s-2.015-9-4.5-9m0 18c-2.485 0-4.5-4.03-4.5-9s2.015-9 4.5-9m0 0a9.004 9.004 0 018.716 6.747M12 3a9.004 9.004 0 00-8.716 6.747" />
  </svg>
);

const SERVICES_DATA = [
  {
    title: "Custom AI Solutions",
    description: "Tailored cognitive layers designed to integrate seamlessly with existing legacy infrastructure.",
    icon: <BrainIcon />,
    thumbnail: "/expertise/custom_ai.png",
    items: ["Custom Models", "Database Integration", "Knowledge Systems"],
    showOnMobile: true
  },
  {
    title: "Autonomous Systems",
    description: "Self-optimizing workflows that adapt to market fluctuations and operational demands in real-time.",
    icon: <NetworkIcon />,
    thumbnail: "/expertise/autonomous.png",
    items: ["Automated Pipeline", "Edge Computing", "Self-healing Nodes"],
    showOnMobile: true
  },
  {
    title: "Cognitive Intelligence",
    description: "Advanced predictive engines that translate raw data into strategic execution pathways.",
    icon: <AnalyticsIcon />,
    thumbnail: "/expertise/cognitive.png",
    items: ["Predictive Analysis", "NLP Interface", "Real-time Dashboard"],
    showOnMobile: true
  },
  {
    title: "AI Products",
    description: "Scalable AI-native software solutions for immediate business impact.",
    icon: <PackageIcon />,
    thumbnail: "/expertise/ai_products.png",
    items: ["hirecruite", "Style.ai", "Zastra"],
    showOnMobile: false
  },
  {
    title: "AI Calling Agents",
    description: "Autonomous voice systems that handle lead generation and customer support 24/7.",
    icon: <VoiceIcon />,
    thumbnail: "/expertise/ai_calling.png",
    items: ["Voice AI Integration", "Autonomous Care", "Outbound Lead Gen"],
    showOnMobile: false
  },
  {
    title: "Custom CRM/ERP",
    description: "Enterprise management systems built with AI at the core of every workflow.",
    icon: <SystemIcon />,
    thumbnail: "/expertise/crm_erp.png",
    items: ["Workflow Automation", "Inventory Forecasting", "Data Hubs"],
    showOnMobile: false
  },
  {
    title: "Web Ecosystems",
    description: "High-performance web platforms designed for global scale and security.",
    icon: <GlobalIcon />,
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    items: ["Next.js Hubs", "Scalable Cloud Portals", "Enterprise Dashboards"],
    showOnMobile: false
  }
];

const Services = () => {
  return (
    <section 
      id="services" 
      className="py-4 px-4 md:px-4 bg-bg relative overflow-hidden transition-colors duration-500"
      aria-label="Expertise and Services"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 bg-dot-grid opacity-[0.05] dark:opacity-[0.1]"></div>
      
      <div className="max-w-[1440px] mx-auto md:px-4  relative z-10">
        
        {/* --- DESKTOP VIEW --- */}
        <div className="hidden md:block">
          <div className="mb-4 flex flex-col items-center text-center">
            <div className="flex items-center gap-4 mb-0.5">
              <div className="w-10 md:w-12 h-[2px] bg-yellow-500 rounded-full"></div>
              <span className="text-yellow-500 font-bold uppercase tracking-[0.4em] text-[10px] md:text-[15px]">Expertise</span>
            </div>
            <h2 className="text-[27px] md:text-[45px] lg:text-[60px] font-black text-text tracking-tighter leading-[1.1] transition-colors max-w-4xl">
              We build the <span className="text-yellow-500 dark:text-yellow-400">Neural Architecture</span><br className="hidden md:block" /> of modern business.
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
              className="w-[260px] h-14 rounded-full shadow-xl shadow-yellow-500/20 text-[14px] md:text-[14px] font-black tracking-[0.2em] uppercase"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              GET IN TOUCH
            </Button>
          </div>
        </div>

        {/* --- MOBILE VIEW --- */}
        <div className="block md:hidden">
          <div className="mb-4 pl-1">
            <h2 className="text-[27px] font-black text-text leading-[1.2] tracking-tight mb-2">
              We build the <span className="text-yellow-500 whitespace-nowrap">Neural Architecture</span><br />
              of modern business.
            </h2>
            <div className="w-8 h-[1px] bg-yellow-500/60"></div>
          </div>

          <div className="flex flex-col gap-4">
            {SERVICES_DATA.filter(s => s.showOnMobile).map((srv) => (
              <div key={srv.title} className="flex flex-col pl-1">
                <h3 className="text-[17px] font-bold text-text mb-1">
                  {srv.title}
                </h3>
                <p className="text-[13px] text-text/80 mb-2 leading-relaxed pr-2">
                  {srv.description}
                </p>
                
                <div className="bg-card rounded-xl p-3 border border-border/10">
                  <ul className="flex flex-col gap-2">
                    {srv.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-yellow-500 rounded-sm shadow-[0_0_8px_rgba(234,179,8,0.4)]"></div>
                        <span className="text-[11px] font-bold text-text/90 tracking-widest uppercase">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 mb-4 flex justify-center">
            <Button 
              variant="yellow" 
              className="w-[280px] h-14 rounded-full text-[14px] md:text-[14px] shadow-none font-black tracking-[0.2em] uppercase"
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
