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
    budget: '$5k - $10k',
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

    // Final audit before submission
    if (formData.phone_number.length !== 10) {
      setError('Mobile number must be exactly 10 digits.');
      setLoading(false);
      return;
    }

    const alphabeticRegex = /^[a-zA-Z\s]+$/;
    if (!alphabeticRegex.test(formData.full_name)) {
      setError('Full Name must contain only alphabets.');
      setLoading(false);
      return;
    }

    if (!alphabeticRegex.test(formData.company_name)) {
      setError('Company Name must contain only alphabets.');
      setLoading(false);
      return;
    }

    if (!alphabeticRegex.test(formData.interested_in)) {
      setError('The "What do you want to build" field must contain only alphabets.');
      setLoading(false);
      return;
    }

    if (!alphabeticRegex.test(formData.message)) {
      setError('Vision Brief must contain only alphabets.');
      setLoading(false);
      return;
    }

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
          budget: '$5k - $10k',
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
    
    // Surgical real-time validation
    let sanitizedValue = value;
    
    if (name === 'phone_number') {
      // Remove all non-digits and hard-limit to 10 characters
      sanitizedValue = value.replace(/\D/g, '').slice(0, 10);
    } else if (['full_name', 'company_name', 'interested_in', 'message'].includes(name)) {
      // Remove all non-alphabetic characters (allowing spaces)
      sanitizedValue = value.replace(/[^a-zA-Z\s]/g, '');
    }

    setFormData(prev => ({ ...prev, [name]: sanitizedValue }));
  };

  return (
    <section 
      id="contact" 
      className="py-4 px-4 md:px-8 bg-bg relative overflow-hidden transition-all duration-500"
    >
      <div className="absolute inset-0 bg-dot-grid opacity-[0.03]"></div>
      <div className="max-w-[1440px] mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-2 lg:gap-12 items-start">
          
          {/* Left Column: Context */}
          <div className="space-y-8 text-center lg:text-left">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-yellow-500 mb-2 block">
                INQUIRY HUB
              </span>
              <h2 className="text-[26px] font-black text-text tracking-tighter leading-none mb-6 transition-colors">
                Initiate your <span className="text-yellow-500 italic">Project.</span>
              </h2>
              <p className="text-text/50 text-[13px] md:text-sm font-bold leading-relaxed max-w-md mx-auto lg:mx-0 transition-colors">
                We are currently accepting high-impact architectural mandates. Provide your project brief to begin the synthesis process.
              </p>
            </div>

            {/* Contact Tiers */}
            <div className="hidden md:block space-y-6 pt-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 rounded-lg border border-yellow-500/20 shrink-0">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                </div>
                <div>
                  <p className="text-[9px] font-black text-yellow-600 dark:text-yellow-500 uppercase tracking-widest mb-0.5">General Enquiries</p>
                  <p className="text-text font-bold text-xs md:text-sm transition-colors">buildwithsanny7@gmail.com</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Form Card */}
          <div className="bg-card rounded-[2.5rem] p-5 sm:p-8 md:p-9 border border-border/5 shadow-2xl transition-all">
            {submitted ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-20 h-20 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 rounded-full flex items-center justify-center mx-auto border border-yellow-400 animate-pulse">
                  <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                </div>
                <h3 className="text-3xl font-black text-text italic tracking-tighter transition-colors">SYNTHESIS INITIATED</h3>
                <p className="text-text/60 font-medium transition-colors">Your project brief has been securely transmitted. Our architects will contact you shortly.</p>
              </div>
            ) : (
              <form className="space-y-2.5" onSubmit={handleSubmit}>
                {/* Grid 1: Basic Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black text-text uppercase tracking-widest px-1 opacity-80">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      name="full_name"
                      required
                      value={formData.full_name}
                      onChange={handleInputChange}
                      placeholder="ALEXANDER VANCE" 
                      className="w-full bg-bg border border-border/20 px-4 py-3 rounded-xl text-text font-bold focus:border-yellow-500 transition-all placeholder:text-text/30 text-xs" 
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black text-text uppercase tracking-widest px-1 opacity-80">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="ALEX@SYNTHESIS.LAB" 
                      className="w-full bg-bg border border-border/20 px-4 py-3 rounded-xl text-text font-bold focus:border-yellow-500 transition-all placeholder:text-text/30 text-xs" 
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black text-text uppercase tracking-widest px-1 opacity-80">
                      Company Name <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      name="company_name"
                      value={formData.company_name}
                      onChange={handleInputChange}
                      placeholder="GLOBAL DYNAMICS" 
                      required
                      className="w-full bg-bg border border-border/20 px-4 py-3 rounded-xl text-text font-bold focus:border-yellow-500 transition-all placeholder:text-text/30 text-xs" 
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black text-text uppercase tracking-widest px-1 opacity-80">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-2">
                      <select 
                        name="country_code"
                        value={formData.country_code}
                        onChange={handleInputChange}
                        className="w-16 md:w-20 bg-bg border border-border/20 px-2 py-3 rounded-xl text-text font-bold focus:border-yellow-500 transition-all appearance-none cursor-pointer text-center text-xs"
                      >
                        <option value="+1">+1 (US)</option>
                        <option value="+91">+91 (IN)</option>
                        <option value="+44">+44 (UK)</option>
                        <option value="+61">+61 (AU)</option>
                        <option value="+49">+49 (DE)</option>
                        <option value="+33">+33 (FR)</option>
                      </select>
                      <input 
                        type="text" 
                        name="phone_number"
                        value={formData.phone_number}
                        onChange={handleInputChange}
                        placeholder="000-000-0000" 
                        required
                        className="flex-1 bg-bg border border-border/20 px-4 py-3 rounded-xl text-text font-bold focus:border-yellow-500 transition-all placeholder:text-text/30 text-xs" 
                      />
                    </div>
                  </div>
                </div>

                {/* Grid 2: Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                   <div className="space-y-1.5">
                    <label className="text-[9px] font-black text-text uppercase tracking-widest px-1 opacity-80">
                      What do you want to build? <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      name="interested_in"
                      value={formData.interested_in}
                      onChange={handleInputChange}
                      placeholder="E.G. DIGITAL INFRASTRUCTURE" 
                      required
                      className="w-full bg-bg border border-border/20 px-4 py-3 rounded-xl text-text font-bold focus:border-yellow-500 transition-all placeholder:text-text/30 uppercase text-xs" 
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black text-text uppercase tracking-widest px-1 opacity-80">
                      Budget (USD) <span className="text-red-500">*</span>
                    </label>
                    <select 
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full bg-bg border border-border/20 px-4 py-3 rounded-xl text-text font-bold focus:border-yellow-500 outline-none appearance-none cursor-pointer text-xs"
                    >
                      <option>$5k - $10k</option>
                      <option>$10k - $15k</option>
                      <option>$15k - $25k</option>
                      <option>$25k+</option>
                    </select>
                  </div>
                </div>

                {/* Selection 3: Timeline Pills */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-text uppercase tracking-widest px-1 opacity-80">
                    Project Timeline <span className="text-red-500">*</span>
                  </label>
                  <div className="flex flex-nowrap gap-2 overflow-x-auto pb-2 no-scrollbar">
                    {['IMMEDIATE', '1 MONTH', '3 MONTHS', 'EXPLORING'].map(p => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, timeline: p }))}
                        className={`px-4 py-1.5 rounded-lg text-[10px] font-black tracking-[0.2em] uppercase transition-all duration-300 border cursor-pointer whitespace-nowrap ${
                          formData.timeline === p 
                          ? 'bg-yellow-500/10 border-yellow-500 text-yellow-500' 
                          : 'bg-bg border-border/10 text-text/40 hover:border-border/20'
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-[9px] font-black text-text uppercase tracking-widest px-1 opacity-80">
                    Vision Brief <span className="text-red-500">*</span>
                  </label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="2" 
                    placeholder="DESCRIBE YOUR VISION..." 
                    required
                    className="w-full bg-bg border border-border/20 px-4 py-3 rounded-xl text-text font-medium focus:border-yellow-500 transition-all placeholder:text-text/30 text-xs resize-none"
                  ></textarea>
                </div>

                {error && (
                  <p className="text-red-400 text-xs font-bold uppercase tracking-widest text-center">{error}</p>
                )}

                {/* Submit */}
                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full md:w-[260px] mx-auto block bg-yellow-500 text-slate-900 h-14 rounded-full font-black uppercase tracking-[0.2em] text-[9px] md:text-sm shadow-2xl shadow-yellow-500/30 hover:scale-[1.02] transition-all active:scale-95 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-slate-900/30 border-t-slate-900 rounded-full animate-spin"></div>
                  ) : (
                    <span>Talk with me about your ideas</span>
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

