import React from 'react';
import { useNavigate } from 'react-router-dom';
import Input from './ui/Input';
import Button from './ui/Button';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 selection:bg-primary-100">
      <div className="w-full max-w-lg bg-white p-8 sm:p-12 rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-slate-100 animate-in fade-in zoom-in duration-700">
        <div className="mb-10 text-center">
          <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center text-white font-black text-3xl mx-auto mb-6 shadow-xl shadow-primary-500/20">
            E
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Your Profile</h1>
          <p className="text-slate-500 mt-4 text-lg">Review your professional building identity.</p>
        </div>

        <div className="space-y-6">
          <Input 
            label="Your Identity"
            value="Alex Johnson"
            readOnly={true}
          />
          <Input 
            label="Years of Experience"
            value="5+ Years"
            readOnly={true}
          />
          <Input 
            label="What You Build"
            value="Modern EdTech Solutions"
            readOnly={true}
          />
          
          <Button 
            onClick={() => navigate('/dashboard')} 
            className="w-full md:w-[260px] h-14 mx-auto block mt-4 text-xs md:text-sm tracking-[0.2em]"
          >
            LET'S SCOPE YOUR MVP
          </Button>
        </div>
        
        <p className="mt-8 text-center text-sm text-slate-400 font-medium">
          Verified Creator ID: 10k-BUILDER-01
        </p>
      </div>
    </div>
  );
};

export default Hero;
