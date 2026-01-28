import { motion } from 'framer-motion';
import { Wifi, Shield, Users, Award, Target, TrendingUp, CheckCircle, Heart, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWtihFallback';
import aboutPageImg from "../assets/about-page.jpg"; 
import aboutSection from  "../assets/about-section.webp"


export function About() {
  return (
    <div className="min-h-screen object-contain pt-25" style={{ backgroundColor: 'var(--cabtale-pure-white)' }}>

      {/* Hero Section */}
      <section className="py-24" style={{ backgroundColor: 'var(--cabtale-bg-gray)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div
                className="inline-block px-5 py-2 rounded-full mb-6"
                style={{
                  backgroundColor: 'var(--cabtale-pale-ice)',
                  color: 'var(--cabtale-soft-royal)',
                }}
              >
                ABOUT CABTALE
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6" style={{ color: 'var(--cabtale-deep-navy)' }}>
                India's First Smart-Safe Cab Service
              </h1>
              <p className="text-xl mb-8 leading-relaxed" style={{ color: 'var(--cabtale-muted-gray)' }}>
                Revolutionizing cab services with cutting-edge AI technology, real-time safety features, and
                unmatched comfort across Delhi NCR and beyond.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/booking">
                  <motion.button
                    className="px-8 py-4 rounded-xl"
                    style={{
                      backgroundColor: 'var(--cabtale-deep-navy)',
                      color: 'var(--cabtale-pure-white)',
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Book a Ride
                  </motion.button>
                </Link>
                <Link to="/driver-onboarding">
                  <motion.button
                    className="px-8 py-4 rounded-xl border-2"
                    style={{
                      borderColor: 'var(--cabtale-deep-navy)',
                      color: 'var(--cabtale-deep-navy)',
                      backgroundColor: 'transparent',
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Become a Driver
                  </motion.button>
                </Link>
              </div>
            </motion.div>

        

            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {[
                { value: '500+', label: 'Premium Cabs' },
                { value: '50K+', label: 'Happy Customers' },
                { value: '1M+', label: 'Safe Trips Completed' },
                { value: '4.8/5', label: 'Average Rating' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="p-8 rounded-2xl text-center"
                  style={{ backgroundColor: 'var(--cabtale-cloud-white)' }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div className="text-4xl mb-2" style={{ color: 'var(--cabtale-soft-royal)' }}>
                    {stat.value}
                  </div>
                  <div className="text-sm" style={{ color: 'var(--cabtale-muted-gray)' }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* cover image section - div should have rounded corners margins */}
      <section className='px-4 lg:px-30 pt-24' >
        <div className="m-auto rounded-3xl overflow-hidden shadow-lg ">
          <ImageWithFallback
            src={aboutPageImg}
            alt="CabTale About Cover"
            className="w-full h-full object-cover"
          />
        </div>
      </section>


      {/* Our Story */}
      <section className="py-24" style={{ backgroundColor: 'var(--cabtale-pure-white)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl mb-6" style={{ color: 'var(--cabtale-deep-navy)' }}>
                Our Story
              </h2>
              <p className="text-lg mb-6 leading-relaxed" style={{ color: 'var(--cabtale-muted-gray)' }}>
                At CabTale, your safety is our priority. Our cabs come equipped with advanced dashcams that detect
                loud noises or unusual vibrations and instantly alert trusted contacts selected by you on their
                phones.
              </p>
              <p className="text-lg mb-6 leading-relaxed" style={{ color: 'var(--cabtale-muted-gray)' }}>
                This ensures that in case of any disturbance or emergency, help is quickly informed, making every ride
                safer, more secure, and worry-free. We're committed to setting new standards in passenger safety
                across India.
              </p>
              <div className="flex items-center gap-4">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: 'var(--cabtale-pale-ice)' }}
                >
                  <Heart size={28} style={{ color: 'var(--cabtale-soft-royal)' }} />
                </div>
                <div>
                  <div className="text-lg" style={{ color: 'var(--cabtale-deep-navy)' }}>
                    Customer-First Approach
                  </div>
                  <div className="text-sm" style={{ color: 'var(--cabtale-muted-gray)' }}>
                    Your safety and comfort drive everything we do
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-1 gap-6">
                {[
                  {
                    icon: Wifi,
                    title: 'Wi-Fi + Live CCTV Link',
                    description: 'Stay connected and share live footage with contacts',
                  },
                  {
                    icon: Shield,
                    title: 'AI Security Alerts',
                    description: 'Smart detection of unusual situations and instant notifications',
                  },
                  {
                    icon: Users,
                    title: 'Verified Captains',
                    description: 'Thoroughly verified and trained professional drivers',
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 p-6 rounded-2xl"
                    style={{ backgroundColor: 'var(--cabtale-bg-gray)' }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: 'var(--cabtale-pale-ice)' }}
                    >
                      <feature.icon size={24} style={{ color: 'var(--cabtale-soft-royal)' }} />
                    </div>
                    <div>
                      <h3 className="text-lg mb-1" style={{ color: 'var(--cabtale-deep-navy)' }}>
                        {feature.title}
                      </h3>
                      <p className="text-sm" style={{ color: 'var(--cabtale-muted-gray)' }}>
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* section with right side image and left side text content. section background is   */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:p-4 rounded-3xl" style={{ backgroundColor: 'var(--cabtale-bg-gray)' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={aboutSection}
                alt="CabTale Safety Features"
                className="w-full h-auto rounded-3xl shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-4xl mb-6" style={{ color: 'var(--cabtale-deep-navy)' }}>
                Advanced Safety Features
              </h2>
              <p className="text-lg font-medium mb-6 leading-relaxed" style={{ color: 'var(--cabtale-muted-gray)' }}>
                Our AI-powered safety systems include real-time monitoring, emergency alerts, and live CCTV feeds
                accessible to your trusted contacts. This ensures that help is always just a click away, providing
                unparalleled peace of mind during your journeys.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--cabtale-muted-gray)' }}>
                With CabTale, experience a new standard of safety and security on the road, making every ride not just
                comfortable but truly safe.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24" style={{ backgroundColor: 'var(--cabtale-bg-gray)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Target,
                title: 'Our Mission',
                description:
                  'To revolutionize cab services in India by integrating cutting-edge AI technology with traditional transportation, ensuring every passenger travels with complete peace of mind and safety.',
              },
              {
                icon: Eye,
                title: 'Our Vision',
                description:
                  "To become India's most trusted smart-safe cab service, setting new standards for passenger safety and comfort while expanding across all major cities and routes nationwide.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-10 rounded-2xl"
                style={{ backgroundColor: 'var(--cabtale-pure-white)' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: 'var(--cabtale-pale-ice)' }}
                >
                  <item.icon size={32} style={{ color: 'var(--cabtale-soft-royal)' }} />
                </div>
                <h3 className="text-2xl mb-4" style={{ color: 'var(--cabtale-deep-navy)' }}>
                  {item.title}
                </h3>
                <p className="text-lg leading-relaxed" style={{ color: 'var(--cabtale-muted-gray)' }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose CabTale */}
      <section className="py-24" style={{ backgroundColor: 'var(--cabtale-pure-white)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl mb-4" style={{ color: 'var(--cabtale-deep-navy)' }}>
              Why Choose CabTale?
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--cabtale-muted-gray)' }}>
              Experience the difference with India's most advanced cab service
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Maximum Safety',
                description:
                  'AI-powered safety systems with live CCTV monitoring and instant emergency alerts for complete peace of mind.',
              },
              {
                icon: Users,
                title: 'Professional Drivers',
                description:
                  'Thoroughly verified, trained, and courteous captains dedicated to providing excellent service.',
              },
              {
                icon: Award,
                title: 'Premium Comfort',
                description:
                  'Well-maintained fleet of comfortable vehicles with modern amenities for a pleasant journey.',
              },
              {
                icon: CheckCircle,
                title: 'Transparent Pricing',
                description:
                  'No hidden charges or surge pricing. Fair and transparent rates for all your journeys.',
              },
              {
                icon: Wifi,
                title: 'Free Wi-Fi',
                description:
                  'Stay connected during your ride with complimentary high-speed Wi-Fi in all our cabs.',
              },
              {
                icon: TrendingUp,
                title: '24/7 Support',
                description:
                  'Round-the-clock customer support team ready to assist you whenever you need help.',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-2xl"
                style={{ backgroundColor: 'var(--cabtale-cloud-white)' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: 'var(--cabtale-pale-ice)' }}
                >
                  <feature.icon size={28} style={{ color: 'var(--cabtale-soft-royal)' }} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl mb-3" style={{ color: 'var(--cabtale-deep-navy)' }}>
                  {feature.title}
                </h3>
                <p className="leading-relaxed" style={{ color: 'var(--cabtale-muted-gray)' }}>
                  {feature.description}
                </p>
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
            <h2 className="text-3xl md:text-4xl mb-6" style={{ color: 'var(--cabtale-pure-white)' }}>
              Experience Smart-Safe Travel Today
            </h2>
            <p className="text-lg mb-8" style={{ color: 'var(--cabtale-sky-accent)' }}>
              Join thousands who trust CabTale for their daily commute and outstation journeys
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/booking">
                <motion.button
                  className="px-10 py-4 rounded-xl text-lg"
                  style={{
                    backgroundColor: 'var(--cabtale-soft-royal)',
                    color: 'var(--cabtale-pure-white)',
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Your Ride
                </motion.button>
              </Link>
              <Link to="/driver-onboarding">
                <motion.button
                  className="px-10 py-4 rounded-xl text-lg border-2"
                  style={{
                    borderColor: 'var(--cabtale-sky-accent)',
                    color: 'var(--cabtale-sky-accent)',
                    backgroundColor: 'transparent',
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Become a Driver
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
