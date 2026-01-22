import { motion } from 'framer-motion';
import { ImageWithFallback } from './figma/ImageWtihFallback';
import { Shield, Video, Radio, Phone, CheckCircle } from 'lucide-react';
import Dashcam from '../assets/dashcam.webp';

export function SafetyFeatures() {
  const features = [
    { icon: Video, text: 'AI-Powered Dashcams in Every Vehicle' },
    { icon: Radio, text: 'Real-time Motion & Sound Alerts' },
    { icon: Shield, text: 'Live Monitoring by CabTale Captains' },
    { icon: Phone, text: 'Emergency SOS for You & Your Family' },
  ];

  return (
    <section className="w-[90%] m-auto mb-24 rounded-3xl shadow-2xl relative py-20 overflow-hidden" style={{ backgroundColor: 'var(--cabtale-pale-ice)' }}>
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-0 w-96 h-96 rounded-full opacity-5"
          style={{ backgroundColor: 'var(--cabtale-deep-navy)' }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-block mb-6"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span
                className="text-sm tracking-widest uppercase px-4 py-2 rounded-lg"
                style={{
                  color: 'var(--cabtale-soft-royal)',
                  backgroundColor: 'var(--cabtale-pure-white)',
                  border: '1px solid var(--cabtale-soft-royal)',
                }}
              >
                UNCOMPROMISED SAFETY
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <span style={{ color: 'var(--cabtale-charcoal)' }}>
                We Don't Just Drive.
              </span>
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(135deg, var(--cabtale-deep-navy), var(--cabtale-soft-royal))',
                }}
              >
                We Protect.
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-lg mb-8 leading-relaxed"
              style={{ color: 'var(--cabtale-muted-gray)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Every CabTale ride is monitored by our advanced safety stack. From dashcams detecting anomalies to real-time alerts sent to your loved ones, we ensure you are never alone on the road.
            </motion.p>

            {/* Features List */}
            <div className="space-y-4 mb-10">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4 group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all group-hover:scale-110"
                      style={{
                        backgroundColor: 'var(--cabtale-pure-white)',
                        boxShadow: '0 2px 8px rgba(56, 75, 112, 0.1)',
                      }}
                    >
                      <Icon size={20} style={{ color: 'var(--cabtale-soft-royal)' }} />
                    </div>
                    <span
                      className="text-base md:text-lg"
                      style={{ color: 'var(--cabtale-charcoal)' }}
                    >
                      {feature.text}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA Button */}
            <motion.button
              className="group px-8 py-4 rounded-xl transition-all hover:shadow-2xl flex items-center gap-3"
              style={{
                backgroundColor: 'var(--cabtale-deep-navy)',
                color: 'var(--cabtale-pure-white)',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-lg">Explore Safety Tech</span>
              <CheckCircle size={20} className="group-hover:rotate-12 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Right - Images */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Main Dashcam Image */}
              <motion.div
                className="relative rounded-3xl overflow-hidden shadow-2xl"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                <ImageWithFallback
                  src={Dashcam}
                  alt="AI-powered dashcam monitoring"
                  className="w-full h-auto"
                />
                {/* Badge on Image */}
                <div
                  className="absolute top-6 right-6 px-4 py-2 rounded-xl backdrop-blur-md flex items-center gap-2"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm" style={{ color: 'var(--cabtale-deep-navy)' }}>
                    Live Monitoring
                  </span>
                </div>
              </motion.div>

              {/* Overlapping Mobile App Image */}
              <motion.div
                className="absolute -bottom-8 -left-8 w-48 md:w-64 rounded-2xl overflow-hidden shadow-2xl border-4"
                style={{ borderColor: 'var(--cabtale-pure-white)' }}
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                whileInView={{ scale: 1, opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1764347923709-fc48487f2486?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcml2ZXIlMjBzYWZldHklMjBtb2JpbGUlMjBhcHB8ZW58MXx8fHwxNzY5MDkxODg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Safety alert mobile app"
                  className="w-full h-auto"
                />
                {/* Alert Badge */}
                <div
                  className="absolute top-4 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg backdrop-blur-md"
                  style={{
                    backgroundColor: 'rgba(239, 68, 68, 0.95)',
                    color: 'var(--cabtale-pure-white)',
                  }}
                >
                  <span className="text-xs">Safety Alert</span>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-20 h-20 rounded-2xl -z-10"
                style={{
                  background: 'linear-gradient(135deg, var(--cabtale-soft-royal), var(--cabtale-sky-accent))',
                }}
                animate={{
                  rotate: [0, 15, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <motion.div
                className="absolute -bottom-12 -right-12 w-32 h-32 rounded-full opacity-10 -z-10"
                style={{
                  backgroundColor: 'var(--cabtale-deep-navy)',
                }}
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
