import React from 'react';

const Button = ({ children, onClick, type = "button", variant = "primary", className = "" }) => {
  const baseStyles = "px-8 py-3.5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all duration-300 transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap flex items-center justify-center gap-2 cursor-pointer";
  
  const variants = {
    primary: "bg-white text-slate-900 hover:bg-slate-100 shadow-xl shadow-white/10",
    secondary: "bg-slate-800/50 text-slate-200 hover:bg-slate-700/50 border border-white/10 backdrop-blur-md",
    outline: "bg-transparent border-2 border-slate-700 text-slate-300 hover:bg-white/5 hover:border-slate-700 shadow-sm",
    yellow: "bg-yellow-500 text-slate-900 hover:bg-yellow-400 shadow-xl shadow-yellow-500/20"
  };

  return (
    <button 
      type={type} 
      onClick={onClick} 
      className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
