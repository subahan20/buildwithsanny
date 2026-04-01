import React from 'react';

const Sidebar = ({ onHomeClick, activeCourseId }) => {
  return (
    <aside className="w-80 bg-slate-950 border-r border-white/5 flex flex-col h-[calc(100vh-64px)] overflow-y-auto">
      <div className="p-8 border-b border-white/5">
        <h2 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-8">Navigation Hub</h2>
        <nav className="space-y-2">
          <button
            onClick={onHomeClick}
            className={`w-full text-left px-6 py-4 rounded-xl text-sm font-black transition-all duration-300 flex items-center gap-4 ${
              !activeCourseId 
              ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20' 
              : 'text-slate-500 hover:text-white hover:bg-white/5'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Home
          </button>
        </nav>
      </div>

      <div className="p-8">
        <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-6">Support</h3>
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-white/5 rounded-2xl p-6 text-white">
          <p className="text-sm font-bold">Need help?</p>
          <p className="text-xs mt-2 text-slate-400">Connect with your mentor for support anytime.</p>
          <button className="mt-6 w-full py-3 px-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-xs font-bold transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
