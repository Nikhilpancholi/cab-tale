import { Shield, Clock, DollarSign, Users, Star, Award, Zap, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { ImageWithFallback } from './figma/ImageWtihFallback';

const features = [
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description: 'No hidden charges or surge pricing. Pay only what you see upfront.',
    color: 'var(--cabtale-soft-royal)',
  },
  {
    icon: Shield,
    title: 'Safety First',
    description: 'GPS tracking, emergency support, and background-verified drivers.',
    color: 'var(--cabtale-deep-navy)',
  },
  {
    icon: Users,
    title: 'Verified Drivers',
    description: 'Professionally trained and background-checked chauffeurs.',
    color: 'var(--cabtale-muted-steel)',
  },
  {
    icon: Clock,
    title: 'Always On Time',
    description: '98% on-time pickup rate with real-time tracking.',
    color: 'var(--cabtale-sky-accent)',
  },
  {
    icon: Star,
    title: 'Top Rated',
    description: '4.8 star average rating from 50,000+ satisfied customers.',
    color: '#F4D03F',
  },
  {
    icon: Award,
    title: 'Loyalty Rewards',
    description: 'Earn points on every ride and unlock exclusive benefits.',
    color: 'var(--cabtale-soft-royal)',
  },
];

export function Features() {
  return (
    <section id="about" className="py-24 relative overflow-hidden" style={{ backgroundColor: 'var(--cabtale-bg-gray)' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%">
          <pattern id="features-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <circle cx="30" cy="30" r="2" fill="var(--cabtale-deep-navy)" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#features-grid)" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image and Stats */}
          <motion.div 
            className="order-2 lg:order-1 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Main Image */}
              <div className="rounded-3xl overflow-hidden shadow-2xl relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1585828068970-7b75082485cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxoaSUyMGluZGlhJTIwZ2F0ZSUyMGNpdHl8ZW58MXx8fHwxNzY4NTQwMjIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Delhi cityscape"
                  className="w-full h-auto"
                />
              </div>

              {/* Floating Stats Cards */}
              <motion.div
                className="absolute -bottom-6 -right-6 rounded-2xl p-6 shadow-2xl"
                style={{ backgroundColor: 'var(--cabtale-pure-white)' }}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <div className="flex items-center gap-4">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{ 
                      background: 'linear-gradient(135deg, var(--cabtale-soft-royal), var(--cabtale-sky-accent))',
                    }}
                  >
                    <Zap size={28} style={{ color: 'var(--cabtale-pure-white)' }} />
                  </div>
                  <div>
                    <div className="text-3xl mb-1" style={{ color: 'var(--cabtale-deep-navy)' }}>
                      98%
                    </div>
                    <div className="text-sm" style={{ color: 'var(--cabtale-muted-gray)' }}>
                      On-Time Rate
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -top-6 -left-6 rounded-2xl p-4 shadow-2xl"
                style={{ backgroundColor: 'var(--cabtale-pure-white)' }}
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <div className="flex items-center gap-3">
                  <Heart size={24} style={{ color: '#F4D03F' }} fill="#F4D03F" />
                  <div>
                    <div className="text-xl" style={{ color: 'var(--cabtale-deep-navy)' }}>
                      50K+
                    </div>
                    <div className="text-xs" style={{ color: 'var(--cabtale-muted-gray)' }}>
                      Happy Riders
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div 
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ 
                backgroundColor: 'var(--cabtale-pale-ice)',
                color: 'var(--cabtale-deep-navy)',
              }}
            >
              <Award size={16} />
              <span className="text-sm">Why Choose Us</span>
            </div>

            <h2 className="mb-6 text-4xl md:text-5xl" style={{ color: 'var(--cabtale-deep-navy)' }}>
              Delhi NCR's Most Trusted Cab Service
            </h2>
            
            <p className="mb-8 text-lg leading-relaxed" style={{ color: 'var(--cabtale-muted-gray)' }}>
              With years of experience serving Delhi NCR, we've perfected the art of 
              reliable, comfortable, and safe transportation. Join thousands of satisfied 
              customers who trust CabTale for their daily commute.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="group p-5 rounded-2xl transition-all cursor-pointer border-2 border-transparent hover:border-opacity-100"
                  style={{ backgroundColor: 'var(--cabtale-pure-white)' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -4,
                    borderColor: feature.color,
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                      style={{ backgroundColor: `${feature.color}15` }}
                    >
                      <feature.icon size={20} style={{ color: feature.color }} />
                    </div>
                    <div>
                      <div className="mb-1" style={{ color: 'var(--cabtale-charcoal)' }}>
                        {feature.title}
                      </div>
                      <div className="text-xs leading-relaxed" style={{ color: 'var(--cabtale-muted-gray)' }}>
                        {feature.description}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              className="mt-8 px-8 py-4 rounded-xl transition-all"
              style={{
                background: 'linear-gradient(135deg, var(--cabtale-deep-navy), var(--cabtale-soft-royal))',
                color: 'var(--cabtale-pure-white)',
              }}
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(56, 75, 112, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More About Us
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
