import React, { useState, useRef, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const countryCodesList = [
  { code: '+1', label: 'US' },
  { code: '+7', label: 'RU' },
  { code: '+20', label: 'EG' },
  { code: '+27', label: 'ZA' },
  { code: '+30', label: 'GR' },
  { code: '+31', label: 'NL' },
  { code: '+32', label: 'BE' },
  { code: '+33', label: 'FR' },
  { code: '+34', label: 'ES' },
  { code: '+36', label: 'HU' },
  { code: '+39', label: 'IT' },
  { code: '+40', label: 'RO' },
  { code: '+41', label: 'CH' },
  { code: '+43', label: 'AT' },
  { code: '+44', label: 'UK' },
  { code: '+45', label: 'DK' },
  { code: '+46', label: 'SE' },
  { code: '+47', label: 'NO' },
  { code: '+48', label: 'PL' },
  { code: '+49', label: 'DE' },
  { code: '+51', label: 'PE' },
  { code: '+52', label: 'MX' },
  { code: '+53', label: 'CU' },
  { code: '+54', label: 'AR' },
  { code: '+55', label: 'BR' },
  { code: '+56', label: 'CL' },
  { code: '+57', label: 'CO' },
  { code: '+58', label: 'VE' },
  { code: '+60', label: 'MY' },
  { code: '+61', label: 'AU' },
  { code: '+62', label: 'ID' },
  { code: '+63', label: 'PH' },
  { code: '+64', label: 'NZ' },
  { code: '+65', label: 'SG' },
  { code: '+66', label: 'TH' },
  { code: '+81', label: 'JP' },
  { code: '+82', label: 'KR' },
  { code: '+84', label: 'VN' },
  { code: '+86', label: 'CN' },
  { code: '+90', label: 'TR' },
  { code: '+91', label: 'IN' },
  { code: '+92', label: 'PK' },
  { code: '+93', label: 'AF' },
  { code: '+94', label: 'LK' },
  { code: '+95', label: 'MM' },
  { code: '+98', label: 'IR' },
  { code: '+212', label: 'MA' },
  { code: '+213', label: 'DZ' },
  { code: '+216', label: 'TN' },
  { code: '+218', label: 'LY' },
  { code: '+220', label: 'GM' },
  { code: '+221', label: 'SN' },
  { code: '+222', label: 'MR' },
  { code: '+223', label: 'ML' },
  { code: '+224', label: 'GN' },
  { code: '+225', label: 'CI' },
  { code: '+226', label: 'BF' },
  { code: '+227', label: 'NE' },
  { code: '+228', label: 'TG' },
  { code: '+229', label: 'BJ' },
  { code: '+230', label: 'MU' },
  { code: '+231', label: 'LR' },
  { code: '+232', label: 'SL' },
  { code: '+233', label: 'GH' },
  { code: '+234', label: 'NG' },
  { code: '+254', label: 'KE' },
  { code: '+255', label: 'TZ' },
  { code: '+256', label: 'UG' },
  { code: '+260', label: 'ZM' },
  { code: '+263', label: 'ZW' },
  { code: '+351', label: 'PT' },
  { code: '+353', label: 'IE' },
  { code: '+354', label: 'IS' },
  { code: '+358', label: 'FI' },
  { code: '+375', label: 'BY' },
  { code: '+380', label: 'UA' },
  { code: '+381', label: 'RS' },
  { code: '+385', label: 'HR' },
  { code: '+420', label: 'CZ' },
  { code: '+421', label: 'SK' },
  { code: '+880', label: 'BD' },
  { code: '+966', label: 'SA' },
  { code: '+971', label: 'AE' },
  { code: '+972', label: 'IL' }
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    company_name: '',
    phone_number: '',
    country_code: '+91',
    alt_phone_number: '',
    alt_country_code: '+91',
    address: '',
    city: '',
    country: '',
    interested_in: '',
    budget: '$5k - $10k',
    timeline: 'IMMEDIATE',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Searchable Country Code State
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [isAltCountryDropdownOpen, setIsAltCountryDropdownOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState('');
  const [altCountrySearch, setAltCountrySearch] = useState('');
  
  const countryRef = useRef(null);
  const altCountryRef = useRef(null);

  // Click outside detection
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (countryRef.current && !countryRef.current.contains(event.target)) {
        setIsCountryDropdownOpen(false);
      }
      if (altCountryRef.current && !altCountryRef.current.contains(event.target)) {
        setIsAltCountryDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredCountryCodes = countryCodesList.filter(c => 
    c.code.includes(countrySearch) || 
    c.label.toLowerCase().includes(countrySearch.toLowerCase())
  );

  const filteredAltCountryCodes = countryCodesList.filter(c => 
    c.code.includes(altCountrySearch) || 
    c.label.toLowerCase().includes(altCountrySearch.toLowerCase())
  );

  const validateForm = () => {
    const {
      full_name, email, company_name, phone_number,
      alt_phone_number, address, city, country,
      interested_in, message
    } = formData;

    const errors = {};
    const alphabeticRegex = /^[a-zA-Z\s.'-]+$/;
    const phoneRegex = /^\d{10}$/; // exactly 10 digits
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const addressRegex = /^[a-zA-Z0-9\s,.'#-]+$/;

    // Helper: Detect repetitive, sequential, or gibberish junk
    const getJunkRejectionReason = (str) => {
      if (!str) return { isValid: true };
      const cleaned = str.toLowerCase().trim().replace(/[^a-z]/g, '');
      if (!cleaned || cleaned.length < 2) return { isValid: true };

      // Trusted short names/acronyms/abbreviations
      const trustedShorts = ['tcs', 'ibm', 'hcl', 'hp', 'it', 'ai', 'ui', 'ux', 'ml', 'dev', 'saas', 'crm', 'erp', 'lms', 'app', 'web', 'kphb', 'dr', 'st', 'rd', 'hno', 'plot'];
      if (trustedShorts.includes(cleaned)) return { isValid: true };
      
      // 1. Repetitive characters
      if (/(.)\1{2,}/.test(cleaned)) return { isValid: false, reason: 'Please avoid using too many repeating characters.' };
      
      // 2. Keyboard patterns & Greetings
      const patterns = [
        'abc', 'xyz', 'asdf', 'qwerty', 'ghjkl', 'test', 'demo', 'user', 'none', 
        'qwer', 'zxcv', 'fghj', 'sdfg', 'dfgh', 'hjkl', 'tyui', 'uiop', 'bnm',
        'jkl', 'xcv', 'vbn', 'ert', 'rty', 'asd', 'fgh', 'qaz', 'wsx', 'edc', 
        'rfv', 'tgb', 'yhn', 'ujm', 'ik', 'ol', 'hii', 'hello', 'hey', 'hola'
      ];
      if (patterns.some(p => cleaned === p)) return { isValid: false, reason: 'Please enter a valid word instead of a greeting or placeholder.' };
      if (patterns.some(p => p.length >= 3 && cleaned.length < 12 && cleaned.includes(p))) return { isValid: false, reason: 'Please ensure you are entering a meaningful word.' };
      
      // 3. Adjacency & Repeat Ratio
      if (cleaned.length >= 4) {
        const adjPairs = [
          'qw','we','er','rt','ty','yu','ui','io','op',
          'as','sd','df','fg','gh','hj','jk','kl',
          'zx','xc','cv','vb','bn','nm',
          'aq','sw','de','fr','gt','hy','ju','ki','lo',
          'za','xs','cd','vf','bg','nh','mj'
        ];
        let adjCount = 0;
        for (let i = 0; i < cleaned.length - 1; i++) {
          const pair = cleaned[i] + cleaned[i+1];
          const revPair = cleaned[i+1] + cleaned[i];
          if (adjPairs.includes(pair) || adjPairs.includes(revPair) || cleaned[i] === cleaned[i+1]) {
            adjCount++;
          }
        }
        if (adjCount / (cleaned.length - 1) > 0.85) return { isValid: false, reason: 'Please ensure you have entered a proper name or word.' };
      }

      if (cleaned.length >= 3) {
        // 4. Vowel & Consonant Heuristics
        const vowels = cleaned.match(/[aeiouy]/g) || [];
        const vowelRatio = vowels.length / cleaned.length;
        
        if (vowelRatio < 0.15 && !trustedShorts.includes(cleaned)) return { isValid: false, reason: 'Please check the spelling of your entry.' };
        if (vowelRatio > 0.90) return { isValid: false, reason: 'Please provide a valid name or word.' };

        // 5. Cluster checks
        if (/[aeiouy]{4,}/.test(cleaned)) return { isValid: false, reason: 'Please provide a valid and readable word.' };
        // Relaxed consonant cluster limit for addresses/abbreviations
        if (/[bcdfghjklmnpqrstvwxz]{6,}/.test(cleaned)) return { isValid: false, reason: 'Please ensure the spelling of your entry is correct.' };

        // 6. Specific rare combinations
        const rareBigrams = ['qj', 'qx', 'qk', 'qz', 'qv', 'qp', 'qm', 'vj', 'vx', 'vk', 'vq', 'vw', 'jk', 'jx', 'jq', 'jv', 'jf', 'jg', 'jh', 'jz'];
        if (rareBigrams.some(p => cleaned.includes(p))) return { isValid: false, reason: 'Please enter a valid and professional name.' };
      }

      if (cleaned.length > 5) {
        // 7. Character Diversity
        const uniqueChars = new Set(cleaned).size;
        const diversityRatio = uniqueChars / cleaned.length;
        if (diversityRatio < 0.40) return { isValid: false, reason: 'Please provide a more unique and descriptive entry.' };
      }
      
      return { isValid: true };
    };

    // Helper: Detect suspicious phone patterns
    const isFakePhone = (str) => {
      if (!str) return false;
      const digits = str.replace(/\D/g, '');
      if (digits.length < 10) return false;
      // Repetitive (0000000000) or sequential (1234567890)
      if (/^(.)\1{9}$/.test(digits)) return true;
      if (/0123456789|1234567890|9876543210/.test(digits)) return true;
      return false;
    };

    const trimmedFullName = (full_name || '').trim();
    if (!trimmedFullName) {
      errors.full_name = 'Please provide your full name.';
    } else if (trimmedFullName.length < 3) {
      errors.full_name = 'Please enter a name with at least 3 characters.';
    } else if (!alphabeticRegex.test(trimmedFullName)) {
      errors.full_name = 'Please use only alphabetic characters for your name.';
    } else {
      const words = trimmedFullName.split(' ');
      for (const word of words) {
        const check = getJunkRejectionReason(word);
        if (!check.isValid) {
          errors.full_name = check.reason;
          break;
        }
      }
    }

    const trimmedEmail = (email || '').trim();
    if (!trimmedEmail) {
      errors.email = 'Please provide your email address.';
    } else if (!emailRegex.test(trimmedEmail)) {
      errors.email = 'Please enter a valid email address format.';
    } else {
      const emailPrefix = trimmedEmail.split('@')[0];
      const check = getJunkRejectionReason(emailPrefix);
      if (!check.isValid || trimmedEmail.includes('example.com') || trimmedEmail.startsWith('test@')) {
        errors.email = !check.isValid ? check.reason : 'Please provide a legitimate business email address.';
      }
    }

    const trimmedCompany = (company_name || '').trim();
    if (trimmedCompany) {
      if (!alphabeticRegex.test(trimmedCompany)) {
        errors.company_name = 'Please use only alphabets for the company name.';
      } else {
        const check = getJunkRejectionReason(trimmedCompany);
        if (!check.isValid) {
          errors.company_name = check.reason;
        }
      }
    }

    const trimmedPhone = (phone_number || '').trim();
    if (!trimmedPhone) {
      errors.phone_number = 'Please enter your phone number.';
    } else if (!phoneRegex.test(trimmedPhone)) {
      errors.phone_number = 'Please enter exactly 10 digits for your mobile number.';
    } else if (isFakePhone(trimmedPhone)) {
      errors.phone_number = 'Please enter a valid and active mobile number.';
    }

    const trimmedAltPhone = (alt_phone_number || '').trim();
    if (trimmedAltPhone) {
      if (!phoneRegex.test(trimmedAltPhone)) {
        errors.alt_phone_number = 'WhatsApp number must be exactly 10 digits.';
      } else if (isFakePhone(trimmedAltPhone)) {
        errors.alt_phone_number = 'Please enter a valid WhatsApp number.';
      }
    }

    const trimmedAddress = (address || '').trim();
    if (!trimmedAddress) {
      errors.address = 'Please provide your address.';
    } else if (!addressRegex.test(trimmedAddress)) {
      errors.address = 'Please check for invalid characters in your address.';
    } else {
      const check = getJunkRejectionReason(trimmedAddress);
      if (!check.isValid) {
        errors.address = check.reason;
      }
    }

    const trimmedCity = (city || '').trim();
    if (!trimmedCity) {
      errors.city = 'Please enter your city.';
    } else {
      const cityInput = trimmedCity.toLowerCase();
      const majorCities = [
        'mumbai', 'delhi', 'bangalore', 'hyderabad', 'chennai', 'kolkata', 'pune', 'ahmedabad', 'surat', 'jaipur', 'lucknow',
        'new york', 'london', 'dubai', 'singapore', 'tokyo', 'paris', 'hong kong', 'chicago', 'shanghai', 'los angeles', 'sydney',
        'toronto', 'san francisco', 'berlin', 'madrid', 'seoul', 'beijing', 'amsterdam', 'rome', 'vancouver', 'melbourne',
        'mexico city', 'sao paulo', 'buenos aires', 'istanbul', 'riyadh', 'bangkok', 'jakarta', 'manila', 'cairo', 'johannesburg',
        'moscow', 'vienna', 'zurich', 'abu dhabi', 'doha', 'kuwait city', 'manama', 'muscat', 'shiraz', 'tehran'
      ];
      
      const check = getJunkRejectionReason(trimmedCity);
      const partialMatch = majorCities.find(c => c.startsWith(cityInput) && c !== cityInput && cityInput.length >= 3);
      
      if (partialMatch) {
        errors.city = 'Please enter the full city name.';
      } else if (!majorCities.includes(cityInput) && !check.isValid) {
        errors.city = check.reason;
      } else if (trimmedCity.length < 2) {
        errors.city = 'Please enter a valid city name.';
      }
    }

    const trimmedCountry = (country || '').trim();
    if (!trimmedCountry) {
      errors.country = 'Country is required.';
    } else {
      const countryInput = trimmedCountry.toLowerCase();
      const validCountries = [
        'afghanistan', 'albania', 'algeria', 'andorra', 'angola', 'antigua and barbuda', 'argentina', 'armenia', 'australia', 'austria', 'azerbaijan',
        'bahamas', 'bahrain', 'bangladesh', 'barbados', 'belarus', 'belgium', 'belize', 'benin', 'bhutan', 'bolivia', 'bosnia and herzegovina', 'botswana', 'brazil', 'brunei', 'bulgaria', 'burkina faso', 'burundi',
        'cabo verde', 'cambodia', 'cameroon', 'canada', 'central african republic', 'chad', 'chile', 'china', 'colombia', 'comoros', 'congo', 'costa rica', 'croatia', 'cuba', 'cyprus', 'czech republic',
        'denmark', 'djibouti', 'dominica', 'dominican republic', 'ecuador', 'egypt', 'el salvador', 'equatorial guinea', 'eritrea', 'estonia', 'eswatini', 'ethiopia',
        'fiji', 'finland', 'france', 'gabon', 'gambia', 'georgia', 'germany', 'ghana', 'greece', 'grenada', 'guatemala', 'guinea', 'guinea-bissau', 'guyana',
        'haiti', 'honduras', 'hungary', 'iceland', 'india', 'indonesia', 'iran', 'iraq', 'ireland', 'israel', 'italy', 'ivory coast',
        'jamaica', 'japan', 'jordan', 'kazakhstan', 'kenya', 'kiribati', 'kuwait', 'kyrgyzstan', 'laos', 'latvia', 'lebanon', 'lesotho', 'liberia', 'libya', 'liechtenstein', 'lithuania', 'luxembourg',
        'madagascar', 'malawi', 'malaysia', 'maldives', 'mali', 'malta', 'marshall islands', 'mauritania', 'mauritius', 'mexico', 'micronesia', 'moldova', 'monaco', 'mongolia', 'montenegro', 'morocco', 'mozambique', 'myanmar',
        'namibia', 'nauru', 'nepal', 'netherlands', 'new zealand', 'nicaragua', 'niger', 'nigeria', 'north korea', 'north macedonia', 'norway', 'oman',
        'pakistan', 'palau', 'palestine', 'panama', 'papua new guinea', 'paraguay', 'peru', 'philippines', 'poland', 'portugal', 'qatar',
        'romania', 'russia', 'rwanda', 'saint kitts and nevis', 'saint lucia', 'saint vincent and the grenadines', 'samoa', 'san marino', 'sao tome and principe', 'saudi arabia', 'senegal', 'serbia', 'seychelles', 'sierra leone', 'singapore', 'slovakia', 'slovenia', 'solomon islands', 'somalia', 'south africa', 'south korea', 'south sudan', 'spain', 'sri lanka', 'sudan', 'suriname', 'sweden', 'switzerland', 'syria',
        'taiwan', 'tajikistan', 'tanzania', 'thailand', 'timor-leste', 'togo', 'tonga', 'trinidad and tobago', 'tunisia', 'turkey', 'turkmenistan', 'tuvalu',
        'uganda', 'ukraine', 'united arab emirates', 'uae', 'united kingdom', 'uk', 'united states', 'usa', 'us', 'uruguay', 'uzbekistan',
        'vanuatu', 'vatican city', 'venezuela', 'vietnam', 'yemen', 'zambia', 'zimbabwe'
      ];
      if (!validCountries.includes(countryInput)) {
        errors.country = 'Please enter a valid country name.';
      }
    }

    const trimmedInterested = (interested_in || '').trim();
    if (!trimmedInterested) {
      errors.interested_in = 'Please let us know what you would like to build.';
    } else if (trimmedInterested.length < 3) {
      errors.interested_in = 'Please provide a bit more detail.';
    } else {
      const check = getJunkRejectionReason(trimmedInterested);
      if (!check.isValid) {
        errors.interested_in = check.reason;
      }
    }

    const trimmedMessage = (message || '').trim();
    if (!trimmedMessage) {
      errors.message = 'Please provide a brief overview of your vision.';
    } else {
      const words = trimmedMessage.split(/\s+/).filter(w => w.length > 0);
      const commonGreetings = ['hi', 'hello', 'hey', 'hii', 'hellooo', 'heyya', 'test', 'demo', 'asdf', 'asdfgh'];
      const check = getJunkRejectionReason(trimmedMessage);
      
      if (words.length < 5 || trimmedMessage.length < 20 || 
          words.every(word => commonGreetings.includes(word.toLowerCase().replace(/[^a-z]/g, ''))) || 
          !check.isValid) {
        errors.message = !check.isValid 
          ? check.reason 
          : 'Please enter a more descriptive message (minimum 5 words).';
      }
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

    const { 
      country_code, alt_country_code, phone_number, alt_phone_number, ...dataToSubmit 
    } = formData;

    const now = new Date();
    const localTimeForDB = new Date(now.getTime() - (now.getTimezoneOffset() * 60000)).toISOString();

    const submissionData = {
      ...dataToSubmit,
      phone_number: `${country_code || '+91'} ${(phone_number || '').replace(/\D/g, '')}`,
      alt_phone_number: (alt_phone_number || '').trim() 
        ? `${alt_country_code || '+91'} ${(alt_phone_number || '').replace(/\D/g, '')}` 
        : null,
      created_at: localTimeForDB
    };

    try {
      const { error: supabaseError } = await supabase
        .from('contact_submissions')
        .insert([submissionData]);

      if (supabaseError) throw supabaseError;

      toast.success('Form successfully submitted!', {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });

      setFormData({
        full_name: '',
        email: '',
        company_name: '',
        phone_number: '',
        country_code: '+91',
        alt_phone_number: '',
        alt_country_code: '+91',
        address: '',
        city: '',
        country: '',
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

  const {
    full_name, email, company_name, phone_number,
    country_code, alt_phone_number, alt_country_code,
    address, city, country, interested_in,
    budget, timeline, message
  } = formData;

  return (
    <section 
      id="contact" 
      className="py-2 md:py-6 px-4 md:px-4 bg-bg relative overflow-hidden transition-all duration-500"
    >
      <ToastContainer />
      <div className="absolute inset-0 bg-dot-grid opacity-[0.03]"></div>
      <div className="max-w-[1440px] mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-2 lg:gap-12 items-start">
          
          {/* Left Column: Context */}
          <div className="space-y-8 text-center lg:text-left">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-yellow-500 mb-2 block">
                INQUIRY
              </span>
              <h2 className="text-[27px] md:text-[45px] lg:text-[42px] font-black text-text tracking-tighter leading-[1] mb-3 transition-colors">
                Initiate your <span className="text-yellow-500 italic">Project.</span>
              </h2>
              <p className="text-text/50 text-[15px] md:text-[16px] xl:text-[17px] font-bold leading-relaxed max-w-2xl mx-auto transition-colors">
                We are currently accepting high-impact architectural mandates. Provide your project brief to begin the synthesis process.
              </p>
            </div>

            {/* Contact Tiers */}
            <div className="hidden md:block space-y-4 pt-1">
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
          <div className="bg-card rounded-[2.5rem] p-4 sm:p-6 md:p-7 border border-border/5 shadow-2xl transition-all">
              <form className="space-y-1.5" onSubmit={handleSubmit} noValidate>
                {/* Grid 1: Basic Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  <div className="space-y-[2px] relative">
                    <label className="text-[12px] md:text-[14px] lg:text-[15px] xl:text-[16px] font-black text-text uppercase tracking-widest px-1 opacity-80">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      name="full_name"
                      value={full_name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name" 
                      className={`w-full bg-bg border ${formErrors.full_name ? 'border-red-500 focus:border-red-500' : 'border-border/20 focus:border-yellow-500'} px-4 py-2.5 rounded-xl text-text font-bold transition-all placeholder:text-text/30 placeholder:text-[13px] text-[15px] outline-none`} 
                    />
                    {formErrors.full_name && <p className="text-red-500 text-[10px] font-bold px-1 mt-0.5">{formErrors.full_name}</p>}
                  </div>
                  <div className="space-y-[2px] relative">
                    <label className="text-[12px] md:text-[14px] lg:text-[15px] xl:text-[16px] font-black text-text uppercase tracking-widest px-1 opacity-80">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="email" 
                      name="email"
                      value={email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address" 
                      className={`w-full bg-bg border ${formErrors.email ? 'border-red-500 focus:border-red-500' : 'border-border/20 focus:border-yellow-500'} px-4 py-3 rounded-xl text-text font-bold transition-all placeholder:text-text/30 placeholder:text-[15px] text-[15px] outline-none`} 
                    />
                    {formErrors.email && <p className="text-red-500 text-[10px] font-bold px-1 mt-0.5">{formErrors.email}</p>}
                  </div>
                  <div className="space-y-[2px] relative md:col-span-2">
                    <label className="text-[12px] md:text-[14px] lg:text-[15px] xl:text-[16px] font-black text-text uppercase tracking-widest px-1 opacity-80">
                      Company Name
                    </label>
                    <input 
                      type="text" 
                      name="company_name"
                      value={company_name}
                      onChange={handleInputChange}
                      placeholder="Enter your company name" 
                      className={`w-full bg-bg border ${formErrors.company_name ? 'border-red-500 focus:border-red-500' : 'border-border/20 focus:border-yellow-500'} px-4 py-3 rounded-xl text-text font-bold transition-all placeholder:text-text/30 placeholder:text-[13px] text-[15px] outline-none`} 
                    />
                    {formErrors.company_name && <p className="text-red-500 text-[10px] font-bold px-1 mt-0.5">{formErrors.company_name}</p>}
                  </div>
                  <div className="space-y-[2px] relative">
                    <label className="text-[12px] md:text-[14px] lg:text-[15px] xl:text-[16px] font-black text-text uppercase tracking-widest px-1 opacity-80">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-2">
                      <div className="relative w-[85px] md:w-32" ref={countryRef}>
                        <div 
                          className="w-full bg-bg border border-border/20 px-1 py-2.5 rounded-xl text-text font-bold focus:border-yellow-500 transition-all cursor-pointer text-center text-[14px] md:text-[15px] outline-none flex items-center justify-center gap-1"
                          onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                        >
                          <span className="truncate">{formData.country_code}</span>
                          <svg className={`w-3 h-3 transition-transform duration-300 ${isCountryDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                        
                        {isCountryDropdownOpen && (
                          <div className="absolute top-full left-0 w-48 mt-2 bg-card border border-border rounded-xl shadow-2xl z-[100] overflow-hidden backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-300">
                            <div className="p-2 border-b border-border">
                              <input 
                                type="text"
                                className="w-full bg-bg border border-border/20 px-3 py-2 rounded-lg text-[13px] font-bold text-text focus:border-yellow-500 outline-none"
                                placeholder="Search code/country..."
                                value={countrySearch}
                                onChange={(e) => setCountrySearch(e.target.value)}
                                autoFocus
                              />
                            </div>
                            <div className="max-h-60 overflow-y-auto custom-scrollbar">
                              {filteredCountryCodes.length > 0 ? (
                                filteredCountryCodes.map((country, index) => (
                                  <div 
                                    key={index}
                                    className="px-4 py-2 hover:bg-yellow-500/10 cursor-pointer text-[13px] font-bold text-text/70 hover:text-yellow-500 transition-colors flex justify-between items-center"
                                    onClick={() => {
                                      setFormData(prev => ({ ...prev, country_code: country.code }));
                                      setIsCountryDropdownOpen(false);
                                      setCountrySearch('');
                                    }}
                                  >
                                    <span>{country.label}</span>
                                    <span className="text-yellow-500">{country.code}</span>
                                  </div>
                                ))
                              ) : (
                                <div className="px-4 py-3 text-[12px] font-bold text-text/30 italic">No matches found</div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                      <input 
                        type="text" 
                        name="phone_number"
                        value={phone_number}
                        onChange={handleInputChange}
                        placeholder="Enter 10-digit mobile number" 
                        className={`flex-1 min-w-0 bg-bg border ${formErrors.phone_number ? 'border-red-500 focus:border-red-500' : 'border-border/20 focus:border-yellow-500'} px-3 md:px-4 py-3 rounded-xl text-text font-bold transition-all placeholder:text-text/30 placeholder:text-[11px] sm:placeholder:text-[13px] text-[14px] md:text-[15px] outline-none`} 
                      />
                    </div>
                    {formErrors.phone_number && <p className="text-red-500 text-[10px] font-bold px-1 mt-0.5">{formErrors.phone_number}</p>}
                  </div>

                  <div className="space-y-[2px] relative">
                    <label className="text-[12px] md:text-[14px] lg:text-[15px] xl:text-[16px] font-black text-text uppercase tracking-widest px-1 opacity-80">
                      Alternative Mobile (WhatsApp)
                    </label>
                    <div className="flex gap-2">
                      <div className="relative w-[85px] md:w-32" ref={altCountryRef}>
                        <div 
                          className="w-full bg-bg border border-border/20 px-1 py-2.5 rounded-xl text-text font-bold focus:border-yellow-500 transition-all cursor-pointer text-center text-[14px] md:text-[15px] outline-none flex items-center justify-center gap-1"
                          onClick={() => setIsAltCountryDropdownOpen(!isAltCountryDropdownOpen)}
                        >
                          <span className="truncate">{formData.alt_country_code}</span>
                          <svg className={`w-3 h-3 transition-transform duration-300 ${isAltCountryDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                        
                        {isAltCountryDropdownOpen && (
                          <div className="absolute top-full left-0 w-48 mt-2 bg-card border border-border rounded-xl shadow-2xl z-[100] overflow-hidden backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-300">
                            <div className="p-2 border-b border-border">
                              <input 
                                type="text"
                                className="w-full bg-bg border border-border/20 px-3 py-2 rounded-lg text-[13px] font-bold text-text focus:border-yellow-500 outline-none"
                                placeholder="Search code/country..."
                                value={altCountrySearch}
                                onChange={(e) => setAltCountrySearch(e.target.value)}
                                autoFocus
                              />
                            </div>
                            <div className="max-h-60 overflow-y-auto custom-scrollbar">
                              {filteredAltCountryCodes.length > 0 ? (
                                filteredAltCountryCodes.map((country, index) => (
                                  <div 
                                    key={index}
                                    className="px-4 py-2 hover:bg-yellow-500/10 cursor-pointer text-[13px] font-bold text-text/70 hover:text-yellow-500 transition-colors flex justify-between items-center"
                                    onClick={() => {
                                      setFormData(prev => ({ ...prev, alt_country_code: country.code }));
                                      setIsAltCountryDropdownOpen(false);
                                      setAltCountrySearch('');
                                    }}
                                  >
                                    <span>{country.label}</span>
                                    <span className="text-yellow-500">{country.code}</span>
                                  </div>
                                ))
                              ) : (
                                <div className="px-4 py-3 text-[12px] font-bold text-text/30 italic">No matches found</div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                      <input 
                        type="text" 
                        name="alt_phone_number"
                        value={alt_phone_number}
                        onChange={handleInputChange}
                        placeholder="Enter WhatsApp number" 
                        className={`flex-1 min-w-0 bg-bg border ${formErrors.alt_phone_number ? 'border-red-500 focus:border-red-500' : 'border-border/20 focus:border-yellow-500'} px-3 md:px-4 py-3 rounded-xl text-text font-bold transition-all placeholder:text-text/30 placeholder:text-[11px] sm:placeholder:text-[13px] text-[14px] md:text-[15px] outline-none`} 
                      />
                    </div>
                    {formErrors.alt_phone_number && <p className="text-red-500 text-[10px] font-bold px-1 mt-0.5">{formErrors.alt_phone_number}</p>}
                  </div>
                </div>

                {/* Address Field: Full Width */}
                <div className="space-y-[1px] relative mt-1">
                  <label className="text-[11px] md:text-[13px] lg:text-[14px] xl:text-[14px] font-black text-text uppercase tracking-widest px-1 opacity-80">
                    Address <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    name="address"
                    value={address}
                    onChange={handleInputChange}
                    placeholder="Enter your complete address" 
                    className={`w-full bg-bg border ${formErrors.address ? 'border-red-500 focus:border-red-500' : 'border-border/20 focus:border-yellow-500'} px-4 py-3 rounded-xl text-text font-bold transition-all placeholder:text-text/30 placeholder:text-[13px] text-[15px] outline-none`} 
                  />
                  {formErrors.address && <p className="text-red-500 text-[10px] font-bold px-1 mt-0.5">{formErrors.address}</p>}
                </div>

                {/* City and Country Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 mt-2">
                  <div className="space-y-[2px] relative">
                    <label className="text-[12px] md:text-[14px] lg:text-[15px] xl:text-[16px] font-black text-text uppercase tracking-widest px-1 opacity-80">
                      City <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      name="city"
                      value={city}
                      onChange={handleInputChange}
                      placeholder="Enter your city" 
                      className={`w-full bg-bg border ${formErrors.city ? 'border-red-500 focus:border-red-500' : 'border-border/20 focus:border-yellow-500'} px-4 py-3 rounded-xl text-text font-bold transition-all placeholder:text-text/30 placeholder:text-[13px] text-[15px] outline-none`} 
                    />
                    {formErrors.city && <p className="text-red-500 text-[10px] font-bold px-1 mt-0.5">{formErrors.city}</p>}
                  </div>
                  <div className="space-y-[2px] relative">
                    <label className="text-[12px] md:text-[14px] lg:text-[15px] xl:text-[16px] font-black text-text uppercase tracking-widest px-1 opacity-80">
                      Country <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      name="country"
                      value={country}
                      onChange={handleInputChange}
                      placeholder="Enter your country" 
                      className={`w-full bg-bg border ${formErrors.country ? 'border-red-500 focus:border-red-500' : 'border-border/20 focus:border-yellow-500'} px-4 py-3 rounded-xl text-text font-bold transition-all placeholder:text-text/30 placeholder:text-[13px] text-[15px] outline-none`} 
                    />
                    {formErrors.country && <p className="text-red-500 text-[10px] font-bold px-1 mt-0.5">{formErrors.country}</p>}
                  </div>
                </div>

                {/* Grid 2: Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 mt-1">
                   <div className="space-y-[1px] relative">
                    <label className="text-[11px] md:text-[13px] lg:text-[14px] xl:text-[14px] font-black text-text uppercase tracking-widest px-1 opacity-80">
                      What do you want to build? <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      name="interested_in"
                      value={interested_in}
                      onChange={handleInputChange}
                      placeholder="e.g., AI Platform, SaaS, CRM..." 
                      className={`w-full bg-bg border ${formErrors.interested_in ? 'border-red-500 focus:border-red-500' : 'border-border/20 focus:border-yellow-500'} px-4 py-3 rounded-xl text-text font-bold transition-all placeholder:text-text/30 placeholder:text-[13px] uppercase text-[15px] outline-none`} 
                    />
                    {formErrors.interested_in && <p className="text-red-500 text-[10px] font-bold px-1 mt-0.5">{formErrors.interested_in}</p>}
                  </div>
                  <div className="space-y-[2px] relative">
                    <label className="text-[12px] md:text-[14px] lg:text-[15px] xl:text-[16px] font-black text-text uppercase tracking-widest px-1 opacity-80">
                      Budget (USD) <span className="text-red-500">*</span>
                    </label>
                    <select 
                      name="budget"
                      value={budget}
                      onChange={handleInputChange}
                      className="w-full bg-bg border border-border/20 px-4 py-3 rounded-xl text-text font-bold focus:border-yellow-500 outline-none appearance-none cursor-pointer text-[15px]"
                    >
                      <option>$5k - $10k</option>
                      <option>$10k - $15k</option>
                      <option>$15k - $25k</option>
                      <option>$25k+</option>
                    </select>
                  </div>
                </div>

                {/* Selection 3: Timeline Pills */}
                <div className="space-y-[1px] mt-1">
                  <label className="text-[11px] md:text-[13px] lg:text-[14px] xl:text-[14px] font-black text-text uppercase tracking-widest px-1 opacity-80">
                    Project Timeline <span className="text-red-500">*</span>
                  </label>
                  <div className="flex flex-nowrap gap-2 overflow-x-auto pb-2 no-scrollbar">
                    {['IMMEDIATE', '1 MONTH', '3 MONTHS', 'EXPLORING'].map(p => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, timeline: p }))}
                        className={`px-4 py-1.5 rounded-lg text-[12px] md:text-[12px] font-black tracking-[0.2em] uppercase transition-all duration-300 border cursor-pointer whitespace-nowrap ${
                          timeline === p 
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
                <div className="space-y-[2px] relative mt-2">
                  <label className="text-[12px] md:text-[14px] lg:text-[15px] xl:text-[16px] font-black text-text uppercase tracking-widest px-1 opacity-80">
                    Vision Brief <span className="text-red-500">*</span>
                  </label>
                  <textarea 
                    name="message"
                    value={message}
                    onChange={handleInputChange}
                    rows="2" 
                    placeholder="Briefly describe your project mission and goals..." 
                    className={`w-full bg-bg border ${formErrors.message ? 'border-red-500 focus:border-red-500' : 'border-border/20 focus:border-yellow-500'} px-4 py-3 rounded-xl text-text font-medium transition-all placeholder:text-text/30 placeholder:text-[13px] text-[15px] resize-none outline-none`}
                  ></textarea>
                  {formErrors.message && <p className="text-red-500 text-[10px] font-bold px-1 mt-0.5">{formErrors.message}</p>}
                </div>

                {/* Submit */}
                <div className="mt-2.5">
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
