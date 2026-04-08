import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const TorchEffect = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { theme } = useTheme();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[60] overflow-hidden">
      {/* Dynamic Cursor Spotlight (Torch) */}
      <div 
        className="absolute w-[800px] h-[800px] rounded-full transition-opacity duration-1000"
        style={{
          left: mousePos.x,
          top: mousePos.y,
          transform: 'translate(-50%, -50%)',
          background: theme === 'dark' 
            ? 'radial-gradient(circle, rgba(234, 179, 8, 0.07) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(234, 179, 8, 0.04) 0%, transparent 70%)',
        }}
      />

      {/* Futuristic Background Blooms (Backside Gradients) */}
      <div className="absolute top-[10%] -left-[10%] w-[50vw] h-[50vw] bg-yellow-500/5 rounded-full filter blur-[120px] animate-pulse -z-10"></div>
      <div className="absolute bottom-[20%] -right-[10%] w-[40vw] h-[40vw] bg-orange-500/5 rounded-full filter blur-[150px] animate-pulse delay-1000 -z-10"></div>
    </div>
  );
};

export default TorchEffect;
