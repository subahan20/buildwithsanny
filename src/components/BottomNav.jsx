import React from 'react';

const BottomNav = () => {
  const navItems = [
    { name: 'SOLUTIONS', icon: '🧠', href: '#services' },
    { name: 'PRODUCTS', icon: '📦', href: '#projects' },
    { name: 'CONSULT', icon: '📈', href: '#pricing' },
    { name: 'CONTACT', icon: '✉️', href: '#contact' }
  ];

  return (
    <nav className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-sm">
      <div className="bg-slate-900/90 backdrop-blur-2xl border border-white/10 rounded-2xl p-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center justify-around">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById(item.href.substring(1));
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex flex-col items-center gap-1.5 px-3 py-2 rounded-xl transition-all duration-300 group"
          >
            <div className="bg-yellow-500/0 p-2 rounded-lg group-active:bg-yellow-500/20 transition-all">
              <span className="text-xl group-active:scale-110 transition-transform block">
                {item.icon}
              </span>
            </div>
            <span className="text-[7px] font-black tracking-widest text-text uppercase opacity-60 group-hover:opacity-100 group-active:text-yellow-500 transition-all">
              {item.name}
            </span>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
