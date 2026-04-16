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
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section 
      id="contact" 
      className="py-8 px-4 md:px-8 bg-bg relative overflow-hidden transition-all duration-500"
    >
      <div className="absolute inset-0 bg-dot-grid opacity-[0.05] dark:opacity-[0.1]"></div>
      <div className="max-w-[1440px] mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-2 lg:gap-12 items-start">
          
          {/* Left Column: Context */}
          <div className="space-y-12">
            <div>
              <span className="text-[9px] font-black tracking-[0.4em] text-yellow-600 dark:text-yellow-400 uppercase mb-0.5 block">
                INQUIRY HUB
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black italic tracking-tighter text-text leading-tight mb-6 transition-colors">
                Initiate your<br />Project.
              </h2>
              <p className="text-text/70 text-[13px] md:text-sm font-bold leading-relaxed max-w-md transition-colors">
                We are currently accepting high-impact architectural mandates. Provide your project brief to begin the synthesis process.
              </p>
            </div>

            {/* Contact Tiers */}
            <div className="space-y-6 pt-2">
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
          <div className="bg-card backdrop-blur-3xl rounded-[1.5rem] p-4 sm:p-5 md:p-6 border border-border shadow-2xl shadow-yellow-950/20 transition-colors">
            {submitted ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-20 h-20 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 rounded-full flex items-center justify-center mx-auto border border-yellow-400 animate-pulse">
                  <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                </div>
                <h3 className="text-3xl font-black text-text italic tracking-tighter transition-colors">SYNTHESIS INITIATED</h3>
                <p className="text-text/60 font-medium transition-colors">Your project brief has been securely transmitted. Our architects will contact you shortly.</p>
              </div>
            ) : (
              <form className="space-y-2.5 md:space-y-3.5" onSubmit={handleSubmit}>
                {/* Grid 1: Basic Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-8 md:gap-y-5">
                  <div className="space-y-1.5">
                    <label className="text-[8px] md:text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest px-1">Full Name</label>
                    <input 
                      type="text" 
                      name="full_name"
                      required
                      value={formData.full_name}
                      onChange={handleInputChange}
                      placeholder="ALEXANDER VANCE" 
                      className="w-full bg-bg border border-border px-4 py-2.5 md:py-2.5 rounded-lg text-text font-bold focus:ring-yellow-400/20 focus:border-yellow-500 dark:focus:border-yellow-400 outline-none transition-all placeholder:text-text/30 text-xs md:text-xs" 
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[8px] md:text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest px-1">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="ALEX@SYNTHESIS.LAB" 
                      className="w-full bg-bg border border-border px-4 py-2.5 md:py-2.5 rounded-lg text-text font-bold focus:ring-yellow-400/20 focus:border-yellow-500 dark:focus:border-yellow-400 outline-none transition-all placeholder:text-text/30 text-xs md:text-xs" 
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[8px] md:text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest px-1">Company Name</label>
                    <input 
                      type="text" 
                      name="company_name"
                      value={formData.company_name}
                      onChange={handleInputChange}
                      placeholder="GLOBAL DYNAMICS" 
                      className="w-full bg-bg border border-border px-4 py-2.5 md:py-2.5 rounded-lg text-text font-bold focus:ring-yellow-400/20 focus:border-yellow-500 dark:focus:border-yellow-400 outline-none transition-all placeholder:text-text/30 text-xs md:text-xs" 
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[8px] md:text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest px-1">Phone Number</label>
                    <div className="flex gap-2">
                      <select 
                        name="country_code"
                        value={formData.country_code}
                        onChange={handleInputChange}
                        className="w-16 md:w-20 bg-bg border border-border px-2 py-2.5 md:py-2.5 rounded-lg text-text font-bold focus:ring-2 focus:ring-yellow-400/20 focus:border-yellow-500 dark:focus:border-yellow-400 outline-none transition-all appearance-none cursor-pointer text-center text-[10px] md:text-xs"
                      >
                        <option value="+1">+1 (US)</option>
                        <option value="+91">+91 (IN)</option>
                        <option value="+44">+44 (UK)</option>
                        <option value="+61">+61 (AU)</option>
                        <option value="+1">+1 (CA)</option>
                        <option value="+49">+49 (DE)</option>
                        <option value="+33">+33 (FR)</option>
                        <option value="+81">+81 (JP)</option>
                        <option value="+86">+86 (CN)</option>
                        <option value="+55">+55 (BR)</option>
                        <option value="+52">+52 (MX)</option>
                        <option value="+7">+7 (RU)</option>
                        <option value="+34">+34 (ES)</option>
                        <option value="+39">+39 (IT)</option>
                        <option value="+82">+82 (KR)</option>
                        <option value="+65">+65 (SG)</option>
                        <option value="+971">+971 (AE)</option>
                        <option value="+966">+966 (SA)</option>
                        <option value="+27">+27 (ZA)</option>
                        <option value="+234">+234 (NG)</option>
                        <option value="+20">+20 (EG)</option>
                        <option value="+54">+54 (AR)</option>
                        <option value="+64">+64 (NZ)</option>
                        <option value="+41">+41 (CH)</option>
                        <option value="+31">+31 (NL)</option>
                        <option value="+46">+46 (SE)</option>
                        <option value="+47">+47 (NO)</option>
                        <option value="+45">+45 (DK)</option>
                        <option value="+358">+358 (FI)</option>
                        <option value="+353">+353 (IE)</option>
                        <option value="+32">+32 (BE)</option>
                        <option value="+43">+43 (AT)</option>
                        <option value="+351">+351 (PT)</option>
                        <option value="+30">+30 (GR)</option>
                        <option value="+972">+972 (IL)</option>
                        <option value="+60">+60 (MY)</option>
                        <option value="+66">+66 (TH)</option>
                        <option value="+84">+84 (VN)</option>
                        <option value="+63">+63 (PH)</option>
                        <option value="+62">+62 (ID)</option>
                        <option value="+90">+90 (TR)</option>
                        <option value="+420">+420 (CZ)</option>
                        <option value="+48">+48 (PL)</option>
                        <option value="+36">+36 (HU)</option>
                        <option value="+40">+40 (RO)</option>
                        <option value="+359">+359 (BG)</option>
                        <option value="+385">+385 (HR)</option>
                        <option value="+380">+380 (UA)</option>
                        <option value="+7">+7 (KZ)</option>
                        <option value="+998">+998 (UZ)</option>
                        <option value="+92">+92 (PK)</option>
                        <option value="+880">+880 (BD)</option>
                        <option value="+94">+94 (LK)</option>
                        <option value="+977">+977 (NP)</option>
                        <option value="+254">+254 (KE)</option>
                        <option value="+251">+251 (ET)</option>
                        <option value="+233">+233 (GH)</option>
                        <option value="+212">+212 (MA)</option>
                        <option value="+213">+213 (DZ)</option>
                        <option value="+216">+216 (TN)</option>
                        <option value="+255">+255 (TZ)</option>
                        <option value="+256">+256 (UG)</option>
                        <option value="+263">+263 (ZW)</option>
                        <option value="+260">+260 (ZM)</option>
                        <option value="+244">+244 (AO)</option>
                        <option value="+225">+225 (CI)</option>
                        <option value="+221">+221 (SN)</option>
                        <option value="+237">+237 (CM)</option>
                        <option value="+241">+241 (GA)</option>
                        <option value="+242">+242 (CG)</option>
                        <option value="+250">+250 (RW)</option>
                        <option value="+264">+264 (NA)</option>
                        <option value="+267">+267 (BW)</option>
                        <option value="+230">+230 (MU)</option>
                        <option value="+248">+248 (SC)</option>
                      </select>
                      <input 
                        type="text" 
                        name="phone_number"
                        value={formData.phone_number}
                        onChange={handleInputChange}
                        placeholder="000-000-0000" 
                        className="flex-1 bg-bg border border-border px-4 py-2.5 md:py-2.5 rounded-lg text-text font-bold focus:ring-yellow-400/20 focus:border-yellow-500 dark:focus:border-yellow-400 outline-none transition-all placeholder:text-text/30 text-xs md:text-xs" 
                      />
                    </div>
                  </div>
                </div>

                {/* Grid 2: Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 md:gap-x-8 md:gap-y-3.5">
                   <div className="space-y-1.5">
                    <label className="text-[8px] md:text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest px-1">Interested In</label>
                    <input 
                      type="text" 
                      name="interested_in"
                      value={formData.interested_in}
                      onChange={handleInputChange}
                      placeholder="E.G. DIGITAL INFRASTRUCTURE" 
                      className="w-full bg-bg border border-border px-4 py-2.5 md:py-2.5 rounded-lg text-text font-bold focus:ring-yellow-400/20 focus:border-yellow-500 dark:focus:border-yellow-400 outline-none transition-all placeholder:text-text/30 uppercase text-xs md:text-xs" 
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[8px] md:text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest px-1">Budget (USD)</label>
                    <select 
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full bg-bg border border-border px-4 py-2.5 md:py-2.5 rounded-lg text-text font-bold focus:ring-2 focus:ring-yellow-400/20 outline-none appearance-none cursor-pointer text-xs md:text-xs"
                    >
                      <option>$5k - $10k</option>
                      <option>$10k - $15k</option>
                      <option>$15k - $25k</option>
                      <option>$25k+</option>
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
                <div className="space-y-1.5">
                  <label className="text-[8px] md:text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest px-1">Vision Brief</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="2" 
                    placeholder="DESCRIBE YOUR VISION..." 
                    className="w-full bg-bg border border-border px-4 py-3 rounded-xl text-text font-medium focus:ring-yellow-400/20 focus:border-yellow-500 dark:focus:border-yellow-400 outline-none transition-all placeholder:text-text/30 text-xs md:text-xs resize-none"
                  ></textarea>
                </div>

                {error && (
                  <p className="text-red-400 text-xs font-bold uppercase tracking-widest text-center">{error}</p>
                )}

                {/* Submit */}
                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 h-12 md:h-14 px-6 md:px-8 rounded-xl font-black uppercase tracking-widest md:tracking-[0.1em] text-[9px] md:text-xs shadow-xl shadow-yellow-500/20 hover:shadow-yellow-500/40 hover:-translate-y-1 transition-all active:scale-95 flex items-center justify-between group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 cursor-pointer"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-slate-900/30 border-t-slate-900 rounded-full animate-spin mx-auto"></div>
                  ) : (
                    <>
                      <span className="flex-1 text-center pr-4 transition-all duration-500 whitespace-nowrap">talk with me about your ideas</span>
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-slate-900/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-slate-900 group-hover:text-yellow-500 transition-all duration-500">
                        <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6 fill-current transition-transform group-hover:translate-x-1">
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

