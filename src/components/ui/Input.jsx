import React from 'react';

const Input = ({ label, type = "text", name, value, onChange, placeholder, required = false, readOnly = false }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label className="text-sm font-bold text-slate-700 ml-1">
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        readOnly={readOnly}
        className={`w-full px-5 py-3.5 rounded-2xl border border-border/20 transition-all duration-300 outline-none
                   ${readOnly 
                     ? 'bg-slate-50 dark:bg-slate-900/50 text-text/50 cursor-default border-dashed' 
                     : 'bg-white dark:bg-[#050608] focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/10 placeholder:text-text/30 text-text'
                   }`}
      />
    </div>
  );
};

export default Input;
