import { motion } from 'framer-motion';
import { useState } from 'react';
import { Globe, CheckCircle } from 'lucide-react';

export function PartnerOnboardingForm() {
  const [language, setLanguage] = useState<'en' | 'hi'>('en');
  const [formData, setFormData] = useState({
    fullName: '',
    whatsapp: '',
    city: '',
    nearestAirport: '',
    vehicleType: '',
    vehicleRegistration: '',
    experience: '',
    preferredRoutes: '',
    referenceName: '',
    referenceMobile: '',
    consent: false,
  });

  const content = {
    en: {
      heading: 'CabTale – Partner Onboarding',
      subheading: "Join India's airport-to-hometown long-distance cab network as a partner. Fill your details and our team will contact you.",
      fullName: 'Full Name',
      fullNamePlaceholder: 'e.g., Rakesh Kumar',
      whatsapp: 'WhatsApp Number',
      whatsappPlaceholder: '+91 98XXXXXXXX',
      whatsappHelp: 'Use your active WhatsApp number.',
      city: 'City',
      cityPlaceholder: 'e.g., Delhi, Ghaziabad',
      nearestAirport: 'Nearest Airport',
      vehicleType: 'Vehicle Type',
      vehicleRegistration: 'Vehicle Registration No.',
      vehicleRegistrationPlaceholder: 'DL 01 XX 1234',
      experience: 'Years of Driving Experience',
      preferredRoutes: 'Preferred Routes',
      preferredRoutesPlaceholder: 'e.g., DEL → Jaipur, Agra',
      referenceSection: 'Reference Friend (Cab Partner)',
      referenceName: "Friend's Name",
      referenceNamePlaceholder: 'e.g., Amit Singh',
      referenceMobile: "Friend's Mobile No.",
      referenceMobilePlaceholder: '+91 9XXXXXXXXX',
      consent: 'I agree to be contacted on WhatsApp/phone about CabTale partner onboarding.',
      submit: 'Submit Application',
      selectOption: '—Please choose an option—',
      required: '*',
    },
    hi: {
      heading: 'CabTale – पार्टनर ऑनबोर्डिंग',
      subheading: 'भारत के एयरपोर्ट‑से‑होमटाउन लंबी दूरी के कैब नेटवर्क में पार्टनर के रूप में जुड़ें। अपने विवरण भरें और हमारी टीम आपसे संपर्क करेगी।',
      fullName: 'पूरा नाम',
      fullNamePlaceholder: 'उदा., राकेश कुमार',
      whatsapp: 'व्हाट्सऐप नंबर',
      whatsappPlaceholder: '+91 98XXXXXXXX',
      whatsappHelp: 'सक्रिय व्हाट्सऐप नंबर दर्ज करें।',
      city: 'शहर',
      cityPlaceholder: 'उदा., दिल्ली, गाज़ियाबाद',
      nearestAirport: 'सबसे नज़दीकी एयरपोर्ट',
      vehicleType: 'वाहन का प्रकार',
      vehicleRegistration: 'वाहन रजिस्ट्रेशन नंबर',
      vehicleRegistrationPlaceholder: 'DL 01 XX 1234',
      experience: 'अनुभव (वर्ष)',
      preferredRoutes: 'पसंदीदा रूट',
      preferredRoutesPlaceholder: 'उदा., DEL → जयपुर, आगरा',
      referenceSection: 'रिफ़रेंस मित्र (कैब पार्टनर)',
      referenceName: 'मित्र का नाम',
      referenceNamePlaceholder: 'उदा., अमित सिंह',
      referenceMobile: 'मित्र का मोबाइल नंबर',
      referenceMobilePlaceholder: '+91 9XXXXXXXXX',
      consent: 'मैं सहमत हूँ कि CabTale पार्टनर ऑनबोर्डिंग के बारे में मुझे व्हाट्सऐप/फोन पर संपर्क किया जाए।',
      submit: 'आवेदन जमा करें',
      selectOption: '—कृपया एक विकल्प चुनें—',
      required: '*',
    },
  };

  const t = content[language];

  const airports = [
    'Indira Gandhi International Airport (DEL) - Delhi',
    'Hindon Airport (HDO) - Ghaziabad',
    'Jaipur International Airport (JAI)',
    'Chandigarh International Airport (IXC)',
    'Dehradun Airport (DED)',
    'Lucknow Airport (LKO)',
  ];

  const vehicleTypes = ['Sedan', 'Hatchback', 'SUV', 'MUV', 'Luxury'];

  const experienceYears = ['0-1 years', '1-3 years', '3-5 years', '5-10 years', '10+ years'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <div className="min-h-screen py-24" style={{ backgroundColor: 'var(--cabtale-bg-gray)' }}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Language Toggle */}
          <div className="flex justify-end mb-6">
            <div className="flex items-center gap-2 p-2 rounded-xl" style={{ backgroundColor: 'var(--cabtale-pure-white)' }}>
              <Globe size={20} style={{ color: 'var(--cabtale-soft-royal)' }} />
              <button
                className={`px-4 py-2 rounded-lg transition-all ${language === 'en' ? 'font-semibold' : ''}`}
                style={{
                  backgroundColor: language === 'en' ? 'var(--cabtale-soft-royal)' : 'transparent',
                  color: language === 'en' ? 'var(--cabtale-pure-white)' : 'var(--cabtale-charcoal)',
                }}
                onClick={() => setLanguage('en')}
              >
                English
              </button>
              <button
                className={`px-4 py-2 rounded-lg transition-all ${language === 'hi' ? 'font-semibold' : ''}`}
                style={{
                  backgroundColor: language === 'hi' ? 'var(--cabtale-soft-royal)' : 'transparent',
                  color: language === 'hi' ? 'var(--cabtale-pure-white)' : 'var(--cabtale-charcoal)',
                }}
                onClick={() => setLanguage('hi')}
              >
                हिन्दी
              </button>
            </div>
          </div>

          {/* Form Container */}
          <div className="p-8 md:p-12 rounded-3xl" style={{ backgroundColor: 'var(--cabtale-pure-white)' }}>
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl mb-4" style={{ color: 'var(--cabtale-deep-navy)' }}>
                {t.heading}
              </h1>
              <p className="text-base leading-relaxed" style={{ color: 'var(--cabtale-muted-gray)' }}>
                {t.subheading}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block mb-2" style={{ color: 'var(--cabtale-charcoal)' }}>
                  {t.fullName} <span style={{ color: '#E74C3C' }}>{t.required}</span>
                </label>
                <input
                  type="text"
                  className="w-full p-4 rounded-xl border-2 transition-all focus:outline-none focus:border-opacity-100"
                  style={{ borderColor: 'var(--cabtale-soft-border)' }}
                  placeholder={t.fullNamePlaceholder}
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  required
                />
              </div>

              {/* WhatsApp Number */}
              <div>
                <label className="block mb-2" style={{ color: 'var(--cabtale-charcoal)' }}>
                  {t.whatsapp} <span style={{ color: '#E74C3C' }}>{t.required}</span>
                </label>
                <input
                  type="tel"
                  className="w-full p-4 rounded-xl border-2 transition-all focus:outline-none"
                  style={{ borderColor: 'var(--cabtale-soft-border)' }}
                  placeholder={t.whatsappPlaceholder}
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  required
                />
                <p className="mt-2 text-sm" style={{ color: 'var(--cabtale-muted-gray)' }}>
                  {t.whatsappHelp}
                </p>
              </div>

              {/* City */}
              <div>
                <label className="block mb-2" style={{ color: 'var(--cabtale-charcoal)' }}>
                  {t.city} <span style={{ color: '#E74C3C' }}>{t.required}</span>
                </label>
                <input
                  type="text"
                  className="w-full p-4 rounded-xl border-2 transition-all focus:outline-none"
                  style={{ borderColor: 'var(--cabtale-soft-border)' }}
                  placeholder={t.cityPlaceholder}
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  required
                />
              </div>

              {/* Nearest Airport */}
              <div>
                <label className="block mb-2" style={{ color: 'var(--cabtale-charcoal)' }}>
                  {t.nearestAirport} <span style={{ color: '#E74C3C' }}>{t.required}</span>
                </label>
                <select
                  className="w-full p-4 rounded-xl border-2 transition-all focus:outline-none"
                  style={{ borderColor: 'var(--cabtale-soft-border)', color: 'var(--cabtale-charcoal)' }}
                  value={formData.nearestAirport}
                  onChange={(e) => setFormData({ ...formData, nearestAirport: e.target.value })}
                  required
                >
                  <option value="">{t.selectOption}</option>
                  {airports.map((airport) => (
                    <option key={airport} value={airport}>
                      {airport}
                    </option>
                  ))}
                </select>
              </div>

              {/* Vehicle Type */}
              <div>
                <label className="block mb-2" style={{ color: 'var(--cabtale-charcoal)' }}>
                  {t.vehicleType} <span style={{ color: '#E74C3C' }}>{t.required}</span>
                </label>
                <select
                  className="w-full p-4 rounded-xl border-2 transition-all focus:outline-none"
                  style={{ borderColor: 'var(--cabtale-soft-border)', color: 'var(--cabtale-charcoal)' }}
                  value={formData.vehicleType}
                  onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value })}
                  required
                >
                  <option value="">{t.selectOption}</option>
                  {vehicleTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Vehicle Registration */}
              <div>
                <label className="block mb-2" style={{ color: 'var(--cabtale-charcoal)' }}>
                  {t.vehicleRegistration}
                </label>
                <input
                  type="text"
                  className="w-full p-4 rounded-xl border-2 transition-all focus:outline-none"
                  style={{ borderColor: 'var(--cabtale-soft-border)' }}
                  placeholder={t.vehicleRegistrationPlaceholder}
                  value={formData.vehicleRegistration}
                  onChange={(e) => setFormData({ ...formData, vehicleRegistration: e.target.value })}
                />
              </div>

              {/* Years of Experience */}
              <div>
                <label className="block mb-2" style={{ color: 'var(--cabtale-charcoal)' }}>
                  {t.experience}
                </label>
                <select
                  className="w-full p-4 rounded-xl border-2 transition-all focus:outline-none"
                  style={{ borderColor: 'var(--cabtale-soft-border)', color: 'var(--cabtale-charcoal)' }}
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                >
                  <option value="">{t.selectOption}</option>
                  {experienceYears.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>

              {/* Preferred Routes */}
              <div>
                <label className="block mb-2" style={{ color: 'var(--cabtale-charcoal)' }}>
                  {t.preferredRoutes}
                </label>
                <input
                  type="text"
                  className="w-full p-4 rounded-xl border-2 transition-all focus:outline-none"
                  style={{ borderColor: 'var(--cabtale-soft-border)' }}
                  placeholder={t.preferredRoutesPlaceholder}
                  value={formData.preferredRoutes}
                  onChange={(e) => setFormData({ ...formData, preferredRoutes: e.target.value })}
                />
              </div>

              {/* Reference Section */}
              <div className="pt-6 border-t-2" style={{ borderColor: 'var(--cabtale-soft-border)' }}>
                <h3 className="text-xl mb-4" style={{ color: 'var(--cabtale-deep-navy)' }}>
                  {t.referenceSection}
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block mb-2" style={{ color: 'var(--cabtale-charcoal)' }}>
                      {t.referenceName}
                    </label>
                    <input
                      type="text"
                      className="w-full p-4 rounded-xl border-2 transition-all focus:outline-none"
                      style={{ borderColor: 'var(--cabtale-soft-border)' }}
                      placeholder={t.referenceNamePlaceholder}
                      value={formData.referenceName}
                      onChange={(e) => setFormData({ ...formData, referenceName: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block mb-2" style={{ color: 'var(--cabtale-charcoal)' }}>
                      {t.referenceMobile}
                    </label>
                    <input
                      type="tel"
                      className="w-full p-4 rounded-xl border-2 transition-all focus:outline-none"
                      style={{ borderColor: 'var(--cabtale-soft-border)' }}
                      placeholder={t.referenceMobilePlaceholder}
                      value={formData.referenceMobile}
                      onChange={(e) => setFormData({ ...formData, referenceMobile: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              {/* Consent Checkbox */}
              <div className="flex items-start gap-3 p-4 rounded-xl" style={{ backgroundColor: 'var(--cabtale-pale-ice)' }}>
                <input
                  type="checkbox"
                  id="consent"
                  className="mt-1 w-5 h-5 cursor-pointer"
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  required
                  style={{ accentColor: 'var(--cabtale-soft-royal)' }}
                />
                <label htmlFor="consent" className="cursor-pointer leading-relaxed" style={{ color: 'var(--cabtale-charcoal)' }}>
                  {t.consent} <span style={{ color: '#E74C3C' }}>{t.required}</span>
                </label>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full py-4 rounded-xl text-lg transition-all"
                style={{
                  backgroundColor: 'var(--cabtale-deep-navy)',
                  color: 'var(--cabtale-pure-white)',
                }}
                whileHover={{
                  scale: 1.02,
                  backgroundColor: 'var(--cabtale-soft-royal)',
                }}
                whileTap={{ scale: 0.98 }}
              >
                {t.submit}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
