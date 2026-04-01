import React from 'react';

const ProcessStep = ({ icon, title }) => {
  return (
    <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-primary-100/30 transition-all duration-500 relative group flex flex-col items-center text-center h-full">
      <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-2xl font-black text-slate-300 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-500 mb-6 border border-slate-100 group-hover:border-primary-600">
        {icon}
      </div>
      
      <h3 className="text-xl font-black text-slate-800 tracking-tight group-hover:text-primary-600 transition-colors">
        {title}
      </h3>
      
      <div className="w-8 h-1 bg-primary-500/10 mt-6 rounded-full group-hover:w-16 group-hover:bg-primary-500 transition-all duration-500"></div>
    </div>
  );
};

export default ProcessStep;
