import { motion } from 'framer-motion';

import sedanImg from '../assets/cars-sedan.jpeg';
import hatchbackImg from '../assets/cars-hatchback.jpeg';
import suvImg from '../assets/cars-suv.jpeg';
import rideSafeImg from '../assets/cars-ridesafe.jpeg';

const fleetCategories = [
  {
    name: 'Hatchback',
    price: '₹11/km',
    description: 'Comfortable rides for 4 passengers with ample luggage space.',
    carImage: hatchbackImg,
  },
  {
    name: 'Sedan',
    price: '₹13/km',
    description: 'Economical choice perfect for city travels and short trips.',
    carImage: sedanImg,
  },
  {
    name: 'SUV (7-Seater)',
    price: '₹15/km',
    description: 'Spacious luxury for 6-7 passengers with premium comfort.',
    carImage: suvImg,
  },
  {
  name: 'Ride Safe',
  price: '₹17/km',
  description: 'AI powered safety features for a secure journey.',
  carImage: rideSafeImg,
  },
];

export function Fleet() {
  return (
    <section id="fleet" className="py-24 relative overflow-hidden" style={{ backgroundColor: 'var(--cabtale-pure-white)' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl" style={{ color: 'var(--cabtale-deep-navy)' }}>
            Our Fleet
          </h2>
        </motion.div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {fleetCategories.map((category, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-2xl text-center transition-all hover:shadow-lg cursor-pointer group"
              style={{ backgroundColor: 'var(--cabtale-bg-gray)' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              {/* Car Image Container */}
              <div 
                className="w-full h-28 mb-6 rounded-2xl overflow-hidden transition-transform group-hover:scale-105"
                style={{ 
                  backgroundColor: 'var(--cabtale-pure-white)',
                }}
              >
                <img 
                  src={category.carImage} 
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Category Name */}
              <h3 className="mb-2 text-xl" style={{ color: 'var(--cabtale-deep-navy)' }}>
                {category.name}
              </h3>

              {/* Price */}
              <div 
                className="mb-4 text-2xl"
                style={{ color: 'var(--cabtale-soft-royal)' }}
              >
                {category.price}
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed" style={{ color: 'var(--cabtale-muted-gray)' }}>
                {category.description}
              </p>

              {/* Book Button */}
              <motion.button
                className="mt-6 w-full px-6 py-3 rounded-xl transition-all"
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
                Book Now
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-lg mb-6" style={{ color: 'var(--cabtale-muted-gray)' }}>
            All vehicles are sanitized, air-conditioned, and equipped with GPS tracking
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm" style={{ color: 'var(--cabtale-charcoal)' }}>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>Professional Drivers</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>24/7 Service</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>Clean & Sanitized</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>GPS Enabled</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
