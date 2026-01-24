import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import appBookingImage from './figma/image.png';

export function AppBookingPromo() {
  return (
    <section className="py-24" style={{ backgroundColor: 'var(--cabtale-bg-gray)' }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div 
            className="inline-block px-6 py-3 rounded-full mb-6"
            style={{ 
              backgroundColor: 'var(--cabtale-pale-ice)',
              color: 'var(--cabtale-soft-royal)',
            }}
          >
            <span className="text-lg">Coming Soon...</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-8" style={{ color: 'var(--cabtale-deep-navy)' }}>
            CabTale Booking App
          </h2>
        </motion.div>

        <motion.div
          className="flex flex-col lg:flex-row items-center justify-center gap-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* App Image */}
          <div className="flex-shrink-0">
            <motion.div
              className="rounded-3xl overflow-hidden shadow-2xl max-w-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={appBookingImage} 
                alt="CabTale Booking App - Coming Soon on Android and iOS" 
                className="w-full h-auto"
              />
            </motion.div>
          </div>

          {/* Call to Action */}
          <div className="text-center lg:text-left">
            <h3 className="text-3xl md:text-4xl mb-6" style={{ color: 'var(--cabtale-deep-navy)' }}>
              Hurry! Make Your Bookings
            </h3>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: 'var(--cabtale-muted-gray)' }}>
              Our mobile app is coming soon on Android and iOS!<br />
              Meanwhile, book your ride by calling us directly.
            </p>

            {/* Phone Number CTA */}
            <motion.a
              href="tel:01169656817"
              className="inline-flex items-center gap-4 px-8 py-5 rounded-2xl text-xl transition-all shadow-xl"
              style={{
                backgroundColor: 'var(--cabtale-deep-navy)',
                color: 'var(--cabtale-pure-white)',
              }}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: 'var(--cabtale-soft-royal)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div 
                className="w-14 h-14 rounded-full flex items-center justify-center"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
              >
                <Phone size={28} />
              </div>
              <div className="text-left">
                <div className="text-sm opacity-90">Call us at</div>
                <div className="text-2xl">+011 6965 6817</div>
              </div>
            </motion.a>

            {/* Additional Info */}
            <div className="mt-8 flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <div className="flex items-center gap-3">
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: '#2ECC71' }}
                />
                <span style={{ color: 'var(--cabtale-charcoal)' }}>24/7 Available</span>
              </div>
              <div className="flex items-center gap-3">
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: '#F4D03F' }}
                />
                <span style={{ color: 'var(--cabtale-charcoal)' }}>Instant Booking</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Notice */}
        <motion.div
          className="mt-16 text-center p-6 rounded-2xl"
          style={{ 
            backgroundColor: 'var(--cabtale-pure-white)',
            border: '2px dashed var(--cabtale-soft-border)',
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-lg" style={{ color: 'var(--cabtale-charcoal)' }}>
            🚀 <strong>Stay tuned!</strong> Get notified when our app launches with exclusive launch offers.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
