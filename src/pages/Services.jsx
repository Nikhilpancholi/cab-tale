import { motion } from 'framer-motion';
import { Wifi, Shield, Video, Car, Plane, Mountain, MapPin, Clock, Users, Briefcase, CheckCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWtihFallback';

export function Services() {
  return (
    <div className="min-h-screen pt-25" style={{ backgroundColor: 'var(--cabtale-pure-white)' }}>
      {/* conver image */} 
      <div className="w-[95%] h-auto m-auto rounded-3xl overflow-hidden shadow-lg ">
              <ImageWithFallback
                src="/src/assets/service-cov.jpg"
                alt="CabTale Service-cov"
                className="w-full h-full object-cover"
                fallbackSrc="/assets/placeholder.jpg"
              />
            </div>
      {/* Hero Section */}
      <section className="py-24" style={{ backgroundColor: 'var(--cabtale-bg-gray)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="inline-block px-5 py-2 rounded-full mb-6"
              style={{
                backgroundColor: 'var(--cabtale-pale-ice)',
                color: 'var(--cabtale-soft-royal)',
              }}
            >
              OUR SERVICES
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6" style={{ color: 'var(--cabtale-deep-navy)' }}>
              Smart & Safe Cab Services
            </h1>
            <p className="text-xl" style={{ color: 'var(--cabtale-muted-gray)' }}>
              Experience India's first Wi-Fi + CCTV + AI Safety enabled cab service across Delhi NCR and outstation
              routes
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-24" style={{ backgroundColor: 'var(--cabtale-pure-white)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl mb-4" style={{ color: 'var(--cabtale-deep-navy)' }}>
              Choose Your Service
            </h2>
            <p className="text-lg" style={{ color: 'var(--cabtale-muted-gray)' }}>
              Premium cab services tailored to your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Car,
                title: 'City Rides',
                description: 'Safe and comfortable daily city commutes',
                features: ['Instant booking', 'Fixed pricing', 'Trusted drivers'],
              },
              {
                icon: Plane,
                title: 'Airport Transfers',
                description: 'On-time pickup and drop services',
                features: ['Flight tracking', '24/7 available', 'Meet & greet'],
              },
              {
                icon: Mountain,
                title: 'Outstation Trips',
                description: 'Long-distance travel with comfort',
                features: ['Round trip', 'Multi-city', 'Flexible timing'],
              },
              {
                icon: Briefcase,
                title: 'Corporate Travel',
                description: 'Professional business transportation',
                features: ['Monthly billing', 'Priority booking', 'Dedicated support'],
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-2xl transition-all hover:shadow-lg"
                style={{ backgroundColor: 'var(--cabtale-cloud-white)' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: 'var(--cabtale-pale-ice)' }}
                >
                  <service.icon size={32} style={{ color: 'var(--cabtale-soft-royal)' }} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl mb-3" style={{ color: 'var(--cabtale-deep-navy)' }}>
                  {service.title}
                </h3>
                <p className="mb-6 text-sm" style={{ color: 'var(--cabtale-muted-gray)' }}>
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm" style={{ color: 'var(--cabtale-charcoal)' }}>
                      <CheckCircle size={16} style={{ color: 'var(--cabtale-soft-royal)' }} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Features - First in India */}
      <section className="py-24" style={{ backgroundColor: 'var(--cabtale-bg-gray)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div
              className="inline-block px-5 py-2 rounded-full mb-6"
              style={{
                backgroundColor: 'var(--cabtale-pale-ice)',
                color: 'var(--cabtale-soft-royal)',
              }}
            >
              FIRST TIME IN INDIA
            </div>
            <h2 className="text-3xl md:text-4xl mb-4" style={{ color: 'var(--cabtale-deep-navy)' }}>
              Advanced Safety Features
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--cabtale-muted-gray)' }}>
              Industry-leading technology ensuring your safety on every ride
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Wifi,
                title: 'Wi-Fi + Live CCTV Link',
                description:
                  'Stay connected with complimentary Wi-Fi and share live CCTV footage with trusted contacts for maximum safety.',
              },
              {
                icon: Shield,
                title: 'AI-Powered Danger Detection',
                description:
                  'Smart AI alerts detect unusual situations, loud noises, or route deviations and instantly notify emergency contacts.',
              },
              {
                icon: Users,
                title: 'Verified CabTale Captains',
                description:
                  'All drivers undergo thorough background verification, training, and regular safety assessments for your peace of mind.',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-2xl"
                style={{ backgroundColor: 'var(--cabtale-pure-white)' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: 'var(--cabtale-pale-ice)' }}
                >
                  <feature.icon size={36} style={{ color: 'var(--cabtale-soft-royal)' }} strokeWidth={1.5} />
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

      {/* Vehicle Fleet */}
      <section className="py-24" style={{ backgroundColor: 'var(--cabtale-pure-white)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl mb-4" style={{ color: 'var(--cabtale-deep-navy)' }}>
              Our Premium Fleet
            </h2>
            <p className="text-lg" style={{ color: 'var(--cabtale-muted-gray)' }}>
              Choose from our range of well-maintained vehicles
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                type: 'Hatchback',
                price: '₹11/km',
                seats: '4 Seater',
                description: 'Compact, fuel-efficient, and perfect for city driving.',
                features: ['Great mileage', 'Easy city parking', 'Low maintenance', 'Smooth daily commute'],
              },
              {
                type: 'Sedan',
                price: '₹13/km',
                seats: '4 Seater',
                description: 'Stylish, spacious, and perfect for families or executives.',
                features: ['Spacious interiors', 'Comfortable ride', 'Premium features', 'Long distance travel'],
              },
              {
                type: 'SUV',
                price: '₹15/km',
                seats: '7 Seater',
                description: 'Rugged, powerful, and ready for every adventure.',
                features: ['All-terrain performance', 'Spacious seating', 'Advanced safety', 'Perfect for road trips'],
              },
            ].map((vehicle, index) => (
              <motion.div
                key={index}
                className="rounded-2xl overflow-hidden"
                style={{ backgroundColor: 'var(--cabtale-cloud-white)' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl mb-1" style={{ color: 'var(--cabtale-deep-navy)' }}>
                        {vehicle.type}
                      </h3>
                      <p className="text-sm" style={{ color: 'var(--cabtale-muted-gray)' }}>
                        {vehicle.seats}
                      </p>
                    </div>
                    <div
                      className="px-4 py-2 rounded-lg"
                      style={{ backgroundColor: 'var(--cabtale-pale-ice)', color: 'var(--cabtale-soft-royal)' }}
                    >
                      {vehicle.price}
                    </div>
                  </div>

                  <p className="mb-6" style={{ color: 'var(--cabtale-muted-gray)' }}>
                    {vehicle.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {vehicle.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-sm"
                        style={{ color: 'var(--cabtale-charcoal)' }}
                      >
                        <CheckCircle size={16} style={{ color: 'var(--cabtale-soft-royal)' }} />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Link to="/booking">
                    <motion.button
                      className="w-full py-3 rounded-xl"
                      style={{
                        backgroundColor: 'var(--cabtale-deep-navy)',
                        color: 'var(--cabtale-pure-white)',
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Book Now
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24" style={{ backgroundColor: 'var(--cabtale-bg-gray)' }}>
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
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Shield, label: 'Safe & Secure' },
              { icon: Clock, label: 'On-Time Service' },
              { icon: Star, label: '4.8+ Rating' },
              { icon: MapPin, label: 'Wide Coverage' },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-2xl text-center"
                style={{ backgroundColor: 'var(--cabtale-pure-white)' }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: 'var(--cabtale-pale-ice)' }}
                >
                  <item.icon size={28} style={{ color: 'var(--cabtale-soft-royal)' }} strokeWidth={1.5} />
                </div>
                <p style={{ color: 'var(--cabtale-deep-navy)' }}>{item.label}</p>
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
              Ready to Experience Smart-Safe Travel?
            </h2>
            <p className="text-lg mb-8" style={{ color: 'var(--cabtale-sky-accent)' }}>
              Book your ride now and travel with complete peace of mind
            </p>
            <Link to="/booking">
              <motion.button
                className="px-12 py-4 rounded-xl text-lg"
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
          </motion.div>
        </div>
      </section>
    </div>
  );
}
