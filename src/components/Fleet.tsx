import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWtihFallback';

const categories = ['ALL', 'SEDAN', 'LUXURY', 'LIMOUSINE', 'SUV'];

const vehicles = [
  {
    name: 'Mercedes Benz S-class',
    price: '₹32/km',
    category: 'LUXURY',
    image: 'https://images.unsplash.com/photo-1758216383800-7023ee8ed42b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzZWRhbiUyMGNhcnxlbnwxfHx8fDE3Njg0NzczNTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    name: 'Cadillac Escalade',
    price: '₹45/km',
    category: 'SUV',
    image: 'https://images.unsplash.com/photo-1767749995450-7b63ab7cd4fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzdXYlMjB2ZWhpY2xlfGVufDF8fHx8MTc2ODQ2MTA3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    name: 'Lincoln Continental',
    price: '₹55/km',
    category: 'LIMOUSINE',
    image: 'https://images.unsplash.com/photo-1612382550682-a1b3044e0a8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaW1vdXNpbmUlMjBsdXh1cnklMjBjYXJ8ZW58MXx8fHwxNzY4NTU3NjY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    name: 'BMW 7 Series',
    price: '₹28/km',
    category: 'SEDAN',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
];

export function Fleet() {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const filteredVehicles = activeCategory === 'ALL' 
    ? vehicles 
    : vehicles.filter(v => v.category === activeCategory);

  return (
    <section id="fleet" className="py-24 relative overflow-hidden" style={{ backgroundColor: 'var(--cabtale-pure-white)' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Number and Title */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* <div className="text-6xl md:text-8xl mb-4 opacity-20" style={{ color: 'var(--cabtale-muted-gray)' }}>
            02
          </div> */}
          <h2 className="text-4xl md:text-5xl" style={{ color: 'var(--cabtale-deep-navy)' }}>
            Our fleet
          </h2>
        </motion.div>

        {/* Category Tabs */}
        <motion.div 
          className="flex gap-3 mb-12 overflow-x-auto pb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className="px-6 py-3 rounded-lg whitespace-nowrap transition-all"
              style={{
                backgroundColor: activeCategory === category 
                  ? 'var(--cabtale-deep-navy)' 
                  : 'var(--cabtale-cloud-white)',
                color: activeCategory === category 
                  ? 'var(--cabtale-pure-white)' 
                  : 'var(--cabtale-charcoal)',
              }}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Vehicle Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {filteredVehicles.map((vehicle, index) => (
            <motion.div
              key={index}
              className="group relative rounded-3xl overflow-hidden"
              style={{ backgroundColor: 'var(--cabtale-cloud-white)' }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="p-6">
                {/* Vehicle Info */}
                <div className="mb-4">
                  <h3 className="text-xl md:text-2xl mb-1" style={{ color: 'var(--cabtale-deep-navy)' }}>
                    {vehicle.name}
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--cabtale-muted-gray)' }}>
                    {vehicle.price}
                  </p>
                </div>

                {/* Vehicle Image */}
                <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-4">
                  <ImageWithFallback
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Book Now Button */}
                <div className="flex justify-end">
                  <motion.button
                    className="px-6 py-3 rounded-xl flex items-center gap-2 transition-all"
                    style={{
                      backgroundColor: 'var(--cabtale-soft-royal)',
                      color: 'var(--cabtale-deep-navy)',
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Book now</span>
                    <ArrowRight size={18} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Footer */}
        <motion.div 
          className="flex items-center justify-between flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center gap-4">
            <button 
              className="w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all hover:scale-110"
              style={{ borderColor: 'var(--cabtale-soft-border)' }}
            >
              <ChevronLeft size={20} style={{ color: 'var(--cabtale-charcoal)' }} />
            </button>
            <button 
              className="w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all hover:scale-110"
              style={{ borderColor: 'var(--cabtale-soft-border)' }}
            >
              <ChevronRight size={20} style={{ color: 'var(--cabtale-charcoal)' }} />
            </button>
            <span className="text-sm" style={{ color: 'var(--cabtale-muted-gray)' }}>
              all vehicles
            </span>
          </div>

          {/* <motion.button
            className="px-8 py-3 rounded-xl transition-all"
            style={{
              backgroundColor: '#F4D03F',
              color: 'var(--cabtale-deep-navy)',
            }}
            whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(244, 208, 63, 0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            Overview
          </motion.button> */}
        </motion.div>

        {/* Features Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {[
            {
              title: 'Premium Comfort',
              description: 'Luxury interiors with climate control',
              icon: '✨',
            },
            {
              title: 'Professional Drivers',
              description: 'Experienced & verified chauffeurs',
              icon: '👔',
            },
            {
              title: 'Latest Models',
              description: 'Vehicles less than 3 years old',
              icon: '🚗',
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-2xl"
              style={{ backgroundColor: 'var(--cabtale-bg-gray)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h4 className="text-lg mb-2" style={{ color: 'var(--cabtale-deep-navy)' }}>
                {feature.title}
              </h4>
              <p className="text-sm" style={{ color: 'var(--cabtale-muted-gray)' }}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
