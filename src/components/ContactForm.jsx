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

    // Concatenate country code and phone number, then remove country_code from the payload
    const { country_code, ...dataToSubmit } = formData;
    const submissionData = {
      ...dataToSubmit,
      phone_number: `${country_code} ${formData.phone_number}`
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
    <section id="contact" className="pt-1 md:pt-2 pb-1 md:pb-5 bg-bg relative overflow-hidden transition-all duration-500">
      <div className="absolute inset-0 bg-dot-grid opacity-[0.05] dark:opacity-[0.1]"></div>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Context */}
          <div className="space-y-4 md:space-y-6">
            <div>
              <span className="text-[10px] font-black tracking-[0.4em] text-yellow-600 dark:text-yellow-400 uppercase mb-2 md:mb-3 block">
                INQUIRY HUB
              </span>
              <h2 className="text-3xl md:text-6xl lg:text-7xl font-black italic tracking-tighter text-text leading-[0.95] mb-3 md:mb-4 transition-colors">
                Initiate your<br />Project.
              </h2>
              <p className="text-text/70 text-base md:text-lg font-bold leading-relaxed max-w-md transition-colors">
                We are currently accepting high-impact architectural and digital infrastructure mandates. Provide your project brief to begin the synthesis process.
              </p>
            </div>

            {/* Contact Tiers */}
            <div className="space-y-5 md:space-y-6 pt-6 md:pt-8">
              <div className="flex items-center gap-5 md:gap-6">
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 rounded-xl border border-yellow-500/20 shrink-0">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6 fill-current"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                </div>
                <div>
                  <p className="text-[9px] md:text-[10px] font-black text-yellow-600 dark:text-yellow-500 uppercase tracking-widest mb-0.5">General Enquiries</p>
                  <p className="text-text font-black text-sm md:text-base transition-colors">buildwithsanny7@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-5 md:gap-6">
              </div>
            </div>

          </div>

          {/* Right Column: Form Card */}
          <div className="bg-card backdrop-blur-3xl rounded-[2.5rem] md:rounded-[2.5rem] p-6 sm:p-8 md:p-10 border border-border shadow-2xl shadow-yellow-950/20 transition-colors">
            {submitted ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-20 h-20 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 rounded-full flex items-center justify-center mx-auto border border-yellow-400 animate-pulse">
                  <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                </div>
                <h3 className="text-3xl font-black text-text italic tracking-tighter transition-colors">SYNTHESIS INITIATED</h3>
                <p className="text-text/60 font-medium transition-colors">Your project brief has been securely transmitted. Our architects will contact you shortly.</p>
              </div>
            ) : (
              <form className="space-y-5 md:space-y-6" onSubmit={handleSubmit}>
                {/* Grid 1: Basic Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-8 md:gap-y-5">
                  <div className="space-y-2.5">
                    <label className="text-[9px] md:text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest px-1">Full Name</label>
                    <input 
                      type="text" 
                      name="full_name"
                      required
                      value={formData.full_name}
                      onChange={handleInputChange}
                      placeholder="ALEXANDER VANCE" 
                      className="w-full bg-bg border border-border px-4 md:px-6 py-3.5 md:py-3.5 rounded-xl text-text font-bold focus:ring-yellow-400/20 focus:border-yellow-500 dark:focus:border-yellow-400 outline-none transition-all placeholder:text-text/30 text-sm md:text-sm" 
                    />
                  </div>
                  <div className="space-y-2.5">
                    <label className="text-[9px] md:text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest px-1">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="ALEX@SYNTHESIS.LAB" 
                      className="w-full bg-bg border border-border px-4 md:px-6 py-3.5 md:py-3.5 rounded-xl text-text font-bold focus:ring-yellow-400/20 focus:border-yellow-500 dark:focus:border-yellow-400 outline-none transition-all placeholder:text-text/30 text-sm md:text-sm" 
                    />
                  </div>
                  <div className="space-y-2.5">
                    <label className="text-[9px] md:text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest px-1">Company Name</label>
                    <input 
                      type="text" 
                      name="company_name"
                      value={formData.company_name}
                      onChange={handleInputChange}
                      placeholder="GLOBAL DYNAMICS" 
                      className="w-full bg-bg border border-border px-4 md:px-6 py-3.5 md:py-3.5 rounded-xl text-text font-bold focus:ring-yellow-400/20 focus:border-yellow-500 dark:focus:border-yellow-400 outline-none transition-all placeholder:text-text/30 text-sm md:text-sm" 
                    />
                  </div>
                  <div className="space-y-2.5">
                    <label className="text-[9px] md:text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest px-1">Phone Number</label>
                    <div className="flex gap-2 md:gap-4">
                      <select 
                        name="country_code"
                        value={formData.country_code}
                        onChange={handleInputChange}
                        className="w-20 md:w-24 bg-bg border border-border px-2 py-3.5 md:py-3.5 rounded-xl text-text font-bold focus:ring-2 focus:ring-yellow-400/20 focus:border-yellow-500 dark:focus:border-yellow-400 outline-none transition-all appearance-none cursor-pointer text-center text-xs md:text-sm"
                      >
                        <option value="+1">+1</option>
                        <option value="+91">+91</option>
                        <option value="+44">+44</option>
                        <option value="+61">+61</option>
                        <option value="+81">+81</option>
                        <option value="+49">+49</option>
                        <option value="+33">+33</option>
                        <option value="+971">+971</option>
                      </select>
                      <input 
                        type="text" 
                        name="phone_number"
                        value={formData.phone_number}
                        onChange={handleInputChange}
                        placeholder="000-000-0000" 
                        className="flex-1 bg-bg border border-border px-4 md:px-6 py-3.5 md:py-3.5 rounded-xl text-text font-bold focus:ring-yellow-400/20 focus:border-yellow-500 dark:focus:border-yellow-400 outline-none transition-all placeholder:text-text/30 text-sm md:text-sm" 
                      />
                    </div>
                  </div>
                </div>

                {/* Grid 2: Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-x-8 md:gap-y-5">
                  <div className="space-y-2.5">
                    <label className="text-[9px] md:text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest px-1">Interested In</label>
                    <input 
                      type="text" 
                      name="interested_in"
                      value={formData.interested_in}
                      onChange={handleInputChange}
                      placeholder="E.G. DIGITAL INFRASTRUCTURE" 
                      className="w-full bg-bg border border-border px-4 md:px-6 py-3.5 md:py-3.5 rounded-xl text-text font-bold focus:ring-yellow-400/20 focus:border-yellow-500 dark:focus:border-yellow-400 outline-none transition-all placeholder:text-text/30 uppercase text-sm md:text-sm" 
                    />
                  </div>
                  <div className="space-y-2.5">
                    <label className="text-[9px] md:text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest px-1">Project Budget (USD)</label>
                    <select 
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full bg-bg border border-border px-4 md:px-6 py-3.5 md:py-3.5 rounded-xl text-text font-bold focus:ring-2 focus:ring-yellow-400/20 outline-none appearance-none cursor-pointer text-sm md:text-sm"
                    >
                      <option>$25k - $50k</option>
                      <option>$50k - $100k</option>
                      <option>$100k+</option>
                      <option>Flexible / To Be Discussed</option>
                    </select>
                  </div>
                </div>

                {/* Selection 3: Timeline Pills */}
                <div className="space-y-3">
                  <label className="text-[9px] md:text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest px-1">Project Timeline</label>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {['IMMEDIATE', '1 MONTH', '3 MONTHS', 'EXPLORING'].map(p => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, timeline: p }))}
                        className={`px-5 md:px-6 py-2 md:py-2.5 rounded-xl text-[9px] md:text-[9px] font-black tracking-widest transition-all duration-300 border cursor-pointer ${
                          formData.timeline === p 
                          ? 'bg-yellow-500/10 border-yellow-500 dark:border-yellow-400 text-yellow-600 dark:text-yellow-400 shadow-lg shadow-yellow-400/20' 
                          : 'bg-bg border-border text-text/60 hover:border-text/30'
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2.5">
                  <label className="text-[9px] md:text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest px-1">How can we assist you?</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="3" 
                    placeholder="DESCRIBE YOUR ARCHITECTURAL VISION..." 
                    className="w-full bg-bg border border-border px-5 md:px-6 py-4 md:py-4 rounded-2xl text-text font-medium focus:ring-yellow-400/20 focus:border-yellow-500 dark:focus:border-yellow-400 outline-none transition-all placeholder:text-text/30 text-sm md:text-sm resize-none"
                  ></textarea>
                </div>

                {error && (
                  <p className="text-red-400 text-xs font-bold uppercase tracking-widest text-center">{error}</p>
                )}

                {/* Submit */}
                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full lg:max-w-2xl mx-auto bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 h-14 md:h-16 lg:h-20 px-6 md:px-10 lg:px-12 rounded-2xl font-black uppercase tracking-widest md:tracking-[0.1em] lg:tracking-[0.15em] text-[10px] md:text-sm lg:text-lg shadow-xl shadow-yellow-500/20 hover:shadow-yellow-500/40 hover:-translate-y-1 transition-all active:scale-95 flex items-center justify-between group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 cursor-pointer"
                >
                  {loading ? (
                    <div className="w-6 h-6 border-2 border-slate-900/30 border-t-slate-900 rounded-full animate-spin mx-auto"></div>
                  ) : (
                    <>
                      <span className="flex-1 text-center pr-4 transition-all duration-500 whitespace-nowrap">Talk with me about your ideas</span>
                      <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-slate-900/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-slate-900 group-hover:text-yellow-500 transition-all duration-500">
                        <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 fill-current transition-transform group-hover:translate-x-1">
                          <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"/>
                        </svg>
                      </div>
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

