import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden" style={{ backgroundColor: 'var(--cabtale-deep-navy)' }}>
      {/* Decorative top wave */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full transform rotate-180">
          <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="var(--cabtale-pure-white)"/>
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-12 relative z-10">
        {/* Newsletter Section */}
        <motion.div
          className="rounded-3xl p-8 md:p-12 mb-16 relative overflow-hidden"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl mb-3" style={{ color: 'var(--cabtale-pure-white)' }}>
                Stay Updated
              </h3>
              <p style={{ color: 'var(--cabtale-light-periwinkle)' }}>
                Subscribe to get exclusive offers, updates, and travel tips.
              </p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl outline-none"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  color: 'var(--cabtale-charcoal)',
                }}
              />
              <motion.button
                className="px-6 py-4 rounded-xl flex items-center gap-2"
                style={{
                  background: 'linear-gradient(135deg, var(--cabtale-soft-royal), var(--cabtale-sky-accent))',
                  color: 'var(--cabtale-pure-white)',
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send size={20} />
                <span className="hidden sm:inline">Subscribe</span>
              </motion.button>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, var(--cabtale-soft-royal), var(--cabtale-sky-accent))',
                }}
              >
                <span className="text-xl" style={{ color: 'var(--cabtale-pure-white)' }}>C</span>
              </div>
              <h3 className="text-xl" style={{ color: 'var(--cabtale-pure-white)' }}>
                CabTale
              </h3>
            </div>
            <p className="mb-6" style={{ color: 'var(--cabtale-light-periwinkle)' }}>
              Your trusted partner for safe and reliable transportation across Delhi NCR. Making every journey memorable.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  className="p-2.5 rounded-lg transition-colors"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: 'var(--cabtale-soft-royal)',
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={20} style={{ color: 'var(--cabtale-pure-white)' }} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-lg" style={{ color: 'var(--cabtale-pure-white)' }}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['Home', 'Services', 'Fleet', 'About Us', 'Careers', 'Partner with Us'].map((link, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="transition-all hover:translate-x-1 inline-block"
                    style={{ color: 'var(--cabtale-light-periwinkle)' }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-6 text-lg" style={{ color: 'var(--cabtale-pure-white)' }}>
              Our Services
            </h4>
            <ul className="space-y-3">
              {['City Rides', 'Airport Transfer', 'Outstation Trips', 'Corporate Booking', 'Hourly Rentals', 'Wedding & Events'].map((service, idx) => (
                <li key={idx} style={{ color: 'var(--cabtale-light-periwinkle)' }}>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-6 text-lg" style={{ color: 'var(--cabtale-pure-white)' }}>
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                >
                  <Phone size={18} style={{ color: 'var(--cabtale-soft-royal)' }} />
                </div>
                <div>
                  <p style={{ color: 'var(--cabtale-light-periwinkle)' }}>+91 98765 43210</p>
                  <p style={{ color: 'var(--cabtale-light-periwinkle)' }}>+91 98765 43211</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                >
                  <Mail size={18} style={{ color: 'var(--cabtale-soft-royal)' }} />
                </div>
                <p style={{ color: 'var(--cabtale-light-periwinkle)' }}>support@cabtale.com</p>
              </li>
              <li className="flex items-start gap-3">
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                >
                  <MapPin size={18} style={{ color: 'var(--cabtale-soft-royal)' }} />
                </div>
                <p style={{ color: 'var(--cabtale-light-periwinkle)' }}>
                  Connaught Place, <br />New Delhi, 110001
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}
        >
          <p style={{ color: 'var(--cabtale-light-periwinkle)' }}>
            © 2026 CabTale. All rights reserved. Made with ❤️ in Delhi NCR
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="transition-colors hover:opacity-80"
              style={{ color: 'var(--cabtale-light-periwinkle)' }}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="transition-colors hover:opacity-80"
              style={{ color: 'var(--cabtale-light-periwinkle)' }}
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="transition-colors hover:opacity-80"
              style={{ color: 'var(--cabtale-light-periwinkle)' }}
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}