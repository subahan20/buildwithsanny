import React from 'react';
import Dashboard from './src/pages/Dashboard';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#020617] selection:bg-cyan-500/30 font-inter text-slate-100">
      <Dashboard />
    </div>
  );
};

export default App;
