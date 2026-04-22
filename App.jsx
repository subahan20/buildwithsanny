import React from 'react';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './src/context/ThemeContext';
import TorchEffect from './src/components/TorchEffect';

const LandingPage = lazy(() => import('./src/pages/LandingPage'));
const Dashboard = lazy(() => import('./src/pages/Dashboard'));

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen bg-bg">
    <div className="w-8 h-8 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#020617] selection:bg-cyan-500/30 font-inter text-slate-100">
      <ThemeProvider>
        <TorchEffect />
        <BrowserRouter>
          <div className="antialiased min-h-screen font-inter transition-colors duration-500 bg-bg text-text selection:bg-yellow-500/30">
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
              </Routes>
            </Suspense>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};

export default App;
