import React from 'react';

const LessonViewer = ({ course, onBack }) => {
  const { title, instructor, lessons, image } = course;

  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto relative z-10">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-yellow-400 mb-12 transition-colors group"
      >
        <svg className="w-5 h-5 transition-transform group-hover:-translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        BACK TO MISSION HUB
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
        <div className="lg:col-span-2 space-y-12">
          {/* Main Video/Content Frame */}
          <div className="aspect-video bg-slate-950 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-yellow-950/20 relative group border border-white/5 cursor-pointer">
            <img src={image} alt={title} className="w-full h-full object-cover opacity-40 group-hover:opacity-30 transition-all duration-700" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-yellow-500/10 backdrop-blur-xl border border-yellow-400 rounded-full flex items-center justify-center text-yellow-400 shadow-[0_0_30px_rgba(34,211,238,0.2)] group-hover:scale-110 group-hover:bg-yellow-500 group-hover:text-white transition-all duration-500">
                <svg className="w-12 h-12 ml-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            <div className="absolute bottom-10 left-10 text-white">
              <span className="bg-yellow-500/20 backdrop-blur-md border border-yellow-500/30 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">TRANSMITTING SIGNAL</span>
              <h2 className="text-3xl font-black mt-4 tracking-tighter">{lessons[0].title}</h2>
            </div>
          </div>

          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-500">{title}</h1>
            <div className="text-slate-400 text-lg font-medium leading-relaxed bg-slate-900/40 backdrop-blur-3xl p-8 rounded-[2rem] border border-white/5 shadow-2xl">
              <p className="border-l-2 border-yellow-500/50 pl-8">
                Welcome to the specialized neural deployment of <span className="text-white font-bold">{title}</span>. In this architectural module, <span className="text-yellow-400 font-bold">{instructor}</span> architecturally deconstructs foundational principles and precision tools required for high-stakes business synthesis.
              </p>
            </div>
          </div>
        </div>

        {/* Sidebar Content List */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-[2px] bg-yellow-400 rounded-full"></div>
              <h3 className="text-[10px] font-black text-yellow-400 uppercase tracking-[0.3em]">Module Inventory</h3>
            </div>
            <div className="space-y-4">
              {lessons.map((lesson, idx) => (
                <div 
                  key={lesson.id}
                  className={`p-6 rounded-2xl border transition-all duration-500 group cursor-pointer ${
                    idx === 0 
                    ? 'bg-yellow-500/10 border-yellow-400 shadow-lg shadow-yellow-400/10' 
                    : 'bg-slate-900/30 border-white/5 hover:border-white/10 hover:bg-slate-900/50'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-black transition-all ${
                        idx === 0 ? 'bg-yellow-500 text-white' : 'bg-slate-950 text-slate-500 group-hover:text-white'
                      }`}>
                        {String(idx + 1).padStart(2, '0')}
                      </div>
                      <span className={`text-sm font-bold tracking-tight ${idx === 0 ? 'text-white' : 'text-slate-400 group-hover:text-white'}`}>
                        {lesson.title}
                      </span>
                    </div>
                    <span className="text-[10px] font-black text-slate-600 group-hover:text-yellow-400 transition-colors uppercase tracking-widest">{lesson.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonViewer;
