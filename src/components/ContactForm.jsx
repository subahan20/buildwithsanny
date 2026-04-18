import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    company_name: '',
    phone_number: '',
    country_code: '+1',
    address: '',
    interested_in: '',
    budget: '$5k - $10k',
    timeline: 'IMMEDIATE',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const errors = {};
    const alphabeticRegex = /^[a-zA-Z\s]+$/;
    const phoneRegex = /^\d{10}$/; // exactly 10 digits
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const addressRegex = /^[a-zA-Z0-9\s,.'#-]+$/;

    if (!formData.full_name.trim()) {
      errors.full_name = 'Full Name is required.';
    } else if (!alphabeticRegex.test(formData.full_name)) {
      errors.full_name = 'Full Name must contain only alphabets.';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email Address is required.';
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email address.';
    }

    if (!formData.company_name.trim()) {
      errors.company_name = 'Company Name is required.';
    } else if (!alphabeticRegex.test(formData.company_name)) {
      errors.company_name = 'Company Name must contain only alphabets.';
    }

    if (!formData.phone_number.trim()) {
      errors.phone_number = 'Phone Number is required.';
    } else if (!phoneRegex.test(formData.phone_number)) {
      errors.phone_number = 'Mobile number must be exactly 10 digits without spaces or dashes.';
    }

    if (!formData.address.trim()) {
      errors.address = 'Address is required.';
    } else if (!addressRegex.test(formData.address)) {
      errors.address = 'Address must contain only alphanumeric characters and basic punctuation.';
    }

    if (!formData.interested_in.trim()) {
      errors.interested_in = 'This field is required.';
    } else if (!alphabeticRegex.test(formData.interested_in)) {
      errors.interested_in = 'Must contain only alphabets.';
    }

    if (!formData.message.trim()) {
      errors.message = 'Vision Brief is required.';
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors({});
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setLoading(true);

    // Concatenate country code and phone number, then remove country_code from the payload
    const { country_code, ...dataToSubmit } = formData;
    const submissionData = {
      ...dataToSubmit,
      phone_number: `${country_code} ${formData.phone_number.replace(/\D/g, '')}`
    };

    try {
      const { error: supabaseError } = await supabase
        .from('contact_submissions')
        .insert([submissionData]);

      if (supabaseError) throw supabaseError;

      toast.success('Form successfully submitted!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      // Reset form immediately
      setFormData({
        full_name: '',
        email: '',
        company_name: '',
        phone_number: '',
        country_code: '+1',
        address: '',
        interested_in: '',
        budget: '$5k - $10k',
        timeline: 'IMMEDIATE',
        message: ''
      });
    } catch (err) {
      console.error('Submission error:', err);
      toast.error('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // We remove the surgical sanitize so users can see the error later when they type numbers in alphabetic fields.
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for that field when user typing
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  return (
    <section 
      id="contact" 
      className="py-4 px-4 md:px-4 bg-bg relative overflow-hidden transition-all duration-500"
    >
      <ToastContainer />
      <div className="absolute inset-0 bg-dot-grid opacity-[0.03]"></div>
      <div className="max-w-[1440px] mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-2 lg:gap-12 items-start">
          
          {/* Left Column: Context */}
          <div className="space-y-8 text-center lg:text-left">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-yellow-500 mb-2 block">
                INQUIRY HUB
              </span>
              <h2 className="text-[27px] md:text-[45px] lg:text-[60px] font-black text-text tracking-tighter leading-[1.1] mb-6 transition-colors">
                Initiate your <span className="text-yellow-500 italic">Project.</span>
              </h2>
              <p className="text-text/50 text-[13px] md:text-[16px] xl:text-[18px] font-bold leading-relaxed max-w-md mx-auto lg:mx-0 transition-colors">
                We are currently accepting high-impact architectural mandates. Provide your project brief to begin the synthesis process.
              </p>
            </div>

            {/* Contact Tiers */}
            <div className="hidden md:block space-y-6 pt-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 rounded-lg border border-yellow-500/20 shrink-0">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                </div>
                <div className='flex flex-col justify-start items-start'>
                  <p className="text-[9px] font-black text-yellow-600 dark:text-yellow-500 uppercase tracking-widest mb-0.5">General Enquiries</p>
                  <p className="text-text font-bold text-xs md:text-sm transition-colors">buildwithsanny7@gmail.com</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Form Card */}
          <div className="bg-card rounded-[2.5rem] p-5 sm:p-8 md:p-9 border border-border/5 shadow-2xl transition-all">
              <form className="space-y-2.5" onSubmit={handleSubmit} noValidate>
                {/* Grid 1: Basic Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  <div className="space-y-1.5 relative">
                    <label className="text-[9px] md:text-[12px] font-black text-text uppercase tracking-widest px-1 opacity-80">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      name="full_name"
                      value={formData.full_name}
                      onChange={handleInputChange}
                      placeholder="ALEXANDER VANCE" 
                      className={`w-full bg-bg border ${formErrors.full_name ? 'border-red-500 focus:border-red-500' : 'border-border/20 focus:border-yellow-500'} px-4 py-3 rounded-xl text-text font-bold transition-all placeholder:text-text/30 text-xs outline-none`} 
                    />
                    {formErrors.full_name && <p className="text-red-500 text-[10px] font-bold px-1 mt-0.5">{formErrors.full_name}</p>}
                  </div>
                  <div className="space-y-1.5 relative">
                    <label className="text-[9px] md:text-[12px] font-black text-text uppercase tracking-widest px-1 opacity-80">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="ALEX@SYNTHESIS.LAB" 
                      className={`w-full bg-bg border ${formErrors.email ? 'border-red-500 focus:border-red-500' : 'border-border/20 focus:border-yellow-500'} px-4 py-3 rounded-xl text-text font-bold transition-all placeholder:text-text/30 text-xs outline-none`} 
                    />
                    {formErrors.email && <p className="text-red-500 text-[10px] font-bold px-1 mt-0.5">{formErrors.email}</p>}
                  </div>
                  <div className="space-y-1.5 relative">
                    <label className="text-[9px] md:text-[12px] font-black text-text uppercase tracking-widest px-1 opacity-80">
                      Company Name <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      name="company_name"
                      value={formData.company_name}
                      onChange={handleInputChange}
                      placeholder="GLOBAL DYNAMICS" 
                      className={`w-full bg-bg border ${formErrors.company_name ? 'border-red-500 focus:border-red-500' : 'border-border/20 focus:border-yellow-500'} px-4 py-3 rounded-xl text-text font-bold transition-all placeholder:text-text/30 text-xs outline-none`} 
                    />
                    {formErrors.company_name && <p className="text-red-500 text-[10px] font-bold px-1 mt-0.5">{formErrors.company_name}</p>}
                  </div>
                  <div className="space-y-1.5 relative">
                    <label className="text-[9px] md:text-[12px] font-black text-text uppercase tracking-widest px-1 opacity-80">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-2">
                      <select 
                        name="country_code"
                        value={formData.country_code}
                        onChange={handleInputChange}
                        className="w-16 md:w-20 bg-bg border border-border/20 px-2 py-3 rounded-xl text-text font-bold focus:border-yellow-500 transition-all appearance-none cursor-pointer text-center text-xs outline-none"
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
                        className={`flex-1 bg-bg border ${formErrors.phone_number ? 'border-red-500 focus:border-red-500' : 'border-border/20 focus:border-yellow-500'} px-4 py-3 rounded-xl text-text font-bold transition-all placeholder:text-text/30 text-xs outline-none`} 
                      />
                    </div>
                    {formErrors.phone_number && <p className="text-red-500 text-[10px] font-bold px-1 mt-0.5">{formErrors.phone_number}</p>}
                  </div>
                </div>

                {/* Address Field: Full Width */}
                <div className="space-y-1.5 relative mt-2">
                  <label className="text-[9px] md:text-[12px] font-black text-text uppercase tracking-widest px-1 opacity-80">
                    Address <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="123 INNOVATION BLVD, SUITE 400..." 
                    className={`w-full bg-bg border ${formErrors.address ? 'border-red-500 focus:border-red-500' : 'border-border/20 focus:border-yellow-500'} px-4 py-3 rounded-xl text-text font-bold transition-all placeholder:text-text/30 text-xs outline-none`} 
                  />
                  {formErrors.address && <p className="text-red-500 text-[10px] font-bold px-1 mt-0.5">{formErrors.address}</p>}
                </div>

                {/* Grid 2: Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 mt-2">
                   <div className="space-y-1.5 relative">
                    <label className="text-[9px] md:text-[12px] font-black text-text uppercase tracking-widest px-1 opacity-80">
                      What do you want to build? <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      name="interested_in"
                      value={formData.interested_in}
                      onChange={handleInputChange}
                      placeholder="E.G. DIGITAL INFRASTRUCTURE" 
                      className={`w-full bg-bg border ${formErrors.interested_in ? 'border-red-500 focus:border-red-500' : 'border-border/20 focus:border-yellow-500'} px-4 py-3 rounded-xl text-text font-bold transition-all placeholder:text-text/30 uppercase text-xs outline-none`} 
                    />
                    {formErrors.interested_in && <p className="text-red-500 text-[10px] font-bold px-1 mt-0.5">{formErrors.interested_in}</p>}
                  </div>
                  <div className="space-y-1.5 relative">
                    <label className="text-[9px] md:text-[12px] font-black text-text uppercase tracking-widest px-1 opacity-80">
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
                <div className="space-y-1.5 mt-2">
                  <label className="text-[10px] md:text-[12px] font-black text-text uppercase tracking-widest px-1 opacity-80">
                    Project Timeline <span className="text-red-500">*</span>
                  </label>
                  <div className="flex flex-nowrap gap-2 overflow-x-auto pb-2 no-scrollbar">
                    {['IMMEDIATE', '1 MONTH', '3 MONTHS', 'EXPLORING'].map(p => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, timeline: p }))}
                        className={`px-4 py-1.5 rounded-lg text-[12px] md:text-[12px] font-black tracking-[0.2em] uppercase transition-all duration-300 border cursor-pointer whitespace-nowrap ${
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
                <div className="space-y-1.5 relative mt-2">
                  <label className="text-[9px] md:text-[12px] font-black text-text uppercase tracking-widest px-1 opacity-80">
                    Vision Brief <span className="text-red-500">*</span>
                  </label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="2" 
                    placeholder="DESCRIBE YOUR VISION..." 
                    className={`w-full bg-bg border ${formErrors.message ? 'border-red-500 focus:border-red-500' : 'border-border/20 focus:border-yellow-500'} px-4 py-3 rounded-xl text-text font-medium transition-all placeholder:text-text/30 text-xs resize-none outline-none`}
                  ></textarea>
                  {formErrors.message && <p className="text-red-500 text-[10px] font-bold px-1 mt-0.5">{formErrors.message}</p>}
                </div>

                {/* Submit */}
                <div className="mt-4">
                  <button 
                    type="submit"
                    disabled={loading}
                    className="w-full md:w-[380px] mx-auto block bg-yellow-500 text-slate-900 h-14 rounded-full font-black uppercase tracking-[0.2em] text-[12px] md:text-sm shadow-2xl shadow-yellow-500/30 hover:scale-[1.02] transition-all active:scale-95 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-slate-900/30 border-t-slate-900 rounded-full animate-spin"></div>
                    ) : (
                      <span>Talk with me about your ideas</span>
                    )}
                  </button>
                </div>
              </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
