import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import TorchEffect from './components/TorchEffect';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <ThemeProvider>
      <TorchEffect />
      <BrowserRouter>
        <div className="antialiased min-h-screen font-inter transition-colors duration-500 bg-bg text-text selection:bg-yellow-500/30">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
