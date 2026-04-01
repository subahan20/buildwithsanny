import React, { useState } from 'react';
import { supabase } from '../lib/supabase';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    company_name: '',
    phone_number: '',
    country_code: '+1',
    interested_in: '',
    budget: '$25k - $50k',
    timeline: 'IMMEDIATE',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Combine country code and phone number for storage
    const submissionData = {
      ...formData,
      phone_number: `${formData.country_code} ${formData.phone_number}`
    };

    try {
      const { error: supabaseError } = await supabase
        .from('contact_submissions')
        .insert([submissionData]);

      if (supabaseError) throw supabaseError;

      setSubmitted(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          full_name: '',
          email: '',
          company_name: '',
          phone_number: '',
          country_code: '+1',
          interested_in: '',
          budget: '$25k - $50k',
          timeline: 'IMMEDIATE',
          message: ''
        });
      }, 3000);
    } catch (err) {
      console.error('Submission error:', err);
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-2 md:py-5 bg-[#020617] relative overflow-hidden transition-all duration-500">
      <div className="absolute inset-0 bg-dot-grid opacity-[0.1]"></div>
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 items-start">
          
          {/* Left Column: Context */}
          <div className="space-y-12">
            <div>
              <span className="text-[10px] font-black tracking-[0.4em] text-yellow-400 uppercase mb-4 block">
                INQUIRY HUB
              </span>
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black italic tracking-tighter text-white leading-[0.95] mb-6">
                Initiate your<br />Project.
              </h2>
              <p className="text-slate-200 text-lg md:text-xl font-bold leading-relaxed max-w-md">
                We are currently accepting high-impact architectural and digital infrastructure mandates. Provide your project brief to begin the synthesis process.
              </p>
            </div>

            {/* Contact Tiers */}
            <div className="space-y-6 pt-8 border-t border-white/10">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 flex items-center justify-center bg-yellow-500/10 text-yellow-400 rounded-xl border border-yellow-500/20">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                </div>
                <div>
                  <p className="text-[10px] font-black text-yellow-500 uppercase tracking-widest mb-0.5">General Enquiries</p>
                  <p className="text-white font-black">hello@buildwithsanny.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 flex items-center justify-center bg-yellow-500/10 text-yellow-400 rounded-xl border border-yellow-500/20">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/></svg>
                </div>
                <div>
                  <p className="text-[10px] font-black text-yellow-500 uppercase tracking-widest mb-0.5">Innovation Lab</p>
                  <p className="text-white font-black">lab@buildwithsanny.com</p>
                  <p className="text-[10px] font-bold text-slate-300 mt-1 uppercase tracking-widest">Direct Neural Uplink Available</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Form Card */}
          <div className="bg-slate-900/30 backdrop-blur-3xl rounded-[2.5rem] md:rounded-[3rem] p-6 sm:p-8 md:p-12 border border-white/5 shadow-2xl shadow-yellow-950/20">
            {submitted ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-20 h-20 bg-yellow-500/10 text-yellow-400 rounded-full flex items-center justify-center mx-auto border border-yellow-400 animate-pulse">
                  <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                </div>
                <h3 className="text-3xl font-black text-white italic tracking-tighter">SYNTHESIS INITIATED</h3>
                <p className="text-slate-400 font-medium">Your project brief has been securely transmitted. Our architects will contact you shortly.</p>
              </div>
            ) : (
              <form className="space-y-6 md:space-y-8" onSubmit={handleSubmit}>
                {/* Grid 1: Basic Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-300 uppercase tracking-widest px-1">Full Name</label>
                    <input 
                      type="text" 
                      name="full_name"
                      required
                      value={formData.full_name}
                      onChange={handleInputChange}
                      placeholder="ALEXANDER VANCE" 
                      className="w-full bg-slate-950/40 border border-white/5 px-6 py-4 rounded-xl text-white font-bold focus:ring-yellow-400/20 focus:border-yellow-400 outline-none transition-all placeholder:text-slate-700" 
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-300 uppercase tracking-widest px-1">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="ALEX@SYNTHESIS.LAB" 
                      className="w-full bg-slate-950/40 border border-white/5 px-6 py-4 rounded-xl text-white font-bold focus:ring-yellow-400/20 focus:border-yellow-400 outline-none transition-all placeholder:text-slate-700" 
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-300 uppercase tracking-widest px-1">Company Name</label>
                    <input 
                      type="text" 
                      name="company_name"
                      value={formData.company_name}
                      onChange={handleInputChange}
                      placeholder="GLOBAL DYNAMICS" 
                      className="w-full bg-slate-950/40 border border-white/5 px-6 py-4 rounded-xl text-white font-bold focus:ring-yellow-400/20 focus:border-yellow-400 outline-none transition-all placeholder:text-slate-700" 
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-300 uppercase tracking-widest px-1">Phone Number</label>
                    <div className="flex gap-4">
                      <select 
                        name="country_code"
                        value={formData.country_code}
                        onChange={handleInputChange}
                        className="w-24 bg-slate-950/40 border border-white/5 px-2 py-4 rounded-xl text-white font-bold focus:ring-2 focus:ring-yellow-400/20 focus:border-yellow-400 outline-none transition-all appearance-none cursor-pointer text-center"
                      >
                        <option className="bg-slate-900" value="+1">+1 (US)</option>
                        <option className="bg-slate-900" value="+91">+91 (IN)</option>
                        <option className="bg-slate-900" value="+44">+44 (UK)</option>
                        <option className="bg-slate-900" value="+61">+61 (AU)</option>
                        <option className="bg-slate-900" value="+81">+81 (JP)</option>
                        <option className="bg-slate-900" value="+49">+49 (DE)</option>
                        <option className="bg-slate-900" value="+33">+33 (FR)</option>
                        <option className="bg-slate-900" value="+971">+971 (AE)</option>
                      </select>
                      <input 
                        type="text" 
                        name="phone_number"
                        value={formData.phone_number}
                        onChange={handleInputChange}
                        placeholder="000-000-0000" 
                        className="flex-1 bg-slate-950/40 border border-white/5 px-6 py-4 rounded-xl text-white font-bold focus:ring-yellow-400/20 focus:border-yellow-400 outline-none transition-all placeholder:text-slate-700" 
                      />
                    </div>
                  </div>
                </div>

                {/* Grid 2: Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-300 uppercase tracking-widest px-1">Interested In</label>
                    <input 
                      type="text" 
                      name="interested_in"
                      value={formData.interested_in}
                      onChange={handleInputChange}
                      placeholder="E.G. DIGITAL INFRASTRUCTURE" 
                      className="w-full bg-slate-950/40 border border-white/5 px-6 py-4 rounded-xl text-white font-bold focus:ring-yellow-400/20 focus:border-yellow-400 outline-none transition-all placeholder:text-slate-700 uppercase" 
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-300 uppercase tracking-widest px-1">Project Budget (USD)</label>
                    <select 
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full bg-slate-950/40 border border-white/5 px-6 py-4 rounded-xl text-white font-bold focus:ring-2 focus:ring-yellow-400/20 outline-none appearance-none cursor-pointer"
                    >
                      <option className="bg-slate-900">$25k - $50k</option>
                      <option className="bg-slate-900">$50k - $100k</option>
                      <option className="bg-slate-900">$100k+</option>
                      <option className="bg-slate-900">Flexible / To Be Discussed</option>
                    </select>
                  </div>
                </div>

                {/* Selection 3: Timeline Pills */}
                <div className="space-y-4">
                  <label className="text-[10px] font-black text-slate-300 uppercase tracking-widest px-1">Project Timeline</label>
                  <div className="flex flex-wrap gap-3">
                    {['IMMEDIATE', '1 MONTH', '3 MONTHS', 'EXPLORING'].map(p => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, timeline: p }))}
                        className={`px-8 py-3 rounded-xl text-[10px] font-black tracking-widest transition-all duration-300 border cursor-pointer ${
                          formData.timeline === p 
                          ? 'bg-yellow-500/10 border-yellow-400 text-yellow-400 shadow-lg shadow-yellow-400/20' 
                          : 'bg-slate-950/40 border-white/5 text-slate-300 hover:border-white/10'
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-300 uppercase tracking-widest px-1">How can we assist you?</label>
                  <textarea 
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="6" 
                    placeholder="DESCRIBE YOUR ARCHITECTURAL VISION..." 
                    className="w-full bg-slate-950/40 border border-white/5 px-8 py-6 rounded-2xl text-white font-medium focus:ring-yellow-400/20 focus:border-yellow-400 outline-none transition-all placeholder:text-slate-700"
                  ></textarea>
                </div>

                {error && (
                  <p className="text-red-400 text-xs font-bold uppercase tracking-widest text-center">{error}</p>
                )}

                {/* Submit */}
                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 py-6 rounded-2xl font-black uppercase tracking-[0.3em] text-sm shadow-xl shadow-yellow-500/20 hover:shadow-yellow-500/40 hover:-translate-y-1 transition-all active:scale-95 flex items-center justify-center gap-4 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 cursor-pointer"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-slate-900/30 border-t-slate-900 rounded-full animate-spin"></div>
                  ) : (
                    <>
                      DEPLOY INQUIRY
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

