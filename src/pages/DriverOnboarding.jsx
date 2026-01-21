import { motion } from 'framer-motion';
import { CheckCircle2, FileText, MapPin, DollarSign, Shield, Users, Clock, TrendingUp, Plane } from 'lucide-react';

import { useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWtihFallback';

const DriverOnboarding = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="w-full" style={{ backgroundColor: 'var(--cabtale-pure-white)' }}>
      {/* Welcome Section */}
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: 'var(--cabtale-deep-navy)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl mb-6" style={{ color: 'var(--cabtale-pure-white)' }}>
                Drive with CabTale
              </h1>
              <p className="text-xl mb-8 leading-relaxed" style={{ color: 'var(--cabtale-pale-ice)' }}>
                Join Delhi NCR's most trusted cab service. Earn better, work flexible hours, and be your own boss.
              </p>
              <div className="flex flex-wrap gap-6 mb-8">
                {[
                  { icon: DollarSign, text: 'High Earnings' },
                  { icon: Clock, text: 'Flexible Hours' },
                  { icon: Shield, text: 'Full Support' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2" style={{ color: '#F4D03F' }}>
                    <item.icon size={24} />
                    <span className="text-lg">{item.text}</span>
                  </div>
                ))}
              </div>
              <motion.button
                className="px-8 py-4 rounded-xl transition-all"
                style={{
                  backgroundColor: '#F4D03F',
                  color: 'var(--cabtale-deep-navy)',
                }}
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(244, 208, 63, 0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Journey
              </motion.button>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="/src/assets/cab-driver.png"
                  alt="Professional driver"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Drive with CabTale */}
      <section className="py-24" style={{ backgroundColor: 'var(--cabtale-bg-gray)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-4" style={{ color: 'var(--cabtale-deep-navy)' }}>
              Why Drive with CabTale?
            </h2>
            <p className="text-lg" style={{ color: 'var(--cabtale-muted-gray)' }}>
              Join thousands of successful drivers earning on their own terms
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: TrendingUp,
                title: 'Higher Earnings',
                description: 'Earn up to ₹50,000/month with competitive rates and zero commission on airport rides',
              },
              {
                icon: Clock,
                title: 'Flexible Schedule',
                description: 'Choose your own hours and decide when you want to drive',
              },
              {
                icon: Shield,
                title: 'Safety & Security',
                description: 'Comprehensive insurance coverage and 24/7 emergency support',
              },
              {
                icon: Users,
                title: 'Growing Community',
                description: '500+ active drivers earning consistently across Delhi NCR',
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-2xl"
                style={{ backgroundColor: 'var(--cabtale-pure-white)' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'var(--cabtale-pale-ice)' }}
                >
                  <benefit.icon size={32} style={{ color: 'var(--cabtale-soft-royal)' }} />
                </div>
                <h3 className="text-xl mb-2" style={{ color: 'var(--cabtale-deep-navy)' }}>
                  {benefit.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--cabtale-muted-gray)' }}>
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How Onboarding Works */}
      <section className="py-24" style={{ backgroundColor: 'var(--cabtale-pure-white)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-4" style={{ color: 'var(--cabtale-deep-navy)' }}>
              How Onboarding Works
            </h2>
            <p className="text-lg" style={{ color: 'var(--cabtale-muted-gray)' }}>
              Simple 4-step process to start earning
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Submit Documents',
                description: 'Upload required documents online - driving license, Aadhaar, PAN, and vehicle papers',
              },
              {
                step: '02',
                title: 'Verification',
                description: 'Our team verifies your documents and vehicle within 24-48 hours',
              },
              {
                step: '03',
                title: 'Training',
                description: 'Complete online orientation and safety training',
              },
              {
                step: '04',
                title: 'Start Earning',
                description: 'Get approved and start accepting rides immediately',
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="text-6xl mb-4 opacity-20" style={{ color: 'var(--cabtale-soft-royal)' }}>
                  {step.step}
                </div>
                <h3 className="text-2xl mb-3" style={{ color: 'var(--cabtale-deep-navy)' }}>
                  {step.title}
                </h3>
                <p className="leading-relaxed" style={{ color: 'var(--cabtale-muted-gray)' }}>
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Needed */}
      <section className="py-24" style={{ backgroundColor: 'var(--cabtale-bg-gray)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-4" style={{ color: 'var(--cabtale-deep-navy)' }}>
              Documents You'll Need
            </h2>
            <p className="text-lg mb-2" style={{ color: 'var(--cabtale-muted-gray)' }}>
              Keep these documents handy for quick onboarding
            </p>
            <p className="text-sm" style={{ color: 'var(--cabtale-charcoal)' }}>
              <strong>Tip:</strong> Clear photos with all corners visible, names should match across documents
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                category: 'Driver Documents',
                icon: FileText,
                items: [
                  'Driving Licence (valid)',
                  'Recent passport-size photo',
                  'Police verification (if state rules require)',
                ],
              },
              {
                category: 'Owner Documents',
                icon: FileText,
                items: [
                  'Aadhaar Card / PAN Card',
                  'Address proof',
                  'Cancelled cheque / Bank passbook',
                ],
              },
              {
                category: 'Vehicle Documents',
                icon: FileText,
                items: [
                  'Registration Certificate (RC)',
                  'Valid Insurance',
                  'Fitness Certificate / Permit (as per RTO)',
                  'PUC Certificate',
                  'Vehicle photos (front/side/interior)',
                ],
              },
            ].map((doc, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-2xl"
                style={{ backgroundColor: 'var(--cabtale-pure-white)' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: 'var(--cabtale-pale-ice)' }}
                >
                  <doc.icon size={32} style={{ color: 'var(--cabtale-soft-royal)' }} />
                </div>
                <h3 className="text-2xl mb-4" style={{ color: 'var(--cabtale-deep-navy)' }}>
                  {doc.category}
                </h3>
                <ul className="space-y-3">
                  {doc.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 size={20} style={{ color: '#F4D03F', flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ color: 'var(--cabtale-charcoal)' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Where CabTale Is Available */}
      <section className="py-24" style={{ backgroundColor: 'var(--cabtale-pure-white)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-4" style={{ color: 'var(--cabtale-deep-navy)' }}>
              Where CabTale Is Available
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: '1. Airport Transfers',
                icon: Plane,
                description:
                  'Most major North Indian airports covered—priority hubs: IGI Delhi & Hindon (Ghaziabad). Fixed pickup points, flight-synced ETAs, smooth dispatch. Lambi routes = better earnings.',
              },
              {
                title: '2. Railway Station & Public Transport Hubs',
                icon: MapPin,
                description:
                  'Railway stations, ISBTs, metro/bus hubs se planned pickups. Intercity demand steady, kam chakkar—seedha fayda.',
              },
              {
                title: '3. Outstation / City-to-City',
                icon: TrendingUp,
                description:
                  'Delhi → Jaipur/Haridwar/Agra/Meerut jaise long routes. Distance & timing aap set karo, total earning predictable.',
              },
              {
                title: '4. Family Trips & Custom Routes',
                icon: Users,
                description:
                  'Shaadi, vacations, luggage-friendly rides. Apne favourite corridors save karo—sirf matching requests accept karo.',
              },
            ].map((area, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-2xl"
                style={{ backgroundColor: 'var(--cabtale-bg-gray)' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: 'var(--cabtale-pure-white)' }}
                  >
                    <area.icon size={24} style={{ color: 'var(--cabtale-soft-royal)' }} />
                  </div>
                  <h3 className="text-xl" style={{ color: 'var(--cabtale-deep-navy)' }}>
                    {area.title}
                  </h3>
                </div>
                <p className="leading-relaxed" style={{ color: 'var(--cabtale-charcoal)' }}>
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24" style={{ backgroundColor: 'var(--cabtale-bg-gray)' }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-4" style={{ color: 'var(--cabtale-deep-navy)' }}>
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: 'Kya meri car commercial honi chahiye?',
                a: 'Haan. State/RTO rules ke hisaab se commercial permit, fitness, insurance, PUC zaroori hai. Driver ke liye valid DL aur basic verification chahiye.',
              },
              {
                q: 'Earning kaise hoti hai? Surge hota hai?',
                a: 'Upfront per-km fare (Hatchback/Sedan/SUV). Accept karne se pehle total amount app mein dikh jata hai. Surge nahi—transparent fares.',
              },
              {
                q: 'Kya main sirf airport ya sirf outstation rides choose kar sakta hoon?',
                a: 'Bilkul. App mein route filters aur category set kijiye—sirf matching requests aayengi.',
              },
              {
                q: 'Payout kab milta hai?',
                a: 'Regular, reliable schedule. App statements mein daily summary, settlements aur breakdown clear milta hai.',
              },
              {
                q: 'Cancel/Wait time ka kya? Support milega?',
                a: 'Cancellation & waiting policies app mein clearly shown hoti hain. 24×7 support, live tracking aur SOS available.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="rounded-2xl overflow-hidden"
                style={{ backgroundColor: 'var(--cabtale-pure-white)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <button
                  className="w-full p-6 text-left flex items-center justify-between"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="text-lg" style={{ color: 'var(--cabtale-deep-navy)' }}>
                    {faq.q}
                  </span>
                  <span className="text-2xl" style={{ color: 'var(--cabtale-soft-royal)' }}>
                    {openFaq === index ? '−' : '+'}
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6" style={{ color: 'var(--cabtale-muted-gray)' }}>
                    {faq.a}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24" style={{ backgroundColor: 'var(--cabtale-deep-navy)' }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-6" style={{ color: 'var(--cabtale-pure-white)' }}>
              Ready to Start Earning?
            </h2>
            <p className="text-xl mb-8" style={{ color: 'var(--cabtale-pale-ice)' }}>
              Join CabTale today and be part of Delhi NCR's fastest-growing driver community
            </p>
            <motion.button
              className="px-10 py-5 rounded-xl text-xl transition-all"
              style={{
                backgroundColor: '#F4D03F',
                color: 'var(--cabtale-deep-navy)',
              }}
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(244, 208, 63, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              Apply Now
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DriverOnboarding;