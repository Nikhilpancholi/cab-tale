import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { BookingForm } from './BookingFrom';
import { ImageWithFallback } from './figma/ImageWtihFallback';
import image from '../assets/image.png';
import { SafetyFeatures } from './SafetyFeature';

export function Hero() {
  return (
    <section id="home" className="relative pt-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-20"
          style={{ backgroundColor: 'var(--cabtale-soft-royal)' }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-1/3 -left-20 w-72 h-72 rounded-full opacity-10"
          style={{ backgroundColor: 'var(--cabtale-deep-navy)' }}
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ 
                backgroundColor: 'var(--cabtale-pale-ice)',
                color: 'var(--cabtale-deep-navy)',
              }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'var(--cabtale-soft-royal)' }} />
              <span className="text-sm">#1 Safe Outstation Cabs in Delhi/NCR</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
              <span style={{ color: 'var(--cabtale-deep-navy)' }}>Your Journey,</span>
              <br />
              <span 
                className="bg-clip-text text-transparent"
                style={{ 
                  backgroundImage: 'linear-gradient(135deg, var(--cabtale-soft-royal), var(--cabtale-deep-navy))',
                }}
              >
                Our Priority
              </span>
            </h1>

            <p className="text-lg md:text-xl mb-8 leading-relaxed" style={{ color: 'var(--cabtale-muted-gray)' }}>
              Experience premium cab services across Delhi NCR with professional drivers, 
              comfortable rides, and transparent pricing. Book in seconds, travel in comfort.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                className="group px-8 py-4 rounded-xl transition-all hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2"
                style={{
                  background: 'linear-gradient(135deg, var(--cabtale-deep-navy), var(--cabtale-soft-royal))',
                  color: 'var(--cabtale-pure-white)',
                }}
              >
                <span>Book Your Ride</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              {/* <button
                className="px-8 py-4 rounded-xl border-2 transition-all hover:shadow-lg flex items-center justify-center gap-2"
                style={{
                  borderColor: 'var(--cabtale-deep-navy)',
                  color: 'var(--cabtale-deep-navy)',
                }}
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'var(--cabtale-pale-ice)' }}
                >
                  <Play size={16} fill="currentColor" />
                </div>
                <span>Watch Demo</span>
              </button> */}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: '50K+', label: 'Happy Riders' },
                { value: '4.8★', label: 'User Rating' },
                { value: '24/7', label: 'Support' },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-2xl md:text-3xl mb-1" style={{ color: 'var(--cabtale-deep-navy)' }}>
                    {stat.value}
                  </div>
                  <div className="text-sm" style={{ color: 'var(--cabtale-muted-gray)' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Hero Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl    lg:w-[90%]  lg:ml-auto">
              <ImageWithFallback
                src={image}
                alt="Premium cab service"
                className="w-full h-auto"
              />
              {/* Floating Card */}
              <motion.div
                className="absolute top-6 left-6 right-6 rounded-2xl p-6 shadow-2xl backdrop-blur-md"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm mb-1" style={{ color: 'var(--cabtale-muted-gray)' }}>
                      Current Offer
                    </p>
                    <p className="text-xl" style={{ color: 'var(--cabtale-deep-navy)' }}>
                      30% OFF First Ride
                    </p>
                  </div>
                  <div 
                    className="px-6 py-3 rounded-xl"
                    style={{
                      background: 'linear-gradient(135deg, var(--cabtale-soft-royal), var(--cabtale-sky-accent))',
                      color: 'var(--cabtale-pure-white)',
                    }}
                  >
                    Use: NEW30
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            {/* <motion.div
              className="absolute -top-6 -right-6 w-24 h-24 rounded-2xl"
              style={{ 
                background: 'linear-gradient(135deg, var(--cabtale-soft-royal), var(--cabtale-sky-accent))',
              }}
              animate={{
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            /> */}
            <motion.div
              className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full"
              style={{ 
                background: 'linear-gradient(135deg, var(--cabtale-deep-navy), var(--cabtale-dark-navy))',
                opacity: 0.1,
              }}
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="relative -mt-12 z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <SafetyFeatures />
      </motion.div>  

      {/* Wavy Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="var(--cabtale-bg-gray)" fillOpacity="0.5"/>
        </svg>
      </div>

    </section>
  );
}
